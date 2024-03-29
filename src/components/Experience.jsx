import Container from "./Container";
import Image from "next/image";
import Button from "./Button";
import SectionIntro from "./SectionIntro";
import { GridList, GridListItem } from "./GridList";
import { WorkExperiences } from "../data/ExperienceData";

const Experience = () => {
  return (
    <div className="relative mt-12 pt-12 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro title="Work Experience"></SectionIntro>

      <Container className="mt-12 md:mt-24">
        <GridList>
          {WorkExperiences.map((work, key) => (
            <GridListItem
              key={key}
              title={work.total !== undefined ? work.total : "Present"}
            >
              <div className="max-w-2xl mx-auto border2 border-borderLight rounded-lg py-6 px-3 dark:px-6 dark:bg-bgBlack hover:bg-neutral-100 dark:hover:bg-neutral-700 duration-300 transition-all">
                <div className="flex gap-4 items-center justify-between">
                  <div>
                    <span className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
                      {work.company}
                    </span>
                    <h3 className="text-base md:text-xl font-semibold text-gray-600 dark:text-gray-200">
                      {work.title}
                    </h3>
                    <span className="font-light text-sm md:text-base text-gray-500 dark:text-gray-400">
                      {work.date}
                    </span>
                  </div>
                  <div className="exp-logo flex rounded-sm overflow-hidden dark:flex items-center justify-center">
                    <Image
                      className="object-cover dark:invert-[100%] dark:sepia-[0%] dark:saturate-[0%] dark:hue-rotate-[127deg] dark:brightness-[104%] dark:contrast-[100%]"
                      width={50}
                      height={50}
                      src={work.logo}
                      alt={work.company}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-400 gap-3">
                  {work.total}
                </div>
              </div>
            </GridListItem>
          ))}
        </GridList>

        <div className="mt-20 flex justify-center">
          <Button href="about">More Detail</Button>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
