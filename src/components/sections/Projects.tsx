"use client";

import Image from "next/image";
import {createPortal} from "react-dom";
import {ArrowLeft, ArrowRight, CheckSquare, ExternalLink, Grid2X2, Layers, X} from "lucide-react";
import {useEffect, useMemo, useRef, useState} from "react";
import {projects, type Project} from "@/data/site";
import {cn} from "@/lib/utils";

const cardStyles = [
  "lg:translate-y-11 lg:-rotate-[4deg] lg:scale-[0.94]",
  "lg:-translate-y-3 lg:rotate-[2deg] lg:scale-[1.08]",
  "lg:translate-y-8 lg:rotate-[4deg] lg:scale-[0.96]",
];

const projectNotes = [
  "Продуманная подача",
  "Живая структура",
  "Цельный визуал",
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const visible = useMemo(() => [...projects, ...projects].slice(index, index + 3), [index]);

  const move = (direction: number) => {
    setIndex((current) => (current + direction + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.dispatchEvent(new Event("project-modal:open"));

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.dispatchEvent(new Event("project-modal:close"));
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/projects-showcase-bg.jpg')] bg-cover bg-[58%_42%] opacity-56" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.98)_0%,rgba(5,5,8,0.78)_34%,rgba(7,5,11,0.46)_66%,rgba(5,5,8,0.9)_100%),radial-gradient(ellipse_at_58%_42%,rgba(255,112,166,0.3),transparent_38rem),linear-gradient(180deg,rgba(5,5,8,0.88)_0%,rgba(5,5,8,0.24)_38%,rgba(5,5,8,0.9)_100%)]"
      />
      <div aria-hidden className="absolute left-0 top-[55%] h-px w-full bg-gradient-to-r from-transparent via-sakura/70 to-transparent shadow-[0_0_38px_rgba(255,112,166,0.9)]" />
      <div aria-hidden className="absolute bottom-[12%] left-[47%] h-28 w-[32rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.78),transparent_70%)] blur-2xl" />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[0.58fr_1.62fr]">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.32em] text-muted">Проекты</p>
          <h2 className="mt-6 max-w-md font-display text-4xl leading-[1.05] text-bone sm:text-5xl">
            Проекты,<br />
            над которыми<br />
            <span className="text-sakura">я работал</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted">
            Каждый проект собирался<br />
            под свою аудиторию, формат<br />
            и стиль подачи.
          </p>

          <div className="mt-16 flex gap-4">
            <button
              onClick={() => move(-1)}
              className="grid size-16 place-items-center rounded-full border border-[#ff8fc1] bg-[#d83f86] text-white shadow-[0_0_46px_rgba(255,112,166,0.36)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#ffadd2] hover:bg-[#ff6bab]"
              aria-label="Предыдущие проекты"
            >
              <ArrowLeft size={25} strokeWidth={1.7} />
            </button>
            <button
              onClick={() => move(1)}
              className="grid size-16 place-items-center rounded-full border border-[#ff8fc1] bg-[#d83f86] text-white shadow-[0_0_46px_rgba(255,112,166,0.36)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#ffadd2] hover:bg-[#ff6bab]"
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
              const isWarm = project.accent === "warm";

              return (
                <article
                  key={`${project.slug}-${cardIndex}-${index}`}
                  className={cn(
                    "group relative min-h-[560px] overflow-hidden rounded-[1.15rem] border border-sakura/28 bg-black/28 p-7 shadow-[0_36px_130px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sakura/75",
                    "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,112,166,0.18),transparent_64%)] before:opacity-80",
                    isWarm &&
                      "border-[#d4e77a]/36 bg-[linear-gradient(155deg,rgba(20,23,14,0.42),rgba(0,0,0,0.24)_48%,rgba(187,214,86,0.12))] shadow-[0_36px_130px_rgba(0,0,0,0.38),0_0_72px_rgba(196,219,93,0.16)] before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(209,231,108,0.18),transparent_64%)]",
                    isActive &&
                      "border-sakura/90 shadow-[0_0_0_1px_rgba(255,112,166,0.24),0_0_80px_rgba(255,112,166,0.38),0_44px_160px_rgba(0,0,0,0.46)]",
                    isActive &&
                      isWarm &&
                      "border-[#dce98d]/70 shadow-[0_0_0_1px_rgba(219,235,132,0.18),0_0_86px_rgba(199,219,88,0.22),0_44px_160px_rgba(0,0,0,0.46)]",
                    cardStyles[cardIndex],
                  )}
                >
                  <span className="absolute -left-1 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-sakura shadow-[0_0_20px_rgba(255,112,166,1)] lg:block" />
                  <span className="absolute -right-1 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-sakura shadow-[0_0_20px_rgba(255,112,166,1)] lg:block" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="max-w-full truncate rounded border border-sakura/24 bg-sakura/14 px-3 py-1.5 text-xs text-sakura">
                        <span
                          className={cn(
                            "mr-2 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]",
                            isWarm && "bg-[#d7e874] shadow-[0_0_14px_rgba(215,232,116,0.9)]",
                          )}
                        />
                        {project.category}
                      </span>
                      <span className="flex gap-3 text-sakura/70">
                        <Layers size={14} />
                        <Grid2X2 size={14} />
                      </span>
                    </div>

                    <div
                      className={cn(
                        "relative mt-7 overflow-hidden rounded border border-white/10 bg-ink",
                        isActive ? "h-64" : "h-48",
                        isWarm && "border-[#d8e97b]/24 shadow-[0_20px_70px_rgba(196,219,93,0.16)]",
                      )}
                    >
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 32vw"
                        className={cn("object-contain object-center opacity-82 transition duration-500", isWarm && "object-top opacity-90")}
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,17,0.1),rgba(13,13,17,0.76)),radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.36),transparent_66%)]",
                          isWarm &&
                            "bg-[linear-gradient(180deg,rgba(12,14,9,0.02),rgba(13,13,17,0.56)),radial-gradient(ellipse_at_50%_100%,rgba(209,232,105,0.32),transparent_68%)]",
                        )}
                      />

                    </div>

                    <div className="mt-8">
                      <h3 className={cn("text-bone", isActive ? "text-3xl" : "text-2xl")}>{project.title}</h3>
                      <p className="mt-4 min-h-24 text-base leading-7 text-muted">{project.description}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="mt-auto flex min-h-14 items-center justify-between border border-[#ff8fc1] bg-[#d83f86] px-5 text-left text-base font-medium text-white shadow-[0_0_48px_rgba(255,112,166,0.36)] transition hover:-translate-y-1 hover:border-[#ffadd2] hover:bg-[#ff6bab]"
                    >
                      Открыть проект
                      <ExternalLink size={17} strokeWidth={1.7} className="text-white" />
                    </button>

                    <div className="mt-5 flex items-center justify-between text-sm text-muted">
                      {project.tags ? (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="border border-[#d7e874]/30 bg-[#d7e874]/10 px-2.5 py-1 text-xs text-[#e8efb2]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <>
                          <span className="flex items-center gap-2">
                            <CheckSquare size={15} className="text-sakura" />
                            {projectNotes[cardIndex]}
                          </span>
                          <span className="border border-sakura/25 bg-sakura/10 px-3 py-1 text-xs text-sakura">
                            без шаблона
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      {selectedProject ? <ProjectShowcaseModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}

function ProjectShowcaseModal({project, onClose}: {project: Project; onClose: () => void}) {
  const images = project.showcaseImages?.length ? project.showcaseImages : project.gallery;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (!modal) {
      return;
    }

    const stopWheelPropagation = (event: WheelEvent) => {
      event.stopPropagation();
    };

    modal.addEventListener("wheel", stopWheelPropagation, {capture: true});

    return () => {
      modal.removeEventListener("wheel", stopWheelPropagation, {capture: true});
    };
  }, []);

  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center px-3 py-5 sm:px-6"
      role="dialog"
      aria-modal="true"
      data-lenis-prevent
    >
      <button
        type="button"
        aria-label="Закрыть кейс"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/76 backdrop-blur-2xl"
      />

      <div className="relative h-[90vh] w-[min(1600px,95vw)] overflow-hidden rounded-[1.35rem] border border-sakura/20 bg-[#07070b]/92 shadow-[0_44px_180px_rgba(0,0,0,0.68),0_0_120px_rgba(255,112,166,0.16)]">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_14%_18%,rgba(255,112,166,0.18),transparent_32rem),radial-gradient(ellipse_at_78%_22%,rgba(216,232,112,0.12),transparent_30rem),linear-gradient(135deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))]"
        />

        <button
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 grid size-11 place-items-center border border-white/12 bg-white/[0.045] text-bone shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sakura/45 hover:bg-sakura/12"
        >
          <X size={19} strokeWidth={1.7} />
        </button>

        <div className="relative grid h-full gap-0 lg:grid-cols-[0.34fr_0.66fr]">
          <aside className="no-scrollbar overflow-y-auto border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-7" data-lenis-prevent>
            <div className="sticky top-0 overflow-hidden rounded-[1rem] border border-sakura/22 bg-black/34 p-6 shadow-[0_26px_110px_rgba(0,0,0,0.38),0_0_80px_rgba(255,112,166,0.13)] backdrop-blur-2xl">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_0%,rgba(255,112,166,0.18),transparent_16rem),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))]"
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.26em] text-sakura">{project.category}</p>
                <h3 className="mt-5 font-display text-4xl leading-tight text-bone sm:text-5xl">{project.title}</h3>
                <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>

                <div className="mt-7 grid gap-3">
                  {[
                    ["Формат", project.category],
                    ["Тип проекта", project.projectType ?? "Авторский кейс"],
                    ["Роль", project.role ?? "Дизайн и сборка"],
                  ].map(([label, value]) => (
                    <div key={label} className="border border-white/10 bg-white/[0.035] px-4 py-3">
                      <p className="text-xs text-muted">{label}</p>
                      <p className="mt-1 text-sm leading-5 text-bone">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <p className="text-xs uppercase tracking-[0.22em] text-sakura">Особенности проекта</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(project.features ?? project.tags ?? ["Структура", "Визуальная подача"]).map((feature) => (
                      <span key={feature} className="border border-sakura/24 bg-sakura/10 px-3 py-1.5 text-xs leading-5 text-bone">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {project.siteUrl ? (
                  <a
                    href={project.siteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex min-h-12 items-center justify-between border border-[#ff8fc1] bg-[#d83f86] px-5 text-sm font-medium text-white shadow-[0_0_48px_rgba(255,112,166,0.34)] transition hover:-translate-y-1 hover:border-[#ffadd2] hover:bg-[#ff6bab]"
                  >
                    Открыть сайт
                    <ExternalLink size={16} strokeWidth={1.7} />
                  </a>
                ) : null}
              </div>
            </div>
          </aside>

          <div className="relative min-h-0">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#07070b] to-transparent" />
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#07070b] to-transparent" />
            <div className="no-scrollbar h-full overflow-y-auto scroll-smooth px-4 py-14 sm:px-8 lg:px-12" data-lenis-prevent>
              <div className="mx-auto max-w-[920px] space-y-10 sm:space-y-12">
                {images.map((src, imageIndex) => (
                  <figure
                    key={src}
                    className={cn(
                      "group relative transition duration-500 hover:-translate-y-1",
                      imageIndex % 3 === 1 && "lg:max-w-[84%]",
                      imageIndex % 3 === 2 && "lg:ml-auto lg:max-w-[92%]",
                    )}
                  >
                    <div
                      className={cn(
                        "overflow-hidden rounded-[1rem] border border-white/10 bg-black/28 p-2 shadow-[0_30px_130px_rgba(0,0,0,0.46),0_0_70px_rgba(255,112,166,0.11)] backdrop-blur-xl transition duration-500 group-hover:border-sakura/34 group-hover:shadow-[0_34px_150px_rgba(0,0,0,0.52),0_0_92px_rgba(255,112,166,0.16)]",
                        project.accent === "warm" &&
                          "border-[#d7e874]/22 shadow-[0_30px_130px_rgba(0,0,0,0.46),0_0_76px_rgba(198,219,93,0.12)] group-hover:border-[#d7e874]/38 group-hover:shadow-[0_34px_150px_rgba(0,0,0,0.52),0_0_96px_rgba(198,219,93,0.18)]",
                      )}
                    >
                      <img src={src} alt="" className="h-auto w-full rounded-[0.75rem] object-contain" loading="lazy" />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
