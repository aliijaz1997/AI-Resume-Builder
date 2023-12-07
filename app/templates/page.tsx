"use client";

import Image from "next/image";
import templates from "../../components/Template/templates.json";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

const Templates = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white">
      {templates.map((template, index) => (
        <div
          onClick={() => {
            router.push(`/createResume/${template.name.toLowerCase()}/${v4()}`);
          }}
          key={index}
          className="border m-8 hover:bg-slate-200 rounded-md transition duration-300 ease-in-out"
        >
          <Image
            width={300}
            height={300}
            src={template.image}
            alt={template.name}
            className="mx-auto mb-4 max-w-full"
          />
          <h3 className="text-xl font-semibold">{template.name}</h3>
          <p className="text-sm text-gray-500">{template.variant}</p>
        </div>
      ))}
    </div>
  );
};

export default Templates;
