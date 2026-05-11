'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  Github,
  Layers,
  LineChart,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Rocket,
  Send,
  Sparkles,
  Workflow,
  X,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CASE_CARD_IMAGES } from '@/lib/case-assets';

const tg = process.env.NEXT_PUBLIC_TELEGRAM_URL || 'https://t.me/';
const wa = process.env.NEXT_PUBLIC_WHATSAPP_URL || 'https://wa.me/';

const trustItems = [
  ['AI-системы', 'Архитектура и внедрение end-to-end', Cpu],
  ['Автоматизации', 'Связки CRM, таблиц, API и нейросетей', Workflow],
  ['Telegram-боты', 'Продажи, поддержка, доступ, обучение', Send],
  ['AI-ассистенты', 'Команда «второго мозга» для операций', BrainCircuit],
  ['AI-контент', 'Посты, письма, сценарии, лид-магниты', Sparkles],
  ['AI-воронки', 'Квалификация, прогрев, дожим лидов', LineChart],
  ['CRM-автоматизации', 'Сделки, задачи, уведомления, отчёты', Database],
];

const services = [
  ['AI automation', 'Сборка надёжных AI-процессов: от заявки до отчёта без ручной рутины.', Workflow],
  ['AI consulting', 'Диагностика, дорожная карта, приоритизация и контроль внедрения.', BrainCircuit],
  ['AI assistants', 'Ассистенты для поддержки, продаж, документов и внутренних задач.', Sparkles],
  ['Telegram bots', 'Сценарии продаж, онбординг, оплаты, доступ к материалам.', Bot],
  ['AI integrations', 'Связка SaaS, CRM, баз, API и кастомных сервисов в одну систему.', Layers],
  ['AI content systems', 'Генерация и контроль качества контента под ваш бренд и воронки.', Rocket],
  ['AI sales systems', 'Квалификация лидов, follow-up, персонализация и аналитика воронки.', LineChart],
];

const cases = [
  {
    title: 'Автоматизация обработки заявок',
    problem: 'Поток заявок размазан по мессенджерам и таблицам, SLA не соблюдается.',
    solution: 'AI-ассистент классификации + маршрутизация в CRM и Telegram-уведомления ответственным.',
    result: '−72%',
    resultLabel: 'время обработки заявок',
    tech: ['OpenAI', 'n8n', 'Telegram', 'Supabase'],
    image: CASE_CARD_IMAGES[0],
  },
  {
    title: 'Telegram-бот для онлайн-школы',
    problem: 'Ручные ответы и выдача доступа съедали время команды и тормозили продажи.',
    solution: 'Бот с оплатой/доступом, FAQ и эскалацией к менеджеру при сложных кейсах.',
    result: '+146%',
    resultLabel: 'рост продаж',
    tech: ['Telegram', 'Make', 'OpenAI'],
    image: CASE_CARD_IMAGES[1],
  },
  {
    title: 'AI-воронка для консалтинга',
    problem: 'Лиды «остывали» из-за долгого первого касания и слабой квалификации.',
    solution: 'AI-квалификация + сценарии прогрева и запись на консультацию в календарь.',
    result: '+89%',
    resultLabel: 'конверсия в сделки',
    tech: ['LangChain', 'OpenAI', 'n8n'],
    image: CASE_CARD_IMAGES[2],
  },
];

const techStack = [
  { label: 'OpenAI', slug: 'openai', color: 'ffffff' },
  { label: 'Claude', slug: 'anthropic', color: 'ffffff' },
  { label: 'n8n', slug: 'n8n', color: 'ffffff' },
  { label: 'Make', slug: 'make', color: 'ffffff' },
  { label: 'Telegram', slug: 'telegram', color: 'ffffff' },
  { label: 'LangChain', slug: null, color: null },
  { label: 'Supabase', slug: 'supabase', color: 'ffffff' },
  { label: 'Docker', slug: 'docker', color: 'ffffff' },
  { label: 'React', slug: 'react', color: '61dafb' },
  { label: 'Next.js', slug: 'nextdotjs', color: 'ffffff' },
];

const fadeUp = { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: '-60px' } };

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_#0B1120_0%,_#050816_55%,_#050816_100%)] opacity-95" />
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-25" />
      <div className="noise pointer-events-none fixed inset-0 opacity-[0.035]" />
      <div className="pointer-events-none fixed left-1/2 top-[-260px] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />
      <div className="pointer-events-none fixed bottom-[-250px] right-[-180px] h-[620px] w-[620px] rounded-full bg-violet-600/20 blur-[150px]" />

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 font-black text-slate-950">
            IE
          </div>
          <div>
            <div className="font-semibold">Евсеев Иван</div>
            <div className="text-xs text-slate-400">AI Automation Expert</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          <a href="#trust" className="hover:text-white">
            Направления
          </a>
          <a href="#cases" className="hover:text-white">
            Кейсы
          </a>
          <a href="#services" className="hover:text-white">
            Услуги
          </a>
          <a href="#tech" className="hover:text-white">
            Технологии
          </a>
          <a href="#about" className="hover:text-white">
            Обо мне
          </a>
          <a href="#contacts" className="hover:text-white">
            Контакты
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="glass" size="icon" className="hidden sm:inline-flex" asChild>
            <a href={tg} target="_blank" rel="noreferrer" aria-label="Telegram">
              <Send size={18} />
            </a>
          </Button>
          <Button variant="glass" size="icon" className="hidden sm:inline-flex" asChild>
            <a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </Button>
          <Button variant="glass" size="icon" className="lg:hidden" type="button" onClick={() => setMenuOpen(true)} aria-label="Меню">
            <Menu size={20} />
          </Button>
        </div>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button type="button" className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-label="Закрыть меню" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col gap-1 border-l border-white/10 bg-[#0B1120] p-6 shadow-2xl">
            <div className="mb-4 flex justify-end">
              <Button variant="ghost" size="icon" type="button" onClick={() => setMenuOpen(false)} aria-label="Закрыть">
                <X size={22} />
              </Button>
            </div>
            {['#trust', '#cases', '#services', '#tech', '#about', '#contacts'].map((href, i) => {
              const labels = ['Направления', 'Кейсы', 'Услуги', 'Технологии', 'Обо мне', 'Контакты'];
              return (
                <a key={href} href={href} className="rounded-xl px-3 py-3 text-slate-200 hover:bg-white/[.06]" onClick={() => setMenuOpen(false)}>
                  {labels[i]}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}

      <section id="top" className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-10 pt-6 md:min-h-[82vh] md:grid-cols-[1fr_.9fr] md:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles size={16} /> AI автоматизация бизнеса
          </div>
          <h1 className="hero-name text-5xl font-semibold leading-[.95] tracking-tight md:text-7xl lg:text-8xl">Евсеев Иван</h1>
          <p className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">
            Эксперт по <span className="gradient-text">нейросетям и AI-автоматизации бизнеса</span>
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Помогаю предпринимателям внедрять ИИ, автоматизировать процессы и ускорять рост бизнеса.
          </p>
          <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ['50+', 'проектов реализовано'],
              ['70%', 'средний рост эффективности'],
              ['24/7', 'автоматизация процессов'],
              ['5+', 'лет в AI и автоматизации'],
            ].map(([n, t]) => (
              <div key={n} className="glass rounded-2xl p-4">
                <div className="text-3xl font-semibold text-cyan-300">{n}</div>
                <div className="mt-1 text-xs leading-5 text-slate-400">{t}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Button className="w-full" asChild>
              <a href={tg} target="_blank" rel="noreferrer">
                <Send size={18} /> Telegram
              </a>
            </Button>
            <Button className="w-full" variant="glass" asChild>
              <a href={wa} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </Button>
            <Button className="w-full" asChild>
              <a href="#contacts">
                Получить аудит <ArrowRight size={18} />
              </a>
            </Button>
            <Button className="w-full" variant="glass" asChild>
              <a href="#cases">Смотреть кейсы</a>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="pointer-events-none absolute -left-6 top-12 h-24 w-24 rounded-full border border-cyan-400/30 bg-cyan-500/10 blur-xl" />
          <div className="pointer-events-none absolute bottom-24 -right-4 h-20 w-20 rounded-full border border-violet-400/30 bg-violet-500/10 blur-xl" />
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-500/30 to-violet-600/25 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[3rem] p-3">
            <Image
              src="/images/ivan-hero.jpg"
              alt="Евсеев Иван — эксперт по нейросетям и автоматизации бизнеса"
              width={900}
              height={1100}
              className="rounded-[2.4rem] object-cover"
              priority
            />
            <div className="glass absolute bottom-7 right-7 max-w-[230px] rounded-3xl p-5">
              <div className="mb-3 flex items-center gap-2 text-sm text-emerald-300">
                <Zap size={16} /> AI Systems Active
              </div>
              <div className="text-3xl font-semibold">128</div>
              <div className="text-xs uppercase tracking-wider text-slate-400">автоматизаций</div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="trust" className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8">
        <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
          <h2 className="mb-2 text-3xl font-semibold md:text-4xl">Направления экспертизы</h2>
          <p className="mb-8 max-w-2xl text-slate-400">Системный подход к AI: от стратегии до продакшена и поддержки.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([title, desc, Icon], i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <Card className="card-hover h-full border-white/10 p-6">
                <Icon className="mb-4 text-cyan-300" size={32} />
                <CardTitle className="text-lg">{title}</CardTitle>
                <p className="mt-2 text-sm leading-6 text-slate-400">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="cases" className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-3xl font-semibold md:text-4xl">Кейсы</h2>
          <a className="text-sm text-cyan-300" href="#contacts">
            Обсудить проект →
          </a>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map((c) => (
            <Card key={c.title} className="card-hover flex flex-col overflow-hidden border-white/10">
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={c.image} alt={`Иллюстрация кейса: ${c.title}`} fill className="object-cover" sizes="(max-width:1024px) 100vw, 33vw" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 to-transparent" />
              </div>
              <CardHeader>
                <div className="mb-2 inline-flex w-fit rounded-full bg-violet-400/15 px-3 py-1 text-xs text-violet-200">AI-АВТОМАТИЗАЦИЯ</div>
                <CardTitle>{c.title}</CardTitle>
                <CardDescription className="space-y-2 pt-2 text-slate-300">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Проблема</span>
                  {c.problem}
                  <span className="block pt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Решение</span>
                  {c.solution}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-4 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-2">
                  {c.tech.map((t) => (
                    <span key={t} className="rounded-full bg-white/[.06] px-3 py-1 text-xs text-cyan-100/90">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-4xl font-semibold text-cyan-300">{c.result}</div>
                    <div className="text-xs text-slate-400">{c.resultLabel}</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="glass rounded-full p-2">
                      <Send size={16} />
                    </span>
                    <span className="glass rounded-full p-2">
                      <Zap size={16} />
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8">
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">Услуги</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(([title, text, Icon]) => (
            <Card key={title} className="card-hover h-full border-white/10 p-6">
              <Icon className="mb-5 text-cyan-300" size={34} />
              <CardTitle className="text-base">{title}</CardTitle>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="tech" className="relative z-10 mx-auto max-w-7xl px-5 py-12 md:px-8">
        <h2 className="mb-7 text-3xl font-semibold md:text-4xl">Технологии и инструменты</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
          {techStack.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="glass flex flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 text-center"
            >
              {item.slug ? (
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }} className="flex h-10 w-10 items-center justify-center">
                  <Image src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`} alt="" width={36} height={36} unoptimized />
                </motion.div>
              ) : (
                <BrainCircuit className="text-cyan-300" size={28} />
              )}
              <span className="text-xs text-slate-200">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:px-8">
        <div className="glass overflow-hidden rounded-[2rem] p-3">
          <Image src="/images/ivan-expert.jpg" alt="Портрет Ивана Евсеева" width={520} height={780} className="h-full w-full rounded-[1.5rem] object-cover" />
        </div>
        <div className="self-center">
          <p className="mb-3 text-sm text-cyan-300">Мой путь</p>
          <h2 className="text-4xl font-semibold leading-tight">Из шахты в digital и AI</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Путь начался в шахте: дисциплина, безопасность, ответственность за результат в условиях жёстких ограничений. Эти принципы перенёс в digital и AI — чтобы
            автоматизация давала измеримый ROI, а не «красивые слайды».
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {['Фокус на результат и ROI', 'Полный цикл от идеи до внедрения', 'Понятные решения без лишней сложности', 'AI-first подход к бизнес-процессам'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[.04] p-4">
                <CheckCircle2 className="text-cyan-300" size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8">
        <div className="glass grid overflow-hidden rounded-[2rem] md:grid-cols-[260px_1fr]">
          <div className="border-r border-white/10 p-7">
            {[
              [Send, 'Telegram', tg],
              [MessageCircle, 'WhatsApp', wa],
              [Mail, 'Email', 'mailto:hello@example.com'],
              [Linkedin, 'LinkedIn', '#'],
              [Github, 'GitHub', '#'],
            ].map(([Icon, name, href]) => (
              <a key={name} href={href} className="mb-3 flex items-center justify-between rounded-2xl p-3 text-slate-200 hover:bg-white/[.06]">
                <span className="flex items-center gap-3">
                  <Icon size={18} />
                  {name}
                </span>
                <span>›</span>
              </a>
            ))}
          </div>
          <div className="relative p-10 text-center md:p-16">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-cyan-500/10 blur-3xl" />
            <h2 className="relative text-4xl font-semibold md:text-6xl">
              Бизнес <span className="gradient-text">будущего уже здесь</span>
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-slate-300">Готовы внедрить AI и автоматизацию в свой бизнес?</p>
            <Button className="relative mt-8" size="default" asChild>
              <a href={tg} target="_blank" rel="noreferrer">
                Запустить AI-систему <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
        © 2026 Евсеев Иван. Нейросети и автоматизация бизнес-процессов.
      </footer>
    </main>
  );
}
