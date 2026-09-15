import type { AlbumRecord } from "@/types/record";
import { catalogA } from "./catalog-a";
import { catalogB } from "./catalog-b";

export const records: AlbumRecord[] = [...catalogA, ...catalogB];
