"use client";
import { Document, PDFViewer } from "@react-pdf/renderer";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { FormValues } from "../../utils/types/formValues";
import Simple from "../../components/Template/Types/simple";
import Loader from "../../components/Loader/loader";

export default function Resumes() {
  const { data: user } = useSession();
  const [resumeList, setResumeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          setIsLoading(false);
        }
      });
    }
  }, [user]);
  console.log(resumeList);

  if (isLoading) return <Loader />;
  return (
    <div className="flex flex-wrap">
      {resumeList.length > 0 &&
        resumeList.map((resume, index) => {
          return (
            <div key={resume.id} className="w-full sm:w-1/2 md:w-1/3 p-2">
              <PDFViewer
                height={350}
                width={200}
                showToolbar={false}
                className="border rounded"
              >
                <Document>
                  <Simple values={resume} />
                </Document>
              </PDFViewer>
            </div>
          );
        })}
    </div>
  );
}
