import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { FormValues } from "../../../utils/types/formValues";
import { NextApiRequest } from "next";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      title,
      email,
      phone,
      address,
      education,
      workExperience,
      skills,
      achievements,
      userEmail,
    } = body as unknown as FormValues & { userEmail: string };

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const createdResume = await prisma.resume.create({
      data: {
        name,
        title,
        email,
        phone,
        address,
        userId: user.id,
        education: {
          createMany: {
            data: education.map((edu) => ({
              school: edu.school,
              degree: edu.degree,
              startDate: edu.startDate,
              endDate: edu.endDate,
            })),
          },
        },
        workExperience: {
          createMany: {
            data: workExperience.map((exp) => ({
              company: exp.company,
              title: exp.title,
              startDate: exp.startDate,
              endDate: exp.endDate,
              description: exp.description,
            })),
          },
        },
        skills: {
          set: skills,
        },
        achievements: {
          set: achievements,
        },
      },
      include: {
        education: true,
        workExperience: true,
      },
    });

    return NextResponse.json(
      {
        message: "Resume created successfully",
        createdResume,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating resume:", error);
    NextResponse.json({ error: "Could not create resume" }, { status: 500 });
  }
}

export async function GET(request: NextApiRequest) {
  const userEmail = request.url?.split("?")[1];
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const resumes = await prisma.resume.findMany({
      where: { userId: user.id },
      include: { education: true, workExperience: true },
    });
    return NextResponse.json(
      {
        resumes,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting resume list:", error);
    NextResponse.json({ error: "Could not get resumes" }, { status: 500 });
  }
}
