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
      a: "PetMind is a mobile app that helps you understand your animal's behavior. Upload photos of your animal and get AI-powered insights into their emotional state and needs.",
    },
    {
      q: "Does it work on iOS and Android?",
      a: "Yes. Our mobile app is available for both iOS and Android devices.",
    },
    {
      q: "Is PetMind free?",
      a: "PetMind offers a free version with limited analyses. For unlimited access and premium features, you can upgrade to our Basic or Premium subscription.",
    },
    {
      q: "Can PetMind replace a vet?",
      a: "No. PetMind is for entertainment and informational purposes only. It cannot diagnose illnesses or provide medical advice. If your animal shows signs of illness, always consult a veterinarian.",
    },
    {
      q: "What animals does PetMind support?",
      a: "PetMind works best with dogs and cats, but you can try it with any animal. The AI analyzes body language and facial expressions to provide insights.",
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
      <div className="w-full border-t border-white/10"></div>
      <Features />

      {/* FAQ Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[390px] sm:max-w-2xl lg:max-w-4xl px-4">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold mb-8 text-center text-[#8bab8b]">FAQ</h2>

          <div>
            {faqs.map((item, index) => (
              <details
                key={item.q}
                className={`group py-6 sm:py-7 ${
                  index !== faqs.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                <summary className="cursor-pointer list-none font-semibold text-white text-xl sm:text-2xl flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <svg
                    className="w-5 h-5 shrink-0 text-white/30 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-base sm:text-lg text-white/60 leading-relaxed pr-8">{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-black text-white rounded-lg px-8 py-4 text-lg hover:bg-gray-800 hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-200 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.2)] no-underline"
            >
              Contact Us for More Information
            </a>
          </div>
        </div>
      </section>

      {/* CTA über dem Footer */}
      <CtaSection />
      
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </div>
  );
}