import { getSiteUrl } from '@/lib/site';

export const dynamic = 'force-static';

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  const base = getSiteUrl();
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
