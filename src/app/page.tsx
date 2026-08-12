"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { projectImages, projects } from "@/lib/projects";
import { distributeMasonry } from "@/lib/masonry";
import SiteHeader from "@/components/SiteHeader";

type FeedImage = {
  key: string;
  src: string;
  width: number;
  height: number;
  slug: string;
  title: string;
  category: string;
};

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
      <SiteHeader />

      <main className="flex gap-0.5 px-0.5 pt-0.5 sm:hidden">
        <MasonryColumns columns={columns2} />
      </main>
      <main className="hidden gap-0.5 px-0.5 pt-0.5 sm:flex">
        <MasonryColumns columns={columns4} />
      </main>
    </div>
  );
}
