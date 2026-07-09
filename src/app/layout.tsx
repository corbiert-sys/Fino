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
  title: "PawlyDog | Gilets de sauvetage pour chiens - Securite aquatique",
  description:
    "PawlyDog - Gilets de sauvetage premium pour chiens. Protegez votre compagnon lors de toutes ses aventures aquatiques avec nos equipements certifies et confortables.",
  keywords: [
    "gilet de sauvetage chien",
    "gilet sauvetage canin",
    "securite aquatique chien",
    "accessoires chien eau",
    "gilet flottaison chien",
    "PawlyDog",
    "equipement nautique chien",
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
