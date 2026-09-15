import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink/55 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:gap-4 sm:px-8">
        <Link
          href="/"
          className="type-meta min-w-0 truncate text-[10px] tracking-[0.12em] uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gray sm:text-sm sm:tracking-[0.18em]"
        >
          Joe&apos;s Listening Room
        </Link>
        <nav className="flex shrink-0 items-center gap-4 sm:gap-7">
          <Link
            href="/collection"
            className="type-meta text-[10px] tracking-[0.12em] uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gray sm:text-xs sm:tracking-[0.18em]"
          >
            Collection
          </Link>
          <Link
            href="/memories"
            className="type-meta text-[10px] tracking-[0.12em] uppercase transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-gray sm:text-xs sm:tracking-[0.18em]"
          >
            Memories
          </Link>
        </nav>
      </div>
    </header>
  );
}
