"use client";

export default function LanguageSelector({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <select value={value} onChange={(event) => onChange(event.target.value)} className="rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-zinc-200 outline-none">
      {["TypeScript", "JavaScript", "Python"].map((language) => (
        <option key={language}>{language}</option>
      ))}
    </select>
  );
}
