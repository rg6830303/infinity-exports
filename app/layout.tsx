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
  title: {
    default: `${site.name} — Global Import & Export Solutions`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Infinity Exports",
    "import export company",
    "Kolkata exporters",
    "global trade",
    "freight forwarding",
    "India exporters",
    "sourcing agent",
    "supply chain",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} — Global Import & Export Solutions`,
    description: site.description,
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
  themeColor: "#070b16",
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
    description: site.description,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Unit No. 838, Eighth Floor, Abacus, Plot No. 11E/23, Action Area",
      addressLocality: "Kolkata",
      postalCode: "700161",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    sameAs: [site.social.instagram],
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
