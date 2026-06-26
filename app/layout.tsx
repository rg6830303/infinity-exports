import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

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
    default: `${site.name} — Global Import & Export Solutions`,
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
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Global Import & Export Solutions`,
    description: site.description,
    url: site.url,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Global Import & Export Solutions`,
    description: site.description,
  },
  icons: {
    icon: "/images/logo.jpg",
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.jpg`,
    image: `${site.url}/images/business-card.jpg`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    contactPoint: {
      "@type": "ContactPoint",
      "telephone": site.phone,
      "contactType": "customer service",
      "email": site.email,
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
    sameAs: [site.social.instagram, site.social.whatsapp],
  };

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
