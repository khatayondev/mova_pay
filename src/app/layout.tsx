import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mova | Money Moves Better Together",
  description:
    "The connected payment and collective finance platform built on top of MTN MoMo. Replace WhatsApp chaos, spreadsheets, and screenshots with real-time social payment rails.",
  keywords: [
    "MTN MoMo",
    "Mobile Money",
    "Social Payments",
    "Split Bills",
    "Crowdfunding Africa",
    "Group Finance",
    "Fintech",
    "Mova",
  ],
  authors: [{ name: "Mova Payments" }],
  creator: "Mova",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://mova.app",
    title: "Mova | Money Moves Better Together",
    description:
      "MoMo is the engine. Mova is the connected social layer. Seamless bill splitting, campaign funding, and instant group settlements.",
    siteName: "Mova",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Mova — Connected Mobile Money Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mova | Money Moves Better Together",
    description:
      "Replace payment chaos with direct MTN MoMo social rails. Split, fund, and settle together.",
    creator: "@movapay",
    images: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFD200",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} dark`}>
      <body className="min-h-screen bg-obsidian text-foreground font-sans antialiased selection:bg-brand selection:text-obsidian-950">
        {children}
      </body>
    </html>
  );
}
