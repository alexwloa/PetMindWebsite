import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-6 text-[32px] sm:text-[36px] md:text-[40px] font-bold">Terms of Service</h1>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">Last updated: 2025-09-23</p>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">1. Agreement</h4>
          <p className="text-base sm:text-lg">By using our website or apps, you agree to these Terms. If you do not agree, please do not use the service.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">2. Use of Service</h4>
          <div className="space-y-3">
            <p className="text-base sm:text-lg">You must be legally capable to enter into this agreement.</p>
            <p className="text-base sm:text-lg">Do not misuse, disrupt, or attempt to access unauthorized areas.</p>
            <p className="text-base sm:text-lg">We may modify or discontinue features with reasonable notice.</p>
          </div>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">3. Intellectual Property</h4>
          <p className="text-base sm:text-lg">All content, trademarks, and code are owned by us or our licensors and protected by applicable laws. You may not copy or redistribute without permission.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">4. Disclaimers</h4>
          <p className="text-base sm:text-lg">The service is provided 'as is' without warranties. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">5. Limitation of Liability</h4>
          <p className="text-base sm:text-lg">To the maximum extent permitted by law, we shall not be liable for indirect, incidental, special, consequential, or punitive damages.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">6. Contact</h4>
          <p className="text-base sm:text-lg">
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