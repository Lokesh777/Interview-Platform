import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="glass-panel flex flex-col gap-4 rounded-2xl px-5 py-4 text-sm text-zinc-600 dark:text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>{APP_NAME} AI Interview Platform · Frontend assessment build</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/candidate" className="hover:text-blue-500">Candidate flow</Link>
          <Link href="/interview" className="hover:text-blue-500">Interview room</Link>
          <Link href="/summary" className="hover:text-blue-500">Summary</Link>
        </div>
      </div>
    </footer>
  );
}
