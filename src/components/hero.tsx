import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { HeartbeatLine } from "@/components/heartbeat-line";
import { whatsappHref } from "@/data/site";

const stats = [
  { value: "9+", label: "Exames especializados" },
  { value: "4", label: "Médicos especialistas" },
  { value: "100%", label: "Diagnóstico local" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-ink-600/40 blur-3xl" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Cardiologia de referência no Sul de Minas
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            O mais moderno e completo{" "}
            <span className="text-brand-400">Centro Cardiológico</span> do Sul
            de Minas
          </h1>

          <HeartbeatLine className="mt-7" />

          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-200">
            Diagnóstico, tratamento e acompanhamento cardiológico completo em
            São Lourenço, com tecnologia de ponta e o cuidado humano do
            Dr. Giovani Dias e sua equipe.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand-700/30 transition hover:bg-brand-600"
            >
              Marque sua consulta
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#especialidades"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/40"
            >
              Ver especialidades
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-xs leading-tight text-ink-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-600/30 via-transparent to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="/images/fachada.jpg"
              alt="Fachada do Instituto do Coração Circuito das Águas"
              width={960}
              height={600}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border-soft bg-white p-5 shadow-2xl sm:block">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              Cardiologista responsável
            </p>
            <p className="mt-1 text-lg font-bold text-ink-900">
              Dr. Giovani Dias
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
