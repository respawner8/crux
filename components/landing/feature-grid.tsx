import { Sparkles, ListChecks, Search, Lock } from "lucide-react";

const features = [
  { icon: Sparkles,   title: "AI summaries",   body: "Decisions, outcomes, and quotes distilled the moment your call ends." },
  { icon: ListChecks, title: "Action items",   body: "Owners, due dates, and follow-ups auto-extracted and synced to your tools." },
  { icon: Search,     title: "Search everything", body: "Find any moment — 'when did we discuss pricing?' — across every meeting." },
  { icon: Lock,       title: "Private by default", body: "Recordings never leave your workspace. SOC 2 Type II, day one." },
];

export function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm uppercase tracking-widest text-violet-400">Why Crux</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Built for the way you actually work.</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <Icon className="mb-4 h-5 w-5 text-violet-400" />
            <h3 className="mb-1 font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
