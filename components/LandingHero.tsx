"use client";

import Image from "next/image";
import { SpinningVinyl } from "@/components/SpinningVinyl";

export function LandingHero() {
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-ink text-cream">
      <Image
        src="/images/listening-room-v3.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover object-[68%_58%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.7)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-6">
          <div className="max-w-xl pt-4 lg:pt-0">
            <p className="type-meta text-[11px] tracking-[0.35em] uppercase sm:text-xs">
              since 1966
            </p>
            <h1 className="type-headline headline-alive mt-4 text-4xl uppercase sm:text-5xl md:text-6xl lg:text-[4.75rem]">
              Joe&apos;s
              <br />
              Listening
              <br />
              Room
            </h1>
            <p className="type-meta mt-3 text-[11px] tracking-[0.32em] uppercase sm:text-xs">
              60 years of music
            </p>
          </div>

          <div className="flex items-center justify-center pb-8 lg:justify-end lg:pb-0">
            <SpinningVinyl className="w-[min(78vw,420px)] sm:w-[min(70vw,480px)] lg:w-[min(42vw,520px)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
