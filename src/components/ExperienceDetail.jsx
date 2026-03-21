import React from "react";
import Container from "./Container";
import Image from "next/image";
import SectionIntro from "./SectionIntro";
import { GridList, GridListItem } from "./GridList";
import { WorkExperiences } from "../data/ExperienceData";

const ExperienceDetail = () => {
  return (
    <div>
      <SectionIntro className="mt-12" title="Work Experience" />

      <Container className="mt-10 sm:mt-14" innerClassName="max-w-3xl">
        <GridList>
          {WorkExperiences.map((work, index) => (
            <GridListItem key={index} title={work.total !== undefined ? work.total : "Present"}>
              <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white px-5 py-5 dark:border-neutral-800 dark:bg-neutral-950/60 md:px-6 md:py-6">
                <div className="flex items-start justify-between gap-3 sm:items-center sm:gap-4">
                  <div>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 md:text-base">
                      {work.company}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-xl">
                      {work.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400 md:text-base">
                      <span>{work.date}</span>
                      {work.total && (
                        <small className="text-sm text-neutral-500 dark:text-neutral-400">
                          {work.total}
                        </small>
                      )}
                    </div>
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

                {work.desc && (
                  <div className="mt-4 space-y-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300 md:text-base">
                    {Array.isArray(work.desc) ? (
                      work.desc.map((dsc, idx) => <p key={idx}>{dsc}</p>)
                    ) : (
                      <p>{work.desc}</p>
                    )}
                  </div>
                )}
              </div>
            </GridListItem>
          ))}
        </GridList>
      </Container>
    </div>
  );
};

export default ExperienceDetail;
