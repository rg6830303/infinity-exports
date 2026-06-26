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
    slug: "how-to-import-goods-from-india",
    title: "How to Import Goods from India: A Step-by-Step Guide",
    description:
      "A practical, beginner-friendly guide to importing goods from India — from finding verified suppliers to customs clearance and delivery, by Infinity Exports.",
    date: "2026-06-01",
    readMins: 6,
    keywords: [
      "import from India",
      "how to import goods from India",
      "Indian suppliers",
      "import export company Kolkata",
    ],
    body: [
      {
        type: "p",
        text: "India is one of the world's most diverse sourcing markets — from spices and textiles to engineering components and chemicals. But importing from India for the first time can feel complex: finding a trustworthy supplier, agreeing terms, handling documentation and moving the cargo across borders. This guide breaks the process into clear steps the way we run it at Infinity Exports.",
      },
      { type: "h2", text: "1. Define your requirement precisely" },
      {
        type: "p",
        text: "Start with a clear specification: the exact product, grade or quality, quantity, target price, packaging and destination port. The more precise your brief, the faster and more accurate the quotes you'll receive — and the fewer surprises later.",
      },
      { type: "h2", text: "2. Source and vet suppliers" },
      {
        type: "p",
        text: "Never rely on a single unverified quote. A good sourcing partner identifies multiple manufacturers, checks credentials, samples the product and negotiates on your behalf. Verification — factory legitimacy, export experience and quality consistency — is what protects your money.",
      },
      { type: "h2", text: "3. Agree commercial terms (Incoterms)" },
      {
        type: "p",
        text: "Decide who is responsible for what using internationally recognised Incoterms. FOB (Free On Board) and CIF (Cost, Insurance & Freight) are the most common for sea shipments. Your Incoterm determines where the supplier's responsibility ends and yours begins.",
      },
      { type: "h2", text: "4. Quality control before dispatch" },
      {
        type: "p",
        text: "A pre-shipment inspection confirms the goods match your specification before they leave India. Catching an issue at the factory is far cheaper than discovering it after the container arrives.",
      },
      { type: "h2", text: "5. Documentation and customs" },
      {
        type: "p",
        text: "Every export shipment needs a correct document set. Typically this includes:",
      },
      {
        type: "ul",
        items: [
          "Commercial invoice and packing list",
          "Bill of lading or airway bill",
          "Certificate of origin",
          "Any product-specific or regulatory certificates",
        ],
      },
      {
        type: "p",
        text: "Errors here cause delays and demurrage charges, so accuracy matters. An experienced export partner prepares and checks the full set for you.",
      },
      { type: "h2", text: "6. Shipping and delivery" },
      {
        type: "p",
        text: "Choose ocean or air freight based on cost, volume and urgency, book the optimal route, and track the shipment to your door. With the right partner managing each step, importing from India becomes a repeatable, reliable process.",
      },
      {
        type: "p",
        text: "Need a hand? Infinity Exports handles sourcing, quality, documentation and logistics end to end — tell us what you need and we'll come back with a clear plan.",
      },
    ],
  },
  {
    slug: "export-documentation-checklist",
    title: "Export Documentation Checklist for Indian Exporters",
    description:
      "The essential export documents every Indian exporter needs to ship internationally without delays — a practical checklist from Infinity Exports, Kolkata.",
    date: "2026-06-08",
    readMins: 5,
    keywords: [
      "export documentation",
      "export documents India",
      "certificate of origin",
      "Indian exporters",
    ],
    body: [
      {
        type: "p",
        text: "Documentation is where many export shipments stall. A single missing or inconsistent paper can hold a container at port and rack up demurrage. Here is the core set of documents we prepare for international shipments out of India.",
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
          "Bill of lading (sea) or airway bill (air)",
          "Shipping bill / export declaration",
          "Insurance certificate where applicable",
        ],
      },
      { type: "h2", text: "Regulatory and origin documents" },
      {
        type: "ul",
        items: [
          "Certificate of origin",
          "Product-specific certificates (e.g. phytosanitary, fumigation, quality)",
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
        text: "At Infinity Exports we prepare and reconcile the entire document set and coordinate customs clearance, so your cargo moves without surprises.",
      },
    ],
  },
  {
    slug: "ocean-vs-air-freight",
    title: "Ocean Freight vs Air Freight: How to Choose",
    description:
      "Ocean or air freight? A clear comparison of cost, speed and best-fit cargo to help you pick the right mode for your international shipment.",
    date: "2026-06-15",
    readMins: 4,
    keywords: [
      "ocean freight vs air freight",
      "freight forwarding",
      "sea freight India",
      "air cargo",
    ],
    body: [
      {
        type: "p",
        text: "Choosing how to move your cargo internationally comes down to a trade-off between cost, speed and the nature of the goods. Here's how to decide.",
      },
      { type: "h2", text: "When ocean freight wins" },
      {
        type: "p",
        text: "Sea freight is dramatically cheaper per kilogram and ideal for large or heavy consignments where transit time is flexible. Full-container-load (FCL) and less-than-container-load (LCL) options make it viable across a wide range of volumes. The trade-off is longer transit times.",
      },
      { type: "h2", text: "When air freight wins" },
      {
        type: "p",
        text: "Air cargo is the right call for urgent, high-value, perishable or low-volume shipments. You pay a premium, but you gain speed, tighter scheduling and lower insurance costs relative to cargo value.",
      },
      { type: "h2", text: "A quick rule of thumb" },
      {
        type: "ul",
        items: [
          "Heavy, bulky, time-flexible → ocean freight",
          "Urgent, high-value, perishable, light → air freight",
          "Unsure? Compare landed cost and required delivery date side by side",
        ],
      },
      {
        type: "p",
        text: "Infinity Exports arranges both ocean and air freight and will recommend the most cost-effective route for your specific shipment. Share your requirement for a tailored quote.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
