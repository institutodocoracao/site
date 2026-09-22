"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { cn } from "@/lib/utils";
import { specialties, exams } from "@/data/services";
import { site, whatsappHref } from "@/data/site";

const navLinks = [
  { label: "Página Inicial", href: "/" },
  {
    label: "Especialidades",
    items: specialties.map((s) => ({
      label: s.title,
      href: `/especialidades/${s.slug}`,
    })),
  },
  {
    label: "Exames",
    items: exams.map((e) => ({
      label: e.title,
      href: `/exames/${e.slug}`,
    })),
  },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setOpenSection(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_0_var(--border-soft)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "hidden bg-ink-900 text-ink-200 lg:block",
          scrolled && "hidden",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
          <p>{site.address.full}</p>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="transition hover:text-white"
            >
              {site.email}
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-brand-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-dark.png"
            alt={site.name}
            width={220}
            height={48}
            className="h-10 w-auto sm:h-11"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.items ? (
              <div
                key={link.label}
                className="group relative"
                onMouseEnter={() => setOpenSection(link.label)}
                onMouseLeave={() => setOpenSection(null)}
              >
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700">
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <div
                  className={cn(
                    "absolute left-1/2 top-full grid w-[420px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-1 rounded-2xl border border-border-soft bg-white p-4 shadow-2xl shadow-ink-900/10 transition-all duration-200",
                    openSection === link.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0",
                  )}
                >
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-ink-600 transition hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold text-ink-700 transition hover:bg-brand-50 hover:text-brand-700",
                  pathname === link.href && "bg-brand-50 text-brand-700",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phones[0].href}
            className="hidden items-center gap-2 text-sm font-semibold text-ink-700 xl:flex"
          >
            <Phone className="h-4 w-4 text-brand-600" />
            {site.phones[0].display}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-700/25 transition hover:bg-brand-800 sm:inline-flex"
          >
            Marque sua consulta
          </a>
          <button
            className="rounded-full p-2 text-ink-800 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[60] bg-ink-900/60 transition-opacity lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="mb-6 flex items-center justify-between">
          <Image
            src="/images/logo-dark.png"
            alt={site.name}
            width={160}
            height={36}
            className="h-9 w-auto"
          />
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Fechar menu"
            className="rounded-full p-2 text-ink-700 hover:bg-ink-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {navLinks.map((link) =>
            link.items ? (
              <div key={link.label} className="border-b border-border-soft py-2">
                <button
                  className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-ink-800"
                  onClick={() =>
                    setOpenSection(openSection === link.label ? null : link.label)
                  }
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openSection === link.label && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid gap-1 overflow-hidden transition-all",
                    openSection === link.label ? "max-h-[600px] pb-2" : "max-h-0",
                  )}
                >
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm text-ink-600 hover:bg-brand-50 hover:text-brand-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-border-soft py-3 text-sm font-semibold text-ink-800"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="mt-6 rounded-full bg-brand-700 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-brand-700/25"
        >
          Marque sua consulta
        </a>
        <a
          href={site.phones[0].href}
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-ink-700"
        >
          <Phone className="h-4 w-4 text-brand-600" />
          {site.phones[0].display}
        </a>
      </div>
    </header>
  );
}
