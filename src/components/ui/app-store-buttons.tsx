"use client";
import React from 'react';
import Image from 'next/image';

interface AppStoreButtonProps {
  href: string;
  className?: string;
}

// Google Analytics Event Tracking
const trackDownloadClick = (platform: 'ios' | 'android') => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'download_click', {
      platform: platform,
      button_text: platform === 'ios' ? 'App Store' : 'Google Play',
    });
  }
};

const AppStoreButton = ({ href, className = "" }: AppStoreButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDownloadClick('ios')}
      className={`inline-flex items-center bg-black text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-800 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 active:outline-none no-underline hover:no-underline text-sm sm:text-base shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${className}`}
      style={{
        minWidth: '180px',
        height: '56px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
        borderRadius: '12px',
        outline: 'none',
        border: 'none'
      }}
    >
      <div className="flex items-center w-full">
        {/* Apple Logo - Local SVG */}
        <div className="mr-4 sm:mr-5 flex-shrink-0">
          <Image
            src="/icons8-apple.svg"
            alt="Apple"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
        </div>
        
        {/* Text */}
        <div className="text-left flex-grow">
          <div className="text-sm sm:text-base leading-tight font-normal text-white">Download on the</div>
          <div className="text-lg sm:text-xl font-medium leading-tight -mt-0.5">App Store</div>
        </div>
      </div>
    </a>
  );
};

const GooglePlayButton = ({ href, className = "" }: AppStoreButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackDownloadClick('android')}
      className={`inline-flex items-center bg-black text-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 hover:bg-gray-800 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 active:outline-none no-underline hover:no-underline text-sm sm:text-base shadow-[0_4px_12px_rgba(0,0,0,0.2)] ${className}`}
      style={{
        minWidth: '180px',
        height: '56px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
        borderRadius: '12px',
        outline: 'none',
        border: 'none'
      }}
    >
      <div className="flex items-center w-full">
        {/* Google Play Logo - Local SVG */}
        <div className="mr-4 sm:mr-5 flex-shrink-0">
          <Image
            src="/google-play-svgrepo-com.svg"
            alt="Google Play"
            width={28}
            height={28}
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
        </div>
        
        {/* Text */}
        <div className="text-left flex-grow">
          <div className="text-sm sm:text-base leading-tight font-normal text-white">GET IT ON</div>
          <div className="text-lg sm:text-xl font-medium leading-tight -mt-0.5">Google Play</div>
        </div>
      </div>
    </a>
  );
};

export { AppStoreButton, GooglePlayButton };