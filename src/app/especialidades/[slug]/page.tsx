import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { specialties, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return specialties.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug("especialidade", slug);
  if (!service) return {};

  const description = service.content.find((b) => b.type === "paragraph")?.text;

  return {
    title: service.title,
    description,
    openGraph: { title: service.title, description },
  };
}

export default async function EspecialidadePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug("especialidade", slug);
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
