import { products, formatPrice, bundleProduct } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { FAQ } from "@/components/FAQ";
import { SizeGuide } from "@/components/SizeGuide";
import { Testimonials } from "@/components/Testimonials";
import { Newsletter } from "@/components/Newsletter";
import { LifeJacketIllustration } from "@/components/LifeJacketIllustration";
import Link from "next/link";

const features = [
  {
    title: "Flottabilite optimale",
    desc: "Mousse haute densite repartie strategiquement pour maintenir votre chien en position naturelle de nage.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Poignee de sauvetage",
    desc: "Poignee dorsale ergonomique renforcee pour recuperer facilement votre chien dans l'eau.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
  },
  {
    title: "Haute visibilite",
    desc: "Bandes reflechissantes 360 degres et couleurs vives pour reperer votre compagnon a distance, de jour comme de nuit.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: "Confort anatomique",
    desc: "Forme ergonomique qui epouse la morphologie de votre chien sans entraver ses mouvements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Sechage ultra-rapide",
    desc: "Neoprene premium et maille respirante pour un sechage 2x plus rapide que les modeles classiques.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Tailles ajustables",
    desc: "Sangles multi-points et boucles a deverrouillage rapide pour un ajustement parfait du XXS au XL.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500+", label: "Chiens proteges" },
  { value: "4.9/5", label: "Note moyenne" },
  { value: "30j", label: "Retour gratuit" },
  { value: "24h", label: "Expedition rapide" },
];

const singleProducts = products.filter((p) => p.type === "single");

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0B2545] via-[#1B4965] to-[#0B2545] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#5FA8D3] rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-[#FF6B35] mb-6 backdrop-blur-sm border border-white/10">
                <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
                Nouvelle collection 2025
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                La securite aquatique de votre{" "}
                <span className="gradient-text">compagnon</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
                Gilets de sauvetage premium concus pour proteger votre chien
                lors de toutes ses aventures au bord de l&apos;eau. Confort,
                securite, style.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#produits"
                  className="btn-coral inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-full"
                >
                  Decouvrir nos gilets
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
                  href="/#guide-tailles"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-white/10 hover:bg-white/20 text-white rounded-full transition-all backdrop-blur-sm border border-white/20"
                >
                  Guide des tailles
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-center animate-fade-in-up animation-delay-200">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FF6B35]/20 rounded-full blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  <LifeJacketIllustration
                    color="#FF6B35"
                    className="w-64 h-64 animate-float"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-white text-[#1B4965] rounded-xl px-4 py-2 shadow-xl">
                    <div className="text-xs font-medium text-gray-500">A partir de</div>
                    <div className="text-xl font-extrabold">29,90 &euro;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40 C360 80 720 0 1080 40 C1260 60 1380 50 1440 40 L1440 80 L0 80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-2 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="p-6 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1B4965]">
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

      {/* Bundle - Pack Aventure */}
      <section id="pack" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4965]">
              Le Pack Aventure Nautique
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Tout l&apos;equipement pour des sorties aquatiques en toute securite
            </p>
          </div>

          <div className="relative bg-white rounded-3xl border-2 border-[#FF6B35] shadow-xl shadow-[#FF6B35]/10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white text-center text-sm font-bold py-2">
              MEILLEURE OFFRE — Economisez{" "}
              {formatPrice(
                (bundleProduct.originalPrice || 0) - bundleProduct.price
              )}
            </div>
            <div className="pt-14 p-8 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-4">
                    <LifeJacketIllustration
                      color="#FF6B35"
                      variant="pack"
                      className="w-48 h-48"
                    />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1B4965] mb-3">
                    {bundleProduct.name}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {bundleProduct.description}
                  </p>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-extrabold text-[#1B4965]">
                      {formatPrice(bundleProduct.price)}
                    </span>
                    {bundleProduct.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">
                        {formatPrice(bundleProduct.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/produits/${bundleProduct.id}`}
                    className="btn-coral inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white rounded-full"
                  >
                    Voir le Pack Complet
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
                          className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0"
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
      <section id="produits" className="py-20 bg-[#F0F9FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4965]">
              Nos gilets de sauvetage
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              Protection et confort pour chaque aventure aquatique
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {singleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why PawlyDog */}
      <section id="pourquoi" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B4965]">
              Pourquoi choisir PawlyDog ?
            </h2>
            <p className="mt-3 text-gray-500 text-lg">
              La securite de votre chien, sans compromis sur le confort
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 text-[#FF6B35] flex items-center justify-center mb-4 group-hover:bg-[#FF6B35] group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1B4965] mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Size Guide */}
      <SizeGuide />

      {/* Dog Photo / About Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B2545] via-[#1B4965] to-[#0B2545] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-80 h-80 bg-[#FF6B35] rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-[#5FA8D3] rounded-full blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-[#FF6B35] mb-6 border border-white/10">
                Notre histoire
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Nee de la passion pour nos{" "}
                <span className="text-[#FF6B35]">compagnons</span>
              </h2>
              <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                PawlyDog est nee d&apos;une idee simple : offrir a nos chiens la
                meme qualite de protection que celle que nous exigeons pour
                nous-memes. Chaque gilet est teste, ajuste et perfectionne pour
                garantir securite et liberte de mouvement.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Aujourd&apos;hui specialises dans les gilets de sauvetage, nous
                developpons deja notre gamme d&apos;accessoires du quotidien pour
                accompagner votre chien dans toutes ses aventures.
              </p>
              <div className="mt-8 flex gap-4">
                <Link
                  href="/#produits"
                  className="btn-coral inline-flex items-center px-6 py-3 text-sm font-bold text-white rounded-full"
                >
                  Decouvrir nos produits
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#FF6B35]/20 rounded-3xl blur-2xl" />
                <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-[#1B4965] to-[#0B2545]">
                  {/* Placeholder for the user's dog photo - add to /public/images/hero-dog.jpg */}
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-[#FF6B35]/20 flex items-center justify-center mb-6">
                      <svg className="w-12 h-12 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-lg font-semibold mb-2">Notre mascotte</p>
                    <p className="text-white/50 text-sm">L&apos;inspiration derriere PawlyDog</p>
                    <div className="mt-6 flex gap-2">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">Berger Australien</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">Aventurier</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Coming Soon */}
      <section className="py-16 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1B4965]/10 rounded-full text-sm font-semibold text-[#1B4965] mb-6">
            Bientot disponible
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B4965] mb-4">
            De nouveaux accessoires arrivent
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Laisses aquatiques, harnais de randonnee, gamelles de voyage,
            serviettes microfibre... Toute une gamme d&apos;accessoires du
            quotidien pour accompagner votre chien dans chaque aventure.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Laisses aquatiques", "Harnais rando", "Gamelles voyage", "Serviettes microfibre", "Jouets flottants"].map(
              (item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#1B4965] border border-[#BEE9E8] shadow-sm"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* FAQ */}
      <FAQ />
    </>
  );
}
