import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Mon Fino",
};

export default function MentionsLegales() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-gray">
        <h1 className="text-3xl font-extrabold text-[#0F2B46]">
          Mentions légales
        </h1>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">Éditeur</h2>
        <p className="text-gray-600">
          Mon Fino — Finance Solo
          <br />
          [Votre nom / raison sociale]
          <br />
          [Adresse]
          <br />
          [Email de contact]
          <br />
          SIRET : [Votre numéro SIRET]
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">Hébergement</h2>
        <p className="text-gray-600">
          Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, États-Unis.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Propriété intellectuelle
        </h2>
        <p className="text-gray-600">
          L&apos;ensemble des contenus présents sur ce site (textes, images,
          outils, fichiers) sont la propriété exclusive de Mon Fino et sont protégés
          par le droit d&apos;auteur. Toute reproduction est interdite sans
          autorisation préalable.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Données personnelles
        </h2>
        <p className="text-gray-600">
          Les données collectées lors du processus d&apos;achat (email, nom)
          sont utilisées uniquement pour la livraison de votre commande. Elles ne
          sont jamais revendues à des tiers. Conformément au RGPD, vous pouvez
          exercer vos droits d&apos;accès, de rectification et de suppression en
          nous contactant par email.
        </p>

        <h2 className="text-lg font-bold text-[#0F2B46] mt-8">
          Avertissement
        </h2>
        <p className="text-gray-600">
          Les outils Mon Fino sont fournis à titre indicatif et constituent une aide
          à la décision. Ils ne se substituent pas aux conseils d&apos;un
          expert-comptable. Les taux affichés sont ceux en vigueur au moment de
          la publication.
        </p>
      </div>
    </section>
  );
}
