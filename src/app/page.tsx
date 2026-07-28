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
  {
    label: "ARCHIVE",
    title: "Sketch & Motion Studies",
    background: "linear-gradient(135deg, #1e3a8a 0%, #7c3aed 55%, #db2777 100%)",
    color: "#f5f3ff",
  },
];

function Spine({ project }: { project: Project }) {
  return (
    <div
      className="group relative h-16 w-full overflow-hidden rounded-[3px] shadow-[0_14px_28px_-16px_rgba(0,0,0,0.75)] transition-transform duration-200 ease-out hover:-translate-y-0.5 sm:h-[68px]"
      style={{ background: project.background, color: project.color }}
    >
      {project.accent && (
        <span
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, ${project.accent}, transparent 70%)`,
          }}
        />
      )}
      <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
      <span className="pointer-events-none absolute inset-y-0 right-16 w-px bg-black/10 sm:right-20" />

      <div className="relative grid h-full grid-cols-[1fr_auto_56px] items-center gap-3 px-5 sm:grid-cols-[1fr_auto_72px] sm:px-8">
        <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.15em] opacity-80 sm:text-xs">
          {project.label}
        </span>
        <span className="justify-self-center truncate text-center text-xs font-semibold uppercase tracking-wide sm:text-sm">
          {project.title}
        </span>
        <span className="justify-self-end opacity-50 transition-opacity duration-200 group-hover:opacity-90">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default function Home() {
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

      <main className="mx-auto flex max-w-5xl gap-6 px-6 py-16 sm:gap-10 sm:px-10 sm:py-24">
        <div className="hidden w-4 flex-col items-center gap-[7px] pt-3 lg:flex">
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="h-px w-3 bg-[#f2ece4]/25"
              style={{ opacity: i % 3 === 0 ? 0.5 : 0.2 }}
            />
          ))}
        </div>

        <div className="mx-auto w-full max-w-xl space-y-7 lg:mx-0">
          {projects.map((project) => (
            <Spine key={project.title} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
}
