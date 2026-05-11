Саммари для нового чата
Что уже сделано
Next.js 15 лендинг-портфолио (тёмный премиум-стиль): секции Hero → Trust → Cases → Services → Tech → About → CTA, тексты по docs/archive/prompt.md, hero с четырьмя кнопками (Telegram, WhatsApp, аудит, кейсы), кейсы с проблема / решение / метрики / технологии, 7 услуг, блок «Из шахты в digital и AI».
UI: примитивы в стиле shadcn — components/ui/button.jsx, components/ui/card.jsx, lib/utils.js (cn), зависимости в package.json.
SEO: app/layout.jsx — metadataBase, keywords, OpenGraph, Twitter, JSON-LD Person — components/person-json-ld.jsx; app/sitemap.js, app/robots.js с dynamic = 'force-static' под output: 'export'.
Картинки: локальные hero/about — public/images/ivan-hero.jpg, ivan-expert.jpg; OG — public/images/design-concept.png; референсы в public/reference/.
Кейсы: в lib/case-assets.js переведено на локальные пути /images/case-1.png (временно три раза для трёх карточек), чтобы не зависеть от CDN и не ловить ERR_CONNECTION_RESET.
Конфиг: next.config.mjs — remotePatterns для Simple Icons и (при необходимости) внешних картинок; jsconfig.json — алиас @/*; .env.example.
GitHub: коммит запушен в репозиторий repcurs_kv_agent_urok_113 (ветка main); в .gitignore добавлен cursor-memory-bank/.
Важная структура папок
Рабочий код сайта у вас был в родительской папке ...\repcurs_kv_agent_urok_113\ (там app/, package.json).
Git + origin привязаны к вложенной папке ...\repcurs_kv_agent_urok_113\repcurs_kv_agent_urok_113\ — коммит/push делать оттуда или держать один корень проекта, чтобы не плодить расхождения.
Что осталось / на что обратить внимание в новом чате
Фавикон — сделаете в новом чате: обычно app/favicon.ico или app/icon.png / icon.svg + при необходимости metadata.icons в app/layout.jsx (сейчас отдельного фавикона нет — возможен 404 на /favicon.ico в Network).
Картинки кейсов: сейчас три раза /images/case-1.png — при желании добавить case-2.png, case-3.png в public/images/ и обновить массив в lib/case-assets.js.
Кинематографичный портрет от Nano: если пополните кредиты и скачаете PNG с CDN — можно заменить ivan-hero.jpg или завести ivan-hero.png и поправить src в components/home-page.jsx.
Переменные: скопировать .env.example → .env.local, выставить NEXT_PUBLIC_SITE_URL, NEXT_PUBLIC_TELEGRAM_URL, NEXT_PUBLIC_WHATSAPP_URL, реальные mailto/LinkedIn/GitHub в контактах.
recraft_remove_background по URL Яндекс.Диска ранее дал 422 — при необходимости другой источник URL или локальный файл для вырезки фона.
Порт dev: если занят 3000, Next поднимается на 3001 — смотреть вывод npm run dev.
В новом чате можно начать так: «Продолжаем портфолио repcurs_kv_agent_urok_113, нужен фавикон по бренду (IE / градиент cyan–violet)» — и приложить пожелания по размеру/формату (ico vs png/svg).