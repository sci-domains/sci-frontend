import PdfViewer from '@/components/PdfViewer/PdfViewer';

export default function Whitepaper() {
  return (
    <div>
      <PdfViewer pdfURL={'/docs/whitepaper.pdf'} />
    </div>
  );
}
