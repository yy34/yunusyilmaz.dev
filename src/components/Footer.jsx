import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";

import Socials from "./Socials";

const ArrowIcon = (props) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const Footer = () => {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2"></div>
        <div className="mb-20 mt-24 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Socials></Socials>
        </div>
      </FadeIn>
    </Container>
  );
};

export default Footer;
