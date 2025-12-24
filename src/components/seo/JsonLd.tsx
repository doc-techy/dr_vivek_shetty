import { headers } from 'next/headers';

export default function JsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Dr. Vivek Shetty',
    image: 'https://www.drvivekshetty.com/images/dr_vivek_profile_pic.jpg',
    description: 'Senior Consultant Head & Neck Onco Surgeon with over 11 years of experience in oral cancer, thyroid, and reconstructive surgery.',
    url: 'https://www.drvivekshetty.com',
    telephone: '+919886432371',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'SPARSH Hospital',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560001',
        addressCountry: 'IN'
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Docube, Koramangala',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        addressCountry: 'IN'
      }
    ],
    medicalSpecialty: ['Head and Neck Surgery', 'Surgical Oncology', 'Oncology'],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '18:00',
        closes: '20:00'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/in/drvivekshetty', // Add real links if available
      'https://www.facebook.com/drvivekshetty',
      'https://www.instagram.com/drvivekshetty'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

