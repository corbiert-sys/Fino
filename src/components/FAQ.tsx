"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Comment choisir la bonne taille de gilet pour mon chien ?",
    a: "Mesurez le tour de poitrine de votre chien (juste derriere les pattes avant) et son poids. Consultez notre guide des tailles ci-dessus pour trouver la taille ideale. En cas d'hesitation entre deux tailles, prenez la taille superieure - les sangles ajustables permettront un ajustement parfait.",
  },
  {
    q: "Mon chien sait deja nager, a-t-il vraiment besoin d'un gilet ?",
    a: "Absolument. Meme les chiens bons nageurs peuvent se fatiguer, etre surpris par un courant ou paniquer en eau profonde. Le gilet de sauvetage offre une securite supplementaire et vous permet de les recuperer facilement grace a la poignee dorsale. C'est aussi obligatoire pour certaines activites nautiques.",
  },
  {
    q: "Comment entretenir le gilet de sauvetage ?",
    a: "Rincez le gilet a l'eau douce apres chaque utilisation en eau salee ou chloree. Laissez-le secher a l'air libre, a l'ombre. Ne le mettez pas au seche-linge. Verifiez regulierement l'etat des boucles et des sangles. Nos gilets en neoprene sechent 2x plus vite que les modeles classiques.",
  },
  {
    q: "Les gilets conviennent-ils a toutes les races ?",
    a: "Oui, nos gilets sont concus pour s'adapter a toutes les morphologies grace aux sangles multi-points ajustables. Du Chihuahua au Berger Allemand, chaque chien trouvera sa taille. La gamme Puppy est specialement concue pour les chiots et petites races.",
  },
  {
    q: "Quel est le delai de livraison ?",
    a: "Livraison en 3-5 jours ouvrables en France metropolitaine, 5-8 jours pour l'Europe. Livraison offerte a partir de 60 euros d'achat. Vous recevrez un email de suivi des l'expedition de votre commande.",
  },
  {
    q: "Puis-je retourner un gilet si la taille ne convient pas ?",
    a: "Bien sur ! Vous disposez de 30 jours pour retourner ou echanger votre gilet s'il n'a pas ete utilise en eau. Les frais de retour sont a notre charge pour les echanges de taille. Contactez-nous a contact@pawlydog.com pour initier le processus.",
  },
  {
    q: "Le Pack Aventure est-il vraiment avantageux ?",
    a: "Oui ! Le Pack Aventure Nautique vous fait economiser 15% par rapport a l'achat separe des 3 articles (gilet AquaPaw Pro + laisse aquatique + gamelle pliable). De plus, la livraison est offerte avec le pack, quel que soit le montant.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#F0F9FF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#1B4965]">
            Questions frequentes
          </h2>
          <p className="mt-3 text-gray-500">
            Tout ce que vous devez savoir sur nos gilets de sauvetage
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-[#1B4965] text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-[#FF6B35] shrink-0 transition-transform duration-300 ${
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
