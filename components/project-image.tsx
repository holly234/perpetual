"use client";

import Image from "next/image";
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
    <Image
      src={currentSrc}
      alt={alt}
      fill
      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
      className={className}
      onError={() => {
        if (fallback && currentSrc !== fallback) {
          setCurrentSrc(fallback);
        }
      }}
    />
  );
}
