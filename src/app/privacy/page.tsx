import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="container pt-3 md:pt-4 pb-8">
        <h1 className="mb-4">Privacy Policy</h1>
        <p className="mb-6">Last updated: 2025-09-23</p>

        <section className="mb-8">
          <h4 className="mb-2">1. Introduction</h4>
          <p>We respect your privacy and are committed to protecting your personal data. This policy explains what data we collect, how we use it, and your rights.</p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">2. Data We Collect</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Account data (name, email)</li>
            <li>App usage metrics for analytics and product improvement</li>
            <li>Device and log information (IP address, browser, OS)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">3. How We Use Data</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and improve our services</li>
            <li>Communicate updates and important notices</li>
            <li>Ensure security, prevent abuse, and comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">4. Sharing</h4>
          <p>We do not sell your data. We may share it with trusted processors (e.g., cloud hosting, analytics) under strict data processing agreements, or when required by law.</p>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">5. Your Rights</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access, correct, or delete your personal data</li>
            <li>Object to processing or request restriction</li>
            <li>Data portability where applicable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h4 className="mb-2">6. Contact</h4>
          <p>
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