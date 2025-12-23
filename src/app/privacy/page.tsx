import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-6 text-[32px] sm:text-[36px] md:text-[40px] font-bold">Privacy Policy</h1>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">Last updated: December 2025</p>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">1. Who We Are</h4>
          <p className="text-base sm:text-lg">
            Alexander Wimmer<br />
            Blumenweg 2b<br />
            82041 Oberhaching, Germany<br />
            Email: mobilemediaconnects@gmail.com
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">2. What Data We Collect</h4>
          <p className="text-base sm:text-lg mb-3">When you use PetMind, we collect:</p>
          <div className="space-y-2 text-base sm:text-lg">
            <p>Email and password when you create an account</p>
            <p>Photos you upload for analysis</p>
            <p>Pet profiles you create (name, species, breed, notes)</p>
            <p>Messages you send to the AI assistant</p>
            <p>Basic device info (device type, app version)</p>
          </div>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">3. Why We Collect It</h4>
          <p className="text-base sm:text-lg">We use your data to provide the app's features: analyzing your photos with AI, saving your analyses, and managing your account. We process your data because it's necessary to provide the service you signed up for.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">4. Who We Share It With</h4>
          <p className="text-base sm:text-lg mb-3">We share your data with these services to make the app work:</p>
          <div className="space-y-2 text-base sm:text-lg">
            <p><strong>OpenAI & Google Gemini</strong> – Your photos and messages go here for AI analysis</p>
            <p><strong>Supabase</strong> – Stores your account, photos, and analyses</p>
            <p><strong>RevenueCat</strong> – Manages subscriptions</p>
            <p><strong>Google AdMob</strong> – Shows ads to free users (collects device identifiers for personalized ads)</p>
            <p><strong>Apple / Google</strong> – Processes payments</p>
          </div>
          <p className="text-base sm:text-lg mt-3">These services are in the USA. Your data is protected by standard contractual clauses as required by EU law.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">5. How Long We Keep It</h4>
          <p className="text-base sm:text-lg">We keep your data while your account exists. Delete your account and we delete your data within 30 days.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">6. Your Rights</h4>
          <p className="text-base sm:text-lg mb-3">You have the right to:</p>
          <div className="space-y-2 text-base sm:text-lg">
            <p>Access your data – ask us what we have</p>
            <p>Correct your data – fix anything wrong</p>
            <p>Delete your data – erase everything</p>
            <p>Restrict processing – limit how we use it</p>
            <p>Export your data – request a copy via email</p>
            <p>Object to processing – tell us to stop</p>
            <p>Withdraw consent – change your mind anytime</p>
            <p>Complain – contact a data protection authority</p>
          </div>
          <p className="text-base sm:text-lg mt-3">
            Email us at{" "}
            <a className="underline" href="mailto:mobilemediaconnects@gmail.com">mobilemediaconnects@gmail.com</a>
            {" "}to use any of these rights.
          </p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">7. Children</h4>
          <p className="text-base sm:text-lg">This app is not for anyone under 16.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">8. Changes</h4>
          <p className="text-base sm:text-lg">We may update this policy. If we do, the "last updated" date changes. Keep using the app means you accept the new policy.</p>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}
