import React from "react";
import { Icon } from "@iconify/react";
import FadeIn, { FadeInStagger } from "./FadeIn";
const TechList = ({ techStack }) => {
  return (
    <FadeIn>
      <div className="max-w-md mx-auto my-10">
        <div className="grid grid-cols-fluid gap-y-12">
          {techStack.map((tech, key) => (
            <div
              key={key}
              className="group flex justify-center items-center relative"
            >
              <Icon
                className="w-12 h-12 object-cover cursor-pointer rounded-md"
                icon={tech.icon}
                style={{ fontSize: "48px" }}
              />

              <span
                className="group-hover:opacity-100 transition-all duration-500 whitespace-nowrap bg-neutral-600 text-xs md:text-sm text-center text-gray-100 rounded-md absolute left-1/2 
-translate-x-1/2 translate-y-10  md:translate-y-12 opacity-0 m-4 mx-auto px-3 py-1 z-10"
              >
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
