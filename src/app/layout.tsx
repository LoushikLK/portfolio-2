import { ModernMobileNav, ModernNavbar } from "@/components/header";
import { Footer } from "@/components/section";

import "./globals.css";

import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://loushik.dev"),
  title: {
    default: "Loushik | Full Stack Developer & Software Engineer",
    template: "%s | Loushik",
  },
  description:
    "Loushik is a Full Stack developer and Software Engineer from India. Expertise in Golang, React, Node.js, and Distributed Systems. Building high-performance digital experiences.",
  keywords: [
    "Loushik",
    "Loushik Giri",
    "Loushik Kumar Giri",
    "Loushik Dev",
    "Full Stack Developer",
    "Software Engineer",
    "Solution Architect",
    "Golang Developer",
    "React Developer",
    "Node.js Developer",
    "India",
    "Portfolio",
  ],
  authors: [{ name: "Loushik", url: "https://loushik.dev" }],
  creator: "Loushik",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://loushik.dev",
    title: "Loushik | Full Stack Developer & Software Engineer",
    description:
      "Full Stack developer building high-performance digital experiences. Specializing in Golang, React, and Node.js.",
    siteName: "Loushik's Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Loushik - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loushik | Full Stack Developer & Software Engineer",
    description:
      "Full Stack developer building high-performance digital experiences. Specializing in Golang, React, and Node.js.",
    images: ["/profile.webp"],
    creator: "@LoushikLK",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#051009] min-h-screen text-white w-full overflow-hidden overflow-y-auto relative ">
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Loushik",
              url: "https://loushik.dev",
              image: "https://loushik.dev/profile.webp",
              sameAs: [
                "https://github.com/LoushikLK",
                "https://linkedin.com/in/loushik",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description:
                "Loushik is a Full Stack developer and Software Engineer from India specializing in Golang, React, and Node.js.",
            }),
          }}
        />
        <ModernMobileNav />
        <ModernNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
