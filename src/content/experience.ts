import type { MonthRange } from "@/lib/dates";

export interface Role {
  id: string;
  company: string;
  title: string;
  workplace: "Hybrid" | "On-site" | "Remote";
  period: MonthRange;
  /** Short, publishable highlights. Leave empty to render the role without details. */
  highlights: readonly string[];
}

export const roles: readonly Role[] = [
  {
    id: "sahibinden",
    company: "sahibinden",
    title: "Software Engineer",
    workplace: "Hybrid",
    period: { start: "2023-11" },
    highlights: [],
  },
  {
    id: "huawei",
    company: "Huawei",
    title: "Software Engineer",
    workplace: "Hybrid",
    period: { start: "2022-07", end: "2023-10" },
    highlights: [
      "Full-stack development with Vue.js, JavaScript and built-in database tools.",
      "Developed the KooSearch enterprise search service with Angular and Huawei tools.",
      "Developed ROMA Connect, a cloud-based low-code iPaaS for application and data integration, with Angular, RxJS and DevUI.",
      "Side projects with Java, Spring Boot, Express.js and MySQL.",
      "Code reviews and unit tests with Jest; mentored new team members.",
    ],
  },
  {
    id: "t-soft",
    company: "T-Soft",
    title: "Software Engineer",
    workplace: "On-site",
    period: { start: "2021-02", end: "2022-07" },
    highlights: [
      "Built the front end of 30+ e-commerce sites with Vue.js, JavaScript, jQuery and SCSS.",
      "Fixed bugs reported by customers and the testing team.",
      "Developed and revised feature requests for many well-known customers.",
    ],
  },
  {
    id: "ibm",
    company: "IBM",
    title: "Intern",
    workplace: "On-site",
    period: { start: "2014-09", end: "2015-06" },
    highlights: [
      "Supported the IT team with hardware, software and systems maintenance.",
      "Troubleshooting and technical support; organizing IT resources.",
    ],
  },
];
