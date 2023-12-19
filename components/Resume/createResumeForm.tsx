"use client";
import React, { useState } from "react";
import Input from "../UIComponents/input";
import TextArea from "../UIComponents/textArea";
import AccordionItem from "../UIComponents/accordianItem";
import "flowbite-datepicker";
import "flowbite/dist/datepicker.turbo.js";
import { FormikErrors, FormikTouched } from "formik";
import { FormValues } from "../../utils/types/formValues";

interface CreateResumeFormProps {
  values: FormValues;
  touched: FormikTouched<FormValues>;
  errors: FormikErrors<FormValues>;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<FormValues>>;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
}
const CreateResumeForm = ({
  values,
  errors,
  touched,
  setFieldValue,
  handleSubmit,
  handleChange,
}: CreateResumeFormProps) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAddEducation = () => {
    setFieldValue("education", [
      ...values.education,
      { school: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...values.education];
    updatedEducation.splice(index, 1);
    setFieldValue("education", updatedEducation);
  };

  const handleAddWorkExperience = () => {
    setFieldValue("workExperience", [
      ...values.workExperience,
      {
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const handleRemoveWorkExperience = (index: number) => {
    const updatedExperience = [...values.workExperience];
    updatedExperience.splice(index, 1);
    setFieldValue("workExperience", updatedExperience);
  };
  const handleCustomChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    customType: string
  ) => {
    const updatedCustom = [...values.custom];
    const itemIndex = updatedCustom.findIndex(
      (item) => item.name === customType
    );

    if (itemIndex !== -1) {
      updatedCustom[itemIndex].items[index] = event.target.value;

      // Update Formik values using setFieldValue
      setFieldValue("custom", updatedCustom);
    }
  };

  const handleRemoveCustomItem = (index: number, customType: string) => {
    const updatedCustom = [...values.custom];
    const itemIndex = updatedCustom.findIndex(
      (item) => item.name === customType
    );

    if (itemIndex !== -1) {
      updatedCustom[itemIndex].items.splice(index, 1);

      // Update Formik values using setFieldValue
      setFieldValue("custom", updatedCustom);
    }
  };

  const handleAddCustomItem = (customType: string) => {
    const updatedCustom = [...values.custom];
    const itemIndex = updatedCustom.findIndex(
      (item) => item.name === customType
    );

    if (itemIndex !== -1) {
      updatedCustom[itemIndex].items.push("");

      // Update Formik values using setFieldValue
      setFieldValue("custom", updatedCustom);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="lg:w-1/2 p-7 border-2 border-gray-200 rounded-lg shadow-xl m-2"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-xl">
        <AccordionItem
          index={0}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          setFieldValue={setFieldValue}
          title="Personal Information"
          type="personal"
        >
          <Input
            id="name"
            labelText="Name"
            onChange={handleChange}
            placeHolder="Enter your name"
            type="text"
            value={values.name}
          />
          {touched.name && errors.name && (
            <div className="text-red-600 text-xs -mt-6 mb-6">{errors.name}</div>
          )}
          <Input
            id="title"
            labelText="Title"
            onChange={handleChange}
            placeHolder="Enter your title"
            type="text"
            value={values.title}
          />
          {touched.title && errors.title && (
            <div className="text-red-600 text-xs -mt-6 mb-6">{errors.name}</div>
          )}
          <Input
            id="email"
            labelText="Email"
            onChange={handleChange}
            placeHolder="e.g xyz@company.com"
            type="email"
            value={values.email}
          />
          {touched.email && errors.email && (
            <div className="text-red-600 text-xs -mt-6 mb-6">
              {errors.email}
            </div>
          )}
          <Input
            id="phone"
            labelText="Phone Number"
            onChange={handleChange}
            placeHolder="e.g +92XXXXXXXXXX"
            type="tel"
            value={values.phone}
          />
          {touched.phone && errors.phone && (
            <div className="text-red-600 text-xs -mt-6 mb-6">
              {errors.phone}
            </div>
          )}
          <Input
            id="address"
            labelText="Address"
            onChange={handleChange}
            placeHolder="e.g Islamabad, Pakistan"
            type="text"
            value={values.address}
          />
          {touched.address && errors.address && (
            <div className="text-red-600 text-xs -mt-6 mb-6">
              {errors.address}
            </div>
          )}
        </AccordionItem>
        <AccordionItem
          index={1}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          setFieldValue={setFieldValue}
          title={
            values.educationCustomName
              ? values.educationCustomName
              : "Education"
          }
          type="education"
        >
          {values.education.map((item, index) => (
            <div key={index} className="space-y-2">
              <Input
                id={`education[${index}].school`}
                labelText="School"
                placeHolder="Enter the name of the school"
                type="text"
                value={item.school}
                onChange={handleChange}
              />
              {touched.education &&
                errors.education &&
                errors.education[index] && (
                  <div className="text-red-600 text-xs -mt-6 mb-6">
                    {errors.education[index].school}
                  </div>
                )}
              <Input
                labelText="Degree"
                placeHolder="Enter the degree title"
                id={`education[${index}].degree`}
                type="text"
                value={item.degree}
                onChange={handleChange}
              />
              {touched.education &&
                errors.education &&
                errors.education[index] && (
                  <div className="text-red-600 text-xs -mt-6 mb-6">
                    {errors.education[index].degree}
                  </div>
                )}
              <div date-rangepicker className="flex items-center">
                <div className="relative">
                  <input
                    id={`education[${index}].startDate`}
                    type="date"
                    value={item.startDate}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                  {touched.education &&
                    errors.education &&
                    errors.education[index] && (
                      <div className="text-red-600 text-xs  mb-6">
                        {errors.education[index].startDate}
                      </div>
                    )}
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <input
                    id={`education[${index}].endDate`}
                    type="date"
                    value={item.endDate}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                  {touched.education &&
                    errors.education &&
                    errors.education[index] && (
                      <div className="text-red-600 text-xs mb-6">
                        {errors.education[index].endDate}
                      </div>
                    )}
                </div>
              </div>
              {index !== 0 && (
                <div className="flex justify-end">
                  <button
                    onClick={() => handleRemoveEducation(index)}
                    type="button"
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              )}
            </div>
          ))}
          <button
            className="relative inline-flex items-center justify-center p-0.5 m-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            type="button"
            onClick={handleAddEducation}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Education
            </span>
          </button>
        </AccordionItem>
        <AccordionItem
          index={2}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          setFieldValue={setFieldValue}
          title={
            values.experienceCustomName
              ? values.experienceCustomName
              : "Work Experience"
          }
          type="experience"
        >
          {values.workExperience.map((item, index) => (
            <div key={index} className="space-y-2">
              <Input
                id={`workExperience[${index}].company`}
                labelText="Company"
                placeHolder="Enter your company name"
                type="text"
                value={item.company}
                onChange={handleChange}
              />
              {touched.workExperience &&
                errors.workExperience &&
                errors.workExperience[index] && (
                  <div className="text-red-600 text-xs -mt-6 mb-6">
                    {errors.workExperience[index].company}
                  </div>
                )}
              <Input
                id={`workExperience[${index}].title`}
                labelText="Title"
                placeHolder="Enter title"
                type="text"
                value={item.title}
                onChange={handleChange}
              />
              {touched.workExperience &&
                errors.workExperience &&
                errors.workExperience[index] && (
                  <div className="text-red-600 text-xs -mt-6 mb-6">
                    {errors.workExperience[index].title}
                  </div>
                )}
              <div date-rangepicker className="flex items-center">
                <div className="relative">
                  <input
                    id={`workExperience[${index}].startDate`}
                    type="date"
                    value={item.startDate}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                  {touched.workExperience &&
                    errors.workExperience &&
                    errors.workExperience[index] && (
                      <div className="text-red-600 text-xs  mb-6">
                        {errors.workExperience[index].startDate}
                      </div>
                    )}
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <input
                    id={`workExperience[${index}].endDate`}
                    type="date"
                    value={item.endDate}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                  {touched.workExperience &&
                    errors.workExperience &&
                    errors.workExperience[index] && (
                      <div className="text-red-600 text-xs  mb-6">
                        {errors.workExperience[index].endDate}
                      </div>
                    )}
                </div>
              </div>

              <TextArea
                index={index}
                labelText="Work Experience"
                value={item.description}
                jobTitle={item.title}
                placeholder="Write your work experience"
                workExperience={values.workExperience}
                setFieldValue={setFieldValue}
                handleChange={handleChange}
              />
              {index !== 0 && (
                <div className="flex justify-end">
                  <button
                    onClick={() => handleRemoveWorkExperience(index)}
                    type="button"
                    className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h16"
                      />
                    </svg>
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              )}
            </div>
          ))}

          <button
            className="relative inline-flex items-center justify-center p-0.5 m-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            type="button"
            onClick={handleAddWorkExperience}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Work Experience
            </span>
          </button>
        </AccordionItem>

        {values.custom.map((customItem, accordionIndex) => (
          <AccordionItem
            key={accordionIndex + 2}
            index={accordionIndex + 3}
            activeAccordion={activeAccordion}
            toggleAccordion={toggleAccordion}
            setFieldValue={setFieldValue}
            title={customItem.name}
            type="custom"
          >
            {customItem.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="space-y-2 flex text-center justify-between"
              >
                <div className="form-group">
                  <Input
                    id={`${customItem.name.toLowerCase()}[${itemIndex}]`}
                    labelText={customItem.name}
                    type="text"
                    value={item}
                    onChange={(e) =>
                      handleCustomChange(e, itemIndex, customItem.name)
                    }
                  />
                </div>
                <button
                  onClick={() =>
                    handleRemoveCustomItem(itemIndex, customItem.name)
                  }
                  type="button"
                  className="text-white h-10 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-xs px-5 py-2.5 text-center mr-2 mb-2"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                  <span className="sr-only">Remove</span>
                </button>
              </div>
            ))}

            <button
              className="relative inline-flex items-center justify-center p-0.5 m-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              type="button"
              onClick={() => handleAddCustomItem(customItem.name)}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add {customItem.name}
              </span>
            </button>
          </AccordionItem>
        ))}

        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 shadow-xl border-2"
          >
            <svg
              className="w-4 h-4 mr-1 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M19 4h-1a1 1 0 1 0 0 2v11a1 1 0 0 1-2 0V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1ZM3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4Zm9 13H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-3H4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Zm0-3h-2a1 1 0 0 1 0-2h2a1 1 0 1 1 0 2Z" />
              <path d="M6 5H5v1h1V5Z" />
            </svg>
            Generate Resume
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateResumeForm;
