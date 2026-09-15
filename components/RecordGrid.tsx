"use client";

import type { AlbumRecord } from "@/types/record";
import { RecordCard } from "@/components/RecordCard";

type RecordGridProps = {
  records: AlbumRecord[];
  onSelect: (record: AlbumRecord) => void;
};

export function RecordGrid({ records, onSelect }: RecordGridProps) {
  return (
    <section
      id="collection"
      aria-label="Album collection"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 pb-24 sm:px-8"
    >
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {records.map((record) => (
          <li key={record.id}>
            <RecordCard record={record} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </section>
  );
}
