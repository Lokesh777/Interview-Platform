export default function GradientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <div className="absolute left-1/2 top-[-14rem] h-[32rem] w-[52rem] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl dark:bg-blue-500/20" />
      <div className="absolute bottom-[-18rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute right-[-8rem] top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(24,24,27,.065)_1px,transparent_1px),linear-gradient(to_bottom,rgba(24,24,27,.065)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.045)_1px,transparent_1px)]" />
    </div>
  );
}
