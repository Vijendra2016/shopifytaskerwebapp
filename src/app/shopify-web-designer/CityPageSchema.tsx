export default function CityPageSchema({
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
  const pageUrl = `${siteUrl}/shopify-web-designer/${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // WebPage
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `Hire Shopify Web Designer in ${city}, ${state}`,
        description: `Top Rated Shopify Web Designer in ${city}, ${state}. Prices start from $10/hr. Pay after work done.`,
        isPartOf: {
  "@type": "WebSite",
  "@id": "https://www.shopifytasker.com/#website",
  "url": "https://www.shopifytasker.com",
  "name": "ShopifyTasker"
},
      },

      // Breadcrumb
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Shopify Web Designer",
            item: `${siteUrl}/shopify-web-designer`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${city}, ${state}`,
            item: pageUrl,
          },
        ],
      },

      // Service
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: `Shopify Web Design Services in ${city}, ${state}`,
        description: `Professional Shopify website design, customization, and development services in ${city}, ${state}.`,
        provider: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "State",
            name: state,
          },
        },
        serviceType: "Shopify Web Design",
        url: pageUrl,
      },

      // FAQ
      {
        "@type": "FAQPage",
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
