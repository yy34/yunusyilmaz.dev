import Link from "next/link";
import { Navigation } from "../data/Links";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <header>
      <nav className="mt-2">
        <ul className="flex items-center justify-center">
          {Navigation.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              className="font-sarala text-base font-bold rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-black"
            >
              <span
                className={`cursor-pointer ${
                  router.pathname === nav.href ? "text-purp" : ""
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
