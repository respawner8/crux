import type { User } from "@/lib/types";

export function Participants({ users, max = 4 }: { users: User[]; max?: number }) {
  const shown = users.slice(0, max);
  const extra = users.length - shown.length;
  return (
    <div className="flex items-center">
      {shown.map((u, i) => (
        <div
          key={u.id}
          title={u.name}
          className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-bg)] text-[10px] font-semibold text-white"
          style={{ background: u.color, marginLeft: i === 0 ? 0 : -8 }}
        >
          {u.initials}
        </div>
      ))}
      {extra > 0 && (
        <div className="-ml-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-surface-2)] text-[10px] text-[var(--color-text-muted)]">
          +{extra}
        </div>
      )}
    </div>
  );
}
