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
              <div>
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
                I am a engineer who is passionate about his job,{" "}
                <strong className="font-extrabold dark:text-zinc-300">
                  follows new technologies
                </strong>
                ,{" "}
                <strong className="font-extrabold dark:text-zinc-300">
                  follows the software industry closely
                </strong>
                ,{" "}
                <strong className="font-extrabold dark:text-zinc-300">
                  increases the motivation of my colleagues
                </strong>{" "}
                and enjoys conveying what I know to them.<br></br>I am a person
                who cares about design and minimalism, tries to make designs
                that are pleasing to the eyes of people, uses the latest
                Javascript features and libraries, and also experiences backend
                technologies.
              </div>
            </blockquote>
          </div>
        </div>
        <Experience />
      </div>
    </>
  );
}
