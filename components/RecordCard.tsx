"use client";

import Image from "next/image";
import {
  displayCredit,
  isRecommendation,
  isUnoptimizedImage,
  type AlbumRecord,
} from "@/types/record";

type RecordCardProps = {
  record: AlbumRecord;
  onSelect: (record: AlbumRecord) => void;
};

export function RecordCard({ record, onSelect }: RecordCardProps) {
  const recommended = isRecommendation(record.selectedBy);
  const credit = displayCredit(record.selectedBy);

  return (
    <button
      type="button"
      onClick={() => onSelect(record)}
      className="record-card group relative aspect-square w-full cursor-pointer rounded-[2px] text-left transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:rotate-[-1.5deg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-amber"
      aria-label={`${record.year}: ${record.title} by ${record.artist}`}
    >
      <span
        aria-hidden
        className="absolute inset-y-2 -right-1.5 w-[18%] rounded-r-full bg-vinyl opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:inset-y-3 sm:-right-2"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #1a1512 28%, #0a0908 29%, #0a0908 100%)",
        }}
      />
      <span className="relative block h-full w-full overflow-hidden rounded-[2px] bg-ink-soft shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-ivory/10 transition-shadow duration-300 group-hover:shadow-[0_22px_50px_rgba(0,0,0,0.55)]">
        <Image
          src={record.artworkUrl}
          alt=""
          fill
          unoptimized={isUnoptimizedImage(record.artworkUrl)}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/35" />

        <span className="type-meta absolute right-2 top-2 max-w-[70%] truncate rounded-sm bg-ink/55 px-1.5 py-0.5 text-[9px] tracking-[0.14em] text-warm-gray uppercase backdrop-blur-[2px] sm:right-2.5 sm:top-2.5 sm:text-[10px]">
          {recommended ? (
            <>
              <span aria-hidden className="mr-0.5 text-burnt-amber">
                ★
              </span>
              {credit}
            </>
          ) : (
            credit
          )}
        </span>

        <span className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
          <span className="type-meta block text-[10px] tracking-[0.2em] uppercase sm:text-xs">
            {record.year}
          </span>
          <span className="mt-0.5 block truncate text-xs text-ivory/90 sm:text-sm">
            {record.title}
          </span>
          <span className="block truncate text-[10px] text-warm-gray sm:text-xs">
            {record.artist}
          </span>
        </span>
      </span>
    </button>
  );
}
