import clsx from "clsx";

const Container = ({ as: Component = "div", className, children }) => {
  return (
    <Component className={clsx("max-w-5xl mx-auto px-6 lg:px-8", className)}>
      <div className="max-w-4xl mx-auto lg:max-w-xl">{children}</div>
    </Component>
  );
};

export default Container;
