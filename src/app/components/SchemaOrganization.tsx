import type { WithContext, Organization } from "schema-dts";

export default function SchemaOrganization() {
  const organizationSchema: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.shopifytasker.com/#organization",
    name: "ShopifyTasker",
    url: "https://www.shopifytasker.com",
    logo: "https://www.shopifytasker.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/shopifytasker/",
      "https://github.com/ShopifyTasker"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@shopifytasker.com"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema),
      }}
    />
  );
}
