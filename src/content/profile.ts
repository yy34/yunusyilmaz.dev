import type { YearMonth } from "@/lib/dates";

export const siteUrl = "https://yunusyilmaz.dev";

export const profile = {
  name: "Yunus Yılmaz",
  firstName: "Yunus",
  role: "Software Engineer",
  location: "Istanbul",
  company: "sahibinden",
  email: "yunusyilmazz34@gmail.com",
  /** First full-time role; drives the "N+ years" copy. */
  careerStart: "2021-02" as YearMonth,
  description:
    "Yunus Yılmaz is a software engineer based in Istanbul, building web applications at sahibinden.",
} as const;

export interface SocialLink {
  label: string;
  href: string;
}

export const socials: readonly SocialLink[] = [
  { label: "GitHub", href: "https://github.com/yy34" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yy34/" },
];

export interface Education {
  school: string;
  field: string;
  years: string;
}

export const education: readonly Education[] = [
  { school: "Selçuk University", field: "Computer Engineering", years: "2016 – 2021" },
  {
    school: "Ümraniye Anatolian Vocational High School",
    field: "Database Programming",
    years: "2011 – 2015",
  },
];
