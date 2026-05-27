"use client";

import { useState } from "react";

type ProjectImageProps = {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
};

export function ProjectImage({ src, fallback, alt, className }: ProjectImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}
