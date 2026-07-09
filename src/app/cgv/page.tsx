import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Generales de Vente — PawlyDog",
};

export default function CGV() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-gray">
        <h1 className="text-3xl font-extrabold text-[#1B4965]">
          Conditions Generales de Vente
        </h1>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 1 — Objet
        </h2>
        <p className="text-gray-600">
          Les presentes CGV regissent la vente de produits (gilets de sauvetage
          et accessoires pour chiens) proposes par PawlyDog sur ce site.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 2 — Produits
        </h2>
        <p className="text-gray-600">
          Les produits vendus sont des articles physiques livres a l&apos;adresse
          indiquee par le client lors de la commande. Les descriptions et
          caracteristiques de chaque produit sont detaillees sur la page produit
          correspondante.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 3 — Prix
        </h2>
        <p className="text-gray-600">
          Les prix sont indiques en euros TTC, hors frais de livraison.
          PawlyDog se reserve le droit de modifier ses prix a tout moment, sans
          que cela n&apos;affecte les commandes deja confirmees. La livraison
          est offerte a partir de 60 euros d&apos;achat.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 4 — Paiement
        </h2>
        <p className="text-gray-600">
          Le paiement s&apos;effectue en ligne par carte bancaire via la
          plateforme securisee Stripe. Le paiement est exigible immediatement a
          la commande.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 5 — Livraison
        </h2>
        <p className="text-gray-600">
          Les commandes sont expediees sous 24 heures ouvrees. Le delai de
          livraison est de 3 a 5 jours ouvrables en France metropolitaine et de
          5 a 8 jours pour l&apos;Europe. Un email de suivi est envoye des
          l&apos;expedition.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 6 — Droit de retractation et retours
        </h2>
        <p className="text-gray-600">
          Conformement a la legislation en vigueur, vous disposez d&apos;un
          delai de 14 jours a compter de la reception du produit pour exercer
          votre droit de retractation. PawlyDog offre un delai etendu de 30
          jours pour les retours et echanges. Les articles doivent etre retournes
          dans leur etat d&apos;origine, non utilises en eau. Les frais de retour
          sont a la charge de PawlyDog pour les echanges de taille.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 7 — Garantie
        </h2>
        <p className="text-gray-600">
          Tous les produits PawlyDog beneficient de la garantie legale de
          conformite de 2 ans. En cas de defaut constate, contactez-nous a
          contact@pawlydog.com pour un echange ou un remboursement.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Article 8 — Responsabilite
        </h2>
        <p className="text-gray-600">
          Les gilets de sauvetage PawlyDog sont concus comme des aides a la
          flottaison. Ils ne remplacent pas la surveillance active de votre
          animal lors des activites aquatiques. PawlyDog ne saurait etre tenu
          responsable en cas de mauvaise utilisation du produit.
        </p>
      </div>
    </section>
  );
}
