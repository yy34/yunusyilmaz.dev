import type { Metadata } from "next";
import { ExternalLink } from "@/components/links";
import { enterStep } from "@/components/section";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work by Yunus Yılmaz.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="enter mt-18 sm:mt-30" style={enterStep(1)}>
      <h1 className="text-[28px] font-semibold tracking-tight text-foreground sm:text-3xl">
        Projects
      </h1>
      {projects.length === 0 ? (
        <div className="mt-4 space-y-4 text-[17px] leading-[1.75]">
          <p>I only publish projects here when I can share the work clearly and publicly.</p>
          <p className="text-muted">
            Until then, this page stays intentionally curated rather than padded with unfinished
            entries.
          </p>
        </div>
      ) : (
        <ul className="mt-8 border-b border-border">
          {projects.map((project) => (
            <li key={project.title} className="border-t border-border py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-base font-medium text-foreground">{project.title}</h2>
                <span className="text-[13px] text-muted tabular-nums">{project.year}</span>
              </div>
              <p className="mt-1.5 text-[15px] leading-relaxed">{project.summary}</p>
              {project.stack && (
                <p className="mt-2 text-[13px] text-muted">{project.stack.join(" · ")}</p>
              )}
              {project.href && <ExternalLink href={project.href}>View project</ExternalLink>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
