"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projectImages, projects } from "@/lib/projects";

type FeedImage = {
  key: string;
  src: string;
  width: number;
  height: number;
  slug: string;
  title: string;
  category: string;
};

function distributeMasonry(items: FeedImage[], columnCount: number): FeedImage[][] {
  const columns: FeedImage[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array(columnCount).fill(0);
  for (const item of items) {
    let shortest = 0;
    for (let i = 1; i < columnCount; i++) {
      if (heights[i] < heights[shortest]) shortest = i;
    }
    columns[shortest].push(item);
    heights[shortest] += item.height / item.width;
  }
  return columns;
}

function MasonryColumns({ columns }: { columns: FeedImage[][] }) {
  return (
    <>
      {columns.map((column, i) => (
        <div key={i} className="flex flex-1 flex-col gap-0.5">
          {column.map((img) => (
            <Link
              key={img.key}
              href={`/work/${img.slug}`}
              className="group relative block w-full"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 50vw, 25vw"
                className="block h-auto w-full"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="p-3 sm:p-5">
                  <p className="text-xs font-semibold sm:text-sm">{img.title}</p>
                  <p className="text-[10px] text-white/60 sm:text-xs">{img.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </>
  );
}

export default function Home() {
  const [indexOpen, setIndexOpen] = useState(false);

  const feed = useMemo<FeedImage[]>(
    () =>
      projects.flatMap((project) =>
        projectImages(project).map((img, i) => ({
          key: `${project.slug}-${i}`,
          src: img.src,
          width: img.width,
          height: img.height,
          slug: project.slug,
          title: project.title,
          category: project.category,
        })),
      ),
    [],
  );

  const columns2 = useMemo(() => distributeMasonry(feed, 2), [feed]);
  const columns4 = useMemo(() => distributeMasonry(feed, 4), [feed]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference flex items-center justify-between px-5 py-4 sm:px-8 sm:py-6">
        <Link href="/" className="text-xs font-semibold tracking-widest text-white">
          MYEONGWOOKIM
        </Link>
        <button
          type="button"
          onClick={() => setIndexOpen((v) => !v)}
          className="text-xs font-semibold tracking-widest text-white"
        >
          {indexOpen ? "CLOSE" : "INDEX"}
        </button>
      </header>

      <main className="flex gap-0.5 px-0.5 pt-0.5 sm:hidden">
        <MasonryColumns columns={columns2} />
      </main>
      <main className="hidden gap-0.5 px-0.5 pt-0.5 sm:flex">
        <MasonryColumns columns={columns4} />
      </main>

      <div
        className={`fixed inset-0 z-30 flex flex-col overflow-y-auto bg-black px-5 pt-24 pb-16 transition-opacity duration-300 sm:px-8 ${
          indexOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ol className="mx-auto w-full max-w-3xl divide-y divide-white/10">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4 sm:py-5"
              >
                <span className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-semibold tracking-tight transition-colors group-hover:text-white/60 sm:text-2xl">
                    {project.title}
                  </span>
                </span>
                <span className="shrink-0 text-right text-xs text-white/40 sm:text-sm">
                  <span className="block">{project.category}</span>
                  <span className="block">{project.year}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
