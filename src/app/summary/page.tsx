import EvaluationCard from "@/components/summary/EvaluationCard";
import FinalStatus from "@/components/summary/FinalStatus";
import ScoreCard from "@/components/summary/ScoreCard";
import CandidateGate from "@/components/shared/CandidateGate";
import PageContainer from "@/components/shared/PageContainer";

export default function SummaryPage() {
  return (
    <PageContainer>
      <CandidateGate>
        <div className="space-y-6">
          <FinalStatus />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <ScoreCard label="Overall match" value={88} tone="emerald" />
            <ScoreCard label="Technical depth" value={84} />
            <ScoreCard label="Communication" value={91} tone="emerald" />
            <ScoreCard label="Risk flags" value={18} tone="red" />
          </div>
          <EvaluationCard />
          <section className="grid gap-4 md:grid-cols-3">
            {[
              ["Final review", "Recommended for onsite loop"],
              ["Coding result", "Passed visible and hidden checks"],
              ["Recruiter note", "Probe platform architecture depth next"],
            ].map(([label, value]) => (
              <div key={label} className="glass-panel rounded-2xl p-5">
                <p className="text-sm text-zinc-500">{label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </section>
        </div>
      </CandidateGate>
    </PageContainer>
  );
}
