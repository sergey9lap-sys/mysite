import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft} from "lucide-react";
import {Atmosphere} from "@/components/Atmosphere";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {projects, telegramUrl} from "@/data/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({slug: project.slug}));
}

export async function generateMetadata({params}: ProjectPageProps) {
  const {slug} = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — проект`,
    description: project.summary,
  };
}

export default async function ProjectPage({params}: ProjectPageProps) {
  const {slug} = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const isFullPageCase = Boolean(project.fullImage);

  return (
    <>
      <Atmosphere />
      <main className="relative z-10 min-h-screen overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_68%_18%,rgba(210,232,98,0.16),transparent_34rem),radial-gradient(ellipse_at_28%_48%,rgba(255,112,166,0.16),transparent_32rem)]"
        />
        <section className="section-shell relative py-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-bone">
            <ArrowLeft size={16} />
            Назад к проектам
          </Link>

          {isFullPageCase ? (
            <div className="mt-12">
              <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#dfe98c]">{project.category}</p>
                    <h1 className="mt-5 font-display text-5xl leading-tight text-bone md:text-7xl">{project.title}</h1>
                    <p className="mt-6 text-lg leading-8 text-muted">{project.summary}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {(project.tags ?? [project.category]).map((tag) => (
                      <span key={tag} className="border border-[#d7e874]/28 bg-[#d7e874]/10 px-3 py-1.5 text-sm text-[#edf3b5]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={project.siteUrl ?? telegramUrl} icon="arrow">
                      Открыть сайт
                    </ButtonLink>
                    <ButtonLink href="/#projects" variant="ghost">
                      Смотреть другие
                    </ButtonLink>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.2rem] border border-[#d7e874]/30 bg-black/28 p-3 shadow-[0_36px_140px_rgba(0,0,0,0.42),0_0_90px_rgba(196,219,93,0.15)] backdrop-blur-xl">
                  <div className="relative h-[300px] overflow-hidden rounded border border-white/10 bg-panel md:h-[420px]">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(5,5,8,0.5)_100%),radial-gradient(ellipse_at_50%_100%,rgba(210,232,98,0.22),transparent_70%)]" />
                  </div>
                </div>
              </div>

              <div className="mt-14 grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
                <div className="border border-sakura/18 bg-white/[0.025] p-6 shadow-[0_28px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-sakura">Описание проекта</p>
                  <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>
                  <div className="mt-7 grid gap-4 text-sm sm:grid-cols-3 lg:grid-cols-1">
                    <div>
                      <p className="text-muted">Формат</p>
                      <p className="mt-1 text-bone">{project.category}</p>
                    </div>
                    <div>
                      <p className="text-muted">Тип проекта</p>
                      <p className="mt-1 text-bone">Тестовый кейс</p>
                    </div>
                    <div>
                      <p className="text-muted">Год</p>
                      <p className="mt-1 text-bone">{project.year}</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[1.2rem] border border-[#d7e874]/24 bg-black/30 p-3 shadow-[0_38px_150px_rgba(0,0,0,0.44),0_0_90px_rgba(196,219,93,0.12)] backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-white/10 px-3 py-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#dfe98c]">Live Preview</p>
                    <span className="h-px w-24 bg-gradient-to-r from-[#d7e874] to-transparent" />
                  </div>
                  <div className="h-[640px] overflow-hidden rounded-b border-x border-b border-white/10 bg-[#070807] shadow-[inset_0_0_70px_rgba(196,219,93,0.08)] md:h-[900px] lg:h-[1080px]">
                    <iframe
                      title={`${project.title} live preview`}
                      src={project.siteUrl}
                      className="h-full w-full border-0 bg-[#070807]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted">{project.category}</p>
                <h1 className="mt-5 font-display text-5xl leading-tight text-bone md:text-7xl">{project.title}</h1>
                <p className="mt-6 text-lg leading-8 text-muted">{project.summary}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={telegramUrl} icon="send">
                  {project.ctaLabel}
                </ButtonLink>
                <ButtonLink href={telegramUrl} variant="ghost">
                  Смотреть другие
                </ButtonLink>
              </div>
            </div>
              <div className="glass rose-card overflow-hidden">
                <div className="relative aspect-[1.22] bg-panel">
                  <Image src={project.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
                </div>
                <div className="grid gap-4 border-t border-sakura/20 p-6 md:grid-cols-3">
                  <div>
                    <p className="text-sm text-muted">Год</p>
                    <p className="mt-2 text-bone">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Формат</p>
                    <p className="mt-2 text-bone">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Статус</p>
                    <p className="mt-2 text-bone">Плейсхолдер кейса</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
