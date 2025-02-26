import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Sahabad Solution Website",
  title: "Build Your Furniture Dreams",
  description:
    "Best Choices For Installation Furniture, Pilihan dan Solusi Jasa Pemasangan Furniture Terbaik, Cerdas & berkualitas",

  authors: {
    url: "https://sahabadsolution.web.id",
    name: "Sahabad Solution",
  },
  openGraph: {
    type: "website",
    url: "https://sahabadsolution.web.id",
    title: "Sahabad Solution",
    description:
      "Best Choices For Installation Furniture, Pilihan dan Solusi Jasa Pemasangan Furniture Terbaik, Cerdas & berkualitas",
    siteName: "Sahabad Solution Website",
    images: [
      {
        url: "https://sahabadsolution.web.id/og.png",
      },
    ],
  },
  keywords: [
    "pemasangan furniture",
    "jasa pemasangan furniture",
    "pasang lemari",
    "pasang rak",
    "jasa pasang lemari",
    "jasa pasang rak",
    "pemasangan kitchen",
    "jasa pemasangan kitchen",
    "jasa pasang furniture",
    "layanan jasa pemasangan furniture",
    "layanan pasang furniture",
    "furniture custom",
    "furniture berkualitas",
    "solusi pemasangan furniture",
    "jasa instalasi furniture",
    "furniture murah",
    "jasa furniture Indonesia",
    "Sahabad Solution",
    "Sahabad Solution Indonesia",
    "pemasangan furniture terbaik",
    "jasa ahli pemasangan furniture",
    "furniture modern",
    "desain interior",
    "jasa desain interior",
    "furniture minimalis",
    "jasa pasang kitchen set",
    "layanan pasang kitchen set",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-6SC1W1CRFS" />
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
