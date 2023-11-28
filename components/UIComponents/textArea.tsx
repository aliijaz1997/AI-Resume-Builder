"use client";
import React, { ChangeEvent, useState } from "react";
import { WorkExperience } from "../../utils/types/resume";
import Loader from "../Loader/loader";
import { FormikErrors } from "formik";

interface TextAreaProps {
  index: number;
  value: string;
  placeholder: string;
  labelText: string;
  jobTitle: string;
  workExperience: WorkExperience[];
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<any>>;
  handleChange: (e: React.ChangeEvent<any>) => void;
}
export default function TextArea({
  index,
  placeholder,
  value,
  labelText,
  jobTitle,
  workExperience,
  setFieldValue,
  handleChange,
}: TextAreaProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateText = async ({
    generateNew,
  }: {
    generateNew: boolean;
  }) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: value, jobTitle, generateNew }),
      });

      if (response.ok) {
        const { response: description } = await response.json();
        setFieldValue(
          "workExperience",
          workExperience.map((exp, i) =>
            i === index ? { ...exp, description } : exp
          )
        );
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Failed to generate text:", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      {isLoading && <Loader />}
      <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
        <label htmlFor="comment" className="sr-only">
          {labelText}
        </label>
        <textarea
          id={`workExperience[${index}].description`}
          rows={4}
          className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-white flex  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
        onClick={toggleDropdown}
      >
        AI Writer
        <svg
          className="w-2.5 h-2.5 ml-2.5 mt-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="dropdown"
        className={`z-10 ${
          isDropdownOpen ? "block" : "hidden"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <button
              onClick={() => handleGenerateText({ generateNew: true })}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-500"
            >
              Generate Content
            </button>
          </li>
          <li>
            <button
              onClick={() => handleGenerateText({ generateNew: false })}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-purple-500"
            >
              Rewrite Section
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
