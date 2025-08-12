import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const ResumeDownload = () => {
  return (
    <Button asChild className="rounded-full flex items-center gap-2">
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
