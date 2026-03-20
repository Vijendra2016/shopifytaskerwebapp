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
      // Organization
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
          "ShopifyTasker is a top-rated Shopify development and web design agency offering theme customization, custom development, store setup, SEO, and ongoing support for Shopify stores worldwide.",
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

      // WebSite
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "ShopifyTasker",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },

      // WebPage
      {
        "@type": "WebPage",
        "@id": pageUrl,
        url: pageUrl,
        name: `Hire Shopify Web Designer in ${city}, ${state} | ShopifyTasker`,
        description: `Top-rated Shopify web designers in ${city}, ${state}. Custom store design, theme customization, mobile-first layouts, and ongoing support. Pay after work is done.`,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
        about: {
          "@id": `${pageUrl}#service`,
        },
      },

      // BreadcrumbList
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
        name: `Shopify Web Designer in ${city}, ${state}`,
        description: `Hire a top-rated Shopify web designer in ${city}, ${state}. We offer custom Shopify store design, theme customization, mobile-first UX, speed optimization, and ongoing design support.`,
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
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description:
              "Starting from $20/hr. Fixed-price project packages also available.",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shopify Web Design Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Custom Shopify Store Design",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Theme Customization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Store Redesign",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile-First Shopify Design",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Speed & Performance Optimization",
              },
            },
          ],
        },
      },

      // FAQPage
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
