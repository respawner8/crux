const quotes = [
  { name: "Dana Okafor",   role: "Head of Product, Lumen Labs", text: "Crux replaced our meeting-notes Slack channel entirely. We actually read the summaries." },
  { name: "Jonas Müller",  role: "Founder, Vellum",             text: "I stopped taking notes in client calls. The action items are better than what I\u2019d write myself." },
  { name: "Maya Sheridan", role: "VP Eng, Relayr",              text: "Our async docs got 10\u00d7 better when every meeting turned into a searchable artifact." },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <p className="mb-2 text-sm uppercase tracking-widest text-violet-400">Loved by operators</p>
      <h2 className="mb-10 text-3xl font-semibold tracking-tight md:text-4xl">Teams who ship more, meet less.</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {quotes.map(q => (
          <figure key={q.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <blockquote className="text-sm leading-relaxed text-[var(--color-text)]/90">&ldquo;{q.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-xs text-[var(--color-text-muted)]">
              <span className="font-semibold text-[var(--color-text)]">{q.name}</span> — {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
