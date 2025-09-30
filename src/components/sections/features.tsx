import React from 'react';

const featuresData = [
  {
    icon: "📸",
    title: "Photo Analysis",
    description: "Upload photos or videos of your pets and get instant behavior insights",
  },
  {
    icon: "💬",
    title: "Expert Chat",
    description: "Get personalized advice about your pet's behavior and needs",
  },
  {
    icon: "📊",
    title: "Pet Profiles",
    description: "Create profiles for your pets and track their behavior over time",
  },
];

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl border border-white/20 bg-card py-8 sm:py-12 px-6 sm:px-8 text-center shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <h3 className="mb-4 sm:mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-tight" style={{ color: 'var(--color-accent-coral)' }}>{title}</h3>
      <p className="text-base sm:text-lg text-white leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-[390px] sm:max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 sm:mb-16 text-center text-[28px] sm:text-[32px] md:text-[36px] font-semibold" style={{ color: 'var(--color-accent-coral)' }}>
          How PetMind Works
        </h2>
        <div className="mx-auto grid max-w-[390px] sm:max-w-5xl grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div key={index} className="h-full">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;