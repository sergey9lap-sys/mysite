import Image from "next/image";
import {Beaker, Check, Eye, MessageSquare, Package, Sparkles, Zap} from "lucide-react";
import {personalityTags} from "@/data/site";

const tagIcons = [Zap, Sparkles, Beaker, MessageSquare, Package, Eye];

export function About() {
  return (
    <section id="about" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/sakura-digital-bg.png')] bg-cover bg-[58%_48%] opacity-46" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.96)_0%,rgba(6,5,9,0.74)_39%,rgba(6,5,9,0.5)_65%,rgba(5,5,8,0.92)_100%),radial-gradient(ellipse_at_31%_68%,rgba(255,112,166,0.28),transparent_34rem),radial-gradient(ellipse_at_88%_18%,rgba(255,112,166,0.2),transparent_28rem),linear-gradient(180deg,rgba(5,5,8,0.9)_0%,rgba(5,5,8,0.18)_34%,rgba(5,5,8,0.92)_100%)]"
      />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell grid min-h-[820px] items-center gap-14 py-24 lg:grid-cols-[1.02fr_1fr]">
        <div className="relative min-h-[650px]">
          <div aria-hidden className="absolute left-[18%] top-[10%] h-[78%] w-[58%] rounded-[1.5rem] border border-sakura/24 bg-white/[0.035] shadow-[0_0_90px_rgba(255,112,166,0.16)] backdrop-blur-sm" />
          <div aria-hidden className="absolute bottom-[7%] left-[25%] h-24 w-[48%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,112,166,0.78),transparent_70%)] blur-2xl" />

          <div className="absolute left-[20%] top-[8%] h-[78%] w-[58%] overflow-hidden rounded-[1.35rem] border border-sakura/40 bg-ink shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_42px_160px_rgba(255,112,166,0.28)]">
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

          <div className="absolute left-0 top-[43%] max-w-64 -rotate-[3deg] border border-sakura/28 bg-black/35 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-sakura">Живой проект</p>
            <h3 className="mt-5 text-3xl leading-tight text-bone">Начинается с ощущения</h3>
            <p className="mt-5 text-sm leading-6 text-muted">Сначала ловлю характер проекта, а уже потом собираю структуру, визуал и детали.</p>
            <div className="mt-7 flex items-center gap-4 text-sm text-muted">
              <span>01</span>
              <span className="h-px flex-1 bg-gradient-to-r from-sakura via-sakura/60 to-transparent" />
              <span>04</span>
            </div>
          </div>

          <div className="absolute right-[7%] top-[15%] max-w-56 rotate-[2deg] border border-sakura/28 bg-black/35 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-sakura">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_14px_rgba(255,112,166,1)]" />
              On focus
            </p>
            <p className="mt-5 text-sm leading-6 text-muted">Ищу суть в каждом проекте</p>
            <div className="mt-5 h-7 w-36 bg-[linear-gradient(120deg,transparent_0_12%,rgba(255,112,166,0.8)_12%_14%,transparent_14%_30%,rgba(255,112,166,0.68)_30%_34%,transparent_34%_52%,rgba(255,112,166,0.8)_52%_56%,transparent_56%_72%,rgba(255,112,166,0.7)_72%_75%,transparent_75%)] opacity-80" />
          </div>

          <div className="absolute bottom-[6%] right-[9%] w-56 rotate-[3deg] border border-sakura/28 bg-black/35 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.24em] text-sakura">Подход</p>
            <div className="mt-5 space-y-3 text-sm text-muted">
              {["Атмосфера", "Структура", "Визуал", "Детали"].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <Check size={15} className="text-sakura" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.32em] text-sakura">Не агентство, а авторский процесс</p>
          <h2 className="mt-7 font-display text-5xl leading-[1.06] text-bone sm:text-6xl">
            Я кайфую от момента, когда <span className="text-sakura">из идеи</span> начинает собираться{" "}
            <span className="text-sakura">живой проект</span>.
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
            Мне нравится сам процесс: искать атмосферу, собирать структуру, улучшать визуал и видеть,
            как все начинает работать как единое целое.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            <span className="text-sakura">Не люблю шаблонность и фальшивый «премиум».</span>
            <br />
            Иногда не нужно делать все с нуля — достаточно правильно усилить текущий проект.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {personalityTags.map((tag, index) => {
              const Icon = tagIcons[index] ?? Sparkles;

              return (
                <span
                  key={tag}
                  className="flex min-h-20 items-center gap-4 border border-sakura/18 bg-white/[0.035] px-5 py-4 text-base leading-6 text-bone shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-sakura/45 hover:bg-sakura/[0.07]"
                >
                  <span className="grid size-11 shrink-0 place-items-center border border-sakura/24 bg-sakura/10 text-sakura shadow-[0_0_34px_rgba(255,112,166,0.16)]">
                    <Icon size={19} strokeWidth={1.65} />
                  </span>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
