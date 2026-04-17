import { UploadDropzone } from "@/components/app/upload-dropzone";

export default function UploadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 md:py-10">
      <h1 className="mb-2 text-2xl font-semibold tracking-tight">Upload a meeting</h1>
      <p className="mb-8 text-sm text-[var(--color-text-muted)]">
        Drop an audio or video file — we&apos;ll transcribe and summarize it.
      </p>
      <UploadDropzone redirectTo="/app/meetings/m1" />
    </div>
  );
}
