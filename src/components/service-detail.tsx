import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ContentBlocks } from "@/components/content-blocks";
import type { ServiceEntry } from "@/data/services";
import { services } from "@/data/services";
import { whatsappHref } from "@/data/site";

export function ServiceDetail({ service }: { service: ServiceEntry }) {
  const categoryLabel =
    service.category === "especialidade" ? "Especialidades" : "Exames";
  const basePath =
    service.category === "especialidade" ? "/especialidades" : "/exames";

  const siblings = services
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow={categoryLabel}
        title={service.title}
        breadcrumbs={[
          { label: "Início", href: "/" },
          { label: categoryLabel, href: "/#especialidades" },
          { label: service.title },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <article>
            <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl sm:h-80">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <ContentBlocks blocks={service.content} />

            <a
              href={whatsappHref(`Quero saber mais sobre ${service.title}...`)}
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800"
            >
              Marcar sua consulta
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border-soft bg-surface-muted p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <CalendarCheck className="h-5 w-5" />
                </div>
                <p className="font-bold text-ink-900">Agende agora</p>
              </div>
              <p className="mt-3 text-sm text-ink-500">
                Fale direto com nossa equipe pelo WhatsApp e marque seu
                horário sem sair de casa.
              </p>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Marque sua consulta
              </a>
            </div>

            <div className="rounded-2xl border border-border-soft p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-ink-800">
                {categoryLabel === "Especialidades" ? "Outras especialidades" : "Outros exames"}
              </p>
              <ul className="mt-4 space-y-2.5">
                {siblings.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`${basePath}/${s.slug}`}
                      className="text-sm text-ink-600 transition hover:text-brand-700"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
