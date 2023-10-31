import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import TechList from "./TechList";
import { Frontend, Backend, Others, WantToLearn } from "../data/Tools";

const Stack = () => {
  return (
    <div className="relative mt-12 pt-12 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro
        eyebrow="The following is my on-the-go app stack for designing, coding, managing & all.."
        title="Tech Stack"
      ></SectionIntro>

      <Container>
        <SectionIntro smaller>Front End</SectionIntro>
        <TechList techStack={Frontend} />
        <SectionIntro smaller>Back End</SectionIntro>
        <TechList techStack={Backend} />
        <SectionIntro smaller>Others</SectionIntro>
        <TechList techStack={Others} />
        <SectionIntro smaller>Will Learn</SectionIntro>
        <TechList techStack={WantToLearn} />
      </Container>
    </div>
  );
};

export default Stack;
