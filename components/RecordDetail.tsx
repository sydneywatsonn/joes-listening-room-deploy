import Image from "next/image";
import {
  MEDIA_TYPE_LABELS,
  appleMusicUrl,
  displayCredit,
  isRecommendation,
  isUnoptimizedImage,
  type AlbumRecord,
} from "@/types/record";

type RecordDetailProps = {
  record: AlbumRecord;
  spinning?: boolean;
};

export function RecordDetail({ record, spinning = true }: RecordDetailProps) {
  const mediaLabel = MEDIA_TYPE_LABELS[record.mediaType];
  const recommended = isRecommendation(record.selectedBy);
  const credit = displayCredit(record.selectedBy);

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-12">
      <div className="relative mx-auto w-full max-w-md">
        <div className="relative aspect-square overflow-hidden rounded-[2px] bg-ink-soft shadow-[0_24px_60px_rgba(0,0,0,0.55)] ring-1 ring-ivory/10">
          <Image
            src={record.artworkUrl}
            alt={`Artwork for ${record.title} by ${record.artist}`}
            fill
            priority
            unoptimized={isUnoptimizedImage(record.artworkUrl)}
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover"
          />
        </div>
        <div
          aria-hidden
          className={`pointer-events-none absolute -right-6 top-1/2 hidden h-[72%] w-[72%] -translate-y-1/2 rounded-full bg-vinyl shadow-2xl md:block ${spinning ? "vinyl-spin" : ""}`}
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at center, #0a0908 0, #0a0908 2px, #14110f 3px, #0a0908 4px)",
          }}
        >
          <div className="absolute inset-[32%] rounded-full bg-ink-elevated ring-1 ring-ivory/15" />
          <div className="absolute inset-[46%] rounded-full bg-burnt-amber/80" />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <p className="font-display text-sm tracking-[0.3em] text-burnt-amber uppercase">
          {record.year}
        </p>
        <h2 className="mt-3 font-display text-3xl leading-tight text-ivory sm:text-4xl">
          {record.title}
        </h2>
        <p className="mt-2 text-lg text-warm-gray">{record.artist}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs tracking-[0.16em] text-warm-gray uppercase">
          <span className="rounded-sm border border-ivory/15 px-2.5 py-1 text-warm-gray">
            {mediaLabel}
          </span>
          <span>
            {recommended ? (
              <>
                Selected by{" "}
                <span className="text-warm-gray normal-case tracking-normal">
                  <span aria-hidden className="mr-1 text-burnt-amber">
                    ★
                  </span>
                  {credit}
                </span>
              </>
            ) : (
              <span className="text-warm-gray">Classic</span>
            )}
          </span>
        </div>

        {record.story ? (
          <p className="mt-8 max-w-prose text-base leading-relaxed text-warm-gray sm:text-lg">
            {record.story}
          </p>
        ) : null}

        {record.tags && record.tags.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tags">
            {record.tags.map((tag) => (
              <li
                key={tag}
                className="text-[10px] tracking-[0.14em] text-warm-gray uppercase"
              >
                #{tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10">
          <a
            href={appleMusicUrl(record)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-ivory px-5 py-3 text-sm tracking-[0.12em] text-ink uppercase transition-colors hover:bg-burnt-amber focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-amber"
          >
            Listen on Apple Music
            <span aria-hidden className="text-base leading-none">
              ↗
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
