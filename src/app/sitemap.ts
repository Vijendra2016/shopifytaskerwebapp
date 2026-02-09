import { MetadataRoute } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

type City = {
  slug: string
  city: string
  intro: string
  cta: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://shopifytasker.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/how-this-work`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-expert-services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/cost-to-hire-shopify-expert`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-tasker-reviews`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-themes/impulse-customization-update`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-developer-near-me/newyork`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-developer-near-me/los-angeles-ca`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-developer-near-me`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries/hair-extension-shopify-web-design`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries/cdb-shopify-web-design`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries/shopify-auto-parts-website-design-development`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries/shopify-health-wellness-website-design-development`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/industries/shopify-florist-website-design-development`, lastModified: new Date(), priority: 0.8 },

    { url: `${baseUrl}/our-tech-stack`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-small-task`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/shopify-virtual-assistant-services`, lastModified: new Date(), priority: 0.8 },
  ]

  const filePath = path.join(process.cwd(), 'src/lib/cities.json')
  const file = await fs.readFile(filePath, 'utf-8')
  const cities: City[] = JSON.parse(file)

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/shopify-expert-near-me/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }))

  // 2️⃣ Shopify Web Designer pages
  const webDesignerPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/shopify-web-designer/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticPages, ...cityPages, ...webDesignerPages]
}
