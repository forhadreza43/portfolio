import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const ResumeDownload = () => {
  return (
    <Button asChild className="rounded-full flex items-center gap-2">
      <a
        href="https://docs.google.com/document/d/1taQJ8fEOFbiTQiMj4WPPKQiOyFFqglEAh_7CPSOAjm0/export?format=pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
      >
        <Download className="w-4 h-4" />
        Resume
      </a>
    </Button>
  );
};

export default ResumeDownload;
