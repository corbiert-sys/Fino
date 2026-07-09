export type ProductType = "single" | "bundle";

export type ProductSize = "XXS" | "XS" | "S" | "M" | "L" | "XL";

export interface SizeInfo {
  size: ProductSize;
  weight: string;
  chest: string;
  neck: string;
}

export interface Product {
  id: string;
  name: string;
  shortName: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  features: string[];
  badge?: string;
  popular?: boolean;
  type: ProductType;
  color: string;
  availableSizes: ProductSize[];
  bundleProductIds?: string[];
}

export const sizeChart: SizeInfo[] = [
  { size: "XXS", weight: "1-3 kg", chest: "28-35 cm", neck: "20-25 cm" },
  { size: "XS", weight: "3-6 kg", chest: "35-42 cm", neck: "25-30 cm" },
  { size: "S", weight: "6-12 kg", chest: "42-52 cm", neck: "30-38 cm" },
  { size: "M", weight: "12-22 kg", chest: "52-65 cm", neck: "38-46 cm" },
  { size: "L", weight: "22-36 kg", chest: "65-80 cm", neck: "46-55 cm" },
  { size: "XL", weight: "36-50 kg", chest: "80-100 cm", neck: "55-65 cm" },
];

export const products: Product[] = [
  {
    id: "aquapaw-pro",
    name: "AquaPaw Pro",
    shortName: "Pro",
    price: 5990,
    description:
      "Notre gilet de sauvetage haute performance. Poignee de sauvetage renforcee, neoprene premium et sechage ultra-rapide.",
    longDescription:
      "L'AquaPaw Pro est notre gilet de sauvetage premium, concu pour les chiens actifs qui aiment l'eau. Dote d'une poignee de sauvetage ergonomique renforcee, d'un neoprene haute densite a sechage rapide et de panneaux reflechissants 360 degres pour une visibilite maximale. Le systeme de flottabilite repartie assure une position naturelle de nage, tandis que les boucles a deverrouillage rapide permettent un enfilage en moins de 30 secondes. Point d'attache pour laisse integre au niveau de la poignee dorsale.",
    features: [
      "Neoprene premium haute densite - sechage 2x plus rapide",
      "Poignee de sauvetage ergonomique renforcee",
      "Reflechissant 360 degres - visibilite jour et nuit",
      "Flottabilite repartie pour une nage naturelle",
      "Point d'attache laisse integre",
      "Boucles a deverrouillage rapide - enfilage en 30 sec",
      "Mentonniere rembourrée pour le confort",
      "3 sangles ajustables pour un maintien parfait",
    ],
    badge: "Best-seller",
    popular: true,
    type: "single",
    color: "#FF6B35",
    availableSizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "aquapaw-classic",
    name: "AquaPaw Classic",
    shortName: "Classic",
    price: 3990,
    description:
      "Le gilet de sauvetage essentiel. Securite certifiee, confort optimal et rapport qualite-prix imbattable pour toutes les aventures aquatiques.",
    longDescription:
      "L'AquaPaw Classic offre une protection fiable pour toutes les sorties au bord de l'eau. Mousse de flottabilite haute densite, poignee dorsale solide et bandes reflechissantes haute visibilite. Son tissu ripstop resistant aux griffures garantit une duree de vie exceptionnelle. Disponible dans des couleurs vives pour reperer votre compagnon a distance. Le compagnon ideal pour les lacs, rivieres et plages.",
    features: [
      "Mousse de flottabilite haute densite certifiee",
      "Poignee dorsale solide",
      "Bandes reflechissantes haute visibilite",
      "Tissu ripstop resistant aux griffures",
      "2 sangles ajustables avec boucles securisees",
      "Mentonniere de confort integree",
      "Sechage rapide",
      "Couleurs vives pour visibilite a distance",
    ],
    type: "single",
    color: "#5FA8D3",
    availableSizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "aquapaw-puppy",
    name: "AquaPaw Puppy",
    shortName: "Puppy",
    price: 2990,
    description:
      "Le premier gilet de sauvetage specialement concu pour les chiots et les petits chiens. Ultra-leger et super confortable pour une initiation en douceur.",
    longDescription:
      "L'AquaPaw Puppy est specialement concu pour les chiots et petits chiens qui decouvrent l'eau. Ultra-leger (seulement 120g en taille XXS), il ne gene pas les mouvements et offre une flottabilite parfaite pour les premiers bains. La fermeture par velcro extra-large facilite l'enfilage meme avec un chiot qui gigote. Design adorable avec des couleurs pastels irresistibles. Systeme de taille evolutif qui accompagne la croissance de votre chiot.",
    features: [
      "Ultra-leger - a partir de 120g seulement",
      "Fermeture velcro extra-large - enfilage facile",
      "Flottabilite adaptee aux chiots",
      "Tissu doux anti-irritation",
      "Systeme de taille evolutif",
      "Poignee dorsale souple",
      "Coloris pastels adorables",
      "Ideal pour la premiere initiation a l'eau",
    ],
    badge: "Nouveaute",
    type: "single",
    color: "#F59E0B",
    availableSizes: ["XXS", "XS", "S"],
  },
  {
    id: "pack-aventure",
    name: "Pack Aventure Nautique",
    shortName: "Pack Aventure",
    price: 7990,
    originalPrice: 9470,
    description:
      "L'equipement complet pour les aventures aquatiques : le gilet AquaPaw Pro + la laisse aquatique + la gamelle de voyage pliable. Economisez 15%.",
    longDescription:
      "Le Pack Aventure Nautique reunit tout l'essentiel pour profiter de l'eau avec votre compagnon en toute securite. Incluant notre best-seller l'AquaPaw Pro, une laisse aquatique flottante de 3 metres et une gamelle pliable de voyage, ce pack vous fait economiser 15% par rapport a l'achat separe. Tout est pense pour la praticite : la laisse flotte et reste visible, la gamelle se plie a plat dans votre sac, et le gilet Pro assure une protection maximale.",
    features: [
      "Gilet AquaPaw Pro inclus - notre best-seller",
      "Laisse aquatique flottante 3m - haute visibilite",
      "Gamelle de voyage pliable en silicone alimentaire",
      "Economie de 15% vs achat separe",
      "Sac de transport en toile recyclee inclus",
      "Livraison gratuite incluse",
    ],
    badge: "-15%",
    popular: true,
    type: "bundle",
    color: "#FF6B35",
    availableSizes: ["XS", "S", "M", "L", "XL"],
    bundleProductIds: ["aquapaw-pro"],
  },
];

export const singleProducts = products.filter((p) => p.type === "single");
export const bundleProduct = products.find((p) => p.type === "bundle")!;
export const featuredProduct = products.find((p) => p.id === "aquapaw-pro")!;

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}
