import { Footer } from "./Footer";

import { ThemeSwitch } from "./ThemeSwitch";

export const LayoutWrapper = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="mx-auto container p-5">
        <main>{children}</main>
      </div>
      <Footer />
      <ThemeSwitch />
    </div>
  );
};
