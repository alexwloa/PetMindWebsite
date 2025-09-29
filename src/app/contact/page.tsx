import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

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
            <a className="underline" href="mailto:support@petmind.app">support@petmind.app</a>
            {" "}and we'll reply within 1–2 business days.
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Press & Partnerships</h4>
          <p className="text-base sm:text-lg">
            For media or partnership inquiries, contact{" "}
            <a className="underline" href="mailto:press@petmind.app">press@petmind.app</a>.
          </p>
        </section>

        <section>
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">Company</h4>
          <address className="not-italic text-base sm:text-lg text-muted">
            PetMind, Inc.<br />
            123 Wellness Ave, Suite 200<br />
            Berlin, Germany
          </address>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}