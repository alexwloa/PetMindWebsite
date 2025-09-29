import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function FaqPage() {
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
    <>
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