import Image from "next/image";
import Container from "../../components/Container";
import PageIntro from "../../components/PageIntro";
import { projects } from "../../data/ProjectsData";

const projectLinkOrder = ["live", "repo", "writeup"];

const defaultLinkLabels = {
  live: "View Live",
  repo: "View Repository",
  writeup: "Read Write-up",
};

const ProjectMeta = ({ label, value }) => {
  if (!value) {
    return null;
  }

  return (
    <li className="flex flex-wrap items-center gap-2">
      <span className="text-neutral-400 dark:text-neutral-500">{label}</span>
      <span className="text-neutral-600 dark:text-neutral-300">{value}</span>
    </li>
  );
};

const WorkPage = () => {
  const hasProjects = projects.length > 0;

  return (
    <>
      <PageIntro title="Projects">
        <p>
          This page is where I publish selected work once I can share it
          clearly and publicly.
        </p>
      </PageIntro>
      <Container className="mt-12" innerClassName="max-w-3xl">
        {hasProjects ? (
          <div className="space-y-6">
            {projects.map((project) => {
              const projectLinks = project.links
                ? projectLinkOrder
                    .map((key) => {
                      const entry = project.links[key];

                      if (!entry?.href) {
                        return null;
                      }

                      return {
                        href: entry.href,
                        label: entry.label || defaultLinkLabels[key],
                      };
                    })
                    .filter(Boolean)
                : [];

              return (
                <article
                  key={project.title}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950/60"
                >
                  {project.image && (
                    <div className="border-b border-neutral-200 dark:border-neutral-800">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={720}
                        sizes="(max-width: 768px) 100vw, 768px"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  )}

                  <div className="px-6 py-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-2xl">
                        <h2 className="text-2xl font-medium tracking-tight text-neutral-950 dark:text-neutral-50">
                          {project.title}
                        </h2>
                        <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-300 md:text-lg md:leading-8">
                          {project.summary}
                        </p>
                      </div>
                    </div>

                    {(project.status ||
                      project.role ||
                      project.period ||
                      project.year ||
                      (project.stack && project.stack.length > 0)) && (
                      <ul className="mt-6 space-y-2 text-sm leading-6 text-neutral-500 dark:text-neutral-400 md:text-base">
                        <ProjectMeta label="Status" value={project.status} />
                        <ProjectMeta label="Role" value={project.role} />
                        <ProjectMeta
                          label="Period"
                          value={project.period || project.year}
                        />
                        <ProjectMeta
                          label="Stack"
                          value={
                            project.stack && project.stack.length > 0
                              ? project.stack.join(", ")
                              : null
                          }
                        />
                      </ul>
                    )}

                    {project.highlights && project.highlights.length > 0 && (
                      <ul className="mt-6 space-y-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300 md:text-base">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex gap-3 before:mt-2 before:h-1.5 before:w-1.5 before:flex-none before:rounded-full before:bg-neutral-300 before:content-[''] dark:before:bg-neutral-600"
                          >
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {projectLinks.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                        {projectLinks.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-11 items-center gap-1.5 rounded-full px-1 py-2 text-sm font-medium tracking-tight text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-neutral-300 dark:hover:text-neutral-50 dark:focus-visible:ring-neutral-50 dark:focus-visible:ring-offset-neutral-950"
                            >
                              <span>{link.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-6 dark:border-neutral-800 dark:bg-neutral-950/60">
            <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300 md:text-lg md:leading-8">
              I only plan to publish projects here when I can share the work
              clearly, factually, and in a way that is actually useful to read.
            </p>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300 md:text-lg md:leading-8">
              Until then, this page stays intentionally curated rather than
              padded with unfinished entries.
            </p>
          </div>
        )}
      </Container>
    </>
  );
};

export default WorkPage;
