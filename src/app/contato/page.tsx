import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { MapEmbed } from "@/components/map-embed";
import { Reveal } from "@/components/reveal";
import { site, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato",
  description: `Entre em contato com o ${site.name} em São Lourenço, MG.`,
};

const cards = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: [site.address.street, `${site.address.city} - ${site.address.state}`],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: site.phones.map((p) => p.display),
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: [site.email],
  },
  {
    icon: Clock,
    title: "Expediente",
    lines: [site.hours.days, site.hours.time],
  },
];

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={`${site.address.city}, ${site.address.state}`}
        title="Fale com a nossa equipe"
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Contato" }]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border-soft bg-white p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-sm font-bold uppercase tracking-wide text-ink-800">
                    {card.title}
                  </p>
                  <div className="mt-2 space-y-0.5">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm text-ink-500">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800"
            >
              Marque sua consulta pelo WhatsApp
            </a>
          </Reveal>
        </Container>
      </section>

      <section className="h-[460px] w-full">
        <MapEmbed />
      </section>
    </>
  );
}
