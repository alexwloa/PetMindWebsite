import React from 'react';

const featuresData = [
  {
    title: "Snap & Identify",
    description: "Take a photo of any animal and instantly know its species, breed, and key traits.",
  },
  {
    title: "Behavior Insights",
    description: "Understand what your animal is feeling through AI-powered body language analysis.",
  },
  {
    title: "Your Animal Diary",
    description: "Save your analyses, build profiles, and track your animal's behavior over time.",
  },
];

const FeatureCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  return (
    <div className="flex h-full flex-col rounded-xl sm:rounded-2xl border border-white/20 bg-card py-6 sm:py-8 px-5 sm:px-7 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <span className="text-sm font-medium text-white/30 mb-4 tracking-widest uppercase">Step {index + 1}</span>
      <h3 className="mb-3 text-[22px] sm:text-[24px] font-bold leading-tight text-white">{title}</h3>
      <p className="text-[15px] sm:text-base text-white/70 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-background py-8 sm:py-12">
      <div className="mx-auto max-w-[390px] sm:max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 sm:mb-10 text-center text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#8bab8b]">
          How PetMind Works
        </h2>
        <div className="mx-auto grid max-w-[390px] sm:max-w-5xl grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
