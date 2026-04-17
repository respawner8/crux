import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <p className="mb-2 text-sm uppercase tracking-widest text-violet-400">404</p>
        <h1 className="text-4xl font-semibold tracking-tight">Page not found.</h1>
        <p className="mt-3 text-[var(--color-text-muted)]">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Button render={<Link href="/" />} className="mt-6 bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90">
          Take me home
        </Button>
      </main>
      <SiteFooter />
    </>
  );
}
