import React, { JSX } from "react";
import { IconType } from "react-icons";
import {

  FaGithub,
  FaLinkedin,

  FaThreads,
  FaXTwitter,
  FaFacebook,
  FaWhatsapp,
  FaReddit,
  FaTelegram,
} from "react-icons/fa6";
import { HiEnvelope } from "react-icons/hi2";

import Link from "next/link";

export type Social = Array<{
  name: string;
  icon: JSX.Element;
  link: string;
}>;

const social: Social = [
  {
    name: "GitHub",
    icon: <FaGithub size={16} className="text-base-content" />,
    link: "https://github.com/forhadreza43",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={16} className="text-base-content" />,
    link: "https://www.linkedin.com/in/rezaforhad",
  },
  {
    name: "Email",
    icon: <HiEnvelope size={16} className="text-base-content" />,
    link: `mailto:forhad.bimt@gmail.com`,
  },
  {
    name: "Facebook",
    icon: <FaFacebook size={16} className="text-base-content" />,
    link: "https://www.facebook.com/forhadreza000",
  },
  {
    name: "X",
    icon: <FaXTwitter size={16} className="text-base-content" />,
    link: "https://twitter.com/forhadreza111",
  },
];

export default function SocialButton() {
  return (
    <div className="flex gap-2 flex-wrap items-center justify-center">
      {social.map(
        (item) =>
          item.link && (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 duration-200 border border-primary/20 rounded-full text-xs font-semibold"
            >
              <span className="flex items-center py-1.5 px-1">
                <span className="pl-2">{item.icon}</span>
                <span className="px-2 text-xs">{item.name}</span>
              </span>
            </Link>
          )
      )}
    </div>
  );
}
