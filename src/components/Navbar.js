import Link from "next/link";
import { Navigation } from "../data/Links";

export const Navbar = () => {
  return (
    <header>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {Navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
