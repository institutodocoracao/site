import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group flex gap-4 rounded-2xl border border-border-soft bg-white p-5 transition hover:border-brand-200 hover:shadow-lg hover:shadow-ink-900/5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-700 group-hover:text-white">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h5 className="font-bold text-ink-900">{title}</h5>
          <p className="mt-1 text-sm leading-relaxed text-ink-500">
            {description}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
