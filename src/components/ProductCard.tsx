import Link from "next/link";
import { type Product, formatPrice } from "@/lib/products";
import { LifeJacketIllustration } from "./LifeJacketIllustration";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={`product-card-hover relative bg-white rounded-2xl border flex flex-col ${
        product.popular
          ? "border-[#FF6B35] shadow-lg ring-1 ring-[#FF6B35]/20"
          : "border-gray-200 shadow-sm"
      }`}
    >
      {product.badge && (
        <div className="absolute -top-3 left-6 z-10">
          <span
            className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
              product.popular
                ? "bg-[#FF6B35] text-white"
                : "bg-[#1B4965] text-white"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      <div className="p-6 flex items-center justify-center bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE] rounded-t-2xl">
        <LifeJacketIllustration
          color={product.color}
          variant={product.id === "pack-aventure" ? "pack" : "jacket"}
          className="w-40 h-40"
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-[#1B4965] mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-2">
          {product.description}
        </p>

        {product.availableSizes.length > 0 && (
          <div className="flex gap-1.5 mb-4 flex-wrap">
            {product.availableSizes.map((size) => (
              <span
                key={size}
                className="px-2 py-0.5 text-xs font-medium bg-[#F0F9FF] text-[#1B4965] rounded"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        <div className="mb-5">
          <span className="text-3xl font-extrabold text-[#1B4965]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <ul className="space-y-1.5 mb-6">
          {product.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <svg
                className="w-4 h-4 text-[#FF6B35] mt-0.5 shrink-0"
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
              <span className="line-clamp-1">{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`/produits/${product.id}`}
          className={`w-full text-center py-3 px-6 rounded-full text-sm font-semibold transition-all ${
            product.popular
              ? "btn-coral text-white"
              : "btn-ocean text-white"
          }`}
        >
          Decouvrir
        </Link>
      </div>
    </div>
  );
}
