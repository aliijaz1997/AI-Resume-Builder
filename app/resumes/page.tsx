"use client";
import { Document, PDFViewer } from "@react-pdf/renderer";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FormValues } from "../../utils/types/formValues";
import Simple from "../../components/Template/Types/simple";
import Loader from "../../components/Loader/loader";
import { useRouter } from "next/navigation";
import Modern from "../../components/Template/Types/modern";

export default function Resumes() {
  const { data: user } = useSession();
  const [resumeList, setResumeList] = useState<FormValues[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      fetch(`/api/resume?${user?.user?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        const { resumes } = await res.json();
        if (resumes) {
          setResumeList(resumes);
        }
        setIsLoading(false);
      });
    }
  }, [user]);

  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-wrap">
      {resumeList &&
        resumeList.length > 0 &&
        resumeList.map((resume) => {
          return (
            <div key={resume.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
              <PDFViewer
                height={287}
                width={200}
                showToolbar={false}
                className="border rounded"
              >
                <Document>
                  {resume.type === "modern" ? (
                    <Modern values={resume} />
                  ) : (
                    <Simple values={resume} />
                  )}
                </Document>
              </PDFViewer>
              <button
                onClick={() => {
                  router.push(`/createResume/${resume.type}/${resume.id}`);
                }}
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Edit Resume
              </button>
            </div>
          );
        })}
    </div>
  );
}
