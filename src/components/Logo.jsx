import clsx from "clsx";
import Link from "next/link";

const Logo = ({ href, className, children, ...props }) => {
  className = clsx(className, "black");
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2 className={clsx("cursor-pointer duration-300", className)} {...props}>
      {inner}
    </h2>
  );
};

export default Logo;
