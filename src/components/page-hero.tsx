import { Container } from "@/components/container";
import { HeartbeatLine } from "@/components/heartbeat-line";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  breadcrumbs: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-16 pt-28 sm:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl" />

      <Container className="relative">
        <Breadcrumbs items={breadcrumbs} />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-300">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <HeartbeatLine className="mt-6 text-brand-500" />
      </Container>
    </section>
  );
}
