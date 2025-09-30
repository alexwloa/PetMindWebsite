import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import AppShowcase from "@/components/sections/app-showcase";
import Features from "@/components/sections/features";
import CtaSection from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  const faqs = [
    {
      q: "What is PetMind?",
      a: "PetMind is a mobile app that helps you understand your pet's behavior. Upload photos or videos of your pet and get insights into their emotional state and needs.",
    },
    {
      q: "Does it work on iOS and Android?",
      a: "Yes. Our mobile app is available for both iOS and Android devices.",
    },
    {
      q: "How can I contact support?",
      a: "Email support@petmind.app and we'll get back within 1–2 business days.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      {/* Place hero full-width so heading sits top-left */}
      <Hero />
      {/* Phone mockup full-width */}
      <div className="mt-20 md:mt-28">
        <AppShowcase />
      </div>
      {/* Full-width divider */}
      <div className="w-full border-t border-border"></div>
      
      {/* Features now appear directly under the phone mockup, full-width */}
      <Features />
      
      {/* Full-width divider */}
      <div className="w-full border-t border-border"></div>
      
      {/* FAQ Section */}
      <div className="mx-auto max-w-[390px] sm:max-w-2xl lg:max-w-4xl px-4">
        <section className="py-8 text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold mb-8" style={{ color: 'var(--color-accent-coral)' }}>FAQ</h2>
          <p className="mb-10 text-base sm:text-lg text-muted-foreground">Quick answers to the most common questions.</p>

          <div className="space-y-6">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-xl border-2 border-white/20 bg-card p-8 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-shadow duration-300">
                <summary className="cursor-pointer list-none font-semibold text-white text-xl">
                  <span className="select-none">{item.q}</span>
                  <span className="float-right text-white group-open:hidden text-2xl">+</span>
                  <span className="float-right text-white hidden group-open:inline text-2xl">−</span>
                </summary>
                <div className="mt-6 text-lg text-white">{item.a}</div>
              </details>
            ))}
          </div>

          <div className="mt-10">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-black text-white rounded-lg px-8 py-4 text-lg hover:bg-gray-800 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-200 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.2)] no-underline"
            >
              Contact Us for More Information
            </a>
          </div>
        </section>
      </div>
      
      {/* Full-width divider */}
      <div className="w-full border-t border-border"></div>
      
      {/* CTA über dem Footer */}
      <CtaSection />
      
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </div>
  );
}