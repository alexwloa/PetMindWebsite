import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AppShowcase from "@/components/sections/app-showcase";
import Features from "@/components/sections/features";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Place hero full-width so heading sits top-left */}
      <Hero />
      {/* Phone mockup inside centered mobile container */}
      <div className="mx-auto max-w-[390px] mt-20 md:mt-28">
        <AppShowcase />
      </div>
      {/* Features now appear directly under the phone mockup, full-width */}
      <Features />
      {/* CTA and Footer remain in centered mobile container */}
      <div className="mx-auto max-w-[390px]">
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}