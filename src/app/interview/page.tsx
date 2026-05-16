"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useState } from "react";
import InterviewControls from "@/components/interview/InterviewControls";
import ProgressIndicator from "@/components/interview/ProgressIndicator";
import QuestionCard from "@/components/interview/QuestionCard";
import Timer from "@/components/interview/Timer";
import PageContainer from "@/components/shared/PageContainer";
import CandidateGate from "@/components/shared/CandidateGate";
import PanelSkeleton from "@/components/shared/PanelSkeleton";
import AttentionWarningModal from "@/components/interview/AttentionWarningModal";
import { useInterview } from "@/hooks/useInterview";

const AIAvatar = dynamic(() => import("@/components/interview/AIAvatar"), {
  loading: () => <PanelSkeleton className="min-h-[420px]" />,
});
const CandidatePreview = dynamic(() => import("@/components/interview/CandidatePreview"), {
  loading: () => <PanelSkeleton className="min-h-[420px]" />,
});
const TranscriptPanel = dynamic(() => import("@/components/interview/TranscriptPanel"), {
  loading: () => <PanelSkeleton className="min-h-72" />,
});
const AnswerComposer = dynamic(() => import("@/components/interview/AnswerComposer"), {
  loading: () => <PanelSkeleton className="min-h-52" />,
});

type SpeechRecognitionResultItem = {
  transcript: string;
};

type SpeechRecognitionResult = {
  isFinal: boolean;
  0: SpeechRecognitionResultItem;
};

type SpeechRecognitionEvent = {
  resultIndex: number;
  results: {
    length: number;
    [index: number]: SpeechRecognitionResult;
  };
};

type SpeechRecognitionInstance = {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

export default function InterviewPage() {
  const interview = useInterview();
  const [attentionWarning, setAttentionWarning] = useState(false);
  const [answer, setAnswer] = useState("");
  const [listening, setListening] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");
  const questionIntro = useMemo(
    () => `Question ${interview.index + 1}. ${interview.currentQuestion.prompt}`,
    [interview.currentQuestion.prompt, interview.index]
  );

  const speak = useCallback((text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.92;
    utterance.pitch = 0.95;
    window.speechSynthesis.speak(utterance);
  }, []);

  const startAnswer = useCallback(() => {
    window.localStorage.setItem("aptora.answerStartedAt", new Date().toISOString());
    setAiPrompt("I am listening. You can speak your answer now, and the text will appear below.");

    const Recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Recognition) {
      setAiPrompt("Speech recognition is not available in this browser. Please type your answer below.");
      return;
    }

    const recognition = new Recognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      let transcript = "";
      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        transcript += event.results[index][0].transcript;
      }
      setAnswer((current) => `${current} ${transcript}`.trim());
    };
    recognition.onend = () => setListening(false);
    recognition.start();
    setListening(true);

    window.setTimeout(() => {
      const latestAnswer = document.querySelector<HTMLTextAreaElement>("[data-answer-textarea]")?.value ?? "";
      if (!latestAnswer.trim()) {
        const repeatPrompt = "I did not catch your answer. May I repeat the question?";
        setAiPrompt(repeatPrompt);
        speak(`${repeatPrompt} ${interview.currentQuestion.prompt}`);
      }
    }, 9000);
  }, [interview.currentQuestion.prompt, speak]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        window.localStorage.setItem("aptora.leftInterviewAt", new Date().toISOString());
      }
      if (document.visibilityState === "visible" && window.localStorage.getItem("aptora.leftInterviewAt")) {
        setAttentionWarning(true);
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const stateId = window.setTimeout(() => {
      setAnswer("");
      setAiPrompt(questionIntro);
    }, 0);
    const speechId = window.setTimeout(() => speak(questionIntro), 450);
    return () => {
      window.clearTimeout(stateId);
      window.clearTimeout(speechId);
    };
  }, [questionIntro, speak]);

  return (
    <PageContainer className="pb-28">
      <CandidateGate>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm text-blue-300">Live interview</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Senior Frontend Engineer screen</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Timer />
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-emerald-300">Confidence 87%</span>
          </div>
        </div>
        <AttentionWarningModal
          open={attentionWarning}
          onClose={() => setAttentionWarning(false)}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <AIAvatar />
          <CandidatePreview />
        </div>
        <div className="mt-5">
          <TranscriptPanel />
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_360px]">
          <QuestionCard question={interview.currentQuestion} />
          <ProgressIndicator current={interview.index + 1} total={interview.total} value={interview.progress} />
        </div>
        <div className="mt-5">
          <AnswerComposer answer={answer} onAnswerChange={setAnswer} listening={listening} aiPrompt={aiPrompt} />
        </div>
        <InterviewControls onNext={interview.nextQuestion} onStartAnswer={startAnswer} listening={listening} />
      </CandidateGate>
    </PageContainer>
  );
}
