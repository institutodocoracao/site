import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/data/site";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - ${site.doctor}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Clínica Médica",
    "Ergometria",
    "Teste Ergométrico",
    "Arritmologia",
    "Marca Passo",
    "Cardiologia do Esporte",
    "Ecodoplercardiografia",
    "Eletrocardiografia",
    "Ecocardiografia",
    "Holter 24h",
    "Mapa 24h",
    "Polissonografia",
    "Endoscopia Digestiva",
    "Checkup Digestivo",
    "Ultrassom Doppler Vascular",
    "Cardiologista São Lourenço",
  ],
  authors: [{ name: "Rixxer", url: "https://www.rixxer.com.br" }],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/images/logo-dark.png" }],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.description,
    images: ["/images/logo-dark.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br" className={`${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.analytics.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.analytics.gaId}');
          `}
        </Script>
        <Script id="smartlook-init" strategy="afterInteractive">
          {`
            window.smartlook || (function (d) {
              var o = smartlook = function () { o.api.push(arguments) }, h = d.getElementsByTagName('head')[0];
              var c = d.createElement('script'); o.api = new Array(); c.async = true; c.type = 'text/javascript';
              c.charset = 'utf-8'; c.src = 'https://web-sdk.smartlook.com/recorder.js'; h.appendChild(c);
            })(document);
            smartlook('init', '${site.analytics.smartlookId}', { region: 'eu' });
          `}
        </Script>
      </body>
    </html>
  );
}
