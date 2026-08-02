"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectImages, projects } from "@/lib/projects";

function Spine({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const cover = projectImages(project)[0];

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block h-16 shrink-0 overflow-hidden rounded-[3px] shadow-[0_10px_18px_-10px_rgba(0,0,0,0.65)] sm:h-20"
    >
      <Image
        src={cover.src}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 768px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/30" />
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.25) 100%)",
        }}
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.55) 90%)" }}
      />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/40" />

      <div className="relative grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:gap-5 sm:px-6">
        <span className="font-mono text-[10px] text-white/60 sm:text-xs">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate text-base font-semibold tracking-tight text-white sm:text-xl">
          {project.title}
        </span>
        <span className="shrink-0 text-right text-[10px] uppercase tracking-wide text-white/60 sm:text-xs">
          <span className="block">{project.category}</span>
          <span className="block text-white/40">{project.year}</span>
        </span>
      </div>
    </Link>
  );
}

export default function SiteHeader() {
  const [indexOpen, setIndexOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6">
        <Link href="/" className="text-xs font-semibold tracking-widest text-white">
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
        className={`fixed inset-0 z-30 flex flex-col overflow-y-auto bg-black px-5 pt-24 pb-16 transition-opacity duration-300 sm:px-8 ${
          indexOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndexOpen(false);
        }}
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-1.5" onClick={() => setIndexOpen(false)}>
          {projects.map((project, i) => (
            <Spine key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
