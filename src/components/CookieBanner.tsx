"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    window.dispatchEvent(new Event("cookie-consent-update"));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              We use cookies to improve your experience. By using our website you agree to our{" "}
              <Link href="/privacy" className="underline text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-200">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Necessary only
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
