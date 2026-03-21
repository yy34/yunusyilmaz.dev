import Link from "next/link";
import { Icon } from "@iconify/react";
import { socialData } from "../data/Links";

const Socials = () => {
  return (
    <ul role="list" className="my-8 flex flex-wrap gap-x-5 gap-y-3">
      {socialData.slice(0, 3).map((social) => (
        <li key={social.href}>
          <Link
            title={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-1 py-2 text-sm font-medium tracking-tight text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-neutral-300 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-50 dark:focus-visible:ring-offset-neutral-950"
          >
            <span>{social.label}</span>
            <Icon
              icon="ph:arrow-up-right-light"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
