import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundPattern } from "@/components/common/BackgroundPattern";
import ClientProviders from "@/components/providers/ClientProviders";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Dr. Vivek Shetty | Head & Neck Surgical Oncologist Bangalore",
    template: "%s | Dr. Vivek Shetty"
  },
  description: "Dr. Vivek Shetty is a leading Head & Neck Onco Surgeon in Bangalore with 11+ years of experience. Expert in oral cancer, thyroid, and reconstructive surgery at SPARSH Hospital.",
  keywords: ["Dr. Vivek Shetty", "Head and Neck Surgeon", "Oncologist Bangalore", "Cancer Specialist", "Oral Cancer Surgery", "Thyroid Surgeon", "SPARSH Hospital"],
  authors: [{ name: "Dr. Vivek Shetty" }],
  creator: "Dr. Vivek Shetty",
  publisher: "Dr. Vivek Shetty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.drvivekshetty.com'),
  alternates: {
    canonical: '/',
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ]
  },
  openGraph: {
    title: "Dr. Vivek Shetty | Head & Neck Surgical Oncologist",
    description: "Expert cancer care by Dr. Vivek Shetty. Specializing in Head & Neck Oncology, oral cancer, and reconstructive surgery at SPARSH Hospital, Bangalore.",
    url: 'https://www.drvivekshetty.com',
    siteName: 'Dr. Vivek Shetty',
    images: [
      {
        url: '/images/dr_vivek_profile_pic.jpg', // Ensure this image is high quality
        width: 800,
        height: 600,
        alt: 'Dr. Vivek Shetty',
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vivek Shetty - Senior Oncologist",
    description: "Expert Head & Neck Oncology care in Bangalore by Dr. Vivek Shetty.",
    images: ['/images/dr_vivek_profile_pic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // User needs to replace this
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Dr. Vivek Shetty" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-x-hidden" style={{ fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif' }}>
        <BackgroundPattern />
        
        <div className="relative z-10">
          <ClientProviders>
            <ConditionalLayout>
              {children}
            </ConditionalLayout>
          </ClientProviders>
        </div>
      </body>
    </html>
  );
}
