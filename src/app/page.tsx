import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CtaSection } from '@/components/sections/CtaSection';
import { VideoSection } from '@/components/sections/VideoSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="videos">
        <VideoSection />
      </section>
      <section id="contact">
        <CtaSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
    </div>
  );
}