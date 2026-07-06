import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Mon Fino",
};

export default function CGV() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-gray">
        <h1 className="text-3xl font-extrabold text-[#0F2B46]">
          Conditions Générales de Vente
        </h1>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 1 — Objet
        </h2>
        <p className="text-gray-600">
          Les présentes CGV régissent la vente de produits numériques (fichiers
          Google Sheets, guides PDF, templates Notion) proposés par Mon Fino sur ce site.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 2 — Produits
        </h2>
        <p className="text-gray-600">
          Les produits vendus sont des biens numériques dématérialisés, livrés
          par téléchargement immédiat après paiement. Les descriptions et
          fonctionnalités de chaque produit sont détaillées sur la page produit
          correspondante.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 3 — Prix
        </h2>
        <p className="text-gray-600">
          Les prix sont indiqués en euros TTC. Mon Fino se réserve le droit de
          modifier ses prix à tout moment, sans que cela n&apos;affecte les
          commandes déjà confirmées.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 4 — Paiement
        </h2>
        <p className="text-gray-600">
          Le paiement s&apos;effectue en ligne par carte bancaire via la
          plateforme sécurisée Stripe. Le paiement est exigible immédiatement à
          la commande.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 5 — Livraison
        </h2>
        <p className="text-gray-600">
          La livraison est instantanée. Après validation du paiement, un email
          contenant le(s) lien(s) de téléchargement est envoyé à l&apos;adresse
          email fournie lors de la commande.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 6 — Droit de rétractation
        </h2>
        <p className="text-gray-600">
          Conformément à l&apos;article L221-28 du Code de la consommation, le
          droit de rétractation ne peut être exercé pour les contenus numériques
          fournis sur un support immatériel dont l&apos;exécution a commencé avec
          l&apos;accord du consommateur. Toutefois, Mon Fino offre une garantie
          satisfait ou remboursé de 14 jours sur simple demande par email.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 7 — Propriété intellectuelle
        </h2>
        <p className="text-gray-600">
          L&apos;achat d&apos;un produit confère un droit d&apos;utilisation
          personnel et non transférable. Toute reproduction, partage ou revente
          est strictement interdit.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Article 8 — Responsabilité
        </h2>
        <p className="text-gray-600">
          Les outils Mon Fino sont fournis à titre indicatif. Mon Fino ne saurait être
          tenu responsable des décisions financières prises sur la base de ces
          outils. Il est recommandé de consulter un expert-comptable pour toute
          obligation déclarative officielle.
        </p>
      </div>
    </section>
  );
}
