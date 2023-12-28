"use client";
import Image from "next/image";
import templates from "../../components/Template/templates.json";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { User } from "../../utils/types/user";
import Loader from "../../components/Loader/loader";

const Templates = () => {
  const { data: user } = useSession();
  const [dbUser, setDbUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

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

  const handleTemplateClick = (template: {
    name: any;
    image?: string;
    variant?: string;
  }) => {
    if (
      dbUser &&
      (template.variant === `${dbUser.paymentPlan}`.toLowerCase() ||
        template.variant === "basic")
    ) {
      router.push(`/createResume/${template.name.toLowerCase()}/${v4()}`);
    } else {
      router.push("/upgrade");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4">
      {loading && <Loader />}
      {templates.map((template, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden hover:shadow-lg cursor-pointer"
          onClick={() => handleTemplateClick(template)}
        >
          <div className="relative h-60">
            <Image
              src={template.image}
              alt={template.name}
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-center mb-2">
              {template.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              {template.variant}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Templates;
