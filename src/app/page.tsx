type Project = {
  label: string;
  title: string;
  background: string;
  color: string;
};

const projects: Project[] = [
  {
    label: "IDENTITY",
    title: "Personal Brand System",
    background: "linear-gradient(160deg, #d9d9d7 0%, #b7b6b2 100%)",
    color: "#141311",
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
    background: "#6a4fc9",
    color: "#efe8ff",
  },
  {
    label: "OPEN SOURCE",
    title: "Working in Public",
    background:
      "linear-gradient(150deg, #f2a341 0%, #e0533a 60%, #6a4fc9 100%)",
    color: "#1a0f05",
  },
  {
    label: "RESEARCH",
    title: "Systems & Field Notes",
    background: "#4b5233",
    color: "#e9e7d8",
  },
  {
    label: "CASE STUDY",
    title: "Product Journal",
    background: "#1d4ed8",
    color: "#dbe4fb",
  },
  {
    label: "COLLAB",
    title: "Get Together",
    background: "linear-gradient(150deg, #f5c451 0%, #e0533a 100%)",
    color: "#241505",
  },
  {
    label: "ENGINEERING",
    title: "An Elegant Puzzle",
    background: "linear-gradient(160deg, #ece9e2 0%, #cbc7bc 100%)",
    color: "#1c1917",
  },
];

function Cover({ project }: { project: Project }) {
  return (
    <div
      className="cf-cover flex h-40 w-40 shrink-0 items-center justify-center rounded-[6px] p-4 text-center shadow-[0_20px_40px_-16px_rgba(0,0,0,0.8)] sm:h-52 sm:w-52"
      style={{ background: project.background, color: project.color }}
    >
      <span className="text-xs font-bold uppercase leading-snug tracking-wide sm:text-sm">
        {project.title}
      </span>
    </div>
  );
}

function Reflection({ project }: { project: Project }) {
  return (
    <div
      className="cf-reflection h-40 w-40 shrink-0 rounded-[6px]"
      style={{
        background: project.background,
        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 70%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.35), transparent 70%)",
      }}
    />
  );
}

function CoverItem({ project }: { project: Project }) {
  return (
    <div className="flex shrink-0 snap-center flex-col items-center px-6 sm:px-8">
      <Cover project={project} />
      <Reflection project={project} />
      <div className="cf-caption mt-6 w-48 text-center">
        <p className="text-sm font-semibold text-[#f2ece4]">{project.title}</p>
        <p className="text-xs text-[#f2ece4]/50">{project.label}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d0b0a] text-[#f2ece4]">
      <header className="mx-auto flex max-w-2xl items-center gap-3 px-6 pt-10 sm:px-10">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#f2ece4]/30 font-mono text-[11px]">
          M
        </span>
        <div className="leading-tight">
          <p className="text-xs font-semibold tracking-wide">MYEONGWOO KIM</p>
          <p className="text-[11px] italic text-[#f2ece4]/50">Selected Work</p>
        </div>
      </header>

      <main className="flex flex-col justify-center py-24 sm:py-32">
        <div className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
          <div className="shrink-0" style={{ width: "42vw" }} />
          {projects.map((project) => (
            <CoverItem key={project.title} project={project} />
          ))}
          <div className="shrink-0" style={{ width: "42vw" }} />
        </div>
      </main>
    </div>
  );
}
