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

export const telegramUrl = "https://t.me/username";
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
    description: "Помогаю улучшить текущие сайты: структуру, визуал, подачу, конверсию и ощущение.",
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
    description: "Не просто экран продажи, а вход в атмосферу запуска.",
    icon: "spark",
  },
  {
    title: "Сайт для продукта",
    description: "Упаковка смысла, визуального характера и понятной логики.",
    icon: "layers",
  },
  {
    title: "Веб-сервис",
    description: "Сложные механики в спокойном, собранном интерфейсе.",
    icon: "grid",
  },
  {
    title: "Telegram Mini App",
    description: "Компактный интерактивный сценарий внутри привычной среды.",
    icon: "bot",
  },
  {
    title: "Усиление сайта",
    description: "Больше воздуха, глубины и точности без полной пересборки.",
    icon: "signal",
  },
  {
    title: "Digital-упаковка",
    description: "Визуальная система, которая помогает идее ощущаться дороже.",
    icon: "box",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Понимаю задачу",
    description: "Разбираюсь в сути, аудитории, смыслах и том, что человек должен почувствовать.",
    icon: "target",
  },
  {
    number: "02",
    title: "Структура",
    description: "Собираю логику, сценарий и путь пользователя до результата.",
    icon: "layers",
  },
  {
    number: "03",
    title: "Визуал",
    description: "Создаю атмосферу, аккуратный стиль и ритм, который поддерживает честность проекта.",
    icon: "eye",
  },
  {
    number: "04",
    title: "Скорость",
    description: "Работаю быстро, но без ощущения хаоса и лишней суеты.",
    icon: "zap",
  },
  {
    number: "05",
    title: "Честность",
    description: "Если идея слабая, скажу. Если можно проще, скажу. Честно, понятно, по делу.",
    icon: "shield",
  },
];

export const personalityTags = [
  "быстрый рабочий ритм",
  "люблю необычные проекты",
  "открыт к экспериментам",
  "честное общение",
  "не шаблонный подход",
];
