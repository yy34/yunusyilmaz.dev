import { WorkExperiences } from "../data/Datas";
import { Icon } from "@iconify/react";

export const WorkExperience = () => {
  return (
    <>
      {WorkExperiences &&
        WorkExperiences.map((exp, key) => (
          <div className="flex relative pb-8" key={key}>
            <div className="h-full top-3 mt-2 w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-slate-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full text-slate-800  bg-slate-100 inline-flex items-center justify-center relative z-10">
              <Icon
                icon="mdi:office-building-marker-outline"
                style={{ fontSize: "24px" }}
              />
            </div>

            <div className="flex-grow pl-4 flex flex-col gap-1">
              <div className="font-extrabold flex items-center">
                {exp.company}
                <span className="text-sm ml-1  capitalize tracking-wide font-medium text-crio dark:text-gray-400">
                  - {exp.title}
                </span>
              </div>

              <div className="font-light text-gray-500 dark:text-gray-300">
                <small>
                  {exp.date} - <small>{exp.total}</small>
                </small>
              </div>
              <div className="font-light text-gray-500 dark:text-white tracking-wide text-sm leading-relaxed">
                {exp.desc}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
