import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PricingTiers } from "@/components/pricing/pricing-tiers";

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-widest text-violet-400">Pricing</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Simple, flat pricing.</h1>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">
            Free to start. No credit card required. Cancel anytime.
          </p>
        </div>
        <PricingTiers />
      </main>
      <SiteFooter />
    </>
  );
}
