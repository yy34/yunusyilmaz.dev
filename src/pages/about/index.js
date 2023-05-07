import { Navbar } from "../../components/Navbar";
import { Experience } from "../../components/Experience";
import Image from "next/image";
import mypic from "../../assets/images/profile.jpg";

export default function Index() {
  return (
    <>
      <Navbar />
      <div className="animate-fade-in-short">
        <div className="max-w-screen-lg mx-auto py-6">
          <div className="md:flex items-center gap-16">
            <div className="flex md:flex-col md:gap-3 flex-shrink-0 items-center justify-evenly md:justify-center text-center my-5">
              <Image
                src={mypic}
                alt="Yunus Yilmaz"
                className="h-32 w-32 object-cover rounded-full flex-shrink-0"
              />
              <div className="hidden">
                <div className="font-extrabold">Yunus YILMAZ</div>
                <div className="text-sm font-light text-center text-gray-500">
                  1996 - Istanbul
                </div>
              </div>
            </div>
            <blockquote className="italic font-thin text-base leading-relaxed my-3">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-slate-400"
                viewBox="0 0 24 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"
                />
              </svg>
              <div className="font-light text-center text-gray-500">
                I’m a full stack software engineer working at{" "}
                <strong className="font-extrabold dark:text-zinc-300">
                  Huawei.
                </strong>{" "}
                I love my job, follow new technologies and software industry
                closely. I care a lot about design and minimalism, I try to
                produce designs that appeal to people's eyes, and I don’t
                hesitate to share my knowledge with my teammates and try to
                increase their motivation. I also pay attention to communication
                within the team, try to take a proactive role in every project
                and focus on continuous self-improvement.
              </div>
            </blockquote>
          </div>
        </div>
        <Experience />
      </div>
    </>
  );
}
