import { ServicesSection } from '@/components/sections/ServicesSection';
import { CtaSection } from '@/components/sections/CtaSection';

export const metadata = {
  title: 'Services - Dr. Vivek Shetty Head & Neck Oncology',
  description: 'Comprehensive Head & Neck Oncology services including surgical oncology, reconstructive surgery, and cancer treatment at SPARSH Hospital.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesSection />
      <CtaSection />
    </div>
  );
}
