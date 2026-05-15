"use client";

import { useRef, useState } from "react";
import { FileCheck2, UploadCloud } from "lucide-react";

type StoredResume = {
  name: string;
  size: number;
  type: string;
  uploadedAt: string;
};

export default function ResumeUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [resume, setResume] = useState<StoredResume | null>(null);

  function storeFile(file?: File) {
    if (!file) return;
    const nextResume = {
      name: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
      uploadedAt: new Date().toISOString(),
    };
    window.localStorage.setItem("aptora.resume", JSON.stringify(nextResume));
    setResume(nextResume);
    window.dispatchEvent(new Event("focus"));
  }

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => {
        event.preventDefault();
        storeFile(event.dataTransfer.files[0]);
      }}
      className="w-full rounded-2xl border border-dashed border-blue-300/30 bg-blue-500/5 p-6 text-center transition hover:border-blue-300/60 hover:bg-blue-500/10"
    >
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={(event) => storeFile(event.target.files?.[0])} />
      {resume ? (
        <>
          <FileCheck2 className="mx-auto size-9 text-emerald-300" />
          <p className="mt-3 text-sm font-medium text-white">{resume.name}</p>
          <p className="mt-1 text-xs text-zinc-500">{(resume.size / 1024 / 1024).toFixed(2)} MB stored locally in this browser</p>
        </>
      ) : (
        <>
          <UploadCloud className="mx-auto size-9 text-blue-300" />
          <p className="mt-3 text-sm font-medium text-white">Drop resume here or browse files</p>
          <p className="mt-1 text-xs text-zinc-500">PDF, DOCX up to 10 MB. File metadata is stored locally.</p>
        </>
      )}
    </button>
  );
}
