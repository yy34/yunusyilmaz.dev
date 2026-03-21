import clsx from "clsx";

const Container = ({
  as: Component = "div",
  className,
  innerClassName,
  children,
}) => {
  return (
    <Component
      className={clsx("mx-auto w-full max-w-5xl px-6 lg:px-8", className)}
    >
      <div className={clsx("mx-auto w-full", innerClassName)}>{children}</div>
    </Component>
  );
};

export default Container;
