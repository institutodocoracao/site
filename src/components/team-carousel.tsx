"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/data/team";

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="group w-full sm:w-72 overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition hover:shadow-xl hover:shadow-ink-900/10">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            member.imagePosition,
          )}
        />
      </div>
      <div className="p-5">
        <h4 className="font-bold text-ink-900">{member.name}</h4>
        <p className="mt-1 text-sm text-ink-500">{member.role}</p>
      </div>
    </div>
  );
}

export function TeamCarousel({ members }: { members: TeamMember[] }) {
  if (members.length <= 4) {
    return (
      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: ".team-prev", nextEl: ".team-next" }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        spaceBetween={24}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 28 },
        }}
        className="!pb-2"
      >
        {members.map((member) => (
          <SwiperSlide key={member.name}>
            <div className="group overflow-hidden rounded-2xl border border-border-soft bg-white shadow-sm transition hover:shadow-xl hover:shadow-ink-900/10">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className={cn(
                    "object-cover transition-transform duration-500 group-hover:scale-105",
                    member.imagePosition,
                  )}
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-ink-900">{member.name}</h4>
                <p className="mt-1 text-sm text-ink-500">{member.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex justify-center gap-3">
        <button
          className="team-prev flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-ink-600 transition hover:border-brand-600 hover:text-brand-600"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          className="team-next flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-ink-600 transition hover:border-brand-600 hover:text-brand-600"
          aria-label="Próximo"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
