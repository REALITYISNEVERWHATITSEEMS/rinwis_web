"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

export default function SiteHeader() {
  const [indexOpen, setIndexOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = indexOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [indexOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6">
        <Link
          href="/"
          onClick={() => setIndexOpen(false)}
          className="text-xs font-semibold tracking-widest text-white"
        >
          MYEONGWOOKIM
        </Link>
        <button
          type="button"
          onClick={() => setIndexOpen((v) => !v)}
          className="text-xs font-semibold tracking-widest text-white"
        >
          {indexOpen ? "CLOSE" : "INDEX"}
        </button>
      </header>

      <div
        className={`fixed inset-0 z-30 overflow-y-auto bg-[#f2efe9]/95 px-5 pt-24 pb-16 text-black transition-opacity duration-300 sm:px-8 ${
          indexOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndexOpen(false);
        }}
      >
        <div className="mx-auto grid w-full max-w-3xl grid-cols-[1fr_110px_1fr] sm:grid-cols-[1fr_180px_1fr]">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              onClick={() => setIndexOpen(false)}
              className="col-span-3 grid grid-cols-subgrid items-center"
            >
              <span className="truncate pr-4 text-right text-xs text-black/70 hover:text-black sm:text-sm">
                {project.title}
              </span>
              <span
                className="relative block w-full"
                style={{ aspectRatio: `${project.cover.width} / ${project.cover.height}` }}
              >
                <Image
                  src={project.cover.src}
                  alt={project.title}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </span>
              <span className="truncate pl-4 text-left text-[10px] italic text-black/50 sm:text-xs">
                {project.category} — {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
