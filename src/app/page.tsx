import {
  singleProducts,
  bundleProduct,
  formatPrice,
} from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Prêt à l'emploi",
    desc: "Téléchargez, ouvrez, saisissez. Aucune configuration complexe requise.",
  },
  {
    icon: "🔒",
    title: "Paiement sécurisé",
    desc: "Transactions chiffrées via Stripe. Vos données bancaires ne transitent jamais par nos serveurs.",
  },
  {
    icon: "📱",
    title: "Livraison instantanée",
    desc: "Accès immédiat après achat. Lien de téléchargement personnel envoyé par email en quelques secondes.",
  },
  {
    icon: "🔄",
    title: "Taux à jour 2025/2026",
    desc: "URSSAF, TVA, VFL — tous les taux officiels intégrés et mis à jour automatiquement.",
  },
  {
    icon: "🎯",
    title: "Conçu pour vous",
    desc: "Pensé par et pour les micro-entrepreneurs, auto-entrepreneurs et freelances.",
  },
  {
    icon: "💬",
    title: "Support réactif",
    desc: "Une question ? Notre équipe vous répond sous 24 h par email, 7j/7.",
  },
];

const stats = [
  { value: "500+", label: "Entrepreneurs équipés" },
  { value: "4.9/5", label: "Note moyenne" },
  { value: "5", label: "Statuts couverts" },
  { value: "14j", label: "Garantie satisfait" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F2B46] via-[#152f4a] to-[#0a1e33] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C853] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00C853] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-[#00C853] mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#00C853] rounded-full animate-pulse" />
              Outils mis à jour 2025/2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Pilotez votre{" "}
              <span className="text-[#00C853]">micro-entreprise</span> avec
              clarté
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Simulateur de trésorerie, guides pratiques et templates — tout ce
              dont vous avez besoin pour gérer vos finances de freelance sans
              stress.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/#pack"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-[#00C853] hover:bg-[#00B848] text-white rounded-full transition-all shadow-lg shadow-[#00C853]/30 hover:shadow-xl hover:shadow-[#00C853]/40"
              >
                Voir le Pack -35%
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/#produits"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm border border-white/20"
              >
                Voir les outils à l&apos;unité
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F2B46]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle — Pack Lancement */}
      <section id="pack" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
              Le Pack Lancement
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Tout ce qu&apos;il faut pour démarrer — à prix réduit
            </p>
          </div>

          <div className="relative bg-white rounded-3xl border-2 border-[#00C853] shadow-xl shadow-[#00C853]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-[#00C853] text-white text-center text-sm font-bold py-2">
              MEILLEURE OFFRE — Économisez{" "}
              {formatPrice(
                (bundleProduct.originalPrice || 0) - bundleProduct.price
              )}
            </div>
            <div className="pt-14 p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-5xl mb-4">{bundleProduct.icon}</div>
                  <h3 className="text-2xl font-extrabold text-[#0F2B46] mb-3">
                    {bundleProduct.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {bundleProduct.description}
                  </p>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-extrabold text-[#0F2B46]">
                      {formatPrice(bundleProduct.price)}
                    </span>
                    {bundleProduct.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        {formatPrice(bundleProduct.originalPrice)}
                      </span>
                    )}
                    <span className="text-sm text-gray-400">TTC</span>
                  </div>
                  <Link
                    href={`/produits/${bundleProduct.id}`}
                    className="inline-flex items-center justify-center px-10 py-4 text-base font-bold bg-[#00C853] hover:bg-[#00B848] text-white rounded-full transition-all shadow-lg shadow-[#00C853]/25"
                  >
                    Obtenir le Pack Complet
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <ul className="space-y-3">
                    {bundleProduct.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <svg
                          className="w-5 h-5 text-[#00C853] mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Products */}
      <section id="produits" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
              Ou choisissez à l&apos;unité
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Chaque outil fonctionne indépendamment
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {singleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
              Pourquoi choisir Mon Fino ?
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Des outils pensés pour simplifier votre quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-[#0F2B46] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
