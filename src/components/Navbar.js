import Link from "next/link";
import { Navigation } from "../data/Links";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <header className="animate-fade-in-short">
      <nav className="mt-2">
        <ul className="flex items-center justify-center">
          {Navigation.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className={`${
                router.pathname === "/"
                  ? "md:text-base capitalize"
                  : "md:text-lg uppercase"
              }   font-medium duration-300 text-base rounded-lg px-3 py-2 hover:bg-slate-100  hover:text-black`}
            >
              <span
                className={`cursor-pointer ${
                  router.pathname === nav.href ? "text-hw" : ""
                }`}
              >
                {nav.name}
              </span>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
