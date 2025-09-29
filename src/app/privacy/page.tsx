import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-6 text-[32px] sm:text-[36px] md:text-[40px] font-bold">Privacy Policy</h1>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">Last updated: 2025-09-23</p>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">1. Introduction</h4>
          <p className="text-base sm:text-lg">We respect your privacy and are committed to protecting your personal data. This policy explains what data we collect, how we use it, and your rights.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">2. Data We Collect</h4>
          <div className="space-y-3">
            <p className="text-base sm:text-lg">Account data (name, email)</p>
            <p className="text-base sm:text-lg">App usage metrics for analytics and product improvement</p>
            <p className="text-base sm:text-lg">Device and log information (IP address, browser, OS)</p>
          </div>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">3. How We Use Data</h4>
          <div className="space-y-3">
            <p className="text-base sm:text-lg">Provide and improve our services</p>
            <p className="text-base sm:text-lg">Communicate updates and important notices</p>
            <p className="text-base sm:text-lg">Ensure security, prevent abuse, and comply with legal obligations</p>
          </div>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">4. Sharing</h4>
          <p className="text-base sm:text-lg">We do not sell your data. We may share it with trusted processors (e.g., cloud hosting, analytics) under strict data processing agreements, or when required by law.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">5. Your Rights</h4>
          <div className="space-y-3">
            <p className="text-base sm:text-lg">Access, correct, or delete your personal data</p>
            <p className="text-base sm:text-lg">Object to processing or request restriction</p>
            <p className="text-base sm:text-lg">Data portability where applicable</p>
          </div>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">6. Contact</h4>
          <p className="text-base sm:text-lg">
            For privacy requests, email us at{" "}
            <a className="underline" href="mailto:support@petmind.app">support@petmind.app</a>.
          </p>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}