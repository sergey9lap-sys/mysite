import {MessageSquare} from "lucide-react";
import {IconBadge} from "@/components/ui/IconBadge";
import {services, telegramUrl} from "@/data/site";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {cn} from "@/lib/utils";

const serviceMeta = [
  {tag: "landing", time: "от 7 дней", className: "lg:col-start-1 lg:row-start-1 lg:-rotate-[3deg] lg:translate-y-8"},
  {tag: "web app", time: "индивидуально", className: "lg:col-start-2 lg:row-start-1 lg:scale-110 lg:-translate-y-3"},
  {tag: "product", time: "от 10 дней", className: "lg:col-start-1 lg:row-start-2 lg:rotate-[3deg]"},
  {tag: "mini app", time: "от 5 дней", className: "lg:col-start-3 lg:row-start-1 lg:rotate-[2deg] lg:translate-y-10"},
  {tag: "upgrade", time: "от 3 дней", className: "lg:col-start-2 lg:row-start-2 lg:rotate-[2deg] lg:translate-y-4"},
  {tag: "package", time: "индивидуально", className: "lg:col-start-3 lg:row-start-2 lg:-rotate-[2deg] lg:-translate-y-1"},
];

export function Services() {
  return (
    <section id="services" data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/hero/services-formats-bg.png')] bg-cover bg-[62%_48%] opacity-52" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,8,0.98)_0%,rgba(5,5,8,0.88)_30%,rgba(7,5,11,0.54)_66%,rgba(5,5,8,0.84)_100%),radial-gradient(ellipse_at_58%_42%,rgba(255,112,166,0.25),transparent_36rem),radial-gradient(ellipse_at_78%_78%,rgba(255,112,166,0.22),transparent_32rem)]"
      />
      <div aria-hidden className="absolute left-0 top-[46%] h-px w-full bg-gradient-to-r from-transparent via-sakura/50 to-transparent shadow-[0_0_34px_rgba(255,112,166,0.8)]" />
      <div aria-hidden className="absolute left-[45%] top-[21%] h-[34rem] w-[48rem] -rotate-12 bg-[radial-gradient(ellipse_at_50%_50%,rgba(255,112,166,0.2),transparent_68%)] blur-3xl" />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.06]" />

      <div className="section-shell grid min-h-[790px] items-center gap-12 py-24 lg:grid-cols-[0.62fr_1.38fr]">
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.32em] text-sakura">Форматы</p>
          <h2 className="mt-6 max-w-lg font-display text-5xl leading-[1.03] text-bone sm:text-6xl">
            Собираю не набор услуг, а <span className="text-sakura">выразительные digital-формы</span>
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-muted">
            Не продаю список услуг. Собираю формат под задачу: от лендинга до сервиса, который реально работает.
          </p>

          <div className="mt-12 max-w-md border border-sakura/25 bg-white/[0.035] p-6 shadow-[0_0_80px_rgba(255,112,166,0.12)] backdrop-blur-xl">
            <div className="flex gap-4">
              <span className="grid size-14 shrink-0 place-items-center border border-sakura/24 bg-sakura/10 text-sakura shadow-[0_0_36px_rgba(255,112,166,0.18)]">
                <MessageSquare size={23} strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-sm leading-6 text-muted">Есть задача, но не знаешь формат?</p>
                <p className="mt-1 text-sm leading-6 text-muted">Разберем.</p>
                <ButtonLink href={telegramUrl} variant="ghost" className="mt-5 min-h-10 px-4">
                  Обсудить проект
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[7%] right-[6%] top-[24%] hidden h-[46%] rounded-[2rem] border border-sakura/20 shadow-[0_0_42px_rgba(255,112,166,0.16)] lg:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-[10%] right-[7%] top-[49%] hidden h-px bg-gradient-to-r from-transparent via-sakura/80 to-transparent shadow-[0_0_24px_rgba(255,112,166,0.95)] lg:block"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-7 lg:gap-y-8 lg:[perspective:1200px]">
            {services.map((service, index) => {
              const meta = serviceMeta[index];
              const featured = index === 1;

              return (
                <article
                  key={service.title}
                  className={cn(
                    "group relative min-h-[250px] overflow-hidden border border-sakura/24 bg-black/24 p-6 shadow-[0_30px_110px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-sakura/70",
                    "before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,112,166,0.18),transparent_62%)] before:opacity-70",
                    featured &&
                      "border-sakura/85 bg-sakura/[0.055] shadow-[0_0_0_1px_rgba(255,112,166,0.25),0_0_70px_rgba(255,112,166,0.34),0_34px_120px_rgba(0,0,0,0.42)]",
                    meta.className,
                  )}
                >
                  <span className="absolute -left-1 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-sakura shadow-[0_0_20px_rgba(255,112,166,1)] lg:block" />
                  <span className="absolute -right-1 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-sakura shadow-[0_0_20px_rgba(255,112,166,1)] lg:block" />
                  <div className="relative flex h-full flex-col">
                    <span className="w-fit border border-sakura/25 bg-sakura/12 px-3 py-1 text-sm text-sakura shadow-[0_0_26px_rgba(255,112,166,0.13)]">
                      {meta.tag}
                    </span>
                    <div className="mt-7">
                      <IconBadge icon={service.icon} />
                    </div>
                    <h3 className="mt-6 text-2xl text-bone">{service.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted">{service.description}</p>
                    <p className="mt-auto pt-7 text-sm text-sakura">
                      <span className="mr-2 inline-block size-1.5 rounded-full bg-sakura align-middle shadow-[0_0_14px_rgba(255,112,166,1)]" />
                      {meta.time}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
