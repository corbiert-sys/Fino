"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Quelle est la différence entre le Pack et les outils à l'unité ?",
    a: "Le Pack Lancement contient les 4 outils Fino au complet avec 35% de réduction. Si vous démarrez votre activité, c'est l'option la plus avantageuse. Vous pouvez aussi acheter chaque outil séparément selon vos besoins.",
  },
  {
    q: "Comment fonctionne le Club Fino ?",
    a: "Le Club Fino est un abonnement mensuel à 7,90 €/mois qui vous donne accès à tous les outils, avec mises à jour automatiques des taux, alertes fiscales et support prioritaire. Sans engagement, résiliable à tout moment depuis votre espace Stripe.",
  },
  {
    q: "Comment fonctionne le paiement et la livraison ?",
    a: "Le paiement est sécurisé via Stripe (carte bancaire, Apple Pay, Google Pay). Après votre achat, vous recevez automatiquement un email avec votre lien de téléchargement et la vidéo tuto en quelques secondes.",
  },
  {
    q: "Le Simulateur est-il sur Google Sheets ou Excel ?",
    a: "Le Simulateur est disponible sur Google Sheets : accessible partout, sur Mac, PC, tablette et mobile. Pas besoin d'installer Excel. Vos taux URSSAF sont mis à jour automatiquement sans retéléchargement.",
  },
  {
    q: "Puis-je obtenir un remboursement ?",
    a: "Oui, vous bénéficiez d'une garantie satisfait ou remboursé de 14 jours. Contactez-nous par email si le produit ne vous convient pas.",
  },
  {
    q: "Les taux URSSAF et TVA sont-ils à jour ?",
    a: "Oui, tous nos outils intègrent les taux en vigueur pour 2025/2026. Le Kit TVA inclut un calculateur de seuil intégré qui vous alerte automatiquement quand vous approchez du seuil de franchise.",
  },
  {
    q: "Le simulateur convient-il à mon activité ?",
    a: "Le simulateur couvre tous les statuts micro-entrepreneur : BIC Vente, BIC Prestations de services, BNC Libérale (réglementée et non réglementée), et Agent commercial.",
  },
  {
    q: "Des vidéos tuto sont-elles incluses ?",
    a: "Oui, chaque outil est accompagné d'une vidéo walkthrough de 5-10 minutes qui vous montre pas à pas comment le configurer et l'utiliser. Le lien est envoyé avec votre fichier après achat.",
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
