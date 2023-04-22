import Link from "next/link";
import { Socials } from "../components/Socials";
import { Footer } from "../components/Footer";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { URL, Navigation } from "../data/Links";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {Navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 hover:bg-slate-100 hover:text-black"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="ml-1 mr-1 h-8 w-8 rounded-full p-1 sm:ml-4 bg-gray-300 fixed bottom-4 right-4"
              onClick={() =>
                setTheme(
                  theme === "dark" || resolvedTheme === "dark"
                    ? "light"
                    : "dark"
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                )}
              </svg>
            </button>
          </nav>

          <h2 className="font-bold cursor-default animate-title text-4xl md:text-6xl whitespace-nowrap bg-clip-text ">
            {`</hello>`}
          </h2>

          <div className="my-16 text-center animate-fade-in ">
            <blockquote class="font-thin text-center mb-6">
              I'm Yunus YILMAZ<br></br> I'm a Software Engineer at
              <span class="relative ml-3">
                <span
                  class="block absolute -inset-1 -skew-y-3 bg-crio"
                  aria-hidden="true"
                ></span>
                <span class="relative text-white font-thin text-xs uppercase tracking-widest">
                  <Link target="_blank" href={URL.HUAWEI}>
                    Huawei
                  </Link>
                </span>
              </span>
            </blockquote>
            <Socials />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
}
