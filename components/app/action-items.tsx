"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import type { ActionItem } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ActionItems({ items }: { items: ActionItem[] }) {
  const [state, setState] = useState<Record<string, boolean>>(
    Object.fromEntries(items.map(i => [i.id, i.done])),
  );
  const toggle = (id: string) => setState(s => ({ ...s, [id]: !s[id] }));

  return (
    <ul className="space-y-2">
      {items.map(item => {
        const done = state[item.id];
        return (
          <li key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-start gap-3 rounded-lg p-2 text-left hover:bg-[var(--color-surface-2)]"
            >
              <span
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border",
                  done
                    ? "border-violet-500 bg-violet-500 text-white"
                    : "border-[var(--color-text-subtle)]",
                )}
              >
                {done && <Check className="h-3 w-3" />}
              </span>
              <span className={cn("flex-1 text-sm leading-relaxed", done && "text-[var(--color-text-subtle)] line-through")}>
                <strong className="text-[var(--color-text)]">{item.owner.name.split(" ")[0]}</strong> — {item.text}
                {item.dueDate && <span className="text-[var(--color-text-subtle)]"> · {item.dueDate}</span>}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
