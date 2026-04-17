import Link from "next/link";

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 font-semibold tracking-tight text-[var(--color-text)]">
      <span
        aria-hidden
        className="inline-block h-5 w-5 rounded-[6px]"
        style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-accent-2))" }}
      />
      <span>Crux</span>
    </Link>
  );
}
