import Link from "next/link";
import { ArrowRight, CheckCircle2, Terminal, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CodeRunResult = {
  passed: number;
  total: number;
  output: string;
  success: boolean;
};

export default function OutputConsole({ result }: { result: CodeRunResult }) {
  return (
    <section className="glass-panel rounded-3xl p-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-white"><Terminal className="size-5 text-emerald-300" /> Output console</h2>
        <span className={`flex items-center gap-1 text-xs ${result.success ? "text-emerald-300" : "text-red-300"}`}>
          {result.success ? <CheckCircle2 className="size-4" /> : <XCircle className="size-4" />}
          {result.passed}/{result.total} tests passed
        </span>
      </div>
      <pre className={`overflow-auto rounded-2xl border border-white/10 bg-black p-4 text-sm leading-7 ${result.success ? "text-emerald-300" : "text-red-200"}`}>{result.output}</pre>
      <div className="mt-4 flex justify-end">
        <Button asChild className="rounded-full bg-blue-500 px-5 text-white hover:bg-blue-400">
          <Link href="/summary">Finish round <ArrowRight className="size-4" /></Link>
        </Button>
      </div>
    </section>
  );
}
