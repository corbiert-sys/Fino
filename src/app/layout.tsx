import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mon Fino — Finance Solo | Outils pour micro-entrepreneurs",
  description:
    "Simulateur de trésorerie, guides et outils pour piloter votre micro-entreprise avec clarté. Conçus pour les auto-entrepreneurs et freelances.",
  keywords: [
    "micro-entrepreneur",
    "auto-entrepreneur",
    "freelance",
    "trésorerie",
    "URSSAF",
    "TVA",
    "simulateur",
    "charges",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
