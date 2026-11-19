export const productCatalogSeo = {
  title: "Home Water Filtration Systems | Asheville Water Specialists",
  description: "Compare whole-home filtration, softening, well-water treatment, and drinking-water reverse osmosis systems for Western North Carolina homes.",
  path: "/products/",
};

export function getProductSeo(product: { slug: string; name: string; blurb: string }) {
  return {
    title: `${product.name} | Asheville Water Specialists`,
    description: product.blurb,
    path: `/products/${product.slug}/`,
  };
}
