import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-red-100 py-10 rounded-md mb-2">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          Resume templates built to impress.
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Creative resume templates designed by professional typographers. No
          matter how you customize your resume, it will always stand out.
        </p>
      </div>
    </div>
  );
};

export default Hero;
