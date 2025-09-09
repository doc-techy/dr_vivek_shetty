import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FeaturedVideos } from '@/components/sections/FeaturedVideos';
import { CtaSection } from '@/components/sections/CtaSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <FeaturedVideos />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}