export type CandidateProfile = {
  fullName: string;
  email: string;
  role: string;
  level: "Junior" | "Mid-level" | "Senior" | "Staff";
  skills: string[];
  resumeFile: string;
  location: string;
};
