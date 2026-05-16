export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  summary: string;
  image: string;
  fullImage?: string;
  gallery: string[];
  year: string;
  ctaLabel: string;
  tags?: string[];
  siteUrl?: string;
  accent?: "warm";
  role?: string;
  projectType?: string;
  features?: string[];
  showcaseImages?: string[];
  showcaseLabels?: string[];
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
export const serviceSceneImage = "/images/placeholders/photo/ChatGPT Image 12 мая 2026 г., 19_00_47.png";
export const atmosphereSceneImage = "/images/placeholders/photo/ChatGPT Image 12 мая 2026 г., 19_00_32.png";
export const showcaseSceneImage = "/images/placeholders/photo/ChatGPT Image 12 мая 2026 г., 19_00_47.png";

const metodologiyaImages = [
  "/images/Методология/IMAGE 2026-05-16 16:19:26.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:19:56.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:20:09.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:20:24.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:20:34.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:20:43.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:05.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:13.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:20.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:29.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:36.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:45.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:21:56.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:22:01.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:22:07.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:22:17.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:22:23.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:22:30.jpg",
  "/images/Методология/IMAGE 2026-05-16 16:22:48.jpg",
];

const zapuskImages = [
  "/images/Запуск3.0/IMAGE 2026-05-16 15:45:34.jpg",
  "/images/Запуск3.0/IMAGE 2026-05-16 15:45:37.jpg",
  "/images/Запуск3.0/IMAGE 2026-05-16 15:45:49.jpg",
  "/images/Запуск3.0/IMAGE 2026-05-16 15:46:04.jpg",
  "/images/Запуск3.0/IMAGE 2026-05-16 15:46:07.jpg",
  "/images/Запуск3.0/IMAGE 2026-05-16 15:46:14.jpg",
  "/images/Запуск3.0/IMAGE 2026-05-16 15:46:19.jpg",
];

const trilogiyaImages = [
  "/images/Трилогия/IMAGE 2026-05-16 16:12:10.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:12:47.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:13:16.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:13:28.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:13:40.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:13:50.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:13:57.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:14:15.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:14:19.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:14:24.jpg",
  "/images/Трилогия/IMAGE 2026-05-16 16:14:28.jpg",
];

const samozapuskImages = [
  "/images/Самозапуск/IMAGE 2026-05-16 16:16:33.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:16:52.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:17:08.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:17:16.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:17:28.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:17:37.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:17:41.jpg",
  "/images/Самозапуск/IMAGE 2026-05-16 16:17:44.jpg",
];

const produktovayaSessiyaImages = [
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:14:45.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:15:05.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:15:19.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:15:32.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:15:39.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:15:53.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:15:57.jpg",
  "/images/Продуктовая_сессия/IMAGE 2026-05-16 16:16:02.jpg",
];

const produktImages = [
  "/images/Продукт/IMAGE 2026-05-16 16:16:11.jpg",
  "/images/Продукт/IMAGE 2026-05-16 16:16:15.jpg",
  "/images/Продукт/IMAGE 2026-05-16 16:16:19.jpg",
  "/images/Продукт/IMAGE 2026-05-16 16:16:21.jpg",
  "/images/Продукт/IMAGE 2026-05-16 16:16:23.jpg",
];

const barselonaImages = [
  "/images/Барселона/IMAGE 2026-05-16 16:24:06.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:24:31.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:24:37.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:24:44.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:25:16.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:25:30.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:25:37.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:25:49.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:25:59.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:29:11.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:29:14.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:29:43.jpg",
  "/images/Барселона/IMAGE 2026-05-16 16:29:46.jpg",
];

const metodKlubImages = [
  "/images/Метод-клуб/1.jpg",
  "/images/Метод-клуб/2.jpg",
  "/images/Метод-клуб/3.jpg",
  "/images/Метод-клуб/4.jpg",
  "/images/Метод-клуб/5.jpg",
  "/images/Метод-клуб/6.jpg",
  "/images/Метод-клуб/7.jpg",
  "/images/Метод-клуб/8.jpg",
  "/images/Метод-клуб/9.jpg",
  "/images/Метод-клуб/10.jpg",
  "/images/Метод-клуб/11.jpg",
  "/images/Метод-клуб/12.jpg",
  "/images/Метод-клуб/13.jpg",
  "/images/Метод-клуб/14.jpg",
  "/images/Метод-клуб/15.jpg",
  "/images/Метод-клуб/16.jpg",
  "/images/Метод-клуб/17.jpg",
  "/images/Метод-клуб/18.jpg",
  "/images/Метод-клуб/19.jpg",
  "/images/Метод-клуб/20.jpg",
  "/images/Метод-клуб/21.jpg",
  "/images/Метод-клуб/22.jpg",
];

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
    image: metodKlubImages[0],
    gallery: metodKlubImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Онлайн-сообщество", "Закрытый контент"],
    role: "Дизайн и сборка платформы",
    projectType: "Платформа сообщества",
    features: ["Закрытые материалы", "Клубная структура", "Личный кабинет", "Система доступа"],
    showcaseImages: metodKlubImages,
    showcaseLabels: [
      "Главный экран",
      "Вход в клуб",
      "Материалы",
      "Навигация",
      "Уроки",
      "Контент",
      "Структура",
      "Кабинет",
      "Доступ",
      "Программа",
      "Разделы",
      "Карточки",
      "Состояния",
      "Детали",
      "Внутренний экран",
      "Путь пользователя",
      "Дополнительный блок",
      "Интерфейс",
      "Список материалов",
      "Финальный блок",
      "Доверие",
      "Финальный экран",
    ],
  },
  {
    slug: "metodologiya",
    title: "Методология",
    category: "Образовательный продукт",
    description: "Лендинг и визуальная система для программы с сильной экспертной подачей.",
    summary: "Проект про структуру, ясность и ощущение глубины: когда сложный продукт становится понятным без упрощения.",
    image: metodologiyaImages[0],
    gallery: metodologiyaImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Образовательный продукт", "Структура программы"],
    role: "Дизайн и сборка лендинга",
    projectType: "Лендинг образовательного продукта",
    features: ["Сильная экспертная подача", "Структура программы", "Блоки доверия", "Путь к заявке"],
    showcaseImages: metodologiyaImages,
    showcaseLabels: ["Главный экран", "Суть программы", "Для кого", "Результат", "Структура", "Модули", "Формат", "Преимущества", "Экспертность", "Доверие", "Отзывы", "Программа", "Тарифы", "Регистрация", "FAQ", "Финальный призыв", "Детали", "Сценарий", "Финальный экран"],
  },
  {
    slug: "zapusk-3-0",
    title: "Запуск 3.0",
    category: "Лендинг",
    description: "Лендинг для масштабного запуска программы с акцентом на продажи и атмосферу.",
    summary: "Динамичный запусковый экран с сильной иерархией, чистой логикой и визуальным напряжением.",
    image: zapuskImages[0],
    gallery: zapuskImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Запуск программы", "Прогрев"],
    role: "Дизайн и сборка лендинга",
    projectType: "Лендинг запуска",
    features: ["Первый экран", "Сценарий запуска", "Продажная структура", "Финальная регистрация"],
    showcaseImages: zapuskImages,
    showcaseLabels: ["Главный экран", "Сценарий", "Программа", "Масштабирование", "Отзывы", "Регистрация", "Финальный экран"],
  },
  {
    slug: "zapusk-3",
    title: "Трилогия",
    category: "Практикум",
    description: "Практикум и система запуска для экспертов с акцентом на структуру, продажи и масштабирование.",
    summary: "Светлый желто-зеленый сайт практикума: тестовый кейс с акцентом на структуру запуска, продажи и масштабирование экспертного проекта.",
    image: trilogiyaImages[0],
    fullImage: trilogiyaImages[0],
    gallery: trilogiyaImages,
    year: "2026",
    ctaLabel: "Открыть сайт",
    tags: ["Системный запуск", "Структура продаж"],
    siteUrl: "https://trilogiya.agkedu.com/",
    accent: "warm",
    role: "Дизайн и сборка презентации проекта",
    projectType: "Практикум для экспертов",
    features: ["Светлая желто-зеленая палитра", "Сценарий запуска", "Блоки доверия", "Фокус на регистрации"],
    showcaseImages: trilogiyaImages,
    showcaseLabels: ["Главный экран", "Идея", "Структура", "Программа", "Формат", "Экспертность", "Отзывы", "Регистрация", "Детали", "Финальный призыв", "Финальный экран"],
  },
  {
    slug: "samozapusk",
    title: "Самозапуск",
    category: "Digital-упаковка",
    description: "Упаковка программы для самостоятельного запуска с понятным сценарием прогрева.",
    summary: "Сайт, который помогает продукту говорить спокойнее, точнее и убедительнее без лишнего шума.",
    image: samozapuskImages[0],
    gallery: samozapuskImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Самостоятельный запуск", "Прогрев"],
    role: "Дизайн и упаковка продукта",
    projectType: "Лендинг программы",
    features: ["Подача продукта", "Сценарий прогрева", "Структура блоков", "Финальный CTA"],
    showcaseImages: samozapuskImages,
    showcaseLabels: ["Главный экран", "Подача", "Сценарий", "Программа", "Преимущества", "Доверие", "Регистрация", "Финальный экран"],
  },
  {
    slug: "produktovaya-sessiya",
    title: "Продуктовая сессия",
    category: "Экспертная услуга",
    description: "Страница для продажи глубокой сессии с акцентом на ценность и доверие.",
    summary: "Минималистичная, но живая подача услуги, где важны личность, точность и ощущение результата.",
    image: produktovayaSessiyaImages[0],
    gallery: produktovayaSessiyaImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Экспертная услуга", "Продажа сессии"],
    role: "Дизайн и сборка страницы",
    projectType: "Лендинг экспертной услуги",
    features: ["Личная подача", "Описание ценности", "Доверие", "Запись на сессию"],
    showcaseImages: produktovayaSessiyaImages,
    showcaseLabels: ["Главный экран", "Ценность", "Формат", "Для кого", "Процесс", "Экспертность", "Запись", "Финальный экран"],
  },
  {
    slug: "produkt",
    title: "Продукт",
    category: "Сайт продукта",
    description: "Сайт для продукта с понятной структурой, сильной подачей и атмосферным визуалом.",
    summary: "Не просто презентация, а внятная цифровая оболочка, где продукт считывается за первые секунды.",
    image: produktImages[0],
    gallery: produktImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Сайт продукта", "Подача"],
    role: "Дизайн и сборка сайта",
    projectType: "Продуктовый сайт",
    features: ["Первое впечатление", "Понятная структура", "Визуальная система", "Путь к действию"],
    showcaseImages: produktImages,
    showcaseLabels: ["Главный экран", "Подача продукта", "Структура", "Преимущества", "Финальный экран"],
  },
  {
    slug: "platforma-barsy",
    title: "Платформа Барсы",
    category: "Веб-сервис",
    description: "Веб-платформа с личными кабинетами, оплатой и системой доступа.",
    summary: "Рабочий сервис с аккуратным интерфейсом, где функциональность не спорит с визуальным стилем.",
    image: barselonaImages[0],
    gallery: barselonaImages,
    year: "2026",
    ctaLabel: "Обсудить похожий проект",
    tags: ["Веб-сервис", "Личный кабинет"],
    role: "Дизайн интерфейса и страниц сервиса",
    projectType: "Платформа с кабинетами",
    features: ["Кабинеты", "Оплата", "Система доступа", "Интерфейс сервиса"],
    showcaseImages: barselonaImages,
    showcaseLabels: ["Главный экран", "Вход", "Кабинет", "Контент", "Материалы", "Оплата", "Доступ", "Навигация", "Профиль", "Состояния", "Интерфейс", "Детали", "Финальный экран"],
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
