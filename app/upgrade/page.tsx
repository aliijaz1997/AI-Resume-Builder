"use client";
import React, { useEffect, useState } from "react";
import { pricingOptions } from "../../components/pricing/pricingOptions";
import PricingCard from "../../components/pricing/pricingCard";
import { useSession } from "next-auth/react";
import { User } from "../../utils/types/user";
import Loader from "../../components/Loader/loader";

const Upgrade = () => {
  const { data: user } = useSession();
  const [dbUser, setDbUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.user) {
      fetch(`/api/user/${user.user?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const { user } = await res.json();
          if (user) {
            setDbUser(user);
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error(error);
        });
    }
  }, [user?.user]);

  return (
    <section className="bg-white dark:bg-gray-900">
      {loading && <Loader />}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12 bg-blue-900 rounded-full p-2 pt-5">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">
            Designed for recruitment purposes like yours
          </h2>
          <p className="mb-5 font-light text-gray-100 sm:text-xl dark:text-gray-400">
            Here at resume builder we focus on markets where technology,
            innovation, and capital can unlock long-term value and allow easy
            recruitment.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {pricingOptions.map((option, index) => (
            <PricingCard
              key={index}
              {...option}
              plan={dbUser?.paymentPlan as unknown as string}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
