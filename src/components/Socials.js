import Link from "next/link";
import { Icon } from "@iconify/react";
import { socialData } from "../data/Links";

export const Socials = () => {
  return (
    <div className="container mt-7">
      <div className="flex justify-evenly">
        {socialData.map((social) => (
          <div>
            <Link
              title={social.label}
              href={social.href}
              target="_blank"
              className="bg-dark  px-3 py-2 text-slate-700 font-medium hover:bg-slate-100  p-2 border-b-2  transition-all relative flex flex-col items-center "
            >
              <Icon icon={social.icon} style={{ fontSize: "24px" }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
