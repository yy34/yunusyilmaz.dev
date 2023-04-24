import React from "react";
import { Socials } from "./Socials";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { GITHUB } from "../data/Links";
export const Footer = () => {
  return (
    <footer className="shadow-lg">
      <hr className="border-gray-200 dark:border-clare" />
      <div className="max-w-screen-lg mx-auto py-3">
        <div className="flex flex-col md:flex-row justify-between items-center md:px-4">
          <div className="flex justify-center items-center">
            <div className="font-thin text-xs sm:text-sm tracking-wide">
              Made from using Next.js, Vercel and Tailwind CSS.
            </div>
            <Link href={GITHUB.href} target="_blank" className="p-2">
              <Icon icon={GITHUB.icon} style={{ fontSize: "24px" }} />
            </Link>
          </div>

          <Socials />
        </div>
      </div>
    </footer>
  );
};
