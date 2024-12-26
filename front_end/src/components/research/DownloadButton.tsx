import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  fileName: string;
  label?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, label = 'Download PDF' }) => {
  const handleDownload = () => {
    // In a real application, this would trigger the actual file download
    console.log(`Downloading ${fileName}`);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition-colors"
    >
      <Download className="h-4 w-4 mr-2" />
      {label}
    </button>
  );
};