"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import type { AlbumRecord } from "@/types/record";
import { RecordGrid } from "@/components/RecordGrid";
import { RecordModal } from "@/components/RecordModal";

type CollectionExperienceProps = {
  records: AlbumRecord[];
};

export function CollectionExperience({ records }: CollectionExperienceProps) {
  const [selected, setSelected] = useState<AlbumRecord | null>(null);

  const handleSelect = useCallback((record: AlbumRecord) => {
    setSelected(record);
  }, []);

  const handleClose = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/listening-room-v4.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_42%] opacity-55"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-ink"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_65%,rgba(0,0,0,0.55)_100%)]"
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 pb-14 pt-16 text-center sm:px-10 sm:pb-20 sm:pt-24">
          <p className="type-meta text-[11px] tracking-[0.35em] uppercase sm:text-xs">
            since 1966
          </p>
          <h1 className="type-headline headline-alive mt-4 text-4xl uppercase sm:text-5xl md:text-6xl">
            The Collection
          </h1>
          <p className="type-meta mt-3 text-[11px] tracking-[0.32em] uppercase sm:text-xs">
            60 years of music
          </p>
          <p className="mx-auto mt-8 max-w-md font-[family-name:var(--font-inter)] text-xs leading-relaxed text-warm-gray sm:text-[13px]">
            Some are records Joe has loved for decades. Some remind us of him.
            Some were chosen by the people who know him best.
          </p>
          <a
            href="https://music.apple.com/us/playlist/60/pl.u-06oxDGzFoL3e88"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#89A6BA] px-6 py-2.5 font-[family-name:var(--font-instrument-sans)] text-sm font-bold tracking-[0.08em] text-[#3d4450] uppercase shadow-[0_10px_32px_rgba(137,166,186,0.45)] transition-transform duration-300 [font-variation-settings:'wght'_700] hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#89A6BA] sm:px-7 sm:text-base"
          >
            Play
          </a>
        </div>
      </section>

      <div className="relative z-10 flex justify-center pb-10 pt-2 sm:pb-12">
        <a
          href="#collection"
          className="type-meta inline-flex flex-col items-center gap-2 text-[11px] tracking-[0.35em] uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gray sm:text-xs"
        >
          Explore
          <span aria-hidden className="text-base leading-none tracking-normal">
            ↓
          </span>
        </a>
      </div>

      <RecordGrid records={records} onSelect={handleSelect} />
      <RecordModal record={selected} onClose={handleClose} />
    </>
  );
}
