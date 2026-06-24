import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Process />
        <Services />
        <WhyUs />
        <BeforeAfter />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
