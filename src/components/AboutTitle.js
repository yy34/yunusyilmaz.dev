import React from "react";

export const AboutTitle = ({ title }) => {
  return (
    <div className="relative inline-block font-sarala w-fit my-10">
      <div
        className="block absolute -inset-2 -skew-y-3 bg-crio dark:bg-clare"
        aria-hidden="true"
      ></div>
      <div className="relative text-white text-base font-medium uppercase tracking-widest">
        {title}
      </div>
    </div>
  );
};
