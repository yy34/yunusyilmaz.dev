"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";
import { I18nProvider } from "react-aria-components";
import { ToastHost } from "./toast-host";

export function Providers({ children }: { children: ReactNode }) {
  return (
    // The site is English-only; keep React Aria's built-in labels from following the browser locale.
    <I18nProvider locale="en-US">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <ToastHost />
      </ThemeProvider>
    </I18nProvider>
  );
}
