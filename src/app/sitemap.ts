// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shopifytasker.com' // ✅ Use your real domain

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/how-this-work`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopify-expert-services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cost-to-hire-shopify-expert`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopify-tasker-reviews`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/shopify-themes/impulse-customization-update`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopify-developer-near-me/newyork`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopify-developer-near-me/los-angeles-ca`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/shopify-developer-near-me`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: `${baseUrl}/industries/hair-extension-shopify-web-design`,
      lastModified: new Date(),
      priority: 0.8,
    },
    // 👉 Add more pages here as needed
  ]
}
