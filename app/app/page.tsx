import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { meetings } from "@/lib/mock-data";
import { groupMeetingsByBucket } from "@/lib/utils";
import { MeetingCard } from "@/components/app/meeting-card";

export default function DashboardPage() {
  const grouped = groupMeetingsByBucket(meetings);
  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:py-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your meetings</h1>
          <p className="text-sm text-[var(--color-text-muted)]">{meetings.length} total · synced from Zoom &amp; Meet</p>
        </div>
        <Button size="sm" render={<Link href="/app/upload" />} className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90">
          <Plus className="mr-1 h-4 w-4" />New
        </Button>
      </div>

      <div className="space-y-8">
        {grouped.map(([bucket, items]) => (
          <section key={bucket}>
            <div className="mb-3 text-xs font-semibold tracking-[0.1em] text-[var(--color-text-subtle)]">
              {bucket}
            </div>
            <div className="space-y-3">
              {items.map(m => <MeetingCard key={m.id} meeting={m} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
