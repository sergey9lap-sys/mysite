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

  return (
    <>
      <Atmosphere />
      <main className="relative z-10 min-h-screen">
        <section className="section-shell py-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-bone">
            <ArrowLeft size={16} />
            Назад к проектам
          </Link>
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
        </section>
      </main>
    </>
  );
}
