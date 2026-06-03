import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/home/Hero";
import Treatments from "@/components/home/Treatments";
import BrandPhilosophy from "@/components/home/BrandPhilosophy";
import About from "@/components/home/About";
import Academy from "@/components/home/Academy";
import Testimonials from "@/components/home/Testimonials";
import Booking from "@/components/home/Booking";
import Faq from "@/components/home/Faq";

const Index = () => (
  <SiteLayout>
    <Hero />
    <Treatments />
    <BrandPhilosophy />
    <About />
    <Academy />
    <Testimonials />
    <Faq />
    <Booking />
  </SiteLayout>
);

export default Index;
