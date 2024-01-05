"use client";
import Image from "next/image";
import templates from "../../components/Template/templates.json";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { User } from "../../utils/types/user";
import Loader from "../../components/Loader/loader";
import Hero from "../../components/Template/components/hero";

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
        template.variant === "free")
    ) {
      router.push(`/createResume/${template.name.toLowerCase()}/${v4()}`);
    } else {
      router.push("/upgrade");
    }
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Hero />
      <div className="p-4 max-w-screen-xl mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white ">
          {loading && <Loader />}
          {templates.map((template, index) => (
            <div key={index}>
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-md shadow-gray-500 relative group"
                style={{ height: "400px", width: "300px" }}
              >
                <div className="absolute inset-0 overflow-hidden group-hover:brightness-50">
                  <Image
                    src={template.image}
                    alt={template.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-cover transition-all duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <div className="flex flex-col items-center">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mb-2">
                      Preview
                    </button>
                    <button
                      onClick={() => handleTemplateClick(template)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                    >
                      Use Template
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold text-center mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-center text-gray-500 font-medium">
                  {template.variant.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates;
