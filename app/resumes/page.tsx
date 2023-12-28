"use client";
import { Document, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FormValues } from "../../utils/types/formValues";
import Simple from "../../components/Template/Types/simple";
import Loader from "../../components/Loader/loader";
import { useRouter } from "next/navigation";
import Modern from "../../components/Template/Types/modern";
import Classic from "../../components/Template/Types/classic";
import { dummyResumeLists } from "../../components/Template/DummyData/mockResumeData";
import Stylish from "../../components/Template/Types/stylish";

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
    setSelectedResume(resume); // Store the selected resume
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedResume(null); // Clear selected resume when closing modal
    setIsModalOpen(false); // Close the modal
  };
  // if (isLoading) return <Loader />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 bg-white justify-evenly">
      {resumeList.map((resume: FormValues) => (
        <div
          key={resume.id}
          className="flex flex-col justify-center p-2 rounded-lg m-2 shadow-xl border-2 shadow-slate-600"
        >
          <PDFViewer
            height={287}
            width={200}
            showToolbar={false}
            className="border rounded"
          >
            {renderPdfContent({
              type: resume.type ? resume.type : "simple",
              values: resume,
            })}
          </PDFViewer>
          <div className="flex justify-between mt-2">
            <button
              onClick={() => {
                router.push(`/createResume/${resume.type}/${resume.id}`);
              }}
              className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Edit
            </button>
            <button
              onClick={() => openModal(resume)} // Pass the selected resume to open modal
              className="text-white bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Preview
            </button>
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
  );
}
