import Image from "next/image";
import {Eye, Layers3, MessageSquare, ShieldCheck, Target, Zap} from "lucide-react";
import {processSteps, telegramUrl} from "@/data/site";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {cn} from "@/lib/utils";

const stepIcons = {
  target: Target,
  layers: Layers3,
  eye: Eye,
  zap: Zap,
  shield: ShieldCheck,
};

const cardPositions = [
  "lg:-rotate-[3deg] lg:translate-y-8",
  "lg:-rotate-[1deg] lg:translate-y-5",
  "lg:scale-110 lg:-translate-y-2",
  "lg:rotate-[1deg] lg:translate-y-5",
  "lg:rotate-[3deg] lg:translate-y-8",
];

export function Approach() {
  return (
    <section id="approach" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/sakura-digital-bg.png')] bg-cover bg-[55%_56%] opacity-34" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.98)_0%,rgba(5,5,8,0.82)_38%,rgba(7,5,11,0.58)_70%,rgba(5,5,8,0.9)_100%),radial-gradient(ellipse_at_52%_54%,rgba(255,112,166,0.26),transparent_36rem),radial-gradient(ellipse_at_34%_88%,rgba(255,112,166,0.18),transparent_30rem)]"
      />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative py-24">
        <div className="max-w-[46rem]">
          <p className="text-xs uppercase tracking-[0.32em] text-sakura">Мой подход</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.03] text-bone sm:text-6xl">
            Я не продаю «магию». Я собираю проект <span className="text-sakura">по слоям.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            Красивый сайт без идеи быстро становится просто картинкой. Поэтому сначала смысл, потом структура, визуал и только затем эффект.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-sakura/15 via-sakura to-sakura/15 shadow-[0_0_34px_rgba(255,112,166,0.95)] lg:block"
          />
          <div aria-hidden className="absolute left-[47%] top-[23rem] hidden h-px w-28 -translate-x-1/2 bg-sakura/80 shadow-[0_0_28px_rgba(255,112,166,1)] lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5 lg:[perspective:1200px]">
            {processSteps.map((step, index) => {
              const Icon = stepIcons[step.icon];
              const active = index === 2;

              return (
                <article
                  key={step.number}
                  className={cn(
                    "group relative min-h-[310px] overflow-visible border border-sakura/24 bg-black/24 px-6 pb-7 pt-20 shadow-[0_30px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sakura/70",
                    "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,112,166,0.15),transparent_64%)] before:opacity-80",
                    active &&
                      "border-sakura/90 bg-sakura/[0.055] shadow-[0_0_0_1px_rgba(255,112,166,0.24),0_0_70px_rgba(255,112,166,0.34),0_36px_120px_rgba(0,0,0,0.42)]",
                    cardPositions[index],
                  )}
                >
                  <span
                    className={cn(
                      "absolute -top-9 left-1/2 z-10 flex size-16 -translate-x-1/2 items-center justify-center rounded-full border border-sakura/45 bg-ink/82 text-xl text-bone shadow-[0_0_34px_rgba(255,112,166,0.36)] backdrop-blur-md",
                      active && "border-sakura bg-sakura/16 text-white shadow-[0_0_48px_rgba(255,112,166,0.9)]",
                    )}
                  >
                    {step.number}
                  </span>

                  <div className="relative">
                    <span className="flex size-16 items-center justify-center border border-sakura/28 bg-sakura/[0.08] text-sakura shadow-[0_0_34px_rgba(255,112,166,0.18)] transition group-hover:bg-sakura/[0.14]">
                      <Icon size={27} strokeWidth={1.45} />
                    </span>
                    <h3 className="mt-7 text-2xl text-bone">{step.title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.74fr_1fr]">
          <div className="border border-sakura/18 bg-white/[0.025] p-7 shadow-[0_28px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="flex gap-5">
              <span className="grid size-16 shrink-0 place-items-center border border-sakura/28 bg-sakura/10 text-sakura shadow-[0_0_36px_rgba(255,112,166,0.18)]">
                <MessageSquare size={27} strokeWidth={1.55} />
              </span>
              <div>
                <p className="text-lg text-bone">Есть задача, но не знаешь формат?</p>
                <p className="mt-2 text-base leading-7 text-muted">Разберем и соберем маршрут без лишней магии.</p>
                <ButtonLink href={telegramUrl} variant="ghost" className="mt-5 min-h-10 border-0 bg-transparent px-0 text-sakura hover:bg-transparent">
                  Обсудить проект
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-40 overflow-hidden border border-sakura/18 bg-white/[0.025] shadow-[0_28px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <Image src="/images/hero/sakura-digital-bg.png" alt="" fill sizes="48vw" className="object-cover object-[68%_54%] opacity-55" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.7),rgba(5,5,8,0.22),rgba(5,5,8,0.78))]" />
            <p className="absolute bottom-7 left-7 text-xs uppercase tracking-[0.32em] text-sakura">Не агентство, а авторский процесс</p>
          </div>
        </div>
      </div>
    </section>
  );
}
