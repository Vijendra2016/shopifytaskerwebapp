import { MetadataRoute } from 'next'
import path from 'path'
import { promises as fs } from 'fs'

type City = {
  slug: string
  city: string
  state: string
  intro: string
  cta: string
}

type IntlCity = {
  country: string
  countrySlug: string
  city: string
  slug: string
  region: string
  regionFull: string
  currency: string
  currencySymbol: string
  localPayments: string
  intro: string
  cta: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ✅ IMPORTANT: Must match the canonical URL used in all page metadata
  // Pages use https://www.shopifytasker.com — sitemap must match or Google marks
  // them as "Page with redirect"
  const baseUrl = 'https://www.shopifytasker.com'

  // ─── STATIC PAGES ───────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    // Core
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0, changeFrequency: 'weekly' },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/faq`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/how-this-work`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/our-tech-stack`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-tasker-reviews`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
    { url: `${baseUrl}/articles`, lastModified: new Date(), priority: 0.7, changeFrequency: 'weekly' },
    { url: `${baseUrl}/articles/shopify-fragrances-perfumes-colognes`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/articles/shopify-checkout-ab-testing`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },

    // Main service pages
    { url: `${baseUrl}/shopify-expert-services`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-store-design`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-store-setup`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-website-redesign-service`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-plus-development-agency`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-seo`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/theme-customization`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/custom-development`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/app-integration`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/ongoing-support`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-support-retainers`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-small-task`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-virtual-assistant-services`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/hire-front-end-developer-shopify`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/hire-shopify-development-company-india`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/cost-to-hire-shopify-expert`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-website-design-company`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-website-development-usa`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-theme-tweak`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },

    // Themes
    { url: `${baseUrl}/shopify-themes`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-themes/impulse-customization-update`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },

    // Industries hub + sub-pages
    { url: `${baseUrl}/industries`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/hair-extension-shopify-web-design`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/cdb-shopify-web-design`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/shopify-auto-parts-website-design-development`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/shopify-health-wellness-website-design-development`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/shopify-florist-website-design-development`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/shopify-cycling-website-design-development`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },
    { url: `${baseUrl}/industries/shopify-fine-jewelry-website-design-development`, lastModified: new Date(), priority: 0.7, changeFrequency: 'monthly' },

    // Hub pages
    { url: `${baseUrl}/shopify-expert-near-me`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer-near-me`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-web-designer`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },

    // International hub + country pages
    { url: `${baseUrl}/shopify-developer`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/australia`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/uk`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/canada`, lastModified: new Date(), priority: 0.9, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/germany`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/uae`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/singapore`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/netherlands`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/france`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/new-zealand`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer/ireland`, lastModified: new Date(), priority: 0.8, changeFrequency: 'monthly' },

    // Legacy static developer-near-me city pages
    { url: `${baseUrl}/shopify-developer-near-me/newyork`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer-near-me/los-angeles-ca`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer-near-me/austin-tx`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer-near-me/hanford-ca`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
    { url: `${baseUrl}/shopify-developer-near-me/santa-clara-ca`, lastModified: new Date(), priority: 0.6, changeFrequency: 'monthly' },
  ]

  // ─── DYNAMIC CITY PAGES (US — from cities.json) ────────────────────────────
  const citiesFilePath = path.join(process.cwd(), 'src/lib/cities.json')
  const citiesFile = await fs.readFile(citiesFilePath, 'utf-8')
  const cities: City[] = JSON.parse(citiesFile)

  // /shopify-expert-near-me/[slug]
  const expertNearMePages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/shopify-expert-near-me/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // /shopify-web-designer/[slug]
  const webDesignerPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/shopify-web-designer/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // /shopify-developer-near-me/[slug]  (new dynamic pages)
  const developerNearMePages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/shopify-developer-near-me/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // ─── INTERNATIONAL CITY PAGES ──────────────────────────────────────────────
  const intlFilePath = path.join(process.cwd(), 'src/lib/international-cities.json')
  const intlFile = await fs.readFile(intlFilePath, 'utf-8')
  const intlCities: IntlCity[] = JSON.parse(intlFile)

  // /shopify-developer/[countrySlug]/[citySlug]
  const intlCityPages: MetadataRoute.Sitemap = intlCities.map((c) => ({
    url: `${baseUrl}/shopify-developer/${c.countrySlug}/${c.slug}`,
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  return [
    ...staticPages,
    ...expertNearMePages,
    ...webDesignerPages,
    ...developerNearMePages,
    ...intlCityPages,
  ]
}
