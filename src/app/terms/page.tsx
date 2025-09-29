import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="container pt-3 md:pt-4 pb-8">
        <h1 className="mb-4">Terms of Service</h1>
        <p className="mb-6">Last updated: 2025-09-23</p>

        <section className="mb-8">
          <h4 className="mb-2">1. Agreement</h4>
          <p>By using our website or apps, you agree to these Terms. If you do not agree, please do not use the service.</p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">2. Use of Service</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be legally capable to enter into this agreement.</li>
            <li>Do not misuse, disrupt, or attempt to access unauthorized areas.</li>
            <li>We may modify or discontinue features with reasonable notice.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">3. Intellectual Property</h4>
          <p>All content, trademarks, and code are owned by us or our licensors and protected by applicable laws. You may not copy or redistribute without permission.</p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">4. Disclaimers</h4>
          <p>The service is provided 'as is' without warranties. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">5. Limitation of Liability</h4>
          <p>To the maximum extent permitted by law, we shall not be liable for indirect, incidental, special, consequential, or punitive damages.</p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">6. Contact</h4>
          <p>
            Questions about these Terms? Email{" "}
            <a className="underline" href="mailto:legal@petmind.app">legal@petmind.app</a>.
          </p>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}