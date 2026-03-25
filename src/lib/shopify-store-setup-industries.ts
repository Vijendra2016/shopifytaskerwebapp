export type IndustryData = {
  slug: string;
  name: string;
  tagline: string;
  headline: string;
  subheadline: string;
  description: string;
  accentColor: string;
  stats: { value: string; label: string }[];
  whyShopify: { title: string; desc: string }[];
  services: { title: string; desc: string; included: string[] }[];
  setupIncludes: string[];
  processSteps: { num: string; title: string; body: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  category: string;
};

export const industries: IndustryData[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // FLORIST
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "florist",
    name: "Florist & Flower Shop",
    tagline: "Sell bouquets, arrangements & subscriptions online",
    headline: "Shopify Store Setup for Florists & Flower Shops",
    subheadline:
      "Launch a high-converting Shopify flower shop with local delivery zones, bouquet subscriptions, same-day ordering cutoffs, and stunning product photography presentation.",
    description:
      "A florist Shopify store needs more than a basic product list — it needs local delivery logic, order cutoff times, subscription options, and seasonal collection management. We set up every element so your flower shop is ready to take orders from day one.",
    accentColor: "bg-pink-50",
    category: "Lifestyle & Gifts",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "40%+", label: "Avg conversion lift with proper setup" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "10+ years", label: "Shopify expertise" },
    ],
    whyShopify: [
      {
        title: "Local Delivery Zones",
        desc: "Set custom delivery radii, postcode-specific zones, and minimum order values for each delivery area — essential for any florist business.",
      },
      {
        title: "Same-Day Order Cutoffs",
        desc: "Shopify apps allow you to set daily order cutoff times, ensuring you only receive orders you can fulfil on any given day.",
      },
      {
        title: "Bouquet Subscriptions",
        desc: "Sell weekly or monthly flower subscriptions with automatic billing, delivery scheduling, and subscriber management.",
      },
      {
        title: "Seasonal Collections",
        desc: "Create Valentine's Day, Mother's Day, and wedding collections that go live and offline automatically on schedule.",
      },
      {
        title: "Gift Messaging",
        desc: "Let customers add personalised gift messages at checkout — a key feature for any gifting-focused store.",
      },
      {
        title: "Mobile-First Design",
        desc: "Over 70% of flower orders are placed on mobile. We build your store optimised for the smallest screen first.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "End-to-end Shopify store setup tailored for flower shops and floral businesses.",
        included: [
          "Theme installation & floral branding",
          "Product catalogue setup (bouquets, arrangements, add-ons)",
          "Local delivery zone configuration",
          "Order cutoff time setup",
          "Payment gateway & Stripe setup",
          "Domain connection & SSL",
        ],
      },
      {
        title: "Subscription & Recurring Orders",
        desc: "Set up bouquet subscription plans that bill and fulfil automatically.",
        included: [
          "Shopify subscription app integration",
          "Weekly / monthly plan setup",
          "Subscriber portal configuration",
          "Automatic delivery scheduling",
        ],
      },
      {
        title: "SEO & Launch Readiness",
        desc: "Ensure your florist store ranks for local searches before you launch.",
        included: [
          "Meta titles & descriptions",
          "Local SEO configuration",
          "Google Analytics & Search Console",
          "Sitemap submission",
        ],
      },
    ],
    setupIncludes: [
      "Shopify theme installation & customisation",
      "Product catalogue: bouquets, arrangements, plants, add-ons",
      "Local delivery zones & postcode rules",
      "Same-day / next-day order cutoff logic",
      "Payment gateway (Stripe, PayPal, Apple Pay)",
      "Shipping & delivery rate setup",
      "Gift message & card add-on at checkout",
      "Subscription / recurring order setup",
      "Domain connection & SSL certificate",
      "Mobile-optimised navigation & homepage",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA checklist & test orders",
    ],
    processSteps: [
      {
        num: "01",
        title: "Discovery & Branding Brief",
        body: "We gather your brand colours, logo, product list, delivery areas, and any existing accounts. This brief shapes every decision in the build.",
      },
      {
        num: "02",
        title: "Theme Installation & Design",
        body: "We install and customise a conversion-focused Shopify theme with your branding, typography, and floral imagery.",
      },
      {
        num: "03",
        title: "Products & Collections",
        body: "Every product is uploaded with optimised titles, descriptions, tags, and variants. Collections are structured for easy browsing.",
      },
      {
        num: "04",
        title: "Payments, Delivery & Apps",
        body: "Delivery zones, cutoff times, subscription setup, gift messaging, and all payment gateways are configured and tested.",
      },
      {
        num: "05",
        title: "QA, Launch & Handover",
        body: "We run a full pre-launch checklist, place test orders, confirm all flows work end-to-end, then hand over your store with a recorded walkthrough.",
      },
    ],
    faqs: [
      {
        q: "Can you set up local delivery zones for my flower shop?",
        a: "Yes. We configure Shopify's delivery settings and integrate apps to create postcode-specific delivery zones, minimum order values, and delivery fees by area.",
      },
      {
        q: "How long does it take to set up a Shopify store for a florist?",
        a: "A standard florist Shopify setup takes 3–5 business days. Complex subscription or multi-location setups may take 7–10 days.",
      },
      {
        q: "Can you set up same-day order cutoff times?",
        a: "Yes. We integrate order deadline apps that automatically stop accepting same-day or next-day orders after your chosen cutoff time each day.",
      },
      {
        q: "Can you set up flower subscriptions on Shopify?",
        a: "Absolutely. We integrate Shopify's native subscriptions or third-party apps like Appstle to create weekly and monthly bouquet subscription plans.",
      },
      {
        q: "Do I need to have a Shopify account before you start?",
        a: "No. We can create the Shopify account as part of the setup, or work within your existing account if you already have one.",
      },
      {
        q: "What happens after the store is set up?",
        a: "We provide a recorded walkthrough video showing you how to manage orders, add products, and update content. Ongoing support retainers are also available.",
      },
    ],
    metaTitle: "Florist & Flower Shop Shopify Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for florists. Delivery zones, bouquet subscriptions & same-day cutoffs. Live in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // KIDS FASHION
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "kids-fashion",
    name: "Kids Fashion & Children's Clothing",
    tagline: "Sell children's clothing & accessories online with confidence",
    headline: "Shopify Store Setup for Kids Fashion & Children's Clothing",
    subheadline:
      "Launch a Shopify children's clothing store with age-based size guides, variant management, gifting features, and a colourful brand experience that parents trust.",
    description:
      "Kids fashion stores have unique requirements — detailed size charts, age-range filtering, variant-heavy product catalogues, and a visual brand that appeals to both parents and children. We set up your Shopify store to handle all of it from day one.",
    accentColor: "bg-blue-50",
    category: "Fashion & Apparel",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "Size charts", label: "Age-based size guides included" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Multi-variant", label: "Size, colour & age setup" },
    ],
    whyShopify: [
      {
        title: "Advanced Variant Management",
        desc: "Shopify handles size, colour, age range, and gender variants seamlessly — perfect for children's clothing with large product catalogues.",
      },
      {
        title: "Size Guide Integration",
        desc: "Built-in or app-based size guides displayed on every product page, reducing returns and increasing buyer confidence.",
      },
      {
        title: "Age-Based Collections",
        desc: "Organise products by age range (0–2, 3–5, 6–9 years etc.) so parents can find the right items instantly.",
      },
      {
        title: "Gift Options",
        desc: "Gift wrapping, personalised messages, and gift receipt options — because children's clothing is one of the most gifted categories online.",
      },
      {
        title: "Seasonal & Sale Management",
        desc: "Schedule seasonal collections, back-to-school sales, and clearance events automatically with Shopify's built-in tools.",
      },
      {
        title: "Parent-Trusted Checkout",
        desc: "Fast checkout with multiple payment options, clear return policies, and trust signals that convert first-time parent buyers.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup tailored for children's clothing brands and kids fashion retailers.",
        included: [
          "Theme installation with child-friendly design",
          "Product upload with full variant setup",
          "Age-range collection structure",
          "Size guide configuration",
          "Payment & shipping setup",
          "Domain connection",
        ],
      },
      {
        title: "Product Catalogue Organisation",
        desc: "Structure your product range for maximum discoverability and easy browsing.",
        included: [
          "Collections by age, gender, category",
          "Tag-based filtering setup",
          "Bundle & multi-buy discount setup",
          "Cross-sell & upsell configuration",
        ],
      },
      {
        title: "Launch & Growth Setup",
        desc: "Everything needed to drive traffic and convert visitors from day one.",
        included: [
          "Google Analytics 4 & Meta Pixel",
          "Search engine optimisation basics",
          "Email capture & welcome flow",
          "Pre-launch QA & test orders",
        ],
      },
    ],
    setupIncludes: [
      "Shopify theme installation & kids brand customisation",
      "Full product upload with size, colour, age variants",
      "Age-range & gender collection structure",
      "Detailed size charts per product",
      "Gift wrapping & personalised message options",
      "Payment gateway (Stripe, Klarna, PayPal)",
      "Shipping zones & tracked delivery setup",
      "Returns policy page & trust signals",
      "Domain connection & SSL certificate",
      "Mobile-first navigation & homepage hero",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order flow",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Product Brief",
        body: "We review your product catalogue, brand guidelines, target age ranges, and any existing product images or data.",
      },
      {
        num: "02",
        title: "Theme & Design Setup",
        body: "A vibrant, parent-friendly Shopify theme is installed and customised to match your brand colours, logo, and visual identity.",
      },
      {
        num: "03",
        title: "Product & Variant Upload",
        body: "Every product is uploaded with all size and colour variants, age-range tags, and optimised product descriptions.",
      },
      {
        num: "04",
        title: "Payments, Shipping & Apps",
        body: "Payment gateways, shipping rates, gift options, and size guide apps are configured and thoroughly tested.",
      },
      {
        num: "05",
        title: "QA, Launch & Handover",
        body: "Full end-to-end testing, test order placement, and a recorded store walkthrough before you go live.",
      },
    ],
    faqs: [
      {
        q: "Can you set up size guides for each age range?",
        a: "Yes. We configure size guides either natively or via a Shopify app so they appear on every relevant product page and reduce return rates.",
      },
      {
        q: "How do you structure collections for a kids clothing store?",
        a: "We create collections by age range, gender, clothing type (tops, bottoms, outerwear), and season, with filtering so parents can narrow results quickly.",
      },
      {
        q: "Can you set up buy X get Y or bundle discounts?",
        a: "Yes. We configure Shopify's built-in discounts or integrate an app for bundle deals like buy 3 get 1 free, which work well for kids basics.",
      },
      {
        q: "Do you upload the products as part of the setup?",
        a: "Yes. We upload your product catalogue including all variants, descriptions, tags, and images as part of the standard setup package.",
      },
      {
        q: "Can you set up Klarna or Buy Now Pay Later for parents?",
        a: "Absolutely. We configure BNPL options including Klarna, Afterpay, and Clearpay depending on your target market.",
      },
      {
        q: "How long does setup take for a kids fashion store?",
        a: "3–5 business days for stores with up to 100 products. Larger catalogues may take up to 7–10 days.",
      },
    ],
    metaTitle: "Shopify Store Setup for Kids Fashion Brands | ShopifyTasker",
    metaDescription:
      "Shopify setup for kids fashion brands. Age collections, size guides & gift options. Launch in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HANDMADE SOAP
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "handmade-soap",
    name: "Handmade Soap & Natural Beauty",
    tagline: "Sell artisan soaps, bath bombs & natural skincare online",
    headline: "Shopify Store Setup for Handmade Soap & Natural Beauty Brands",
    subheadline:
      "Launch your artisan soap or natural beauty Shopify store with ingredient transparency, wholesale ordering, bundle sets, and the earthy brand aesthetic your products deserve.",
    description:
      "Handmade soap and natural beauty brands thrive on trust and transparency. Your Shopify store needs ingredient lists, certifications, beautiful product photography presentation, and wholesale capabilities. We build stores that reflect the care that goes into your products.",
    accentColor: "bg-green-50",
    category: "Beauty & Wellness",
    stats: [
      { value: "2–4 days", label: "Average setup time" },
      { value: "Wholesale", label: "B2B wholesale pricing available" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Subscription", label: "Soap subscription boxes supported" },
    ],
    whyShopify: [
      {
        title: "Ingredient Transparency",
        desc: "Display full ingredient lists, certifications (vegan, cruelty-free, organic), and allergen information on every product page.",
      },
      {
        title: "Bundle & Gift Sets",
        desc: "Create gift sets and bundle products with a few clicks — perfect for the gifting-heavy soap and beauty market.",
      },
      {
        title: "Subscription Boxes",
        desc: "Monthly soap subscription boxes with recurring billing, personalisation options, and subscriber management.",
      },
      {
        title: "Wholesale B2B Portal",
        desc: "Offer bulk pricing to spas, boutiques, and retailers through a password-protected wholesale portal.",
      },
      {
        title: "Scent & Variant Options",
        desc: "Set up scent, size, and packaging variants cleanly, with swatch-based selection for a luxury feel.",
      },
      {
        title: "Artisan Brand Storytelling",
        desc: "Shopify themes support rich brand storytelling — about pages, process videos, and maker story sections that build buyer trust.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for handmade soap and natural beauty brands.",
        included: [
          "Earthy, artisan theme installation",
          "Product upload with scent/size variants",
          "Ingredient & certification display",
          "Bundle & gift set configuration",
          "Payment & shipping setup",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Wholesale & Subscription",
        desc: "Grow beyond retail with B2B wholesale and subscription revenue streams.",
        included: [
          "Wholesale app integration & pricing tiers",
          "B2B application form setup",
          "Subscription box app setup",
          "Subscriber management portal",
        ],
      },
      {
        title: "Brand & SEO Foundation",
        desc: "A brand story that converts and search visibility that grows.",
        included: [
          "Brand story / about page",
          "SEO meta setup",
          "Google Analytics & Meta Pixel",
          "Email capture & newsletter signup",
        ],
      },
    ],
    setupIncludes: [
      "Artisan Shopify theme installation & branding",
      "Product upload with scent, size, fragrance variants",
      "Ingredient list & certification display",
      "Bundle builder & gift set configuration",
      "Wholesale pricing tiers (optional)",
      "Subscription box app setup (optional)",
      "Payment gateway & multiple payment methods",
      "Flat rate & weight-based shipping setup",
      "Custom packaging note at checkout",
      "Domain connection & SSL certificate",
      "About / maker story page",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Product Discovery",
        body: "We review your product list, scents/variants, brand aesthetic, certifications, and any existing imagery or content.",
      },
      {
        num: "02",
        title: "Theme & Aesthetic Setup",
        body: "An earthy, natural Shopify theme is installed and customised with your colour palette, fonts, and brand voice.",
      },
      {
        num: "03",
        title: "Products, Variants & Ingredients",
        body: "Products are uploaded with all variants, ingredient lists, certifications, and compelling descriptions.",
      },
      {
        num: "04",
        title: "Bundles, Wholesale & Apps",
        body: "Bundle sets, wholesale pricing, subscription boxes, and any additional apps are configured and tested.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded store walkthrough so you can manage your store confidently from day one.",
      },
    ],
    faqs: [
      {
        q: "Can you display ingredient lists on each product page?",
        a: "Yes. We add ingredient sections to each product page, either in the description, a custom metafield, or a dedicated tab — whichever suits your store's design.",
      },
      {
        q: "Can you set up a wholesale ordering system on Shopify?",
        a: "Absolutely. We integrate wholesale apps like Wholesale Club or Shopify's B2B features to offer tiered pricing to retail buyers.",
      },
      {
        q: "Can you create gift set bundles on Shopify?",
        a: "Yes. We either use Shopify bundles natively or a bundle app to let customers create custom gift sets or purchase pre-set kits.",
      },
      {
        q: "Do you support subscription soap boxes?",
        a: "Yes. We integrate Appstle or Recharge subscriptions to sell monthly or quarterly soap boxes with automatic recurring billing.",
      },
      {
        q: "What shipping setup do you recommend for handmade soap?",
        a: "We typically configure weight-based shipping with Royal Mail or your preferred carrier, including tracked options for higher-value orders.",
      },
      {
        q: "How long does setup take for a handmade soap store?",
        a: "A standard setup takes 2–4 business days depending on product count and the features required.",
      },
    ],
    metaTitle: "Handmade Soap & Beauty Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for handmade soap brands. Ingredient display, bundles & subscriptions. Launch in 2–4 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CUSTOM JEWELLERY
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "custom-jewellery",
    name: "Custom Jewellery & Accessories",
    tagline: "Sell bespoke, personalised & fine jewellery online",
    headline: "Shopify Store Setup for Custom Jewellery & Accessories",
    subheadline:
      "Launch a luxury Shopify jewellery store with personalisation options, engraving requests, made-to-order workflows, and the premium presentation your pieces deserve.",
    description:
      "Custom jewellery stores require personalisation fields, high-res zoom-capable photography, made-to-order lead times, precious metal variants, and a checkout experience that matches the premium nature of your products. We build jewellery Shopify stores that convert browsers into buyers.",
    accentColor: "bg-yellow-50",
    category: "Lifestyle & Gifts",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Personalisation", label: "Engraving & custom text fields" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Luxury UX", label: "Premium checkout experience" },
    ],
    whyShopify: [
      {
        title: "Personalisation & Engraving",
        desc: "Custom text fields at the product level let customers specify engraving text, initials, dates, or personalisation notes before adding to cart.",
      },
      {
        title: "Made-to-Order Lead Times",
        desc: "Display custom lead times per product and manage customer expectations through automated order confirmation emails.",
      },
      {
        title: "Metal & Stone Variants",
        desc: "Set up gold, silver, rose gold, and gemstone variants cleanly with swatch-based selection and price differentials.",
      },
      {
        title: "High-Resolution Zoom",
        desc: "Shopify supports high-res product images with zoom functionality — essential for showcasing jewellery craftsmanship.",
      },
      {
        title: "Gift Packaging Options",
        desc: "Let customers choose gift packaging, add-on jewellery boxes, or gift messages at checkout.",
      },
      {
        title: "Secure, Premium Checkout",
        desc: "Multiple payment options including Klarna, Apple Pay, and card — with the trust signals luxury buyers expect.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for custom and fine jewellery brands.",
        included: [
          "Luxury theme installation & jewellery branding",
          "Product upload with metal/stone variants",
          "Personalisation / engraving fields",
          "Made-to-order lead time display",
          "Payment & secure checkout setup",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Personalisation & Custom Orders",
        desc: "Set up the custom order workflow that jewellery buyers expect.",
        included: [
          "Product personalisation fields (text, date, initials)",
          "Ring sizer tool integration",
          "Custom order enquiry form",
          "Lead time notifications",
        ],
      },
      {
        title: "Trust & Conversion",
        desc: "Build the trust that drives high-value jewellery purchases.",
        included: [
          "Trust badges & secure payment icons",
          "Returns & lifetime guarantee policy pages",
          "Customer review integration",
          "SEO meta & structured data",
        ],
      },
    ],
    setupIncludes: [
      "Premium jewellery Shopify theme installation",
      "Product upload with metal, stone, size variants",
      "Personalisation / engraving custom input fields",
      "Ring sizer or measurement guide",
      "Made-to-order lead time display per product",
      "Gift box & packaging options at checkout",
      "Secure payment gateway (Stripe, Klarna, Apple Pay)",
      "Jewellery-specific shipping (insured, tracked)",
      "Returns & care policy pages",
      "Domain connection & SSL certificate",
      "Customer review app setup",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Product Discovery",
        body: "We review your jewellery catalogue, metal/stone variants, personalisation requirements, and brand aesthetic.",
      },
      {
        num: "02",
        title: "Luxury Theme Design",
        body: "A premium, minimal Shopify theme is installed and customised with your brand identity, showcasing your jewellery beautifully.",
      },
      {
        num: "03",
        title: "Products & Personalisation",
        body: "Products are uploaded with all variants, personalisation fields, lead times, and optimised product descriptions.",
      },
      {
        num: "04",
        title: "Checkout & Trust Setup",
        body: "Payment gateways, gift packaging, trust signals, and review apps are configured and tested.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order placement, and a recorded walkthrough of your complete store.",
      },
    ],
    faqs: [
      {
        q: "Can you set up engraving text fields on product pages?",
        a: "Yes. We add custom line item properties (text input fields) directly on product pages where customers can enter their personalisation details before adding to cart.",
      },
      {
        q: "How do you handle made-to-order products on Shopify?",
        a: "We configure lead time text on product pages, set inventory to continue selling when out of stock (for MTO), and set up automated order confirmation emails stating the production timeline.",
      },
      {
        q: "Can you set up ring sizing options?",
        a: "Yes. We configure ring size variants and can integrate a ring sizer tool or measurement guide to help customers order the correct size.",
      },
      {
        q: "Can you set up different prices for gold, silver, and rose gold?",
        a: "Absolutely. Metal variants can have separate price points using Shopify's variant pricing system.",
      },
      {
        q: "Do you set up insured or tracked shipping for jewellery?",
        a: "Yes. We configure appropriate shipping carriers and rates, including insured tracked options for higher-value jewellery orders.",
      },
      {
        q: "How long does setup take for a jewellery store?",
        a: "Typically 3–6 business days depending on product count, personalisation complexity, and any custom functionality required.",
      },
    ],
    metaTitle: "Custom Jewellery Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for jewellery brands. Personalisation fields, engraving & luxury checkout. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // PET STORE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "pet-store",
    name: "Pet Store & Pet Supplies",
    tagline: "Sell pet food, accessories & grooming products online",
    headline: "Shopify Store Setup for Pet Stores & Pet Supply Brands",
    subheadline:
      "Launch a Shopify pet store with subscription pet food, breed-specific filtering, auto-ship features, and a checkout experience that pet owners trust.",
    description:
      "Pet owners are passionate, loyal buyers. A well-structured Shopify pet store with auto-ship subscriptions, pet type filtering, and subscription-based food delivery can generate significant recurring revenue. We set up everything from day one.",
    accentColor: "bg-orange-50",
    category: "Pets & Animals",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "Auto-ship", label: "Subscription & repeat delivery" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "High LTV", label: "Recurring revenue from subscriptions" },
    ],
    whyShopify: [
      {
        title: "Auto-Ship Subscriptions",
        desc: "Set up monthly pet food subscriptions with automatic billing, flexible frequency options, and easy pause/cancel for customers.",
      },
      {
        title: "Pet Type Filtering",
        desc: "Filter products by pet type (dogs, cats, rabbits, birds) so customers only see relevant products for their animals.",
      },
      {
        title: "Breed & Size Variants",
        desc: "Handle pet-specific sizing — dog coats by breed size, food portions by weight, and accessories by species.",
      },
      {
        title: "Bulk Buy Savings",
        desc: "Encourage larger basket sizes with bulk buy discount tiers — great for pet food and consumable products.",
      },
      {
        title: "Loyalty Programmes",
        desc: "Reward repeat buyers with points-based loyalty programmes that keep pet owners coming back every month.",
      },
      {
        title: "Vet & Expert Endorsements",
        desc: "Display vet-recommended badges, nutritional information, and expert endorsements to build buyer confidence.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for pet stores, pet food brands, and accessories retailers.",
        included: [
          "Pet-friendly theme installation & branding",
          "Product catalogue with pet type filtering",
          "Subscription / auto-ship setup",
          "Payment & shipping configuration",
          "Domain & SSL connection",
          "Pre-launch QA",
        ],
      },
      {
        title: "Subscriptions & Loyalty",
        desc: "Build recurring revenue with subscription and loyalty features.",
        included: [
          "Pet food subscription app integration",
          "Frequency options (weekly, monthly, bi-monthly)",
          "Points-based loyalty programme",
          "Customer subscription portal",
        ],
      },
      {
        title: "Catalogue & UX",
        desc: "A product structure that makes shopping for pet products effortless.",
        included: [
          "Collections by pet type & category",
          "Breed/size variant configuration",
          "Bulk buy discount setup",
          "Product recommendation setup",
        ],
      },
    ],
    setupIncludes: [
      "Shopify theme installation & pet brand customisation",
      "Product upload with pet type, breed, size variants",
      "Collections by pet type (dogs, cats, birds, etc.)",
      "Auto-ship / subscription app integration",
      "Bulk buy discount configuration",
      "Payment gateway setup (multiple methods)",
      "Shipping zones & rates (inc. heavy goods)",
      "Vet endorsement & trust badges",
      "Domain connection & SSL certificate",
      "Google Analytics 4 & Meta Pixel",
      "Loyalty programme app (optional)",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Discovery & Catalogue Review",
        body: "We review your product catalogue, pet categories, subscription requirements, and brand guidelines.",
      },
      {
        num: "02",
        title: "Theme & Brand Setup",
        body: "A friendly, trust-focused Shopify theme is installed and customised to your pet brand's identity.",
      },
      {
        num: "03",
        title: "Products & Collections",
        body: "All products are uploaded with pet type tags, size variants, and nutritional/product information.",
      },
      {
        num: "04",
        title: "Subscriptions, Discounts & Apps",
        body: "Auto-ship subscriptions, bulk discounts, loyalty app, and all payment/shipping configuration is completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "End-to-end QA, test order, and recorded walkthrough so you're ready to start selling.",
      },
    ],
    faqs: [
      {
        q: "Can you set up auto-ship for pet food on Shopify?",
        a: "Yes. We integrate subscription apps like Appstle, Seal Subscriptions, or Recharge to create weekly and monthly auto-ship options for pet food.",
      },
      {
        q: "Can you filter products by pet type?",
        a: "Absolutely. We create collections and tag-based filtering for each pet type so customers only browse products relevant to their pet.",
      },
      {
        q: "Can you set up bulk buy discounts for pet food?",
        a: "Yes. We configure volume discount tiers (e.g., buy 3 bags save 10%, buy 6 save 15%) using Shopify's native discounts or a volume pricing app.",
      },
      {
        q: "How do you handle heavy goods shipping for pet food?",
        a: "We configure weight-based shipping rates with appropriate carriers for bulky or heavy products, including threshold-based free delivery.",
      },
      {
        q: "Can you set up a loyalty points programme?",
        a: "Yes. We integrate loyalty apps like Smile.io or Loyaltylion to reward repeat pet owners with points they can redeem on future orders.",
      },
      {
        q: "How long does setup take for a pet store?",
        a: "3–5 business days for a standard pet store setup. Larger catalogues or complex subscription setups may take up to 7 days.",
      },
    ],
    metaTitle: "Shopify Store Setup for Pet Stores & Brands | ShopifyTasker",
    metaDescription:
      "Shopify setup for pet stores. Auto-ship subscriptions, breed filtering & bulk discounts. Launch in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HOME DECOR
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "home-decor",
    name: "Home Decor & Interiors",
    tagline: "Sell furniture, homeware & interior products online",
    headline: "Shopify Store Setup for Home Decor & Interior Brands",
    subheadline:
      "Launch a Shopify home decor store with room-based collections, lifestyle photography layouts, large catalogue management, and delivery options designed for furniture and fragile goods.",
    description:
      "Home decor and interiors brands need a Shopify setup that handles large products, freight shipping, room-based navigation, lifestyle imagery, and the considered buying journey of home shoppers. We build stores that inspire and convert.",
    accentColor: "bg-stone-50",
    category: "Home & Living",
    stats: [
      { value: "4–7 days", label: "Average setup time" },
      { value: "Room nav", label: "Room-based collection structure" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Freight", label: "Large item shipping configured" },
    ],
    whyShopify: [
      {
        title: "Room-Based Navigation",
        desc: "Organise products by room (living room, bedroom, kitchen, bathroom) so customers can shop for a complete look.",
      },
      {
        title: "Lifestyle Photography",
        desc: "Shopify themes support full-width lifestyle imagery that shows products in context — crucial for home decor purchasing decisions.",
      },
      {
        title: "Freight & Large Item Shipping",
        desc: "Configure freight shipping options, white-glove delivery, and weight-based rates for furniture and large homeware.",
      },
      {
        title: "Colour & Finish Variants",
        desc: "Set up colour swatches, material variants, and size options for furniture and accessories cleanly.",
      },
      {
        title: "Interior Style Collections",
        desc: "Create style-based collections (Scandi, Industrial, Boho, Minimalist) to help customers find products that match their aesthetic.",
      },
      {
        title: "Wishlist & Save for Later",
        desc: "Home decor is a considered purchase. Wishlist functionality lets customers save and return when they're ready to buy.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for home decor, interiors, and homeware brands.",
        included: [
          "Lifestyle-focused theme installation",
          "Room & style collection structure",
          "Product upload with colour/material variants",
          "Freight & large item shipping setup",
          "Payment configuration",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Catalogue & Navigation",
        desc: "A product structure that mirrors how interior shoppers think.",
        included: [
          "Room-based & style-based collections",
          "Colour swatch variant display",
          "Bundle & set discounts",
          "Wishlist app integration",
        ],
      },
      {
        title: "Trust & Conversion",
        desc: "Convert browsing home shoppers into confident buyers.",
        included: [
          "Interior designer endorsement sections",
          "Customer review integration",
          "Returns & delivery policy pages",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Lifestyle Shopify theme installation & branding",
      "Room-based collection structure (living, bedroom, etc.)",
      "Product upload with colour, size, material variants",
      "Colour swatch display on collection pages",
      "Freight shipping & large item delivery rates",
      "White-glove delivery option (if applicable)",
      "Payment gateway setup",
      "Wishlist app integration",
      "Returns & lead time policy pages",
      "Domain connection & SSL certificate",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Catalogue Brief",
        body: "We review your product range, room categories, shipping requirements, and brand aesthetic.",
      },
      {
        num: "02",
        title: "Theme & Visual Design",
        body: "A lifestyle-photography-forward Shopify theme is installed and customised to your interior brand identity.",
      },
      {
        num: "03",
        title: "Products & Collections",
        body: "All products are uploaded with room tags, style tags, colour/material variants, and delivery information.",
      },
      {
        num: "04",
        title: "Shipping, Apps & Checkout",
        body: "Freight shipping, wishlist, payment gateways, and any additional apps are configured and tested.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough ensuring you can manage your store with confidence.",
      },
    ],
    faqs: [
      {
        q: "Can you set up freight or large item shipping on Shopify?",
        a: "Yes. We configure weight and dimension-based shipping rules, including freight carriers and flat rates for large or heavy items.",
      },
      {
        q: "How should I structure collections for a home decor store?",
        a: "We recommend a dual structure: by room (living room, bedroom, kitchen) AND by style (Scandi, Industrial, Boho) so customers can browse both ways.",
      },
      {
        q: "Can you display colour swatches on collection pages?",
        a: "Yes. We configure colour variant swatches to display on collection pages so customers can see available colours without entering each product page.",
      },
      {
        q: "Can you add a wishlist feature?",
        a: "Absolutely. We integrate a wishlist app so customers can save products and return later — particularly important for considered purchase categories.",
      },
      {
        q: "Do you handle lead times for made-to-order furniture?",
        a: "Yes. We display lead times on individual products and configure order notification emails to communicate expected delivery timelines.",
      },
      {
        q: "How long does setup take for a home decor store?",
        a: "4–7 business days depending on catalogue size and whether freight or custom shipping logic is required.",
      },
    ],
    metaTitle: "Shopify Store Setup for Home Decor Brands | ShopifyTasker",
    metaDescription:
      "Shopify setup for home decor brands. Room collections, lifestyle themes & wishlist. Launch in 4–7 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FOOD & BEVERAGE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    tagline: "Sell artisan food, drinks & gourmet products online",
    headline: "Shopify Store Setup for Food & Beverage Brands",
    subheadline:
      "Launch your food or drink Shopify store with subscription boxes, allergen information, cold-chain shipping, wholesale ordering, and compliance-ready product pages.",
    description:
      "Food and beverage Shopify stores need allergen transparency, cold-chain shipping options, subscription boxes, and compliance-ready labelling. Whether you sell hot sauce, craft beer, gourmet hampers, or artisan coffee — we build your store right.",
    accentColor: "bg-red-50",
    category: "Food & Drink",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "Subscriptions", label: "Food box subscriptions supported" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Wholesale", label: "B2B wholesale ordering" },
    ],
    whyShopify: [
      {
        title: "Allergen & Nutritional Info",
        desc: "Display full allergen information, nutritional panels, and ingredient lists clearly on every product page.",
      },
      {
        title: "Food Subscription Boxes",
        desc: "Monthly food subscription boxes with recurring billing, delivery scheduling, and easy subscriber management.",
      },
      {
        title: "Cold Chain Shipping",
        desc: "Configure cold-chain and refrigerated delivery options, including day-specific delivery slots and packaging surcharges.",
      },
      {
        title: "Age Verification",
        desc: "For alcohol and age-restricted products, configure age verification gates compliant with your country's regulations.",
      },
      {
        title: "Wholesale Ordering",
        desc: "Offer minimum order quantities, bulk pricing, and a wholesale portal for restaurants and retailers.",
      },
      {
        title: "Seasonal & Limited Editions",
        desc: "Create seasonal products, limited edition drops, and pre-order items for holiday gifting and special releases.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for food brands, artisan producers, and beverage companies.",
        included: [
          "Food-focused theme installation & branding",
          "Product upload with allergen & nutritional info",
          "Subscription box setup",
          "Cold-chain shipping configuration",
          "Payment & domain setup",
          "Pre-launch QA",
        ],
      },
      {
        title: "Wholesale & B2B",
        desc: "Sell to restaurants, cafes, and retailers at scale.",
        included: [
          "Wholesale pricing tiers",
          "Minimum order quantity rules",
          "B2B application form",
          "Invoice / NET payment terms",
        ],
      },
      {
        title: "Compliance & Trust",
        desc: "A legally compliant, trust-building store setup.",
        included: [
          "Allergen & labelling compliance pages",
          "Age verification gate (alcohol)",
          "Returns & shelf life policy",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Food-focused Shopify theme installation",
      "Product upload with nutritional & allergen info",
      "Subscription box app integration",
      "Cold-chain / refrigerated shipping rules",
      "Age verification gate (for alcohol)",
      "Wholesale pricing & MOQ configuration",
      "Payment gateway (Stripe, PayPal, Apple Pay)",
      "Gift hamper builder / bundle setup",
      "Shelf life & freshness policy pages",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Compliance Brief",
        body: "We review your product list, allergen requirements, shipping needs, and any age restriction or compliance requirements.",
      },
      {
        num: "02",
        title: "Theme & Brand Design",
        body: "A food-focused, appetite-stimulating Shopify theme is installed and customised to your brand identity.",
      },
      {
        num: "03",
        title: "Products, Labels & Collections",
        body: "Products are uploaded with allergen info, nutritional data, shelf life notes, and organised into logical collections.",
      },
      {
        num: "04",
        title: "Subscriptions, Wholesale & Shipping",
        body: "Subscription boxes, wholesale pricing, cold-chain shipping, and payment gateways are all configured.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, compliance check, test order, and recorded walkthrough before your store goes live.",
      },
    ],
    faqs: [
      {
        q: "Can you display allergen information on product pages?",
        a: "Yes. We add allergen sections to each product page using custom metafields or dedicated content sections, clearly displayed for customer safety.",
      },
      {
        q: "Can you set up a food subscription box on Shopify?",
        a: "Absolutely. We integrate subscription apps to create monthly or quarterly food boxes with recurring billing and subscriber management.",
      },
      {
        q: "How do you handle alcohol sales and age verification?",
        a: "We integrate an age verification app that requires users to confirm their age before accessing alcohol products or completing checkout.",
      },
      {
        q: "Can you configure cold-chain or time-slot delivery?",
        a: "Yes. We configure shipping rules for cold products including refrigerated delivery options, day-of-week restrictions, and packaging surcharges.",
      },
      {
        q: "Can you set up wholesale pricing for restaurants and cafes?",
        a: "Yes. We use Shopify's B2B features or wholesale apps to create trade pricing tiers and minimum order quantities for business buyers.",
      },
      {
        q: "How long does setup take for a food brand?",
        a: "3–5 business days for a standard food store. Subscription, wholesale, or cold-chain requirements may extend this to 7 days.",
      },
    ],
    metaTitle: "Shopify Store Setup for Food & Drink Brands | ShopifyTasker",
    metaDescription:
      "Shopify setup for food brands. Allergen info, subscriptions & cold-chain shipping. Launch in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FASHION & CLOTHING
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "fashion-clothing",
    name: "Fashion & Clothing Brand",
    tagline: "Launch your fashion brand on Shopify",
    headline: "Shopify Store Setup for Fashion & Clothing Brands",
    subheadline:
      "Launch a high-converting Shopify fashion store with size guides, lookbook collections, influencer discount codes, BNPL checkout, and the brand presence your clothing deserves.",
    description:
      "Fashion brands need more than a product list — they need lookbooks, size guides, influencer affiliate codes, BNPL payment options, and return management workflows. We build Shopify fashion stores that convert browsers into customers.",
    accentColor: "bg-purple-50",
    category: "Fashion & Apparel",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "BNPL ready", label: "Klarna / Afterpay configured" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Lookbooks", label: "Seasonal campaign structure" },
    ],
    whyShopify: [
      {
        title: "Size Guide Integration",
        desc: "Detailed size guides per product and category, reducing return rates and increasing buyer confidence for every purchase.",
      },
      {
        title: "Lookbook Collections",
        desc: "Create seasonal lookbooks and outfit pairings that drive cross-sells and increase average order value.",
      },
      {
        title: "BNPL & Flexible Payments",
        desc: "Klarna, Afterpay, and Clearpay integrations — essential for fashion purchases, increasing conversion for higher-priced items.",
      },
      {
        title: "Influencer Discount Codes",
        desc: "Set up unique referral and discount codes for influencer partnerships, tracked through Shopify's discount system.",
      },
      {
        title: "Return Management",
        desc: "Configure a returns portal that automates the exchange and refund process, reducing customer service workload.",
      },
      {
        title: "Inventory Management",
        desc: "Real-time stock levels, low stock alerts, and sold-out notifications that create urgency and manage customer expectations.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for fashion and clothing brands of all sizes.",
        included: [
          "Fashion theme installation & brand identity",
          "Product upload with full size & colour variants",
          "Size guide per product/category",
          "BNPL payment setup (Klarna, Afterpay)",
          "Shipping & returns configuration",
          "Domain & SSL",
        ],
      },
      {
        title: "Brand & Conversion",
        desc: "The brand tools that turn visitors into buyers and buyers into repeat customers.",
        included: [
          "Lookbook / editorial collection setup",
          "Outfit cross-sell / pair it with feature",
          "Influencer discount code setup",
          "Exit-intent popup configuration",
        ],
      },
      {
        title: "Operations & Growth",
        desc: "Backend operations that keep your fashion store running smoothly.",
        included: [
          "Returns portal setup",
          "Inventory alert configuration",
          "Email capture & welcome discount",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Fashion-forward Shopify theme installation",
      "Product upload with size, colour, length variants",
      "Detailed size guide per category",
      "BNPL: Klarna, Afterpay, Clearpay setup",
      "Seasonal lookbook collection structure",
      "Outfit cross-sell / complete the look section",
      "Influencer & affiliate discount code setup",
      "Returns portal configuration",
      "Shipping zones & tracked delivery rates",
      "Domain connection & SSL certificate",
      "Google Analytics 4, Meta Pixel & TikTok Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Catalogue Discovery",
        body: "We review your product range, brand identity, target audience, size range, and influencer/marketing strategy.",
      },
      {
        num: "02",
        title: "Theme & Fashion Design",
        body: "A visually striking, editorial Shopify theme is installed and customised to your brand's aesthetic.",
      },
      {
        num: "03",
        title: "Products, Variants & Size Guides",
        body: "All products uploaded with full variants, detailed size guides, styling notes, and fabric information.",
      },
      {
        num: "04",
        title: "Payments, BNPL & Apps",
        body: "BNPL configuration, returns portal, influencer codes, and all payment/shipping setup completed and tested.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "End-to-end QA, test purchase, and full walkthrough of your fashion store management.",
      },
    ],
    faqs: [
      {
        q: "Can you set up Klarna or Afterpay for a fashion store?",
        a: "Yes. We configure BNPL providers including Klarna, Afterpay, and Clearpay during payment gateway setup — these are proven to increase conversion for fashion brands.",
      },
      {
        q: "Can you create lookbook-style editorial collections?",
        a: "Absolutely. We set up editorial collections, seasonal campaign pages, and outfit pairings that present your products in an aspirational, brand-led way.",
      },
      {
        q: "Do you set up influencer discount codes?",
        a: "Yes. We create the discount code structure in Shopify so influencer-specific codes can be issued, tracked, and managed easily.",
      },
      {
        q: "Can you configure a returns and exchange portal?",
        a: "Yes. We set up a self-service returns portal so customers can initiate returns or exchanges without contacting your team, reducing support workload.",
      },
      {
        q: "How do you handle multiple clothing variants?",
        a: "Shopify supports up to 3 variant options (e.g., size, colour, length) per product. We structure variants cleanly with clear labels and swatch-based colour selection.",
      },
      {
        q: "How long does setup take for a fashion brand?",
        a: "3–6 business days depending on catalogue size, variant complexity, and the number of additional apps required.",
      },
    ],
    metaTitle: "Fashion & Clothing Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for fashion brands. Size guides, lookbooks & returns portal. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HEALTH & WELLNESS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    tagline: "Sell supplements, fitness & wellness products online",
    headline: "Shopify Store Setup for Health & Wellness Brands",
    subheadline:
      "Launch a compliant Shopify health and wellness store with subscription supplements, compliance-safe copy, bundle stacks, loyalty programmes, and the trust signals wellness buyers demand.",
    description:
      "Health and wellness Shopify stores must balance conversion-optimised copy with regulatory compliance. We build supplement, fitness, and wellness stores that comply with advertising regulations while driving strong conversion rates.",
    accentColor: "bg-teal-50",
    category: "Health & Wellness",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Compliant", label: "Health claim compliance setup" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Subscriptions", label: "Supplement subscribe & save" },
    ],
    whyShopify: [
      {
        title: "Subscribe & Save",
        desc: "Sell supplements on a subscribe-and-save model with discounted recurring orders — the standard for supplement DTC brands.",
      },
      {
        title: "Compliance-Ready Copy",
        desc: "We configure your store with disclaimer sections, ingredient transparency, and copy that navigates health claim regulations.",
      },
      {
        title: "Bundle & Stack Deals",
        desc: "Create product bundles and supplement stacks with combined savings, increasing average order value significantly.",
      },
      {
        title: "Third-Party Certifications",
        desc: "Display NSF, Informed Sport, organic, and other certification badges prominently to build buyer trust.",
      },
      {
        title: "Loyalty & Referral",
        desc: "Points-based loyalty and referral programmes drive repeat purchases in a market with many competing brands.",
      },
      {
        title: "Before & After Social Proof",
        desc: "Structure your product pages with results-focused testimonials and before/after sections that drive conversion.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for supplements, fitness, and wellness brands.",
        included: [
          "Clean, trust-focused theme installation",
          "Product upload with usage & ingredient info",
          "Subscribe & save configuration",
          "Bundle / stack builder",
          "Payment & shipping setup",
          "Domain & SSL",
        ],
      },
      {
        title: "Compliance & Trust",
        desc: "A store that passes regulatory scrutiny and builds buyer confidence.",
        included: [
          "Health claim disclaimer setup",
          "Certification badge display",
          "Ingredient transparency sections",
          "Returns & guarantee policy pages",
        ],
      },
      {
        title: "Growth Features",
        desc: "Retention and growth tools for wellness DTC brands.",
        included: [
          "Loyalty & referral programme",
          "Email capture & welcome sequence",
          "Upsell & cross-sell configuration",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Trust-focused Shopify theme installation",
      "Product upload with ingredients, certifications, usage",
      "Subscribe & save recurring order setup",
      "Bundle / supplement stack configuration",
      "Health claim disclaimer sections",
      "Certification badge display",
      "Payment gateway (Stripe, Apple Pay, PayPal)",
      "Shipping zones & tracking setup",
      "Loyalty & referral app integration",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & compliance review",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Compliance Brief",
        body: "We review your product range, certifications, health claims, and any regulatory requirements for your market.",
      },
      {
        num: "02",
        title: "Theme & Trust Design",
        body: "A clean, scientifically-credible Shopify theme is installed, emphasising trust signals and product efficacy.",
      },
      {
        num: "03",
        title: "Products, Subscriptions & Bundles",
        body: "All products uploaded with ingredient info, subscribe & save options, and bundle stacks configured.",
      },
      {
        num: "04",
        title: "Compliance, Loyalty & Apps",
        body: "Disclaimer sections, certification badges, loyalty programme, and all payment/shipping setup completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, compliance review, test order, and recorded walkthrough.",
      },
    ],
    faqs: [
      {
        q: "Can you set up subscribe & save for supplements?",
        a: "Yes. We integrate subscription apps (Appstle, Recharge, or Seal Subscriptions) to create subscribe-and-save options with discounted recurring pricing.",
      },
      {
        q: "How do you handle health claim compliance on product pages?",
        a: "We add disclaimer sections to supplement product pages and configure copy that avoids prohibited health claims while remaining conversion-optimised.",
      },
      {
        q: "Can you create supplement stack or bundle deals?",
        a: "Absolutely. We configure bundle apps or Shopify native bundles to create supplement stacks with combined pricing and savings.",
      },
      {
        q: "Can you display NSF or Informed Sport certification badges?",
        a: "Yes. We add certification badge sections to product pages and the homepage, which are proven to increase conversion for supplement brands.",
      },
      {
        q: "Can you set up a loyalty programme for repeat buyers?",
        a: "Yes. We integrate loyalty apps like Smile.io to reward repeat supplement purchasers with points and exclusive discounts.",
      },
      {
        q: "How long does setup take for a health and wellness store?",
        a: "3–6 business days depending on catalogue size and the number of compliance, subscription, and loyalty features required.",
      },
    ],
    metaTitle: "Health & Wellness Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for health & wellness brands. Subscribe & save, bundles & compliance copy. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BAKERY & SWEETS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "bakery-sweets",
    name: "Bakery & Confectionery",
    tagline: "Sell cakes, pastries & artisan sweets online",
    headline: "Shopify Store Setup for Bakeries & Confectionery Brands",
    subheadline:
      "Launch a Shopify bakery store with custom cake order forms, local delivery or click-and-collect, allergen information, seasonal gifting collections, and date-specific ordering.",
    description:
      "Bakery Shopify stores need custom cake order forms, date-specific delivery windows, allergen transparency, and the ability to handle complex order customisation. We build bakery stores that make ordering as delightful as the products themselves.",
    accentColor: "bg-amber-50",
    category: "Food & Drink",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "Date picker", label: "Delivery date selection" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Custom orders", label: "Bespoke cake order forms" },
    ],
    whyShopify: [
      {
        title: "Date-Specific Delivery",
        desc: "Customers select their preferred delivery or collection date at checkout — essential for event cakes and perishable goods.",
      },
      {
        title: "Custom Cake Order Forms",
        desc: "Detailed product customisation fields for flavour, size, design, message, and special requirements.",
      },
      {
        title: "Click & Collect",
        desc: "Configure click-and-collect options for customers who prefer to pick up in person from your bakery.",
      },
      {
        title: "Allergen Transparency",
        desc: "Display allergen information on every product page, including 14 major allergens listed clearly.",
      },
      {
        title: "Seasonal Gifting",
        desc: "Create Christmas, Valentine's, Easter, and birthday collections that showcase your seasonal specials.",
      },
      {
        title: "Pre-Order Management",
        desc: "Accept advance orders for popular items, manage production capacity, and communicate order timelines automatically.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for bakeries, patisseries, and confectionery brands.",
        included: [
          "Bakery-themed Shopify installation",
          "Product upload with allergen info",
          "Custom order form setup",
          "Date-specific delivery configuration",
          "Click & collect option",
          "Domain & SSL",
        ],
      },
      {
        title: "Order Customisation",
        desc: "Handle complex custom cake and confectionery orders seamlessly.",
        included: [
          "Custom order form fields (flavour, size, message)",
          "Upload your own design option",
          "Lead time display per product",
          "Pre-order & advance booking",
        ],
      },
      {
        title: "Growth & Seasonal",
        desc: "Seasonal campaigns and repeat customer tools for bakeries.",
        included: [
          "Seasonal collection setup",
          "Gift wrapping & gift message",
          "Email capture & loyalty",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Bakery Shopify theme installation & branding",
      "Product upload with allergen information (14 allergens)",
      "Custom cake order fields (size, flavour, message, design)",
      "Delivery date picker at checkout",
      "Click & collect option configuration",
      "Local delivery zone setup",
      "Pre-order & advance booking configuration",
      "Seasonal collection setup",
      "Payment gateway (Stripe, Apple Pay, PayPal)",
      "Domain connection & SSL certificate",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Operations Brief",
        body: "We review your product range, allergens, delivery areas, lead times, and custom order requirements.",
      },
      {
        num: "02",
        title: "Theme & Visual Design",
        body: "A warm, appetite-inspiring Shopify theme is installed and customised to your bakery's brand identity.",
      },
      {
        num: "03",
        title: "Products, Forms & Allergens",
        body: "Products are uploaded with allergen info, custom order fields, and size/flavour options configured.",
      },
      {
        num: "04",
        title: "Delivery, Dates & Checkout",
        body: "Date picker, click & collect, local delivery zones, and payment gateways configured and tested.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, allergen review, and recorded walkthrough.",
      },
    ],
    faqs: [
      {
        q: "Can customers select a delivery date for their cake order?",
        a: "Yes. We integrate a date picker app at checkout so customers can select their preferred delivery or collection date, and you can block out unavailable dates.",
      },
      {
        q: "Can you set up custom cake order forms?",
        a: "Absolutely. We configure custom product fields for size, flavour, number of tiers, message, and any special dietary requirements.",
      },
      {
        q: "Can you display allergen information for each product?",
        a: "Yes. We add allergen sections to every product page listing all 14 major allergens clearly, with suitable disclaimers.",
      },
      {
        q: "Can you set up click and collect for our bakery?",
        a: "Yes. We configure Shopify's click and collect option so customers can choose to pick up their order in person rather than pay for delivery.",
      },
      {
        q: "Can I accept pre-orders for Christmas cakes or seasonal items?",
        a: "Yes. We configure pre-order functionality so you can take advance orders for seasonal items and communicate production timelines to customers.",
      },
      {
        q: "How long does setup take for a bakery store?",
        a: "3–5 business days for a standard bakery setup. Custom order form complexity or large seasonal catalogues may extend this.",
      },
    ],
    metaTitle: "Bakeries & Sweet Shops Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for bakeries. Custom cake forms, allergen info & click and collect. Launch in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CANDLES & HOME FRAGRANCE
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "candles-fragrance",
    name: "Candles & Home Fragrance",
    tagline: "Sell soy candles, wax melts & home fragrance online",
    headline: "Shopify Store Setup for Candle & Home Fragrance Brands",
    subheadline:
      "Launch a beautiful Shopify candle store with scent filtering, subscription candle clubs, gift bundles, custom labelling options, and the warm brand experience that fragrance buyers love.",
    description:
      "Candle and home fragrance brands need scent-based filtering, subscription candle clubs, beautifully presented collections, and gift bundle capabilities. We build Shopify stores that communicate your brand's warmth and craftsmanship.",
    accentColor: "bg-orange-50",
    category: "Lifestyle & Gifts",
    stats: [
      { value: "2–4 days", label: "Average setup time" },
      { value: "Scent filtering", label: "Fragrance family navigation" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Subscriptions", label: "Candle club subscriptions" },
    ],
    whyShopify: [
      {
        title: "Scent Family Filtering",
        desc: "Filter products by fragrance family (floral, woody, citrus, musky) so customers can browse by their preferred scent profile.",
      },
      {
        title: "Candle Club Subscriptions",
        desc: "Monthly candle subscriptions with curated scent selections, recurring billing, and subscriber personalisation.",
      },
      {
        title: "Custom Labelling & Personalisation",
        desc: "Personalised label text for gifts, corporate orders, and special occasions — a key revenue driver for candle brands.",
      },
      {
        title: "Gift Bundles",
        desc: "Pre-built and build-your-own gift sets that increase average order value significantly, especially around gifting seasons.",
      },
      {
        title: "Burn Time & Safety Info",
        desc: "Display burn time, wick type, fragrance notes, and safety information clearly on every product page.",
      },
      {
        title: "Seasonal Collections",
        desc: "Launch limited-edition Christmas, autumn, and Valentine's collections that create seasonal urgency and drive repeat visits.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for candle and home fragrance brands.",
        included: [
          "Warm, aesthetic theme installation",
          "Scent-based product organisation",
          "Subscription candle club setup",
          "Gift bundle configuration",
          "Payment & shipping",
          "Domain & SSL",
        ],
      },
      {
        title: "Personalisation & Gifting",
        desc: "The personalisation features that drive gifting revenue.",
        included: [
          "Custom label text fields",
          "Gift message option at checkout",
          "Build-your-own gift set",
          "Gift wrapping option",
        ],
      },
      {
        title: "Brand & Growth",
        desc: "Brand storytelling and repeat customer tools.",
        included: [
          "Brand story / maker page",
          "Fragrance note descriptions",
          "Email capture & candle club signup",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Candle brand Shopify theme installation",
      "Products with fragrance notes, burn time, safety info",
      "Scent family collection structure",
      "Subscription / candle club app setup",
      "Custom label personalisation fields",
      "Gift bundle & build-your-own set",
      "Gift wrapping & message at checkout",
      "Flat rate & weight-based shipping",
      "Domain connection & SSL",
      "Brand story & about page",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Scent Brief",
        body: "We review your candle range, fragrance families, subscription plans, personalisation options, and brand aesthetic.",
      },
      {
        num: "02",
        title: "Theme & Aesthetic Design",
        body: "A warm, minimalist Shopify theme is customised with your brand colours, typography, and imagery.",
      },
      {
        num: "03",
        title: "Products, Scents & Collections",
        body: "All products uploaded with fragrance notes, burn times, scent family tags, and variant options.",
      },
      {
        num: "04",
        title: "Subscriptions, Bundles & Apps",
        body: "Candle club subscriptions, gift bundles, personalisation fields, and checkout setup completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your candle store.",
      },
    ],
    faqs: [
      {
        q: "Can you filter candles by fragrance family or scent?",
        a: "Yes. We create fragrance family collections (floral, citrus, woody, etc.) and configure tag-based filtering so customers can browse by scent preference.",
      },
      {
        q: "Can you set up a monthly candle subscription?",
        a: "Yes. We integrate subscription apps to create monthly candle clubs where subscribers receive a curated selection each month with recurring billing.",
      },
      {
        q: "Can customers personalise labels on candles?",
        a: "Absolutely. We add custom text input fields on product pages for personalised label messages — great for gifts and corporate orders.",
      },
      {
        q: "Can you create gift sets and bundles?",
        a: "Yes. We configure both pre-built gift sets and build-your-own bundle options for customers who want to create custom fragrance collections.",
      },
      {
        q: "Do you display fragrance notes and burn times?",
        a: "Yes. We add fragrance note, burn time, wax type, and safety information sections to each product page.",
      },
      {
        q: "How long does setup take for a candle brand?",
        a: "2–4 business days for a standard candle store. Subscription or custom personalisation features may extend this slightly.",
      },
    ],
    metaTitle: "Candles & Fragrance Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for candle brands. Scent filtering, subscriptions & gift bundles. Launch in 2–4 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SKINCARE & BEAUTY
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "skincare-beauty",
    name: "Skincare & Beauty",
    tagline: "Sell premium skincare, makeup & beauty products online",
    headline: "Shopify Store Setup for Skincare & Beauty Brands",
    subheadline:
      "Launch a premium Shopify beauty store with skin type filtering, ingredient transparency, routine builder, subscription refills, and the clinical credibility that beauty buyers demand.",
    description:
      "Skincare and beauty Shopify stores need ingredient transparency, skin type filtering, routine-based merchandising, before/after social proof, and subscription refills. We build beauty stores that convert and retain customers.",
    accentColor: "bg-rose-50",
    category: "Beauty & Wellness",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Skin type", label: "Skin concern filtering" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Refills", label: "Subscription refill setup" },
    ],
    whyShopify: [
      {
        title: "Skin Type & Concern Filtering",
        desc: "Filter products by skin type (dry, oily, sensitive, combination) and concern (acne, ageing, brightening) for personalised discovery.",
      },
      {
        title: "Ingredient Transparency",
        desc: "Full INCI ingredient lists, hero ingredient callouts, and free-from claims displayed on every product page.",
      },
      {
        title: "Routine Builder",
        desc: "Show customers a complete skincare routine, with morning and evening routines driving multiple product purchases per visit.",
      },
      {
        title: "Subscription Refills",
        desc: "Subscribe-and-save on daily use products like cleansers, serums, and moisturisers — driving predictable recurring revenue.",
      },
      {
        title: "Before & After Gallery",
        desc: "User-generated before/after content and results-focused testimonials that drive conversion for skincare products.",
      },
      {
        title: "Dermatologist Endorsements",
        desc: "Display clinical testing results, dermatologist recommendations, and accreditation badges that build credibility.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for skincare, makeup, and beauty brands.",
        included: [
          "Premium beauty theme installation",
          "Product upload with ingredients & skin type",
          "Routine / regimen collection setup",
          "Subscription refill configuration",
          "Payment & shipping setup",
          "Domain & SSL",
        ],
      },
      {
        title: "Personalisation & Discovery",
        desc: "Help customers find the right products for their skin.",
        included: [
          "Skin type & concern filtering",
          "Skincare routine builder section",
          "Ingredient highlight sections",
          "Shade matching / skin tone selector",
        ],
      },
      {
        title: "Trust & Compliance",
        desc: "Clinical credibility and regulatory compliance for beauty brands.",
        included: [
          "Dermatologist endorsement section",
          "Free-from & certification badges",
          "Cosmetic regulation compliance pages",
          "Before/after gallery setup",
        ],
      },
    ],
    setupIncludes: [
      "Premium beauty Shopify theme installation",
      "Product upload with full INCI ingredients",
      "Skin type & concern collection structure",
      "Skincare routine builder section",
      "Subscribe & save refill setup",
      "Before/after gallery configuration",
      "Dermatologist endorsement sections",
      "Payment gateway (Stripe, Klarna, Apple Pay)",
      "Tracked shipping & returns setup",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Product Brief",
        body: "We review your skincare range, ingredients, target skin types, brand positioning, and any clinical certifications.",
      },
      {
        num: "02",
        title: "Premium Theme Design",
        body: "A clean, clinical-feeling Shopify theme is installed and customised to your beauty brand's premium identity.",
      },
      {
        num: "03",
        title: "Products & Ingredient Setup",
        body: "Products uploaded with full ingredient lists, skin type tags, concern tags, and routine placement.",
      },
      {
        num: "04",
        title: "Subscriptions, Trust & Apps",
        body: "Refill subscriptions, endorsement sections, skin filtering, and all payment/shipping configuration completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, compliance review, test order, and recorded walkthrough of your beauty store.",
      },
    ],
    faqs: [
      {
        q: "Can you filter products by skin type on Shopify?",
        a: "Yes. We configure collections and tag-based filtering for skin types (dry, oily, sensitive, combination) and skin concerns (acne, ageing, brightening).",
      },
      {
        q: "Can you display full ingredient lists on product pages?",
        a: "Yes. We add INCI ingredient list sections to every product page, along with hero ingredient callouts and free-from claims.",
      },
      {
        q: "Can you set up subscribe and save for daily skincare?",
        a: "Absolutely. We configure subscription apps for daily-use products so customers can save 10–15% with recurring deliveries.",
      },
      {
        q: "Can you create a skincare routine section?",
        a: "Yes. We build morning and evening routine sections that recommend product sequences, driving multiple product purchases per visit.",
      },
      {
        q: "How do you handle cosmetic regulation compliance?",
        a: "We add necessary disclaimer and compliance sections to your store, though we recommend your products have gone through appropriate cosmetic assessment. We can guide you on page setup but not legal advice.",
      },
      {
        q: "How long does setup take for a skincare brand?",
        a: "3–6 business days depending on product catalogue size and the number of personalisation features required.",
      },
    ],
    metaTitle: "Skincare & Beauty Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for skincare brands. Ingredient pages, skin quiz & refill subscriptions. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // WEDDING & BRIDAL
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "wedding-bridal",
    name: "Wedding & Bridal",
    tagline: "Sell wedding stationery, favours & bridal accessories online",
    headline: "Shopify Store Setup for Wedding & Bridal Businesses",
    subheadline:
      "Launch a Shopify wedding store with custom order forms, personalised stationery, consultation booking, bespoke favours, and the elegant brand experience that wedding clients expect.",
    description:
      "Wedding businesses require personalisation at every touchpoint — from custom stationery to personalised favours, consultation bookings, and bespoke orders. We build Shopify wedding stores that match the occasion.",
    accentColor: "bg-pink-50",
    category: "Lifestyle & Gifts",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Bespoke orders", label: "Custom order workflows" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Luxury UX", label: "Elegant checkout experience" },
    ],
    whyShopify: [
      {
        title: "Personalised Stationery Orders",
        desc: "Custom text fields for wedding invitations, place cards, and thank-you notes — with file upload for custom designs.",
      },
      {
        title: "Consultation Booking",
        desc: "Integrate appointment booking for bridal consultations, styled shoots, or bespoke quote requests.",
      },
      {
        title: "Wedding Favour Bundles",
        desc: "Bulk ordering options and bundle discounts for wedding favours based on guest count.",
      },
      {
        title: "Elegant Visual Experience",
        desc: "Premium, minimal Shopify themes that reflect the luxury and emotion of wedding planning.",
      },
      {
        title: "Lead Time Management",
        desc: "Display production lead times clearly per product, essential for weddings where timing is critical.",
      },
      {
        title: "Deposit & Instalment Payments",
        desc: "Accept deposits for bespoke orders and split payment options for larger wedding packages.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for wedding stationery, favours, accessories, and bridal boutiques.",
        included: [
          "Elegant bridal theme installation",
          "Product upload with personalisation fields",
          "Custom stationery order forms",
          "Consultation booking integration",
          "Payment & domain setup",
          "Pre-launch QA",
        ],
      },
      {
        title: "Personalisation & Custom Orders",
        desc: "Handle bespoke wedding orders with professional workflow tools.",
        included: [
          "Text personalisation fields",
          "File upload for custom designs",
          "Lead time display per product",
          "Deposit / instalment payment setup",
        ],
      },
      {
        title: "Trust & Conversion",
        desc: "Build the confidence wedding clients need to book and buy.",
        included: [
          "Real wedding gallery / portfolio",
          "Testimonial & review section",
          "FAQ & policy pages",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Elegant wedding Shopify theme installation",
      "Product upload with personalisation fields",
      "Custom stationery order form setup",
      "File upload for custom design briefs",
      "Lead time display per product",
      "Consultation / appointment booking integration",
      "Wedding favour bulk order / bundle pricing",
      "Deposit & instalment payment options",
      "Portfolio / real wedding gallery section",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Service Brief",
        body: "We review your product and service range, personalisation requirements, lead times, and brand aesthetic.",
      },
      {
        num: "02",
        title: "Elegant Theme Design",
        body: "A luxury, elegant Shopify theme is installed and customised to reflect your wedding brand's identity.",
      },
      {
        num: "03",
        title: "Products & Personalisation",
        body: "All products and services uploaded with personalisation fields, lead times, and pricing.",
      },
      {
        num: "04",
        title: "Booking, Deposits & Apps",
        body: "Consultation booking, deposit payment, bulk favour pricing, and all checkout setup completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your wedding store.",
      },
    ],
    faqs: [
      {
        q: "Can customers personalise wedding stationery on Shopify?",
        a: "Yes. We add custom text fields for names, dates, wedding details, and any other personalisation required for stationery orders.",
      },
      {
        q: "Can customers upload their own design files?",
        a: "Yes. We integrate file upload fields so customers can attach design briefs, monograms, or logo files with their order.",
      },
      {
        q: "Can you integrate appointment booking for bridal consultations?",
        a: "Absolutely. We integrate booking apps so customers can schedule consultations, fittings, or styled sessions directly from your store.",
      },
      {
        q: "How do you handle bulk orders for wedding favours?",
        a: "We configure quantity-based pricing tiers so bulk favour orders receive appropriate discounts, and minimum order quantities can be set per product.",
      },
      {
        q: "Can you accept deposits for bespoke wedding orders?",
        a: "Yes. We configure deposit payment options (typically 50% upfront) for bespoke orders using Shopify apps or customised payment flows.",
      },
      {
        q: "How long does setup take for a wedding business?",
        a: "3–6 business days depending on the complexity of personalisation, booking features, and catalogue size.",
      },
    ],
    metaTitle: "Wedding & Bridal Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for wedding brands. Bespoke orders, consultation booking & elegant design. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // COFFEE & TEA
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "coffee-tea",
    name: "Coffee & Tea Brand",
    tagline: "Sell specialty coffee, tea & hot drinks online",
    headline: "Shopify Store Setup for Coffee & Tea Brands",
    subheadline:
      "Launch a Shopify coffee or tea store with bean subscriptions, grind options, tasting notes, wholesale café ordering, and a brand story that keeps customers coming back.",
    description:
      "Coffee and tea brands have passionate customers with specific preferences — grind settings, roast profiles, origin stories, and subscription schedules. We build Shopify stores that serve the specialty drinks community.",
    accentColor: "bg-brown-50",
    category: "Food & Drink",
    stats: [
      { value: "2–4 days", label: "Average setup time" },
      { value: "Subscriptions", label: "Coffee subscription plans" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Wholesale", label: "Café & restaurant ordering" },
    ],
    whyShopify: [
      {
        title: "Coffee Subscriptions",
        desc: "Weekly or monthly bean subscriptions with grind preference, roast selection, and flexible scheduling.",
      },
      {
        title: "Grind & Roast Variants",
        desc: "Let customers choose their preferred grind (whole bean, espresso, filter, cafetière) and roast level per product.",
      },
      {
        title: "Tasting Notes & Origin Story",
        desc: "Rich product descriptions with origin story, tasting notes, altitude, processing method, and brewing recommendations.",
      },
      {
        title: "Café Wholesale Orders",
        desc: "Wholesale pricing tiers and minimum order quantities for cafés, restaurants, and office accounts.",
      },
      {
        title: "Brewing Guides",
        desc: "Embedded brewing guides and recipe content that educates customers and drives product attachment.",
      },
      {
        title: "Gift Hampers",
        desc: "Build-your-own coffee or tea gift sets for gifting occasions — a strong revenue driver for specialty drinks brands.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for specialty coffee roasters, tea brands, and hot drinks retailers.",
        included: [
          "Warm, editorial theme installation",
          "Product upload with tasting notes & origin",
          "Subscription plan configuration",
          "Grind / roast variant setup",
          "Payment & shipping",
          "Domain & SSL",
        ],
      },
      {
        title: "Subscriptions & Wholesale",
        desc: "Recurring revenue and B2B sales for your drinks brand.",
        included: [
          "Coffee subscription app setup",
          "Grind preference selection",
          "Wholesale pricing for cafés",
          "MOQ rules & trade application form",
        ],
      },
      {
        title: "Content & Brand Story",
        desc: "The storytelling that builds a loyal coffee community.",
        included: [
          "Origin story pages",
          "Brewing guide content sections",
          "Gift set / hamper builder",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Coffee/tea brand Shopify theme installation",
      "Product upload with origin, tasting notes, brewing guide",
      "Grind setting & roast level variants",
      "Coffee subscription app integration",
      "Wholesale pricing & MOQ for café orders",
      "Build-your-own gift hamper setup",
      "Payment gateway configuration",
      "Shipping zones (inc. tracked, gift)",
      "Domain connection & SSL",
      "Brand story & sourcing pages",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Product Brief",
        body: "We review your coffee/tea range, subscription plans, wholesale requirements, and brand story.",
      },
      {
        num: "02",
        title: "Theme & Brand Design",
        body: "A warm, editorial Shopify theme is installed and customised to your drinks brand's identity.",
      },
      {
        num: "03",
        title: "Products, Variants & Content",
        body: "All products uploaded with tasting notes, origin stories, grind variants, and brewing guides.",
      },
      {
        num: "04",
        title: "Subscriptions, Wholesale & Apps",
        body: "Subscription plans, wholesale pricing, gift sets, and all payment/shipping configuration completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your coffee or tea store.",
      },
    ],
    faqs: [
      {
        q: "Can customers choose their grind setting when ordering coffee?",
        a: "Yes. We configure grind options (whole bean, espresso, filter, cafetière, AeroPress) as product variants so customers select their preference before checkout.",
      },
      {
        q: "Can you set up a coffee subscription plan?",
        a: "Absolutely. We integrate subscription apps to create weekly or fortnightly coffee plans with grind preference and flexible delivery scheduling.",
      },
      {
        q: "Can you set up wholesale ordering for cafés?",
        a: "Yes. We configure wholesale pricing tiers and minimum order quantities for café and restaurant trade accounts.",
      },
      {
        q: "Can you add origin stories and tasting notes to products?",
        a: "Yes. We add rich product description sections with origin story, altitude, processing method, tasting notes, and brewing recommendations.",
      },
      {
        q: "Can you build a gift hamper builder for coffee gifts?",
        a: "Yes. We configure a bundle builder so customers can mix and match coffees or teas to create custom gift sets.",
      },
      {
        q: "How long does setup take for a coffee or tea brand?",
        a: "2–4 business days for a standard setup. Subscription and wholesale features may extend this to 5–6 days.",
      },
    ],
    metaTitle: "Shopify Store Setup for Coffee & Tea Brands | ShopifyTasker",
    metaDescription:
      "Shopify setup for coffee and tea brands. Bean subscriptions, grind variants & gift sets. Launch in 2–4 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // SPORTS & FITNESS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "sports-fitness",
    name: "Sports & Fitness Equipment",
    tagline: "Sell gym equipment, sportswear & fitness accessories online",
    headline: "Shopify Store Setup for Sports & Fitness Brands",
    subheadline:
      "Launch a Shopify sports store with size guides for performance wear, equipment specifications, heavy goods shipping, gym bundle deals, and the high-energy brand presence fitness buyers expect.",
    description:
      "Sports and fitness Shopify stores handle heavy goods shipping, detailed product specifications, performance wear sizing, and bundle deals. We build stores that serve both serious athletes and casual fitness enthusiasts.",
    accentColor: "bg-slate-50",
    category: "Sports & Outdoor",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Spec sheets", label: "Equipment spec configuration" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Bundle deals", label: "Gym bundle discounts" },
    ],
    whyShopify: [
      {
        title: "Equipment Specifications",
        desc: "Display detailed spec sheets for gym equipment — weight, dimensions, resistance levels, warranty terms, and assembly requirements.",
      },
      {
        title: "Performance Wear Sizing",
        desc: "Detailed fit guides for performance wear, including measurements for compression garments and technical apparel.",
      },
      {
        title: "Heavy Goods Shipping",
        desc: "Configure freight shipping for heavy gym equipment with appropriate carriers and customer communication around delivery.",
      },
      {
        title: "Gym Bundle Deals",
        desc: "Bundle equipment packages (barbells + plates + rack) with combined discounts — increasing average order value significantly.",
      },
      {
        title: "Video Content Integration",
        desc: "Embed exercise demonstration videos on product pages showing how equipment works and proper form.",
      },
      {
        title: "Trade & Commercial Buyers",
        desc: "Wholesale pricing for gyms, leisure centres, and corporate fitness installations.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for sports equipment brands and fitness retailers.",
        included: [
          "High-energy sports theme installation",
          "Product upload with full specifications",
          "Heavy goods shipping configuration",
          "Bundle deal setup",
          "Payment & domain setup",
          "Pre-launch QA",
        ],
      },
      {
        title: "Technical & B2B",
        desc: "Handle complex technical products and trade buyer requirements.",
        included: [
          "Spec sheet / technical data sections",
          "Trade / gym buyer wholesale pricing",
          "Assembly guide integration",
          "Video product demonstration",
        ],
      },
      {
        title: "Growth & Retention",
        desc: "Marketing and retention tools for fitness brands.",
        included: [
          "Loyalty programme setup",
          "Email capture & training tips content",
          "Google Analytics & Meta Pixel",
          "Upsell & accessory cross-sell",
        ],
      },
    ],
    setupIncludes: [
      "Sports brand Shopify theme installation",
      "Product upload with full technical specifications",
      "Performance wear size guide setup",
      "Freight / heavy goods shipping configuration",
      "Gym bundle & package deal setup",
      "Video embed sections on product pages",
      "Trade / wholesale pricing for gyms",
      "Payment gateway configuration",
      "Assembly guide & warranty pages",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Logistics Brief",
        body: "We review your product range, technical specifications, shipping requirements, and trade buyer needs.",
      },
      {
        num: "02",
        title: "High-Energy Theme Design",
        body: "A bold, performance-focused Shopify theme is installed and customised to your sports brand.",
      },
      {
        num: "03",
        title: "Products, Specs & Collections",
        body: "All products uploaded with full technical specs, size guides, and category/sport collections.",
      },
      {
        num: "04",
        title: "Shipping, Bundles & Trade",
        body: "Heavy goods shipping, bundle deals, wholesale pricing, and all checkout configuration completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, freight shipping test, and recorded walkthrough.",
      },
    ],
    faqs: [
      {
        q: "Can you configure freight shipping for heavy gym equipment?",
        a: "Yes. We configure weight and dimension-based freight shipping with appropriate carriers for heavy gym equipment deliveries.",
      },
      {
        q: "Can you add technical specification sheets to equipment products?",
        a: "Yes. We add spec sheet sections to equipment product pages displaying weight, dimensions, resistance levels, and assembly requirements.",
      },
      {
        q: "Can you create gym equipment bundle deals?",
        a: "Absolutely. We configure bundle packages (e.g., barbell + plates + rack) with combined pricing and savings displayed clearly.",
      },
      {
        q: "Can you embed exercise demonstration videos on product pages?",
        a: "Yes. We add video sections to product pages where YouTube or Vimeo videos showing equipment use can be embedded.",
      },
      {
        q: "Can you set up wholesale pricing for gyms?",
        a: "Yes. We configure wholesale pricing tiers for commercial buyers like gyms, leisure centres, and fitness studios.",
      },
      {
        q: "How long does setup take for a sports store?",
        a: "3–6 business days depending on catalogue size, freight configuration complexity, and trade/wholesale requirements.",
      },
    ],
    metaTitle: "Sports & Fitness Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for sports and fitness brands. Equipment specs, bundle deals & wholesale. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // ART & PRINTS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "art-prints",
    name: "Art, Prints & Photography",
    tagline: "Sell original art, limited edition prints & photography online",
    headline: "Shopify Store Setup for Artists, Printmakers & Photographers",
    subheadline:
      "Launch a Shopify art store with limited edition print runs, original artwork enquiry flows, print-on-demand integration, frame options, and the gallery-quality presentation your work deserves.",
    description:
      "Selling art online requires limited edition numbering, certificate of authenticity, print-on-demand integration, size and frame options, and an elegant presentation that does justice to the work. We build Shopify art stores that sell.",
    accentColor: "bg-indigo-50",
    category: "Art & Crafts",
    stats: [
      { value: "2–5 days", label: "Average setup time" },
      { value: "POD ready", label: "Print-on-demand integration" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Ltd editions", label: "Edition tracking & numbering" },
    ],
    whyShopify: [
      {
        title: "Limited Edition Management",
        desc: "Set edition sizes, display edition numbers remaining, and automatically mark editions as sold out when complete.",
      },
      {
        title: "Print-on-Demand Integration",
        desc: "Connect with Printful, Printify, or SPOD to fulfil giclée prints, framed prints, and canvas prints automatically.",
      },
      {
        title: "Size & Frame Options",
        desc: "Clean size and frame selection variants let buyers choose their preferred format and framing option.",
      },
      {
        title: "Original Artwork Enquiry",
        desc: "Enquiry forms for original artwork purchases where pricing is by negotiation or requires consultation.",
      },
      {
        title: "Certificate of Authenticity",
        desc: "Automated certificate of authenticity generation or PDF attachment for limited edition and original sales.",
      },
      {
        title: "Collector Experience",
        desc: "Artist biography, process documentation, and inspiration stories that build the collector relationship.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for artists, printmakers, and photographers.",
        included: [
          "Gallery-quality theme installation",
          "Product upload with edition details",
          "Print-on-demand integration",
          "Size & frame variant setup",
          "Payment & shipping",
          "Domain & SSL",
        ],
      },
      {
        title: "Editions & Originals",
        desc: "Handle the unique requirements of selling art editions and originals.",
        included: [
          "Limited edition tracking",
          "Certificate of authenticity setup",
          "Original artwork enquiry form",
          "Price-on-application configuration",
        ],
      },
      {
        title: "Artist Brand & SEO",
        desc: "Build your artist brand and online discoverability.",
        included: [
          "Artist biography & portfolio section",
          "Exhibition history page",
          "SEO for artist name & artwork titles",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Gallery-quality Shopify theme installation",
      "Product upload with edition size & numbering",
      "Print-on-demand app integration (Printful/Printify)",
      "Size & frame variant configuration",
      "Certificate of authenticity setup",
      "Original artwork enquiry form",
      "Shipping for framed & rolled prints",
      "Artist biography & portfolio section",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Artwork & Brand Brief",
        body: "We review your artwork catalogue, edition sizes, print formats, print-on-demand preferences, and artist brand story.",
      },
      {
        num: "02",
        title: "Gallery Theme Design",
        body: "A gallery-quality, image-forward Shopify theme is installed with your artist brand identity.",
      },
      {
        num: "03",
        title: "Artworks, Prints & Editions",
        body: "All artworks uploaded with edition details, print sizes, frame options, and artist notes.",
      },
      {
        num: "04",
        title: "POD, Certificates & Checkout",
        body: "Print-on-demand integration, certificate of authenticity, enquiry forms, and payment/shipping configured.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test print order, and recorded walkthrough of your art store.",
      },
    ],
    faqs: [
      {
        q: "Can you track limited edition print numbers on Shopify?",
        a: "Yes. We configure edition sizes with Shopify inventory tracking, display remaining edition numbers, and mark editions as sold out when complete.",
      },
      {
        q: "Can you integrate print-on-demand for giclée prints?",
        a: "Yes. We integrate Printful or Printify to fulfil print orders automatically — giclée, canvas, framed prints — without you needing to hold stock.",
      },
      {
        q: "Can you set up a certificate of authenticity?",
        a: "Yes. We configure certificate of authenticity attachment to limited edition and original artwork orders.",
      },
      {
        q: "How do you handle original artwork where the price is negotiable?",
        a: "We configure price-on-application (POA) products with an enquiry form, so interested collectors contact you directly rather than purchasing at a fixed price.",
      },
      {
        q: "What size and frame options can you set up?",
        a: "We configure all your required sizes (A3, A2, A1, 50x70cm etc.) and frame options (unframed, framed, canvas) as clean product variants.",
      },
      {
        q: "How long does setup take for an art store?",
        a: "2–5 business days depending on catalogue size and whether print-on-demand or original artwork workflows are required.",
      },
    ],
    metaTitle: "Art Prints & Photography Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for artists. Limited editions, POD integration & framing options. Launch in 2–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // BABY & NURSERY
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "baby-nursery",
    name: "Baby & Nursery Products",
    tagline: "Sell baby essentials, nursery furniture & newborn gifts online",
    headline: "Shopify Store Setup for Baby & Nursery Brands",
    subheadline:
      "Launch a Shopify baby store with age-stage product filtering, safety certification display, new parent gifting options, nursery design bundles, and the trust signals that new parents need.",
    description:
      "New parents are among the most trust-driven buyers online. Baby product Shopify stores need safety certifications front-and-centre, age-stage navigation, gifting options, and a reassuring brand voice that earns their confidence.",
    accentColor: "bg-sky-50",
    category: "Baby & Kids",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "Safety certs", label: "CE & BS safety standards" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Gift registry", label: "Baby gift list setup" },
    ],
    whyShopify: [
      {
        title: "Age-Stage Filtering",
        desc: "Filter products by developmental stage (newborn, 0–3 months, 6–12 months, 1–2 years) for easy parent navigation.",
      },
      {
        title: "Safety Certification Display",
        desc: "Prominently display CE marks, BS safety standards, BPA-free status, and other certifications on every relevant product.",
      },
      {
        title: "Baby Gift Registry",
        desc: "A baby gift list feature so expectant parents can share their wishlist with family and friends.",
      },
      {
        title: "Bundle & Set Discounts",
        desc: "Nursery starter sets and layette bundles that help new parents get everything they need in one purchase.",
      },
      {
        title: "Trusted Content",
        desc: "Parenting guides, safe sleep guides, and age-appropriate toy selection content that builds expert credibility.",
      },
      {
        title: "Gifting & Baby Shower",
        desc: "Gift wrapping, personalised messages, and baby shower collection pages for the gifting-heavy baby category.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for baby product brands, nursery retailers, and newborn gifting businesses.",
        included: [
          "Soft, trust-focused theme installation",
          "Product upload with age-stage tags",
          "Safety certification display",
          "Bundle & starter set configuration",
          "Payment & shipping setup",
          "Domain & SSL",
        ],
      },
      {
        title: "Gifting & Registry",
        desc: "The gifting features that drive baby store sales.",
        included: [
          "Baby gift registry integration",
          "Gift wrapping & message option",
          "Baby shower collection page",
          "Personalisation fields for gifts",
        ],
      },
      {
        title: "Trust & Content",
        desc: "The trust signals and content that convert cautious parents.",
        included: [
          "Safety certification sections",
          "Parenting guide content pages",
          "Review & star rating setup",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Baby brand Shopify theme installation",
      "Product upload with age-stage filtering",
      "Safety certification & CE mark display",
      "Nursery bundle & starter set setup",
      "Baby gift registry app integration",
      "Gift wrapping & personalised message",
      "BPA-free & material safety sections",
      "Payment gateway configuration",
      "Tracked & insured shipping setup",
      "Domain connection & SSL",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Safety Brief",
        body: "We review your product catalogue, certifications, age-stage structure, and gifting requirements.",
      },
      {
        num: "02",
        title: "Soft Theme Design",
        body: "A gentle, reassuring Shopify theme is installed and customised to your baby brand identity.",
      },
      {
        num: "03",
        title: "Products, Safety & Collections",
        body: "All products uploaded with age-stage tags, safety certifications, and material information.",
      },
      {
        num: "04",
        title: "Gifting, Registry & Checkout",
        body: "Gift registry, bundle setup, gift wrapping, and payment/shipping configuration completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your baby store.",
      },
    ],
    faqs: [
      {
        q: "How do you filter baby products by age stage?",
        a: "We create age-stage collections (newborn, 0–3 months, 3–6 months, 6–12 months, etc.) and configure filtering so parents can easily narrow products to their baby's stage.",
      },
      {
        q: "Can you display safety certifications on product pages?",
        a: "Yes. We add CE mark, BS safety standard, BPA-free, and other certification badges to relevant product pages and the homepage.",
      },
      {
        q: "Can you set up a baby gift registry?",
        a: "Yes. We integrate a gift list or wishlist app so expectant parents can create and share their baby registry with family and friends.",
      },
      {
        q: "Can you create nursery starter bundles?",
        a: "Absolutely. We configure bundle products (e.g., complete nursery set, newborn essentials kit) with combined pricing and clear contents lists.",
      },
      {
        q: "Do you set up gifting features for baby showers?",
        a: "Yes. We configure gift wrapping options, personalised message fields, and a baby shower gift collection page.",
      },
      {
        q: "How long does setup take for a baby store?",
        a: "3–5 business days for a standard baby store setup.",
      },
    ],
    metaTitle: "Baby & Nursery Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for baby brands. Age filtering, safety certs & gift registry. Launch in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HAIR EXTENSIONS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "hair-extensions",
    name: "Hair Extensions",
    tagline: "Sell clip-in, tape-in, sew-in & luxury hair extensions online",
    headline: "Shopify Store Setup for Hair Extension Brands",
    subheadline:
      "Launch a professional Shopify hair extensions store with shade matching, texture filtering, length variants, bundle sets, and before-and-after galleries that convert browsers into buyers.",
    description:
      "Hair extension brands need shade matching tools, detailed texture and method filtering (clip-in, tape-in, weft, micro-ring), high-res model photography, and bundle sets. We build Shopify stores that make the purchasing decision easy and drive strong repeat revenue.",
    accentColor: "bg-amber-50",
    category: "Beauty & Wellness",
    stats: [
      { value: "3–5 days", label: "Average setup time" },
      { value: "Shade match", label: "Colour matching tool" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Bundles", label: "Set & bundle discounts" },
    ],
    whyShopify: [
      {
        title: "Shade & Colour Matching",
        desc: "Swatch-based colour selectors and shade matching tools help customers find their perfect match, reducing returns significantly.",
      },
      {
        title: "Texture & Method Filtering",
        desc: "Filter by texture (straight, wavy, curly, kinky) and application method (clip-in, tape-in, weft, micro-ring, nano-ring) so customers find exactly what suits them.",
      },
      {
        title: "Length & Weight Variants",
        desc: "Set up length (12\", 16\", 20\", 24\") and gram weight variants cleanly with price differentials — essential for hair extension catalogues.",
      },
      {
        title: "Before & After Gallery",
        desc: "User-generated before-and-after content and model result photos that are proven to be the highest-converting content type for hair brands.",
      },
      {
        title: "Bundle Sets & Starter Kits",
        desc: "Extension starter kits and bundle sets (extensions + care kit + tools) increase average order value and simplify the buying decision.",
      },
      {
        title: "Subscription Replenishment",
        desc: "Tape-in adhesive, aftercare products, and accessories on recurring orders keep customers in your ecosystem long-term.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for hair extension brands and professional hair suppliers.",
        included: [
          "Premium beauty theme installation",
          "Product upload with shade, length, texture variants",
          "Shade swatch selector configuration",
          "Bundle & starter kit setup",
          "Payment & shipping configuration",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Colour Matching & Filtering",
        desc: "The discovery tools that help customers find their perfect extensions.",
        included: [
          "Colour swatch display on collection pages",
          "Shade matching guide page",
          "Texture & method filtering",
          "Length comparison guide",
        ],
      },
      {
        title: "Brand & Conversion",
        desc: "Content and trust tools that drive conversion for hair extension stores.",
        included: [
          "Before & after gallery section",
          "Hair extension care guide",
          "Review & UGC integration",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Premium hair brand Shopify theme installation",
      "Product upload with shade, length, texture, method variants",
      "Colour swatch selector on product & collection pages",
      "Shade matching guide page",
      "Bundle / starter kit configuration",
      "Before & after gallery section",
      "Aftercare product cross-sell",
      "Payment gateway (Stripe, Klarna, Apple Pay)",
      "Tracked & insured shipping setup",
      "Domain connection & SSL certificate",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Brand Brief",
        body: "We review your hair extension range, shade catalogue, application methods, target customer, and brand aesthetic.",
      },
      {
        num: "02",
        title: "Premium Theme Design",
        body: "A luxury, beauty-forward Shopify theme is installed and customised to your hair brand's identity.",
      },
      {
        num: "03",
        title: "Products, Shades & Variants",
        body: "All products uploaded with shade swatches, length variants, texture tags, and method filtering.",
      },
      {
        num: "04",
        title: "Bundles, Guides & Apps",
        body: "Starter kits, shade matching guide, before & after gallery, and all payment/shipping configuration completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your hair extensions store.",
      },
    ],
    faqs: [
      {
        q: "Can you set up shade matching for hair extensions?",
        a: "Yes. We configure colour swatch selectors on product pages and create a dedicated shade matching guide page to help customers identify their closest match.",
      },
      {
        q: "How do you handle multiple hair textures and methods?",
        a: "We create collections and tag-based filtering for each texture (straight, wavy, curly, kinky) and application method (clip-in, tape-in, weft, micro-ring) so customers can browse exactly what suits them.",
      },
      {
        q: "Can you set up bundle kits for hair extensions?",
        a: "Yes. We configure bundle products combining extensions, aftercare, and tools with combined pricing and clear contents displayed on the product page.",
      },
      {
        q: "Do you set up before-and-after galleries?",
        a: "Yes. We integrate a gallery section featuring model before-and-after results, which are consistently the highest-converting content type for hair brands.",
      },
      {
        q: "Can you set up length and weight variants with different prices?",
        a: "Yes. We configure length (12\", 16\", 20\", 24\") and gram weight variants with separate pricing tiers for each.",
      },
      {
        q: "How long does setup take for a hair extensions store?",
        a: "3–5 business days for a standard hair extensions store setup.",
      },
    ],
    metaTitle: "Shopify Store Setup for Hair Extensions | ShopifyTasker",
    metaDescription:
      "Shopify setup for hair extensions. Shade matching, bundle kits & before/after gallery. Launch in 3–5 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HAIR WIGS
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "hair-wigs",
    name: "Hair Wigs & Hairpieces",
    tagline: "Sell lace front, full lace, synthetic & human hair wigs online",
    headline: "Shopify Store Setup for Hair Wigs & Hairpiece Brands",
    subheadline:
      "Launch a high-converting Shopify wig store with cap size guides, lace type filtering, density options, colour customisation, and the visual presentation that wig buyers need to purchase with confidence.",
    description:
      "Wig stores have highly specific buying requirements — cap construction, lace type, hair density, cap size, and colour customisation. A well-structured Shopify wig store with detailed filtering and a strong visual experience drives confident purchases and reduces returns.",
    accentColor: "bg-purple-50",
    category: "Beauty & Wellness",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Cap sizing", label: "Size guide integration" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Custom wigs", label: "Bespoke order workflow" },
    ],
    whyShopify: [
      {
        title: "Cap Size & Construction Filter",
        desc: "Filter wigs by cap size (petite, average, large), construction (lace front, full lace, 360, U-part), and base type so buyers find their fit quickly.",
      },
      {
        title: "Density & Length Options",
        desc: "Set up density (130%, 150%, 180%, 200%) and length variants cleanly, with a density comparison chart to guide purchasing decisions.",
      },
      {
        title: "Colour & Highlight Customisation",
        desc: "Visual colour selectors, highlight options, and custom colour request fields for bespoke orders.",
      },
      {
        title: "Lace Type Filtering",
        desc: "Filter by lace type (HD lace, transparent lace, Swiss lace) with detailed descriptions of each — key information for wig buyers.",
      },
      {
        title: "Try-Before-You-Buy Content",
        desc: "Detailed video content, 360-degree product views, and model photos in multiple lighting conditions to drive confident purchases.",
      },
      {
        title: "Custom Wig Order Workflow",
        desc: "Bespoke wig orders with custom measurement fields, colour specifications, and lead time management for made-to-order pieces.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for wig brands, lace wig suppliers, and hairpiece retailers.",
        included: [
          "Premium wig brand theme installation",
          "Product upload with full spec variants",
          "Cap size & construction filtering",
          "Density & lace type configuration",
          "Payment & shipping setup",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Filtering & Discovery",
        desc: "The product discovery tools that wig buyers expect.",
        included: [
          "Cap construction & lace type filtering",
          "Density comparison chart",
          "Colour customisation fields",
          "Wig sizing guide page",
        ],
      },
      {
        title: "Custom Orders & Trust",
        desc: "Handle bespoke wig orders and build buyer confidence.",
        included: [
          "Custom wig order form",
          "Lead time display per product",
          "Video & 360-degree product setup",
          "Review & before/after gallery",
        ],
      },
    ],
    setupIncludes: [
      "Premium wig brand Shopify theme installation",
      "Product upload with cap size, lace type, density, length variants",
      "Cap construction & lace type collection filtering",
      "Density comparison chart / guide page",
      "Colour & highlight swatch selectors",
      "Custom wig order form with specification fields",
      "Lead time display per product",
      "Payment gateway (Stripe, Klarna, Apple Pay)",
      "Tracked & insured shipping setup",
      "Domain connection & SSL certificate",
      "Before & after gallery section",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Spec Brief",
        body: "We review your wig catalogue, cap constructions, lace types, density options, colour range, and any bespoke order requirements.",
      },
      {
        num: "02",
        title: "Premium Theme Design",
        body: "A luxury, visual-first Shopify theme is installed and customised to your wig brand's identity.",
      },
      {
        num: "03",
        title: "Products, Variants & Filtering",
        body: "All products uploaded with cap size, lace type, density, and length variants. Collection filtering configured.",
      },
      {
        num: "04",
        title: "Custom Orders, Guides & Apps",
        body: "Custom order form, density chart, colour customisation, and all payment/shipping setup completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your wig store.",
      },
    ],
    faqs: [
      {
        q: "Can you filter wigs by cap construction and lace type?",
        a: "Yes. We create collections and tag-based filtering for cap constructions (lace front, full lace, 360, U-part) and lace types (HD, transparent, Swiss) so customers can narrow their search precisely.",
      },
      {
        q: "Can you set up density and length variants?",
        a: "Yes. We configure density (130%, 150%, 180%, 200%) and length variants with separate pricing, plus a density comparison guide page to help customers choose.",
      },
      {
        q: "Can customers request custom colours or highlights?",
        a: "Yes. We add colour customisation fields to product pages where customers can specify their colour requirements, and set up a custom order form for fully bespoke pieces.",
      },
      {
        q: "Can you set up a custom wig order form?",
        a: "Absolutely. We create a detailed bespoke order form with fields for measurements, cap size, density, colour, and any special requirements.",
      },
      {
        q: "How do you handle lead times for made-to-order wigs?",
        a: "We display production lead times on each product page and configure automated order confirmation emails communicating the timeline to customers.",
      },
      {
        q: "How long does setup take for a wig store?",
        a: "3–6 business days depending on catalogue size and whether custom order workflows are required.",
      },
    ],
    metaTitle: "Hair Wigs & Hairpieces Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for wig brands. Cap size filtering, lace type & custom order flow. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CAR ACCESSORIES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "car-accessories",
    name: "Car & Auto Accessories",
    tagline: "Sell car accessories, detailing products & automotive parts online",
    headline: "Shopify Store Setup for Car & Auto Accessories Brands",
    subheadline:
      "Launch a Shopify automotive accessories store with vehicle year/make/model filtering, fitment guides, technical specifications, and the trust signals car enthusiasts demand.",
    description:
      "Car and auto accessory Shopify stores need vehicle compatibility filtering, detailed technical specifications, fitment guides, and the ability to handle heavy or bulky item shipping. We build automotive stores that help customers find the right product for their vehicle every time.",
    accentColor: "bg-slate-50",
    category: "Automotive",
    stats: [
      { value: "3–6 days", label: "Average setup time" },
      { value: "Fitment", label: "Vehicle compatibility guide" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Spec sheets", label: "Technical data setup" },
    ],
    whyShopify: [
      {
        title: "Vehicle Make & Model Filtering",
        desc: "Help customers find compatible accessories by filtering products by vehicle year, make, and model — the most important navigation feature for auto stores.",
      },
      {
        title: "Fitment & Compatibility Guides",
        desc: "Detailed fitment information, compatibility tables, and installation guides on every product page reduce returns and increase buyer confidence.",
      },
      {
        title: "Technical Specifications",
        desc: "Display material, dimensions, weight, wattage, and certification data clearly on product pages — essential for performance and electronic accessories.",
      },
      {
        title: "Detailing & Consumables Subscriptions",
        desc: "Set up subscribe-and-save for detailing products, wax, and cleaning consumables to build recurring revenue.",
      },
      {
        title: "Bundle Kits & Kits Deals",
        desc: "Car care kits, detailing bundles, and accessory packages that increase average order value and simplify purchasing for customers.",
      },
      {
        title: "Trade & Wholesale Pricing",
        desc: "Wholesale pricing for garages, detailing studios, and car dealerships looking to buy accessories in bulk.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for car accessory brands, detailing product suppliers, and auto parts retailers.",
        included: [
          "Automotive-focused theme installation",
          "Product upload with full technical specs",
          "Vehicle make/model collection structure",
          "Fitment guide configuration",
          "Payment & shipping setup",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Compatibility & Technical",
        desc: "The product discovery features automotive buyers expect.",
        included: [
          "Year/make/model filtering setup",
          "Fitment & compatibility table",
          "Spec sheet sections per product",
          "Installation guide integration",
        ],
      },
      {
        title: "Trade & Growth",
        desc: "Revenue features for auto accessory businesses.",
        included: [
          "Wholesale / trade pricing tiers",
          "Detailing subscription setup",
          "Bundle kit configuration",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Automotive Shopify theme installation & branding",
      "Product upload with full technical specifications",
      "Vehicle make/model/year collection structure",
      "Fitment & compatibility guide pages",
      "Detailing subscription app integration",
      "Bundle / kit deal configuration",
      "Wholesale pricing for trade buyers",
      "Heavy goods & standard shipping setup",
      "Payment gateway configuration",
      "Domain connection & SSL certificate",
      "Google Analytics 4 & Meta Pixel",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Product & Vehicle Brief",
        body: "We review your product range, vehicle compatibility requirements, technical spec data, and any wholesale or subscription requirements.",
      },
      {
        num: "02",
        title: "Automotive Theme Design",
        body: "A bold, trust-focused Shopify theme is installed and customised to your auto accessories brand.",
      },
      {
        num: "03",
        title: "Products, Specs & Fitment",
        body: "All products uploaded with technical specs, fitment data, and vehicle compatibility collections configured.",
      },
      {
        num: "04",
        title: "Subscriptions, Trade & Shipping",
        body: "Detailing subscriptions, wholesale pricing, bundle kits, and all payment/shipping configuration completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your auto accessories store.",
      },
    ],
    faqs: [
      {
        q: "Can you set up vehicle make and model filtering?",
        a: "Yes. We structure collections and filtering by vehicle year, make, and model so customers can navigate directly to compatible products for their car.",
      },
      {
        q: "Can you add fitment and compatibility information?",
        a: "Yes. We add fitment tables and compatibility notes to product pages, and create a dedicated fitment guide page for your most popular vehicle ranges.",
      },
      {
        q: "Can you set up technical specification sections?",
        a: "Absolutely. We configure spec sheet sections displaying material, dimensions, weight, wattage, and any relevant certifications on every applicable product.",
      },
      {
        q: "Can you set up subscriptions for detailing products?",
        a: "Yes. We integrate subscription apps to create subscribe-and-save options for consumable detailing products — wax, polish, cleaning kits — with recurring billing.",
      },
      {
        q: "Can you set up wholesale pricing for garages and dealerships?",
        a: "Yes. We configure wholesale pricing tiers for trade buyers like garages, detailing studios, and car dealerships through a B2B app or Shopify's built-in B2B features.",
      },
      {
        q: "How long does setup take for an auto accessories store?",
        a: "3–6 business days depending on catalogue size, fitment complexity, and whether trade/wholesale features are required.",
      },
    ],
    metaTitle: "Car & Auto Accessories Shopify Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify setup for car accessory brands. Vehicle filtering, fitment guides & wholesale. Launch in 3–6 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // B2B WHOLESALE STORES
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "b2b-wholesale",
    name: "B2B & Wholesale Store",
    tagline: "Launch a professional B2B Shopify wholesale portal",
    headline: "Shopify B2B & Wholesale Store Setup",
    subheadline:
      "Launch a Shopify B2B wholesale portal with tiered pricing, minimum order quantities, trade application forms, net payment terms, and the professional buyer experience that business customers expect.",
    description:
      "B2B and wholesale Shopify stores require a completely different setup from retail stores — tiered pricing by volume, customer-specific price lists, MOQ enforcement, trade account applications, and invoice/net payment terms. We build B2B Shopify portals that handle complex trade requirements professionally.",
    accentColor: "bg-blue-50",
    category: "B2B & Wholesale",
    stats: [
      { value: "4–7 days", label: "Average setup time" },
      { value: "Tiered pricing", label: "Volume discount setup" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Trade portal", label: "B2B account management" },
    ],
    whyShopify: [
      {
        title: "Tiered Wholesale Pricing",
        desc: "Set up volume-based pricing tiers (Bronze, Silver, Gold) so different customer segments automatically see their negotiated prices.",
      },
      {
        title: "Minimum Order Quantities",
        desc: "Enforce MOQ rules per product or collection, ensuring wholesale orders meet your minimum viable order thresholds.",
      },
      {
        title: "Trade Account Applications",
        desc: "A professional trade account application form with manual or automatic approval — new buyers apply and get access to wholesale pricing once approved.",
      },
      {
        title: "Net Payment Terms",
        desc: "Offer Net 30 / Net 60 payment terms to established trade customers with invoice-based billing via Shopify B2B or third-party apps.",
      },
      {
        title: "Customer-Specific Price Lists",
        desc: "Assign individual price lists to specific wholesale accounts, giving key customers their own negotiated pricing without manual quoting.",
      },
      {
        title: "Bulk Order Forms",
        desc: "Quick-order forms that let trade buyers add large quantities of multiple SKUs to cart in a single view, dramatically speeding up the reorder process.",
      },
    ],
    services: [
      {
        title: "Complete B2B Store Setup",
        desc: "Full Shopify B2B setup for wholesalers, distributors, manufacturers, and trade suppliers.",
        included: [
          "Professional B2B theme installation",
          "Wholesale pricing tier configuration",
          "MOQ rules setup",
          "Trade account application form",
          "Payment & net terms configuration",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Pricing & Account Management",
        desc: "The B2B pricing infrastructure your wholesale business requires.",
        included: [
          "Volume pricing tier setup (Bronze/Silver/Gold)",
          "Customer-specific price list assignment",
          "Net 30/60 payment term configuration",
          "Wholesale customer portal",
        ],
      },
      {
        title: "Order Efficiency & Growth",
        desc: "Tools that make reordering fast and easy for your trade customers.",
        included: [
          "Bulk/quick order form",
          "Reorder functionality",
          "Trade catalogue PDF generation",
          "Google Analytics & reporting setup",
        ],
      },
    ],
    setupIncludes: [
      "Professional B2B Shopify theme installation",
      "Wholesale pricing tiers (by customer group or volume)",
      "Minimum order quantity enforcement",
      "Trade account application & approval form",
      "Customer-specific price list configuration",
      "Net 30/60 invoice payment terms",
      "Password-protected wholesale portal",
      "Bulk / quick order form integration",
      "Shipping rules for trade orders",
      "Domain connection & SSL certificate",
      "Google Analytics & reporting",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "B2B Requirements Brief",
        body: "We review your wholesale pricing structure, customer tiers, MOQ rules, payment terms, and any existing trade account processes.",
      },
      {
        num: "02",
        title: "Professional Theme Design",
        body: "A clean, professional Shopify theme is installed suitable for B2B trade buyers — functional, clear, and efficient.",
      },
      {
        num: "03",
        title: "Products & Pricing Tiers",
        body: "Products uploaded with wholesale pricing, MOQ rules, and tier-based price assignments configured.",
      },
      {
        num: "04",
        title: "Applications, Terms & Order Tools",
        body: "Trade application form, net payment terms, bulk order form, and all B2B infrastructure completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test wholesale order, and recorded walkthrough of your B2B portal.",
      },
    ],
    faqs: [
      {
        q: "Can you set up tiered wholesale pricing on Shopify?",
        a: "Yes. We use Shopify B2B (Plus) or third-party wholesale apps to create pricing tiers based on customer group, order volume, or individually assigned price lists.",
      },
      {
        q: "Can you enforce minimum order quantities?",
        a: "Yes. We configure MOQ rules per product, collection, or order total, ensuring trade orders meet your minimum thresholds before checkout.",
      },
      {
        q: "Can you set up net payment terms for trade customers?",
        a: "Yes. We configure Net 30 or Net 60 payment terms for approved trade accounts using Shopify B2B or apps like Apruve or Resolve.",
      },
      {
        q: "Can you create a trade account application form?",
        a: "Yes. We set up a professional trade account application form with company details, VAT number, and trade references, plus an approval workflow.",
      },
      {
        q: "Can you restrict wholesale pricing to approved buyers only?",
        a: "Yes. Wholesale pricing can be locked behind customer account approval, so only verified trade buyers see trade prices.",
      },
      {
        q: "How long does B2B setup take?",
        a: "4–7 business days depending on the complexity of pricing tiers, MOQ rules, and trade account application workflows.",
      },
    ],
    metaTitle: "Shopify B2B & Wholesale Store Setup | ShopifyTasker",
    metaDescription:
      "Shopify B2B store setup. Tiered pricing, MOQ rules & trade account portal. Launch in 4–7 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // FOOD SUPPLY & DISTRIBUTION
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "food-supply",
    name: "Food Supply & Distribution",
    tagline: "Sell wholesale food, ingredients & produce to businesses online",
    headline: "Shopify Store Setup for Food Supply & Distribution Businesses",
    subheadline:
      "Launch a Shopify food supply store with bulk ordering, trade account pricing, minimum order values, cold chain shipping, recurring delivery schedules, and the professional ordering system that food businesses need.",
    description:
      "Food supply and distribution businesses need a Shopify setup that handles trade accounts, bulk pricing, recurring delivery schedules, compliance labelling, and cold chain logistics. We build food supply stores that make ordering simple for your restaurant, cafe, and retail customers.",
    accentColor: "bg-green-50",
    category: "Food & Drink",
    stats: [
      { value: "4–7 days", label: "Average setup time" },
      { value: "Bulk orders", label: "Trade ordering system" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Recurring", label: "Scheduled delivery setup" },
    ],
    whyShopify: [
      {
        title: "Trade Account Ordering",
        desc: "Password-protected trade portal where restaurants, cafes, and retailers can place standing orders at their negotiated prices.",
      },
      {
        title: "Recurring Delivery Schedules",
        desc: "Set up weekly or bi-weekly delivery subscriptions for your regular trade accounts — automated billing and delivery scheduling.",
      },
      {
        title: "Bulk Pricing & Case Discounts",
        desc: "Volume pricing tiers and case-lot discounts so trade buyers are incentivised to order larger quantities consistently.",
      },
      {
        title: "Allergen & Compliance Labelling",
        desc: "Display full allergen information, country of origin, certifications (organic, halal, kosher), and nutritional data on every product page.",
      },
      {
        title: "Cold Chain Logistics",
        desc: "Configure refrigerated delivery options, temperature-controlled shipping rules, and appropriate surcharges for perishable goods.",
      },
      {
        title: "Minimum Order Values",
        desc: "Enforce minimum order thresholds to ensure each delivery is commercially viable, with clear communication to buyers at checkout.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for food suppliers, wholesale food distributors, and ingredient suppliers.",
        included: [
          "Professional food supply theme installation",
          "Product upload with allergen & compliance data",
          "Trade account portal setup",
          "Bulk pricing & case discount configuration",
          "Cold chain shipping setup",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Trade Ordering System",
        desc: "The B2B ordering infrastructure for food supply businesses.",
        included: [
          "Trade account application & approval",
          "Customer-specific pricing lists",
          "Minimum order value enforcement",
          "Quick reorder functionality",
        ],
      },
      {
        title: "Recurring Deliveries & Compliance",
        desc: "Automated ordering and regulatory compliance features.",
        included: [
          "Weekly/bi-weekly delivery subscription setup",
          "Allergen & certification display",
          "Cold chain shipping rules",
          "Google Analytics & reporting",
        ],
      },
    ],
    setupIncludes: [
      "Food supply Shopify theme installation",
      "Product upload with allergen, origin, certification data",
      "Trade account portal (password-protected)",
      "Bulk pricing tiers & case discount setup",
      "Minimum order value enforcement",
      "Recurring delivery subscription configuration",
      "Cold chain / refrigerated shipping rules",
      "Net payment terms for trade accounts",
      "Quick reorder form for standing orders",
      "Domain connection & SSL certificate",
      "Compliance labelling sections",
      "Pre-launch QA & test trade order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Supply Chain & Customer Brief",
        body: "We review your product catalogue, trade customer types, pricing structure, delivery schedules, and compliance requirements.",
      },
      {
        num: "02",
        title: "Professional Theme Design",
        body: "A clean, efficient Shopify theme is installed and configured for trade buyers — built for fast, repeat ordering.",
      },
      {
        num: "03",
        title: "Products, Compliance & Pricing",
        body: "All products uploaded with allergen data, compliance certifications, and trade pricing tiers configured.",
      },
      {
        num: "04",
        title: "Trade Portal & Deliveries",
        body: "Trade account setup, recurring delivery subscriptions, cold chain shipping, and all order infrastructure completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test trade order, compliance review, and recorded walkthrough of your food supply store.",
      },
    ],
    faqs: [
      {
        q: "Can you set up a trade ordering portal for food businesses?",
        a: "Yes. We create a password-protected trade portal where approved restaurant and cafe customers can log in, see their pricing, and place orders efficiently.",
      },
      {
        q: "Can you set up recurring delivery schedules?",
        a: "Yes. We integrate subscription apps to create weekly or bi-weekly standing order deliveries for trade customers with automatic billing.",
      },
      {
        q: "Can you enforce minimum order values for food supply?",
        a: "Yes. We configure minimum order value thresholds at checkout, with clear messaging explaining the minimum to buyers before they complete their order.",
      },
      {
        q: "Can you display allergen and certification information?",
        a: "Yes. We add allergen sections, country of origin, and certification badges (organic, halal, kosher, etc.) to every relevant product page.",
      },
      {
        q: "Can you configure cold chain shipping for perishables?",
        a: "Yes. We set up refrigerated delivery options, temperature-controlled shipping rules, and associated surcharges for perishable food products.",
      },
      {
        q: "How long does setup take for a food supply business?",
        a: "4–7 business days depending on the complexity of trade pricing, compliance requirements, and recurring delivery workflows.",
      },
    ],
    metaTitle: "Shopify Store Setup for Food Supply Brands | ShopifyTasker",
    metaDescription:
      "Shopify setup for food supply brands. Trade portal, bulk pricing & allergen compliance. Launch in 4–7 days. Pay after delivery.",
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CANDLE BUSINESS (dedicated)
  // ─────────────────────────────────────────────────────────────────────────
  {
    slug: "candle-business",
    name: "Candle Business",
    tagline: "Launch and grow your candle brand on Shopify",
    headline: "Shopify Store Setup for Candle Businesses",
    subheadline:
      "Launch a professional Shopify candle store with scent collections, candle subscription clubs, corporate gifting, private label wholesale, and the artisan brand story that turns first-time buyers into loyal customers.",
    description:
      "Whether you make soy candles, beeswax pillars, or luxury jar candles — your Shopify store needs to communicate your craft, present your scent range beautifully, and offer the gifting and subscription features that drive repeat revenue for candle businesses.",
    accentColor: "bg-amber-50",
    category: "Lifestyle & Gifts",
    stats: [
      { value: "2–4 days", label: "Average setup time" },
      { value: "Subscriptions", label: "Candle club setup" },
      { value: "£0 upfront", label: "Pay after delivery" },
      { value: "Corporate", label: "B2B gifting orders" },
    ],
    whyShopify: [
      {
        title: "Scent Collection Navigation",
        desc: "Organise your candle range by fragrance family, scent intensity, and seasonal collection so customers can browse intuitively.",
      },
      {
        title: "Candle Subscription Club",
        desc: "Monthly subscription boxes where subscribers receive a new scent each month with recurring billing and flexible management.",
      },
      {
        title: "Corporate & Bulk Gifting",
        desc: "A dedicated corporate gifting portal for businesses ordering branded candles in bulk — a significant revenue stream for candle makers.",
      },
      {
        title: "Private Label Wholesale",
        desc: "Offer private label candles to spas, hotels, and boutiques through a wholesale ordering portal with custom labelling options.",
      },
      {
        title: "Personalised Labels",
        desc: "Custom label text for wedding favours, corporate gifts, and special occasions — ordered directly through the product page.",
      },
      {
        title: "Burn Time & Safety Data",
        desc: "Display burn time, wick type, wax blend, fragrance notes, and safety information clearly on every product page.",
      },
    ],
    services: [
      {
        title: "Complete Store Setup",
        desc: "Full Shopify setup for candle makers, candle brands, and artisan wax businesses.",
        included: [
          "Artisan candle theme installation",
          "Product upload with full fragrance data",
          "Scent collection structure",
          "Subscription club setup",
          "Payment & shipping configuration",
          "Domain & SSL connection",
        ],
      },
      {
        title: "Gifting & Corporate",
        desc: "Revenue streams beyond retail for your candle business.",
        included: [
          "Corporate gifting enquiry portal",
          "Private label wholesale setup",
          "Personalised label text fields",
          "Bulk order pricing configuration",
        ],
      },
      {
        title: "Brand Story & SEO",
        desc: "The storytelling and discoverability that builds a candle brand.",
        included: [
          "Maker / brand story page",
          "Fragrance note & wax blend descriptions",
          "SEO meta setup",
          "Google Analytics & Meta Pixel",
        ],
      },
    ],
    setupIncludes: [
      "Artisan candle Shopify theme installation",
      "Product upload with fragrance notes, burn time, safety info",
      "Scent family & seasonal collection structure",
      "Candle subscription club app integration",
      "Corporate & bulk gifting order portal",
      "Private label wholesale pricing",
      "Personalised label text field at product level",
      "Gift wrapping & message option at checkout",
      "Payment gateway configuration",
      "Tracked & standard shipping setup",
      "Domain connection & SSL certificate",
      "Pre-launch QA & test order",
    ],
    processSteps: [
      {
        num: "01",
        title: "Brand & Product Brief",
        body: "We review your candle range, scent collections, subscription plans, corporate gifting requirements, and brand story.",
      },
      {
        num: "02",
        title: "Artisan Theme Design",
        body: "A warm, premium Shopify theme is installed and customised to your candle brand's identity — communicating craft and quality.",
      },
      {
        num: "03",
        title: "Products, Scents & Collections",
        body: "All products uploaded with fragrance notes, burn times, safety info, and scent family collection structure.",
      },
      {
        num: "04",
        title: "Subscriptions, Corporate & Apps",
        body: "Candle club subscriptions, corporate gifting portal, private label wholesale, and all payment/shipping setup completed.",
      },
      {
        num: "05",
        title: "Launch & Handover",
        body: "Full QA, test order, and recorded walkthrough of your candle business store.",
      },
    ],
    faqs: [
      {
        q: "Can you set up a monthly candle subscription club?",
        a: "Yes. We integrate subscription apps (Appstle, Seal Subscriptions) to create monthly candle club subscriptions with recurring billing and subscriber management.",
      },
      {
        q: "Can you set up corporate gifting orders for candles?",
        a: "Yes. We create a corporate gifting enquiry page and bulk order pricing for businesses wanting to order branded candles in large quantities.",
      },
      {
        q: "Can you set up private label wholesale for spas and boutiques?",
        a: "Yes. We configure a wholesale portal with private label options, bulk pricing tiers, and a trade application process for B2B buyers.",
      },
      {
        q: "Can customers personalise candle labels?",
        a: "Yes. We add custom label text fields to product pages for personalised messages, names, and dates — popular for weddings and corporate orders.",
      },
      {
        q: "Can you display fragrance notes and burn times?",
        a: "Yes. We add fragrance note, burn time, wax type, and safety information sections to every product page.",
      },
      {
        q: "How long does setup take for a candle business store?",
        a: "2–4 business days for a standard setup. Subscription, wholesale, and corporate gifting features may extend this to 5–7 days.",
      },
    ],
    metaTitle: "Shopify Store Setup for Candle Businesses | ShopifyTasker",
    metaDescription:
      "Shopify setup for candle businesses. Subscriptions, corporate gifting & custom labels. Launch in 2–4 days. Pay after delivery.",
  },
];

// Helper to get all industry slugs
export const industrySlug = industries.map((i) => ({ industry: i.slug }));

// Helper to find industry by slug
export function getIndustry(slug: string): IndustryData | undefined {
  return industries.find((i) => i.slug === slug);
}

// Categories for the hub page
export const categories = [
  "All",
  "Fashion & Apparel",
  "Beauty & Wellness",
  "Food & Drink",
  "Lifestyle & Gifts",
  "Home & Living",
  "Sports & Outdoor",
  "Art & Crafts",
  "Baby & Kids",
  "Pets & Animals",
  "Health & Wellness",
];
