"use client";

import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60 group-hover:animate-none" />
      <MessageCircle className="relative h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
