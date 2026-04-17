"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { TranscriptEntry } from "@/lib/types";
import { cn } from "@/lib/utils";

export function Transcript({ entries }: { entries: TranscriptEntry[] }) {
  const [open, setOpen] = useState(false);
  const shown = open ? entries : entries.slice(0, 3);

  return (
    <div>
      <ul className="space-y-3">
        {shown.map((e, i) => (
          <li key={i} className="text-sm leading-relaxed">
            <div className="mb-0.5 flex items-center gap-2">
              <span className="font-semibold" style={{ color: e.speaker.color }}>{e.speaker.name}</span>
              <span className="text-xs text-[var(--color-text-subtle)]">{e.timestamp}</span>
            </div>
            <p className="text-[var(--color-text)]/90">{e.text}</p>
          </li>
        ))}
      </ul>
      {entries.length > 3 && (
        <button
          onClick={() => setOpen(v => !v)}
          className="mt-4 flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
        >
          <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
          {open ? "Collapse" : `Show ${entries.length - 3} more lines`}
        </button>
      )}
    </div>
  );
}
