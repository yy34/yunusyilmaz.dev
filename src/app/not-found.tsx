import { MoreLink } from "@/components/links";

export default function NotFound() {
  return (
    <section className="enter mt-18 sm:mt-30">
      <h1 className="text-[28px] font-semibold tracking-tight text-foreground sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-4 text-[17px] leading-relaxed">This page doesn't exist or has moved.</p>
      <div className="mt-4">
        <MoreLink href="/">Back home</MoreLink>
      </div>
    </section>
  );
}
