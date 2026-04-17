import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PricingCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12">
        <div className="glow-blob absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full"
             style={{ background: "radial-gradient(circle, rgba(99,102,241,0.45) 0%, transparent 70%)" }} />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Try Crux free for 14 days.</h2>
            <p className="mt-2 text-[var(--color-text-muted)]">No credit card. Cancel anytime. Full product access.</p>
          </div>
          <div className="flex gap-2">
            <Button size="lg" render={<Link href="/app" />} className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90">
              Launch demo
            </Button>
            <Button size="lg" variant="ghost" render={<Link href="/pricing" />}>
              See pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
