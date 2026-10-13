import { CopyEmailButton } from "@/components/copy-email-button";
import { ExperienceList } from "@/components/experience-list";
import { ExternalLink, MoreLink, PrimaryLink } from "@/components/links";
import { enterStep, Section } from "@/components/section";
import { roles } from "@/content/experience";
import { profile, socials } from "@/content/profile";
import { stack } from "@/content/stack";
import { yearsSince } from "@/lib/dates";
import { toExperienceItems } from "@/lib/experience";

// Durations are computed from today's date; refresh daily so they never go stale.
export const revalidate = 86400;

export default function HomePage() {
  const years = yearsSince(profile.careerStart);

  return (
    <>
      <section className="enter mt-18 sm:mt-30" style={enterStep(1)}>
        <h1 className="text-[28px] font-semibold tracking-tight text-foreground sm:text-3xl">
          Hello, I'm {profile.firstName}.
        </h1>
        <p className="mt-4 max-w-[52ch] text-[17px] leading-relaxed">
          I'm a software engineer based in {profile.location} with {years}+ years of experience
          building web applications. I currently work at {profile.company}.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
          <PrimaryLink href="/about">View background</PrimaryLink>
          {socials.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
          <CopyEmailButton />
        </div>
      </section>

      <Section title="Work Experience" step={2}>
        <ExperienceList items={toExperienceItems(roles)} />
        <div className="mt-3">
          <MoreLink href="/about">See full experience</MoreLink>
        </div>
      </Section>

      <Section title="Tech Stack" step={3}>
        <dl className="divide-y divide-border border-y border-border">
          {stack.map((group) => (
            <div key={group.label} className="grid gap-2 py-3.5 sm:grid-cols-[110px_1fr] sm:gap-3">
              <dt className="pt-1 text-sm text-muted">{group.label}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-default px-2.5 py-1 text-[13px] transition-colors duration-200 hover:bg-foreground hover:text-background"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
