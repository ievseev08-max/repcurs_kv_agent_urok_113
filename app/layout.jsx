import './globals.css';
import { PersonJsonLd } from '@/components/person-json-ld';
import { getSiteUrl } from '@/lib/site';

const site = getSiteUrl();

export const metadata = {
  metadataBase: new URL(site),
  title: {
    default: 'Евсеев Иван — эксперт по нейросетям и AI-автоматизации бизнеса',
    template: '%s | Евсеев Иван',
  },
  description:
    'Портфолио Ивана Евсеева: внедрение нейросетей, AI automation, автоматизация бизнеса, AI consultant, Telegram AI bot, AI systems, AI automation expert.',
  keywords: [
    'внедрение нейросетей',
    'AI automation',
    'автоматизация бизнеса',
    'AI consultant',
    'Telegram AI bot',
    'AI systems',
    'AI automation expert',
    'Евсеев Иван',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: '/',
    siteName: 'Евсеев Иван',
    title: 'Евсеев Иван — AI Automation Expert',
    description: 'Нейросети и автоматизация бизнес-процессов для предпринимателей и команд.',
    images: [{ url: '/images/design-concept.png', width: 1200, height: 630, alt: 'AI portfolio concept' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Евсеев Иван — AI Automation Expert',
    description: 'Нейросети и автоматизация бизнес-процессов.',
    images: ['/images/design-concept.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="min-h-screen antialiased">
        <PersonJsonLd />
        {children}
      </body>
    </html>
  );
}
