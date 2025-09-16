import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackgroundPattern } from "@/components/common/BackgroundPattern";
import ClientProviders from "@/components/providers/ClientProviders";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

export const metadata: Metadata = {
  title: "Dr. Vivek Shetty - Senior Consultant Head & Neck Oncology",
  description: "Dr. Vivek Shetty is a Senior Consultant in Head & Neck Oncology at SPARSH Hospital, Bangalore. MBBS, MS General Surgery, Fellowship in Head and Neck Surgical Oncology with 9 years of experience.",
  keywords: ["Dr. Vivek Shetty", "Head Neck Oncology", "SPARSH Hospital", "Bangalore", "Surgical Oncology", "Cancer Treatment"],
  authors: [{ name: "Dr. Vivek Shetty" }],
  openGraph: {
    title: "Dr. Vivek Shetty - Senior Consultant Head & Neck Oncology",
    description: "Expert Head & Neck Oncology care at SPARSH Hospital, Bangalore. 9 years of experience in surgical oncology and reconstructive surgery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Vivek Shetty - Senior Consultant Head & Neck Oncology",
    description: "Expert Head & Neck Oncology care at SPARSH Hospital, Bangalore.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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
