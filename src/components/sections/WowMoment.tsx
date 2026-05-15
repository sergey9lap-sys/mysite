import Image from "next/image";
import {Check, Heart} from "lucide-react";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {atmosphereSceneImage, telegramUrl} from "@/data/site";

export function WowMoment() {
  return (
    <section data-reveal-section className="relative z-10 overflow-hidden border-b border-sakura/15 bg-ink">
      <div className="absolute inset-0 opacity-55">
        <Image src={atmosphereSceneImage} alt="" fill sizes="100vw" className="object-cover" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,10,0.97)_0%,rgba(8,7,12,0.82)_39%,rgba(8,7,12,0.55)_100%),radial-gradient(ellipse_at_62%_22%,rgba(255,112,166,0.28),transparent_28rem),radial-gradient(ellipse_at_74%_86%,rgba(255,112,166,0.34),transparent_32rem),linear-gradient(180deg,rgba(255,112,166,0.12)_0%,rgba(6,6,10,0.3)_28%,rgba(6,6,10,0.86)_100%)]"
      />
      <div aria-hidden className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-sakura/60 to-transparent" />
      <div aria-hidden className="grain-layer absolute inset-0" />

      <div className="section-shell relative grid min-h-[640px] items-center gap-10 py-24 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.32em] text-sakura">Один экран, чтобы сбить ровный ритм</p>
          <h2 className="mt-7 max-w-4xl text-balance font-display text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-7xl">
            Сайт должен не просто открыться. Он должен <span className="text-sakura">оставить ощущение.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Иногда именно <span className="text-sakura">атмосфера решает</span>, останется человек внутри проекта или закроет вкладку.
          </p>
          <div className="mt-7 flex">
            <ButtonLink href={telegramUrl} variant="ghost">
              Перейти к проектам
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[520px]">
          <div
            aria-hidden
            className="absolute left-[10%] top-1/2 h-px w-[78%] bg-gradient-to-r from-transparent via-sakura/70 to-transparent shadow-[0_0_34px_rgba(255,112,166,0.85)]"
          />
          <div aria-hidden className="absolute right-[4%] top-[18%] h-56 w-56 bg-sakura/20 blur-[90px]" />

          <div className="absolute left-[28%] top-[12%] hidden w-[42%] min-w-64 border border-sakura/28 bg-white/[0.035] p-2 shadow-[0_30px_120px_rgba(0,0,0,0.38)] backdrop-blur-xl md:block">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Image src={atmosphereSceneImage} alt="" fill sizes="32vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,17,0.05),rgba(13,13,17,0.56))]" />
              <div className="absolute left-4 top-4 flex gap-1">
                <span className="size-1.5 rounded-full bg-sakura/70" />
                <span className="size-1.5 rounded-full bg-white/30" />
                <span className="size-1.5 rounded-full bg-white/20" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 h-16 border border-white/10 bg-white/[0.04] backdrop-blur-md" />
            </div>
          </div>

          <div className="absolute right-[2%] top-[18%] hidden h-[330px] w-[34%] min-w-56 border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl lg:block">
            <div className="space-y-3">
              {["Главная", "Проекты", "Форматы", "Контакты"].map((item, index) => (
                <div key={item} className="flex items-center gap-3 border border-white/10 bg-ink/28 px-3 py-3 text-xs text-muted">
                  <span className="size-2 bg-sakura/60" />
                  <span>{item}</span>
                  <span className="ml-auto text-sakura/70">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-[24%] space-y-6">
            {["Атмосфера", "Структура", "Ощущение"].map((item) => (
              <span
                key={item}
                className="flex min-w-44 items-center justify-between gap-5 border border-sakura/35 bg-ink/45 px-4 py-3 text-sm text-bone shadow-[0_16px_70px_rgba(0,0,0,0.28)] backdrop-blur-md"
              >
                <span className="flex items-center gap-2">
                  <Check size={15} className="text-sakura" />
                  {item}
                </span>
                <Check size={15} className="text-sakura" />
              </span>
            ))}
          </div>

          <div className="absolute right-0 top-4 flex items-center gap-2 border border-sakura/28 bg-sakura/14 px-4 py-2 text-sm text-bone backdrop-blur-md">
            <span className="flex -space-x-2">
              {[0, 1, 2].map((item) => (
                <span
                  key={item}
                  className="grid size-6 place-items-center border border-sakura/45 bg-[linear-gradient(135deg,#3b1528,#d88fa3)] text-[10px] text-bone"
                />
              ))}
            </span>
            +28
          </div>

          <div className="absolute bottom-[18%] right-[3%] flex items-center gap-3 border border-white/10 bg-white/[0.05] px-5 py-4 text-lg text-bone shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-md">
            <Heart size={20} className="fill-sakura text-sakura" />
            12 873
          </div>
        </div>
      </div>
    </section>
  );
}
