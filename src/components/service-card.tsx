import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceEntry } from "@/data/services";

export function ServiceCard({ service }: { service: ServiceEntry }) {
  const href = `/${service.category === "especialidade" ? "especialidades" : "exames"}/${service.slug}`;

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/10"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/0 to-ink-900/0" />
      </div>
      <div className="flex flex-1 items-center justify-between gap-3 p-5">
        <span className="text-sm font-semibold text-ink-800 group-hover:text-brand-700">
          {service.title}
        </span>
        <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition group-hover:text-brand-600" />
      </div>
    </Link>
  );
}
