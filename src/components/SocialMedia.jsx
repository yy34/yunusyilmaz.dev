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
            className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-neutral-300 dark:hover:bg-white/10 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-50 dark:focus-visible:ring-offset-neutral-950"
          >
            <Icon className="h-5 w-5" icon={item.icon} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
