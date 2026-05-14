"use client";

import Image from "next/image";
import {ArrowLeft, ArrowRight, CheckSquare, ExternalLink, Grid2X2, Users} from "lucide-react";
import {useMemo, useState} from "react";
import Link from "next/link";
import {projects} from "@/data/site";
import {cn} from "@/lib/utils";

const cardStyles = [
  "lg:translate-y-11 lg:-rotate-[4deg] lg:scale-[0.94]",
  "lg:-translate-y-3 lg:rotate-[2deg] lg:scale-[1.08]",
  "lg:translate-y-8 lg:rotate-[4deg] lg:scale-[0.96]",
];

const projectStats = [
  ["1 240", "78%", "+32%"],
  ["12", "24 560", "+18%"],
  ["8", "2.1x", "+37%"],
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const visible = useMemo(() => [...projects, ...projects].slice(index, index + 3), [index]);

  const move = (direction: number) => {
    setIndex((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <section id="projects" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/sakura-digital-bg.png')] bg-cover bg-[58%_42%] opacity-44" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.98)_0%,rgba(5,5,8,0.78)_34%,rgba(7,5,11,0.46)_66%,rgba(5,5,8,0.9)_100%),radial-gradient(ellipse_at_58%_42%,rgba(255,112,166,0.3),transparent_38rem),linear-gradient(180deg,rgba(5,5,8,0.88)_0%,rgba(5,5,8,0.24)_38%,rgba(5,5,8,0.9)_100%)]"
      />
      <div aria-hidden className="absolute left-0 top-[55%] h-px w-full bg-gradient-to-r from-transparent via-sakura/70 to-transparent shadow-[0_0_38px_rgba(255,112,166,0.9)]" />
      <div aria-hidden className="absolute bottom-[12%] left-[47%] h-28 w-[32rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.78),transparent_70%)] blur-2xl" />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative grid min-h-[800px] items-center gap-12 py-24 lg:grid-cols-[0.58fr_1.62fr]">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Проекты</p>
          <h2 className="mt-7 max-w-md font-display text-5xl leading-[1.03] text-bone sm:text-6xl">
            То, что уже <span className="text-sakura">собрано</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted">
            Разные проекты, разные ниши, одна цель — сильная подача и внимание к деталям.
          </p>

          <div className="mt-16 flex gap-4">
            <button
              onClick={() => move(-1)}
              className="grid size-16 place-items-center rounded-full border border-sakura/24 bg-white/[0.035] text-bone shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sakura/65 hover:text-sakura"
              aria-label="Предыдущие проекты"
            >
              <ArrowLeft size={25} strokeWidth={1.7} />
            </button>
            <button
              onClick={() => move(1)}
              className="grid size-16 place-items-center rounded-full border border-sakura/24 bg-white/[0.035] text-bone shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sakura/65 hover:text-sakura"
              aria-label="Следующие проекты"
            >
              <ArrowRight size={25} strokeWidth={1.7} />
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <div aria-hidden className="absolute left-[7%] right-[3%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-sakura/75 to-transparent shadow-[0_0_32px_rgba(255,112,166,0.9)] lg:block" />
          <div className="grid gap-6 md:grid-cols-3 lg:[perspective:1300px]">
            {visible.map((project, cardIndex) => {
              const isActive = cardIndex === 1;
              const stats = projectStats[cardIndex];

              return (
                <article
                  key={`${project.slug}-${cardIndex}-${index}`}
                  className={cn(
                    "group relative min-h-[560px] overflow-hidden rounded-[1.15rem] border border-sakura/28 bg-black/28 p-7 shadow-[0_36px_130px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sakura/75",
                    "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,112,166,0.18),transparent_64%)] before:opacity-80",
                    isActive &&
                      "border-sakura/90 shadow-[0_0_0_1px_rgba(255,112,166,0.24),0_0_80px_rgba(255,112,166,0.38),0_44px_160px_rgba(0,0,0,0.46)]",
                    cardStyles[cardIndex],
                  )}
                >
                  <span className="absolute -left-1 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-sakura shadow-[0_0_20px_rgba(255,112,166,1)] lg:block" />
                  <span className="absolute -right-1 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-sakura shadow-[0_0_20px_rgba(255,112,166,1)] lg:block" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="max-w-full truncate rounded border border-sakura/24 bg-sakura/14 px-3 py-1.5 text-xs text-sakura">
                        <span className="mr-2 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                        {project.category}
                      </span>
                      <span className="flex gap-3 text-sakura/70">
                        <Users size={14} />
                        <Grid2X2 size={14} />
                      </span>
                    </div>

                    <div className={cn("relative mt-7 overflow-hidden rounded border border-white/10 bg-ink", isActive ? "h-64" : "h-48")}>
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 32vw"
                        className="object-cover opacity-75 transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,17,0.1),rgba(13,13,17,0.76)),radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.36),transparent_66%)]" />

                      {isActive ? (
                        <div className="absolute inset-x-5 top-5 rounded border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                          <p className="text-xs text-bone">Статистика за неделю</p>
                          <div className="mt-4 grid grid-cols-3 gap-3">
                            {stats.map((stat) => (
                              <div key={stat} className="border border-white/8 bg-white/[0.035] p-3">
                                <p className="text-xl text-bone">{stat}</p>
                                <p className="mt-1 text-[11px] text-muted">Прогресс</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-5 h-16 border-b border-sakura/20 bg-[linear-gradient(145deg,transparent_0_10%,rgba(255,112,166,0.46)_10%_14%,transparent_14%_29%,rgba(255,112,166,0.62)_29%_34%,transparent_34%_51%,rgba(255,112,166,0.7)_51%_56%,transparent_56%_76%,rgba(255,112,166,0.86)_76%_81%,transparent_81%)]" />
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-8">
                      <h3 className={cn("text-bone", isActive ? "text-3xl" : "text-2xl")}>{project.title}</h3>
                      <p className="mt-4 min-h-24 text-base leading-7 text-muted">{project.description}</p>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-auto flex min-h-14 items-center justify-between border border-sakura/35 bg-white/[0.025] px-5 text-base text-bone transition hover:-translate-y-1 hover:border-sakura/70 hover:bg-sakura/[0.08]"
                    >
                      Открыть проект
                      <ExternalLink size={17} strokeWidth={1.7} className="text-sakura" />
                    </Link>

                    <div className="mt-5 flex items-center justify-between text-sm text-muted">
                      <span className="flex items-center gap-2">
                        <CheckSquare size={15} className="text-sakura" />
                        {isActive ? "20+ экранов" : cardIndex === 0 ? "12 экранов" : "8 экранов"}
                      </span>
                      <span className="flex -space-x-2">
                        {[0, 1, 2].map((avatar) => (
                          <span key={avatar} className="size-7 rounded-full border border-sakura/35 bg-[linear-gradient(135deg,#311021,#d88fa3)]" />
                        ))}
                        <span className="grid size-7 place-items-center rounded-full border border-sakura/35 bg-sakura/12 text-xs text-sakura">
                          +{cardIndex === 1 ? 5 : 3}
                        </span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
