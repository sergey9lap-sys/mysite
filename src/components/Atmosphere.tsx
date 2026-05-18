"use client";

import {motion} from "framer-motion";

const petals = Array.from({length: 14}, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: (index % 7) * 0.6,
  duration: 24 + (index % 8) * 3,
  size: index % 6 === 0 ? 22 : 7 + (index % 5) * 4,
  opacity: 0.22 + (index % 5) * 0.045,
  blur: index % 6 === 0 ? 3.2 : index % 4 === 0 ? 1.6 : index % 3 === 0 ? 0.7 : 0,
  scale: index % 6 === 0 ? 1.22 : index % 4 === 0 ? 0.7 : index % 3 === 0 ? 0.88 : 1,
}));

const dust = Array.from({length: 18}, (_, index) => ({
  id: index,
  left: `${(index * 23) % 100}%`,
  top: `${(index * 41) % 100}%`,
  delay: (index % 9) * 0.45,
  duration: 10 + (index % 7) * 2,
}));

export function Atmosphere() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div className="grain-layer absolute inset-0" />
      <div className="light-beam right-[3%] top-[-8vh]" />
      <div className="light-beam left-[8%] top-[12vh] opacity-30" />
      <div className="absolute left-1/2 top-[-20%] h-[38rem] w-[38rem] -translate-x-1/2 rounded-[45%] bg-rose/35 blur-[145px]" />
      <div className="absolute bottom-[8%] right-[-10%] h-[28rem] w-[28rem] rounded-[42%] bg-violet/10 blur-[130px]" />
      <div className="absolute left-[-12%] top-[32%] h-[32rem] w-[32rem] rounded-[44%] bg-sakura/[0.16] blur-[120px]" />
      <div className="absolute bottom-[-16%] left-[22%] h-[26rem] w-[52rem] rotate-[-8deg] bg-rose/[0.22] blur-[150px]" />
      <div className="absolute left-[12%] top-[8%] h-[18rem] w-[54rem] rotate-[-18deg] bg-taupe/[0.045] blur-[130px]" />
      {dust.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-white/60"
          style={{left: particle.left, top: particle.top, boxShadow: "0 0 10px rgba(255, 112, 166, 0.42)"}}
          animate={{opacity: [0.05, 0.24, 0.05], y: [0, -18, 0]}}
          transition={{duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut"}}
        />
      ))}
      {petals.map((petal) => (
        <motion.span
          key={petal.id}
          className="absolute top-[-8%] rounded-[100%_0_100%_40%] bg-sakura"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size * 1.45,
            opacity: petal.opacity,
            filter: `blur(${petal.blur}px)`,
            scale: petal.scale,
            backgroundColor: "rgba(255, 239, 247, 0.86)",
            boxShadow: "0 0 16px rgba(13, 13, 17, 0.28), 0 0 24px rgba(255, 255, 255, 0.18)",
          }}
          animate={{
            y: ["0vh", "112vh"],
            x: [0, petal.id % 2 ? 80 : -80, petal.id % 3 ? 20 : -30],
            rotate: [0, 120, 260],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
