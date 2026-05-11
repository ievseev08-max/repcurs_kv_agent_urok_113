import { getSiteUrl } from '@/lib/site';

export function PersonJsonLd() {
  const base = getSiteUrl();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Евсеев Иван',
    jobTitle: 'AI automation expert',
    description:
      'Эксперт по нейросетям и AI-автоматизации бизнеса: внедрение нейросетей, AI-ассистенты, Telegram-боты, интеграции.',
    url: `${base}/`,
    image: `${base}/images/ivan-hero.jpg`,
    knowsAbout: [
      'AI automation',
      'нейросети',
      'автоматизация бизнеса',
      'Telegram боты',
      'n8n',
      'Make',
      'LangChain',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
