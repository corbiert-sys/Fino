import Link from "next/link";
import { type Product, formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
        product.popular
          ? "border-[#00C853] shadow-lg ring-1 ring-[#00C853]/20"
          : "border-gray-200 shadow-sm"
      }`}
    >
      {product.badge && (
        <div className="absolute -top-3 left-6">
          <span
            className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
              product.popular
                ? "bg-[#00C853] text-white"
                : "bg-[#0F2B46] text-white"
            }`}
          >
            {product.badge}
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="text-4xl mb-4">{product.icon}</div>
        <h3 className="text-lg font-bold text-[#0F2B46] mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-6 flex-1">
          {product.description}
        </p>

        <div className="mb-6">
          <span className="text-3xl font-extrabold text-[#0F2B46]">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-gray-400 ml-1">TTC</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        <ul className="space-y-2 mb-6">
          {product.features.slice(0, 4).map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <svg
                className="w-4 h-4 text-[#00C853] mt-0.5 shrink-0"
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

        <Link
          href={`/produits/${product.id}`}
          className={`w-full text-center py-3 px-6 rounded-full text-sm font-semibold transition-all ${
            product.popular
              ? "bg-[#00C853] hover:bg-[#00B848] text-white shadow-md shadow-[#00C853]/25"
              : "bg-[#0F2B46] hover:bg-[#1a3d5c] text-white"
          }`}
        >
          Découvrir
        </Link>
      </div>
    </div>
  );
}
