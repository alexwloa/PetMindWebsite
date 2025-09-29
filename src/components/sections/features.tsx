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
    <div className="flex h-full flex-col items-center rounded-xl sm:rounded-2xl border border-border bg-card py-8 sm:py-12 px-6 sm:px-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="mb-6 sm:mb-8 text-4xl sm:text-5xl">{icon}</div>
      <h3 className="mb-4 sm:mb-6 text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-tight text-primary">{title}</h3>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-[390px] sm:max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 sm:mb-16 text-center text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-primary">
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