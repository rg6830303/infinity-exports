import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Services />
        <Products />
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
