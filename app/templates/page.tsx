"use client";

import { Document, PDFViewer } from "@react-pdf/renderer";
import Simple from "../../components/Template/Types/simple";
import Modern from "../../components/Template/Types/modern";
import Classic from "../../components/Template/Types/classic";

const Templates = () => (
  <PDFViewer width={500} height={700} showToolbar={false}>
    <Document
      author="Luke Skywalker"
      keywords="awesome, resume, start wars"
      subject="The resume of Luke Skywalker"
      title=""
    >
      <Simple />
      <Modern size="A4" />
      <Classic size="A4" />
    </Document>
  </PDFViewer>
);

export default Templates;
