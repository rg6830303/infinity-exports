import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import GallerySlideshow from "@/components/GallerySlideshow";
import SceneBackdrop from "@/components/SceneBackdrop";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery — Products, Logistics & Our Kolkata Office",
  description:
    "A look inside Infinity Exports: product lines we source, container and freight operations we run, and our trade desk in Kolkata, India.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery | ${site.name}`,
    description:
      "Product sourcing, export logistics and the Infinity Exports office in Kolkata — in pictures.",
    url: `${site.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden bg-white pt-28 text-ink">
        {/* page-signature 3D vignette — floating photo frames */}
        <SceneBackdrop
          variant="frames"
          className="absolute right-[-4%] top-6 z-0 hidden h-[26rem] w-[34rem] opacity-70 lg:block"
        />
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-[0.5] [background-size:60px_60px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />

        <section className="container-x relative py-12 lg:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
            Gallery
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tightest sm:text-5xl">
            Trade, in pictures
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            From grading yards and sampling lines to container terminals and
            our own trade desk in Kolkata — a window into how your cargo
            actually moves.
          </p>
        </section>

        {/* animated slideshow */}
        <section className="container-x relative pb-4">
          <GallerySlideshow />
        </section>

        <section className="container-x relative border-t border-ink/10 py-10 lg:py-14">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-brand-600">
            Browse by category
          </p>
          <GalleryGrid />
        </section>
      </main>
      <Footer />
    </>
  );
}
