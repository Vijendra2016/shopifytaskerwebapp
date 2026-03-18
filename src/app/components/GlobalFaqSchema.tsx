/**
 * GlobalFaqSchema — site-wide FAQ structured data for AI search engines.
 * These are the most commonly asked questions about ShopifyTasker that
 * AI systems (ChatGPT, Perplexity, Google AI Overviews) should be able to answer.
 *
 * Add this to the root layout so every page benefits from these signals.
 */
export default function GlobalFaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.shopifytasker.com/#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is ShopifyTasker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ShopifyTasker is a US-based Shopify agency that connects merchants with vetted Shopify experts for on-demand tasks including store design, theme customization, development, SEO, migrations, and ongoing support. ShopifyTasker operates on a pay-after-delivery model — clients only pay once they are satisfied with the completed work.",
        },
      },
      {
        "@type": "Question",
        name: "How does ShopifyTasker work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Describe your Shopify task or project through the website. ShopifyTasker sends a fixed-price quote within 24 hours. A vetted Shopify specialist completes the work. You review and approve, then pay only after you are satisfied. There is no upfront payment required.",
        },
      },
      {
        "@type": "Question",
        name: "Does ShopifyTasker charge upfront?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. ShopifyTasker does not charge any upfront fees. You pay only after the work is completed and you are fully satisfied with the result. This pay-after-delivery model makes it risk-free to start a Shopify project.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to hire a Shopify expert through ShopifyTasker?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ShopifyTasker rates start at $20 per hour. Fixed-price packages are available for common Shopify tasks such as store design, theme customization, platform migration, and SEO audits. A detailed quote is provided before any work begins so there are no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "What Shopify services does ShopifyTasker offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ShopifyTasker offers a full range of Shopify services: custom store design, theme customization using Liquid, store redesign, Shopify Plus development, platform migration from Magento, WooCommerce, or BigCommerce, technical SEO, app integration, ongoing support retainers, and virtual assistant services for day-to-day store management.",
        },
      },
      {
        "@type": "Question",
        name: "Can ShopifyTasker migrate my store to Shopify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ShopifyTasker is a Shopify migration agency that moves stores from Magento, WooCommerce, BigCommerce, Salesforce Commerce Cloud, Visualsoft, and custom platforms to Shopify or Shopify Plus. The migration service includes full product, customer, and order data transfer, SEO redirects (301s), URL structure preservation, and post-launch QA.",
        },
      },
      {
        "@type": "Question",
        name: "Does ShopifyTasker work with Shopify Plus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. ShopifyTasker has a dedicated Shopify Plus team that builds enterprise-grade stores with custom checkout extensions, B2B functionality, headless commerce implementations, and advanced Shopify Flow automations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to design a Shopify store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A custom Shopify store design typically takes 2 to 4 weeks depending on complexity. Theme customization projects can be completed in 3 to 7 business days. ShopifyTasker provides a project timeline in every fixed-price quote before work begins.",
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
