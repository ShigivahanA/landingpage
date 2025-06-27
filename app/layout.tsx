import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { LanguageProvider } from '@/context/LanguageContext';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
// const defaultUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Iyyappan Thirumana Mahal",
  description: "Premium wedding hall with elegant amenities and perfect ambiance.",
  metadataBase: new URL("https://sriiyyappanthirumanamandapam.vercel.app/"),
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "4nStU1bOOIPZmCd3WRMMeGpcfuFatBw3ByqO5c_TC5U",
  },
  openGraph: {
    title: "Sri Iyyappan Thirumana Mandapam",
    description: "Elegant wedding hall in Vannarpettai, Tirunelveli. Perfect for weddings and receptions.",
    url: "https://sriiyyappanthirumanamandapam.vercel.app",
    siteName: "Iyyappan Thirumana Mandapam",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sri Iyyappan Thirumana Mandapam Logo",
      },
    ],
    type: "website",
  },
  themeColor: "#ffffff",
  applicationName: "Iyyappan Thirumana Mandapam",
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
          <SpeedInsights/>
        </ThemeProvider>
      </body>
    </html>
  );
}
