/**
 * Single source of truth for all Infinity Exports content.
 * Update copy, services, products and process here — the whole site reads
 * from this file. No personal/founder names are stored or shown publicly.
 */

export const site = {
  name: "Infinity Exports",
  url: "https://infinityexports.org",
  tagline: "Global Sourcing, Simplified",
  shortDescription:
    "An India-based export & trade solutions partner — sourcing, supplier coordination, quality & packaging, export documentation and compliance guidance, end to end.",
  description:
    "Infinity Exports simplifies global sourcing and cross-border trade. From our hub in Kolkata we manage supplier discovery, quality control, export documentation and freight across 25+ countries — one desk, end to end.",
  partner: "Krishna Kumar",
  partnerRole: "Partner",
  gst: "19AAKFI0521Q1ZO",

  phone: "+91 82403 89873",
  phoneRaw: "918240389873",
  email: "infintyexports@gmail.com",
  whatsapp: "918240389873",
  // Friendly, pre-filled message shown in the user's WhatsApp when they tap any
  // "Chat on WhatsApp" button. Keep it short and editable by the sender.
  whatsappMessage:
    "Hello Infinity Exports 👋, I'm interested in your export & sourcing services. Could you please share more details?",
  instagramHandle: "infinity.exports",

  // Public, general location label used across most of the site.
  location: "Kolkata, West Bengal, India",

  address: {
    lines: [
      "Premises No. Plot No. 11E/23,",
      "Unit No. 838, Eighth Floor, Abacus,",
      "Plot No. 11E/23, Action Area,",
      "Kolkata - 700 161, West Bengal, India",
    ],
    short: "Kolkata, West Bengal, India",
    locality: "Kolkata",
    region: "West Bengal",
    postalCode: "700161",
    country: "IN",
    maps: "https://www.google.com/maps?cid=13640765485492977997",
  },

  // Google Business / Search presence
  googleBusiness: "https://share.google/I9YbUlIxZ5K5UziTZ",
  googleMaps: "https://www.google.com/maps?cid=13640765485492977997",
  googleMapsCid: "13640765485492977997",
  googleBusinessProfileId: "7321221060326381807",
  googleSearch:
    "https://www.google.com/search?q=Infinity+Exports+Kolkata+India",

  social: {
    // Clean profile URL — used for structured data (sameAs).
    whatsapp: "https://wa.me/918240389873",
    instagram: "https://www.instagram.com/infinity.exports",
  },
};

/**
 * WhatsApp click-to-chat link with a pre-typed message, for all "Chat on
 * WhatsApp" call-to-action buttons. (social.whatsapp stays clean for sameAs.)
 */
export const whatsappCta = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export const stats = [
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Shipments Delivered" },
  { value: "98%", label: "On-time Dispatch" },
  { value: "5", label: "Core Product Verticals" },
];

/** Reusable, honest pricing line used on product cards & detail pages. */
export const PRICING_NOTE =
  "Pricing depends on quantity, grade, packing, destination port and Incoterm. Submit your requirement for an itemised quote.";

/** Incoterms offered (sourcing/export focus — not a freight forwarder). */
export const incoterms = [
  "FOB — Free On Board",
  "CIF — Cost, Insurance & Freight",
  "CFR — Cost & Freight",
];

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */

export const trustItems = [
  { icon: "Globe2", label: "India-based export partner" },
  { icon: "PackageSearch", label: "Product sourcing from India" },
  { icon: "FileCheck2", label: "Documentation support" },
  { icon: "UserCheck", label: "Buyer-first requirement handling" },
  { icon: "Search", label: "Google Business presence" },
];

/* ------------------------------------------------------------------ */
/* End-to-end trade solutions / services                              */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  overview: string;
  includes: string[];
  forWho: string[];
  buyerInfo: string[];
  process: string[];
  related: string[]; // product slugs
};

export const services: Service[] = [
  {
    slug: "product-sourcing",
    icon: "PackageSearch",
    title: "Product Sourcing",
    tagline:
      "Find the right India-made product at the right grade, quality and commercial terms.",
    overview:
      "Sourcing the right product is where most international buyers lose time and money. We translate your requirement into a sourcing brief, identify suitable Indian manufacturers and suppliers, and bring back verified options matched to your specification, grade and budget — so you can decide with confidence.",
    includes: [
      "Requirement-to-spec sourcing brief",
      "Identification of suitable manufacturers/suppliers in India",
      "Grade, quality and specification matching",
      "Sample coordination where applicable",
      "Indicative commercial terms for comparison",
    ],
    forWho: [
      "International buyers new to sourcing from India",
      "Importers expanding their supplier base",
      "Wholesalers and distributors seeking specific commodities",
    ],
    buyerInfo: [
      "Commodity / product and grade",
      "Target quantity and packing preference",
      "Destination port and country",
      "Preferred Incoterm (FOB, CIF, CFR)",
    ],
    process: [
      "Share your requirement and specifications",
      "We review feasibility and shortlist options",
      "Samples / details shared where applicable",
      "Itemised quote prepared for your review",
    ],
    related: ["agro-food", "textiles-apparel", "industrial-goods"],
  },
  {
    slug: "supplier-coordination",
    icon: "Handshake",
    title: "Supplier Coordination",
    tagline:
      "A single point of contact that keeps suppliers, timelines and updates aligned.",
    overview:
      "Coordinating multiple suppliers across time zones and languages is hard. We act as your single point of contact in India — aligning suppliers on your agreed specification, packing and timeline, and keeping communication clear and documented so nothing slips between enquiry and dispatch.",
    includes: [
      "Single point of contact with suppliers in India",
      "Alignment on specification, packing and timeline",
      "Order follow-up and production updates",
      "Issue resolution and clear written communication",
      "Coordination across WhatsApp and email",
    ],
    forWho: [
      "Buyers managing more than one supplier",
      "Companies without a local presence in India",
      "Teams that need dependable, documented updates",
    ],
    buyerInfo: [
      "Confirmed product and specification",
      "Agreed quantity and packing",
      "Required dispatch timeline",
      "Preferred communication channel",
    ],
    process: [
      "We confirm scope and points of contact",
      "Suppliers aligned on agreed terms",
      "Regular progress updates shared with you",
      "Coordination through to packing and dispatch",
    ],
    related: ["agro-food", "handicrafts-decor", "leather-products"],
  },
  {
    slug: "export-documentation",
    icon: "FileCheck2",
    title: "Export Documentation Support",
    tagline:
      "The right export document set, prepared and reconciled for clean clearance.",
    overview:
      "A single inconsistent document can hold a consignment at the port. We support preparation and reconciliation of the export document set relevant to your commodity and destination — commercial invoice, packing list, certificate of origin and product-specific certificates — so your paperwork is accurate and consistent across the board.",
    includes: [
      "Commercial invoice & packing list support",
      "Certificate of origin coordination",
      "HS-code classification guidance",
      "Product-specific / regulatory certificate coordination",
      "Document reconciliation for consistency",
    ],
    forWho: [
      "First-time importers from India",
      "Buyers whose customs require specific documents",
      "Companies wanting fewer clearance surprises",
    ],
    buyerInfo: [
      "Destination country and port",
      "Commodity and HS code (if known)",
      "Any destination-specific document requirements",
      "Consignee / import entity details",
    ],
    process: [
      "We map the documents your shipment needs",
      "Documents prepared with the supplier",
      "Set reconciled for consistency",
      "Documents shared as agreed for clearance",
    ],
    related: ["agro-food", "chemicals-pharma", "leather-products"],
  },
  {
    slug: "quality-packaging-coordination",
    icon: "ShieldCheck",
    title: "Quality & Packaging Coordination",
    tagline:
      "Quality checks and export-grade packing coordinated before dispatch.",
    overview:
      "Goods that pass the factory but fail the voyage cost you twice. We coordinate quality checks against the agreed specification and export-grade packing suited to your commodity — photos, videos or third-party / supplier inspection where applicable — so what you ordered is what gets packed and loaded.",
    includes: [
      "Quality checks against agreed specification",
      "Photo / video verification where applicable",
      "Third-party or supplier inspection coordination",
      "Export-grade packing and labelling guidance",
      "Pre-dispatch sign-off coordination",
    ],
    forWho: [
      "Buyers who cannot inspect goods in person",
      "Importers with strict quality or AQL needs",
      "Companies protecting balance payments",
    ],
    buyerInfo: [
      "Agreed specification / quality parameters",
      "Packing and labelling requirements",
      "Any inspection or AQL standards",
      "Destination handling considerations",
    ],
    process: [
      "Quality parameters and packing agreed",
      "Checks coordinated before dispatch",
      "Evidence shared for your sign-off",
      "Cleared goods prepared for loading",
    ],
    related: ["agro-food", "industrial-goods", "handicrafts-decor"],
  },
  {
    slug: "trade-compliance-guidance",
    icon: "Scale",
    title: "Trade Compliance Guidance",
    tagline:
      "Clear guidance on Incoterms, documents and commodity-specific requirements.",
    overview:
      "The rules around Incoterms, duties and commodity-specific compliance decide your landed cost and your risk. We provide clear, practical guidance on the terms and documents relevant to your trade lane — so you can plan margins and avoid avoidable holds, without freight-forwarder jargon.",
    includes: [
      "Incoterm (FOB / CIF / CFR) selection guidance",
      "Commodity-specific compliance pointers",
      "Documentation roadmap for your trade lane",
      "Landed-cost considerations explained simply",
      "Guidance on destination requirements",
    ],
    forWho: [
      "Buyers comparing FOB vs CIF vs CFR",
      "Companies entering a new product line",
      "Importers wanting a clear compliance checklist",
    ],
    buyerInfo: [
      "Commodity and destination market",
      "Preferred or proposed Incoterm",
      "Known regulatory requirements at destination",
      "Order volume and frequency",
    ],
    process: [
      "We review your trade lane and commodity",
      "Recommend Incoterm and document set",
      "Share a practical compliance checklist",
      "Support you through to a confident decision",
    ],
    related: ["chemicals-pharma", "agro-food", "leather-products"],
  },
  {
    slug: "buyer-requirement-handling",
    icon: "ClipboardList",
    title: "Buyer Requirement Handling",
    tagline:
      "Submit a requirement and get a structured, reviewed response — not a generic reply.",
    overview:
      "Every engagement starts with a buyer requirement. We review what you submit, ask the right follow-up questions, and convert it into a structured, costed plan — product, packing, terms and timeline — so the conversation moves forward instead of going in circles.",
    includes: [
      "Structured review of your requirement",
      "Clarifying questions on spec, packing and terms",
      "Feasibility and availability check",
      "Itemised quote aligned to Incoterm",
      "Clear next steps and timeline",
    ],
    forWho: [
      "Buyers with a defined commodity need",
      "Procurement teams collecting quotes",
      "International buyers exploring India sourcing",
    ],
    buyerInfo: [
      "Company name and country",
      "Commodity, quantity and destination port",
      "Preferred Incoterm and packing",
      "WhatsApp and email for follow-up",
    ],
    process: [
      "Submit your requirement via the form",
      "We review and confirm understanding",
      "Quote and options prepared",
      "Aligned plan shared for confirmation",
    ],
    related: ["agro-food", "textiles-apparel", "industrial-goods"],
  },
];

/* ------------------------------------------------------------------ */
/* Product categories                                                  */
/* ------------------------------------------------------------------ */

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  icon: string;
  name: string;
  tagline: string;
  tint: string;
  images: ProductImage[];
  overview: string;
  items: string[];
  packing: string[];
  specs: string[]; // common specs buyers provide
  documents: string[];
  qualityChecks: string[];
  notes: string;
};

export const products: Product[] = [
  {
    slug: "agro-food",
    icon: "Wheat",
    name: "Agro & Food Products",
    tagline: "Spices, grains, pulses, fresh produce & processed foods.",
    tint: "green",
    images: [
      {
        src: "/images/products/agro-red-chillies.jpg",
        alt: "Fresh red chillies graded for export",
      },
      {
        src: "/images/products/agro-basmati-rice.jpg",
        alt: "Long-grain basmati rice ready for export packing",
      },
    ],
    overview:
      "India is one of the world's largest producers of spices, cereals and pulses. We source food-grade, export-compliant agro commodities with the certifications international buyers expect.",
    items: [
      "Whole & ground spices (turmeric, chilli, cumin, pepper)",
      "Rice, wheat and millets",
      "Pulses, lentils and grams",
      "Fresh produce — onions, chillies & seasonal vegetables",
      "Tea, coffee and processed/packaged foods",
    ],
    packing: [
      "PP / jute bags, BOPP or vacuum packs",
      "Cartons or bulk bags as per commodity",
      "Buyer-branded / private-label packing on request",
      "Container stuffing for FCL or part loads",
    ],
    specs: [
      "Commodity, variety and grade",
      "Moisture / purity / size where applicable",
      "Quantity (kg / MT / containers)",
      "Packing size and labelling",
      "Destination port and Incoterm",
    ],
    documents: [
      "Commercial invoice & packing list",
      "Certificate of origin",
      "Phytosanitary / lab test certificate where required",
      "FSSAI / APEDA documentation where applicable",
    ],
    qualityChecks: [
      "Grade and specification verification",
      "Moisture and purity checks where applicable",
      "Pre-dispatch photos / samples",
      "Packing and labelling verification",
    ],
    notes:
      "Available with FSSAI, APEDA, phytosanitary and lab-test documentation as required by the destination.",
  },
  {
    slug: "textiles-apparel",
    icon: "Shirt",
    name: "Textiles & Apparel",
    tagline: "Cotton fabrics, garments, home textiles, jute & yarns.",
    tint: "blue",
    images: [
      {
        src: "/images/products/textiles-saree-weave.jpg",
        alt: "Handwoven Indian saree with zari border",
      },
    ],
    overview:
      "From raw yarn and jute fibre to finished garments, India's textile base offers depth across every price point. We connect you to mills and units matched to your fabric, GSM and compliance needs.",
    items: [
      "Cotton, blended and specialty fabrics",
      "Ready-made garments and knitwear",
      "Home textiles — bed, bath and kitchen linen",
      "Jute yarn, hessian and eco-friendly bags",
      "Yarns and made-ups",
    ],
    packing: [
      "Poly-bagged and cartoned to buyer specs",
      "Roll / thaan packing for fabrics",
      "Hanger or flat-pack for garments",
      "Master-carton labelling and barcoding",
    ],
    specs: [
      "Fabric type, GSM and composition",
      "Sizes, colours and quantities",
      "Quality / compliance standard (e.g. OEKO-TEX)",
      "Packing and labelling requirements",
      "Destination port and Incoterm",
    ],
    documents: [
      "Commercial invoice & packing list",
      "Certificate of origin",
      "Composition / test reports where required",
      "Buyer-specific compliance documents on request",
    ],
    qualityChecks: [
      "Fabric / GSM and shade verification",
      "Stitching and measurement checks for garments",
      "Quantity and packing verification",
      "Pre-dispatch photos / samples",
    ],
    notes:
      "OEKO-TEX and buyer-specific compliance can be arranged on request.",
  },
  {
    slug: "industrial-goods",
    icon: "Cog",
    name: "Industrial Goods",
    tagline: "Machinery parts, tools & engineering products.",
    tint: "violet",
    images: [
      {
        src: "/images/products/industrial-fabrication.jpg",
        alt: "Precision welding at a partner fabrication unit",
      },
    ],
    overview:
      "India's engineering sector supplies precision components globally at competitive cost. We source to drawing and tolerance, with QC built into the shipment.",
    items: [
      "Machined components and castings",
      "Hand & power tools",
      "Hardware, fasteners and fittings",
      "Engineering and auto-ancillary parts",
    ],
    packing: [
      "VCI / rust-preventive packing for metals",
      "Crates, pallets or cartons as per weight",
      "ISPM-15 compliant wood packaging where used",
      "Part marking and labelling",
    ],
    specs: [
      "Drawing / part number and material grade",
      "Dimensions and tolerances",
      "Quantity and finish",
      "Test certificate requirements",
      "Destination port and Incoterm",
    ],
    documents: [
      "Commercial invoice & packing list",
      "Certificate of origin",
      "Material test certificates where required",
      "Dimensional / inspection reports on request",
    ],
    qualityChecks: [
      "Dimensional inspection to drawing",
      "Material / finish verification",
      "Quantity and packing checks",
      "Pre-dispatch photos / samples",
    ],
    notes:
      "Material test certificates and dimensional inspection available.",
  },
  {
    slug: "chemicals-pharma",
    icon: "FlaskConical",
    name: "Chemicals & Pharma",
    tagline: "Specialty chemicals, raw materials & supplies.",
    tint: "orange",
    images: [
      {
        src: "/images/products/chemicals-lab-qc.jpg",
        alt: "Laboratory quality-control testing of chemical samples",
      },
    ],
    overview:
      "We handle specialty chemicals and pharma-adjacent raw materials with the documentation, MSDS and dangerous-goods handling that regulated trade demands.",
    items: [
      "Specialty and industrial chemicals",
      "Pharmaceutical raw materials & excipients",
      "Dyes, pigments and intermediates",
      "Lab and process supplies",
    ],
    packing: [
      "UN-approved drums, bags or IBCs",
      "Palletised and shrink-wrapped",
      "Hazardous-goods labelling where required",
      "Proper ventilation / temperature tracking",
    ],
    specs: [
      "Chemical name, CAS number and grade",
      "Purity, concentration and specifications",
      "Quantity and packaging size",
      "MSDS / COA requirement details",
      "Destination port and Incoterm",
    ],
    documents: [
      "Commercial invoice & packing list",
      "Certificate of origin",
      "MSDS and COA",
      "DG / regulatory documents where applicable",
    ],
    qualityChecks: [
      "COA / assay verification",
      "Packing and labelling compliance",
      "Quantity verification",
      "Pre-dispatch documentation review",
    ],
    notes:
      "MSDS, COA and DG-compliant packing & shipping arranged where applicable.",
  },
  {
    slug: "marine-seafood",
    icon: "Fish",
    name: "Marine & Seafood",
    tagline: "Frozen fish, shrimp & value-added seafood.",
    tint: "teal",
    images: [
      {
        src: "/images/products/marine-fresh-catch.jpg",
        alt: "Fresh catch prepared for cold-chain export",
      },
    ],
    overview:
      "From the Bay of Bengal coastline we move frozen and chilled seafood through an unbroken cold chain — sourced from registered processing plants and packed to destination-market standards.",
    items: [
      "Frozen fish — hilsa, pomfret, rohu & sea catch",
      "Shrimp, prawns and crustaceans",
      "Dried and cured fish",
      "Value-added & ready-to-cook seafood",
    ],
    packing: [
      "Master cartons with inner plastic lining",
      "IQF / Block frozen packaging",
      "Poly-bagged / vacuum-packed by grade",
      "Continuous temp-monitored stuffing",
    ],
    specs: [
      "Species and product form (whole/gutted/fillet)",
      "Freezing method (IQF / Semi-IQF / Block frozen)",
      "Glazing percentage and size/count",
      "Quantity (kg / MT / FCL)",
      "Preferred Incoterm & cold-port destination",
    ],
    documents: [
      "Commercial invoice & packing list",
      "Certificate of origin",
      "Health certificate / MPEDA certificate",
      "HACCP compliance documentation",
    ],
    qualityChecks: [
      "Temperature checks at loading (minimum -18°C)",
      "Organoleptic (sensory) testing",
      "Net weight and glaze verification",
      "Cold-chain logs verification",
    ],
    notes:
      "Sourced from MPEDA-registered, HACCP-certified plants with cold-chain integrity documented end to end.",
  },
];

/* ------------------------------------------------------------------ */
/* How we work — homepage process (8 steps)                            */
/* ------------------------------------------------------------------ */

export type ProcessStep = {
  slug: string;
  title: string;
  short: string;
  meaning: string;
  buyerProvides: string[];
  weHandle: string[];
  next: string;
};

export const processSteps: ProcessStep[] = [
  {
    slug: "buyer-enquiry",
    title: "Buyer Enquiry",
    short: "You share what you need to source from India.",
    meaning:
      "Everything starts with your enquiry. You tell us the commodity, quantity, destination and any specifics — we take it from there.",
    buyerProvides: [
      "Commodity / product of interest",
      "Approximate quantity",
      "Destination country and port",
      "Contact (WhatsApp / email)",
    ],
    weHandle: [
      "Acknowledging your enquiry promptly",
      "Confirming we can support the requirement",
    ],
    next: "We move into a structured requirement review.",
  },
  {
    slug: "requirement-review",
    title: "Requirement Review",
    short: "We review and confirm the details before quoting.",
    meaning:
      "We review your enquiry, ask the right follow-up questions and confirm the specification so the quote we prepare is accurate.",
    buyerProvides: [
      "Grade / specification where known",
      "Packing and labelling preferences",
      "Preferred Incoterm",
    ],
    weHandle: [
      "Clarifying specification and packing",
      "Checking feasibility and availability",
    ],
    next: "We begin sourcing against the confirmed requirement.",
  },
  {
    slug: "product-sourcing",
    title: "Product Sourcing",
    short: "We identify suitable suppliers and options in India.",
    meaning:
      "We source the product from suitable manufacturers/suppliers in India, matched to your grade, quality and budget.",
    buyerProvides: [
      "Confirmation of specification",
      "Target price range (optional)",
    ],
    weHandle: [
      "Identifying suitable suppliers",
      "Matching grade, quality and terms",
      "Coordinating samples where applicable",
    ],
    next: "We coordinate supplier alignment and quality.",
  },
  {
    slug: "supplier-quality-coordination",
    title: "Supplier & Quality Coordination",
    short: "We align suppliers and coordinate quality checks.",
    meaning:
      "We act as your single point of contact — aligning suppliers on the agreed terms and coordinating quality checks where applicable.",
    buyerProvides: [
      "Quality parameters / AQL if any",
      "Inspection preferences",
    ],
    weHandle: [
      "Supplier alignment on spec and timeline",
      "Quality checks and evidence coordination",
    ],
    next: "We move to packing and documentation.",
  },
  {
    slug: "packing-documentation",
    title: "Packing & Documentation",
    short: "Export-grade packing and the right document set.",
    meaning:
      "Goods are packed to export grade for your commodity, and the relevant export document set is prepared and reconciled.",
    buyerProvides: [
      "Packing / labelling requirements",
      "Consignee and document details",
    ],
    weHandle: [
      "Export-grade packing coordination",
      "Document preparation and reconciliation",
    ],
    next: "We align the final quote and Incoterm.",
  },
  {
    slug: "quote-incoterm",
    title: "Quote & Incoterm Alignment",
    short: "An itemised quote aligned to your Incoterm.",
    meaning:
      "We finalise an itemised quote aligned to your chosen Incoterm (FOB, CIF or CFR), destination port and packing.",
    buyerProvides: [
      "Confirmed Incoterm",
      "Destination port",
    ],
    weHandle: [
      "Itemised quote preparation",
      "Incoterm and term alignment",
    ],
    next: "On confirmation, we coordinate dispatch.",
  },
  {
    slug: "dispatch-coordination",
    title: "Dispatch Coordination",
    short: "We coordinate loading and dispatch readiness.",
    meaning:
      "We coordinate loading and dispatch readiness with the supplier and your chosen arrangement, keeping documentation in order.",
    buyerProvides: [
      "Shipping arrangement per Incoterm",
      "Any pre-shipment requirements",
    ],
    weHandle: [
      "Loading and dispatch-readiness coordination",
      "Document handover as agreed",
    ],
    next: "We keep you updated through to delivery.",
  },
  {
    slug: "buyer-updates",
    title: "Buyer Updates",
    short: "Clear updates through WhatsApp and email.",
    meaning:
      "We keep you informed at each stage through WhatsApp and email, so you always know where your order stands.",
    buyerProvides: ["Preferred update channel"],
    weHandle: [
      "Regular status updates",
      "Responsive communication to delivery",
    ],
    next: "Your goods arrive per the agreed terms.",
  },
];

/* ------------------------------------------------------------------ */
/* Export Process — full 11-step workflow                              */
/* ------------------------------------------------------------------ */

export type ExportStep = {
  slug: string;
  num: number;
  icon: string;
  title: string;
  short: string;
  meaning: string;
  buyerProvides: string[];
  weHandle: string[];
  next: string;
  docs: string[];
};

export const exportProcess: ExportStep[] = [
  {
    slug: "buyer-inquiry",
    num: 1,
    icon: "MessageSquare",
    title: "Buyer Inquiry",
    short: "You share your requirement.",
    meaning:
      "You share the commodity, quantity, destination port, preferred Incoterm, packing needs and contact details so we can scope the requirement.",
    buyerProvides: [
      "Commodity and quantity",
      "Destination port and country",
      "Preferred Incoterm and packing",
      "WhatsApp and email",
    ],
    weHandle: [
      "Reviewing the enquiry",
      "Confirming we can support it",
    ],
    next: "We prepare a quotation.",
    docs: [],
  },
  {
    slug: "quotation",
    num: 2,
    icon: "FileText",
    title: "Quotation",
    short: "An itemised quote based on your terms.",
    meaning:
      "The quotation depends on product grade, quantity, packing, FOB/CIF/CFR terms, destination port and availability. We prepare an itemised quote you can compare.",
    buyerProvides: ["Confirmed specification", "Destination port and Incoterm"],
    weHandle: [
      "Itemised quotation",
      "Term and Incoterm alignment",
    ],
    next: "Where applicable, samples are arranged.",
    docs: ["Proforma invoice / quotation"],
  },
  {
    slug: "sample-approval",
    num: 3,
    icon: "Beaker",
    title: "Sample Approval",
    short: "Samples shared where applicable.",
    meaning:
      "For many commodities, samples may be shared for your approval before a bulk order is confirmed, so expectations are aligned upfront.",
    buyerProvides: ["Sample feedback / approval", "Courier preference"],
    weHandle: [
      "Sample coordination with the supplier",
      "Capturing your approval",
    ],
    next: "You confirm the order commercially.",
    docs: ["Sample dispatch details where applicable"],
  },
  {
    slug: "purchase-order",
    num: 4,
    icon: "ClipboardCheck",
    title: "Purchase Order",
    short: "You confirm the order commercially.",
    meaning:
      "You confirm the order through a purchase order or written confirmation, locking the commercial terms agreed in the quotation.",
    buyerProvides: ["Purchase order / written confirmation", "Agreed terms"],
    weHandle: ["Order confirmation", "Production planning with the supplier"],
    next: "Production / preparation begins.",
    docs: ["Purchase order", "Order confirmation"],
  },
  {
    slug: "production",
    num: 5,
    icon: "Factory",
    title: "Production",
    short: "Goods are sourced / produced to spec.",
    meaning:
      "The product is sourced, produced or prepared based on the agreed specifications, with timelines coordinated against your required dispatch date.",
    buyerProvides: ["Any final specification confirmations"],
    weHandle: ["Production follow-up", "Timeline coordination and updates"],
    next: "Quality inspection is carried out.",
    docs: [],
  },
  {
    slug: "quality-inspection",
    num: 6,
    icon: "ScanSearch",
    title: "Quality Inspection",
    short: "Quality checked before packing.",
    meaning:
      "Quality checks, photos, videos, third-party inspection or supplier inspection coordination may be carried out where applicable, against the agreed specification.",
    buyerProvides: ["Quality parameters / AQL", "Inspection preference"],
    weHandle: [
      "Quality checks against spec",
      "Photo / video / inspection coordination",
    ],
    next: "Approved goods move to packing.",
    docs: ["Inspection report / evidence where applicable"],
  },
  {
    slug: "packing",
    num: 7,
    icon: "Package",
    title: "Packing",
    short: "Export-grade packing and labelling.",
    meaning:
      "Goods are packed to export grade with labelling — carton, bag, drum or container-readiness depending on the commodity — to survive international transit.",
    buyerProvides: ["Packing and labelling requirements"],
    weHandle: ["Export-grade packing coordination", "Labelling and marking"],
    next: "Container loading is coordinated.",
    docs: ["Packing list"],
  },
  {
    slug: "container-loading",
    num: 8,
    icon: "Container",
    title: "Container Loading",
    short: "Loading and container stuffing coordinated.",
    meaning:
      "Loading coordination, container stuffing, seal details and loading documentation are handled where applicable, with photos shared where relevant.",
    buyerProvides: ["Any loading / stuffing instructions"],
    weHandle: ["Loading coordination", "Container stuffing and seal details"],
    next: "Shipping is arranged per your Incoterm.",
    docs: ["Loading photos / stuffing report where applicable"],
  },
  {
    slug: "shipping",
    num: 9,
    icon: "Ship",
    title: "Shipping",
    short: "Shipping coordinated to your Incoterm.",
    meaning:
      "Shipping is coordinated based on the selected Incoterm and destination port. We coordinate the arrangement — we are a sourcing and trade-solutions partner, not a freight forwarder.",
    buyerProvides: ["Confirmed Incoterm", "Destination port / consignee"],
    weHandle: ["Shipping coordination per Incoterm", "Schedule updates"],
    next: "Export documents are sent to you.",
    docs: ["Booking / shipping details as applicable"],
  },
  {
    slug: "documents-sent",
    num: 10,
    icon: "Files",
    title: "Documents Sent",
    short: "Export documents shared with you.",
    meaning:
      "Invoice, packing list, bill of lading / airway bill (if applicable), certificate of origin, inspection documents and other export documents are shared depending on the commodity and destination.",
    buyerProvides: ["Bank / consignee document instructions"],
    weHandle: ["Document set preparation", "Sharing documents as agreed"],
    next: "Goods are delivered per the agreed Incoterm.",
    docs: [
      "Commercial invoice",
      "Packing list",
      "Bill of lading / airway bill (if applicable)",
      "Certificate of origin",
      "Inspection / product certificates",
    ],
  },
  {
    slug: "delivery",
    num: 11,
    icon: "PackageCheck",
    title: "Delivery",
    short: "Goods reach you at destination.",
    meaning:
      "You receive the goods at destination according to the agreed Incoterm and shipping arrangement, completing the export cycle.",
    buyerProvides: ["Confirmation of receipt", "Any feedback"],
    weHandle: ["Coordination through to delivery", "Support on next orders"],
    next: "We're ready for your next requirement.",
    docs: [],
  },
];

/* ------------------------------------------------------------------ */
/* Certifications & licenses                                           */
/* ------------------------------------------------------------------ */

export type Certification = {
  icon: string;
  title: string;
  status: string;
  desc: string;
};

export const certifications: Certification[] = [
  {
    icon: "BadgeCheck",
    title: "Import Export Code (IEC)",
    status: "Available on request",
    desc: "The IEC is the foundational registration (issued by DGFT) that authorises a business to import and export from India. We can share verification on request.",
  },
  {
    icon: "FileCheck2",
    title: "GST / Business Registration",
    status: "Available on request",
    desc: "Valid GST and business registration confirm a legitimate, tax-compliant Indian entity — the baseline buyers should expect from any export partner.",
  },
  {
    icon: "Award",
    title: "MSME / Udyam Registration",
    status: "Available on request",
    desc: "Udyam (MSME) registration supports recognised small-business status in India. We can share verification details on request.",
  },
  {
    icon: "ScrollText",
    title: "APEDA / FIEO & Product Registrations",
    status: "Add if verified",
    desc: "Product-specific export registrations such as APEDA (agri/food) or FIEO membership apply to certain commodities. We list these only where verified and relevant to your product.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality & Compliance Documents",
    status: "Available on request",
    desc: "Commodity-specific quality and compliance documents — certificate of origin, phytosanitary, MSDS, COA, test reports — are coordinated per shipment and destination.",
  },
];

export const certWhyItMatters = [
  "Confirms you are dealing with a legitimate, registered Indian exporter.",
  "Reduces the risk of clearance delays at origin and destination.",
  "Ensures commodity-specific documents are coordinated correctly.",
  "Gives international buyers a transparent basis for trust.",
];

/* ------------------------------------------------------------------ */
/* Google presence                                                     */
/* ------------------------------------------------------------------ */

export const googlePresence = {
  points: [
    "Listed on Google Search and Google Business Profile for Infinity Exports.",
    "Verifiable business presence for international buyers performing due diligence.",
    "Consistent business name and contact information across the web.",
    "Reachable on WhatsApp and email for quick buyer communication.",
  ],
};

/* ------------------------------------------------------------------ */
/* Why us / reassurance                                                */
/* ------------------------------------------------------------------ */

export const reasons = [
  {
    icon: "Workflow",
    title: "Transparent export workflow",
    desc: "A clear, documented process from enquiry to dispatch — no black boxes, no surprises.",
  },
  {
    icon: "ClipboardCheck",
    title: "Requirement reviewed before quote",
    desc: "We confirm specification, packing and terms first, so your quote is accurate and comparable.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality & packing coordination",
    desc: "Quality checks and export-grade packing coordinated before dispatch, where applicable.",
  },
  {
    icon: "MessageCircle",
    title: "Clear WhatsApp & email updates",
    desc: "One responsive point of contact keeps you updated at every stage of your order.",
  },
];

export const reassurance = [
  "Transparent export workflow",
  "Buyer requirement reviewed before any quote",
  "Product and packing details discussed before confirmation",
  "Documentation support based on commodity and destination",
  "Quality and supplier coordination where applicable",
  "Clear communication through WhatsApp and email",
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: "What does Infinity Exports actually do?",
    a: "We are an India-based export and trade-solutions partner. We help international buyers source products from India — handling supplier coordination, quality and packing coordination, export documentation support and trade compliance guidance, end to end. We are not a freight-forwarding company.",
  },
  {
    q: "Which products can you source from India?",
    a: "We work across agro & food products, textiles & apparel (including jute), industrial goods, chemicals & pharma, and marine & seafood. If your commodity isn't listed, submit a requirement — there's a good chance we can support it.",
  },
  {
    q: "How is pricing decided?",
    a: "Pricing depends on quantity, grade, packing, destination port and Incoterm (FOB, CIF or CFR). Once we understand your requirement we prepare an itemised quote, so there are no hidden surprises.",
  },
  {
    q: "What information do you need to give a quote?",
    a: "Typically: company name and country, the commodity and grade, quantity, destination port, preferred Incoterm and your WhatsApp/email. The more detail you share, the faster and sharper your quote.",
  },
  {
    q: "Do you provide samples before a bulk order?",
    a: "For many commodities, samples may be shared for approval before a bulk order is confirmed. We'll confirm what's possible for your specific product when reviewing your requirement.",
  },
  {
    q: "Which export documents do you support?",
    a: "Depending on the commodity and destination, this can include the commercial invoice, packing list, certificate of origin, inspection documents and product-specific certificates. We help prepare and reconcile the set for clean clearance.",
  },
];

// Export essentials — the paperwork & terms info that used to live under a
// separate "Export Process" tab, now folded into the single Process section.
export const exportEssentials = [
  {
    title: "Documents we handle",
    points: [
      "Commercial invoice & packing list",
      "Certificate of Origin (incl. preferential)",
      "Bill of Lading / Airway Bill",
      "Phytosanitary, MSDS & product certificates",
    ],
  },
  {
    title: "Incoterms we quote",
    points: [
      "EXW · FOB · CFR · CIF",
      "DAP & DDP for door delivery",
      "Risk-transfer point explained on every quote",
      "Terms matched to your bank & insurance",
    ],
  },
  {
    title: "Compliance built in",
    points: [
      "Correct HS classification & duty guidance",
      "IEC, GST and destination-side requirements",
      "AQL-based pre-shipment inspection",
      "DG-compliant packing where applicable",
    ],
  },
];

// Sample buyer testimonials shown alongside the contact / quote forms.
export const testimonials = [
  {
    name: "Ahmed Al-Farsi",
    role: "Procurement Head, food distribution",
    location: "Muscat, Oman",
    category: "Agro & Food Products",
    quote:
      "Three seasons of onions and spices without a single rejected container. Their pre-shipment photos and grading reports mean I never wire a balance payment blind.",
    rating: 5,
  },
  {
    name: "Elena Petrova",
    role: "Sourcing Manager, home-textile retail",
    location: "Rotterdam, Netherlands",
    category: "Textiles & Apparel",
    quote:
      "They found us two mills that matched our GSM spec at a landed cost 12% under our previous supplier — and handled every document through to Rotterdam.",
    rating: 5,
  },
  {
    name: "Daniel Okoye",
    role: "Director, engineering supplies",
    location: "Lagos, Nigeria",
    category: "Industrial Goods",
    quote:
      "Sourcing machined parts remotely used to feel like a gamble. With their inspection gate before loading, what lands in Lagos is exactly what was quoted.",
    rating: 5,
  },
  {
    name: "Sophie Laurent",
    role: "Founder, specialty ingredients brand",
    location: "Lyon, France",
    category: "Chemicals & Pharma",
    quote:
      "COA, MSDS and DG packing were all arranged before I even asked. The single point of contact makes a genuine difference when timelines are tight.",
    rating: 5,
  },
];

// Gallery — real premises photos plus representative shots of the product
// lines and logistics operations we run.
export const galleryItems = [
  {
    src: "/images/gallery/onion-harvest.jpg",
    alt: "Graded onions at a sourcing yard",
    caption: "Onion grading at source",
    category: "Products",
  },
  {
    src: "/images/gallery/spice-collection.jpg",
    alt: "Assorted Indian whole and ground spices",
    caption: "Spice range curation",
    category: "Products",
  },
  {
    src: "/images/gallery/apparel-line.jpg",
    alt: "Finished apparel line on racks",
    caption: "Apparel sampling line",
    category: "Products",
  },
  {
    src: "/images/gallery/container-terminal.jpg",
    alt: "Container terminal with gantry cranes",
    caption: "Terminal operations",
    category: "Logistics",
  },
  {
    src: "/images/gallery/port-loading.jpg",
    alt: "Container vessels being loaded at berth",
    caption: "Vessel loading at berth",
    category: "Logistics",
  },
  {
    src: "/images/gallery/container-vessel.jpg",
    alt: "Loaded container vessel at sea",
    caption: "Sailing — FCL consignment",
    category: "Logistics",
  },
  {
    src: "/images/gallery/air-freight.jpg",
    alt: "Aircraft wing above the clouds",
    caption: "Air freight for urgent cargo",
    category: "Logistics",
  },
  {
    src: "/images/gallery/export-warehouse.jpg",
    alt: "Racked export warehouse aisle",
    caption: "Export-ready warehousing",
    category: "Logistics",
  },
  {
    src: "/images/gallery/office-nameplate.jpg",
    alt: "Infinity Exports nameplate at the Kolkata office",
    caption: "Our registered office, Kolkata",
    category: "Office",
  },
  {
    src: "/images/gallery/office-floor.jpg",
    alt: "Infinity Exports office floor with workstations",
    caption: "The trade desk at work",
    category: "Office",
  },
  {
    src: "/images/gallery/office-workstations.jpg",
    alt: "Workstations at the Infinity Exports office",
    caption: "Documentation & operations team",
    category: "Office",
  },
];
