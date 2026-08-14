import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import SiteHeader from "@/components/SiteHeader";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { hero, images } = project;
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="pt-16 sm:pt-24">
        <div className="grid grid-cols-1 sm:h-[calc(100vh-6rem)] sm:grid-cols-2">
          <div className="overflow-y-auto px-5 py-10 sm:px-10 sm:py-14">
            <p className="text-xs text-white/40">
              {project.category} — {project.year}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>

            <div className="mt-10 space-y-4 text-sm leading-relaxed text-white/70 sm:text-base">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
              {project.credits.map((credit) => (
                <div key={credit.label}>
                  <dt className="text-xs uppercase tracking-wide text-white/40">
                    {credit.label}
                  </dt>
                  <dd className="mt-1 text-sm text-white/80">{credit.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[70vw] sm:h-full">
            {hero.kind === "video" ? (
              <video
                src={hero.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={hero.src}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-0.5 px-0.5 pt-0.5">
            {images.map((src) => (
              <div key={src} className="relative aspect-[4/5]">
                <Image
                  src={src}
                  alt={project.title}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between border-t border-white/10 px-5 py-10 sm:px-8 sm:py-16"
        >
          <span className="text-xs uppercase tracking-wide text-white/40">Next Project</span>
          <span className="text-xl font-semibold tracking-tight transition-colors group-hover:text-white/60 sm:text-3xl">
            {next.title} →
          </span>
        </Link>
      </main>
    </div>
  );
}
