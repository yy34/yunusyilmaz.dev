import Link from "next/link";
import clsx from "clsx";

const Button = ({ href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex min-h-11 items-center justify-center rounded-full bg-neutral-950 px-4 py-2.5 text-sm font-medium tracking-tight text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-50 dark:focus-visible:ring-offset-neutral-950"
  );

  let inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
};

export default Button;
