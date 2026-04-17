import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-24 md:pt-32 md:pb-32">
      <div className="glow-blob absolute -top-20 left-1/2 h-[340px] w-[340px] -translate-x-1/2 rounded-full"
           style={{ background: "radial-gradient(circle, rgba(139,92,246,0.55) 0%, transparent 70%)" }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-400" />
          New · AI meeting copilot
        </div>
        <h1 className="text-gradient text-5xl font-semibold tracking-tighter md:text-7xl">
          Your meetings,<br />superpowered.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-muted)] md:text-lg">
          Real-time AI transcription and summaries. Never miss a decision, action item, or quote — ready the moment your call ends.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/app" />} className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90">
            Launch the demo →
          </Button>
          <Button size="lg" variant="ghost" render={<Link href="/pricing" />}>
            See pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
