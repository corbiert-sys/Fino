import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#0F2B46] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo className="h-8 w-auto [&_rect:first-child]:fill-white [&_text]:fill-white" />
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-md">
              Mon Fino — Finance Solo. Les outils essentiels pour piloter votre
              micro-entreprise avec clarté et sérénité.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
              Produits
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/produits/pack-lancement"
                  className="text-sm text-[#00C853] hover:text-white transition-colors font-semibold"
                >
                  Pack Lancement -15%
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/simulateur-tresorerie"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Simulateur de Trésorerie
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/kit-tva-2026"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Kit TVA 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/espace-notion-precompta"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Espace Notion
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
                  Mentions légales
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
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Mon Fino — Finance Solo. Tous droits
            réservés.
          </p>
          <p className="text-xs text-gray-500">
            Données à titre indicatif — Consultez votre expert-comptable
          </p>
        </div>
      </div>
    </footer>
  );
}
