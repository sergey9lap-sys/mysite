import {MessageSquare, Sparkles} from "lucide-react";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {telegramUrl} from "@/data/site";

const pinkPanelClass =
  "border-sakura/28 bg-[linear-gradient(135deg,rgba(255,112,166,0.15),rgba(255,255,255,0.03)_44%,rgba(255,112,166,0.08))] shadow-[0_28px_110px_rgba(255,112,166,0.15)] backdrop-blur-xl";

export function FinalCta() {
  return (
    <section id="contact" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/final-cta-bg.jpg')] bg-cover bg-[60%_56%] opacity-58" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.94)_0%,rgba(6,5,9,0.66)_42%,rgba(6,5,9,0.42)_70%,rgba(5,5,8,0.92)_100%),radial-gradient(ellipse_at_27%_43%,rgba(255,112,166,0.32),transparent_36rem),radial-gradient(ellipse_at_76%_76%,rgba(255,112,166,0.26),transparent_30rem),linear-gradient(180deg,rgba(5,5,8,0.92)_0%,rgba(5,5,8,0.12)_38%,rgba(5,5,8,0.94)_100%)]"
      />
      <div aria-hidden className="absolute bottom-0 left-[55%] h-28 w-[30rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,112,166,0.72),transparent_70%)] blur-2xl" />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell relative grid min-h-[680px] items-center gap-10 py-16 lg:grid-cols-[0.98fr_0.98fr] lg:py-20">
        <div>
          <h2 className="max-w-4xl font-display text-4xl leading-[1.05] text-bone sm:text-5xl lg:text-6xl">
            Если нужен сайт<br />
            или проект, который<br />
            будет выглядеть<br />
            <span className="text-sakura">сильнее — напиши.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Можно прийти с готовой задачей,<br />
            идеей или текущим проектом,<br />
            который хочется улучшить.
          </p>

          <div className={`relative mt-9 max-w-4xl border p-6 ${pinkPanelClass}`}>
            <span className="absolute -left-1.5 -top-1.5 size-3 rounded-full bg-sakura shadow-[0_0_24px_rgba(255,112,166,1)]" />
            <div className="grid gap-6 md:grid-cols-[0.95fr_1fr]">
              <div className="flex gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-full border border-sakura/35 bg-sakura/14 text-sakura shadow-[0_0_42px_rgba(255,112,166,0.24)]">
                  <Sparkles size={24} strokeWidth={1.55} />
                </span>
                <p className="text-base leading-8 text-muted">
                  Иногда одного разговора достаточно,<br />
                  чтобы понять,<br />
                  как сделать проект понятнее,<br />
                  аккуратнее и убедительнее.
                </p>
              </div>
              <ul className="space-y-3 border-sakura/16 text-base leading-7 text-muted md:border-l md:pl-8">
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  помогаю определить формат
                </li>
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  собираю понятную структуру
                </li>
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  усиливаю визуальную подачу
                </li>
                <li>
                  <span className="mr-3 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_12px_rgba(255,112,166,1)]" />
                  помогаю сделать проект понятнее и сильнее визуально
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative min-h-0 lg:min-h-[540px]">
          <div aria-hidden className="hidden absolute right-0 top-[7%] h-[86%] w-[88%] rotate-[3deg] rounded-[1.4rem] border border-sakura/35 bg-white/[0.025] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_110px_rgba(255,112,166,0.25)] backdrop-blur-xl lg:block" />
          <div aria-hidden className="absolute bottom-4 right-[10%] h-20 w-[62%] bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,112,166,0.82),transparent_70%)] blur-2xl lg:bottom-[5%]" />

          <div className="relative right-auto top-auto flex w-full flex-col overflow-hidden rounded-[1.35rem] border border-sakura/50 bg-black/38 p-6 shadow-[0_44px_180px_rgba(255,112,166,0.25)] backdrop-blur-2xl sm:p-8 lg:absolute lg:right-0 lg:top-[8%] lg:h-[84%] lg:w-[88%] lg:rotate-[3deg] lg:bg-black/30 lg:p-9">
            <div className="flex items-center justify-between">
              <span className="h-px w-24 bg-gradient-to-r from-sakura to-transparent" />
              <span className="flex gap-2">
                <span className="size-1.5 rounded-full bg-white/85" />
                <span className="size-1.5 rounded-full bg-white/70" />
                <span className="size-1.5 rounded-full bg-white/55" />
              </span>
            </div>

            <span className="mt-7 grid size-16 place-items-center border border-sakura/30 bg-sakura/10 text-sakura shadow-[0_0_52px_rgba(255,112,166,0.24)] lg:mt-10 lg:size-18">
              <MessageSquare size={31} strokeWidth={1.45} />
            </span>
            <h3 className="mt-7 font-display text-4xl leading-tight text-bone sm:text-5xl">
              Обсудим ваш проект
            </h3>
            <p className="mt-5 max-w-sm text-base leading-7 text-muted">
              Можно написать в Telegram,<br />
              рассказать задачу<br />
              или показать текущий проект.
            </p>

            <div className="mt-8 flex flex-col gap-4 lg:mt-auto lg:pb-2">
              <ButtonLink
                href={telegramUrl}
                icon="send"
                className="min-h-14 justify-between px-5 text-sm sm:min-h-16 sm:px-8 sm:text-base"
              >
                Написать в Telegram
              </ButtonLink>
            </div>
          </div>

          <div aria-hidden className="hidden absolute right-0 top-[39%] h-px w-28 bg-gradient-to-r from-transparent via-sakura to-transparent shadow-[0_0_28px_rgba(255,112,166,1)] lg:block" />
          <div aria-hidden className="hidden absolute right-[1%] top-[38%] size-4 rounded-full border border-sakura bg-ink shadow-[0_0_24px_rgba(255,112,166,1)] lg:block" />
          <div aria-hidden className="hidden absolute -right-[1%] top-[63%] size-3 rounded-full bg-sakura shadow-[0_0_24px_rgba(255,112,166,1)] lg:block" />
        </div>
      </div>
    </section>
  );
}
