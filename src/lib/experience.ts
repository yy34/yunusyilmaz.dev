import type { ExperienceItem } from "@/components/experience-list";
import type { Role } from "@/content/experience";
import { formatDuration, formatRange, monthsIn } from "./dates";

export function toExperienceItems(roles: readonly Role[], now = new Date()): ExperienceItem[] {
  return roles.map((role) => ({
    id: role.id,
    company: role.company,
    title: role.title,
    period: formatRange(role.period),
    duration: formatDuration(monthsIn(role.period, now)),
    highlights: role.highlights,
  }));
}
