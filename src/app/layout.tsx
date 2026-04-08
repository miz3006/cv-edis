import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";
import LoadingScreen from "./components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  title: "Edis Mizić — Developer",
  description:
    "CS student from Ljubljana building web and mobile apps. React Native, Next.js, Supabase, TypeScript.",
  keywords: ["Edis Mizić", "developer", "portfolio", "React Native", "Next.js", "Ljubljana"],
  authors: [{ name: "Edis Mizić" }],
  openGraph: {
    title: "Edis Mizić — Developer",
    description:
      "CS student from Ljubljana building web and mobile apps. React Native, Next.js, Supabase, TypeScript.",
    url: "https://edismizic.com",
    siteName: "Edis Mizić",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Edis Mizić — Developer",
    description:
      "CS student from Ljubljana building web and mobile apps. React Native, Next.js, Supabase, TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <LoadingScreen />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
