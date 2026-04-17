import Link from "next/link";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-[var(--color-text-subtle)]">© 2026 Crux</span>
        </div>
        <nav className="flex flex-wrap gap-4">
          <Link href="/#features" className="hover:text-[var(--color-text)]">Product</Link>
          <Link href="/pricing" className="hover:text-[var(--color-text)]">Pricing</Link>
          <Link href="/app" className="hover:text-[var(--color-text)]">Demo</Link>
          <a href="https://github.com/respawner8/crux" className="hover:text-[var(--color-text)]">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
