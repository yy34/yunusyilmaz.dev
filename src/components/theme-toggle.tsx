"use client";

import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** `true` only after hydration, so the icon never mismatches the server render. */
function useMounted() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      isIconOnly
      variant="ghost"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onPress={() => setTheme(isDark ? "light" : "dark")}
      className="ml-1 size-11 rounded-full text-foreground hover:bg-default md:size-11"
    >
      {!mounted ? (
        <span className="size-[18px]" />
      ) : isDark ? (
        <Sun key="sun" aria-hidden className="size-[18px] animate-spin-in" strokeWidth={1.8} />
      ) : (
        <Moon key="moon" aria-hidden className="size-[18px] animate-spin-in" strokeWidth={1.8} />
      )}
    </Button>
  );
}
