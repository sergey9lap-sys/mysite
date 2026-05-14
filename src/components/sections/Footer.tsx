import {navItems, telegramUrl} from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10">
      <div className="section-shell grid gap-10 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm text-bone">Портфолио веб-создателя</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Сайты и digital-проекты с характером, атмосферой и аккуратной логикой.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm text-muted">
          <div className="space-y-3">
            <p className="text-bone">Навигация</p>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block transition hover:text-bone">
                {item.label}
              </a>
            ))}
          </div>
          <div className="space-y-3">
            <p className="text-bone">Контакты</p>
            <a href={telegramUrl} className="block transition hover:text-bone" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a href="mailto:hello@example.com" className="block transition hover:text-bone">
              Email
            </a>
          </div>
        </div>
        <div className="text-sm text-muted md:text-right">
          <p>© 2026</p>
          <p className="mt-3">Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
