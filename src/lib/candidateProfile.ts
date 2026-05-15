export type StoredCandidateProfile = {
  fullName?: string;
  email?: string;
  role?: string;
  level?: string;
  skills?: string;
};

export function isCandidateProfileComplete(profile: StoredCandidateProfile | null) {
  return Boolean(profile?.fullName?.trim() && profile?.email?.trim() && profile?.role?.trim());
}

export function readCandidateProfile() {
  if (typeof window === "undefined") return null;

  const stored = window.localStorage.getItem("aptora.candidate");
  if (!stored) return null;

  try {
    return JSON.parse(stored) as StoredCandidateProfile;
  } catch {
    return null;
  }
}
