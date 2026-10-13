/** A calendar month in `YYYY-MM` form, e.g. `"2023-11"`. */
export type YearMonth = `${number}-${number}${number}`;

/** A month range; a missing `end` means the range is ongoing. */
export interface MonthRange {
  start: YearMonth;
  end?: YearMonth;
}

const monthFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function toIndex(value: YearMonth): number {
  const [year, month] = value.split("-").map(Number);
  if (!year || !month || month < 1 || month > 12) {
    throw new Error(`Invalid YearMonth: ${value}`);
  }
  return year * 12 + (month - 1);
}

function currentIndex(now: Date): number {
  return now.getUTCFullYear() * 12 + now.getUTCMonth();
}

/** Inclusive month count, matching how LinkedIn reports tenure. */
export function monthsIn(range: MonthRange, now: Date = new Date()): number {
  const end = range.end ? toIndex(range.end) : currentIndex(now);
  return Math.max(end - toIndex(range.start) + 1, 0);
}

/** `16` → `"1 yr 4 mos"`. */
export function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (rest > 0) parts.push(`${rest} ${rest === 1 ? "mo" : "mos"}`);
  return parts.join(" ") || "< 1 mo";
}

/** `"2023-11"` → `"Nov 2023"`. */
export function formatMonth(value: YearMonth): string {
  const index = toIndex(value);
  return monthFormatter.format(Date.UTC(Math.floor(index / 12), index % 12));
}

/** `{ start: "2023-11" }` → `"Nov 2023 – Present"`. */
export function formatRange(range: MonthRange): string {
  return `${formatMonth(range.start)} – ${range.end ? formatMonth(range.end) : "Present"}`;
}

/** Whole years elapsed since `start`. */
export function yearsSince(start: YearMonth, now: Date = new Date()): number {
  return Math.floor(monthsIn({ start }, now) / 12);
}
