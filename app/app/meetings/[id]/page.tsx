import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { meetings, meetingById } from "@/lib/mock-data";
import { Participants } from "@/components/app/participants";
import { ActionItems } from "@/components/app/action-items";
import { Transcript } from "@/components/app/transcript";

export function generateStaticParams() {
  return meetings.map(m => ({ id: m.id }));
}

export default async function MeetingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const meeting = meetingById(id);
  if (!meeting) notFound();

  const when = new Date(meeting.date).toLocaleString("en-US", {
    weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 md:py-10">
      <Link href="/app" className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
        <ArrowLeft className="h-3.5 w-3.5" /> Meetings
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">{meeting.title}</h1>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          {when} · {meeting.durationMinutes} min · {meeting.participants.length} participants
        </p>
        <div className="mt-3">
          <Participants users={meeting.participants} max={8} />
        </div>
      </header>

      <section className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="mb-3 text-xs font-semibold tracking-[0.1em] text-violet-400">SUMMARY</h2>
        <p className="text-sm leading-relaxed text-[var(--color-text)]/90">{meeting.summary}</p>
        {meeting.keyPoints.length > 0 && (
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-[var(--color-text)]/80 marker:text-violet-400">
            {meeting.keyPoints.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        )}
      </section>

      <section className="mb-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="mb-3 text-xs font-semibold tracking-[0.1em] text-violet-400">
          ACTION ITEMS · {meeting.actionItems.length}
        </h2>
        <ActionItems items={meeting.actionItems} />
      </section>

      <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="mb-3 text-xs font-semibold tracking-[0.1em] text-violet-400">TRANSCRIPT</h2>
        <Transcript entries={meeting.transcript} />
      </section>
    </div>
  );
}
