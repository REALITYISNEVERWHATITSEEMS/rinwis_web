"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  label: string;
  title: string;
  background: string;
  color: string;
  accent?: string;
};

const projects: Project[] = [
  {
    label: "IDENTITY",
    title: "Personal Brand System",
    background: "linear-gradient(180deg, #d9d9d7 0%, #b7b6b2 100%)",
    color: "#141311",
    accent: "#38bdf8",
  },
  {
    label: "WEB",
    title: "Studio Website Vol. 1",
    background: "#1c2a44",
    color: "#c9d3e6",
  },
  {
    label: "PRODUCT",
    title: "Field Notes App",
    background: "linear-gradient(180deg, #e7e6e2 0%, #cfcdc7 100%)",
    color: "#1a1a18",
    accent: "#dc2626",
  },
  {
    label: "OPEN SOURCE",
    title: "Working in Public — Toolkit",
    background:
      "linear-gradient(115deg, #ef4444 0%, #f59e0b 35%, #1e1b4b 68%, #f59e0b 100%)",
    color: "#141311",
  },
  {
    label: "RESEARCH",
    title: "Systems & Field Notes",
    background: "#4b5233",
    color: "#e9e7d8",
  },
  {
    label: "CASE STUDY",
    title: "Product Journal, 2024–2026",
    background: "#1d4ed8",
    color: "#dbe4fb",
  },
  {
    label: "COLLAB",
    title: "Get Together — Community Kit",
    background: "linear-gradient(90deg, #f59e0b 0%, #ef4444 100%)",
    color: "#1c1917",
  },
  {
    label: "ENGINEERING",
    title: "An Elegant Puzzle — Notes",
    background: "linear-gradient(180deg, #f6f5f2 0%, #d7d4cd 100%)",
    color: "#1c1917",
  },
];

const MAX_TILT = 78;
const MAX_SCALE_DROP = 0.08;

function Spine({ project }: { project: Project }) {
  return (
    <div
      className="group relative h-16 overflow-hidden rounded-[3px] shadow-[0_10px_18px_-10px_rgba(0,0,0,0.65)] sm:h-[68px]"
      style={{ background: project.background, color: project.color }}
    >
      <span
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.14) 100%)",
        }}
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.3) 88%)",
        }}
      />
      {project.accent && (
        <span
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, transparent 70%)`,
          }}
        />
      )}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15" />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/25" />

      <div className="relative grid h-full grid-cols-[1fr_auto_44px] items-center gap-3 px-5 sm:grid-cols-[1fr_auto_56px] sm:px-8">
        <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.15em] opacity-80 sm:text-xs">
          {project.label}
        </span>
        <span className="justify-self-center truncate text-center text-xs font-semibold uppercase tracking-wide sm:text-sm">
          {project.title}
        </span>
        <span className="justify-self-end opacity-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function useScrollTilt(count: number) {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState<number[]>(() => Array(count).fill(0));
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const measure = () => {
      frameRef.current = null;
      const vh = window.innerHeight;
      const next = itemRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const raw = (vh * 0.4 - center) / (vh * 0.4);
        return Math.min(1, Math.max(0, raw));
      });
      setProgress(next);
    };

    const onScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [count]);

  return { itemRefs, progress };
}

export default function Home() {
  const { itemRefs, progress } = useScrollTilt(projects.length);

  return (
    <div className="min-h-screen bg-[#15100d] text-[#f2ece4]">
      <header className="flex items-center gap-3 px-6 pt-10 sm:px-10">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#f2ece4]/30 font-mono text-[11px]">
          M
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold tracking-wide">MYEONGWOO KIM</p>
          <p className="text-[11px] italic text-[#f2ece4]/50">Selected Work</p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="space-y-9">
          {projects.map((project, i) => {
            const p = progress[i] ?? 0;
            return (
              <div
                key={project.title}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                style={{
                  perspective: "800px",
                }}
              >
                <div
                  style={{
                    transform: `rotateX(${p * MAX_TILT}deg) scale(${1 - p * MAX_SCALE_DROP})`,
                    transformOrigin: "top",
                    opacity: 1 - p * 0.35,
                  }}
                >
                  <Spine project={project} />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
