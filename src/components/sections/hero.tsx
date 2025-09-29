import React from 'react';
import { AppStoreButton, GooglePlayButton } from '../ui/app-store-buttons';

const Hero = () => {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 pt-0 md:pt-1 pb-6 text-center">
      {/* Headline */}
      <h1 className="text-[56px] font-bold leading-[1.1] text-text-primary">
        Understand your pets
      </h1>
      
      <h1 className="-mt-4 mb-4 text-[56px] font-bold leading-[1.1] text-accent-coral">
        better than ever
      </h1>
      
      {/* CTA buttons */}
      <div className="mt-8 -mb-8 flex items-center justify-center gap-4">
        <AppStoreButton href="#" />
        <GooglePlayButton href="#" />
      </div>
    </header>
  );
};

export default Hero;