import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function ContactPage() {

  return (
    <>
      <Header />
      <main className="container pt-3 md:pt-4 pb-8">
        <h1 className="mb-4">Contact</h1>
        <p className="mb-6">We'd love to hear from you. Reach out anytime.</p>

        <section className="mb-8">
          <h4 className="mb-2">Support</h4>
          <p>
            Email us at{" "}
            <a className="underline" href="mailto:support@petmind.app">support@petmind.app</a>
            {" "}and we'll reply within 1–2 business days.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">Press & Partnerships</h4>
          <p>
            For media or partnership inquiries, contact{" "}
            <a className="underline" href="mailto:press@petmind.app">press@petmind.app</a>.
          </p>
        </section>

        <section>
          <h4 className="mb-2">Company</h4>
          <address className="not-italic text-sm text-muted">
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