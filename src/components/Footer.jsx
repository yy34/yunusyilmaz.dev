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
      <div className="flex justify-center border-t border-neutral-950/10 dark:border-neutral-700 py-5">
        <Socials></Socials>
      </div>
    </Container>
  );
};

export default Footer;
