# Евсеев Иван — AI Portfolio

Готовый Next.js + React сайт-портфолио эксперта по нейросетям и AI-автоматизации бизнеса.

## Рабочий корень репозитория

Git, `npm install` / `npm run dev` / `npm run build` и коммиты веди из **этой** папки (где лежат `app/`, `package.json` и каталог `.git`). Если Cursor открыт на родительскую директорию с таким же именем проекта, не правь дубликат без синхронизации — актуальный код и история здесь.

Скопируй [.env.example](.env.example) в `.env.local` и подставь свои `NEXT_PUBLIC_*` (сайт, Telegram, WhatsApp, email, LinkedIn, GitHub).

## Как посмотреть сайт на ПК

1. Открой папку проекта в Cursor или VS Code.
2. В терминале выполни:

```bash
npm install
npm run dev
```

3. Открой в браузере:

```text
http://localhost:3000
```

## Как собрать для Бегета

В терминале выполни:

```bash
npm run build
```

После сборки появится папка `out`.

На Бегет загружай **содержимое папки `out`**, а не весь проект.

Загружать сюда:

```text
/public_html/
```

Внутри на хостинге должны оказаться примерно такие файлы и папки:

```text
index.html
_next/
images/
```

## Где менять ссылки

Основные публичные ссылки задаются в `.env.local` (см. `.env.example`): сайт, Telegram, WhatsApp, email, LinkedIn, GitHub. Дополнительные правки — в `components/home-page.jsx`.

## Где менять фото

Фотографии лежат здесь:

```text
public/images/
```

Главное фото в hero-блоке:

```text
public/images/ivan-hero.jpg
```

Обычное фото:

```text
public/images/ivan-expert.jpg
```
