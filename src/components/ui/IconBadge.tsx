import {Bot, Box, Grid2X2, Layers3, Signal, Sparkles} from "lucide-react";
import type {Service} from "@/data/site";

const icons = {
  spark: Sparkles,
  grid: Grid2X2,
  layers: Layers3,
  bot: Bot,
  signal: Signal,
  box: Box,
};

export function IconBadge({icon}: {icon: Service["icon"]}) {
  const Icon = icons[icon];

  return (
    <span className="flex h-11 w-11 items-center justify-center border border-white/10 bg-white/[0.035] text-sakura shadow-glass">
      <Icon size={18} strokeWidth={1.6} />
    </span>
  );
}
