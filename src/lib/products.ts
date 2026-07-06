export type ProductType = "one-time" | "bundle" | "subscription";

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
  interval?: "month";
}

export const products: Product[] = [
  {
    id: "pack-lancement",
    name: "Pack Lancement Complet",
    shortName: "Pack Complet",
    price: 5900,
    originalPrice: 9100,
    description:
      "Les 4 outils Fino réunis à prix réduit. Tout ce qu'il faut pour lancer et piloter votre micro-entreprise sereinement.",
    longDescription:
      "Le Pack Lancement regroupe l'intégralité des outils Fino : le Simulateur de Trésorerie (Google Sheets), le Guide Premium, le Kit TVA 2026 avec calculateur de seuil intégré, et l'Espace Notion avec automatisations. Vous économisez 35% par rapport à l'achat séparé et démarrez avec une boîte à outils complète.",
    features: [
      "Simulateur de Trésorerie & Charges (Google Sheets)",
      "Guide Premium du Simulateur (PDF)",
      "Kit Passage à la TVA 2026 + Calculateur de seuil",
      "Espace Pré-Compta Notion avec automatisations",
      "Économie de 35% vs achat séparé",
      "Mises à jour gratuites à vie",
      "Support prioritaire par email",
    ],
    icon: "🚀",
    badge: "-35%",
    popular: true,
    type: "bundle",
    fileName: "Fino_Pack_Lancement_Complet.zip",
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
      "Pilotez vos finances en temps réel sur Google Sheets. Tableau de bord automatique, calcul URSSAF, suivi mensuel — accessible partout.",
    longDescription:
      "Le Simulateur de Trésorerie Fino est disponible sur Google Sheets : accessible partout, toujours à jour, impossible à perdre. Conçu pour les micro-entrepreneurs, auto-entrepreneurs et freelances, il calcule automatiquement vos cotisations URSSAF, votre impôt VFL, et votre revenu net disponible. Les taux sont mis à jour automatiquement sans retéléchargement.",
    features: [
      "Google Sheets — accessible partout, Mac & PC",
      "Tableau de bord avec 6 KPIs essentiels",
      "Calcul automatique des cotisations URSSAF",
      "Option Versement Libératoire de l'Impôt (VFL)",
      "Ventilation mensuelle automatique",
      "Graphique de progression mensuel",
      "Taux mis à jour automatiquement 2025/2026",
      "Plus de 500 lignes de saisie",
    ],
    icon: "📊",
    badge: "Best-seller",
    type: "one-time",
    fileName: "Fino_Simulateur_Tresorerie_Charges.xlsx",
  },
  {
    id: "guide-premium",
    name: "Guide Premium du Simulateur",
    shortName: "Guide Premium",
    price: 1900,
    description:
      "Le mode d'emploi complet pour exploiter 100% du potentiel de votre simulateur. Astuces, méthodes et bonnes pratiques.",
    longDescription:
      "Ce guide détaillé vous accompagne pas à pas dans l'utilisation du Simulateur de Trésorerie Fino. De la configuration initiale à l'analyse avancée de votre tableau de bord, découvrez toutes les fonctionnalités et les meilleures pratiques pour piloter votre activité avec clarté.",
    features: [
      "Configuration pas à pas de votre statut",
      "Méthode des 3 comptes pour vos provisions",
      "Guide de saisie avec exemples concrets",
      "Lecture et interprétation du tableau de bord",
      "Calendrier des paiements URSSAF",
      "FAQ complète avec solutions",
      "Glossaire des termes financiers",
      "Conseils d'experts-comptables",
    ],
    icon: "📖",
    type: "one-time",
    fileName: "Fino_Guide_Simulateur_Premium.pdf",
  },
  {
    id: "kit-tva-2026",
    name: "Kit Passage à la TVA 2026",
    shortName: "Kit TVA",
    price: 2400,
    description:
      "Le guide opérationnel complet avec calculateur de seuil intégré pour franchir les seuils TVA en toute sécurité.",
    longDescription:
      "La majorité des micro-entrepreneurs paniquent à l'idée de passer à la TVA. Ce kit lève tous les malentendus et vous guide étape par étape. Bonus : un calculateur de seuil TVA intégré — entrez votre CA mensuel et visualisez instantanément quand vous basculerez et combien provisionner.",
    features: [
      "Calculateur de seuil TVA intégré (Google Sheets)",
      "Seuils TVA 2026 détaillés (Services & Vente)",
      "Checklist d'alerte mensuelle automatique",
      "Modèle de courrier officiel pré-rédigé",
      "Comparatif Réel Simplifié vs Réel Normal",
      "Scripts email B2B et B2C prêts à l'emploi",
      "Guide de récupération de TVA sur achats",
      "Feuille de route complète",
    ],
    icon: "🏛️",
    badge: "Nouveau",
    type: "one-time",
    fileName: "Fino_Kit_TVA_2026.pdf",
  },
  {
    id: "espace-notion-precompta",
    name: "Espace Pré-Compta Notion",
    shortName: "Notion",
    price: 1900,
    description:
      "Votre espace Notion clé en main avec automatisations : rappels URSSAF, factures pré-remplies, suivi clients.",
    longDescription:
      "Un template Notion complet avec des automatisations intégrées : rappels automatiques avant chaque échéance URSSAF trimestrielle, bouton 'Nouvelle facture' pré-rempli avec vos infos, calcul automatique des provisions à mettre de côté, et suivi visuel de votre activité.",
    features: [
      "Template Notion prêt à dupliquer en 1 clic",
      "Rappels automatiques échéances URSSAF",
      "Bouton 'Nouvelle facture' pré-rempli",
      "Calcul automatique des provisions",
      "Suivi des factures, devis et clients",
      "Calendrier fiscal interactif",
      "Tableau de bord visuel de votre activité",
      "Mises à jour incluses",
    ],
    icon: "💼",
    type: "one-time",
    fileName: "Fino_Espace_PreCompta_Notion.pdf",
  },
  {
    id: "club-fino",
    name: "Club Fino — Abonnement mensuel",
    shortName: "Club Fino",
    price: 790,
    description:
      "Accès à tous les outils Fino + mises à jour automatiques des taux + alertes réglementaires chaque mois.",
    longDescription:
      "Le Club Fino vous donne un accès permanent et toujours à jour à l'ensemble des outils Fino. À chaque changement de taux URSSAF, de seuil TVA ou de réglementation, vos outils sont mis à jour automatiquement. Vous recevez aussi des alertes email avant chaque échéance fiscale et un accès prioritaire à tous les nouveaux outils.",
    features: [
      "Accès à tous les outils Fino (4 produits)",
      "Mises à jour automatiques des taux URSSAF/TVA",
      "Alertes email avant chaque échéance fiscale",
      "Accès prioritaire aux nouveaux outils",
      "Support prioritaire sous 12h",
      "Communauté privée d'entrepreneurs",
      "Webinaires mensuels exclusifs",
      "Sans engagement — résiliable à tout moment",
    ],
    icon: "⭐",
    badge: "7,90 €/mois",
    type: "subscription",
    interval: "month",
    fileName: "",
  },
];

export const singleProducts = products.filter((p) => p.type === "one-time");
export const bundleProduct = products.find((p) => p.type === "bundle")!;
export const subscriptionProduct = products.find(
  (p) => p.type === "subscription"
)!;

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
