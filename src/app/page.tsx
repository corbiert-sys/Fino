import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Prêt à l'emploi",
    desc: "Téléchargez, ouvrez, saisissez. Aucune configuration complexe.",
  },
  {
    icon: "🔒",
    title: "Paiement sécurisé",
    desc: "Transactions chiffrées via Stripe. Vos données sont protégées.",
  },
  {
    icon: "📱",
    title: "Livraison instantanée",
    desc: "Accès immédiat après achat. Lien de téléchargement par email.",
  },
  {
    icon: "🔄",
    title: "Taux à jour 2025/2026",
    desc: "URSSAF, TVA, VFL — tous les taux officiels intégrés.",
  },
  {
    icon: "🎯",
    title: "Conçu pour vous",
    desc: "Pensé par et pour les micro-entrepreneurs et freelances.",
  },
  {
    icon: "💬",
    title: "Support réactif",
    desc: "Une question ? Notre équipe vous répond sous 24h.",
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
                href="/#produits"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold bg-[#00C853] hover:bg-[#00B848] text-white rounded-full transition-all shadow-lg shadow-[#00C853]/30 hover:shadow-xl hover:shadow-[#00C853]/40"
              >
                Découvrir les outils
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
                href="/#fonctionnalites"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm border border-white/20"
              >
                En savoir plus
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

      {/* Products */}
      <section id="produits" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
              Nos outils
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Choisissez l&apos;outil qui correspond à votre besoin
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="fonctionnalites" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
              Pourquoi choisir Fino ?
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

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-[#0F2B46] to-[#1a3d5c] rounded-3xl p-10 sm:p-16 text-white">
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Prêt à reprendre le contrôle de vos finances ?
            </h2>
            <p className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
              Rejoignez les entrepreneurs qui pilotent déjà leur activité avec
              les outils Fino.
            </p>
            <Link
              href="/#produits"
              className="inline-flex items-center justify-center mt-8 px-10 py-4 text-base font-bold bg-[#00C853] hover:bg-[#00B848] text-white rounded-full transition-all shadow-lg shadow-[#00C853]/30"
            >
              Commencer maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
