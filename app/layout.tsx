import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site, faqs } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Distinctive editorial-grotesque for display headings (replaces the
// over-used template look) — kept tight and confident for an enterprise feel.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Import & Export Company in Kolkata, India`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Infinity Exports",
    "Infinity Exports Kolkata",
    "Infinity Exports India",
    "infinityexports.org",
    "infinity exports website",
    "import export company",
    "Kolkata exporters",
    "global trade Kolkata",
    "freight forwarding West Bengal",
    "India exporters",
    "sourcing agent India",
    "supply chain management India",
    "Krishna Kumar Kolkata",
  ],
  alternates: {
    canonical: "/",
  },
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: "Import & Export",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${site.name} — Import & Export Company in Kolkata, India`,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    // og:image is supplied by app/opengraph-image.tsx (branded 1200x630 card).
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Import & Export Company in Kolkata, India`,
    description: site.description,
    // twitter:image also comes from app/opengraph-image.tsx for consistency.
  },
  // Favicon / app icons are provided via the app/icon.jpg & app/apple-icon.jpg
  // file conventions, which emit crawlable <link rel="icon"> tags Google uses
  // for the search-result favicon.
  // After deploying, add your verification tokens from Google Search Console
  // and Bing Webmaster Tools here, then redeploy:
  // verification: { google: "<token>", other: { "msvalidate.01": "<token>" } },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      // Helps search engines associate brand spelling variants & common
      // typos with this site when people search for it.
      alternateName: [
        "Infinity Exports India",
        "Infinity Exports Kolkata",
        "InfinityExports",
        "Infinityexports",
        "Infinity Export",
        "infinityexports.org",
      ],
      url: site.url,
      logo: `${site.url}/images/logo.jpg`,
      image: `${site.url}/images/business-card.jpg`,
      description: site.description,
      email: site.email,
      telephone: site.phone,
      areaServed: "Worldwide",
      knowsAbout: [
        "Import and Export",
        "Global Sourcing",
        "Freight Forwarding",
        "Export Documentation",
        "Supply Chain Management",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "customer service",
        email: site.email,
        areaServed: "Worldwide",
        availableLanguage: ["English", "Hindi", "Bengali"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Unit No. 838, Eighth Floor, Abacus, Plot No. 11E/23, Action Area",
        addressLocality: "Kolkata",
        postalCode: "700161",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      // Ties the site to the Google Business Profile / Maps listing (CID)
      hasMap: site.googleMaps,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Google Business Profile",
        value: site.googleBusinessProfileId,
      },
      sameAs: [
        site.social.instagram,
        site.social.whatsapp,
        site.googleBusiness,
        site.googleMaps,
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      alternateName: "infinityexports.org",
      url: site.url,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
