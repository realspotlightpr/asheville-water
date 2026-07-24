export const siteUrl = "https://ashevillewaterspecialists.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "Plumber"],
  name: "Asheville Water Specialists",
  url: siteUrl,
  logo: `${siteUrl}/assets/asheville-water-logo.png`,
  image: `${siteUrl}/assets/asheville-water-logo.png`,
  telephone: "+1-828-903-8433",
  email: "contact@ashevillewaterspecialists.com",
  priceRange: "$$",
  description: "Whole-home water filtration, water softening, reverse osmosis, and private-well treatment for Asheville and Western North Carolina.",
  areaServed: [
    "Asheville, NC",
    "Hendersonville, NC",
    "Weaverville, NC",
    "Arden, NC",
    "Fletcher, NC",
    "Black Mountain, NC",
    "Candler, NC",
    "Canton, NC",
    "Brevard, NC",
    "Waynesville, NC",
    "Mills River, NC",
  ].map((name) => ({ "@type": "City", name })),
  serviceType: [
    "Whole-home water filtration",
    "Water softener installation",
    "Reverse osmosis installation",
    "Private well water treatment",
    "Iron and sulfur removal",
    "UV water purification",
  ],
  sameAs: [
    "https://www.instagram.com/ashevillewaterspecialists/",
  ],
};
