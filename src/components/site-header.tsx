"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/about#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="enter flex items-center justify-between pt-7 sm:pt-12">
      <Link href="/" className="shrink-0 text-base leading-snug font-medium text-foreground">
        {profile.name}
        <span className="block text-[13px] font-normal whitespace-nowrap text-muted">
          {profile.role}
        </span>
      </Link>
      <nav aria-label="Primary" className="flex items-center gap-0.5 sm:gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              data-active={active}
              className="relative rounded-lg px-1.5 py-3 text-sm text-muted transition-colors after:absolute after:bottom-1 after:left-1/2 after:size-1 after:-translate-x-1/2 after:scale-0 after:rounded-full after:bg-foreground after:transition-transform after:duration-300 after:ease-out-soft after:content-[''] hover:text-foreground data-[active=true]:text-foreground data-[active=true]:after:scale-100 sm:px-2.5"
            >
              {item.label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
