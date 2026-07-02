import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Process from "@/components/Process";
import ExportProcessSection from "@/components/ExportProcessSection";
import GlobalReach from "@/components/GlobalReach";
import CertificationsSection from "@/components/CertificationsSection";
import GooglePresenceSection from "@/components/GooglePresenceSection";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollProgress from "@/components/ScrollProgress";
import PageIntro from "@/components/PageIntro";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <PageIntro />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Process />
        <ExportProcessSection />
        <GlobalReach />
        <CertificationsSection />
        <GooglePresenceSection />
        <WhyUs />
        <FAQ />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
