import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Owners from "@/components/Owners";
import FourLeaves from "@/components/FourLeaves";
import TrustStats from "@/components/TrustStats";
import AboutCTA from "@/components/AboutCTA";
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
        <About />
        <Owners />
        <FourLeaves />
        <TrustStats />
        <AboutCTA />
        <BeforeAfter />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
