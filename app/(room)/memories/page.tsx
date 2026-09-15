import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MEDIA_TYPE_LABELS,
  displayCredit,
  isUnoptimizedImage,
} from "@/types/record";
import { getMemoryRecords } from "@/lib/records";

export const metadata: Metadata = {
  title: "Memories",
  description:
    "Personal memories shared with records and songs from Joe's Listening Room.",
};

export default function MemoriesPage() {
  const memories = getMemoryRecords();

  return (
    <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="type-meta text-xs tracking-[0.35em] uppercase">Memories</p>
      <div className="mt-6 grid items-start gap-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] sm:gap-10">
        <div>
          <h1 className="type-headline text-4xl normal-case leading-tight sm:text-5xl">
            Memories with Joe.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-warm-gray sm:text-lg">
            A few picks came with a memory attached — these are the ones that
            belong to Joe and the people who love him.
          </p>
        </div>
        <figure className="relative mx-auto aspect-[4/3] w-full max-w-xs overflow-hidden rounded-[2px] ring-1 ring-ivory/10 sm:mx-0 sm:aspect-[4/5] sm:max-w-none">
          <Image
            src="/images/whodini-rap-group.jpg"
            alt="Dressed in rap group outfits — the Back in Black memory"
            fill
            priority
            sizes="(max-width: 640px) 90vw, 280px"
            className="object-cover object-center"
          />
        </figure>
      </div>

      {memories.length === 0 ? (
        <p className="mt-16 text-warm-gray">No memories yet.</p>
      ) : (
        <ul className="mt-14 space-y-14 sm:mt-16 sm:space-y-16">
          {memories.map((record) => (
            <li
              key={record.id}
              className="border-t border-ivory/10 pt-10 first:border-t-0 first:pt-0"
            >
              <div className="grid grid-cols-[84px_minmax(0,1fr)] items-start gap-5 sm:grid-cols-[132px_minmax(0,1fr)] sm:gap-7">
                <span className="relative block aspect-square overflow-hidden rounded-[2px] bg-ink-soft shadow-[0_12px_36px_rgba(0,0,0,0.45)] ring-1 ring-ivory/10">
                  <Image
                    src={record.artworkUrl}
                    alt={`Cover art for ${record.title} by ${record.artist}`}
                    fill
                    unoptimized={isUnoptimizedImage(record.artworkUrl)}
                    sizes="(max-width: 640px) 84px, 132px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="type-meta text-[11px] tracking-[0.28em] uppercase sm:text-xs">
                    {record.year}
                    <span className="mx-2 text-ivory/25" aria-hidden>
                      ·
                    </span>
                    {MEDIA_TYPE_LABELS[record.mediaType]}
                  </p>
                  <h2 className="mt-3 font-display text-2xl leading-snug text-ivory sm:text-3xl">
                    {record.title}
                  </h2>
                  <p className="mt-1 text-base text-warm-gray sm:text-lg">
                    {record.artist}
                  </p>
                  <p className="type-meta mt-4 text-[11px] tracking-[0.16em] uppercase">
                    <span aria-hidden className="mr-1 text-burnt-amber">
                      ★
                    </span>
                    {displayCredit(record.selectedBy)}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-ivory/90 sm:text-xl sm:leading-relaxed">
                {record.story}
              </p>
              <Link
                href={`/record/${record.id}`}
                className="mt-6 inline-flex type-meta text-xs tracking-[0.16em] text-burnt-amber uppercase transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-amber"
              >
                Open sleeve →
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/collection"
        className="mt-16 inline-flex type-meta text-sm tracking-[0.18em] text-burnt-amber uppercase transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-amber"
      >
        Back to the collection →
      </Link>
    </article>
  );
}
