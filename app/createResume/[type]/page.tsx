"use client";
import React, { useEffect } from "react";
import CreateResumeForm from "../../../components/Resume/createResumeForm";
import ResumePreview from "../../../components/Resume/resumePreview";
import { useFormik } from "formik";
import { validationSchema } from "../../../components/Resume/formValidation";
import { useDebounce } from "usehooks-ts";

export default function Resume({ params }: { params: { type: string } }) {
  const { type } = params;

  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      email: "",
      phone: "",
      address: "",
      education: [{ school: "", degree: "", startDate: "", endDate: "" }],
      workExperience: [
        { company: "", title: "", startDate: "", endDate: "", description: "" },
      ],
      skills: [],
      achievements: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const debouncedFormValues = useDebounce(formik.values, 750);

  useEffect(() => {
    formik.setValues(debouncedFormValues);
  }, [debouncedFormValues]);
  return (
    <div className="flex justify-center lg:flex-row flex-col">
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
