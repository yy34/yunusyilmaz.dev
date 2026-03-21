import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const PageIntro = ({ eyebrow, title, children, centered = false }) => {
  return (
    <Container
      className={clsx("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
      innerClassName="max-w-3xl"
    >
      <FadeIn>
        <h1>
          {eyebrow && (
            <>
              <span className="block text-sm font-medium tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] dark:text-neutral-50 sm:text-5xl",
              eyebrow && "mt-6",
              centered && "mx-auto"
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300 md:text-lg md:leading-8",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
};

export default PageIntro;
