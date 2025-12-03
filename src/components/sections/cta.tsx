import React from 'react';
import { AppStoreButton, GooglePlayButton } from '../ui/app-store-buttons';

const CtaSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      text: "PetMind helped me understand why my cat was acting strange. Amazing insights!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike R.",
      text: "Finally know what my dog's behavior means. This app is incredible!",
      rating: 5,
    },
    {
      id: 3,
      name: "Lisa K.",
      text: "The AI analysis is spot on. My pets are happier now!",
      rating: 5,
    },
    {
      id: 4,
      name: "Tom B.",
      text: "Best pet app ever! Understanding my pets has never been easier.",
      rating: 5,
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="text-center py-8 sm:py-12 px-4">
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold" style={{ color: 'var(--color-accent-coral)' }}>Ready to understand your pets better?</h2>
      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
        Join thousands of pet owners understanding their pets better
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <AppStoreButton href="#" />
        <GooglePlayButton href="#" />
      </div>
      
      {/* Mobile Testimonials - Only visible on mobile/tablet */}
      <div className="xl:hidden mt-12 px-4">
        <h3 className="text-[20px] sm:text-[22px] font-semibold mb-8" style={{ color: 'var(--color-accent-coral)' }}>What our users say</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#15483f] rounded-lg p-4 shadow-lg border border-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="font-semibold text-sm text-white">{testimonial.name}</span>
              </div>
              <div className="flex mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-sm text-white leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;