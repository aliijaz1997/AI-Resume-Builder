import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const resume = await prisma.resume.findUnique({
      where: { id },
      include: { education: true, workExperience: true },
    });
    if (!resume)
      return NextResponse.json({ message: "No resume" }, { status: 404 });
    return NextResponse.json(
      {
        resume,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting resume:", error);
    return NextResponse.json(
      { error: "Could not get resume" },
      { status: 500 }
    );
  }
}
