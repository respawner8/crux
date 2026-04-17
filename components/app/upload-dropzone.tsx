"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { UploadCloud, Mic, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Phase = "idle" | "uploading" | "transcribing" | "summarizing";

export function UploadDropzone({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function start() {
    setPhase("uploading");
    let pct = 0;
    const tick = () => {
      pct += 12;
      setProgress(Math.min(pct, 100));
      if (pct < 100) return setTimeout(tick, 200);
      setPhase("transcribing");
      setTimeout(() => {
        setPhase("summarizing");
        setTimeout(() => router.push(redirectTo), 1200);
      }, 1200);
    };
    tick();
  }

  const label: Record<Phase, string> = {
    idle:         "Drop an audio or video file",
    uploading:    "Uploading...",
    transcribing: "Transcribing audio...",
    summarizing:  "Generating summary...",
  };

  return (
    <div className="rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-12">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        {phase === "idle"
          ? <UploadCloud className="mb-4 h-10 w-10 text-violet-400" />
          : <Loader2    className="mb-4 h-10 w-10 animate-spin text-violet-400" />
        }
        <p className="text-base font-semibold">{label[phase]}</p>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          MP3, MP4, M4A, WAV — up to 500 MB. (Demo: progress is simulated.)
        </p>

        {phase === "idle" ? (
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button onClick={() => inputRef.current?.click()} className="bg-gradient-to-br from-violet-500 to-indigo-500 text-white hover:opacity-90">
              Choose file
            </Button>
            <Button variant="ghost" onClick={start}>
              <Mic className="mr-2 h-4 w-4" /> Record from mic
            </Button>
            <input ref={inputRef} type="file" className="hidden" onChange={start} accept="audio/*,video/*" />
          </div>
        ) : (
          <div className="mt-6 w-full max-w-xs">
            <Progress value={phase === "uploading" ? progress : 100} className="h-1.5" />
          </div>
        )}
      </div>
    </div>
  );
}
