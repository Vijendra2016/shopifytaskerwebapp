/**
 * SpeakableSchema — adds Schema.org Speakable markup to a page.
 * This helps AI assistants (Google Assistant, Alexa, AI Overviews) identify
 * which sections of a page contain the most important, answer-worthy content.
 *
 * Usage: <SpeakableSchema pageUrl="https://www.shopifytasker.com/shopify-seo" cssSelectors={["h1", ".speakable"]} />
 */

type Props = {
  pageUrl: string;
  /** CSS selectors that point to the most answer-worthy content on the page */
  cssSelectors?: string[];
};

export default function SpeakableSchema({
  pageUrl,
  cssSelectors = ["h1", "h2", "[data-speakable]"],
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: pageUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
