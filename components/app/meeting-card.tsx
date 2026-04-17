import Link from "next/link";
import type { Meeting } from "@/lib/types";
import { relativeDate } from "@/lib/utils";
import { Participants } from "./participants";

export function MeetingCard({ meeting }: { meeting: Meeting }) {
  const openCount = meeting.actionItems.filter(a => !a.done).length;
  return (
    <Link
      href={`/app/meetings/${meeting.id}`}
      className="block rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-colors hover:border-violet-500/40"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-[var(--color-text)]">{meeting.title}</h3>
          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
            {meeting.summary}
          </p>
        </div>
        <span className="shrink-0 text-xs text-[var(--color-text-subtle)]">{relativeDate(meeting.date)}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Participants users={meeting.participants} />
        <div className="flex gap-1.5 text-[11px]">
          <span className="rounded bg-violet-500/15 px-2 py-0.5 text-violet-300">
            {openCount} action item{openCount === 1 ? "" : "s"}
          </span>
          <span className="rounded bg-[var(--color-surface-2)] px-2 py-0.5 text-[var(--color-text-muted)]">
            {meeting.durationMinutes} min
          </span>
        </div>
      </div>
    </Link>
  );
}
