import Image from "next/image";
import {
  Activity,
  Ambulance,
  ArrowRight,
  Bone,
  Building2,
  HeartPulse,
  Microscope,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { ServiceCard } from "@/components/service-card";
import { TeamCarousel } from "@/components/team-carousel";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { MapEmbed } from "@/components/map-embed";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { testimonials } from "@/data/testimonials";
import { whatsappHref } from "@/data/site";

const quickHighlights = [
  {
    icon: Stethoscope,
    title: "Diagnósticos",
    description: "Exames e diagnósticos completos, feitos aqui mesmo em São Lourenço.",
  },
  {
    icon: HeartPulse,
    title: "Tratamento",
    description: "Tratamento de sua doença com equipamentos e protocolos atuais.",
  },
  {
    icon: UserRound,
    title: "Cuidado",
    description: "Cuidado e recuperação acompanhados de perto pela nossa equipe.",
  },
];

const features = [
  {
    icon: Microscope,
    title: "Aconselhamento Médico",
    description: "Tenha aconselhamento médico eficaz para o tratamento de doenças.",
  },
  {
    icon: UserRound,
    title: "Equipe Capacitada",
    description: "Desde o primeiro contato, você será bem cuidado.",
  },
  {
    icon: Building2,
    title: "Nossas instalações",
    description: "Clínica bem localizada e salas amplas, para um melhor atendimento.",
  },
  {
    icon: Ambulance,
    title: "Atendimento",
    description: "Facilidade no atendimento, com vários canais disponíveis para você.",
  },
  {
    icon: Activity,
    title: "Atendimento Personalizado",
    description: "Todo o carinho e cuidado de nossa clínica em cada caso.",
  },
  {
    icon: Bone,
    title: "Todo cuidado com o paciente",
    description: "Acompanhamos cada progresso de nossos pacientes.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-border-soft bg-white py-12">
        <Container className="grid gap-8 sm:grid-cols-3">
          {quickHighlights.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-ink-900">{item.title}</h4>
                <p className="text-sm text-ink-500">{item.description}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Por que escolher nossa clínica?"
              title="Sua saúde é nossa prioridade"
              highlight="prioridade"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <FeatureCard key={f.title} {...f} delay={i * 0.05} />
              ))}
            </div>
          </div>

          <Reveal className="relative mx-auto hidden max-w-sm lg:block">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-50" />
            <Image
              src="/images/photos/doctor-01.png"
              alt="Dr. Giovani Dias"
              width={480}
              height={620}
              className="rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
        </Container>
      </section>

      <section id="especialidades" className="bg-surface-muted py-24">
        <Container>
          <SectionHeading
            eyebrow="O que tratamos e avaliamos"
            title="Especialidades e exames"
            highlight="exames"
            align="center"
            description="Do diagnóstico mais simples ao tratamento cardiológico mais complexo, tudo em um só lugar."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink-900 py-24">
        <div className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-brand-700/30 blur-3xl" />
        <Container className="relative flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Estamos prontos para te ajudar"
            title="Marque sua Consulta"
            highlight="Consulta"
            align="center"
            tone="dark"
          />
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-brand-700/30 transition hover:bg-brand-600"
          >
            Clique aqui!
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Conheça nossos médicos"
            title="Profissionais de nossa Clínica"
            highlight="Clínica"
            align="center"
          />
          <div className="mt-14">
            <TeamCarousel members={team} />
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink-900 py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Testemunhos"
            title="Aprovados por nossos pacientes"
            highlight="pacientes"
            align="center"
            tone="dark"
          />
          <div className="mt-14">
            <TestimonialCarousel items={testimonials} />
          </div>
        </Container>
      </section>

      <section className="h-[420px] w-full">
        <MapEmbed />
      </section>
    </>
  );
}
