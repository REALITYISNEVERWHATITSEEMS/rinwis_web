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

function Art({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <div style={{ perspective: "420px" }}>
      <div
        className="h-32 sm:h-36"
        style={{
          background: project.art,
          transform: `rotateX(${flip ? "-" : ""}68deg)`,
          transformOrigin: flip ? "bottom" : "top",
        }}
      />
    </div>
  );
}

function Item({ project, index }: { project: Project; index: number }) {
  const artAbove = index % 2 === 1;
  return (
    <div className="overflow-hidden shadow-[0_18px_30px_-16px_rgba(0,0,0,0.8)]">
      {artAbove ? (
        <>
          <Art project={project} flip />
          <Bar project={project} />
        </>
      ) : (
        <>
          <Bar project={project} />
          <Art project={project} flip={false} />
        </>
      )}
    </div>
  );
}

export default function Home() {
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
            <Item key={project.title} project={project} index={i} />
          ))}
        </div>
      </main>
    </div>
  );
}
