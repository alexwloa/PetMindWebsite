import React from 'react';
import { AppStoreButton, GooglePlayButton } from '../ui/app-store-buttons';

const CtaSection = () => {
  return (
    <section className="text-center py-8 sm:py-12 px-4">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold">Ready to understand your pets better?</h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
        Join thousands of pet owners understanding their pets better
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <AppStoreButton href="#" />
        <GooglePlayButton href="#" />
      </div>
    </section>
  );
};

export default CtaSection;