import {introCards, telegramUrl} from "@/data/site";
import {IconBadge} from "@/components/ui/IconBadge";
import {cn} from "@/lib/utils";

const cardRotations = ["lg:-rotate-[4deg] lg:translate-y-4", "lg:rotate-[3deg]", "lg:-rotate-[3deg] lg:-translate-y-3"];
const pinkUiClass =
  "border-sakura/30 bg-[linear-gradient(135deg,rgba(255,112,166,0.16),rgba(255,255,255,0.035)_48%,rgba(255,112,166,0.08))] shadow-[0_12px_34px_rgba(255,112,166,0.12)] backdrop-blur-md";

export function Intro() {
  return (
    <section data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/intro-value-bg.jpg')] bg-cover bg-[68%_42%] opacity-52" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,10,0.96)_0%,rgba(8,7,12,0.78)_35%,rgba(8,7,12,0.5)_100%),radial-gradient(ellipse_at_88%_20%,rgba(255,112,166,0.28),transparent_34rem),radial-gradient(ellipse_at_5%_22%,rgba(255,112,166,0.22),transparent_25rem)]" />
      <div aria-hidden className="grain-layer absolute inset-0" />
      <div className="section-shell grid min-h-[560px] items-center gap-10 py-20 lg:grid-cols-[0.86fr_1.28fr]">
        <div className="relative z-10">
          <h2 className="font-display text-4xl leading-[1.03] text-bone md:text-5xl lg:text-6xl">
            Мне скучно делать сайты «как у всех».
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-muted">
            Люблю проекты, где есть характер: понятная мысль, сильная подача и ощущение, что человек попал не на
            очередной шаблон, а в место, которому можно доверять.
          </p>
          <p className="mt-12 text-xs uppercase tracking-[0.32em] text-sakura">
            Мой подход
          </p>
        </div>

        <div className="relative z-10 grid gap-5 md:grid-cols-3 lg:[perspective:1100px]">
          {introCards.map((card, index) => (
            <article
              key={card.title}
              className={cn(
                "group relative min-h-[290px] overflow-hidden border border-sakura/25 bg-white/[0.035] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:border-sakura/55",
                index === 1 && "lg:min-h-[320px]",
                cardRotations[index],
              )}
            >
              <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sakura/20 blur-3xl transition duration-500 group-hover:bg-sakura/30" />
              <IconBadge icon={card.icon} />
              <h3 className="mt-7 text-2xl text-bone">{card.title}</h3>
              <p className={cn("mt-3 text-sm leading-6 text-muted", index === 1 && "max-w-[11rem] text-[12px] leading-[1.65]")}>{card.description}</p>

              {index === 0 ? (
                <div className="mt-9">
                  <div className="grid gap-3 text-xs text-muted">
                    {["Сценарий запуска", "Подача продукта", "Структура прогрева"].map((item) => (
                      <span key={item} className={cn("border px-3 py-2 text-bone", pinkUiClass)}>
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href={telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Обсудить запуск проекта в Telegram"
                    className={cn(
                      "mt-6 flex min-h-12 items-center justify-between border px-4 text-sm font-medium text-bone transition duration-300 hover:-translate-y-1 hover:border-sakura/55 hover:bg-sakura/[0.12]",
                      pinkUiClass,
                    )}
                  >
                    <span>Обсудить запуск</span>
                    <span className="text-2xl leading-none text-sakura">→</span>
                  </a>
                </div>
              ) : null}

              {index === 1 ? (
                <div className="mt-9 grid gap-2.5">
                  {["Личный кабинет", "Мини-приложение", "Внутренние инструменты", "Удобный интерфейс"].map((item) => (
                    <div key={item} className={cn("border px-3 py-2", pinkUiClass)}>
                      <p className="text-xs leading-5 text-bone">{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}

              {index === 2 ? (
                <div className="mt-8">
                  <div className="grid gap-3">
                    {[
                      "Усиливаю подачу",
                      "Убираю ощущение шаблона",
                      "Дорабатываю структуру",
                      "Собираю цельный визуал",
                    ].map((item) => (
                      <div key={item} className={cn("border px-3 py-2 text-sm text-bone", pinkUiClass)}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
