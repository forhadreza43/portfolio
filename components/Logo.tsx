import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      className="w-15 sm:w-17 lg:w-20 h-auto"
      src="/Logo.png"
      alt="Logo"
      width={232}
      height={81}
      priority
    />
  );
};

export default Logo;
