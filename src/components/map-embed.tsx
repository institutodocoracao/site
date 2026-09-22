import { site } from "@/data/site";

export function MapEmbed({ className }: { className?: string }) {
  return (
    <iframe
      src={site.mapsEmbedSrc}
      className={className ?? "h-full w-full"}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={`Mapa - ${site.name}`}
    />
  );
}
