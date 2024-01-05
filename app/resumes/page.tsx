"use client";
import { Document, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FormValues } from "../../utils/types/formValues";
import Simple from "../../components/Template/components/Types/simple";
import Loader from "../../components/Loader/loader";
import { useRouter } from "next/navigation";
import Modern from "../../components/Template/components/Types/modern";
import Classic from "../../components/Template/components/Types/classic";
import { dummyResumeLists } from "../../components/Template/DummyData/mockResumeData";
import Stylish from "../../components/Template/components/Types/dark";
import ResumeDropDown from "../../components/Resumes/dropdown";
import CardComponent from "../../components/Resumes/cards";

export default function Resumes() {
  const { data: user } = useSession();
  const [resumeList, setResumeList] = useState<FormValues[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Initially set to true
  const [selectedResume, setSelectedResume] = useState<FormValues | null>(null); // State to store selected resume
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const router = useRouter();

  const renderPdfContent = ({
    type,
    values,
  }: {
    type: string;
    values: FormValues;
  }) => {
    return (
      <Document>
        {type === "modern" ? (
          <Modern values={values} />
        ) : type === "simple" ? (
          <Simple values={values} />
        ) : type === "classic" ? (
          <Classic values={values} />
        ) : (
          <Stylish values={values} />
        )}
      </Document>
    );
  };

  useEffect(() => {
    if (user) {
      fetch(`/api/resume?${user?.user?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const { resumes } = await res.json();
          if (resumes) {
            setResumeList(resumes);
          }
        })
        .catch((error) => {
          // Handle error, show a message or retry option
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const openModal = (resume: FormValues) => {
    setSelectedResume(resume);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedResume(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {isLoading && <Loader />}
      <div className="flex items-center mt-6 mb-8">
        <span className="border-gray-300 border-2 rounded-full p-1 mr-4">
          <img
            className="w-16 h-16 rounded-full"
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="user photo"
          />
        </span>
        <p className="font-semibold text-2xl">
          Welcome back, {user?.user?.name}!
        </p>
      </div>
      <div>
        <CardComponent />
      </div>
      <div className="bg-gray-100 p-8 mb-4 rounded-2xl">
        <p className="font-semibold text-2xl mb-8">Your Documents</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            className="flex flex-col items-center justify-center rounded-md  border-dotted border-red-500 border-2"
            style={{ height: "400px", width: "300px" }}
          >
            <p className="text-red-500 text-center hover:bg-red-200 border-red-500 border p-2 mb-2">
              <button className="hover:text-lg">Create New Resume</button>
            </p>
            <p className="text-red-500 text-center border-red-500 hover:bg-red-200 border p-2 mt-2 mb-2">
              <button className="hover:text-lg">New Resume with AI</button>
            </p>
            <p className="text-red-500 text-center border-red-500 hover:bg-red-200 border p-2 mt-2">
              <button className="hover:text-lg">Use Example</button>
            </p>
          </div>

          {resumeList.map((resume: FormValues) => (
            <div
              key={resume.id}
              className="flex flex-col justify-center bg-white rounded-md"
              style={{ height: "400px", width: "300px" }}
            >
              <PDFViewer
                height={400}
                width={300}
                showToolbar={false}
                className="border rounded"
              >
                {renderPdfContent({
                  type: resume.type ? resume.type : "simple",
                  values: resume,
                })}
              </PDFViewer>
              <div className="flex justify-between m-2 items-center">
                <p>{resume.name}</p>
                <ResumeDropDown />
              </div>
              {selectedResume && ( // Render modal only when a resume is selected
                <div
                  id="default-modal"
                  aria-hidden={!isModalOpen}
                  className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center  bg-gray-800 bg-opacity-50 ${
                    isModalOpen ? "" : "hidden"
                  }`}
                >
                  <div className="relative p-4 w-full max-w-2xl">
                    <div className="relative bg-white rounded-lg shadow">
                      <div className="flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                          Resume Preview
                        </h3>
                        <div className="flex text-center justify-center">
                          <PDFDownloadLink
                            style={{
                              margin: "2px",
                              backgroundColor: "#3C81F7",
                              borderRadius: "1rem",
                              padding: "7px 6px 6px",
                              color: "white",
                              fontSize: "13px",
                            }}
                            document={renderPdfContent({
                              type: selectedResume.type
                                ? selectedResume.type
                                : "simple",
                              values: selectedResume,
                            })}
                            fileName="resume.pdf"
                          >
                            {({ blob, url, loading, error }) =>
                              loading ? "Loading document..." : "Download"
                            }
                          </PDFDownloadLink>
                          <button
                            onClick={closeModal}
                            type="button"
                            className="text-gray-800 bg-gray-200 hover:bg-gray-300 hover:text-gray-900 rounded-full text-sm w-20 h-8 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                      <div className="p-4">
                        <PDFViewer
                          height={600}
                          width={600}
                          showToolbar={false}
                          className="border rounded"
                        >
                          <Document>
                            {selectedResume.type === "modern" ? (
                              <Modern values={selectedResume} />
                            ) : selectedResume.type === "classic" ? (
                              <Classic values={selectedResume} />
                            ) : (
                              <Simple values={selectedResume} />
                            )}
                          </Document>
                        </PDFViewer>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
