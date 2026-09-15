import type { Metadata } from "next";
import { Barlow, Epilogue, Instrument_Sans, Inter } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-epilogue",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: {
    default: "Joe's Listening Room",
    template: "%s · Joe's Listening Room",
  },
  description:
    "60 Records · 60 Years · 1966 — 2026. A curated listening room of albums spanning a life in music.",
  openGraph: {
    title: "Joe's Listening Room",
    description: "60 Records · 60 Years · 1966 — 2026",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${barlow.variable} ${inter.variable} ${instrumentSans.variable}`}
    >
      <body className={`${epilogue.className} antialiased`}>{children}</body>
    </html>
  );
}
