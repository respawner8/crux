import { AppSidebar } from "./app-sidebar";
import { MobileNav } from "./mobile-nav";
import { Logo } from "@/components/logo";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center gap-2 border-b border-[var(--color-border)] px-3 md:hidden">
          <MobileNav />
          <Logo href="/app" />
        </header>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
