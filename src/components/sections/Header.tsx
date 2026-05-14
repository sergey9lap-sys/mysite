import {navItems, telegramUrl} from "@/data/site";
import {ButtonLink} from "@/components/ui/ButtonLink";

export function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-[1180px] -translate-x-1/2 border border-white/10 bg-ink px-4 py-3 text-bone shadow-[0_18px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:px-6">
      <nav className="flex items-center justify-between gap-4">
        <a href="#top" className="flex items-baseline gap-2 text-sm text-bone/90 transition hover:text-bone" aria-label="В начало">
          <span className="font-medium">Sergey Lapin</span>
          <span className="hidden text-muted sm:inline">/ веб-создатель</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-bone">
              {item.label}
            </a>
          ))}
        </div>
        <ButtonLink href={telegramUrl} icon="send" variant="ghost" className="min-h-10 px-4 text-xs">
          Написать
        </ButtonLink>
      </nav>
    </header>
  );
}
