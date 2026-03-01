import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

// https://drive.google.com/file/d/1V4wBbcsp0paudReIgUtnBI9QO3Jp65Mu/view?usp=drive_link

const ResumeDownload = () => {
   const handleDownload = () => {
      const fileId = '1V4wBbcsp0paudReIgUtnBI9QO3Jp65Mu';
      const link = document.createElement('a');
      link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
      link.download = 'Forhad_Reza_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
   };

   return (
      <Button
         onClick={handleDownload}
         className="rounded-full flex items-center gap-2 text-white"
         aria-label="Download Resume"
      >
         <Download className="w-4 h-4" />
         Resume
      </Button>
   );
};

export default ResumeDownload;
