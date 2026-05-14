"use client";

import Image from "next/image";
import {motion} from "framer-motion";
import {Flower2, LayoutGrid, Send, Sparkles} from "lucide-react";
import {ButtonLink} from "@/components/ui/ButtonLink";
import {telegramUrl} from "@/data/site";

const heroFeatures = [
  {label: "Атмосфера и стиль", icon: Flower2},
  {label: "Структура и логика", icon: LayoutGrid},
  {label: "Живой визуал", icon: Sparkles},
  {label: "Результат, который работает", icon: Send},
];

export function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-screen overflow-hidden border-b border-sakura/15 bg-ink">
      <Image
        src="/images/hero/sakura-digital-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[63%_50%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,10,0.94)_0%,rgba(8,7,12,0.78)_31%,rgba(10,8,15,0.35)_58%,rgba(6,6,10,0.2)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_24%_48%,rgba(255,112,166,0.12),transparent_34rem),radial-gradient(ellipse_at_74%_24%,rgba(255,112,166,0.22),transparent_31rem),linear-gradient(180deg,rgba(6,6,10,0.42)_0%,transparent_34%,rgba(6,6,10,0.86)_100%)]"
      />
      <div aria-hidden className="grain-layer absolute inset-0 opacity-[0.055]" />
      <div className="section-shell relative flex min-h-screen items-center pt-24">
        <div className="w-full">
          <motion.div
            className="max-w-[43rem]"
            initial={{opacity: 0, y: 28, filter: "blur(10px)"}}
            animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
            transition={{duration: 1.1, ease: [0.22, 1, 0.36, 1]}}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sakura">Креативная digital-лаборатория</p>
            <h1 className="text-balance font-display text-5xl leading-[0.98] text-bone drop-shadow-[0_10px_42px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
              Создаю digital-проекты с характером и ощущением<span className="text-sakura">.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Сайты, лендинги и веб-сервисы для запусков, продуктов и экспертов — с акцентом на стиль,
              атмосферу и результат.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#projects">Смотреть проекты</ButtonLink>
              <ButtonLink href={telegramUrl} variant="ghost" icon="send">
                Написать в Telegram
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            className="mt-7 grid max-w-[43rem] grid-cols-1 border border-white/10 bg-white/[0.035] text-sm text-muted shadow-[0_26px_90px_rgba(0,0,0,0.28)] backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4"
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 0.24, ease: [0.22, 1, 0.36, 1]}}
          >
            {heroFeatures.map(({label, icon: Icon}) => (
              <div key={label} className="flex min-h-16 items-center gap-3 border-b border-white/10 px-4 py-3 last:border-b-0 sm:[&:nth-child(2n)]:border-l lg:border-b-0 lg:border-l lg:first:border-l-0">
                <span className="flex size-9 shrink-0 items-center justify-center border border-sakura/24 bg-sakura/10 text-sakura">
                  <Icon size={16} strokeWidth={1.7} />
                </span>
                <span className="leading-5">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
