import Link from "next/link";
import clsx from "clsx";

const Button = ({ href, className, children, ...props }) => {
  className = clsx(
    className,
    "inline-flex items-center justify-center rounded-full bg-neutral-950 px-4 py-2 text-sm font-medium tracking-tight text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
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
