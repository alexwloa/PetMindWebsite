import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - PetMind App Usage Terms",
  description: "Read PetMind's Terms of Service. Understand your rights and responsibilities when using our AI pet behavior analysis app. Simple, clear terms.",
  alternates: {
    canonical: "https://petmind.cc/terms",
  },
  openGraph: {
    title: "Terms of Service - PetMind",
    description: "Terms of Service for PetMind AI pet behavior analysis app.",
    url: "https://petmind.cc/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[390px] sm:max-w-2xl px-4 pt-3 md:pt-4 pb-8 text-center">
        <h1 className="mb-6 text-[32px] sm:text-[36px] md:text-[40px] font-bold">Terms of Service</h1>
        <p className="mb-8 text-base sm:text-lg text-muted-foreground">Last updated: November 2025</p>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">1. Acceptance</h4>
          <p className="text-base sm:text-lg">By using PetMind – including tapping "Let's Go", signing up, or signing in – you agree to these Terms of Service.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">2. What PetMind Does</h4>
          <p className="text-base sm:text-lg">PetMind uses AI to analyze photos of animals. You upload a photo, and the AI provides insights about the animal's behavior and emotions.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">3. Important – Not Veterinary Advice</h4>
          <p className="text-base sm:text-lg">PetMind is for entertainment and informational purposes only. The AI analyzes photos – nothing more. It cannot diagnose illnesses, provide medical advice, or replace a veterinarian. If your animal shows signs of illness or unusual behavior, consult a vet.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">4. Your Responsibilities</h4>
          <div className="space-y-2 text-base sm:text-lg">
            <p>Only upload photos you have the right to use</p>
            <p>Don't upload illegal or harmful content</p>
            <p>Keep your login credentials secure</p>
          </div>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">5. Payments</h4>
          <p className="text-base sm:text-lg">Premium/Basic subscriptions are processed through Apple App Store or Google Play Store. Subscriptions renew automatically. Cancel anytime through your App Store settings (at least 24 hours before renewal). Refunds follow App Store policies.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">6. Limitation of Liability</h4>
          <p className="text-base sm:text-lg">The app is provided "as is". We don't guarantee the accuracy of AI analyses or uninterrupted service. We're not responsible for decisions you make based on the app's output.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">7. Account Termination</h4>
          <p className="text-base sm:text-lg">You can delete your account anytime in the settings. We may suspend accounts that violate these terms.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">8. Changes</h4>
          <p className="text-base sm:text-lg">We may update these terms. Continued use means you accept the changes.</p>
        </section>

        <section className="mb-10">
          <h4 className="mb-4 text-lg sm:text-xl font-semibold">9. Contact</h4>
          <p className="text-base sm:text-lg">
            Questions? Email us at{" "}
            <a className="underline" href="mailto:mobilemediaconnects@gmail.com">mobilemediaconnects@gmail.com</a>
          </p>
        </section>
      </main>
      <div className="mx-auto max-w-[390px]">
        <Footer />
      </div>
    </>
  );
}
