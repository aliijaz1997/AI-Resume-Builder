"use client";
import React, { useEffect, useState } from "react";
import CreateResumeForm from "../../../../components/Resume/createResumeForm";
import ResumePreview from "../../../../components/Resume/resumePreview";
import { useFormik } from "formik";
import { validationSchema } from "../../../../components/Resume/formValidation";
import { useDebounce } from "usehooks-ts";
import { useSession } from "next-auth/react";
import { useToast } from "../../../../components/ui/use-toast";
import { FormValues } from "../../../../utils/types/formValues";
import { v4 } from "uuid";
import Loader from "../../../../components/Loader/loader";
import { mockValues } from "../../../../components/Template/DummyData/mockResumeData";

export default function Resume({
  params,
}: {
  params: { type: string; resumeId: string };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [resume, setResume] = useState<FormValues>();

  const { type, resumeId } = params;
  const { data: authUser } = useSession();
  const { toast } = useToast();

  useEffect(() => {
    if (authUser) {
      setIsLoading(true);
      fetch(`/api/resume/${resumeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const { resume } = await res.json();
        if (resume) {
          setResume(resume);
          formik.setValues(resume);
        }
        setIsLoading(false);
      });
    }
  }, [authUser]);

  const formik = useFormik({
    initialValues: mockValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const response = resume
        ? await fetch("/api/resume", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
              userEmail: authUser?.user?.email,
              id: resume.id,
              type,
            }),
          })
        : await fetch("/api/resume", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
              userEmail: authUser?.user?.email,
              id: v4(),
              type,
            }),
          });

      if (response.status === 201 || response.status === 200) {
        setIsLoading(false);
        toast({
          title: "Resume Updated Successfully",
        });
      } else {
        setIsLoading(false);
        toast({ title: "Failed to update the resume. Please try again!" });
      }
    },
  });

  const debouncedFormValues = useDebounce(formik.values, 750);

  useEffect(() => {
    formik.setValues(debouncedFormValues);
  }, [debouncedFormValues]);

  if (isLoading) return <Loader />;
  return (
    <div className="flex justify-center lg:flex-row flex-col bg-white">
      <CreateResumeForm
        values={formik.values}
        setFieldValue={formik.setFieldValue}
        handleSubmit={formik.handleSubmit}
        handleChange={formik.handleChange}
        touched={formik.touched}
        errors={formik.errors}
      />
      <ResumePreview type={type} values={debouncedFormValues} />
    </div>
  );
}
