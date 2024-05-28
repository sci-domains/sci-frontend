'use client';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import React from 'react';

interface PDFViewerProps {
  pdfURL: string;
  pageNumber?: number;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfURL, pageNumber = 1 }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div style={{ height: '100vh' }}>
      <Worker workerUrl={'/pdf.worker.min.js'}>
        <Viewer
          fileUrl={pdfURL}
          initialPage={pageNumber}
          plugins={[defaultLayoutPluginInstance]}
        />
      </Worker>
    </div>
  );
};

export default PDFViewer;
