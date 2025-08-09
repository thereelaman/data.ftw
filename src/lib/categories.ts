import {
  Building,
  Package,
  Car,
  Trees,
  Library,
  Fuel,
  Truck,
  LucideIcon,
} from "lucide-react";

export interface SubCategory {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface DataCategory {
  name: string;
  icon: LucideIcon;
  subcategories: SubCategory[];
}

export const dataCategories: DataCategory[] = [
  {
    name: "Infrastructure",
    icon: Building,
    subcategories: [
      {
        name: "Roads",
        description: "Data related to roads, highways, and streets.",
        icon: Car,
        href: "/infrastructure/roads",
      },
      {
        name: "Parks",
        description: "Data related to public parks and recreation areas.",
        icon: Trees,
        href: "/infrastructure/parks",
      },
      {
        name: "Libraries",
        description: "Data related to public libraries and their resources.",
        icon: Library,
        href: "/infrastructure/libraries",
      },
    ],
  },
  {
    name: "Goods",
    icon: Package,
    subcategories: [
      {
        name: "Petrol",
        description: "Data related to petrol prices and consumption.",
        icon: Fuel,
        href: "/goods/petrol",
      },
      {
        name: "Diesel",
        description: "Data related to diesel prices and consumption.",
        icon: Truck,
        href: "/goods/diesel",
      },
    ],
  },
];
