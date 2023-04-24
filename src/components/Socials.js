import Link from "next/link";
import { Icon } from "@iconify/react";
import { socialData } from "../data/Links";

export const Socials = () => {
  return (
    <div className="flex justify-center md:justify-evenly gap-3">
      {socialData &&
        socialData.map((social, key) => (
          <div key={key}>
            <Link
              title={social.label}
              href={social.href}
              target="_blank"
              className="bg-dark px-3 py-2 font-medium hover:bg-clare hover:text-white relative flex flex-col items-center "
            >
              <Icon icon={social.icon} style={{ fontSize: "24px" }} />
            </Link>
          </div>
        ))}
    </div>
  );
};
