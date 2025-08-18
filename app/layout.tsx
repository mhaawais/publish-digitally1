import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ModalProvider } from "@/app/context/ModalContext";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
  description:
    "Publish Digitally offers end-to-end publishing services for modern authors—from ghostwriting and editing to design, websites, audiobooks, and promotion. We turn your story into a bestseller with precision, creativity, and legacy-driven excellence.",
  keywords: [
    "Publish Digitally",
    "Book publishing services",
    "Ghostwriting agency",
    "Professional book editing",
    "Custom book cover design",
    "Author website design",
    "Audiobook production",
    "Book video trailers",
    "Illustration services for books",
    "Book marketing and promotions",
    "Self-publishing support",
    "Amazon book publishing",
    "Book writing help",
    "Children’s book illustration",
    "SEO book content",
    "Author brand building",
    "Turn manuscript into bestseller",
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
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes scale-in {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
            }
            50% {
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
            }
          }
          
          @keyframes typewriter {
            from { width: 0; }
            to { width: 100%; }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 3s ease-in-out infinite 1.5s;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
          }
          
          .animate-slide-in-left {
            animation: slide-in-left 1s ease-out forwards;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 1s ease-out forwards 0.3s;
          }
          
          .animate-scale-in {
            animation: scale-in 0.6s ease-out forwards 0.5s;
            opacity: 0;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
          
          .animate-fade-in {
            animation: fade-in 0.5s ease-in-out forwards;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .animate-typewriter {
            animation: typewriter 2s steps(40) forwards;
            overflow: hidden;
            white-space: nowrap;
            border-right: 2px solid;
          }
          
          .animate-slide-up {
            animation: slide-up 0.6s ease-out forwards;
          }
          
          .hover-lift:hover {
            transform: translateY(-8px);
            transition: transform 0.3s ease;
          }
          
          .hover-glow:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            transition: box-shadow 0.3s ease;
          }
          
          .group:hover .group-hover-scale {
            transform: scale(1.05);
            transition: transform 0.3s ease;
          }
          
          .stagger-animation {
            animation-delay: calc(var(--stagger) * 0.1s);
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ModalProvider>
          <Header />
            <div className="h-[72px]" aria-hidden />
            {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
