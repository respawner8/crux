import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/landing/hero";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { SamplePreview } from "@/components/landing/sample-preview";
import { Testimonials } from "@/components/landing/testimonials";
import { PricingCta } from "@/components/landing/pricing-cta";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureGrid />
        <SamplePreview />
        <Testimonials />
        <PricingCta />
      </main>
      <SiteFooter />
    </>
  );
}
