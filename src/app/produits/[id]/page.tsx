import { notFound } from "next/navigation";
import { products, getProduct, formatPrice, sizeChart } from "@/lib/products";
import type { Metadata } from "next";
import { BuyButton } from "./BuyButton";
import { LifeJacketIllustration } from "@/components/LifeJacketIllustration";
import Link from "next/link";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: `${product.name} — PawlyDog`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const isBundle = product.type === "bundle";

  return (
    <>
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            href="/#produits"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1B4965] mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Retour aux produits
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: product visual */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] rounded-3xl flex items-center justify-center border border-[#BEE9E8]/50">
                <div className="text-center">
                  <LifeJacketIllustration
                    color={product.color}
                    variant={isBundle ? "pack" : "jacket"}
                    className="w-64 h-64 mx-auto"
                  />
                  {isBundle && (
                    <div className="mt-4 inline-block px-4 py-1.5 bg-[#FF6B35]/10 text-[#FF6B35] text-xs font-bold rounded-full">
                      3 articles inclus
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: product details */}
            <div className="flex flex-col justify-center">
              {product.badge && (
                <span className="inline-block w-fit px-3 py-1 text-xs font-bold rounded-full bg-[#FF6B35] text-white mb-4">
                  {product.badge}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4965] leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                {product.longDescription}
              </p>

              {/* Size selector */}
              {product.availableSizes.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-[#1B4965] mb-2">
                    Tailles disponibles
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {product.availableSizes.map((size) => (
                      <span
                        key={size}
                        className="px-4 py-2 text-sm font-medium bg-[#F0F9FF] text-[#1B4965] rounded-lg border border-[#BEE9E8] hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors cursor-pointer"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/#guide-tailles"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-[#5FA8D3] hover:text-[#1B4965] transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Voir le guide des tailles
                  </Link>
                </div>
              )}

              <div className="mt-8 flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl font-extrabold text-[#1B4965]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through ml-2">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <BuyButton
                productId={product.id}
                productName={product.shortName}
              />

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Paiement securise
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Livraison 3-5 jours
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Retour gratuit 30 jours
                </span>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl font-extrabold text-[#1B4965] mb-8">
              {isBundle
                ? "Tout ce qui est inclus dans le pack"
                : "Caracteristiques"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 p-4 bg-[#F0F9FF] rounded-xl"
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
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini size chart */}
          {!isBundle && (
            <div className="mt-16">
              <h2 className="text-2xl font-extrabold text-[#1B4965] mb-6">
                Guide des tailles
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[#1B4965] text-white">
                        <th className="px-6 py-3 text-left font-semibold">Taille</th>
                        <th className="px-6 py-3 text-left font-semibold">Poids</th>
                        <th className="px-6 py-3 text-left font-semibold">Poitrine</th>
                        <th className="px-6 py-3 text-left font-semibold">Cou</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeChart
                        .filter((row) =>
                          product.availableSizes.includes(row.size)
                        )
                        .map((row, i) => (
                          <tr
                            key={row.size}
                            className={`border-t border-gray-100 ${
                              i % 2 === 0 ? "bg-white" : "bg-[#F0F9FF]/50"
                            }`}
                          >
                            <td className="px-6 py-3 font-bold text-[#FF6B35]">
                              {row.size}
                            </td>
                            <td className="px-6 py-3 text-gray-700">{row.weight}</td>
                            <td className="px-6 py-3 text-gray-700">{row.chest}</td>
                            <td className="px-6 py-3 text-gray-700">{row.neck}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
