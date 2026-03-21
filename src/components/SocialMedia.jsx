import Link from "next/link";
import clsx from "clsx";

import { Icon } from "@iconify/react";
import { socialData } from "../data/Links";

const SocialMedia = ({ className }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex flex-wrap gap-3 text-neutral-950 dark:text-white",
        className
      )}
    >
      {socialData.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-neutral-50"
          >
            <Icon className="h-5 w-5" icon={item.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
