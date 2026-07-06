import { notFound } from "next/navigation";
import { products, getProduct, formatPrice } from "@/lib/products";
import type { Metadata } from "next";
import { BuyButton } from "./BuyButton";
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
    title: `${product.name} — Fino`,
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

  const isSubscription = product.type === "subscription";
  const isBundle = product.type === "bundle";

  return (
    <>
      <section className="py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Link
            href="/#produits"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0F2B46] mb-8 transition-colors"
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
              <div className="w-full max-w-md aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl flex items-center justify-center border border-gray-200">
                <div className="text-center">
                  <div className="text-8xl mb-4">{product.icon}</div>
                  <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                    {product.shortName}
                  </div>
                  {isBundle && (
                    <div className="mt-4 inline-block px-4 py-1.5 bg-[#00C853]/10 text-[#00C853] text-xs font-bold rounded-full">
                      4 outils inclus
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: product details */}
            <div className="flex flex-col justify-center">
              {product.badge && (
                <span className="inline-block w-fit px-3 py-1 text-xs font-bold rounded-full bg-[#00C853] text-white mb-4">
                  {product.badge}
                </span>
              )}

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46] leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                {product.longDescription}
              </p>

              <div className="mt-8 flex items-baseline gap-2 flex-wrap">
                <span className="text-4xl font-extrabold text-[#0F2B46]">
                  {formatPrice(product.price)}
                </span>
                {isSubscription ? (
                  <span className="text-gray-400">/mois</span>
                ) : (
                  <span className="text-gray-400">TTC</span>
                )}
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through ml-2">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {!isSubscription && (
                  <span className="text-sm text-gray-400">
                    · Paiement unique
                  </span>
                )}
                {isSubscription && (
                  <span className="text-sm text-gray-400">
                    · Sans engagement
                  </span>
                )}
              </div>

              <BuyButton
                productId={product.id}
                productName={product.shortName}
                isSubscription={isSubscription}
              />

              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400 flex-wrap">
                <span className="flex items-center gap-1">
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Paiement sécurisé
                </span>
                {!isSubscription && (
                  <span className="flex items-center gap-1">
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Téléchargement immédiat
                  </span>
                )}
                <span className="flex items-center gap-1">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {isSubscription
                    ? "Résiliable à tout moment"
                    : "Garantie 14 jours"}
                </span>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl font-extrabold text-[#0F2B46] mb-8">
              {isBundle
                ? "Tout ce qui est inclus dans le pack"
                : isSubscription
                  ? "Ce que vous obtenez"
                  : "Ce qui est inclus"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
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
                  <span className="text-sm text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
