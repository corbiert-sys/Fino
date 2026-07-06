export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  badge?: string;
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: "simulateur-tresorerie",
    name: "Simulateur de Trésorerie & Charges",
    shortName: "Simulateur",
    price: 2900,
    description:
      "Pilotez vos finances de micro-entrepreneur en temps réel. Tableau de bord automatique, calcul URSSAF, suivi mensuel.",
    longDescription:
      "Le Simulateur de Trésorerie Fino a été conçu spécifiquement pour les micro-entrepreneurs, auto-entrepreneurs et freelances. Il vous permet de piloter vos finances en temps réel, sans formation comptable. Saisissez vos recettes et dépenses, et laissez le simulateur calculer automatiquement vos cotisations URSSAF, votre impôt VFL, et votre revenu net disponible.",
    features: [
      "Tableau de bord avec 6 KPIs essentiels",
      "Calcul automatique des cotisations URSSAF",
      "Option Versement Libératoire de l'Impôt (VFL)",
      "Ventilation mensuelle automatique",
      "Graphique de progression mensuel",
      "Conseils Fino personnalisés",
      "Compatible tous statuts micro-entrepreneur",
      "Plus de 500 lignes de saisie",
    ],
    icon: "📊",
    badge: "Best-seller",
    popular: true,
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
  },
  {
    id: "kit-tva-2026",
    name: "Kit Passage à la TVA 2026",
    shortName: "Kit TVA",
    price: 2400,
    description:
      "Le guide opérationnel complet pour franchir les seuils TVA en toute sécurité juridique et financière.",
    longDescription:
      "La majorité des micro-entrepreneurs paniquent à l'idée de passer à la TVA. Ce kit lève tous les malentendus et vous guide étape par étape : obtention du numéro de TVA, choix du régime, mise à jour de vos factures, communication clients, et récupération de TVA sur vos achats.",
    features: [
      "Seuils TVA 2026 détaillés (Services & Vente)",
      "Checklist d'alerte mensuelle",
      "Modèle de courrier officiel pré-rédigé",
      "Comparatif Réel Simplifié vs Réel Normal",
      "Scripts email B2B et B2C prêts à l'emploi",
      "Guide de récupération de TVA sur achats",
      "Comparatif facture Avant / Après",
      "Feuille de route complète",
    ],
    icon: "🏛️",
    badge: "Nouveau",
  },
  {
    id: "espace-notion-precompta",
    name: "Espace Pré-Compta Notion",
    shortName: "Notion",
    price: 1900,
    description:
      "Votre espace Notion clé en main pour organiser toute votre pré-comptabilité de freelance au quotidien.",
    longDescription:
      "Un template Notion complet et structuré pour centraliser toute votre gestion administrative et pré-comptable. Factures, devis, suivi clients, échéances fiscales — tout est organisé pour que vous puissiez vous concentrer sur votre activité.",
    features: [
      "Template Notion prêt à dupliquer",
      "Suivi des factures et devis",
      "Gestion des clients et prospects",
      "Calendrier des échéances fiscales",
      "Base de données des dépenses",
      "Tableau de bord visuel",
      "Organisation documentaire complète",
      "Mises à jour incluses",
    ],
    icon: "💼",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
