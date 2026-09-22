import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { Container } from "@/components/container";
import { NewsletterForm } from "@/components/newsletter-form";
import { site } from "@/data/site";
import { specialties, exams } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={220}
            height={48}
            className="h-11 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
            {site.tagline}.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-200 transition hover:border-brand-500 hover:text-brand-400"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            Especialidades
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-300">
            {specialties.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/especialidades/${s.slug}`}
                  className="transition hover:text-brand-400"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            Exames
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-ink-300">
            {exams.slice(0, 7).map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/exames/${e.slug}`}
                  className="transition hover:text-brand-400"
                >
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
            Contato
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-ink-300">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
              <span>{site.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand-400" />
              <span className="flex flex-col">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="hover:text-white">
                    {p.display}
                  </a>
                ))}
              </span>
            </li>
          </ul>

          {/* <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Newsletter
            </h4>
            <p className="mt-3 text-sm text-ink-300">
              Fique por dentro das novidades do Instituto.
            </p>
            <NewsletterForm />
          </div> */}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-400 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="uppercase">{site.name}</span>. Todos os direitos
            reservados.
          </p>
          <a
            href="https://www.rixxer.com.br"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            Feito por <strong className="font-semibold">Rixxer</strong>
          </a>
        </Container>
      </div>
    </footer>
  );
}
