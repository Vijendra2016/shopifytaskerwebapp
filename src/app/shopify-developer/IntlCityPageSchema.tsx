export default function IntlCityPageSchema({
  city,
  country,
  countrySlug,
  slug,
  currency,
  faqs,
}: {
  city: string;
  country: string;
  countrySlug: string;
  slug: string;
  currency: string;
  faqs: { question: string; answer: string }[];
}) {
  const siteUrl = "https://www.shopifytasker.com";
  const pageUrl = `${siteUrl}/shopify-developer/${countrySlug}/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "ShopifyTasker",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ee05feb6ce7c89fe4deabf_blackgackground.png",
          width: 200,
          height: 60,
        },
        description:
          "ShopifyTasker is a top-rated Shopify development agency offering custom app development, theme development, API integrations, Shopify Plus solutions, and ongoing support for Shopify stores worldwide.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: `${siteUrl}/contact`,
        },
        sameAs: [
          "https://www.linkedin.com/company/shopifytasker/",
          "https://www.facebook.com/shopifytasker",
          "https://twitter.com/shopifytasker",
          "https://www.instagram.com/shopifytasker",
          "https://www.youtube.com/@shopifytasker",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "ShopifyTasker",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `Hire Shopify Developer in ${city}, ${country} | ShopifyTasker`,
        description: `Top-rated Shopify developers in ${city}, ${country}. Custom development, app builds, API integrations, Shopify Plus. Pay after work is done.`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Shopify Developer", item: `${siteUrl}/shopify-developer` },
          { "@type": "ListItem", position: 3, name: country, item: `${siteUrl}/shopify-developer/${countrySlug}` },
          { "@type": "ListItem", position: 4, name: city, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Shopify Developer in ${city}, ${country}`,
        description: `Hire top-rated Shopify developers in ${city}, ${country}. Custom Shopify app development, Liquid theme builds, API integrations, Shopify Plus solutions. ${currency}-configured stores.`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "Country",
            name: country,
          },
        },
        serviceType: "Shopify Development",
        url: pageUrl,
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Starting from $20/hr. Fixed-price project packages also available.",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shopify Development Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Shopify App Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Theme Development (Liquid)" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify API & Third-Party Integrations" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Plus Enterprise Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Performance Optimization" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
