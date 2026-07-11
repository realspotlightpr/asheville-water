import { serviceCities, resourceArticles } from "./site";

export type NavLink = { label: string; to: string };
export type NavMenu = { label: string; to: string; items: NavLink[] };

export const productMenu: NavLink[] = [
  { label: "Complete Home System", to: "/products/complete-home-system" },
  { label: "Single-Tank Softener", to: "/products/single-tank-softener" },
  { label: "Dual-Tank Softener", to: "/products/dual-tank-softener" },
  { label: "Carbon Filter", to: "/products/carbon-filter" },
  { label: "Salt-Free Conditioner", to: "/products/salt-free-conditioner" },
  { label: "Well Water System", to: "/products/well-water-system" },
  { label: "Iron & Sulfur Removal", to: "/products/iron-sulfur-removal" },
  { label: "Tankless RO (7-Stage)", to: "/products/7-stage-ro" },
  { label: "Tank RO (5-Stage)", to: "/products/5-stage-ro" },
  { label: "UV Sterilizer", to: "/products/uv-sterilizer" },
  { label: "Pre-Sediment Filter", to: "/products/pre-sediment-filter" },
];

export const serviceMenu: NavLink[] = serviceCities.map((c) => ({
  label: c.name,
  to: `/service-areas/${c.slug}`,
}));

export const resourceMenu: NavLink[] = resourceArticles.map((a) => ({
  label: a.title,
  to: `/resources/${a.slug}`,
}));

export const navMenus: NavMenu[] = [
  {
    label: "Products",
    to: "/products",
    items: [{ label: "All Products", to: "/products" }, ...productMenu],
  },
  {
    label: "Service Areas",
    to: "/service-areas",
    items: [{ label: "All Service Areas", to: "/service-areas" }, ...serviceMenu],
  },
  {
    label: "Resources",
    to: "/resources",
    items: [{ label: "All Resources", to: "/resources" }, ...resourceMenu],
  },
];
