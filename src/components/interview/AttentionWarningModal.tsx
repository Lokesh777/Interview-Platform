"use client";

type AttentionWarningModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AttentionWarningModal({
  open,
  onClose,
}: AttentionWarningModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl border border-amber-400/30 bg-[#111827] p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-3xl">
            ⚠️
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Attention Warning
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-300">
              We detected that you switched tabs, minimized the browser,
              or attempted to leave the interview page.
            </p>

            <div className="mt-4 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
              <p className="text-sm font-medium leading-6 text-red-200">
                This activity may negatively affect your interview evaluation,
                attention score, and overall candidate integrity assessment.
              </p>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-gray-400">
              <li>• Please remain on the interview screen at all times.</li>
              <li>• Avoid switching tabs or opening other applications.</li>
              <li>• Repeated violations may be flagged for review.</li>
            </ul>

            <button
              onClick={onClose}
              className="mt-6 w-full rounded-2xl bg-amber-500 px-4 py-3 font-medium text-black transition hover:bg-amber-400"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}