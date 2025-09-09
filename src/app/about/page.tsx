import { AboutSection } from '@/components/sections/AboutSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export const metadata = {
  title: 'About Dr. Vivek Shetty - Senior Consultant Head & Neck Oncology',
  description: 'Learn about Dr. Vivek Shetty\'s qualifications, experience, and expertise in Head & Neck Oncology at SPARSH Hospital, Bangalore.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
}
