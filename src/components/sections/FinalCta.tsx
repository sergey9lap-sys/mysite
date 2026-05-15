import {Grid2X2, MessageSquare, Send, Sparkles} from "lucide-react";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {telegramUrl} from "@/data/site";

export function FinalCta() {
  return (
    <section id="contact" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/final-cta-bg.png')] bg-cover bg-[60%_56%] opacity-58" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.94)_0%,rgba(6,5,9,0.66)_42%,rgba(6,5,9,0.42)_70%,rgba(5,5,8,0.92)_100%),radial-gradient(ellipse_at_27%_43%,rgba(255,112,166,0.32),transparent_36rem),radial-gradient(ellipse_at_76%_76%,rgba(255,112,166,0.26),transparent_30rem),linear-gradient(180deg,rgba(5,5,8,0.92)_0%,rgba(5,5,8,0.12)_38%,rgba(5,5,8,0.94)_100%)]"
      />
      <div aria-hidden className="absolute bottom-0 left-[55%] h-28 w-[30rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.72),transparent_70%)] blur-2xl" />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative grid min-h-[760px] items-center gap-12 py-24 lg:grid-cols-[0.98fr_0.98fr]">
        <div>
          <p className="mb-7 text-xs uppercase tracking-[0.34em] text-sakura">Финальная сцена</p>
          <h2 className="max-w-4xl font-display text-5xl leading-[1.03] text-bone sm:text-6xl lg:text-7xl">
            Если хочется сделать не очередной сайт, а что-то <span className="text-sakura">живое — напиши</span>
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            Можно прийти с готовой задачей, сырой идеей или текущим проектом, который хочется усилить.
          </p>

          <div className="relative mt-12 max-w-4xl border border-sakura/16 bg-white/[0.025] p-7 shadow-[0_30px_110px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <span className="absolute -left-1.5 -top-1.5 size-3 rounded-full bg-sakura shadow-[0_0_24px_rgba(255,112,166,1)]" />
            <div className="grid gap-7 md:grid-cols-[0.95fr_1fr]">
              <div className="flex gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-full border border-sakura/24 bg-sakura/10 text-sakura shadow-[0_0_36px_rgba(255,112,166,0.22)]">
                  <Sparkles size={24} strokeWidth={1.55} />
                </span>
                <p className="text-base leading-8 text-muted">
                  Один короткий диалог может превратить сырую идею в понятный <span className="text-sakura">digital-проект</span> с настроением,
                  структурой и визуальным нервом.
                </p>
              </div>
              <ul className="space-y-3 border-sakura/16 text-base leading-7 text-muted md:border-l md:pl-8">
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  понимаю суть
                </li>
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  собираю структуру
                </li>
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  усиливаю визуал
                </li>
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  довожу до результата
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative min-h-[560px]">
          <div aria-hidden className="absolute right-0 top-[7%] h-[86%] w-[88%] rotate-[3deg] rounded-[1.4rem] border border-sakura/35 bg-white/[0.025] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_110px_rgba(255,112,166,0.25)] backdrop-blur-xl" />
          <div aria-hidden className="absolute bottom-[5%] right-[10%] h-20 w-[62%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,112,166,0.82),transparent_70%)] blur-2xl" />

          <div className="absolute right-0 top-[10%] flex h-[82%] w-[88%] rotate-[3deg] flex-col overflow-hidden rounded-[1.35rem] border border-sakura/50 bg-black/30 p-9 shadow-[0_44px_180px_rgba(255,112,166,0.25)] backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <span className="h-px w-24 bg-gradient-to-r from-sakura to-transparent" />
              <span className="flex gap-2">
                <span className="size-1.5 rounded-full bg-white/85" />
                <span className="size-1.5 rounded-full bg-white/70" />
                <span className="size-1.5 rounded-full bg-white/55" />
              </span>
            </div>

            <span className="mt-12 grid size-20 place-items-center border border-sakura/30 bg-sakura/10 text-sakura shadow-[0_0_52px_rgba(255,112,166,0.24)]">
              <MessageSquare size={31} strokeWidth={1.45} />
            </span>
            <p className="mt-8 text-xs uppercase tracking-[0.32em] text-sakura">Давайте создадим</p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-bone sm:text-5xl">
              Ваш проект <span className="text-sakura">на уровне идеи</span>
            </h3>
            <p className="mt-6 max-w-sm text-base leading-7 text-muted">
              Вы можете написать в Telegram или посмотреть примеры проектов, чтобы понять подход и атмосферу.
            </p>

            <div className="mt-auto flex flex-col gap-4">
              <ButtonLink
                href={telegramUrl}
                icon="send"
                className="min-h-16 justify-between px-8 text-base"
              >
                Написать в Telegram
              </ButtonLink>
              <ButtonLink href={telegramUrl} variant="ghost" className="min-h-16 justify-between px-8 text-base">
                <span className="flex items-center gap-4">
                  <Grid2X2 size={20} strokeWidth={1.6} />
                  Посмотреть проекты
                </span>
              </ButtonLink>
            </div>
          </div>

          <div aria-hidden className="absolute right-0 top-[39%] h-px w-28 bg-gradient-to-r from-transparent via-sakura to-transparent shadow-[0_0_28px_rgba(255,112,166,1)]" />
          <div aria-hidden className="absolute right-[1%] top-[38%] size-4 rounded-full border border-sakura bg-ink shadow-[0_0_24px_rgba(255,112,166,1)]" />
          <div aria-hidden className="absolute -right-[1%] top-[63%] size-3 rounded-full bg-sakura shadow-[0_0_24px_rgba(255,112,166,1)]" />
        </div>
      </div>
    </section>
  );
}
