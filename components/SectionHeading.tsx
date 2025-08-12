import React from "react";

const SectionHeading = ({ children }: { children: string }) => {
  return (
    <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
