import React from 'react';
import { AppStoreButton, GooglePlayButton } from '../ui/app-store-buttons';

const CtaSection = () => {
  return (
    <section className="text-center py-8">
      <h2>Ready to understand your pets better?</h2>
      <p className="mt-4">
        Join thousands of pet owners understanding their pets better
      </p>
      <div className="mt-8 flex justify-center items-center gap-4">
        <AppStoreButton href="#" />
        <GooglePlayButton href="#" />
      </div>
    </section>
  );
};

export default CtaSection;