"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { site } from "@/data/site";

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="mt-4 flex items-center gap-2 text-sm font-medium text-brand-300">
        <Check className="h-4 w-4" /> Inscrição recebida! Obrigado.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input type="hidden" name="_subject" value="Novo e-mail do site" />
      <input type="hidden" name="_language" value="pt-BR" />
      <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5">
        <input
          type="email"
          name="email"
          required
          placeholder="Seu melhor e-mail"
          className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-ink-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          aria-label="Inscrever"
          className="flex shrink-0 items-center justify-center bg-brand-700 px-4 text-white transition hover:bg-brand-600 disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <ArrowRight className="h-4 w-4" />
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-2 text-xs text-brand-300">
          Não foi possível enviar agora. Tente novamente.
        </p>
      )}
    </form>
  );
}
