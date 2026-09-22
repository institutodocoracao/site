import type { Metadata } from "next";
import { Accessibility, MapPin } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import { site, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: `Conheça o ${site.name}, a clínica de cardiologia mais completa do Circuito das Águas.`,
};

const galleryImages = Array.from({ length: 9 }, (_, i) => ({
  src: `/images/about/0${i + 1}.jpg`,
  alt: `Instituto do Coração - foto ${i + 1}`,
}));

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow={site.name}
        title="Sobre nós"
        breadcrumbs={[{ label: "Início", href: "/" }, { label: "Sobre Nós" }]}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <Reveal>
            <div className="prose-service">
              <p>
                O <strong>{site.name} - {site.doctor}</strong> chega ao
                mercado de São Lourenço e Região para trazer o que há de mais
                novo e tecnológico em diagnósticos e tratamentos de
                cardiologia e doenças do coração, oferecendo o maior cuidado
                possível com os pacientes.
              </p>
              <p>
                Dr. Giovani vem de experiência de vários anos, trabalhando em
                grandes hospitais de Belo Horizonte e, com ele, traz
                tecnologia de ponta, humanidade, respeito e carinho com os
                pacientes.
              </p>
              <p>
                Nosso Instituto nasce com o intuito de ser o mais completo
                centro de cardiologia do Circuito das Águas, oferecendo desde
                o diagnóstico mais básico, até os mais complexos tratamentos
                de ponta.
              </p>
              <p>
                No <strong>{site.name} - {site.doctor}</strong> o paciente
                faz todos os exames necessários, não precisando mais se
                deslocar para grandes centros.
              </p>
              <p>
                Os profissionais de nosso Instituto têm o mais alto gabarito
                da cardiologia, cada um dentro de sua substancialidade,
                oferecendo o melhor tratamento para cada paciente.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-14">
            <h3 className="text-2xl font-extrabold tracking-tight text-ink-900">
              Nossa clínica
            </h3>
            <div className="prose-service mt-4">
              <p>
                Estamos em um dos melhores pontos da cidade, estrategicamente
                localizado, e contamos com um espaço amplo e acolhedor, para
                um atendimento ainda melhor.
              </p>
              <p>
                O <strong>{site.name} - {site.doctor}</strong> é uma clínica
                que dispõe de um atendimento inclusivo. Temos rampa de acesso
                para pacientes com dificuldade de locomoção e necessidades
                especiais.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-6">
              <div className="flex items-center gap-3 rounded-2xl border border-border-soft bg-surface-muted px-5 py-3">
                <Accessibility className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium text-ink-700">
                  Acessibilidade para PCD
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border-soft bg-surface-muted px-5 py-3">
                <MapPin className="h-5 w-5 text-brand-600" />
                <span className="text-sm font-medium text-ink-700">
                  Localização central em São Lourenço
                </span>
              </div>
            </div>

            <a
              href={whatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800"
            >
              Marque sua consulta
            </a>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20">
        <Container>
          <Reveal>
            <h3 className="mb-8 text-2xl font-extrabold tracking-tight text-ink-900">
              Conheça nosso espaço
            </h3>
            <Gallery images={galleryImages} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
