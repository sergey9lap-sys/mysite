import Image from "next/image";
import {Beaker, Eye, MessageSquare, Package, Sparkles, Zap} from "lucide-react";
import {personalityTags} from "@/data/site";

const tagIcons = [Zap, Sparkles, Beaker, MessageSquare, Package, Eye];
const pinkUiClass =
  "border-sakura/30 bg-[linear-gradient(135deg,rgba(255,112,166,0.16),rgba(255,255,255,0.035)_48%,rgba(255,112,166,0.08))] shadow-[0_16px_48px_rgba(255,112,166,0.13)] backdrop-blur-xl";

export function About() {
  return (
    <section id="about" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/about-process-bg.png')] bg-cover bg-[50%_48%] opacity-58" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.96)_0%,rgba(6,5,9,0.74)_39%,rgba(6,5,9,0.5)_65%,rgba(5,5,8,0.92)_100%),radial-gradient(ellipse_at_31%_68%,rgba(255,112,166,0.28),transparent_34rem),radial-gradient(ellipse_at_88%_18%,rgba(255,112,166,0.2),transparent_28rem),linear-gradient(180deg,rgba(5,5,8,0.9)_0%,rgba(5,5,8,0.18)_34%,rgba(5,5,8,0.92)_100%)]"
      />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[0.82fr_1.18fr] lg:py-20">
        <div className="relative min-h-[560px] lg:min-h-[590px]">
          <div aria-hidden className="absolute left-[8%] top-0 h-[78%] w-[84%] rounded-[1.5rem] border border-sakura/24 bg-white/[0.035] shadow-[0_0_90px_rgba(255,112,166,0.16)] backdrop-blur-sm lg:left-[18%] lg:top-[10%] lg:h-[78%] lg:w-[58%]" />
          <div aria-hidden className="absolute bottom-[12%] left-[18%] h-24 w-[64%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,112,166,0.78),transparent_70%)] blur-2xl lg:bottom-[7%] lg:left-[25%] lg:w-[48%]" />

          <div className="absolute left-[12%] top-[3%] h-[78%] w-[76%] overflow-hidden rounded-[1.35rem] border border-sakura/40 bg-ink shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_42px_160px_rgba(255,112,166,0.28)] lg:left-[20%] lg:top-[8%] lg:h-[78%] lg:w-[58%]">
            <Image
              src="/images/placeholders/photo/Me.jpg"
              alt="Портрет автора сайта"
              fill
              sizes="(max-width: 768px) 78vw, 38vw"
              className="object-cover object-[50%_18%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,17,0.32),transparent_48%,rgba(13,13,17,0.26)),linear-gradient(180deg,rgba(255,112,166,0.16),transparent_32%,rgba(13,13,17,0.56))]" />
            <div aria-hidden className="absolute -left-10 bottom-0 h-44 w-[120%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.7),transparent_67%)] blur-2xl" />
          </div>
        </div>

        <div className="relative z-10 max-w-[48rem]">
          <p className="text-xs uppercase tracking-[0.32em] text-sakura">Обо мне</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.06] text-bone sm:text-5xl lg:text-6xl">
            Мне важно, чтобы проект выглядел аккуратно, понятно и производил <span className="text-sakura">сильное первое впечатление.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Люблю проекты, в которых есть идея, характер и внимание к деталям.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Мне важен не только визуал, но и то, как человек воспринимает сайт: насколько всё понятно, аккуратно и вызывает доверие.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Иногда не нужно делать всё заново — достаточно правильно усилить то, что уже есть.
          </p>

          <div className="mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {personalityTags.map((tag, index) => {
              const Icon = tagIcons[index] ?? Sparkles;

              return (
                <span
                  key={tag}
                  className={`flex min-h-16 min-w-0 items-center gap-3 border px-4 py-3 text-sm leading-5 text-bone transition hover:-translate-y-1 hover:border-sakura/55 hover:bg-sakura/[0.1] ${pinkUiClass}`}
                >
                  <span className="grid size-10 shrink-0 place-items-center border border-sakura/35 bg-sakura/14 text-sakura shadow-[0_0_34px_rgba(255,112,166,0.2)]">
                    <Icon size={18} strokeWidth={1.65} />
                  </span>
                  <span className="min-w-0 break-words">{tag}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
