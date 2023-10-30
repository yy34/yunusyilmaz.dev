import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";

export function GridList({ className, children }) {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("grid grid-cols-1 gap-3", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
}

export function GridListItem({ title, children, className, invert = false }) {
  return (
    <li
      className={clsx(
        "text-base",
        invert
          ? "text-neutral-300 before:bg-white after:bg-white/10"
          : "text-neutral-600 before:bg-bgBlack after:bg-neutral-100",
        className
      )}
    >
      <FadeIn>{children}</FadeIn>
    </li>
  );
}
