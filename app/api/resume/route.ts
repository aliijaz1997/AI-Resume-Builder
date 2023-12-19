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
      educationCustomName,
      experienceCustomName,
      address,
      education,
      workExperience,
      custom,
      userEmail,
      id,
      type,
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
        id,
        name,
        title,
        email,
        phone,
        type,
        educationCustomName,
        experienceCustomName,
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
        custom: {
          createMany: {
            data: custom.map((c) => ({
              name: c.name,
              items: { set: c.items },
            })),
          },
        },
      },
      include: {
        education: true,
        workExperience: true,
        custom: true,
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
      include: { education: true, workExperience: true, custom: true },
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

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      name,
      title,
      email,
      phone,
      address,
      education,
      educationCustomName,
      experienceCustomName,
      workExperience,
      custom,
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

    const updatedResume = await prisma.resume.update({
      where: {
        id,
      },
      data: {
        name,
        title,
        email,
        phone,
        educationCustomName,
        experienceCustomName,
        address,
        education: {
          updateMany: {
            where: {
              resumeId: id,
            },
            data: education.map((edu) => ({
              school: edu.school,
              degree: edu.degree,
              startDate: edu.startDate,
              endDate: edu.endDate,
            })),
          },
        },
        workExperience: {
          updateMany: {
            where: {
              resumeId: id,
            },
            data: workExperience.map((exp) => ({
              company: exp.company,
              title: exp.title,
              startDate: exp.startDate,
              endDate: exp.endDate,
              description: exp.description,
            })),
          },
        },
        custom: {
          updateMany: {
            where: {
              resumeId: id,
            },
            data: custom.map((c) => ({
              name: c.name,
              items: { set: c.items },
            })),
          },
        },
      },
      include: {
        education: true,
        workExperience: true,
      },
    });

    return NextResponse.json(
      {
        message: "Resume updated successfully",
        updatedResume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating resume:", error);
    NextResponse.json({ error: "Could not update resume" }, { status: 500 });
  }
}
