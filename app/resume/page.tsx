import React from "react";
import CreateResumeForm from "../../components/Resume/createResumeForm";

export default function Resume() {
  return (
    <div className="flex justify-center">
      <CreateResumeForm />
      <div className="w-1/2 flex justify-center font-bold text-2xl text-orange-500">
        Resume
      </div>
    </div>
  );
}
