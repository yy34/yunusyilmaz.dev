import Link from "next/link";
import clsx from "clsx";

const Button = ({ href, className, children, ...props }) => {
  className = clsx(
    className,
    "capitalize inline-flex justify-center rounded-full px-4 py-1.5 text-sm md:text-base font-semibold transition bg-bgBlack text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-white"
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
