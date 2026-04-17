import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crux — AI meeting copilot",
  description: "Meetings, distilled. AI summaries, action items, and searchable transcripts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans dark", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
