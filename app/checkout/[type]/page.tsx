"use client";

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/payment/checkoutForm";
import { pricingOptions } from "../../../components/pricing/pricingOptions";

const stripeTestPromise = loadStripe(process.env.NEXT_PUBLIC_KEY as string);

export default function Payment({ params }: { params: { type: string } }) {
  const { type } = params;

  const planForInvoice = pricingOptions.find(
    (option) => option.title.toLowerCase() === type.toLowerCase()
  );
  return (
    <Elements stripe={stripeTestPromise}>
      {planForInvoice && <CheckoutForm plan={planForInvoice} />}
    </Elements>
  );
}
