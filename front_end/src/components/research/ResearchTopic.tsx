import React from 'react';
import { DownloadButton } from './DownloadButton';

interface ResearchTopicProps {
  title: string;
  description: string;
  pdfFileName: string;
}

export const ResearchTopic: React.FC<ResearchTopicProps> = ({
  title,
  description,
  pdfFileName,
}) => {
  return (
    <div className="bg-gray-900 rounded-lg p-6 space-y-4">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="pt-2">
        <DownloadButton fileName={pdfFileName} />
      </div>
    </div>
  );
};