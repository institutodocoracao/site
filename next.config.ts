import type { NextConfig } from "next";
import { services } from "./src/data/services";

const serviceRedirects = services.map((s) => ({
  source: `/${s.slug}.html`,
  destination: `/${s.category === "especialidade" ? "especialidades" : "exames"}/${s.slug}`,
  permanent: true,
}));

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/sobre.html", destination: "/sobre", permanent: true },
      { source: "/contato.html", destination: "/contato", permanent: true },
      { source: "/obrigado.html", destination: "/obrigado", permanent: true },
      ...serviceRedirects,
    ];
  },
};

export default nextConfig;
