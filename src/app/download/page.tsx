"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

function DownloadContent() {
  const searchParams = useSearchParams();
  const session = searchParams.get("session");
  const product = searchParams.get("product");
  const token = searchParams.get("token");

  const isValid = session && product && token;
  const downloadUrl = isValid
    ? `/api/download?session=${session}&product=${product}&token=${token}`
    : null;

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        {isValid ? (
          <>
            <div className="w-20 h-20 mx-auto mb-8 bg-[#00C853]/10 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-[#00C853]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
              Votre produit est prêt
            </h1>
            <p className="mt-4 text-gray-500 text-lg">
              Cliquez sur le bouton ci-dessous pour télécharger votre fichier.
            </p>

            <a
              href={downloadUrl!}
              className="inline-flex items-center justify-center mt-8 px-10 py-4 text-base font-bold bg-[#00C853] hover:bg-[#00B848] text-white rounded-full transition-all shadow-lg shadow-[#00C853]/25"
            >
              Télécharger
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <p className="mt-6 text-sm text-gray-400">
              Ce lien est personnel. Ne le partagez pas.
            </p>
          </>
        ) : (
          <>
            <div className="w-20 h-20 mx-auto mb-8 bg-red-50 rounded-full flex items-center justify-center">
              <svg
                className="w-10 h-10 text-red-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-extrabold text-[#0F2B46]">
              Lien invalide
            </h1>
            <p className="mt-4 text-gray-500">
              Ce lien de téléchargement est invalide ou expiré. Vérifiez votre
              email pour retrouver le bon lien.
            </p>

            <Link
              href="/"
              className="inline-flex items-center justify-center mt-8 px-8 py-3 text-sm font-semibold bg-[#0F2B46] hover:bg-[#1a3d5c] text-white rounded-full transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

export default function DownloadPage() {
  return (
    <Suspense>
      <DownloadContent />
    </Suspense>
  );
}
