import { records } from "@/data/records";
import type { AlbumRecord } from "@/types/record";

/**
 * Data access boundary for album records.
 * MVP: reads from local data/records.ts.
 * Later: swap implementations here for Supabase without touching UI.
 */

export function getAllRecords(): AlbumRecord[] {
  // Keep curated #1–#60 order (years may repeat).
  return records;
}

export function getRecordById(id: string): AlbumRecord | undefined {
  return records.find((record) => record.id === id);
}

export function getRecordByYear(year: number): AlbumRecord | undefined {
  return records.find((record) => record.year === year);
}

export function getRecordCount(): number {
  return records.length;
}

/** Personal memories shared with a record — for the Memories page. */
export function getMemoryRecords(): AlbumRecord[] {
  return records.filter((record) => record.hasMemory);
}
