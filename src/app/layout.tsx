import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: {
    default: "PetMind - Animal Identifier",
    template: "%s | PetMind - Animal Identifier",
  },
  description: "Identify any animal instantly with AI. Snap a photo to discover species, breeds & behavior insights. Download PetMind free for iOS & Android.",
  keywords: ["animal identifier app", "AI animal identification", "identify dog breed", "identify cat breed", "animal species identifier", "pet behavior analysis", "what breed is my dog", "identify animal by photo", "animal behavior app", "pet identifier", "dog breed scanner", "cat breed identifier"],
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
    title: "PetMind - AI Animal Identifier & Behavior App",
    description: "Identify any animal instantly with AI. Snap a photo to discover species, breeds & behavior insights. Free for iOS & Android.",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "PetMind Logo - AI Animal Identifier App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PetMind - AI Animal Identifier & Behavior App",
    description: "Identify any animal instantly with AI. Snap a photo to discover species, breeds & behavior insights. Free for iOS & Android.",
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
        email: "mobilemediaconnects@gmail.com",
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
      description: "PetMind is an AI-powered animal identifier app. Upload a photo of any animal and get instant species identification, breed detection, and behavior insights. Available on iOS and Android.",
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
      name: "PetMind - AI Animal Identifier & Behavior App",
      description: "Identify any animal instantly with AI. Discover species, breeds & behavior insights with PetMind.",
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
        <meta name="theme-color" content="#2B6B7F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
