"use client";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import PricingCard from "../pricing/pricingCard";
import { useSession } from "next-auth/react";
import Loader from "../Loader/loader";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

export default function CheckoutForm({
  plan,
}: {
  plan: {
    title: string;
    price: string;
    features: string[];
    buttonText?: string;
  };
}) {
  const [loading, setLoading] = useState(false);
  const { data: authUser } = useSession();
  const stripe = useStripe();
  const elements = useElements();
  const { toast } = useToast();
  const router = useRouter();

  const { features, price, title } = plan;

  const handlePay = async () => {
    setLoading(true);
    const { error, paymentMethod } = await stripe!.createPaymentMethod({
      type: "card",
      card: elements!.getElement(CardElement)!,
    });
    if (paymentMethod) {
      const stripeTokenId = paymentMethod!.id!;
      console.log(stripeTokenId, error);
      if (loading) return <Loader />;
      if (!error) {
        console.log("Backend API Zone");
        const response = await fetch("/api/subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: authUser?.user?.email,
            stripeTokenId,
            subscriptionType: title,
          }),
        });
        if (response.status === 201 || response.status === 200) {
          setLoading(false);
          toast({
            title: "Payment Success",
          });
          router.push("/templates");
        } else {
          setLoading(false);
          console.log(response);
          toast({ title: "Failed subscription. Please try again!" });
        }
      } else {
        console.log({ error });
      }
    } else {
      toast({ title: "Invalid card please try again" });
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base"></div>
      </div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <PricingCard title={title} features={features} price={price} />
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Subscription Details</p>
          <p className="text-gray-400">Subscribe to the selected plan</p>
          <div className="">
            <label className="mt-4 mb-2 block text-sm font-medium">Email</label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Card Details
            </label>
            <div>
              <CardElement
                options={{
                  iconStyle: "solid",
                  hidePostalCode: true,
                  style: {
                    base: {
                      iconColor: "blue",
                      color: "black",
                      fontSize: "16px",
                      fontFamily: '"Open Sans", sans-serif',
                      fontSmoothing: "antialiased",
                    },
                    invalid: {
                      color: "red",
                      ":focus": {
                        color: "#303238",
                      },
                    },
                  },
                }}
              />
            </div>
            <label className="mt-4 mb-2 block text-sm font-medium">
              Address (Optional)
            </label>
            <div className="flex flex-col sm:flex-row">
              <div className="relative flex-shrink-0 sm:w-7/12">
                <input
                  type="text"
                  id="billing-address"
                  name="billing-address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Street Address"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <img
                    className="h-4 w-4 object-contain"
                    src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                    alt=""
                  />
                </div>
              </div>
              <select
                name="billing-state"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="State">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="ZIP"
              />
            </div>
          </div>
          <button
            onClick={handlePay}
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white"
          >
            Pay {price} to subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
