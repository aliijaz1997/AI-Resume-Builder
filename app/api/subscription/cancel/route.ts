import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});
export async function POST(req: Request) {
  try {
    const { email, stripeTokenId, subscriptionType } = await req.json();
    let priceId = "";

    if (subscriptionType === "Premium") {
      priceId = process.env.PREMIUM_PRICE_ID as string;
    } else {
      priceId = process.env.STANDARD_PRICE_ID as string;
    }
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json(
        {
          message: "No user exist with this ID",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong in subscription process" },
      { status: 500 }
    );
  }
}
