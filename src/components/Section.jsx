import Container from "./Container";
import clsx from "clsx";

const Section = ({
  as: Component = "section",
  intro,
  className,
  contentClassName,
  children,
}) => {
  return (
    <Component className={clsx("mt-16 sm:mt-24 lg:mt-32", className)}>
      {intro}
      <Container className="mt-10 sm:mt-14">
        <div className={clsx("space-y-12 sm:space-y-14", contentClassName)}>
          {children}
        </div>
      </Container>
    </Component>
  );
};

export default Section;
