export type ProductType = "one-time" | "bundle";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  badge?: string;
  popular?: boolean;
  type: ProductType;
  fileName: string;
  bundleProductIds?: string[];
}

export const products: Product[] = [
  {
    id: "pack-lancement",
    name: "Pack Lancement Complet",
    shortName: "Pack Complet",
    price: 5900,
    originalPrice: 9100,
    description:
      "Les 4 outils Mon Fino réunis à prix réduit. Tout ce qu'il faut pour lancer et piloter votre micro-entreprise sereinement.",
    longDescription:
      "Le Pack Lancement regroupe l'intégralité des outils Mon Fino : le Simulateur de Trésorerie (Google Sheets), le Guide Premium, le Kit TVA 2026 avec calculateur de seuil intégré, et l'Espace Notion avec automatisations. Vous économisez 35 % par rapport à l'achat séparé et démarrez avec une boîte à outils complète, pensée pour vous faire gagner du temps dès le premier jour.",
    features: [
      "Simulateur de Trésorerie & Charges (Google Sheets) — calcul automatique URSSAF, VFL et revenu net",
      "Guide Premium du Simulateur (PDF 50+ pages) — configuration, méthodes et exemples concrets",
      "Kit Passage à la TVA 2026 + Calculateur de seuil — anticipez et sécurisez la transition",
      "Espace Pré-Compta Notion avec automatisations — rappels, factures et suivi clients intégrés",
      "Économie de 35 % vs achat séparé",
      "Mises à jour gratuites à vie",
      "Support prioritaire par email sous 24 h",
    ],
    icon: "🚀",
    badge: "-35%",
    popular: true,
    type: "bundle",
    fileName: "MonFino_Pack_Lancement_Complet.zip",
    bundleProductIds: [
      "simulateur-tresorerie",
      "guide-premium",
      "kit-tva-2026",
      "espace-notion-precompta",
    ],
  },
  {
    id: "simulateur-tresorerie",
    name: "Simulateur de Trésorerie & Charges",
    shortName: "Simulateur",
    price: 2900,
    description:
      "Pilotez vos finances en temps réel sur Google Sheets. Tableau de bord automatique, calcul URSSAF, suivi mensuel — accessible partout, toujours à jour.",
    longDescription:
      "Le Simulateur de Trésorerie Mon Fino est votre co-pilote financier au quotidien. Disponible sur Google Sheets, il est accessible partout (Mac, PC, tablette, mobile) et impossible à perdre. Saisissez vos factures, et le simulateur calcule automatiquement vos cotisations URSSAF, votre impôt VFL et votre revenu net disponible en temps réel. Les taux sont mis à jour automatiquement — aucune manipulation de votre côté. Idéal pour anticiper vos charges, provisionner intelligemment et piloter votre activité en toute sérénité.",
    features: [
      "Google Sheets — accessible partout, Mac, PC, tablette et mobile",
      "Tableau de bord avec 6 KPIs essentiels (CA, charges, net, provision, tendance, objectif)",
      "Calcul automatique des cotisations URSSAF selon votre statut",
      "Option Versement Forfaitaire Libératoire (VFL) activable en 1 clic",
      "Ventilation mensuelle automatique de votre activité",
      "Graphique de progression mensuel avec courbe de tendance",
      "Taux officiels 2025/2026 mis à jour automatiquement sans retéléchargement",
      "Plus de 500 lignes de saisie — suffisant pour plusieurs années d'activité",
      "Compatible BIC Vente, BIC Prestations, BNC Libérale et Agent commercial",
      "Zéro formule à modifier — tout est pré-configuré",
    ],
    icon: "📊",
    badge: "Best-seller",
    type: "one-time",
    fileName: "MonFino_Simulateur_Tresorerie_Charges.xlsx",
  },
  {
    id: "guide-premium",
    name: "Guide Premium du Simulateur",
    shortName: "Guide Premium",
    price: 1900,
    description:
      "Le mode d'emploi complet pour exploiter 100 % du potentiel de votre simulateur. Astuces, méthodes et bonnes pratiques d'experts.",
    longDescription:
      "Ce guide détaillé de plus de 50 pages vous accompagne pas à pas dans l'utilisation du Simulateur de Trésorerie Mon Fino. De la configuration initiale à l'analyse avancée de votre tableau de bord, vous maîtrisez chaque fonctionnalité rapidement. Inclut la méthode des 3 comptes recommandée par les experts-comptables pour provisionner sans stress, un calendrier URSSAF complet, et un glossaire de tous les termes financiers que vous croiserez.",
    features: [
      "Configuration pas à pas de votre statut (BIC, BNC, Agent commercial)",
      "Méthode des 3 comptes pour vos provisions — recommandée par les experts-comptables",
      "Guide de saisie illustré avec exemples concrets secteur par secteur",
      "Lecture et interprétation de chaque KPI du tableau de bord",
      "Calendrier complet des paiements URSSAF (mensuel et trimestriel)",
      "FAQ complète avec solutions aux 20 situations les plus courantes",
      "Glossaire détaillé de tous les termes financiers et fiscaux",
      "Conseils pratiques d'experts-comptables pour optimiser votre gestion",
      "Checklist de démarrage — soyez opérationnel en moins de 15 minutes",
      "Format PDF haute qualité, imprimable et consultable hors ligne",
    ],
    icon: "📖",
    type: "one-time",
    fileName: "MonFino_Guide_Simulateur_Premium.pdf",
  },
  {
    id: "kit-tva-2026",
    name: "Kit Passage à la TVA 2026",
    shortName: "Kit TVA",
    price: 2400,
    description:
      "Le guide opérationnel complet avec calculateur de seuil intégré pour anticiper et franchir les seuils TVA en toute sécurité.",
    longDescription:
      "La majorité des micro-entrepreneurs paniquent à l'idée de passer à la TVA. Ce kit lève tous les malentendus et vous guide étape par étape avec des actions concrètes. Bonus exclusif : un calculateur de seuil TVA intégré sur Google Sheets — entrez votre CA mensuel et visualisez instantanément quand vous basculerez, combien provisionner et quelles démarches effectuer. Inclut des modèles de courriers officiels et des scripts email prêts à l'emploi pour informer vos clients.",
    features: [
      "Calculateur de seuil TVA intégré (Google Sheets) — projection automatique de la date de bascule",
      "Seuils TVA 2026 détaillés par catégorie (Services, Vente, Mixte)",
      "Checklist d'alerte mensuelle automatique — ne ratez jamais une échéance",
      "Modèle de courrier officiel pré-rédigé pour la déclaration de TVA",
      "Comparatif complet Réel Simplifié vs Réel Normal avec recommandation",
      "Scripts email B2B et B2C prêts à l'emploi pour informer vos clients",
      "Guide de récupération de TVA sur vos achats professionnels",
      "Feuille de route complète — de la franchise au régime réel en 10 étapes",
      "Exemples chiffrés pour chaque situation (artisan, consultant, e-commerce)",
      "Mises à jour incluses en cas d'évolution réglementaire",
    ],
    icon: "🏛️",
    badge: "Nouveau",
    type: "one-time",
    fileName: "MonFino_Kit_TVA_2026.pdf",
  },
  {
    id: "espace-notion-precompta",
    name: "Espace Pré-Compta Notion",
    shortName: "Notion",
    price: 1900,
    description:
      "Votre espace Notion clé en main avec automatisations : rappels URSSAF, factures pré-remplies, suivi clients et calendrier fiscal intégré.",
    longDescription:
      "Un template Notion professionnel et complet avec des automatisations intégrées qui vous font gagner des heures chaque mois. Rappels automatiques avant chaque échéance URSSAF, bouton « Nouvelle facture » pré-rempli avec vos infos, calcul automatique des provisions à mettre de côté, et suivi visuel de votre activité. Duplicable en 1 clic, personnalisable à volonté — votre back-office de freelance, enfin organisé.",
    features: [
      "Template Notion professionnel prêt à dupliquer en 1 clic",
      "Rappels automatiques avant chaque échéance URSSAF (mensuel et trimestriel)",
      "Bouton « Nouvelle facture » pré-rempli avec vos coordonnées et mentions légales",
      "Calcul automatique des provisions à mettre de côté chaque mois",
      "Suivi complet des factures, devis, clients et paiements",
      "Calendrier fiscal interactif avec toutes les dates clés de l'année",
      "Tableau de bord visuel de votre activité avec graphiques intégrés",
      "Base de données clients avec historique et notes",
      "Archivage automatique des documents par année fiscale",
      "Mises à jour incluses à chaque évolution du template",
    ],
    icon: "💼",
    type: "one-time",
    fileName: "MonFino_Espace_PreCompta_Notion.pdf",
  },
];

export const singleProducts = products.filter((p) => p.type === "one-time");
export const bundleProduct = products.find((p) => p.type === "bundle")!;

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
