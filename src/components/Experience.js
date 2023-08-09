import { WorkExperience } from "./WorkExperience";
import { Education } from "./Education";
import { AboutTitle } from "./AboutTitle";
export const Experience = () => {
  return (
    <section className="mb-10">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col">
          <>
            <AboutTitle title="Experience" />
            <WorkExperience />
          </>
          <>
            <AboutTitle title="Education" />
            <Education />
          </>
        </div>
      </div>
    </section>
  );
};
