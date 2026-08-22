"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AutoplayVideo from "./AutoplayVideo";

type GalleryImage = { src: string; width: number; height: number };

const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export default function ProjectGallery({
  columns,
  flatImages,
  alt,
}: {
  columns: GalleryImage[][];
  flatImages: GalleryImage[];
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? null : (i + 1) % flatImages.length));
      }
      if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? null : (i - 1 + flatImages.length) % flatImages.length));
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, flatImages.length]);

  return (
    <>
      <div className="flex gap-1">
        {columns.map((column, i) => (
          <div key={i} className="flex flex-1 flex-col gap-1">
            {column.map((img) =>
              isVideo(img.src) ? (
                <AutoplayVideo key={img.src} src={img.src} className="block h-auto w-full" />
              ) : (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setOpenIndex(flatImages.findIndex((f) => f.src === img.src))}
                  className="block w-full cursor-zoom-in"
                >
                  <Image
                    src={img.src}
                    alt={alt}
                    width={img.width}
                    height={img.height}
                    sizes="25vw"
                    className="block h-auto w-full"
                  />
                </button>
              ),
            )}
          </div>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-16 sm:px-12"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex(null);
            }}
            className="absolute right-5 top-4 text-xs font-semibold tracking-widest text-white sm:right-8 sm:top-6"
          >
            CLOSE
          </button>
          <Image
            src={flatImages[openIndex].src}
            alt={alt}
            width={flatImages[openIndex].width}
            height={flatImages[openIndex].height}
            sizes="90vw"
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
