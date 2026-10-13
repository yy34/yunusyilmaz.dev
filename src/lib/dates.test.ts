import { describe, expect, it } from "vitest";
import { formatDuration, formatMonth, formatRange, monthsIn, yearsSince } from "./dates";

const now = new Date(Date.UTC(2026, 9, 13)); // Oct 2026

describe("monthsIn", () => {
  it("counts both ends of a closed range", () => {
    expect(monthsIn({ start: "2022-07", end: "2023-10" })).toBe(16);
    expect(monthsIn({ start: "2014-09", end: "2015-06" })).toBe(10);
  });

  it("runs an open range up to the current month", () => {
    expect(monthsIn({ start: "2023-11" }, now)).toBe(36);
  });

  it("rejects malformed months", () => {
    expect(() => monthsIn({ start: "2023-13" })).toThrow();
  });
});

describe("formatDuration", () => {
  it.each([
    [1, "1 mo"],
    [10, "10 mos"],
    [12, "1 yr"],
    [16, "1 yr 4 mos"],
    [36, "3 yrs"],
    [0, "< 1 mo"],
  ])("%i months → %s", (months, expected) => {
    expect(formatDuration(months)).toBe(expected);
  });
});

describe("formatting", () => {
  it("formats months and ranges", () => {
    expect(formatMonth("2021-02")).toBe("Feb 2021");
    expect(formatRange({ start: "2022-07", end: "2023-10" })).toBe("Jul 2022 – Oct 2023");
    expect(formatRange({ start: "2023-11" })).toBe("Nov 2023 – Present");
  });

  it("computes whole years since a start month", () => {
    expect(yearsSince("2021-02", now)).toBe(5);
  });
});
