import Link from "next/link";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm text-[var(--color-text-muted)] md:flex">
          <Link href="/#features" className="hover:text-[var(--color-text)]">Product</Link>
          <Link href="/pricing" className="hover:text-[var(--color-text)]">Pricing</Link>
          <Link href="/app" className="hover:text-[var(--color-text)]">Demo</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/app" />}
            variant="ghost"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Log in
          </Button>
          <Button
            render={<Link href="/app" />}
            size="sm"
            className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90"
          >
            Try the demo
          </Button>
        </div>
      </div>
    </header>
  );
}
