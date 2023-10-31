import Link from "next/link";
import clsx from "clsx";

import { Icon } from "@iconify/react";
import { socialData } from "../data/Links";

const SocialMedia = ({ className, invert = false }) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-7 text-neutral-950 dark:text-white",
        className
      )}
    >
      {socialData.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
            title={item.label}
            className={clsx("transition ")}
          >
            <Icon
              className={clsx(
                "fill-bgBlack dark:fill-white duration-300 hover:-translate-y-1"
              )}
              icon={item.icon}
              style={{ fontSize: "24" }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
