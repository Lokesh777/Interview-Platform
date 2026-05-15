"use client";

import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import type { CodeRunResult } from "@/components/coding/OutputConsole";
import ProblemStatement from "@/components/coding/ProblemStatement";
import CandidateGate from "@/components/shared/CandidateGate";
import PageContainer from "@/components/shared/PageContainer";
import PanelSkeleton from "@/components/shared/PanelSkeleton";
import { codingQuestion } from "@/data/codingQuestions";

const CodeEditor = dynamic(() => import("@/components/coding/CodeEditor"), {
  loading: () => <PanelSkeleton className="min-h-[540px]" />,
});
const OutputConsole = dynamic(() => import("@/components/coding/OutputConsole"), {
  loading: () => <PanelSkeleton className="min-h-56" />,
});

export default function CodingPage() {
  const [language, setLanguage] = useState("JavaScript");
  const [code, setCode] = useState(codingQuestion.starterCode.JavaScript);
  const [result, setResult] = useState<CodeRunResult>({
    passed: 0,
    total: 3,
    success: false,
    output: "> Click Run to execute your JavaScript solution against local test cases.",
  });
  const tests = useMemo(
    () => [
      {
        name: "ranks by weighted score",
        args: [[{ name: "React", score: 92, weight: 0.4 }, { name: "System Design", score: 85, weight: 0.7 }], 1],
        expected: ["System Design"],
      },
      {
        name: "preserves tie order",
        args: [[{ name: "UX", score: 80, weight: 1 }, { name: "API", score: 80, weight: 1 }], 2],
        expected: ["UX", "API"],
      },
      {
        name: "handles top two of three",
        args: [[{ name: "Testing", score: 70, weight: 0.9 }, { name: "React", score: 95, weight: 0.8 }, { name: "CSS", score: 90, weight: 0.5 }], 2],
        expected: ["React", "Testing"],
      },
    ] as const,
    []
  );

  const changeLanguage = useCallback((nextLanguage: string) => {
    setLanguage(nextLanguage);
    setCode(codingQuestion.starterCode[nextLanguage] ?? codingQuestion.starterCode.JavaScript);
  }, []);

  const runCode = useCallback(() => {
    if (language !== "JavaScript") {
      setResult({
        passed: 0,
        total: 3,
        success: false,
        output: "> Browser execution is enabled for JavaScript in this frontend-only build.\n> Switch language to JavaScript to run tests.",
      });
      return;
    }

    try {
      const getFunction = new Function(`${code}; return topSignals;`);
      const topSignals = getFunction() as (signals: readonly unknown[], k: number) => unknown;
      let passed = 0;
      const lines = tests.map((test) => {
        const actual = topSignals(test.args[0], test.args[1]);
        const ok = JSON.stringify(actual) === JSON.stringify(test.expected);
        if (ok) passed += 1;
        return `${ok ? "PASS" : "FAIL"} ${test.name}\n  expected ${JSON.stringify(test.expected)}\n  received ${JSON.stringify(actual)}`;
      });
      setResult({
        passed,
        total: tests.length,
        success: passed === tests.length,
        output: `> Running local JavaScript harness\n${lines.join("\n\n")}`,
      });
    } catch (error) {
      setResult({
        passed: 0,
        total: tests.length,
        success: false,
        output: `> Runtime error\n${error instanceof Error ? error.message : "Unknown error"}`,
      });
    }
  }, [code, language, tests]);

  return (
    <PageContainer>
      <CandidateGate>
        <div className="mb-6">
          <p className="text-sm text-blue-300">Coding round</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Practical signal assessment</h1>
        </div>
        <div className="grid gap-6 xl:grid-cols-[430px_1fr]">
          <ProblemStatement />
          <div className="space-y-6">
            <CodeEditor language={language} onLanguageChange={changeLanguage} code={code} onCodeChange={setCode} onRun={runCode} />
            <OutputConsole result={result} />
          </div>
        </div>
      </CandidateGate>
    </PageContainer>
  );
}
