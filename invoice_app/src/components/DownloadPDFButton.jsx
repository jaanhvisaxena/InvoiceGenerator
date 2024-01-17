import React from "react";
import { saveAs } from "file-saver";
import CustomButton from "./CustomButton";
const DownloadPDFButton = () => {
  const downloadPdf = () => {
    // Replace 'your-pdf-file.pdf' with the actual file name or path
    const pdfUrl = "invoice_pdf.pdf";

    // Use the fetch API to get the PDF file as a Blob
    fetch(pdfUrl)
      .then(response => response.blob())
      .then(blob => {
        // Save the Blob as a file using FileSaver.js
        saveAs(blob, 'downloaded-file.pdf');
      })
      .catch(error => {
        console.error('Error fetching or saving the PDF file:', error);
      });
  };

  return (
    <CustomButton styles="your-custom-styles" label="Download PDF" onClick={downloadPdf} />
  );
};

export default DownloadPDFButton;
