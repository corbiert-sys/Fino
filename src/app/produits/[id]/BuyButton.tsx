"use client";

import { useState } from "react";

export function BuyButton({
  productId,
  productName,
  isSubscription,
}: {
  productId: string;
  productName: string;
  isSubscription?: boolean;
}) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(
          data.error || "Une erreur est survenue. Veuillez réessayer."
        );
      }
    } catch {
      alert("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  const label = isSubscription
    ? `S'abonner au ${productName}`
    : `Acheter ${productName}`;

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="mt-8 w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-base font-bold bg-[#00C853] hover:bg-[#00B848] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all shadow-lg shadow-[#00C853]/25 hover:shadow-xl hover:shadow-[#00C853]/35"
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Redirection...
        </>
      ) : (
        <>
          {label}
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
        </>
      )}
    </button>
  );
}
