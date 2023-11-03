"use client";
import React, { useState } from "react";
import { Education, WorkExperience } from "../../utils/types/resume";
import Input from "../UIComponents/input";
import TextArea from "../UIComponents/textArea";
import AccordionItem from "../UIComponents/accordianItem";

const CreateResumeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState<Education[]>([]);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { school: "", degree: "", startDate: "", endDate: "" },
    ]);
  };

  const handleRemoveEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleAddWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { company: "", title: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const handleRemoveWorkExperience = (index: number) => {
    setWorkExperience(workExperience.filter((_, i) => i !== index));
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleAddAchievement = () => {
    setAchievements([...achievements, ""]);
  };

  const handleRemoveAchievement = (index: number) => {
    setAchievements(achievements.filter((_, i) => i !== index));
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      phone,
      location,
      education,
      workExperience,
      skills,
      achievements,
    });
  };

  return (
    <div
      className=" w-1/2 p-7 "
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <form onSubmit={handleSubmit} className="bg-white rounded-xl">
        <AccordionItem
          index={0}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          title="Personal Information"
        >
          <Input
            id="name"
            labelText="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeHolder="Enter your name"
            type="text"
            value={name}
          />
          <Input
            id="email"
            labelText="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeHolder="e.g xyz@company.com"
            type="email"
            value={email}
          />
          <Input
            id="phone"
            labelText="Phone Number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            placeHolder="e.g +92XXXXXXXXXX"
            type="tel"
            value={phone}
          />
          <Input
            id="Address"
            labelText="Address"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            placeHolder="e.g Islamabad, Pakistan"
            type="text"
            value={location}
          />
        </AccordionItem>
        <AccordionItem
          index={1}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          title="Education"
        >
          {education.map((item, index) => (
            <div key={index} className="space-y-2">
              <Input
                id={`school-${index}`}
                labelText="School"
                placeHolder="Enter the name of the school"
                type="text"
                value={item.school}
                onChange={(e) =>
                  setEducation(
                    education.map((edu, i) =>
                      i === index ? { ...edu, school: e.target.value } : edu
                    )
                  )
                }
              />
              <Input
                labelText="Degree"
                placeHolder="Enter the degree title"
                id={`degree-${index}`}
                type="text"
                value={item.degree}
                onChange={(e) =>
                  setEducation(
                    education.map((edu, i) =>
                      i === index ? { ...edu, degree: e.target.value } : edu
                    )
                  )
                }
              />
              <div date-rangepicker className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    value={item.startDate}
                    onChange={(e) =>
                      setEducation(
                        education.map((edu, i) =>
                          i === index
                            ? { ...edu, startDate: e.target.value }
                            : edu
                        )
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    value={item.endDate}
                    onChange={(e) =>
                      setEducation(
                        education.map((edu, i) =>
                          i === index
                            ? { ...edu, endDate: e.target.value }
                            : edu
                        )
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>
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
          title="Work Experience"
        >
          {workExperience.map((item, index) => (
            <div key={index} className="space-y-2">
              <Input
                id={`company-${index}`}
                labelText="Company"
                placeHolder="Enter your company name"
                type="text"
                value={item.company}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((exp, i) =>
                      i === index ? { ...exp, company: e.target.value } : exp
                    )
                  )
                }
              />
              <Input
                id={`title-${index}`}
                labelText="Title"
                placeHolder="Enter title"
                type="text"
                value={item.title}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((exp, i) =>
                      i === index ? { ...exp, title: e.target.value } : exp
                    )
                  )
                }
              />
              <div date-rangepicker className="flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="start"
                    type="text"
                    value={item.startDate}
                    onChange={(e) =>
                      setWorkExperience(
                        workExperience.map((exp, i) =>
                          i === index
                            ? { ...exp, startDate: e.target.value }
                            : exp
                        )
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date start"
                  />
                </div>
                <span className="mx-4 text-gray-500">to</span>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    name="end"
                    type="text"
                    value={item.endDate}
                    onChange={(e) =>
                      setWorkExperience(
                        workExperience.map((exp, i) =>
                          i === index
                            ? { ...exp, endDate: e.target.value }
                            : exp
                        )
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date end"
                  />
                </div>
              </div>

              <TextArea
                index={index}
                labelText="Work Experience"
                value={item.description}
                jobTitle={item.title}
                placeholder="Write your work experience"
                workExperience={workExperience}
                setWorkExperience={setWorkExperience}
              />
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

        <AccordionItem
          index={3}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          title="Skills"
        >
          {skills.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="form-group">
                <label className="block" htmlFor={`skill-${index}`}>
                  Skill
                </label>
                <input
                  id={`skill-${index}`}
                  type="text"
                  value={item}
                  onChange={(e) =>
                    setSkills(
                      skills.map((skill, i) =>
                        i === index ? e.target.value : skill
                      )
                    )
                  }
                  className="form-input"
                  required
                />
              </div>
              <button
                onClick={() => handleRemoveSkill(index)}
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
          ))}

          <button
            className="relative inline-flex items-center justify-center p-0.5 m-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            type="button"
            onClick={handleAddSkill}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Skill
            </span>
          </button>
        </AccordionItem>

        <AccordionItem
          index={4}
          activeAccordion={activeAccordion}
          toggleAccordion={toggleAccordion}
          title="Achievements"
        >
          {achievements.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="form-group">
                <label className="block" htmlFor={`achievement-${index}`}>
                  Achievement
                </label>
                <input
                  id={`achievement-${index}`}
                  type="text"
                  value={item}
                  onChange={(e) => {
                    setAchievements(
                      achievements.map((ach, i) =>
                        i === index ? e.target.value : ach
                      )
                    );
                  }}
                  className="form-input"
                  required={true}
                />
              </div>
              <button
                onClick={() => handleRemoveAchievement(index)}
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
          ))}

          <button
            className="relative inline-flex items-center justify-center p-0.5 m-3 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            type="button"
            onClick={handleAddAchievement}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Add Achievement
            </span>
          </button>
        </AccordionItem>
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
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
