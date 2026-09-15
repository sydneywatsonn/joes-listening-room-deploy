import Link from "next/link";

type SpinningVinylProps = {
  className?: string;
};

export function SpinningVinyl({ className = "" }: SpinningVinylProps) {
  return (
    <div className={`group/vinyl relative aspect-square ${className}`}>
      <div
        aria-hidden
        className="vinyl-spin pointer-events-none absolute inset-0 z-0"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <radialGradient id="vinylDiscFill" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(18,16,14,0.05)" />
              <stop offset="55%" stopColor="rgba(10,9,8,0.14)" />
              <stop offset="100%" stopColor="rgba(6,5,5,0.2)" />
            </radialGradient>
            <linearGradient
              id="vinylSheenSweep"
              gradientUnits="userSpaceOnUse"
              x1="100"
              y1="8"
              x2="100"
              y2="192"
              gradientTransform="rotate(32 100 100)"
            >
              <stop offset="0%" stopColor="rgba(137,166,186,0)" />
              <stop offset="38%" stopColor="rgba(137,166,186,0)" />
              <stop offset="48%" stopColor="rgba(165,185,200,0.2)" />
              <stop offset="52%" stopColor="rgba(137,166,186,0.16)" />
              <stop offset="62%" stopColor="rgba(137,166,186,0)" />
              <stop offset="100%" stopColor="rgba(137,166,186,0)" />
            </linearGradient>
          </defs>

          <circle cx="100" cy="100" r="98" fill="url(#vinylDiscFill)" />

          {Array.from({ length: 36 }, (_, i) => {
            const r = 22 + i * 2.1;
            const faint = i % 3 === 0 ? 0.18 : 0.1;
            return (
              <circle
                key={r}
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke={`rgba(232,226,216,${faint})`}
                strokeWidth={i % 4 === 0 ? 0.75 : 0.5}
              />
            );
          })}

          <circle
            cx="100"
            cy="100"
            r="97"
            fill="url(#vinylSheenSweep)"
            style={{ mixBlendMode: "screen" }}
          />
        </svg>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
        <div className="relative flex h-[14%] w-[14%] items-center justify-center transition-opacity duration-500 group-hover/vinyl:opacity-35">
          <div
            aria-hidden
            className="ember-glow absolute left-1/2 top-1/2 h-[730%] w-[730%] rounded-full bg-[radial-gradient(circle,rgba(169,71,47,0.28)_0%,rgba(169,71,47,0.12)_32%,rgba(120,40,28,0.05)_52%,transparent_72%)] blur-3xl"
          />
          <div
            aria-hidden
            className="ember-glow absolute left-1/2 top-1/2 h-[350%] w-[350%] rounded-full bg-[radial-gradient(circle,rgba(196,78,48,0.45)_0%,rgba(169,71,47,0.22)_42%,transparent_74%)] blur-2xl"
          />
          <div
            aria-hidden
            className="ember-core absolute left-1/2 top-1/2 h-full w-full rounded-full bg-[radial-gradient(circle_at_50%_50%,#d46a4a_0%,#c25538_28%,#A9472F_58%,rgba(120,40,28,0.55)_82%,transparent_100%)] blur-[1px]"
          />
          <div
            aria-hidden
            className="ember-core absolute left-1/2 top-1/2 h-[42%] w-[42%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,190,150,0.85)_0%,rgba(230,110,75,0.7)_45%,rgba(169,71,47,0.35)_100%)] blur-[0.5px]"
          />
        </div>
      </div>

      <Link
        href="/collection"
        className="group/enter absolute inset-[28%] z-20 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#89A6BA]"
        aria-label="Enter Room"
      >
        <span
          className="enter-cta pointer-events-none inline-flex translate-y-2 items-center justify-center rounded-full bg-[#89A6BA] px-6 py-2.5 font-[family-name:var(--font-instrument-sans)] text-sm font-bold tracking-[0.08em] text-[#3d4450] uppercase opacity-0 shadow-[0_10px_32px_rgba(137,166,186,0.45)] transition-all duration-300 [font-variation-settings:'wght'_700] group-hover/enter:translate-y-0 group-hover/enter:opacity-100 group-focus-visible/enter:translate-y-0 group-focus-visible/enter:opacity-100 sm:px-7 sm:text-base"
        >
          Enter
        </span>
      </Link>
    </div>
  );
}
