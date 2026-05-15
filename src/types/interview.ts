export type InterviewQuestion = {
  id: number;
  competency: string;
  prompt: string;
  intent: string;
  difficulty: "Warmup" | "Core" | "Advanced";
};

export type TranscriptMessage = {
  speaker: "AI" | "Candidate";
  message: string;
  time: string;
};
