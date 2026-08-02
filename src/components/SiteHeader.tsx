"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/lib/projects";

function Spine({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group relative block h-16 w-full shrink-0 overflow-hidden rounded-[3px] border border-white/70 bg-transparent transition-[margin] duration-300 hover:my-4 sm:h-full sm:w-auto sm:flex-1 sm:hover:my-0 sm:hover:mx-4"
    >
      {/* mobile: horizontal row */}
      <div className="relative grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:hidden">
        <span className="font-mono text-[10px] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="truncate text-base font-semibold tracking-tight text-white">
          {project.title}
        </span>
        <span className="shrink-0 text-right text-[10px] uppercase tracking-wide text-white/60">
          <span className="block">{project.category}</span>
          <span className="block text-white/40">{project.year}</span>
        </span>
      </div>

      {/* desktop: vertical spine */}
      <div className="hidden h-full w-full flex-col items-center justify-between py-6 sm:flex">
        <span className="font-mono text-[10px] text-white/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="max-h-[65%] truncate text-lg font-semibold tracking-tight text-white"
          style={{ writingMode: "vertical-rl" }}
        >
          {project.title}
        </span>
        <span className="text-center text-[9px] uppercase tracking-wide text-white/60">
          <span className="block">{project.category}</span>
          <span className="block text-white/40">{project.year}</span>
        </span>
      </div>
    </Link>
  );
}

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
        className={`fixed inset-0 z-30 flex flex-col overflow-y-auto bg-black px-5 pt-24 pb-16 transition-opacity duration-300 sm:overflow-hidden sm:px-8 ${
          indexOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIndexOpen(false);
        }}
      >
        <div
          className="mx-auto flex w-full max-w-3xl flex-col gap-1.5 sm:h-full sm:max-w-none sm:flex-row sm:gap-1"
          onClick={() => setIndexOpen(false)}
        >
          {projects.map((project, i) => (
            <Spine key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}
