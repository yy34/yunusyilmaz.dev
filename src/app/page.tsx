import { CopyEmailButton } from "@/components/copy-email-button";
import { ExperienceList } from "@/components/experience-list";
import { ExternalLink, MoreLink, PrimaryLink } from "@/components/links";
import { enterStep, Section } from "@/components/section";
import { roles } from "@/content/experience";
import { profile, socials } from "@/content/profile";
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
    </>
  );
}
