import Link from "next/link";
import { NavList } from "../data/Links";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="">
      <nav className="max-w-4xl mx-auto flex justify-between items-center">
        <ul className="flex items-center justify-center ml-auto gap-3">
          {NavList.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className={`duration-300 text-lg px-1 text-neutral-950`}
            >
              <span
                className={`cursor-pointer text-neutral-950 dark:text-white cursor-pointer" ${
                  router.pathname === nav.href
                    ? "font-medium"
                    : "border-transparent font-light"
                }`}
              >
                {nav.name}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
