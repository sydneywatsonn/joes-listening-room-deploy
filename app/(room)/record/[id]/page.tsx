import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RecordDetail } from "@/components/RecordDetail";
import { getAllRecords, getRecordById } from "@/lib/records";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllRecords().map((record) => ({ id: record.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const record = getRecordById(id);
  if (!record) {
    return { title: "Record not found" };
  }
  return {
    title: `${record.title} · ${record.year}`,
    description: `${record.artist} — selected by ${record.selectedBy}`,
  };
}

export default async function RecordPage({ params }: PageProps) {
  const { id } = await params;
  const record = getRecordById(id);

  if (!record) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/collection"
        className="text-xs tracking-[0.18em] text-cream-dim uppercase transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
      >
        ← Back to collection
      </Link>
      <div className="mt-10">
        <RecordDetail record={record} />
      </div>
    </div>
  );
}
