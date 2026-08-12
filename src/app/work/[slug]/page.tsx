import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projectImages, projects } from "@/lib/projects";
import { distributeMasonry } from "@/lib/masonry";
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

  const images = projectImages(project);
  const [hero, ...rest] = images;
  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      <main className="pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 pb-16 sm:grid-cols-2 sm:gap-16 sm:px-8">
          <div>
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

          {hero && (
            <Image
              src={hero.src}
              alt={project.title}
              width={hero.width}
              height={hero.height}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="block h-auto w-full self-start"
            />
          )}
        </div>

        {rest.length > 1 ? (
          <>
            <div className="flex gap-0.5 px-0.5 sm:hidden">
              {distributeMasonry(rest, 2).map((column, i) => (
                <div key={i} className="flex flex-1 flex-col gap-0.5">
                  {column.map((img) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={project.title}
                      width={img.width}
                      height={img.height}
                      sizes="50vw"
                      className="block h-auto w-full"
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="hidden gap-0.5 px-0.5 sm:flex">
              {distributeMasonry(rest, 4).map((column, i) => (
                <div key={i} className="flex flex-1 flex-col gap-0.5">
                  {column.map((img) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={project.title}
                      width={img.width}
                      height={img.height}
                      sizes="25vw"
                      className="block h-auto w-full"
                    />
                  ))}
                </div>
              ))}
            </div>
          </>
        ) : (
          rest.map((img) => (
            <Image
              key={img.src}
              src={img.src}
              alt={project.title}
              width={img.width}
              height={img.height}
              sizes="100vw"
              className="block h-auto w-full"
            />
          ))
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
