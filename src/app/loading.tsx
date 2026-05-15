export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-6 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 h-16 animate-pulse rounded-2xl bg-zinc-200/80 dark:bg-zinc-900" />
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="h-80 animate-pulse rounded-3xl bg-zinc-200/80 dark:bg-zinc-900" />
          <div className="h-80 animate-pulse rounded-3xl bg-zinc-200/80 dark:bg-zinc-900" />
        </div>
        <div className="mt-5 h-48 animate-pulse rounded-3xl bg-zinc-200/80 dark:bg-zinc-900" />
      </div>
    </div>
  );
}
