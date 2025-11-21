import React from 'react';
import { Button } from './ui/button';
import { Download } from 'lucide-react';

const ResumeDownload = () => {
   const handleDownload = () => {
      const link = document.createElement('a');
      link.href =
         'https://docs.google.com/document/d/1taQJ8fEOFbiTQiMj4WPPKQiOyFFqglEAh_7CPSOAjm0/export?format=pdf';
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
