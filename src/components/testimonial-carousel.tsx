"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: ".testi-prev", nextEl: ".testi-next" }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 24 },
          1280: { slidesPerView: 3, spaceBetween: 28 },
        }}
        className="!pb-2"
      >
        {items.map((t) => (
          <SwiperSlide key={t.name} className="h-auto">
            <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-0.5 text-brand-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5" fill="currentColor" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-white/15" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-ink-100">
                {t.text}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-ink-400">
                  Depoimento via{" "}
                  <a
                    href={t.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-white/30 underline-offset-2 hover:text-brand-300"
                  >
                    {t.source}
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex justify-center gap-3">
        <button
          className="testi-prev flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:text-brand-400"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          className="testi-next flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-brand-400 hover:text-brand-400"
          aria-label="Próximo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
