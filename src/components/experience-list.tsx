"use client";

import { Accordion } from "@heroui/react";
import { ChevronRight } from "lucide-react";

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  duration: string;
  highlights: readonly string[];
}

function RowSummary({ item }: { item: ExperienceItem }) {
  return (
    <>
      <span
        aria-hidden
        className="grid size-10 shrink-0 place-items-center rounded-[10px] border border-border bg-background text-[13px] font-semibold text-foreground"
      >
        {item.company.charAt(0)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-medium text-foreground">{item.company}</span>
        <span className="block text-sm text-muted">{item.title}</span>
        <span className="block text-[13px] text-muted tabular-nums sm:hidden">{item.period}</span>
      </span>
      <span className="hidden text-right text-[13px] whitespace-nowrap text-muted tabular-nums sm:block">
        {item.period}
        <span className="block text-xs">{item.duration}</span>
      </span>
    </>
  );
}

/** Work history as a single-open accordion; roles without highlights render as static rows. */
export function ExperienceList({ items }: { items: readonly ExperienceItem[] }) {
  return (
    <Accordion hideSeparator className="-mx-3 flex flex-col gap-0.5">
      {items.map((item) =>
        item.highlights.length === 0 ? (
          <div key={item.id} className="flex items-center gap-3.5 rounded-xl px-3 py-3 pr-10">
            <RowSummary item={item} />
          </div>
        ) : (
          <Accordion.Item
            key={item.id}
            id={item.id}
            className="rounded-xl transition-colors duration-200 hover:bg-default data-[expanded=true]:bg-default"
          >
            <Accordion.Heading>
              <Accordion.Trigger className="w-full gap-3.5 rounded-xl px-3 py-3 text-base font-normal hover:bg-transparent">
                <RowSummary item={item} />
                <Accordion.Indicator className="ms-0 size-4 text-muted duration-300 ease-out-soft data-[expanded=true]:rotate-90">
                  <ChevronRight />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body className="px-3 pt-0 pb-4 text-text">
                <ul className="flex flex-col gap-1.5 text-sm leading-relaxed sm:pl-[54px]">
                  {item.highlights.map((line) => (
                    <li
                      key={line}
                      className="relative pl-3.5 before:absolute before:top-[9px] before:left-0 before:size-1 before:rounded-full before:bg-muted before:content-['']"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ),
      )}
    </Accordion>
  );
}
