import FadeIn, { FadeInStagger } from "./FadeIn";
import clsx from "clsx";

const List = ({ className, children }) => {
  return (
    <FadeInStagger>
      <ul role="list" className={clsx("text-base text-neutral-600", className)}>
        {children}
      </ul>
    </FadeInStagger>
  );
};

export const ListItem = ({ title, children }) => {
  return (
    <li className="group mt-10 first:mt-0">
      <FadeIn>{children}</FadeIn>
    </li>
  );
};

export default List;
