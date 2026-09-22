import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/service-detail";
import { exams, getServiceBySlug } from "@/data/services";

export function generateStaticParams() {
  return exams.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug("exame", slug);
  if (!service) return {};

  const description = service.content.find((b) => b.type === "paragraph")?.text;

  return {
    title: service.title,
    description,
    openGraph: { title: service.title, description },
  };
}

export default async function ExamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug("exame", slug);
  if (!service) notFound();

  return <ServiceDetail service={service} />;
}
