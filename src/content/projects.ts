export interface Project {
  title: string;
  summary: string;
  year: string;
  role?: string;
  stack?: readonly string[];
  href?: string;
}

/** Only publish work that can be shared clearly and publicly. */
export const projects: readonly Project[] = [];
