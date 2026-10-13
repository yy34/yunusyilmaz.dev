import type { Metadata } from "next";
import Image from "next/image";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ExternalLink } from "@/components/links";
import { enterStep, Section } from "@/components/section";
import { roles } from "@/content/experience";
import { education, profile, socials } from "@/content/profile";
import { yearsSince } from "@/lib/dates";
import { toExperienceItems } from "@/lib/experience";
import portrait from "../../assets/profile.jpg";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}: experience, education and how to get in touch.`,
  alternates: { canonical: "/about" },
};

const workplaces = new Map(roles.map((role) => [role.id, role.workplace]));

export default function AboutPage() {
  const years = yearsSince(profile.careerStart);
  const items = toExperienceItems(roles);

  return (
    <>
      <section className="enter mt-18 sm:mt-30" style={enterStep(1)}>
        <Image
          src={portrait}
          alt={profile.name}
          width={88}
          height={88}
          priority
          sizes="88px"
          placeholder="blur"
          className="size-22 rounded-[20px] object-cover object-[right_top] grayscale transition-[filter,border-radius] duration-500 ease-out-soft hover:rounded-[44px] hover:grayscale-0"
        />
        <h1 className="mt-7 text-[28px] font-semibold tracking-tight text-foreground sm:text-3xl">
          About
        </h1>
        <div className="mt-4 space-y-4 text-[17px] leading-[1.75]">
          <p>
            I'm a software engineer based in {profile.location} with {years}+ years of experience. I
            currently work at {profile.company}. I mostly work with TypeScript, React and Next.js,
            and I've shipped production code in Vue and Angular.
          </p>
          <p>
            I build scalable, secure and reliable web applications across different frameworks and
            technologies. I enjoy solving complex problems, and with attention to detail and a
            user-centered approach I try to deliver solutions people actually enjoy using.
          </p>
          <p>
            I believe in continuous learning — I like picking up new things and sharing what I
            learn. I care about high-quality code, best practices and industry standards.
          </p>
        </div>
      </section>

      <Section title="Work Experience" step={2}>
        <ol>
          {items.map((item) => (
            <li
              key={item.id}
              className="grid gap-2 border-t border-border py-7 sm:grid-cols-[132px_1fr] sm:gap-6"
            >
              <p className="text-[13px] leading-relaxed text-muted tabular-nums">
                {item.period}
                <span className="block text-xs">{item.duration}</span>
              </p>
              <div>
                <h3 className="flex items-center gap-2 text-base font-medium text-foreground">
                  {item.company}
                  <span className="rounded-full border border-border px-2 text-xs font-normal text-muted">
                    {workplaces.get(item.id)}
                  </span>
                </h3>
                <p className="mt-0.5 text-sm text-muted">{item.title}</p>
                {item.highlights.length > 0 && (
                  <ul className="mt-3.5 flex flex-col gap-1.5 text-[15px] leading-relaxed">
                    {item.highlights.map((line) => (
                      <li
                        key={line}
                        className="relative pl-3.5 before:absolute before:top-[11px] before:left-0 before:size-1 before:rounded-full before:bg-muted before:content-['']"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Education" step={3}>
        <ul className="border-b border-border">
          {education.map((entry) => (
            <li
              key={entry.school}
              className="flex justify-between gap-4 border-t border-border py-4 text-[15px]"
            >
              <span>
                <span className="block font-medium text-foreground">{entry.school}</span>
                <span className="text-sm text-muted">{entry.field}</span>
              </span>
              <span className="text-[13px] whitespace-nowrap text-muted tabular-nums">
                {entry.years}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Get in touch" id="contact" step={4}>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <CopyEmailButton />
          {socials.map((link) => (
            <ExternalLink key={link.href} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </Section>
    </>
  );
}
