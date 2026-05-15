import CandidateForm from "@/components/candidate/CandidateForm";
import ProfilePreview from "@/components/candidate/ProfilePreview";
import PageContainer from "@/components/shared/PageContainer";

export default function CandidatePage() {
  return (
    <PageContainer>
      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <CandidateForm />
        <ProfilePreview />
      </div>
    </PageContainer>
  );
}
