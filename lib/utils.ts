import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import type { Meeting } from "./types";

export function relativeDate(iso: string): string {
  const d = new Date(iso);
  const ms = Date.now() - d.getTime();
  const mins = Math.floor(ms / 60_000);
  const hrs  = Math.floor(ms / 3_600_000);
  const days = Math.floor(ms / 86_400_000);
  if (mins < 60) return `${mins}m ago`;
  if (hrs < 24) return `${hrs}h ago`;
  if (days < 2) return "Yesterday";
  if (days < 7) return d.toLocaleDateString("en-US", { weekday: "short" });
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export type DateBucket = "TODAY" | "YESTERDAY" | "THIS WEEK" | "EARLIER";

export function bucketFor(iso: string): DateBucket {
  const d = new Date(iso);
  const days = (Date.now() - d.getTime()) / 86_400_000;
  if (days < 1) return "TODAY";
  if (days < 2) return "YESTERDAY";
  if (days < 7) return "THIS WEEK";
  return "EARLIER";
}

export function groupMeetingsByBucket(items: Meeting[]): Array<[DateBucket, Meeting[]]> {
  const order: DateBucket[] = ["TODAY", "YESTERDAY", "THIS WEEK", "EARLIER"];
  const map = new Map<DateBucket, Meeting[]>();
  for (const m of items) {
    const b = bucketFor(m.date);
    if (!map.has(b)) map.set(b, []);
    map.get(b)!.push(m);
  }
  return order.filter(b => map.has(b)).map(b => [b, map.get(b)!] as const);
}
