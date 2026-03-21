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
            className="inline-flex items-center gap-1.5 text-sm font-medium tracking-tight text-neutral-600 transition-colors hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50"
          >
            <span>{social.label}</span>
            <Icon icon="ph:arrow-up-right-light" className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
