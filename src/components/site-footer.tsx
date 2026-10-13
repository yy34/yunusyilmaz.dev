import { profile, socials } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="mt-30 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 pb-10 text-[13px] text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <nav aria-label="Social" className="flex gap-4">
        {socials.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex min-h-11 items-center transition-colors hover:text-foreground"
        >
          Email
        </a>
      </nav>
    </footer>
  );
}
