import SiteLayout from "@/components/SiteLayout";
import Hero from "@/components/home/Hero";
import Treatments from "@/components/home/Treatments";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import Booking from "@/components/home/Booking";

const Index = () => (
  <SiteLayout>
    <Hero />
    <Treatments />
    <About />
    <Testimonials />
    <Booking />
  </SiteLayout>
);

export default Index;
