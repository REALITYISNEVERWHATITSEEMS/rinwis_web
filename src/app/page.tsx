type Project = {
  title: string;
  subtitle: string;
  background: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: "Personal Brand System",
    subtitle: "Identity · 2026",
    background: "linear-gradient(135deg, #e8e6df 0%, #b9b6ac 100%)",
    accent: "#141311",
  },
  {
    title: "Studio Website Vol. 1",
    subtitle: "Web · Next.js",
    background: "#c23b2f",
    accent: "#f4d9d3",
  },
  {
    title: "Field Notes App",
    subtitle: "Product · iOS",
    background: "#6a4fc9",
    accent: "#efe8ff",
  },
  {
    title: "Working in Public — Toolkit",
    subtitle: "Open Source",
    background: "linear-gradient(135deg, #f2a341 0%, #d97b2d 100%)",
    accent: "#2a1a0b",
  },
  {
    title: "Systems & Field Notes",
    subtitle: "Research",
    background: "#4b5233",
    accent: "#e9e7d8",
  },
  {
    title: "Product Journal, 2024–2026",
    subtitle: "Case Study",
    background: "#1d4ed8",
    accent: "#dbe4fb",
  },
  {
    title: "Get Together — Community Kit",
    subtitle: "Collaboration",
    background: "linear-gradient(135deg, #f5c451 0%, #e0533a 100%)",
    accent: "#241505",
  },
  {
    title: "An Elegant Puzzle — Notes",
    subtitle: "Engineering",
    background: "linear-gradient(135deg, #ece9e2 0%, #cbc7bc 100%)",
    accent: "#1c1917",
  },
];

function Book({ project }: { project: Project }) {
  return (
    <div className="w-32 shrink-0 sm:w-36" style={{ perspective: "900px" }}>
      <div
        className="h-16 rounded-t-[5px] shadow-[0_20px_28px_-14px_rgba(0,0,0,0.75)] sm:h-[74px]"
        style={{
          background: project.background,
          transform: "rotateX(50deg)",
          transformOrigin: "bottom",
        }}
      />
      <div
        className="relative h-6 overflow-hidden rounded-b-[5px] sm:h-7"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, #efe9dd 0px, #efe9dd 2px, #ddd5c2 2px, #ddd5c2 4px)",
        }}
      >
        <span
          className="absolute top-1/2 right-1.5 h-3.5 w-3.5 -translate-y-1/2 rounded-[2px] sm:h-4 sm:w-4"
          style={{ background: project.accent }}
        />
      </div>
    </div>
  );
}

function PlayButton() {
  return (
    <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#f2ece4]/25 text-[#f2ece4]/70 transition-colors hover:border-[#f2ece4]/50 hover:text-[#f2ece4]">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
}

function Row({ project }: { project: Project }) {
  return (
    <div className="flex items-end gap-5">
      <Book project={project} />
      <div className="flex flex-1 items-center justify-between gap-3 pb-1">
        <div className="min-w-0">
          <p className="truncate text-[15px] font-semibold text-[#f2ece4]">
            {project.title}
          </p>
          <p className="truncate text-[13px] text-[#f2ece4]/45">{project.subtitle}</p>
        </div>
        <PlayButton />
      </div>
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
        <div className="space-y-11">
          {projects.map((project) => (
            <Row key={project.title} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
