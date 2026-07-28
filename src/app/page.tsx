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

function Spine({ project, index }: { project: Project; index: number }) {
  const tilt = index % 2 === 0 ? 1.1 : -1.1;

  return (
    <div className="group relative">
      {/* cover — sits behind the spine, peeking out along the top and right edge */}
      <div
        className="absolute inset-x-0 -top-4 h-16 rounded-[3px] outline outline-1 outline-white/10 transition-transform duration-200 ease-out group-hover:-top-6 sm:-top-5 sm:h-[68px]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), ${project.background}`,
          transform: `rotate(${tilt}deg)`,
        }}
      />

      {/* spine — the front face */}
      <div
        className="relative mr-7 h-16 overflow-hidden rounded-[3px] shadow-[0_22px_36px_-16px_rgba(0,0,0,0.85)] transition-transform duration-200 ease-out group-hover:-translate-y-1.5 sm:mr-9 sm:h-[68px]"
        style={{ background: project.background, color: project.color }}
      >
        {/* embossed highlight/shadow to suggest a rounded, dimensional surface */}
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 32%, rgba(0,0,0,0) 68%, rgba(0,0,0,0.28) 100%)",
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
        <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
        <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-black/15" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-black/20" />

        <div className="relative grid h-full grid-cols-[1fr_auto_44px] items-center gap-3 px-5 sm:grid-cols-[1fr_auto_56px] sm:px-8">
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

      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-24">
        <div className="relative">
          <div className="pointer-events-none absolute top-3 -left-14 hidden flex-col items-center gap-[7px] lg:flex">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="h-px w-3 bg-[#f2ece4]/25"
                style={{ opacity: i % 3 === 0 ? 0.5 : 0.2 }}
              />
            ))}
          </div>

          <div className="space-y-9">
            {projects.map((project, i) => (
              <Spine key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
