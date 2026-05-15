export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  image: string;
  gallery: string[];
  year: string;
  ctaLabel: string;
};

export type Service = {
  title: string;
  description: string;
  icon: "spark" | "grid" | "layers" | "bot" | "signal" | "box";
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "target" | "layers" | "eye" | "zap" | "shield";
};

export const telegramUrl = "https://t.me/lp_sergey";
export const serviceSceneImage = "/images/placeholders/photo/ChatGPT Image 12 мая 2026 г., 18_52_00.png";
export const atmosphereSceneImage = "/images/placeholders/photo/ChatGPT Image 12 мая 2026 г., 19_00_32.png";
export const showcaseSceneImage = "/images/placeholders/photo/ChatGPT Image 12 мая 2026 г., 19_00_47.png";

export const navItems = [
  {label: "Проекты", href: "#projects"},
  {label: "Форматы", href: "#services"},
  {label: "Подход", href: "#approach"},
  {label: "Обо мне", href: "#about"},
  {label: "Контакты", href: "#contact"},
];

export const introCards: Service[] = [
  {
    title: "Сайты под запуск",
    description: "Лендинги для вебинаров, продуктов и экспертных проектов, где важны первое впечатление и ритм.",
    icon: "spark",
  },
  {
    title: "Веб-сервисы",
    description: "Платформы, личные кабинеты и внутренние инструменты, которые выглядят понятно и живо.",
    icon: "grid",
  },
  {
    title: "Усиление проектов",
    description: "Помогаю текущему сайту звучать сильнее: яснее показать ценность, убрать лишнее и собрать цельное впечатление.",
    icon: "signal",
  },
];

export const projects: Project[] = [
  {
    slug: "metod-klub",
    title: "Метод-клуб",
    category: "Онлайн-сообщество",
    description: "Платформа для сообщества с закрытым контентом, уроками и материалами.",
    summary: "Камерное пространство для экспертов, где образовательная механика ощущается не сухо, а как клубная система.",
    image: showcaseSceneImage,
    gallery: [showcaseSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "metodologiya",
    title: "Методология",
    category: "Образовательный продукт",
    description: "Лендинг и визуальная система для программы с сильной экспертной подачей.",
    summary: "Проект про структуру, ясность и ощущение глубины: когда сложный продукт становится понятным без упрощения.",
    image: serviceSceneImage,
    gallery: [serviceSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "zapusk-3-0",
    title: "Запуск 3.0",
    category: "Лендинг",
    description: "Лендинг для масштабного запуска программы с акцентом на продажи и атмосферу.",
    summary: "Динамичный запусковый экран с сильной иерархией, чистой логикой и визуальным напряжением.",
    image: atmosphereSceneImage,
    gallery: [atmosphereSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "samozapusk",
    title: "Самозапуск",
    category: "Digital-упаковка",
    description: "Упаковка программы для самостоятельного запуска с понятным сценарием прогрева.",
    summary: "Сайт, который помогает продукту говорить спокойнее, точнее и убедительнее без лишнего шума.",
    image: showcaseSceneImage,
    gallery: [showcaseSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "produktovaya-sessiya",
    title: "Продуктовая сессия",
    category: "Экспертная услуга",
    description: "Страница для продажи глубокой сессии с акцентом на ценность и доверие.",
    summary: "Минималистичная, но живая подача услуги, где важны личность, точность и ощущение результата.",
    image: serviceSceneImage,
    gallery: [serviceSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "produkt",
    title: "Продукт",
    category: "Сайт продукта",
    description: "Сайт для продукта с понятной структурой, сильной подачей и атмосферным визуалом.",
    summary: "Не просто презентация, а внятная цифровая оболочка, где продукт считывается за первые секунды.",
    image: atmosphereSceneImage,
    gallery: [atmosphereSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "platforma-barsy",
    title: "Платформа Барсы",
    category: "Веб-сервис",
    description: "Веб-платформа с личными кабинетами, оплатой и системой доступа.",
    summary: "Рабочий сервис с аккуратным интерфейсом, где функциональность не спорит с визуальным стилем.",
    image: showcaseSceneImage,
    gallery: [showcaseSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
  {
    slug: "telegram-mini-app",
    title: "Telegram Mini App",
    category: "Mini App",
    description: "Мини-приложение внутри Telegram для вовлечения и автоматизации.",
    summary: "Быстрый интерактивный сценарий внутри Telegram: компактный, понятный и визуально собранный.",
    image: serviceSceneImage,
    gallery: [serviceSceneImage],
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
  },
];

export const services: Service[] = [
  {
    title: "Лендинг под запуск",
    description: "Страница, которая помогает понятно подать продукт, собрать внимание и привести человека к действию.",
    icon: "spark",
  },
  {
    title: "Сайт для продукта",
    description: "Сайт с понятной структурой, аккуратной подачей и визуалом, который помогает проекту выглядеть сильнее.",
    icon: "layers",
  },
  {
    title: "Телеграмм мини апп",
    description: "Интерактивный формат внутри Телеграмм для вовлечения, контента или работы с аудиторией.",
    icon: "bot",
  },
  {
    title: "Веб-сервис",
    description: "Личные кабинеты, платформы и внутренние инструменты с понятным интерфейсом.",
    icon: "grid",
  },
  {
    title: "Усиление сайта",
    description: "Помогаю улучшить текущий сайт: структуру, визуал, подачу и общее ощущение проекта.",
    icon: "signal",
  },
  {
    title: "Визуальная упаковка",
    description: "Помогаю собрать единый визуальный стиль, чтобы проект выглядел цельно и воспринимался сильнее.",
    icon: "box",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Понимаю задачу",
    description: "Сначала разбираюсь, что именно нужно проекту и для кого он создаётся.",
    icon: "target",
  },
  {
    number: "02",
    title: "Структура",
    description: "Собираю понятный сценарий, по которому человеку легко двигаться внутри сайта.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Визуал",
    description: "Подбираю стиль и подачу, которые поддерживают ощущение проекта.",
    icon: "eye",
  },
  {
    number: "04",
    title: "Скорость",
    description: "Работаю без лишней перегруженности и бесконечных усложнений.",
    icon: "zap",
  },
  {
    number: "05",
    title: "Честность",
    description: "Если решение слабое — скажу. Если можно сделать проще — предложу.",
    icon: "shield",
  },
];

export const personalityTags = [
  "Спокойный процесс",
  "Нешаблонный подход",
  "Внимание к деталям",
  "Честная обратная связь",
  "Аккуратный визуал",
  "Понятная структура",
];
