import React from "react";
import { Icon } from "@iconify/react";
import FadeIn, { FadeInStagger } from "./FadeIn";
const TechList = ({ techStack }) => {
  return (
    <FadeIn>
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-fluid gap-3">
          {techStack.map((tech, key) => (
            <div
              key={key}
              className="flex flex-col gap-2 items-center justify-center text-center bg-neutral-50 hover:bg-neutral-100 dark:bg-bgBlack rounded-lg py-3 px-1 font-light"
            >
              <Icon icon={tech.icon} style={{ fontSize: "30px" }} />
              <span className="font-normal text-neutral-950 dark:text-neutral-50 text-sm">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default TechList;
