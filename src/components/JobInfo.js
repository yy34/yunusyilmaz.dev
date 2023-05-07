import { Socials } from "../components/Socials";
import { URL } from "../data/Links";
import Link from "next/link";

export const JobInfo = () => {
  return (
    <div className="animate-fade-in text-center">
      <blockquote className="mb-6 font-light text-gray-500 dark:text-gray-400 text-base">
        I'm Yunus YILMAZ<br></br> I'm a Software Engineer at
        <span className="relative ml-3">
          <span
            className="block absolute -inset-1 -skew-y-3 bg-hwred opacity-80 dark:opacity-100 dark:bg-purp"
            aria-hidden="true"
          ></span>
          <span className="relative text-white font-thin text-xs uppercase tracking-widest">
            <Link target="_blank" href={URL.HUAWEI}>
              Huawei
            </Link>
          </span>
        </span>
      </blockquote>
      <Socials />
    </div>
  );
};
