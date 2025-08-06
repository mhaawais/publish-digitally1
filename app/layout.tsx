import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModalProvider } from '@/app/context/ModalContext'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const faviconVersion = "v1.2"; // Declare it here

export const metadata: Metadata = {
  title: {
    template: "%s | Publish Digitally",
    default: "Publish Digitally | Book publishing services",
  },
  description: "Publish Digitally offers end-to-end publishing services for modern authors—from ghostwriting and editing to design, websites, audiobooks, and promotion. We turn your story into a bestseller with precision, creativity, and legacy-driven excellence.",
   keywords: [
    'Publish Digitally',
    'Book publishing services',
    'Ghostwriting agency',
    'Professional book editing',
    'Custom book cover design',
    'Author website design',
    'Audiobook production',
    'Book video trailers',
    'Illustration services for books',
    'Book marketing and promotions',
    'Self-publishing support',
    'Amazon book publishing',
    'Book writing help',
    'Children’s book illustration',
    'SEO book content',
    'Author brand building',
    'Turn manuscript into bestseller',
  ],
  icons: {
    icon: [
      // `/assets/logo/Author-Logo.png?v=${faviconVersion}`,
      // "/favicon.ico",
      { url: "/assets/logo/Author-Logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
        {children}
        </ModalProvider>
      </body>
    </html>
  );
}
