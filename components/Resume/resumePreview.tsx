import React, { useRef } from "react";
import { Document, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Modern from "../Template/Types/modern";
import Simple from "../Template/Types/simple";
import { FormValues } from "../../utils/types/formValues";
import Classic from "../Template/Types/classic";

interface ResumePreviewProps {
  values: FormValues;
  type: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ values, type }) => {
  const pdfRef = useRef(null);

  const renderPdfContent = () => {
    return (
      <Document>
        {type === "modern" ? (
          <Modern values={values} />
        ) : type === "simple" ? (
          <Simple values={values} />
        ) : (
          <Classic values={values} />
        )}
      </Document>
    );
  };

  return (
    <div className="lg:w-1/2 flex justify-center font-bold text-2xl">
      <div>
        <PDFViewer
          style={{
            border: "3px solid rgb(243 244 246);",
            borderRadius: "10px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
          width={520}
          height={700}
          showToolbar={false}
          ref={pdfRef}
        >
          {renderPdfContent()}
        </PDFViewer>
      </div>
    </div>
  );
};

export default ResumePreview;
