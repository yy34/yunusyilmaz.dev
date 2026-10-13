import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

const quiet =
  "group inline-flex min-h-11 items-center gap-1 text-sm text-muted transition-colors hover:text-foreground";

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={quiet}>
      {children}
      <ArrowUpRight aria-hidden className="size-3.5 nudge-xy" />
    </a>
  );
}

export function MoreLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${quiet} gap-1.5`}>
      {children}
      <ArrowRight aria-hidden className="size-3.5 nudge-x" />
    </Link>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full max-sm:w-full bg-foreground px-[18px] text-sm font-medium text-background transition-[opacity,scale] duration-200 hover:opacity-85 active:scale-[0.97]"
    >
      {children}
      <ArrowRight aria-hidden className="size-3.5 nudge-x" />
    </Link>
  );
}
