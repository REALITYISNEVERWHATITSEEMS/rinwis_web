"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  bar: string;
  barText: string;
  art: string;
};

const projects: Project[] = [
  {
    title: "Personal Brand System",
    subtitle: "Identity · 2026",
    bar: "#2b3138",
    barText: "#f2ece4",
    art: "linear-gradient(160deg, #37506b 0%, #4c6b46 60%, #8a9a5b 100%)",
  },
  {
    title: "Studio Website Vol. 1",
    subtitle: "Web · Next.js",
    bar: "#e9e7e2",
    barText: "#1a1a18",
    art: "linear-gradient(160deg, #cfd6da 0%, #9fb0b8 100%)",
  },
  {
    title: "Field Notes App",
    subtitle: "Product · iOS",
    bar: "#d97757",
    barText: "#241205",
    art: "linear-gradient(135deg, #f2a341 0%, #e0533a 40%, #6a4fc9 75%, #f5c451 100%)",
  },
  {
    title: "Working in Public — Toolkit",
    subtitle: "Open Source",
    bar: "#2e5fb0",
    barText: "#e8f0fc",
    art: "linear-gradient(160deg, #7a4a2b 0%, #c98a4b 100%)",
  },
  {
    title: "Systems & Field Notes",
    subtitle: "Research",
    bar: "#1a1a1a",
    barText: "#e9e7d8",
    art: "linear-gradient(160deg, #2a2a2a 0%, #0d0d0d 100%)",
  },
  {
    title: "Product Journal, 2024–2026",
    subtitle: "Case Study",
    bar: "#a9c6e8",
    barText: "#0d1b2e",
    art: "linear-gradient(160deg, #dce8f5 0%, #9fb7d1 100%)",
  },
  {
    title: "Get Together — Community Kit",
    subtitle: "Collaboration",
    bar: "#8bab4f",
    barText: "#101a05",
    art: "linear-gradient(160deg, #a9c95f 0%, #6f8f3a 100%)",
  },
  {
    title: "An Elegant Puzzle — Notes",
    subtitle: "Engineering",
    bar: "#3a3632",
    barText: "#ece9e2",
    art: "linear-gradient(160deg, #4a4640 0%, #211f1c 100%)",
  },
];

const BASE_TILT = 62;
const MAX_EXTRA_TILT = 24;

function Bar({ project }: { project: Project }) {
  return (
    <div
      className="relative z-10 flex h-9 items-center justify-center px-4 text-center sm:h-10"
      style={{ background: project.bar, color: project.barText }}
    >
      <p className="truncate text-[13px] sm:text-sm">
        <span className="font-bold italic">{project.title}</span>{" "}
        <span className="opacity-70">{project.subtitle}</span>
      </p>
    </div>
  );
}

function Art({
  project,
  flip,
  extraTilt,
}: {
  project: Project;
  flip: boolean;
  extraTilt: number;
}) {
  const angle = Math.min(BASE_TILT + extraTilt, 85);
  return (
    <div style={{ perspective: "420px" }}>
      <div
        className="h-32 sm:h-36"
        style={{
          background: project.art,
          transform: `rotateX(${flip ? "-" : ""}${angle}deg)`,
          transformOrigin: flip ? "bottom" : "top",
        }}
      />
    </div>
  );
}

function Item({
  project,
  index,
  progress,
  setRef,
}: {
  project: Project;
  index: number;
  progress: number;
  setRef: (el: HTMLDivElement | null) => void;
}) {
  const artAbove = index % 2 === 1;
  const extraTilt = progress * MAX_EXTRA_TILT;
  const scale = 1 - progress * 0.05;

  return (
    <div
      ref={setRef}
      className="overflow-hidden shadow-[0_18px_30px_-16px_rgba(0,0,0,0.8)] transition-transform duration-150 ease-out"
      style={{ transform: `scale(${scale})` }}
    >
      {artAbove ? (
        <>
          <Art project={project} flip extraTilt={extraTilt} />
          <Bar project={project} />
        </>
      ) : (
        <>
          <Bar project={project} />
          <Art project={project} flip={false} extraTilt={extraTilt} />
        </>
      )}
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
        const raw = (vh * 0.55 - center) / (vh * 0.55);
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
    <div className="min-h-screen bg-[#0d0b0a] text-[#f2ece4]">
      <header className="flex items-center gap-3 px-6 pt-10 sm:px-10">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#f2ece4]/30 font-mono text-[11px]">
          M
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold tracking-wide">MYEONGWOO KIM</p>
          <p className="text-[11px] italic text-[#f2ece4]/50">Selected Work</p>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="space-y-3">
          {projects.map((project, i) => (
            <Item
              key={project.title}
              project={project}
              index={i}
              progress={progress[i] ?? 0}
              setRef={(el) => {
                itemRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
