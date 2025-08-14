import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const ResumeDownload = ({className=""}) => {
  return (
    <Button disabled asChild className={`rounded-full flex items-center gap-2 text-white ${className}`}>
      <a
        href="/resume.pdf" // Place resume.pdf in /public/
        download
        aria-label="Download Resume"
      >
        <Download className="w-4 h-4" />
        Resume
      </a>
    </Button>
  );
};

export default ResumeDownload;
