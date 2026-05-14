import Link from "next/link";
import {ArrowUpRight, Send} from "lucide-react";
import {cn} from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  icon?: "arrow" | "send";
  className?: string;
};

export function ButtonLink({href, children, variant = "primary", icon = "arrow", className}: ButtonLinkProps) {
  const Icon = icon === "send" ? Send : ArrowUpRight;
  const isExternal = href.startsWith("http");
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 border px-5 text-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-sakura/40",
    variant === "primary"
      ? "border-sakura/70 bg-sakura text-ink shadow-[0_0_58px_rgba(255,112,166,0.34)] hover:bg-glow"
      : "border-white/16 bg-white/[0.03] text-bone hover:border-sakura/50 hover:bg-white/[0.06]",
    className,
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
        <Icon size={16} strokeWidth={1.8} />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <Icon size={16} strokeWidth={1.8} />
    </Link>
  );
}
