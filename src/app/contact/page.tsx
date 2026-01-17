import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - PetMind Support & Feedback",
  description: "Contact the PetMind team for support, feedback, or questions about our AI pet behavior analysis app. We respond within 1-2 business days.",
  alternates: {
    canonical: "https://petmind.cc/contact",
  },
  openGraph: {
    title: "Contact Us - PetMind Support",
    description: "Get in touch with the PetMind team for support and feedback.",
    url: "https://petmind.cc/contact",
  },
};

export default function ContactPage() {

  return (
    <>
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-6 text-[32px] sm:text-[36px] md:text-[40px] font-bold">Contact</h1>
        <p className="mb-8 text-base sm:text-lg">We'd love to hear from you. Reach out anytime.</p>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Support</h4>
          <p className="text-base sm:text-lg">
            Email us at{" "}
            <a className="underline" href="mailto:mobilemediaconnects@gmail.com">mobilemediaconnects@gmail.com</a>
            {" "}and we'll reply within 1–2 business days.
          </p>
        </section>

        <section>
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Company</h4>
          <address className="not-italic text-base sm:text-lg text-muted">
            Alexander Wimmer<br />
            Blumenweg 2b<br />
            82041 Oberhaching, Germany
          </address>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}