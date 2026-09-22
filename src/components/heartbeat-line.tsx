import { cn } from "@/lib/utils";

export function HeartbeatLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      className={cn("h-10 w-full max-w-xs text-brand-500", className)}
      aria-hidden="true"
    >
      <path
        d="M0 30H120L138 8L156 52L172 30L182 40L192 20L204 30H400"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={340}
        strokeDasharray="340"
        className="animate-heartbeat-draw"
      />
    </svg>
  );
}
