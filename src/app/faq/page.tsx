import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions About PetMind Pet Behavior App",
  description: "Get answers to common questions about PetMind. Learn how our AI pet behavior analysis app works, supported animals, pricing, and more.",
  alternates: {
    canonical: "https://petmind.cc/faq",
  },
  openGraph: {
    title: "FAQ - PetMind Pet Behavior App",
    description: "Get answers to common questions about PetMind AI pet behavior analysis app.",
    url: "https://petmind.cc/faq",
  },
};

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
    q: "Is PetMind free?",
    a: "PetMind offers a free version with limited analyses. For unlimited access and premium features, you can upgrade to our Basic or Premium subscription.",
  },
  {
    q: "Can PetMind replace a vet?",
    a: "No. PetMind is for entertainment and informational purposes only. It cannot diagnose illnesses or provide medical advice. If your pet shows signs of illness, always consult a veterinarian.",
  },
  {
    q: "What animals does PetMind support?",
    a: "PetMind works best with dogs and cats, but you can try it with other pets too. The AI analyzes body language and facial expressions to provide insights.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-4 text-[28px] sm:text-[32px] md:text-[36px] font-bold">FAQ</h1>
        <p className="mb-6">Quick answers to the most common questions.</p>

        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-lg border border-border bg-card p-4">
              <summary className="cursor-pointer list-none font-semibold text-foreground">
                <span className="select-none">{item.q}</span>
                <span className="float-right text-muted group-open:hidden">+</span>
                <span className="float-right text-muted hidden group-open:inline">−</span>
              </summary>
              <div className="mt-2 text-sm text-muted">{item.a}</div>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm">
          Still stuck?{" "}
          <a className="underline" href="/contact">Contact us</a>.
        </p>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}