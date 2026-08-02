"use client";

import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

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
      >
        <ol className="mx-auto w-full max-w-3xl divide-y divide-white/10">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                onClick={() => setIndexOpen(false)}
                className="group flex items-baseline justify-between gap-4 py-4 sm:py-5"
              >
                <span className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-white/60 sm:text-2xl">
                    {project.title}
                  </span>
                </span>
                <span className="shrink-0 text-right text-xs text-white/40 sm:text-sm">
                  <span className="block">{project.category}</span>
                  <span className="block">{project.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
