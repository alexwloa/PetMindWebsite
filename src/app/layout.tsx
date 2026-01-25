import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const GA_MEASUREMENT_ID = "G-72ZEWRK383";

export const metadata: Metadata = {
  title: {
    default: "PetMind - AI Pet Behavior Analysis App | Understand Your Pets Better",
    template: "%s | PetMind",
  },
  description: "PetMind is a mobile app that helps you understand your pet's behavior. Upload photos or videos of your dog, cat, or any pet and get AI-powered insights into their emotional state, needs, and behavior patterns. Available on iOS and Android.",
  keywords: ["pet app", "pet behavior", "dog behavior", "cat behavior", "pet analysis", "AI pet", "understand pets", "pet emotions", "animal behavior", "pet care", "pet health", "dog app", "cat app", "pet training"],
  authors: [{ name: "PetMind" }],
  creator: "PetMind",
  publisher: "PetMind",
  applicationName: "PetMind",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://petmind.cc"),
  alternates: {
    canonical: "https://petmind.cc",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://petmind.cc",
    siteName: "PetMind",
    title: "PetMind - AI Pet Behavior Analysis App | Understand Your Pets Better",
    description: "PetMind helps you understand your pet's behavior with AI-powered photo and video analysis. Get insights into your dog's or cat's emotional state and needs.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "PetMind Logo - AI Pet Behavior Analysis App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetMind - AI Pet Behavior Analysis App",
    description: "Understand your pet's behavior with AI-powered photo and video analysis. Available on iOS and Android.",
    images: ["/icon.png"],
    creator: "@petmind",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "ezKaV4R-YHlYheJxqVDh6B2xI1497mvbT_vviRNeyWQ",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://petmind.cc/#organization",
      name: "PetMind",
      url: "https://petmind.cc",
      logo: {
        "@type": "ImageObject",
        url: "https://petmind.cc/icon.png",
        width: 512,
        height: 512,
      },
      sameAs: [],
      contactPoint: {
        "@type": "ContactPoint",
        email: "support@petmind.app",
        contactType: "customer service",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://petmind.cc/#website",
      url: "https://petmind.cc",
      name: "PetMind",
      publisher: {
        "@id": "https://petmind.cc/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://petmind.cc/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "MobileApplication",
      "@id": "https://petmind.cc/#app",
      name: "PetMind",
      operatingSystem: "iOS, Android",
      applicationCategory: "LifestyleApplication",
      description: "PetMind is a mobile app that helps you understand your pet's behavior. Upload photos or videos of your dog, cat, or any pet and get AI-powered insights into their emotional state, needs, and behavior patterns.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        ratingCount: "4",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@id": "https://petmind.cc/#organization",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://petmind.cc/#webpage",
      url: "https://petmind.cc",
      name: "PetMind - AI Pet Behavior Analysis App | Understand Your Pets Better",
      description: "PetMind is a mobile app that helps you understand your pet's behavior with AI-powered photo and video analysis.",
      isPartOf: {
        "@id": "https://petmind.cc/#website",
      },
      about: {
        "@id": "https://petmind.cc/#app",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://petmind.cc/icon.png",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
