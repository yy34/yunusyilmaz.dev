"use client";

import type { HeroUIToastOptions } from "@heroui/react";
import dynamic from "next/dynamic";
import { type ReactNode, useSyncExternalStore } from "react";

// Toasts only appear after a click, so keep their code (~14KB gz) off the initial load.
const ToastProvider = dynamic(
  () => import("@heroui/react/toast").then((mod) => mod.Toast.Provider),
  { ssr: false },
);

let mounted = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Mounts the toast region on first use; renders nothing until then. */
export function ToastHost() {
  const show = useSyncExternalStore(
    subscribe,
    () => mounted,
    () => false,
  );
  return show ? <ToastProvider placement="bottom" width={360} maxVisibleToasts={1} /> : null;
}

export async function showToast(message: ReactNode, options?: HeroUIToastOptions) {
  if (!mounted) {
    mounted = true;
    for (const listener of listeners) listener();
  }
  const { toast } = await import("@heroui/react/toast");
  toast(message, options);
}
