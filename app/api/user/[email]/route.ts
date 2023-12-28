import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { email: string } }
) {
  try {
    const { email } = params;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return NextResponse.json(
      {
        user,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong in user registration process" },
      { status: 500 }
    );
  }
}
