"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  tagline: string;
  monthly: number;
  annual: number;
  featured?: boolean;
  features: string[];
};

const tiers: Tier[] = [
  {
    name: "Starter", tagline: "For solo operators.",
    monthly: 0, annual: 0,
    features: ["5 meetings / month", "AI summaries", "Action item extraction", "Email export"],
  },
  {
    name: "Pro", tagline: "For busy professionals.", featured: true,
    monthly: 20, annual: 16,
    features: ["Unlimited meetings", "Everything in Starter", "Searchable transcripts", "Zoom, Meet, Teams integrations", "Slack + Notion export"],
  },
  {
    name: "Team", tagline: "For teams of 5+.",
    monthly: 40, annual: 32,
    features: ["Everything in Pro", "Shared workspaces", "Role-based access", "SSO + SAML", "SOC 2 reports", "Priority support"],
  },
];

export function PricingTiers() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <div className="mb-10 flex items-center justify-center gap-3">
        <button
          onClick={() => setAnnual(false)}
          className={cn("rounded-md px-3 py-1 text-sm", !annual ? "bg-[var(--color-surface)] text-[var(--color-text)]" : "text-[var(--color-text-muted)]")}
        >Monthly</button>
        <button
          onClick={() => setAnnual(true)}
          className={cn("rounded-md px-3 py-1 text-sm", annual ? "bg-[var(--color-surface)] text-[var(--color-text)]" : "text-[var(--color-text-muted)]")}
        >Annual <span className="text-violet-400">−20%</span></button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiers.map(t => {
          const price = annual ? t.annual : t.monthly;
          return (
            <div
              key={t.name}
              className={cn(
                "rounded-xl border p-6",
                t.featured
                  ? "border-violet-500/60 bg-[var(--color-surface)] shadow-lg shadow-violet-500/10"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]",
              )}
            >
              {t.featured && (
                <span className="mb-4 inline-block rounded-full bg-violet-500/15 px-2 py-0.5 text-[11px] text-violet-300">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">{t.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">${price}</span>
                <span className="text-sm text-[var(--color-text-muted)]">/{annual ? "mo, billed annually" : "mo"}</span>
              </div>
              <Button
                render={<Link href="/app" />}
                className={cn("mt-5 w-full", t.featured && "bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90")}
                variant={t.featured ? "default" : "outline"}
              >
                {price === 0 ? "Get started" : "Start free trial"}
              </Button>
              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
                    <span className="text-[var(--color-text)]/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
