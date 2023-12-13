"use client";
import Image from "next/image";
import templates from "../../components/Template/templates.json";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

const Templates = () => {
  const router = useRouter();

  const handleTemplateClick = (template: {
    name: any;
    image?: string;
    variant?: string;
  }) => {
    router.push(`/createResume/${template.name.toLowerCase()}/${v4()}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white p-4">
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
