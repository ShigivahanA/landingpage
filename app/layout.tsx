import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';
import { Analytics } from "@vercel/analytics/react"
// const defaultUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Iyyappan Thirumana Mahal",
  description: "Premium wedding hall with elegant amenities and perfect ambiance.",
  metadataBase: new URL("https://sriiyyappanthirumanamandapam.vercel.app/"),
  verification: {
    google: "4nStU1bOOIPZmCd3WRMMeGpcfuFatBw3ByqO5c_TC5U", 
  },
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="application-name" content="Iyyappan Thirumana Mandapam" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Iyyappan Thirumana Mandapam" />
        <meta property="og:title" content="Sri Iyyappan Thirumana Mandapam" />
        <meta property="og:description" content="Elegant wedding hall in Vannarpettai, Tirunelveli. Perfect for weddings and receptions." />
        <meta property="og:image" content="https://sriiyyappanthirumanamandapam.vercel.app/logo.png" />
        <meta property="og:url" content="https://sriiyyappanthirumanamandapam.vercel.app" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ><LanguageProvider>
          {children}
        </LanguageProvider>
          <Toaster position="top-right" />
          <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
