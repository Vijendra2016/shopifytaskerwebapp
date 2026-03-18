/**
 * ServicePageSchema — generates Service + BreadcrumbList + WebPage structured data
 * for Shopify service landing pages.
 *
 * Helps AI engines understand what the page is about, who provides the service,
 * and where it fits in the site hierarchy.
 */

type Faq = {
  question: string;
  answer: string;
};

type Props = {
  serviceName: string;
  serviceDescription: string;
  pageUrl: string;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: Faq[];
};

export default function ServicePageSchema({
  serviceName,
  serviceDescription,
  pageUrl,
  breadcrumbs = [],
  faqs = [],
}: Props) {
  const graph: object[] = [
    {
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: serviceName,
      description: serviceDescription,
      isPartOf: { "@id": "https://www.shopifytasker.com/#website" },
      publisher: { "@id": "https://www.shopifytasker.com/#organization" },
      inLanguage: "en-US",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "h2", "[data-speakable]"],
      },
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: serviceName,
      description: serviceDescription,
      provider: {
        "@id": "https://www.shopifytasker.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      url: pageUrl,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20",
          priceCurrency: "USD",
          unitText: "per hour",
          description: "Rates start at $20/hr. Fixed-price quotes available.",
        },
        seller: { "@id": "https://www.shopifytasker.com/#organization" },
      },
    },
  ];

  if (breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.shopifytasker.com",
        },
        ...breadcrumbs.map((bc, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name: bc.name,
          item: bc.url,
        })),
      ],
    });
  }

  if (faqs.length > 0) {
    graph.push({
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
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
