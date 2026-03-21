import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import SectionIntro from "./SectionIntro";
import Section from "./Section";
import { GridList, GridListItem } from "./GridList";
import { WorkExperiences } from "../data/ExperienceData";

const Experience = () => {
  return (
    <Section intro={<SectionIntro title="Work Experience" />}>
      <Container innerClassName="max-w-3xl">
        <GridList>
          {WorkExperiences.map((work, key) => (
            <GridListItem
              key={key}
              title={work.total !== undefined ? work.total : "Present"}
            >
              <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white px-5 py-5 dark:border-neutral-800 dark:bg-neutral-950/60 md:px-6 md:py-6">
                <div className="flex gap-4 items-center justify-between">
                  <div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 md:text-base">
                      {work.company}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-xl">
                      {work.title}
                    </h3>
                    <span className="mt-2 block text-sm text-neutral-500 dark:text-neutral-400 md:text-base">
                      {work.date}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900">
                    <Image
                      className="object-cover dark:invert-[100%] dark:sepia-[0%] dark:saturate-[0%] dark:hue-rotate-[127deg] dark:brightness-[104%] dark:contrast-[100%]"
                      width={44}
                      height={44}
                      src={work.logo}
                      alt={work.company}
                    />
                  </div>
                </div>

                {work.total && (
                  <div className="mt-5 text-sm text-neutral-500 dark:text-neutral-400">
                    {work.total}
                  </div>
                )}
              </div>
            </GridListItem>
          ))}
        </GridList>

        <div className="flex justify-center">
          <Button href="about">More Detail</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Experience;
