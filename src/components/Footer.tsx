import Link from "next/link";
import { LogoWhite } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#0B2545] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <LogoWhite className="h-9 w-auto" />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-md">
              PawlyDog - La securite aquatique de votre compagnon. Gilets de
              sauvetage premium concus pour proteger votre chien lors de toutes
              ses aventures au bord de l&apos;eau.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/pawlydog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors flex items-center justify-center"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@pawlydog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6B35] transition-colors flex items-center justify-center"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.11V9a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.75a8.18 8.18 0 004.76 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Nos produits
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/produits/aquapaw-pro"
                  className="text-sm text-[#FF6B35] hover:text-white transition-colors font-semibold"
                >
                  AquaPaw Pro
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/aquapaw-classic"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  AquaPaw Classic
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/aquapaw-puppy"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  AquaPaw Puppy
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/pack-aventure"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Pack Aventure -15%
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Informations
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/#guide-tailles"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Guide des tailles
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Mentions legales
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  CGV
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@pawlydog.com"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  contact@pawlydog.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} PawlyDog. Tous droits reserves.
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Paiement securise
            </span>
            <span>|</span>
            <span>Livraison France & Europe</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
