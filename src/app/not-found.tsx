import Link from "next/link";
import { HeartCrack } from "lucide-react";
import { Container } from "@/components/container";
import { HeartbeatLine } from "@/components/heartbeat-line";

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] items-center bg-ink-900 py-20">
      <Container className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-brand-400">
          <HeartCrack className="h-8 w-8" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">
          Erro 404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Página não encontrada
        </h1>
        <HeartbeatLine className="mt-6" />
        <p className="mt-6 max-w-md text-ink-300">
          A página que você procura não existe ou foi movida. Volte para a
          página inicial e continue navegando.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800"
        >
          Voltar para a página inicial
        </Link>
      </Container>
    </section>
  );
}
