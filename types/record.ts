/**
 * Core album/song record shape for Joe's Listening Room.
 * Swap curated entries in data/records.ts without changing UI components.
 *
 * Future: map 1:1 to a Supabase `records` table row.
 */
export type SelectionType = "dads-record" | "family-friends" | "discovery";

export type MediaType = "album" | "song";

export type AlbumRecord = {
  id: string;
  year: number;
  title: string;
  artist: string;
  artworkUrl: string;
  mediaType: MediaType;
  selectionType: SelectionType;
  /** Nominator label shown on the card — "Classic" or a person's name. */
  selectedBy: string;
  story: string;
  /** When true, this entry appears on the Memories page with its full story. */
  hasMemory?: boolean;
  photoUrl?: string;
  tags?: string[];
};

export function appleMusicUrl(record: Pick<AlbumRecord, "artist" | "title">): string {
  return `https://music.apple.com/us/search?term=${encodeURIComponent(`${record.artist} ${record.title}`)}`;
}

export const MEDIA_TYPE_LABELS: Record<MediaType, string> = {
  album: "Album",
  song: "Song",
};

/** Display credit: drop "Classic" when someone also recommended it. */
export function displayCredit(selectedBy: string): string {
  if (selectedBy === "Classic") return "Classic";

  const names = selectedBy
    .split(/\s*\+\s*/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && part !== "Classic");

  return names.join(" + ") || selectedBy;
}

export function isRecommendation(selectedBy: string): boolean {
  return displayCredit(selectedBy) !== "Classic";
}

export function isUnoptimizedImage(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://") || url.endsWith(".svg");
}

export const SELECTION_TYPE_LABELS: Record<SelectionType, string> = {
  "dads-record": "Record",
  "family-friends": "Family & Friends Pick",
  discovery: "Discovery Pick",
};
