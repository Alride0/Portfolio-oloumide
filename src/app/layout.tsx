import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // <-- Ajout de l'import
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

// ... (garde tes constantes de polices et metadata telles quelles) ...
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Oloumidé Ridolaye ALAMOU | Développeur Web Full-Stack Bénin",
  description: "Portfolio de Oloumidé Ridolaye ALAMOU, Développeur Full-Stack spécialisé en React, Next.js, Node.js et sécurité applicative.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="mesh-gradient subtle-grid min-h-screen font-sans relative">
        <div className="blob blob-1" aria-hidden="true"></div>
        <div className="blob blob-2" aria-hidden="true"></div>
        <div className="blob blob-3" aria-hidden="true"></div>
        
        <div className="relative z-10">
          <Navbar /> {/* <-- Ajout de la Navbar ici */}
          {children}
            <ScrollToTop />
        </div>
      </body>
    </html>
  );
}