"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#produits"
            className="text-sm font-medium text-gray-600 hover:text-[#0F2B46] transition-colors"
          >
            Produits
          </Link>
          <Link
            href="/#fonctionnalites"
            className="text-sm font-medium text-gray-600 hover:text-[#0F2B46] transition-colors"
          >
            Fonctionnalités
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-gray-600 hover:text-[#0F2B46] transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/#produits"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-[#00C853] hover:bg-[#00B848] rounded-full transition-colors shadow-sm"
          >
            Voir les outils
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-600"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pb-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/#produits"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 py-2"
            >
              Produits
            </Link>
            <Link
              href="/#fonctionnalites"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 py-2"
            >
              Fonctionnalités
            </Link>
            <Link
              href="/#faq"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 py-2"
            >
              FAQ
            </Link>
            <Link
              href="/#produits"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#00C853] rounded-full"
            >
              Voir les outils
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
