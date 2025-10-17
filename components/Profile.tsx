import React from "react";
import Image from "next/image";
import profile from "@/public/profile.jpg";
export default function Profile({name = ""}: {name: string}) {
  return (
    <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
      <Image
        src={profile}
        alt="Profile"
        width={100}
        height={100}
        className="rounded-full w-7 md:w-8 lg:w-9 h-auto object-cover"
      />
      <p className="text-md md:text-lg lg:text-2xl font-bold text-nowrap">
        {name}
      </p>
    </div>
  );
}
