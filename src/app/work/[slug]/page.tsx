import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { getImageDims } from "@/lib/image-dims";
import { distributeMasonry } from "@/lib/masonry";
import SiteHeader from "@/components/SiteHeader";
import ProjectGallery from "@/components/ProjectGallery";

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

  const galleryItems = images.map((src) => ({ src, ...getImageDims(src) }));
  const galleryColumns = distributeMasonry(galleryItems, 2);

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="pt-16 sm:pt-24">
        <div className="grid grid-cols-1 gap-8 px-3 pb-12 sm:grid-cols-2 sm:gap-6 sm:px-6">
          <div>
            {hero.kind === "video" ? (
              <video
                src={hero.src}
                autoPlay
                muted
                loop
                playsInline
                className="block h-auto w-full"
              />
            ) : (
              <Image
                src={hero.src}
                alt={project.title}
                width={hero.width}
                height={hero.height}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="block h-auto w-full"
                priority
              />
            )}

            <div className="mt-6">
              <p className="text-xs text-white/40">
                {project.category} — {project.year}
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h1>
              <div className="mt-4 max-w-md space-y-3 text-sm italic leading-relaxed text-white/60">
                {project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-6 sm:grid-cols-2">
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
          </div>

          <ProjectGallery columns={galleryColumns} flatImages={galleryItems} alt={project.title} />
        </div>

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

      <footer className="fixed inset-x-0 bottom-0 z-40 mix-blend-difference flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6">
        <span className="text-xs font-semibold tracking-widest text-white">{project.title}</span>
        <span className="text-xs font-semibold tracking-widest text-white">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
      </footer>
    </div>
  );
}
