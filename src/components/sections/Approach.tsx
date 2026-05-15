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
  "lg:-rotate-[3deg] lg:translate-y-3",
  "lg:-rotate-[1deg] lg:translate-y-2",
  "lg:scale-[1.03] lg:-translate-y-1",
  "lg:rotate-[1deg] lg:translate-y-2",
  "lg:rotate-[3deg] lg:translate-y-3",
];

export function Approach() {
  return (
    <section id="approach" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/approach-process-bg.png')] bg-cover bg-[55%_56%] opacity-50" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.98)_0%,rgba(5,5,8,0.82)_38%,rgba(7,5,11,0.58)_70%,rgba(5,5,8,0.9)_100%),radial-gradient(ellipse_at_52%_54%,rgba(255,112,166,0.26),transparent_36rem),radial-gradient(ellipse_at_34%_88%,rgba(255,112,166,0.18),transparent_30rem)]"
      />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative py-16 lg:py-20">
        <div className="mx-auto max-w-[72rem] text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-sakura">Мой подход</p>
          <h2 className="mx-auto mt-5 max-w-[68rem] font-display text-4xl leading-[1.04] text-bone sm:text-5xl lg:text-6xl">
            Проект должен не просто выглядеть красиво, а работать как <span className="text-sakura">единая система.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-muted sm:text-lg">
            Важно не только как выглядит сайт, но и насколько понятно человек воспринимает проект, структуру и подачу.
          </p>
        </div>

        <div className="relative mt-10">
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
                    "group relative min-h-[220px] overflow-visible border border-sakura/24 bg-black/24 px-5 pb-5 pt-14 shadow-[0_30px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sakura/70",
                    "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,112,166,0.15),transparent_64%)] before:opacity-80",
                    active &&
                      "border-sakura/90 bg-sakura/[0.055] shadow-[0_0_0_1px_rgba(255,112,166,0.24),0_0_70px_rgba(255,112,166,0.34),0_36px_120px_rgba(0,0,0,0.42)]",
                    cardPositions[index],
                  )}
                >
                  <span
                    className={cn(
                      "absolute -top-6 left-1/2 z-10 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-sakura/45 bg-ink/82 text-base text-bone shadow-[0_0_34px_rgba(255,112,166,0.36)] backdrop-blur-md",
                      active && "border-sakura bg-sakura/16 text-white shadow-[0_0_48px_rgba(255,112,166,0.9)]",
                    )}
                  >
                    {step.number}
                  </span>

                  <div className="relative">
                    <span className="flex size-12 items-center justify-center border border-sakura/28 bg-sakura/[0.08] text-sakura shadow-[0_0_34px_rgba(255,112,166,0.18)] transition group-hover:bg-sakura/[0.14]">
                      <Icon size={21} strokeWidth={1.45} />
                    </span>
                    <h3 className="mt-4 text-xl text-bone">{step.title}</h3>
                    <p className="mt-2.5 text-[13px] leading-5 text-muted">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.74fr_1fr]">
          <div className="border border-sakura/18 bg-white/[0.025] p-5 shadow-[0_28px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <div className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center border border-sakura/28 bg-sakura/10 text-sakura shadow-[0_0_36px_rgba(255,112,166,0.18)]">
                <MessageSquare size={22} strokeWidth={1.55} />
              </span>
              <div>
                <p className="text-base text-bone">Нужен взгляд со стороны?</p>
                <p className="mt-1.5 text-sm leading-6 text-muted">
                  Можно прийти даже с сырой идеей — помогу понять, что делать дальше.
                </p>
                <ButtonLink href={telegramUrl} variant="ghost" className="mt-4 min-h-10 px-4">
                  Обсудить проект
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-28 overflow-hidden border border-sakura/18 bg-white/[0.025] shadow-[0_28px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <Image src="/images/hero/approach-process-bg.png" alt="" fill sizes="48vw" className="object-cover object-[68%_54%] opacity-55" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.7),rgba(5,5,8,0.22),rgba(5,5,8,0.78))]" />
          </div>
        </div>
      </div>
    </section>
  );
}
