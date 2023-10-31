import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  invert = false,
  ...props
}) => {
  return (
    <Container {...props}>
      <FadeIn>
        <div className="relative h-12 w-12 md:h-24 md:w-24 items-center justify-center mx-auto">
          <div className="absolute inset-0 flex flex-wrap blur-3xl">
            <div
              aria-hidden="true"
              className="h-1/2 w-1/2 rounded-tl-full bg-primary"
            ></div>
            <div
              aria-hidden="true"
              className="h-1/2 w-1/2 rounded-tr-full bg-purple-700"
            ></div>
            <div
              aria-hidden="true"
              className="h-1/2 w-1/2 rounded-bl-full bg-secondary"
            ></div>
            <div
              aria-hidden="true"
              className="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"
            ></div>
          </div>
        </div>
        <h2 className="text-center">
          <span
            className={clsx(
              "block tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950 dark:text-neutral-50",
              smaller ? "sm:text-lg px-0" : "sm:text-5xl"
            )}
          >
            {title}
          </span>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "my-3 block font-display text-sm md:text-base font-thin  text-neutral-950 dark:text-neutral-50"
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
        </h2>

        {children && (
          <div
            className={clsx(
              "text-base md:text-lg mb-5 text-center uppercase tracking-widest text-neutral-950 dark:text-neutral-50"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionIntro;
