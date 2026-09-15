import { Header } from "@/components/Header";

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col bg-ink">
      <Header />
      <main className="flex-1">{children}</main>
      <footer className="px-6 py-12 text-center">
        <p className="type-headline text-ember text-sm tracking-[-0.02em] uppercase [font-variation-settings:'wght'_500]">
          Joe&apos;s Listening Room
        </p>
        <p className="type-meta mt-2 text-[11px] tracking-[0.28em] uppercase">
          1966 — 2026
        </p>
      </footer>
    </div>
  );
}
