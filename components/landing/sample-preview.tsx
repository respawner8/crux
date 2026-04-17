export function SamplePreview() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xl shadow-violet-500/5 md:p-8">
        <div className="mb-4 flex items-center gap-2 text-xs text-[var(--color-text-subtle)]">
          <span aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#f87171]" />
            <span className="h-2 w-2 rounded-full bg-[#fbbf24]" />
            <span className="h-2 w-2 rounded-full bg-[#4ade80]" />
          </span>
          <span className="ml-2">crux.app / meetings / q2-roadmap-review</span>
        </div>
        <div className="rounded-xl bg-[var(--color-bg)] p-6 md:p-8">
          <h3 className="text-lg font-semibold md:text-xl">Q2 Roadmap Review</h3>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">Today · 32 min · 5 people</p>
          <div className="mt-5 text-xs font-semibold uppercase tracking-widest text-violet-400">Summary</div>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-text)]/90">
            The team aligned on three Q2 priorities: payments v2, AI copilot launch, and onboarding overhaul.
            Engineering capacity was flagged as tight; the launch target moved from April 30 to May 15.
          </p>
          <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-violet-400">Action items</div>
          <ul className="mt-2 space-y-1.5 text-sm">
            <li className="text-[var(--color-text)]/90"><span aria-hidden="true">☐</span> <strong>Priya</strong> · Finalize payments v2 spec · Fri</li>
            <li className="text-[var(--color-text)]/90"><span aria-hidden="true">☐</span> <strong>Marc</strong>  · Run eng capacity review  · Mon</li>
            <li className="text-[var(--color-text)]/90"><span aria-hidden="true">☐</span> <strong>Ana</strong>   · Draft onboarding flows   · Wed</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
