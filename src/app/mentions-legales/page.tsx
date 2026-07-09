import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales — PawlyDog",
};

export default function MentionsLegales() {
  return (
    <section className="py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-sm prose-gray">
        <h1 className="text-3xl font-extrabold text-[#1B4965]">
          Mentions legales
        </h1>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">Editeur</h2>
        <p className="text-gray-600">
          PawlyDog
          <br />
          [Votre nom / raison sociale]
          <br />
          [Adresse]
          <br />
          contact@pawlydog.com
          <br />
          SIRET : [Votre numero SIRET]
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">Hebergement</h2>
        <p className="text-gray-600">
          Ce site est heberge par Vercel Inc., 440 N Barranca Ave #4133, Covina,
          CA 91723, Etats-Unis.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Propriete intellectuelle
        </h2>
        <p className="text-gray-600">
          L&apos;ensemble des contenus presents sur ce site (textes, images,
          logos, illustrations) sont la propriete exclusive de PawlyDog et sont proteges
          par le droit d&apos;auteur. Toute reproduction est interdite sans
          autorisation prealable.
        </p>

        <h2 className="text-lg font-bold text-[#1B4965] mt-8">
          Donnees personnelles
        </h2>
        <p className="text-gray-600">
          Les donnees collectees lors du processus d&apos;achat (email, nom,
          adresse de livraison) sont utilisees uniquement pour le traitement et la
          livraison de votre commande. Elles ne sont jamais revendues a des tiers.
          Conformement au RGPD, vous pouvez exercer vos droits d&apos;acces, de
          rectification et de suppression en nous contactant par email a
          contact@pawlydog.com.
        </p>
      </div>
    </section>
  );
}
