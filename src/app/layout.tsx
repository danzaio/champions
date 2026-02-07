import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TerminalLoader } from "@/components/ui/terminal-loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "DanZ-AIO | Ultimate Champion Scripts",
  description: "High-performance champion scripts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-black text-white antialiased selection:bg-gold-500/30`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 opacity-20 bg-grid-white" />
          <StarsBackground />
          <ShootingStars />
        </div>
        <LanguageProvider>
          <SmoothScrollProvider>
            <TerminalLoader />
            <div className="relative z-10">
              {children}
            </div>
          </SmoothScrollProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
