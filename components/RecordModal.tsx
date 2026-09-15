"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import type { AlbumRecord } from "@/types/record";
import { RecordDetail } from "@/components/RecordDetail";

type RecordModalProps = {
  record: AlbumRecord | null;
  onClose: () => void;
};

export function RecordModal({ record, onClose }: RecordModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!record) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [record, handleKeyDown]);

  if (!record) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        aria-label="Close record detail"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-t-md border border-ivory/10 bg-ink-elevated p-5 shadow-2xl sm:rounded-md sm:p-8 md:p-10"
      >
        <span id={titleId} className="sr-only">
          {record.title} by {record.artist}
        </span>
        <div className="mb-6 flex justify-end">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-sm px-3 py-1.5 text-xs tracking-[0.18em] text-warm-gray uppercase transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-amber"
          >
            Close
          </button>
        </div>
        <RecordDetail record={record} />
      </div>
    </div>
  );
}
