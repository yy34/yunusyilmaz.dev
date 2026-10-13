import type { CSSProperties, ReactNode } from "react";

/** Inline style that staggers the `enter` animation by `step` × 60ms. */
export function enterStep(step: number): CSSProperties {
  return { "--enter-step": step } as CSSProperties;
}

export function Section({
  title,
  id,
  step,
  children,
}: {
  title: string;
  id?: string;
  step: number;
  children: ReactNode;
}) {
  const headingId = `${id ?? title.toLowerCase().replaceAll(" ", "-")}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="enter mt-24" style={enterStep(step)}>
      <h2 id={headingId} className="mb-4 text-[15px] font-medium text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
