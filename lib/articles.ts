export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMins: number;
  keywords: string[];
  // body is an ordered list of blocks
  body: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "ul"; items: string[] }
  >;
};

export const articles: Article[] = [
  {
    slug: "how-to-source-products-from-india",
    title: "How to Source Products from India: A Buyer's Guide",
    description:
      "A practical, beginner-friendly guide for international buyers sourcing products from India — from defining your requirement to quality checks and documentation, by Infinity Exports.",
    date: "2026-06-01",
    readMins: 6,
    keywords: [
      "source from India",
      "how to source products from India",
      "Indian suppliers",
      "export company Kolkata",
    ],
    body: [
      {
        type: "p",
        text: "India is one of the world's most diverse sourcing markets — from spices and textiles to engineering components and chemicals. But sourcing from India for the first time can feel complex: finding a trustworthy supplier, agreeing terms, coordinating quality and handling documentation. This guide breaks the process into clear steps, the way we run it at Infinity Exports.",
      },
      { type: "h2", text: "1. Define your requirement precisely" },
      {
        type: "p",
        text: "Start with a clear specification: the exact product, grade or quality, quantity, target price, packing and destination port. The more precise your brief, the faster and more accurate the quotes you'll receive — and the fewer surprises later.",
      },
      { type: "h2", text: "2. Source and coordinate suppliers" },
      {
        type: "p",
        text: "A good sourcing partner identifies suitable manufacturers, matches your specification, coordinates samples where applicable and keeps communication clear. Having a single point of contact in India removes the friction of time zones and language.",
      },
      { type: "h2", text: "3. Agree commercial terms (Incoterms)" },
      {
        type: "p",
        text: "Decide who is responsible for what using internationally recognised Incoterms. FOB (Free On Board), CIF (Cost, Insurance & Freight) and CFR (Cost & Freight) are the most common for sea shipments. Your Incoterm determines where the seller's responsibility ends and yours begins.",
      },
      { type: "h2", text: "4. Coordinate quality before dispatch" },
      {
        type: "p",
        text: "Quality checks against the agreed specification — with photos, videos or inspection where applicable — confirm the goods match your order before they leave India. Catching an issue before packing is far cheaper than discovering it after arrival.",
      },
      { type: "h2", text: "5. Documentation" },
      {
        type: "p",
        text: "Every export shipment needs a correct document set. Depending on the commodity and destination this typically includes:",
      },
      {
        type: "ul",
        items: [
          "Commercial invoice and packing list",
          "Certificate of origin",
          "Bill of lading or airway bill (where applicable)",
          "Any product-specific or regulatory certificates",
        ],
      },
      {
        type: "p",
        text: "Errors here cause delays, so accuracy matters. An experienced export partner helps prepare and reconcile the full set for you.",
      },
      {
        type: "p",
        text: "Need a hand? Infinity Exports coordinates sourcing, supplier alignment, quality and documentation end to end — submit your requirement and we'll come back with a clear plan.",
      },
    ],
  },
  {
    slug: "export-documentation-checklist",
    title: "Export Documentation Checklist for Buyers Importing from India",
    description:
      "The essential export documents involved when importing from India — a practical checklist from Infinity Exports, an India-based export partner.",
    date: "2026-06-08",
    readMins: 5,
    keywords: [
      "export documentation",
      "export documents India",
      "certificate of origin",
      "importing from India",
    ],
    body: [
      {
        type: "p",
        text: "Documentation is where many shipments stall. A single missing or inconsistent paper can hold a consignment at port. Here is the core set of documents involved in international shipments out of India.",
      },
      { type: "h2", text: "Core commercial documents" },
      {
        type: "ul",
        items: [
          "Commercial invoice — the value and terms of the sale",
          "Packing list — contents, weights and dimensions per package",
          "Proforma invoice — issued before the sale is finalised",
        ],
      },
      { type: "h2", text: "Transport documents" },
      {
        type: "ul",
        items: [
          "Bill of lading (sea) or airway bill (air), where applicable",
          "Shipping bill / export declaration",
          "Insurance certificate where applicable",
        ],
      },
      { type: "h2", text: "Regulatory and origin documents" },
      {
        type: "ul",
        items: [
          "Certificate of origin",
          "Product-specific certificates (e.g. phytosanitary, fumigation, MSDS, COA)",
          "Any destination-country compliance paperwork",
        ],
      },
      { type: "h2", text: "Why consistency matters" },
      {
        type: "p",
        text: "Customs authorities cross-check details across documents. The buyer's name, product description, quantities and values must match exactly on every page. Inconsistencies are the most common — and most avoidable — cause of clearance delays.",
      },
      {
        type: "p",
        text: "Infinity Exports supports preparation and reconciliation of the document set relevant to your commodity and destination, so your cargo moves without surprises.",
      },
    ],
  },
  {
    slug: "fob-cif-cfr-explained",
    title: "FOB vs CIF vs CFR: Incoterms Explained for Buyers",
    description:
      "A clear comparison of FOB, CIF and CFR Incoterms — what each covers, where risk passes, and how to choose, for buyers sourcing from India.",
    date: "2026-06-15",
    readMins: 4,
    keywords: [
      "FOB vs CIF",
      "CFR incoterm",
      "incoterms explained",
      "importing from India",
    ],
    body: [
      {
        type: "p",
        text: "Incoterms define who is responsible for cost and risk at each stage of an international sale. For sea shipments from India, three terms come up most often: FOB, CFR and CIF. Here's how they differ.",
      },
      { type: "h2", text: "FOB — Free On Board" },
      {
        type: "p",
        text: "The seller delivers the goods on board the vessel at the origin port. From that point, the cost and risk of the main carriage and insurance are the buyer's. FOB gives buyers the most control over freight and insurance choices.",
      },
      { type: "h2", text: "CFR — Cost & Freight" },
      {
        type: "p",
        text: "The seller covers the cost of carriage to the destination port, but the risk passes to the buyer once goods are on board at origin. Insurance is the buyer's responsibility under CFR.",
      },
      { type: "h2", text: "CIF — Cost, Insurance & Freight" },
      {
        type: "p",
        text: "Like CFR, but the seller also arranges minimum insurance to the destination port. CIF is convenient for buyers who prefer the origin side to handle freight and basic insurance.",
      },
      { type: "h2", text: "A quick rule of thumb" },
      {
        type: "ul",
        items: [
          "Want maximum control over freight & insurance → FOB",
          "Want freight handled at origin, insurance yourself → CFR",
          "Want freight and basic insurance handled at origin → CIF",
        ],
      },
      {
        type: "p",
        text: "Infinity Exports provides clear guidance on the Incoterm that fits your trade lane and coordinates the requirement accordingly. Submit your requirement for a tailored, itemised quote.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
