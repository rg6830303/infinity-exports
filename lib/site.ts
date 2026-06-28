export const site = {
  name: "Infinity Exports",
  url: "https://infinityexports.org",
  tagline: "Connecting India to the World",
  description:
    "Infinity Exports is a premier global import and export company based in Kolkata, West Bengal, India. We specialize in reliable trade solutions, product sourcing, custom logistics, and supply chain management across 25+ countries.",
  partner: "Krishna Kumar",
  partnerRole: "Partner",
  phone: "+91 82403 89873",
  phoneRaw: "918240389873",
  email: "infinityexports@gmail.com",
  whatsapp: "918240389873",
  instagramHandle: "infinity.exports",
  address: {
    lines: [
      "Premises No. Plot No. 11E/23,",
      "Unit No. 838, Eighth Floor, Abacus,",
      "Plot No. 11E/23, Action Area,",
      "Kolkata - 700 161, West Bengal, India",
    ],
    short: "Kolkata, West Bengal, India",
    // Direct Google Maps listing via the business CID (shop id)
    maps: "https://www.google.com/maps?cid=13640765485492977997",
  },
  googleBusiness: "https://share.google/I9YbUlIxZ5K5UziTZ",
  // Google Business Profile identifiers (used for local-SEO structured data)
  googleMapsCid: "13640765485492977997",
  googleBusinessProfileId: "7321221060326381807",
  googleMaps: "https://www.google.com/maps?cid=13640765485492977997",
  social: {
    whatsapp: "https://wa.me/918240389873",
    instagram: "https://www.instagram.com/infinity.exports",
  },
};

export const stats = [
  { value: "25+", label: "Countries Served" },
  { value: "500+", label: "Shipments Delivered" },
  { value: "98%", label: "On-time Dispatch" },
  { value: "15+", label: "Product Categories" },
];

export const services = [
  {
    icon: "PackageSearch",
    slug: "global-sourcing",
    title: "Global Sourcing",
    desc: "We identify, vet and negotiate with verified manufacturers to source quality products at the right price.",
    overview:
      "Finding the right supplier is the single biggest risk in cross-border trade. We take that risk off your plate — mapping verified manufacturers across India, validating them on the ground, and negotiating on your behalf so you land the right quality at the right landed cost.",
    highlights: [
      "Supplier identification from a vetted manufacturer network",
      "Factory background, capacity and compliance checks",
      "Sample coordination and specification matching",
      "Price, MOQ and payment-term negotiation",
      "Counter-sourcing to benchmark every quote",
    ],
    deliverables: [
      "A shortlist of verified suppliers with comparison",
      "Itemised landed-cost estimate (ex-works to destination)",
      "Confirmed samples before any bulk commitment",
    ],
  },
  {
    icon: "FileCheck2",
    slug: "export-documentation",
    title: "Export Documentation & Compliance",
    desc: "Complete handling of invoices, packing lists, certificates of origin, and regulatory compliance paperwork.",
    overview:
      "A single wrong document can hold a container at the port. We prepare and reconcile the full export document set so your shipment clears customs cleanly at both origin and destination, in line with international trade norms.",
    highlights: [
      "Commercial invoice & packing list preparation",
      "Certificate of Origin (incl. preferential where eligible)",
      "HS code classification and duty guidance",
      "Bill of Lading / Airway Bill coordination",
      "Product-specific regulatory & inspection certificates",
    ],
    deliverables: [
      "A complete, reconciled document set per shipment",
      "Customs clearance coordination at origin",
      "Guidance on destination import requirements",
    ],
  },
  {
    icon: "Warehouse",
    slug: "warehousing-packaging",
    title: "Warehousing & Export Packaging",
    desc: "Secure storage, export-grade packaging and inventory management ready for international dispatch.",
    overview:
      "Goods that survive the factory but fail the voyage cost you twice. We consolidate, store and pack to export grade — protecting your cargo against moisture, handling and long-haul transit while keeping volumetric weight in check.",
    highlights: [
      "Secure short- and medium-term storage",
      "Export-grade, ISPM-15 compliant wood packaging",
      "Carton, crate and palletisation optimised for cube",
      "Order consolidation from multiple suppliers",
      "Labelling, marking and barcoding to buyer specs",
    ],
    deliverables: [
      "Cargo packed to withstand international transit",
      "Consolidated loads that lower freight per unit",
      "Photo documentation before dispatch",
    ],
  },
  {
    icon: "ShieldCheck",
    slug: "quality-assurance",
    title: "Quality Assurance & Inspection",
    desc: "Rigorous pre-shipment inspections and quality control to ensure every consignment meets global standards.",
    overview:
      "You should never wire the balance payment on trust alone. We run quality control at the points that matter — so what you ordered is what gets loaded, verified against an agreed specification and AQL.",
    highlights: [
      "Pre-production and in-line checks where required",
      "Pre-shipment inspection (PSI) against AQL standards",
      "Quantity, workmanship and packaging verification",
      "Third-party inspection agency coordination",
      "Defect reporting with photos before dispatch",
    ],
    deliverables: [
      "A pre-shipment inspection report with evidence",
      "Sign-off gate before balance payment & loading",
      "Clear remediation if anything falls short",
    ],
  },
  {
    icon: "Headset",
    slug: "trade-consulting",
    title: "Trade Consulting",
    desc: "Expert guidance on tariffs, Incoterms, market entry and the documentation needed to trade with confidence.",
    overview:
      "Whether you are importing for the first time or scaling an export line, the rules around Incoterms, duties and compliance decide your margin. We translate that complexity into clear, costed decisions.",
    highlights: [
      "Incoterms 2020 selection and risk-transfer guidance",
      "Tariff, duty and landed-cost modelling",
      "Market-entry and product-feasibility input",
      "Payment-method advice (advance, LC, DP/DA)",
      "End-to-end documentation roadmap",
    ],
    deliverables: [
      "A clear recommendation on terms and routing",
      "A landed-cost model you can plan margins around",
      "A documentation checklist for your trade lane",
    ],
  },
];

export const products = [
  {
    name: "Agro & Food Products",
    slug: "agro-food",
    desc: "Spices, grains, pulses, tea & processed foods.",
    icon: "Wheat",
    overview:
      "India is one of the world's largest producers of spices, cereals and pulses. We source food-grade, export-compliant agro commodities with the certifications international buyers expect.",
    items: [
      "Whole & ground spices (turmeric, chilli, cumin, pepper)",
      "Rice, wheat and millets",
      "Pulses, lentils and grams",
      "Tea, coffee and processed/packaged foods",
    ],
    notes:
      "Available with FSSAI, APEDA, phytosanitary and lab-test documentation as required by the destination.",
  },
  {
    name: "Textiles & Apparel",
    slug: "textiles-apparel",
    desc: "Cotton fabrics, garments, home textiles & yarns.",
    icon: "Shirt",
    overview:
      "From raw yarn to finished garments, India's textile base offers depth across price points. We connect you to mills and units matched to your fabric, GSM and compliance needs.",
    items: [
      "Cotton, blended and specialty fabrics",
      "Ready-made garments and knitwear",
      "Home textiles — bed, bath and kitchen linen",
      "Yarns and made-ups",
    ],
    notes:
      "OEKO-TEX and buyer-specific compliance can be arranged on request.",
  },
  {
    name: "Handicrafts & Décor",
    slug: "handicrafts-decor",
    desc: "Artisan handicrafts, brassware & home décor.",
    icon: "Palette",
    overview:
      "Handmade Indian décor carries strong margins in Western markets. We work with artisan clusters to deliver consistent, export-packed handicraft lines at scale.",
    items: [
      "Brass, metal and wooden handicrafts",
      "Home & festive décor",
      "Pottery, terracotta and stoneware",
      "Handmade gifting ranges",
    ],
    notes:
      "Custom designs and private-label packaging supported for repeat buyers.",
  },
  {
    name: "Industrial Goods",
    slug: "industrial-goods",
    desc: "Machinery parts, tools & engineering products.",
    icon: "Cog",
    overview:
      "India's engineering sector supplies precision components globally at competitive cost. We source to drawing and tolerance, with QC built into the shipment.",
    items: [
      "Machined components and castings",
      "Hand & power tools",
      "Hardware, fasteners and fittings",
      "Engineering and auto-ancillary parts",
    ],
    notes:
      "Material test certificates and dimensional inspection available.",
  },
  {
    name: "Leather Products",
    slug: "leather-products",
    desc: "Finished leather, bags, footwear & accessories.",
    icon: "Briefcase",
    overview:
      "Kolkata and Kanpur anchor India's leather export trade. We source finished leather and leather goods built to international quality and finish standards.",
    items: [
      "Finished leather and hides",
      "Bags, wallets and accessories",
      "Footwear and uppers",
      "Industrial and safety leather goods",
    ],
    notes:
      "Restricted-substance compliance can be arranged for EU/US buyers.",
  },
  {
    name: "Chemicals & Pharma",
    slug: "chemicals-pharma",
    desc: "Specialty chemicals, raw materials & supplies.",
    icon: "FlaskConical",
    overview:
      "We handle specialty chemicals and pharma-adjacent raw materials with the documentation, MSDS and dangerous-goods handling that regulated trade demands.",
    items: [
      "Specialty and industrial chemicals",
      "Pharmaceutical raw materials & excipients",
      "Dyes, pigments and intermediates",
      "Lab and process supplies",
    ],
    notes:
      "MSDS, COA and DG-compliant packing & shipping arranged where applicable.",
  },
];

export const steps = [
  {
    slug: "enquiry-sourcing",
    title: "Enquiry & Sourcing",
    desc: "Share your requirement. We source verified suppliers and share quotes tailored to your specifications.",
    overview:
      "Everything starts with your specification. We translate it into a sourcing brief, go to our vetted supplier network, and come back with verified options and a clear, itemised quote.",
    points: [
      "We capture product, quantity, target market and budget",
      "We shortlist and validate suppliers against your spec",
      "We negotiate price, MOQ and payment terms",
      "You receive a comparison and a landed-cost estimate",
    ],
    output: "A verified supplier shortlist and an itemised quote.",
  },
  {
    slug: "quality-packaging",
    title: "Quality & Packaging",
    desc: "Goods undergo inspection and export-grade packaging to protect them through the journey.",
    overview:
      "Before anything ships, it is inspected against the agreed specification and packed to survive an international voyage — protecting both your cargo and your cash.",
    points: [
      "Pre-shipment inspection against agreed AQL",
      "Quantity, workmanship and labelling verification",
      "Export-grade, transit-proof packaging",
      "Photo evidence and sign-off before loading",
    ],
    output: "An inspection report and dispatch-ready, protected cargo.",
  },
  {
    slug: "documentation-customs",
    title: "Documentation & Customs",
    desc: "We prepare all export documentation and handle customs clearance for a smooth dispatch.",
    overview:
      "We assemble and reconcile the full document set, classify goods correctly, and coordinate customs clearance so your shipment moves without avoidable holds or penalties.",
    points: [
      "Commercial invoice, packing list & certificate of origin",
      "Correct HS classification and duty handling",
      "Bill of Lading / Airway Bill coordination",
      "Customs clearance at origin",
    ],
    output: "A clean, compliant document set and cleared cargo.",
  },
  {
    slug: "shipping-delivery",
    title: "Shipping & Delivery",
    desc: "Cargo is shipped via the optimal route with tracking until it reaches your doorstep.",
    overview:
      "We book the optimal route by sea or air, hand over the documents your bank and customs need, and keep you updated with tracking until the cargo reaches you.",
    points: [
      "Route and mode chosen for cost vs. transit time",
      "Carrier booking and space confirmation",
      "Document handover per your Incoterm",
      "Shipment tracking through to delivery",
    ],
    output: "On-time delivery with full visibility, end to end.",
  },
];

// Option lists powering the trade-intelligent enquiry / quote form.
export const tradeDirections = [
  "Import into my country (buying from India)",
  "Export from India (I have goods to sell)",
  "Both / not sure yet",
];

export const incoterms = [
  "EXW — Ex Works",
  "FOB — Free On Board",
  "CIF — Cost, Insurance & Freight",
  "CFR — Cost & Freight",
  "DAP — Delivered At Place",
  "DDP — Delivered Duty Paid",
  "Not sure — advise me",
];

export const shippingModes = [
  "Sea freight (FCL/LCL)",
  "Air freight",
  "Either — recommend the best",
];

export const timelines = [
  "Urgent — within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "Just exploring / budgeting",
];

export const reasons = [
  {
    title: "Trusted Partnerships",
    desc: "A growing network of verified manufacturers and carriers across the globe.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden costs — clear, competitive quotes at every stage of the trade.",
  },
  {
    title: "On-time Delivery",
    desc: "Optimised logistics that keep your supply chain moving without delays.",
  },
  {
    title: "Dedicated Support",
    desc: "A single point of contact guiding your shipment from enquiry to arrival.",
  },
];

export const faqs = [
  {
    q: "Which countries do you export to?",
    a: "We ship to buyers across Asia, the Middle East, Europe, North America and Australia. If you have a specific destination in mind, share it and we'll confirm routing and timelines.",
  },
  {
    q: "Do you handle customs clearance and documentation?",
    a: "Yes. We prepare the full export documentation set — commercial invoice, packing list, certificate of origin and any regulatory paperwork — and coordinate customs clearance end to end.",
  },
  {
    q: "Is there a minimum order quantity?",
    a: "It depends on the product and supplier. Tell us what you need and your target volume, and we'll source options that fit — from trial orders to full-container loads.",
  },
  {
    q: "Can you source a product that isn't listed on the site?",
    a: "Very likely. Our strength is sourcing from a vetted manufacturer network across India. Send us the specification and we'll come back with verified options and quotes.",
  },
  {
    q: "How do payments and quotes work?",
    a: "After we understand your requirement we share a clear, itemised quote with no hidden costs. Payment terms are agreed up front and follow standard international trade practice.",
  },
  {
    q: "How quickly will I get a response?",
    a: "Usually within a few hours on business days. For anything urgent, message us on WhatsApp or call directly and we'll get straight onto it.",
  },
];
