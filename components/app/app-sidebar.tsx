"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Upload, Settings } from "lucide-react";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const items = [
  { href: "/app",          label: "Meetings", icon: Home },
  { href: "/app/upload",   label: "Upload",   icon: Upload },
  { href: "/app/settings", label: "Settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-56 shrink-0 flex-col border-r border-[var(--color-border)] bg-[var(--color-bg)] md:flex">
      <div className="px-4 py-4"><Logo href="/" /></div>
      <nav className="flex flex-col gap-0.5 px-2 py-2 text-sm">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 transition-colors",
                active
                  ? "bg-[var(--color-surface)] text-[var(--color-text)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto border-t border-[var(--color-border)] p-3">
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-[10px] font-semibold text-white">NA</div>
          <div>
            <div className="text-[var(--color-text)]">Demo User</div>
            <div className="text-[var(--color-text-subtle)]">Free plan</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
