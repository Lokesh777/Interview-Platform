import type { InterviewQuestion, TranscriptMessage } from "@/types/interview";

export const questions: InterviewQuestion[] = [
  {
    id: 1,
    competency: "Product Engineering",
    difficulty: "Warmup",
    prompt: "Walk me through a frontend system you shipped that materially improved a product metric.",
    intent: "Looks for ownership, measurement, and product judgment.",
  },
  {
    id: 2,
    competency: "Architecture",
    difficulty: "Core",
    prompt: "How would you design a reusable interview scheduling dashboard for multiple hiring teams?",
    intent: "Assesses component boundaries, data modeling, and scalability thinking.",
  },
  {
    id: 3,
    competency: "Collaboration",
    difficulty: "Core",
    prompt: "Describe a time you disagreed with design or backend partners and how you resolved it.",
    intent: "Evaluates communication, tradeoff handling, and maturity.",
  },
  {
    id: 4,
    competency: "Performance",
    difficulty: "Advanced",
    prompt: "A candidate review page is slow on low-end devices. What would you inspect first?",
    intent: "Checks practical debugging sequence and browser performance knowledge.",
  },
];

export const transcript: TranscriptMessage[] = [
  { speaker: "AI", time: "00:12", message: "Thanks Lokesh. I will focus on product engineering, systems thinking, and collaboration." },
  { speaker: "Candidate", time: "00:32", message: "Sounds good. I can start with a design system migration that reduced duplicate UI code." },
  { speaker: "AI", time: "01:08", message: "Great. Please include the baseline, the intervention, and how you measured adoption." },
];
