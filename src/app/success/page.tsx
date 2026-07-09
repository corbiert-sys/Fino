import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commande confirmee — PawlyDog",
};

export default function SuccessPage() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-20 h-20 mx-auto mb-8 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#FF6B35]"
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
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B4965]">
          Merci pour votre commande !
        </h1>

        <p className="mt-4 text-gray-500 text-lg leading-relaxed">
          Votre paiement a bien ete enregistre. Vous allez recevoir un email de
          confirmation avec le suivi de votre commande dans les prochaines
          minutes.
        </p>

        <div className="mt-8 p-6 bg-[#F0F9FF] rounded-xl border border-[#BEE9E8]">
          <h2 className="font-bold text-[#1B4965] mb-2">
            Prochaines etapes
          </h2>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#FF6B35] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Un email de confirmation vous sera envoye sous peu
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#FF6B35] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Expedition sous 24h ouvrees
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#FF6B35] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Livraison en 3-5 jours ouvrables
            </li>
          </ul>
        </div>

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
