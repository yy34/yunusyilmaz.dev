import { Educations } from "../data/ExperienceData";
import { Icon } from "@iconify/react";

export const Education = () => {
  return (
    <>
      {Educations &&
        Educations.map((edu, key) => (
          <div className="flex relative pb-8" key={key}>
            <div className="h-full top- mt-2 w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-0.5 bg-slate-200 pointer-events-none"></div>
            </div>
            <div className="inline-flex items-center justify-center relative z-10 flex-shrink-0 w-10 h-10 rounded-full text-slate-800 bg-slate-100">
              <Icon icon="cil:education" style={{ fontSize: "24px" }} />
            </div>
            <div className="flex flex-col flex-grow pl-4 ">
              <div className="font-extrabold">{edu.school}</div>
              <div className="text-sm tracking-wide font-light text-gray-500 dark:text-white">
                {edu.department}
                <small> - {edu.date} </small>
                {edu.grade && (
                  <span className="text-xs font-light text-gray-500 dark:text-gray-400 dark:font-medium">
                    - (GPA:{edu.grade}/4)
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
