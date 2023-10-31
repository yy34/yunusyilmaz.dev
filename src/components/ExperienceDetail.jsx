import React from "react";
import Image from "next/image";
import SectionIntro from "./SectionIntro";
import { GridList, GridListItem } from "./GridList";
import { WorkExperiences } from "../data/ExperienceData";

const ExperienceDetail = () => {
  return (
    <div>
      <SectionIntro className="mt-10 mb-20" title="Work Experience" />

      <GridList>
        {WorkExperiences.map((work, index) => (
          <GridListItem
            className="mb-5"
            key={index}
            title={work.total !== undefined ? work.total : "Present"}
          >
            <div className="duration-300 transition-all">
              <div className="flex gap-4 items-center justify-between">
                <div>
                  <span className="text-base md:text-lg text-gray-500 dark:text-gray-200">
                    {work.company}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-100">
                    {work.title}
                  </h3>
                  <span className="font-light text-sm md:text-base text-gray-500 dark:text-gray-300 flex items-center gap-2">
                    {work.date}
                    {work.total && (
                      <div className="flex items-center justify-between gap-3">
                        <span>-</span>
                        <small className="text-xs text-neutral-400">
                          {work.total}
                        </small>
                      </div>
                    )}
                  </span>
                </div>
                <div className="exp-logo flex rounded-sm overflow-hidden dark:flex items-center justify-center shrink-0">
                  <Image
                    className="object-cover dark:invert-[100%] dark:sepia-[0%] dark:saturate-[0%] dark:hue-rotate-[127deg] dark:brightness-[104%] dark:contrast-[100%]"
                    width={50}
                    height={50}
                    src={work.logo}
                    alt={work.company}
                  />
                </div>
              </div>

              {work.desc && (
                <div className="mt-3 md:pr-20">
                  {Array.isArray(work.desc) ? (
                    work.desc.map((dsc, idx) => (
                      <p
                        className="font-normal text-sm md:text-lg text-neutral-600 dark:text-neutral-50"
                        key={idx}
                      >
                        {dsc}
                      </p>
                    ))
                  ) : (
                    <p className="font-normal text-sm md:text-lg text-neutral-600 dark:text-neutral-50">
                      {work.desc}
                    </p>
                  )}
                </div>
              )}
            </div>
          </GridListItem>
        ))}
      </GridList>
    </div>
  );
};

export default ExperienceDetail;
