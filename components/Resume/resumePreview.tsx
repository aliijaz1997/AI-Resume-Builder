import React, { useRef } from "react";
import { Document, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Modern from "../Template/Types/modern";
import Simple from "../Template/Types/simple";
import { FormValues } from "../../utils/types/formValues";

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
        ) : (
          type === "simple" && <Simple values={values} />
        )}
      </Document>
    );
  };

  return (
    <div className="lg:w-1/2 flex justify-center font-bold text-2xl text-orange-500">
      <div>
        {/* <PDFDownloadLink
          style={{
            margin: "2px",
            backgroundColor: "red",
            borderRadius: "1rem",
            padding: "5px",
            color: "white",
          }}
          document={renderPdfContent()}
          fileName="resume.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download PDF"
          }
        </PDFDownloadLink> */}

        <PDFViewer width={500} height={700} showToolbar={false} ref={pdfRef}>
          {renderPdfContent()}
        </PDFViewer>
      </div>
    </div>
  );
};

export default ResumePreview;
