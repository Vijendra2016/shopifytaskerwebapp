export default function ExpertCityPageSchema({
  city,
  state,
  slug,
  faqs,
}: {
  city: string;
  state: string;
  slug: string;
  faqs: { question: string; answer: string }[];
}) {
  const siteUrl = "https://www.shopifytasker.com";
  const pageUrl = `${siteUrl}/shopify-expert-near-me/${slug}`;

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
          "ShopifyTasker is a top-rated Shopify agency offering store design, custom development, SEO, migrations, and ongoing support for Shopify merchants worldwide.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          url: `${siteUrl}/contact`,
        },
        sameAs: [
          "https://www.linkedin.com/company/shopifytasker/",
          "https://github.com/ShopifyTasker",
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
        name: `Hire Shopify Expert in ${city}, ${state} | ShopifyTasker`,
        description: `Top-rated Shopify experts in ${city}, ${state}. Store design, development, SEO, migrations and ongoing support. Pay after work is done.`,
        isPartOf: { "@id": `${siteUrl}/#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${pageUrl}#service` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Shopify Expert Near Me", item: `${siteUrl}/shopify-expert-near-me` },
          { "@type": "ListItem", position: 3, name: `${city}, ${state}`, item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Shopify Expert in ${city}, ${state}`,
        description: `Hire top-rated Shopify experts in ${city}, ${state}. Full-service Shopify agency covering store design, custom development, SEO, platform migrations, and ongoing support. Pay after delivery.`,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: { "@type": "State", name: state },
        },
        serviceType: "Shopify Expert Services",
        url: pageUrl,
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Starting from $20/hr. Fixed-price project quotes also available.",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shopify Expert Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Design & Theme Customisation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Custom Development & App Integration" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify Store Setup & Launch" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shopify SEO & Speed Optimisation" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Platform Migration to Shopify" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ongoing Shopify Support & Retainers" } },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
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
