"use client";

import { Button } from "@heroui/react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/content/profile";
import { showToast } from "./toast-host";

export function CopyEmailButton() {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      await showToast("Email copied to clipboard", {
        indicator: <Check aria-hidden className="size-4" strokeWidth={2.4} />,
        timeout: 2500,
      });
    } catch {
      // Clipboard can be blocked (permissions, insecure context): show the address instead.
      await showToast(profile.email, {
        description: "Couldn't copy automatically.",
        actionProps: {
          children: "Open mail",
          onPress: () => window.location.assign(`mailto:${profile.email}`),
        },
        timeout: 6000,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      onPress={copy}
      className="group h-11 gap-1.5 rounded-none bg-transparent px-0 font-normal text-muted hover:bg-transparent hover:text-foreground data-[pressed=true]:scale-[0.97] md:h-11"
    >
      Copy email
      <Copy
        aria-hidden
        className="size-3.5 transition-transform duration-200 group-hover:-rotate-6"
      />
    </Button>
  );
}
