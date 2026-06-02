import SiteLayout from "@/components/SiteLayout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Blog = () => (
  <SiteLayout>
    <PageHero
      eyebrow="Schulungen"
      title={
        <>
          Wissen & <span className="italic text-primary">Schulungen.</span>
        </>
      }
      intro="Professionelle Schulungen rund um Brows, Lashes und moderne Beauty Treatments. Hier findest du bald alle aktuellen Angebote."
    />

    <section className="py-24 md:py-32">
      <div className="container-editorial text-center max-w-xl mx-auto">
        <p className="eyebrow mb-5 text-accent">Demnächst verfügbar</p>
        <h2
          className="text-foreground leading-[1.06]"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(1.8rem, 3vw, 3rem)",
            fontWeight: 300,
          }}
        >
          Die Schulungsseite wird gerade aufgebaut.
        </h2>
        <p className="lede mt-6">
          Interesse an einer Schulung oder Weiterbildung? Melde dich gerne direkt — ich informiere dich persönlich über aktuelle Termine.
        </p>
        <Link
          to="/kontakt"
          className="group mt-10 inline-flex items-center gap-2 btn-primary"
        >
          Jetzt anfragen
          <ArrowRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </SiteLayout>
);

export default Blog;
