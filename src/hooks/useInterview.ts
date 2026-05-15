"use client";

import { useMemo, useState } from "react";
import { questions } from "@/data/questions";

export function useInterview() {
  const [index, setIndex] = useState(0);
  const currentQuestion = questions[index];
  const progress = useMemo(() => Math.round(((index + 1) / questions.length) * 100), [index]);

  return {
    currentQuestion,
    index,
    total: questions.length,
    progress,
    nextQuestion: () => setIndex((value) => Math.min(value + 1, questions.length - 1)),
  };
}
