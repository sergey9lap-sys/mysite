import {introCards} from "@/data/site";
import {IconBadge} from "@/components/ui/IconBadge";
import {cn} from "@/lib/utils";

const cardRotations = ["lg:-rotate-[4deg] lg:translate-y-4", "lg:rotate-[3deg]", "lg:-rotate-[3deg] lg:-translate-y-3"];

export function Intro() {
  return (
    <section data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/intro-value-bg.png')] bg-cover bg-[68%_42%] opacity-52" />
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,10,0.96)_0%,rgba(8,7,12,0.78)_35%,rgba(8,7,12,0.5)_100%),radial-gradient(ellipse_at_88%_20%,rgba(255,112,166,0.28),transparent_34rem),radial-gradient(ellipse_at_5%_22%,rgba(255,112,166,0.22),transparent_25rem)]" />
      <div aria-hidden className="grain-layer absolute inset-0" />
      <div className="section-shell grid min-h-[560px] items-center gap-10 py-20 lg:grid-cols-[0.86fr_1.28fr]">
        <div className="relative z-10">
          <h2 className="font-display text-4xl leading-[1.03] text-bone md:text-5xl lg:text-6xl">
            Мне скучно делать сайты «как у всех».
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-muted">
            Люблю проекты, где есть характер: атмосфера, визуал и ощущение, что человек попал не на
            очередной шаблон, а в живой digital-продукт.
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
                cardRotations[index],
              )}
            >
              <div className="absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sakura/20 blur-3xl transition duration-500 group-hover:bg-sakura/30" />
              <IconBadge icon={card.icon} />
              <h3 className="mt-7 text-2xl text-bone">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>

              {index === 0 ? (
                <div className="mt-9">
                  <div className="flex items-center justify-between text-xs text-muted">
                    {["Анализ", "Структура", "Запуск"].map((item, step) => (
                      <span key={item} className="flex flex-col items-center gap-2">
                        <span
                          className={cn(
                            "grid size-6 place-items-center rounded-full border text-[11px]",
                            step === 0 ? "border-sakura bg-sakura text-ink" : "border-white/16 bg-white/[0.025]",
                          )}
                        >
                          {step + 1}
                        </span>
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex min-h-11 items-center justify-between border border-sakura/20 bg-sakura/10 px-4 text-sm text-bone">
                    Запустить проект
                    <span className="text-2xl leading-none text-sakura">→</span>
                  </div>
                </div>
              ) : null}

              {index === 1 ? (
                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="border border-white/10 bg-white/[0.035] p-3">
                    <p className="text-xs text-muted">Активность</p>
                    <p className="mt-2 text-xl text-bone">+23%</p>
                    <div className="mt-4 h-8 bg-[linear-gradient(135deg,transparent_0_18%,rgba(255,112,166,0.5)_18%_22%,transparent_22%_38%,rgba(255,112,166,0.58)_38%_44%,transparent_44%_63%,rgba(255,112,166,0.72)_63%_70%,transparent_70%)]" />
                  </div>
                  <div className="border border-white/10 bg-white/[0.035] p-3">
                    <p className="text-xs text-muted">Пользователи</p>
                    <p className="mt-2 text-xl text-bone">24 560</p>
                    <div className="mt-4 flex h-8 items-end gap-1">
                      {[30, 48, 36, 62, 52, 80].map((height) => (
                        <span key={height} className="flex-1 bg-sakura/55" style={{height: `${height}%`}} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {index === 2 ? (
                <div className="mt-8">
                  <p className="text-sm text-muted">Прирост конверсии</p>
                  <p className="mt-2 text-4xl text-bone">+37%</p>
                  <div className="mt-7 h-16 border-b border-sakura/25 bg-[linear-gradient(155deg,transparent_0_12%,rgba(255,112,166,0.32)_12%_15%,transparent_15%_30%,rgba(255,112,166,0.46)_30%_34%,transparent_34%_55%,rgba(255,112,166,0.58)_55%_60%,transparent_60%_78%,rgba(255,112,166,0.8)_78%_82%,transparent_82%)]" />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
