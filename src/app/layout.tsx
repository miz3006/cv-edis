import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edismizic.com"),
  title: "Edis Mizić — Developer",
  description:
    "CS student from Ljubljana building web and mobile apps. Creator of WhereAt. React Native, Next.js, Supabase, TypeScript.",
  keywords: ["Edis Mizić", "developer", "portfolio", "React Native", "Next.js", "Ljubljana"],
  authors: [{ name: "Edis Mizić" }],
  openGraph: {
    title: "Edis Mizić — Developer",
    description:
      "CS student from Ljubljana building web and mobile apps. Creator of WhereAt. React Native, Next.js, Supabase, TypeScript.",
    url: "https://edismizic.com",
    siteName: "Edis Mizić",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Edis Mizić — building web & mobile apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edis Mizić — Developer",
    description:
      "CS student from Ljubljana building web and mobile apps. Creator of WhereAt. React Native, Next.js, Supabase, TypeScript.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Edis Mizić",
  url: "https://edismizic.com",
  jobTitle: "Web & Mobile Developer",
  address: { "@type": "PostalAddress", addressLocality: "Ljubljana", addressCountry: "SI" },
  email: "mailto:edismizic12@gmail.com",
  sameAs: [
    "https://github.com/miz3006",
    "https://www.linkedin.com/in/edismizic/",
    "https://apps.apple.com/si/app/whereat-spin-go/id6776366819",
  ],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Ljubljana, Faculty of Computer and Information Science",
  },
  knowsAbout: ["React Native", "Next.js", "TypeScript", "Supabase", "Python", "SQL"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LoadingScreen />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
