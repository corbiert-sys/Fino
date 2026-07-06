import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci pour votre achat — Mon Fino",
};

export default function SuccessPage() {
  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
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
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B46]">
          Merci pour votre achat !
        </h1>

        <p className="mt-4 text-gray-500 text-lg leading-relaxed">
          Votre paiement a bien été enregistré. Vous allez recevoir un email
          avec votre lien de téléchargement dans les prochaines minutes.
        </p>

        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
          <h2 className="font-bold text-[#0F2B46] mb-2">
            Vérifiez vos emails
          </h2>
          <p className="text-sm text-gray-500">
            Si vous ne trouvez pas l&apos;email, vérifiez votre dossier spam ou
            promotions. En cas de problème, contactez-nous.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-8 py-3 text-sm font-semibold bg-[#0F2B46] hover:bg-[#1a3d5c] text-white rounded-full transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
