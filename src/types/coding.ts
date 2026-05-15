export type CodingQuestion = {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  constraints: string[];
  examples: { input: string; output: string; explanation: string }[];
  starterCode: Record<string, string>;
};
