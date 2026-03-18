export default function SchemaOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.shopifytasker.com/#organization",
        name: "ShopifyTasker",
        alternateName: "Shopify Tasker",
        url: "https://www.shopifytasker.com",
        logo: {
          "@type": "ImageObject",
          url: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ee05feb6ce7c89fe4deabf_blackgackground.png",
          width: 200,
          height: 60,
        },
        description:
          "ShopifyTasker is a US-based Shopify agency connecting merchants with vetted Shopify experts for store design, development, migration, SEO, and ongoing support — with a pay-after-delivery model.",
        foundingDate: "2014",
        numberOfEmployees: {
          "@type": "QuantitativeValue",
          minValue: 25,
          maxValue: 50,
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        knowsAbout: [
          "Shopify store design",
          "Shopify theme customization",
          "Shopify development",
          "Shopify Plus development",
          "Shopify SEO",
          "Shopify migration",
          "eCommerce design",
          "Liquid template language",
          "Shopify app integration",
          "Shopify store optimization",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shopify Expert Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Store Design",
                url: "https://www.shopifytasker.com/shopify-store-design",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Theme Customization",
                url: "https://www.shopifytasker.com/theme-customization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Website Redesign",
                url: "https://www.shopifytasker.com/shopify-website-redesign-service",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify SEO",
                url: "https://www.shopifytasker.com/shopify-seo",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Plus Development",
                url: "https://www.shopifytasker.com/shopify-plus-development-agency",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Shopify Migration",
                url: "https://www.shopifytasker.com/shopify-expert-services",
              },
            },
          ],
        },
        sameAs: [
          "https://www.linkedin.com/company/shopifytasker/",
          "https://github.com/ShopifyTasker",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "support@shopifytasker.com",
          availableLanguage: "English",
        },
        priceRange: "$$",
        slogan: "Hire Shopify Experts On-Demand. Pay After Work is Done.",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.shopifytasker.com/#website",
        url: "https://www.shopifytasker.com",
        name: "ShopifyTasker",
        description:
          "On-demand Shopify experts for store design, development, SEO, and migrations. Pay only after work is done.",
        publisher: {
          "@id": "https://www.shopifytasker.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://www.shopifytasker.com/shopify-expert-services?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
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
