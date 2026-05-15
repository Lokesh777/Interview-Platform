import CameraCheck from "@/components/setup/CameraCheck";
import InternetStatus from "@/components/setup/InternetStatus";
import InterviewGuidelines from "@/components/setup/InterviewGuidelines";
import MicrophoneCheck from "@/components/setup/MicrophoneCheck";
import CandidateGate from "@/components/shared/CandidateGate";
import PageContainer from "@/components/shared/PageContainer";

export default function SetupPage() {
  return (
    <PageContainer>
      <CandidateGate>
        <div className="mb-6">
          <p className="text-sm text-blue-300">Environment setup</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Verify your interview room</h1>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <CameraCheck />
              <MicrophoneCheck />
            </div>
            <InternetStatus />
          </div>
          <InterviewGuidelines />
        </div>
      </CandidateGate>
    </PageContainer>
  );
}
