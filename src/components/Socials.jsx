import Link from "next/link";
import { Icon } from "@iconify/react";
import { socialData } from "../data/Links";

const Socials = () => {
  return (
    <div className={`flex gap-4 my-8`}>
      {socialData?.slice(0, 3).map((social, key) => (
        <div key={key}>
          <Link
            title={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="duration-300 hover:-translate-y-1 font-light relative flex  text-neutral-950 dark:text-neutral-50 items-center "
          >
            <span className="text-sm md:text-base uppercase mr-1">
              {social.label}
            </span>
            <Icon icon="ph:arrow-up-right-light" style={{ fontSize: "12px" }} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Socials;
