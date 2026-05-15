export default function PanelSkeleton({ className = "" }: { className?: string }) {
  return <div className={`glass-panel min-h-48 animate-pulse rounded-3xl ${className}`} />;
}
