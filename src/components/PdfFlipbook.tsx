import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfFlipbookProps {
  file: File;
}

export default function PdfFlipbook({ file }: PdfFlipbookProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pages, setPages] = useState<React.ReactNode[]>([]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    const newPages = [];
    for (let i = 1; i <= numPages; i++) {
      newPages.push(
        <div className="w-full h-full flex items-center justify-center bg-white" key={`page-${i}`}>
          <Page 
            pageNumber={i} 
            renderTextLayer={false} 
            renderAnnotationLayer={false}
            className="w-full h-full [&>canvas]:!w-full [&>canvas]:!h-full [&>canvas]:!object-contain"
          />
        </div>
      );
    }
    setPages(newPages);
  }

  return (
    <div className="hidden">
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
      </Document>
    </div>
  );
}
