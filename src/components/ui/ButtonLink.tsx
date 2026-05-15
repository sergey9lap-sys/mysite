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
    "inline-flex min-h-12 items-center justify-center gap-2 border px-5 text-sm font-medium transition duration-300 hover:-translate-y-1 hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-sakura/50",
    variant === "primary"
      ? "border-[#ff8fc1] bg-[#e2478d] text-white shadow-[0_0_58px_rgba(255,112,166,0.44)] hover:border-[#ffadd2] hover:bg-[#ff6bab]"
      : "border-[#ff8fc1] bg-[#d83f86] text-white shadow-[0_0_48px_rgba(255,112,166,0.36)] hover:border-[#ffadd2] hover:bg-[#ff6bab]",
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
