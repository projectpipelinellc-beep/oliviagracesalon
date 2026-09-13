"use client";

import Image from "next/image";
import { useState } from "react";

interface PhotoSlotProps {
  src: string;
  alt: string;
  /** Filename shown in the placeholder state, e.g. "BBPhoto-140.JPEG" */
  filename: string;
  /** Short description shown in the placeholder state. */
  description: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Tailwind aspect-ratio utility class, e.g. "aspect-[3/4]" */
  aspectClassName: string;
  /** object-position for the <img>, tunable per-breakpoint via className overrides on the wrapper if needed */
  objectPosition?: string;
}

/**
 * Renders one of the salon's supplied photographs. Reserves its exact
 * aspect ratio up front (no layout shift) and falls back to a tasteful,
 * on-brand placeholder — never a stock photo — if the file named in
 * `src` hasn't been added to /public/images yet.
 */
export default function PhotoSlot({
  src,
  alt,
  filename,
  description,
  priority = false,
  sizes = "100vw",
  className = "",
  aspectClassName,
  objectPosition = "center",
}: PhotoSlotProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden bg-cream ${aspectClassName} ${className}`}
    >
      {!errored ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover", objectPosition }}
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-gold/50 bg-cream px-6 text-center">
          <svg
            aria-hidden="true"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            className="text-gold"
          >
            <rect x="2.5" y="4.5" width="19" height="15" rx="1" stroke="currentColor" />
            <circle cx="8" cy="10" r="1.75" stroke="currentColor" />
            <path d="M3 16.5L8.5 12L13 15.5L16.5 12.5L21 16" stroke="currentColor" />
          </svg>
          <p className="font-sans text-xs uppercase tracking-widest2 text-taupe">
            Image pending
          </p>
          <p className="max-w-xs font-sans text-sm text-espresso/70">{description}</p>
          <p className="font-mono text-[11px] text-taupe">/public/images/{filename}</p>
        </div>
      )}
    </div>
  );
}
