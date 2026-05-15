import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyncInterview AI Interview Platform",
  description: "Frontend-only AI interview platform for realistic hiring simulations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">{children}</body>
    </html>
  );
}
