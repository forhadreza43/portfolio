import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const ResumeDownload = () => {
   const handleDownload = () => {
      const fileId = '1H0CqpI2EBMKySfbUVwWnhrobqWXPW0NT';
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
         className="rounded-full flex items-center gap-2"
         aria-label="Download Resume"
      >
         <Download className="w-4 h-4" />
         Resume
      </Button>
   );
};

export default ResumeDownload;
