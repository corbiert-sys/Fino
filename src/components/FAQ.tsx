"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Comment fonctionne le paiement ?",
    a: "Le paiement est sécurisé via Stripe. Après votre achat, vous recevez immédiatement un lien de téléchargement par email.",
  },
  {
    q: "Les fichiers sont-ils compatibles Mac et PC ?",
    a: "Oui, le Simulateur fonctionne avec Excel (Windows/Mac) et Google Sheets. Les guides sont au format PDF, lisible partout. Le template Notion se duplique en un clic.",
  },
  {
    q: "Puis-je obtenir un remboursement ?",
    a: "Oui, vous bénéficiez d'une garantie satisfait ou remboursé de 14 jours. Contactez-nous par email si le produit ne vous convient pas.",
  },
  {
    q: "Les taux URSSAF sont-ils à jour ?",
    a: "Oui, tous nos outils sont mis à jour avec les taux en vigueur pour 2025/2026. Nous mettons à jour les fichiers à chaque changement réglementaire.",
  },
  {
    q: "Le simulateur convient-il à mon activité ?",
    a: "Le simulateur couvre tous les statuts micro-entrepreneur : BIC Vente, BIC Prestations de services, BNC Libérale (réglementée et non réglementée), et Agent commercial.",
  },
  {
    q: "Ai-je besoin de connaissances en comptabilité ?",
    a: "Non, les outils Fino sont conçus pour les non-comptables. Le Guide Premium vous accompagne pas à pas dans chaque étape.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0F2B46]">
            Questions fréquentes
          </h2>
          <p className="mt-3 text-gray-500">
            Tout ce que vous devez savoir avant de vous lancer
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-[#0F2B46] text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
