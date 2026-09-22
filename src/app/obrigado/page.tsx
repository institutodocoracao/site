import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Obrigado",
  robots: { index: false },
};

export default function ObrigadoPage() {
  return (
    <section className="flex min-h-[70vh] items-center py-20">
      <Container className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-700">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-ink-900">
          Obrigado!
        </h1>
        <p className="mt-3 max-w-md text-ink-500">
          Recebemos sua mensagem! Entraremos em contato o mais breve
          possível.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800"
        >
          Voltar para a página principal
        </Link>
      </Container>
    </section>
  );
}
