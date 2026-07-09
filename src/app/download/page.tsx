"use client";

import Link from "next/link";

export default function DownloadPage() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-8 bg-[#F0F9FF] rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#1B4965]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-extrabold text-[#1B4965]">
          Page non disponible
        </h1>
        <p className="mt-4 text-gray-500">
          Cette page n&apos;est plus disponible. Si vous avez besoin d&apos;aide
          avec votre commande, contactez-nous a contact@pawlydog.com.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-8 py-3 text-sm font-semibold btn-ocean text-white rounded-full"
        >
          Retour a l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
