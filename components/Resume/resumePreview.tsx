"use client";
import { Document, PDFViewer } from "@react-pdf/renderer";
import React from "react";
import Modern from "../Template/Types/modern";

export default function ResumePreview() {
  return (
    <div className="w-1/2 flex justify-center font-bold text-2xl text-orange-500">
      <PDFViewer width={500} height={700} showToolbar={false}>
        <Document
          author="Luke Skywalker"
          keywords="awesome, resume, start wars"
          subject="The resume of Luke Skywalker"
          title=""
        >
          <Modern size="A4" />
        </Document>
      </PDFViewer>
    </div>
  );
}
