import React from "react";
import CreateResumeForm from "../../components/Resume/createResumeForm";
import ResumePreview from "../../components/Resume/resumePreview";

export default function Resume() {
  return (
    <div className="flex justify-center">
      <CreateResumeForm />
      <ResumePreview />
    </div>
  );
}
