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

    if (subscriptionType === "premium") {
      priceId = process.env.PREMIUM_PRICE_ID as string;
    } else {
      priceId = process.env.STANDARD_PRICE_ID as string;
    }
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    console.log(email, stripeTokenId, subscriptionType, priceId);
    if (!user)
      return NextResponse.json(
        {
          message: "No user exist with this ID",
        },
        {
          status: 404,
        }
      );
    if (!user?.customerId) {
      const newCustomer = await stripe.customers.create({
        email: user.email,
        description: `Plan of customer ${user.name}`,
        payment_method: stripeTokenId,
      });
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          customerId: newCustomer.id,
        },
      });
      const paymentMethods = await stripe.paymentMethods.list({
        customer: newCustomer.id,
        type: "card",
      });
      console.log(paymentMethods.data, "Inside");
      await stripe.customers.update(newCustomer.id, {
        invoice_settings: {
          default_payment_method: stripeTokenId,
        },
      });

      const subscriptions = await stripe.subscriptions.list({
        customer: newCustomer.id,
        price: priceId,
      });
      if (subscriptions.data.length) {
        console.log(subscriptions.data, "SUBSCRIPTION DATA");
        return NextResponse.json(
          { message: "You are already subscribed to the current plan" },
          { status: 400 }
        );
      }

      const subscription = await stripe.subscriptions.create({
        customer: newCustomer.id,
        items: [
          {
            price: priceId,
          },
        ],
      });

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          paymentPlan: subscriptionType,
        },
      });

      return NextResponse.json(
        {
          subscription,
          message: "The plan is successfully updated",
        },
        { status: 201 }
      );
    }
    console.log("Pre payment method");
    const paymentMethods = await stripe.paymentMethods.list({
      customer: user.customerId,
      type: "card",
    });
    if (!paymentMethods.data.length) {
      const paymentMethod = await stripe.paymentMethods.attach(stripeTokenId, {
        customer: user.customerId,
      });
      const update = await stripe.customers.update(user.customerId, {
        invoice_settings: {
          default_payment_method: stripeTokenId,
        },
      });
      console.log(paymentMethod, update);
    }

    console.log({
      paymentMethods: paymentMethods.data,
      customerId: user.customerId,
      priceId,
    });

    const subscriptions = await stripe.subscriptions.list();
    if (subscriptions.data.length) {
      return NextResponse.json(
        { message: "You are already subscribed to the current plan" },
        { status: 400 }
      );
    }

    const subscription = await stripe.subscriptions.create({
      customer: user.customerId,
      items: [
        {
          price: priceId,
        },
      ],
    });

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        paymentPlan: subscriptionType,
      },
    });

    return NextResponse.json(
      {
        subscription,
        message: "User is successfully created",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong in subscription process" },
      { status: 500 }
    );
  }
}
