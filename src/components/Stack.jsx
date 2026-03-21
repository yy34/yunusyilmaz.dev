import React from "react";
import SectionIntro from "./SectionIntro";
import Section from "./Section";
import TechList from "./TechList";
import { Frontend, Backend, Others } from "../data/Tools";

const Stack = () => {
  return (
    <Section
      intro={
        <SectionIntro
        eyebrow="The following is my on-the-go app stack for designing, coding, managing & all.."
        title="Tech Stack"
        />
      }
      contentClassName="space-y-10"
    >
      <div>
        <SectionIntro smaller>Front End</SectionIntro>
        <TechList className="mt-6" techStack={Frontend} />
      </div>
      <div>
        <SectionIntro smaller>Back End</SectionIntro>
        <TechList className="mt-6" techStack={Backend} />
      </div>
      <div>
        <SectionIntro smaller>Others</SectionIntro>
        <TechList className="mt-6" techStack={Others} />
      </div>
    </Section>
  );
};

export default Stack;
