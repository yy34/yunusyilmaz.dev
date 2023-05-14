import { Icon } from "@iconify/react";
export const Tools = ({ data, title }) => {
  return (
    <div className="flex flex-col">
      <div className="relative inline-block my-12 font-sarala w-fit">
        <div
          className="block absolute -inset-2 -skew-y-3 bg-hw dark:bg-crio"
          aria-hidden="true"
        ></div>
        <div className="relative text-white text-sm md:text-base font-medium uppercase tracking-widest">
          {title}
        </div>
      </div>
      <div className="font-sarala grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {data &&
          data.map((tech, key) => (
            <div
              key={key}
              className="flex gap-5 items-center shadow-sm rounded-lg p-3 font-light text-gray-500 dark:text-white bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:hover:bg-gray-700"
            >
              <Icon icon={tech.icon} style={{ fontSize: "24px" }} />
              <div className="text-sm md:text-base">{tech.name}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
