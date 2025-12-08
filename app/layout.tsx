import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theforgecodes.org'),
  title: {
    default: "The Forge Codes - Free Roblox Rerolls & Rewards 2025",
    template: "%s | The Forge Codes"
  },
  description: "Get the latest The Forge codes for free race rerolls, luck totems, and exclusive rewards. Updated daily with working codes for December 2025.",
  keywords: ["the forge codes", "roblox the forge", "forge codes", "the forge roblox codes", "the forge race reroll", "the forge free rewards"],
  authors: [{ name: "The Forge Codes Team" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://theforgecodes.org/',
    siteName: 'The Forge Codes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Forge Codes - Power. Craftsmanship. Strength.'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Forge Codes - Free Roblox Rewards',
    description: 'Get the latest The Forge codes for free race rerolls and exclusive rewards',
    images: ['/og-image.png'],
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
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0TG1GD3WX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N0TG1GD3WX');
`,
          }}
        />
        <link rel="canonical" href="https://theforgecodes.org/" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-100`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
