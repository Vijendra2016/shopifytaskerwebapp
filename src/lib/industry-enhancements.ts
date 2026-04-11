export type IndustryChallenge = {
  title: string;
  desc: string;
};

export type IndustryEnhancement = {
  heroHeadline: string;
  heroSub: string;
  challenges: IndustryChallenge[];
  comparisonRows: { label: string }[]; // first 2 rows are industry-specific
};

const enhancements: Record<string, IndustryEnhancement> = {
  florist: {
    heroHeadline: "Shopify for Florists — Built to Take Orders, Not Just Look Pretty",
    heroSub: "Local delivery zones, same-day cutoffs, bouquet subscriptions and gift messaging — set up properly so your flower shop sells online the way it should.",
    challenges: [
      { title: "Local delivery logic is complex", desc: "Postcode-based delivery zones, minimum order values per area, and same-day cutoff times require proper Shopify configuration — not just a basic shipping rule. We build it right." },
      { title: "Subscription bouquets need recurring billing", desc: "Weekly or monthly subscriptions with automatic billing, delivery scheduling and a customer portal aren't available out of the box. We set up the full recurring order system." },
      { title: "Seasonal collections going live at the wrong time", desc: "Valentine's Day and Mother's Day collections appearing too early or too late costs real revenue. We configure automated publish/hide scheduling so it's hands-off." },
      { title: "Mobile checkout dropping orders", desc: "Over 70% of flower orders happen on mobile. A poorly optimised checkout kills conversions. We build your store mobile-first from the start." },
    ],
    comparisonRows: [
      { label: "Florist-specific delivery zone logic" },
      { label: "Bouquet subscription & repeat order setup" },
    ],
  },

  "kids-fashion": {
    heroHeadline: "Shopify for Kids Fashion — Built to Sell, Not Just Look Good",
    heroSub: "Age-range filtering, size variant setup, gender-neutral collections and gift-ready checkout — everything a kids clothing brand needs to convert browsers into buyers.",
    challenges: [
      { title: "Size & age variant setup done wrong = lost sales", desc: "Shopify's default variant system isn't built for kids clothing. Without proper age-range filtering and size guides, customers can't find the right product and bounce. We configure it correctly." },
      { title: "Gift buyers need a smooth experience", desc: "A large share of kids fashion purchases are gifts. Without gift messaging, gift wrapping and wishlist features, you're losing a significant conversion opportunity." },
      { title: "Collection structure overwhelms parents", desc: "Parents want to find age-appropriate products fast. Without smart collection architecture — by age, gender, occasion — your catalogue feels like a wall. We build logical navigation." },
      { title: "Returns from wrong size", desc: "Without a proper size guide and fit recommendations, returns are high. We integrate size guides that reduce wrong-size purchases and post-purchase regret." },
    ],
    comparisonRows: [
      { label: "Kids size chart & age-range filtering" },
      { label: "Gift checkout flow (wrapping, messaging)" },
    ],
  },

  "handmade-soap": {
    heroHeadline: "Sell Handmade Soap Online Properly — Not Just on Etsy",
    heroSub: "Ingredient transparency, scent profiles, subscription boxes and wholesale pricing — built into a Shopify store that reflects the care you put into every bar.",
    challenges: [
      { title: "Ingredient and allergen info is hard to display cleanly", desc: "Customers buying natural and handmade products want to see what's in them. Fitting ingredient lists, allergen notices and certifications into a product page without cluttering it requires proper template development." },
      { title: "Subscription boxes aren't a default Shopify feature", desc: "Monthly soap subscription boxes with recurring billing, skip controls and customer management need proper app integration and configuration. We set up the full subscription system." },
      { title: "Wholesale alongside retail on one store", desc: "Many soap makers sell to boutiques and spas at wholesale prices. Running both channels on one store without confusing retail customers requires careful B2B setup." },
      { title: "Product photography layout makes or breaks conversion", desc: "Handmade products live or die on how they're presented online. The layout, image sizes and product page structure need to showcase texture, colour and ingredients visually." },
    ],
    comparisonRows: [
      { label: "Ingredient transparency & allergen sections" },
      { label: "Soap subscription box setup" },
    ],
  },

  "custom-jewellery": {
    heroHeadline: "Shopify for Custom Jewellery — Built for Premium Buyers",
    heroSub: "Engraving fields, ring size selectors, bespoke commission flows and high-end design — so your store converts the way a premium jewellery brand deserves.",
    challenges: [
      { title: "Personalisation fields at checkout are deceptively complex", desc: "Engraving text, ring size, metal choice, stone selection — each needs its own input with validation and clear pricing. Generic Shopify setups get this wrong. We build it properly." },
      { title: "Bespoke commissions fall through without a proper flow", desc: "Customers wanting custom pieces often can't find a clear way to enquire. Without a structured commission flow, you lose high-value sales to a missed email. We build a proper request system." },
      { title: "Trust is everything at a premium price point", desc: "Buyers spending £500+ on jewellery need trust signals before they buy. Hallmarks, certification info, returns policy visibility and premium design all have to be right." },
      { title: "Bundle gift sets increase AOV significantly", desc: "Earrings, necklaces and bracelets sold as curated gift sets with a bundle discount drive significantly higher order values. Without a bundle builder, you're leaving revenue on the table." },
    ],
    comparisonRows: [
      { label: "Engraving & personalisation at checkout" },
      { label: "Bespoke commission enquiry flow" },
    ],
  },

  "pet-store": {
    heroHeadline: "Pet Store Shopify — Subscriptions, Bundles & Repeat Buyers",
    heroSub: "Auto-ship food subscriptions, breed-specific filtering, vet-recommended badges and bundle deals — the features pet store owners actually need to grow.",
    challenges: [
      { title: "Auto-ship subscriptions are complex to configure correctly", desc: "Pet food subscriptions with multiple billing frequencies, skip/pause controls and a customer portal aren't available by default. We set up the full auto-ship system so it just works." },
      { title: "Breed and pet-type filtering requires custom collection logic", desc: "Customers want to find products for their specific pet quickly. Without proper filtering by pet type, breed size and life stage, they bounce. We build the collection architecture correctly." },
      { title: "Trust signals for pet health products are critical", desc: "Vet-recommended badges, ingredient transparency and safety certifications matter hugely for pet owners. We build these into the product template in a way that's visible and credible." },
      { title: "Bundle deals for new pet owners drive massive AOV", desc: "New pet owners need everything at once. Welcome bundle packs — food, accessories, toys — with a bundle discount are one of the highest converting product types. We set them up properly." },
    ],
    comparisonRows: [
      { label: "Auto-ship pet food subscription setup" },
      { label: "Breed & pet-type product filtering" },
    ],
  },

  "home-decor": {
    heroHeadline: "Home Decor Shopify Store Built to Browse, Inspire & Convert",
    heroSub: "Room-based collections, colour swatch variants, lifestyle photography layout and wholesale trade pricing — built for home decor brands that want to sell at scale.",
    challenges: [
      { title: "Room-based navigation is critical for conversion", desc: "Customers shop by room — living room, bedroom, kitchen. Without room-based collection pages that feel curated and styled, they browse without buying. We structure your catalogue around how they actually shop." },
      { title: "Colour and material variants need visual swatches", desc: "Showing 'Colour: Sage Green' as plain text loses sales. Visual colour swatches with zoom functionality let customers see exactly what they're getting. We configure this properly." },
      { title: "Trade pricing for interior designers", desc: "Interior designers and trade buyers expect a private pricing tier. Without B2B setup, you're either pricing your retail customers too high or your trade customers too low. We separate them cleanly." },
      { title: "Social proof from Instagram is your best content", desc: "Home decor is a visual, aspirational category. A shoppable Instagram feed section that pulls your best styling content into the store is a proven conversion driver. We integrate it properly." },
    ],
    comparisonRows: [
      { label: "Room-based collection page structure" },
      { label: "Visual colour swatch variant system" },
    ],
  },

  "food-beverage": {
    heroHeadline: "Shopify for Food & Beverage — Subscriptions & Compliance",
    heroSub: "Subscription boxes, allergen filtering, hamper builders and international shipping — everything a food brand needs to sell online correctly from day one.",
    challenges: [
      { title: "Allergen and dietary filtering is a legal and UX requirement", desc: "Customers with dietary requirements need to quickly identify safe products. Without proper allergen labelling and dietary filters — vegan, gluten-free, nut-free — you face both a compliance risk and lost sales." },
      { title: "Subscription boxes need more than a recurring payment", desc: "A proper food subscription includes billing frequency options, skip/pause controls, delivery scheduling and a customer portal. Generic setups miss half of this. We build it completely." },
      { title: "Hamper and bundle builders drive huge AOV uplifts", desc: "Customers buying food as gifts want to build their own selection. A step-by-step hamper builder that shows the running total and allows product swaps is a significant revenue driver." },
      { title: "International shipping for perishables is complex", desc: "Temperature-sensitive products, customs declarations, carrier restrictions and delivery windows all need to be configured correctly. We set up your shipping zones and rules properly." },
    ],
    comparisonRows: [
      { label: "Allergen & dietary filtering setup" },
      { label: "Food subscription box system" },
    ],
  },

  "fashion-clothing": {
    heroHeadline: "Fashion Shopify Store Built for Drops, Size Guides & Global Sales",
    heroSub: "Limited drop launches, fit recommendation tools, editorial lookbooks and multi-currency — the features fashion brands need to convert at every price point.",
    challenges: [
      { title: "Size guides and fit tools reduce returns dramatically", desc: "Without a proper size guide, fit recommendation tool and clear measurement info, return rates on clothing run at 30%+. We build this into every product page in a way that customers actually use." },
      { title: "Limited drop launches need pre-order and waitlist logic", desc: "A botched drop launch — overselling, broken checkout, no waitlist for sold-out styles — destroys customer trust. We configure pre-order and waitlist functionality properly before you go live." },
      { title: "Multi-currency for international buyers", desc: "Fashion brands sell globally. Shopify Markets with auto currency switching, localised pricing and correct tax handling per region requires proper setup. We configure it end to end." },
      { title: "Editorial lookbooks need proper page architecture", desc: "A product catalogue alone doesn't build a fashion brand. Editorial lookbook pages with styled photography, shop-the-look functionality and collection storytelling are what separate brands from commodity stores." },
    ],
    comparisonRows: [
      { label: "Size guide & fit recommendation tool" },
      { label: "Limited drop & waitlist launch setup" },
    ],
  },

  "health-wellness": {
    heroHeadline: "Shopify for Health & Wellness — Trust, Compliance & Growth",
    heroSub: "Subscribe-and-save, product recommendation quizzes, compliance-ready product pages and a design that communicates trust — before a customer reads a word.",
    challenges: [
      { title: "Supplement pages need compliance-ready structure", desc: "FDA and ASA guidelines require specific disclaimer placement, claim restrictions and ingredient visibility. Getting this wrong is both a legal risk and a conversion killer. We structure every product page correctly." },
      { title: "Subscribe-and-save is expected — not optional", desc: "Health product customers want to auto-reorder. Without a subscribe-and-save option with flexible frequencies and a proper customer portal, you're losing recurring revenue to competitors who offer it." },
      { title: "Product recommendation quizzes significantly lift conversions", desc: "A 'find your supplement' quiz that recommends products based on health goals converts at 20–30% to purchase. It's one of the highest-ROI features for health brands and requires proper Shopify development to implement well." },
      { title: "Trust signals are non-negotiable in health categories", desc: "Certifications, lab testing badges, clean ingredient messaging and a professional design all have to work together. A cheap-looking health website doesn't sell. We build for credibility first." },
    ],
    comparisonRows: [
      { label: "FDA/ASA compliant product page structure" },
      { label: "Health product quiz & recommendation engine" },
    ],
  },

  "bakery-sweets": {
    heroHeadline: "Shopify for Bakeries — Custom Cakes, Subscriptions & Fresh Order Logic",
    heroSub: "Custom cake order flows, treat box subscriptions, daily cutoff times and gift-ready checkout — so your bakery takes the right orders at the right time.",
    challenges: [
      { title: "Custom cake orders need structured input fields", desc: "Size, flavour, filling, personalisation message, delivery date — a custom cake order has many moving parts. Without structured input at the product level, every order becomes an admin headache." },
      { title: "Order cutoff times are critical for fresh products", desc: "Taking a 9pm order for next-day fresh delivery you can't fulfil is a customer service disaster. Proper cutoff time configuration — by product type and delivery day — prevents this." },
      { title: "Treat box subscriptions are a major revenue stream", desc: "Monthly sweet boxes with curated contents and recurring billing are one of the fastest-growing revenue models for bakeries. We set up the full subscription system including a 'choose your treats' selector." },
      { title: "Presentation drives impulse purchases in food", desc: "Warm tones, beautiful food photography layout and an appetising homepage design genuinely increase conversion for bakeries. We build the design to make people hungry, not just informed." },
    ],
    comparisonRows: [
      { label: "Custom cake order form & input fields" },
      { label: "Fresh product order cutoff logic" },
    ],
  },

  "candles-fragrance": {
    heroHeadline: "Shopify for Candles — Scent Profiles & Personalisation",
    heroSub: "Top/middle/base note pages, personalised label engraving, gift set bundles and subscription candle boxes — built for candle brands that take their online presence seriously.",
    challenges: [
      { title: "Selling a scent online needs more than a description", desc: "Customers can't smell through a screen. Top, middle and base note descriptions, mood tags, wax type and burn time info all need to be structured cleanly into the product template to communicate the full experience." },
      { title: "Personalised candles need real-time input", desc: "Custom label engraving or personalised messages require an input field on the product page with a preview where possible. Without this, personalised candles can't scale as a product line." },
      { title: "Gift set bundles drive significant seasonal revenue", desc: "Candle and diffuser gift sets with bundle pricing are high-converting at Christmas, Mother's Day and Valentine's Day. Without a proper bundle builder, you can't capitalise on seasonal demand." },
      { title: "Subscription candle clubs need proper recurring logic", desc: "Monthly candle subscriptions with scent rotation, automatic billing and a customer portal are expected by candle brand customers. We set up the full subscription system." },
    ],
    comparisonRows: [
      { label: "Scent profile product template sections" },
      { label: "Personalised label engraving with preview" },
    ],
  },

  "skincare-beauty": {
    heroHeadline: "Shopify for Skincare — Quizzes, Routines & Ingredient Transparency",
    heroSub: "Skin type quiz, AM/PM routine builder, before/after galleries and clean ingredient sections — everything a skincare brand needs to build trust and convert at scale.",
    challenges: [
      { title: "Customers don't know which products to buy", desc: "Without a skin type quiz or routine recommendation system, customers browse without converting. A well-built quiz that recommends the right products converts at 20–30% — far above average browse-to-buy rates." },
      { title: "Ingredient transparency is a brand differentiator", desc: "Clean beauty customers actively look for ingredient lists before buying. A proper ingredient breakdown section on each product page is a trust signal that reduces purchase hesitation significantly." },
      { title: "Before/after proof needs to be integrated cleanly", desc: "Before/after imagery is the most persuasive content for skincare. Integrating it as a comparison slider on product pages — rather than buried in a gallery — requires proper Shopify development." },
      { title: "Routine builders increase basket size dramatically", desc: "Customers who buy a complete AM/PM routine spend 3–4x more than single-product buyers. A step-by-step routine builder that guides them through complementary products is a high-value feature to build." },
    ],
    comparisonRows: [
      { label: "Skin type quiz & product recommendation" },
      { label: "AM/PM routine builder section" },
    ],
  },

  "wedding-bridal": {
    heroHeadline: "Shopify for Bridal — Appointments, Wishlists & Custom Order Flows",
    heroSub: "In-store fitting bookings, bridal wishlist sharing, custom size and fabric options — a Shopify store built for the high-value, high-consideration bridal buyer.",
    challenges: [
      { title: "Appointment booking needs to be seamless from the product page", desc: "Brides who see a gown they love should be able to book a fitting from that page without leaving the shopping experience. We integrate booking systems directly into the Shopify product template." },
      { title: "Custom sizing and fabric requires structured variant logic", desc: "Bridal gowns aren't off-the-shelf. Custom measurements, fabric choices and made-to-order options need proper Shopify configuration so brides can specify exactly what they need at checkout." },
      { title: "Wishlists drive word-of-mouth acquisition", desc: "Brides share their favourite gowns with their bridal party. A proper wishlist and share feature turns every bride into a referral engine — bringing in bridesmaids, mothers of the bride and guests." },
      { title: "Premium design is non-negotiable at a bridal price point", desc: "A bride won't book a £2,000 gown from a website that looks budget. The typography, photography treatment, white space and overall aesthetic need to match the emotional weight of the purchase." },
    ],
    comparisonRows: [
      { label: "Bridal appointment booking integration" },
      { label: "Custom size & made-to-order variant setup" },
    ],
  },

  "coffee-tea": {
    heroHeadline: "Shopify Store Setup for Coffee & Tea Brands That Drive Subscriptions",
    heroSub: "Launch in 2–4 days with subscription systems, roast filters & wholesale setup.we not only build a beautiful store, we build the features that actually move the needle for coffee and tea brands.",
    challenges: [
      { title: "Subscriptions are the backbone of coffee revenue", desc: "Weekly or monthly whole-bean subscriptions with grind preference, roast selection, delivery day choice and a proper customer portal are complex to configure. We set up the full system end to end." },
      { title: "Origin storytelling needs structure in the product template", desc: "Farm name, altitude, processing method, tasting notes and brew guide — this content needs a structured product section, not just a long description paragraph. We build the template right." },
      { title: "Roast and flavour filtering is a discovery requirement", desc: "Coffee catalogues with 20–50 SKUs become overwhelming without proper filtering. Filtering by roast level, origin, flavour profile and brew method helps customers find their perfect coffee quickly." },
      { title: "Gifting is a huge underserved revenue stream", desc: "Coffee gift sets — bags, equipment and accessories bundled together — are high-value and under-optimised on most coffee Shopify stores. We build bundle pages that make gifting a clean, high-AOV experience." },
    ],
    comparisonRows: [
      { label: "Coffee subscription with grind & delivery preferences" },
      { label: "Origin storytelling product template sections" },
    ],
  },

  "sports-fitness": {
    heroHeadline: "Shopify for Sports & Fitness — Equipment & Supplements",
    heroSub: "Training bundle packs, sport-specific collections, subscribe-and-save supplements and weight/resistance variant setup — built for fitness brands that want higher AOV.",
    challenges: [
      { title: "Equipment variants — weight, resistance, size — need clean setup", desc: "Dumbbells in 8 weight options, resistance bands in 5 levels — without proper variant configuration, inventory management is a nightmare and customers can't see what's in stock. We configure it correctly." },
      { title: "Sport-specific collections reduce bounce significantly", desc: "A crossfit athlete and a yoga practitioner need completely different products. Without sport-specific collection pages, customers browse a wall of products irrelevant to them and leave." },
      { title: "Subscribe-and-save supplements alongside one-time equipment", desc: "Selling both recurring supplements and one-time equipment on the same store requires careful UX setup so customers aren't confused about what they're buying. We handle both product types cleanly." },
      { title: "Training protocol bundle packs drive AOV", desc: "Full training setup bundles — mat, weights, bands, accessories at a bundle price — are one of the highest converting product formats for fitness brands. We build the bundle logic and pricing correctly." },
    ],
    comparisonRows: [
      { label: "Sport-specific collection page architecture" },
      { label: "Equipment + supplement dual-channel setup" },
    ],
  },

  "art-prints": {
    heroHeadline: "Shopify for Artists & Printmakers — Prints & Commissions",
    heroSub: "Print size and framing variants, room mockup visualiser, bespoke commission enquiry and artist collection pages — built so your art actually sells online.",
    challenges: [
      { title: "Print size, paper and framing variants are complex", desc: "A single artwork sold in 8 sizes, 3 paper types and with or without framing creates 48+ variants. Without clean variant setup and automatic pricing, the product page becomes confusing and the order fulfilment chaotic." },
      { title: "Customers can't visualise art without a room mockup", desc: "The number one barrier to buying art online is not being able to picture it in your space. A room mockup visualiser that shows prints on real walls converts hesitant buyers and reduces returns." },
      { title: "Bespoke commissions need a proper request flow", desc: "Artists who take commissions lose enquiries to unanswered emails and informal messages. A structured commission form — brief, size, budget, timeline — feeds into a proper workflow and captures high-value leads." },
      { title: "Collection organisation drives discovery", desc: "Filtering by artist, theme, colour palette and room makes art catalogues browsable. Without proper collection architecture, customers with genuine purchase intent leave because they can't find what they're looking for." },
    ],
    comparisonRows: [
      { label: "Print size, paper & framing variant setup" },
      { label: "Room mockup visualiser integration" },
    ],
  },

  "baby-nursery": {
    heroHeadline: "Shopify for Baby & Nursery — Safe, Trusted & Built Right",
    heroSub: "Safety certification display, age-range filtering, nursery bundle packs and gift registry — designed for the way new parents actually shop for their baby.",
    challenges: [
      { title: "Safety certification visibility is a purchase trigger", desc: "Parents buying for babies will not purchase without visible safety certifications. CE marks, OEKO-TEX labels and age-appropriate warnings need to be prominent on every product page, not buried in a description." },
      { title: "Age-range filtering is how parents navigate", desc: "New parents search by their baby's age, not product category. Without age-range filtering — newborn, 0–3m, 3–6m, 6–12m — your catalogue is inaccessible to your most important buyer type." },
      { title: "Nursery bundles dramatically increase order value", desc: "Parents setting up a nursery need multiple products at once. Full nursery setup bundles with cot, bedding, mobile and accessories at a bundle price turn a £120 order into a £340 order." },
      { title: "Gift registries bring in entirely new customers", desc: "A baby shower gift registry that expecting parents share with their network brings guests to your store who would never have found it otherwise. It's a word-of-mouth acquisition system built into your website." },
    ],
    comparisonRows: [
      { label: "Safety certification & age-appropriate labelling" },
      { label: "Baby shower gift registry feature" },
    ],
  },

  "hair-extensions": {
    heroHeadline: "Shopify for Hair Extensions — Built to Match, Convert & Reduce Returns",
    heroSub: "Hair match quiz, visual shade swatches, before/after galleries and install bundle packs — so your extension store converts browsers into buyers and keeps returns low.",
    challenges: [
      { title: "Shade matching is the #1 barrier to purchase", desc: "Customers won't buy hair extensions unless they're confident the shade matches. A hair match quiz that recommends shades based on natural colour and texture, combined with zoomable swatch images, is the most important conversion feature for this category." },
      { title: "Returns from wrong shade destroy margins", desc: "Hair extension returns are expensive — the products can't always be resold. A proper shade matching system, zoom swatches and clear undertone descriptions reduce wrong-shade purchases by 40–50%." },
      { title: "Before/after UGC is your strongest selling tool", desc: "Real customer before/after photos outperform professional imagery for hair extension brands. Without a structured UGC gallery section on collection and product pages, you're not using your most persuasive content." },
      { title: "Install bundle packs are essential for higher AOV", desc: "Customers installing extensions need weft, closure, frontal or tape-in sets — often multiple products. Bundle packs with clear installation guidance and a discount increase AOV and reduce customer confusion about what to buy." },
    ],
    comparisonRows: [
      { label: "Hair match quiz & shade swatch system" },
      { label: "Before/after UGC gallery integration" },
    ],
  },

  "hair-wigs": {
    heroHeadline: "Shopify for Hair Wigs — Cap Size, Lace Type & Conversions",
    heroSub: "Density selectors, lace type education sections, virtual try-on and wig care guides — built so wig buyers get the right product and keep it.",
    challenges: [
      { title: "Cap size, density and lace type variants confuse buyers", desc: "Wig purchases involve multiple complex choices — cap size, density percentage, lace type, colour. Without clean, guided variant selection and clear explanations of each option, customers abandon before buying." },
      { title: "Lace type education reduces wrong purchases significantly", desc: "Many buyers don't know the difference between HD lace, transparent lace and 5x5. Without an education section on the product page explaining the differences clearly, returns from wrong expectations are high." },
      { title: "Virtual try-on converts hesitant buyers", desc: "The biggest barrier to buying a wig online is not knowing how it will look. A virtual try-on feature where customers upload their photo to preview the wig on themselves is a high-impact conversion tool." },
      { title: "Wig care content reduces post-purchase regret", desc: "Customers who don't know how to care for their wig damage it, then blame the product. Proper wig care guide pages linked from every product reduce complaints and build long-term customer trust." },
    ],
    comparisonRows: [
      { label: "Cap size, density & lace type variant setup" },
      { label: "Lace type education section on product pages" },
    ],
  },

  "car-accessories": {
    heroHeadline: "Shopify for Car Accessories — Fitment Logic, Bundles & High AOV",
    heroSub: "Year/make/model fitment filtering, guaranteed fit badges, interior bundle packs and category-specific navigation — built so car buyers find the right product every time.",
    challenges: [
      { title: "Fitment compatibility is the core purchase concern", desc: "Car accessory buyers won't purchase without knowing a product fits their vehicle. A year/make/model fitment filter that shows only compatible products removes the biggest objection in the category." },
      { title: "Wrong fitment returns are expensive and avoidable", desc: "Returns from incompatible parts cost more to process than most products are worth. Proper fitment filtering, guaranteed fit badges and clear compatibility notes reduce this cost significantly." },
      { title: "Interior bundle packs drive 2x order values", desc: "Seat covers, steering wheel covers, floor mats and dash accessories are bought together by the same customer. Bundle packs with a discount turn a £65 accessory order into a £120 interior upgrade purchase." },
      { title: "Category navigation needs vehicle-type logic", desc: "Customers searching for accessories for a van have no interest in sports car products. Vehicle-type based navigation and collection structure makes your catalogue relevant and reduces bounce." },
    ],
    comparisonRows: [
      { label: "Year/make/model fitment filter system" },
      { label: "Vehicle-type collection architecture" },
    ],
  },

  "b2b-wholesale": {
    heroHeadline: "Shopify B2B & Wholesale — Tiered Pricing, MOQs & Net Payment Terms",
    heroSub: "Trade account tiers, minimum order quantities, Net 30 payment terms and a wholesale application flow — built for businesses that sell to other businesses.",
    challenges: [
      { title: "Retail and wholesale on one store without confusion", desc: "Running both a retail storefront and a wholesale channel on one Shopify store requires careful B2B setup. Without it, retail customers see trade prices or trade customers get a poor experience. We separate them cleanly." },
      { title: "Tiered pricing for different account levels", desc: "Bronze, silver and gold wholesale accounts each expect different pricing. Native Shopify B2B supports this but requires proper configuration. A workaround solution will create pricing errors and frustrated trade buyers." },
      { title: "Minimum order quantities need enforcement at checkout", desc: "MOQs that aren't enforced at checkout result in trade orders you can't fulfil profitably. We configure MOQs by product and category so the checkout enforces them automatically." },
      { title: "Net 30 payment terms are expected by trade buyers", desc: "B2B customers in most industries expect to pay on terms, not by card at checkout. Configuring Net 30 payment options for approved trade accounts while keeping card-only for retail requires careful Shopify setup." },
    ],
    comparisonRows: [
      { label: "Tiered wholesale pricing with Shopify B2B" },
      { label: "Net 30 payment terms for trade accounts" },
    ],
  },

  "food-supply": {
    heroHeadline: "Shopify for Food Supply — Trade Orders & Compliance",
    heroSub: "Bulk ordering with MOQs, allergen compliance, recurring standing orders and cold chain delivery — built for food suppliers selling to restaurants, caterers and retailers.",
    challenges: [
      { title: "Allergen and nutritional compliance is legally required", desc: "Food businesses supplying restaurants and retailers must display allergen information, nutritional data and use-by guidance correctly. We build compliant product pages that meet UK and EU food labelling requirements." },
      { title: "Standing orders need recurring scheduling logic", desc: "Restaurant clients want the same order delivered every week without re-ordering manually. A standing order system with recurring billing and delivery scheduling removes admin for both parties." },
      { title: "Bulk pricing tiers need to be automatic", desc: "Food supply businesses offer better prices for larger quantities. Without automatic bulk pricing tiers that apply at checkout, you either over-discount or manually adjust every order — neither is sustainable." },
      { title: "Cold chain delivery requires specialist shipping configuration", desc: "Temperature-sensitive products need specific carrier options, delivery windows and packaging rules. Getting the shipping configuration wrong means damaged products, rejected deliveries and lost clients." },
    ],
    comparisonRows: [
      { label: "Food allergen & nutritional compliance setup" },
      { label: "Standing order & recurring delivery system" },
    ],
  },

  "candle-business": {
    heroHeadline: "Shopify for Candle Businesses — Personalisation & Wholesale",
    heroSub: "Custom label engraving, scent profile pages, B2B wholesale channel and candle-making workshop bookings — built for candle brands ready to scale beyond Etsy.",
    challenges: [
      { title: "Personalised candles need proper input and preview", desc: "Wedding favour candles with custom labels, personalised gift candles with engraved messages — these products need structured text input on the product page, ideally with a live preview so customers see what they're ordering." },
      { title: "Scent needs to be sold through content, not just a name", desc: "Customers can't smell through a screen. Top, middle and base note descriptions, mood tags, wax type, burn time and care instructions all need to be structured into the product template so the sensory experience is communicated." },
      { title: "Wholesale for boutiques and spas is a major revenue channel", desc: "Many candle businesses supply boutiques, hotels and spas at wholesale prices. Running a trade channel alongside D2C on one Shopify store — with trade pricing and a stockist application form — requires proper B2B setup." },
      { title: "Workshop bookings alongside product sales need integration", desc: "Candle-making workshops and D2C product sales appeal to the same customer but need different checkout flows. Integrating a booking system into the Shopify store so customers can buy both in one session requires proper development." },
    ],
    comparisonRows: [
      { label: "Personalised candle label with live preview" },
      { label: "Wholesale channel + workshop booking integration" },
    ],
  },
};

export function getEnhancement(slug: string): IndustryEnhancement | null {
  return enhancements[slug] ?? null;
}
