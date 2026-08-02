"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.299 * r + 0.587 * g + 0.114 * b > 150;
}

function Spine({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const light = isLight(project.color);
  const fg = light ? "text-black" : "text-white";
  const fgMuted = light ? "text-black/50" : "text-white/60";
  const fgFaint = light ? "text-black/35" : "text-white/40";

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block h-16 shrink-0 overflow-hidden rounded-[3px] shadow-[0_10px_18px_-10px_rgba(0,0,0,0.65)] transition-transform duration-300 hover:-translate-y-px sm:h-20"
      style={{ background: project.color }}
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background: light
            ? "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.08) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.25) 100%)",
        }}
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28"
        style={{
          background: light
            ? "linear-gradient(90deg, transparent, rgba(0,0,0,0.12) 90%)"
            : "linear-gradient(90deg, transparent, rgba(0,0,0,0.35) 90%)",
        }}
      />
      <span className={`pointer-events-none absolute inset-x-0 top-0 h-px ${light ? "bg-white/60" : "bg-white/20"}`} />
      <span className={`pointer-events-none absolute inset-x-0 bottom-0 h-px ${light ? "bg-black/15" : "bg-black/40"}`} />

      <div className="relative grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:gap-5 sm:px-6">
        <span className={`font-mono text-[10px] sm:text-xs ${fgMuted}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`truncate text-base font-semibold tracking-tight sm:text-xl ${fg}`}>
          {project.title}
        </span>
        <span className={`shrink-0 text-right text-[10px] uppercase tracking-wide sm:text-xs ${fgMuted}`}>
          <span className="block">{project.category}</span>
          <span className={`block ${fgFaint}`}>{project.year}</span>
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
