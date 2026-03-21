import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const SectionIntro = ({
  eyebrow,
  title,
  children,
  smaller = false,
  className,
  ...props
}) => {
  const heading = title ?? children;
  const description = title ? children : null;
  const HeadingTag = smaller ? "h3" : "h2";

  if (smaller) {
    return (
      <FadeIn>
        <div className={clsx("mt-12 first:mt-0", className)}>
          <HeadingTag className="text-lg font-medium tracking-tight text-neutral-950 dark:text-neutral-50 md:text-xl text-center">
            {heading}
          </HeadingTag>
        </div>
      </FadeIn>
    );
  }

  return (
    <Container
      {...props}
      className={clsx("text-center", className)}
      innerClassName="max-w-3xl"
    >
      <FadeIn>
        <HeadingTag>
          {eyebrow && (
            <>
              <span
                className="block text-sm font-medium tracking-[0.18em] text-neutral-500 dark:text-neutral-400"
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] dark:text-neutral-50 sm:text-4xl",
              eyebrow && "mt-10"
            )}
          >
            {heading}
          </span>
        </HeadingTag>

        {description && (
          <div className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300 md:mx-auto md:text-lg md:leading-8">
            {description}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionIntro;
