"use client";
import React, { useState } from 'react';

const AppShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with first phone active

  const phones = [
    { id: 0, title: "PetMind", subtitle: "App Screenshot 1", image: "/main1.png" },
    { id: 1, title: "PetMind", subtitle: "App Screenshot 2", image: "/pet1.png" },
    { id: 2, title: "PetMind", subtitle: "App Screenshot 3", image: "/analyse1.png" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      text: "PetMind helped me understand why my cat was acting strange. Amazing insights!",
      rating: 5,
      position: "top-left"
    },
    {
      id: 2,
      name: "Mike R.",
      text: "Finally know what my dog's behavior means. This app is incredible!",
      rating: 5,
      position: "top-right"
    },
    {
      id: 3,
      name: "Lisa K.",
      text: "The AI analysis is spot on. My animals are happier now!",
      rating: 5,
      position: "bottom-left"
    },
    {
      id: 4,
      name: "Tom B.",
      text: "Best animal app ever! Understanding my animals has never been easier.",
      rating: 5,
      position: "bottom-right"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  const getTestimonialPosition = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'absolute top-[-180px] left-[-450px] w-[240px]';
      case 'top-right':
        return 'absolute top-[-160px] right-[-480px] w-[240px]';
      case 'bottom-left':
        return 'absolute bottom-[200px] left-[-420px] w-[240px]';
      case 'bottom-right':
        return 'absolute bottom-[180px] right-[-460px] w-[240px]';
      default:
        return '';
    }
  };

  return (
    <main className="flex justify-center items-center mt-6 sm:mt-8 mb-12 sm:mb-20 px-4">
      <div className="relative w-[240px] sm:w-[280px] h-[480px] sm:h-[580px]">
        {/* Testimonials - Only visible on large screens */}
        <div className="hidden xl:block">
          {testimonials.map((testimonial) => (
             <div
               key={testimonial.id}
               className={`${getTestimonialPosition(testimonial.position)} bg-card rounded-lg p-6 shadow-lg border border-white/20 hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer`}
             >
               <div className="flex items-center mb-3">
                 <div className="w-10 h-10 bg-[#4A6B4A] rounded-full flex items-center justify-center text-white font-bold text-base mr-3">
                   {testimonial.name.charAt(0)}
                 </div>
                 <span className="font-semibold text-base text-white">{testimonial.name}</span>
               </div>
               <div className="flex mb-3">
                 {renderStars(testimonial.rating)}
               </div>
               <p className="text-base text-white leading-relaxed">
                 {testimonial.text}
               </p>
             </div>
          ))}
        </div>

        {/* Phone Carousel */}
        {phones.map((phone, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + phones.length) % phones.length;
          const isNext = index === (activeIndex + 1) % phones.length;
          
          let position = '';
          if (isActive) {
            position = 'z-10 scale-100'; // Front center
          } else if (isPrev) {
            position = '-translate-x-32 sm:-translate-x-40 -translate-y-2 scale-75 sm:scale-80 z-0'; // Left back
          } else if (isNext) {
            position = 'translate-x-32 sm:translate-x-40 -translate-y-2 scale-75 sm:scale-80 z-0'; // Right back
          } else {
            position = 'opacity-0 scale-0'; // Hidden
          }
          
          return (
            <div
              key={phone.id}
              className={`absolute top-0 w-[240px] sm:w-[280px] h-[480px] sm:h-[580px] p-[8px] sm:p-[10px] bg-[#222222] rounded-[32px] sm:rounded-[40px] shadow-[0_15px_40px_0_rgba(0,0,0,0.15)] sm:shadow-[0_20px_50px_0_rgba(0,0,0,0.2)] transform transition-all duration-500 cursor-pointer ${position}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* Screen */}
              <div className="w-full h-full bg-black rounded-[24px] sm:rounded-[30px] overflow-hidden">
                <img
                  src={phone.image}
                  alt={phone.subtitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
        
        {/* Dots Indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-40px] flex gap-2 z-20">
          {phones.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AppShowcase;