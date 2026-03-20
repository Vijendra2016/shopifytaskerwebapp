import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/sentry-example-page',
          '/create-task',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://www.shopifytasker.com/sitemap.xml',
    host: 'https://www.shopifytasker.com',
  }
}
