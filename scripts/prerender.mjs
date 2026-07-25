import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const routes = {
  "/": {
    title: "Asheville Water Specialists | Whole-Home Water Filtration in WNC",
    description: "Whole-home water filtration, softeners, reverse osmosis, and well-water treatment for Asheville and Western North Carolina.",
    heading: "Water Filtration & Softening in Asheville, NC",
    intro: "Know what is in your water before you buy a system. Get a free personalized water report, clear recommendations, and licensed North Carolina plumber installation.",
  },
  "/products": {
    title: "Water Filtration Systems & Pricing | Asheville Water Specialists",
    description: "See published starting prices for whole-home filtration, softening, well-water treatment, and drinking-water reverse osmosis in Western North Carolina.",
    heading: "Systems Built for Your Home's Water",
    intro: "Published starting prices, licensed installation, and recommendations based on your city or well water.",
  },
  "/service-areas": {
    title: "Water Treatment Service Areas | Asheville Water Specialists",
    description: "Water filtration, softener, reverse osmosis, and well-water treatment across Asheville and Western North Carolina.",
    heading: "Water Treatment Across Western North Carolina",
    intro: "Serving Asheville, Hendersonville, Weaverville, Arden, Fletcher, Black Mountain, Candler, and nearby communities.",
  },
  "/about": {
    title: "About Asheville Water Specialists | Local Water Treatment Experts",
    description: "Meet Asheville Water Specialists, a locally owned Western North Carolina water treatment company focused on testing first and honest recommendations.",
    heading: "Local Water Expertise. Honest Recommendations.",
    intro: "We test first, explain the results in plain English, and recommend only the treatment your home actually needs.",
  },
  "/resources": {
    title: "Water Treatment Resources | Asheville Water Specialists",
    description: "Helpful guides about hard water, chlorine, well-water problems, reverse osmosis, iron, sulfur, and water filtration in Western North Carolina.",
    heading: "Water Treatment Resources",
    intro: "Clear answers to common Asheville-area water questions, from hard-water scale to private-well treatment.",
  },
  "/contact": {
    title: "Get a Free Water Report | Asheville Water Specialists",
    description: "Request a free personalized water report from Asheville Water Specialists. Get clear next steps with no pressure or obligation.",
    heading: "Get Your Free Water Report",
    intro: "Tell us about your water and we will help you understand what it needs before recommending equipment.",
  },
};

// Expand the high-value content clusters so each city, product, and resource URL
// receives a route-specific HTML fallback during the static build.
const citySource = fs.readFileSync(path.join(root, "src/data/cities.ts"), "utf8");
for (const slug of [...citySource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])) {
  const city = slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  routes[`/service-areas/${slug}`] = {
    title: `Water Filtration & Softening in ${city}, NC | Asheville Water Specialists`,
    description: `Water filtration, softener, reverse osmosis, and well-water treatment for ${city}, NC homes. Free personalized water report.`,
    heading: `Water Filtration & Softening in ${city}, NC`,
    intro: `Get a free water report for your ${city} home. We test city or well water, explain the results, and recommend only the treatment your home needs.`,
  };
}
const siteSource = fs.readFileSync(path.join(root, "src/data/site.ts"), "utf8");
for (const slug of [...siteSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])) {
  if (slug === "") continue;
  routes[`/products/${slug}`] = {
    title: `${slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())} | Asheville Water Specialists`,
    description: "Explore a water treatment system with published pricing, clear specifications, and licensed Asheville-area installation.",
    heading: slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    intro: "See what this system treats, who it is for, what installation includes, and whether it fits your home's water.",
  };
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

for (const [route, page] of Object.entries(routes)) {
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="https://ashevillewaterspecialists.com${route}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="https://ashevillewaterspecialists.com${route}" />`)
    .replace('<div id="root"></div>', `<div id="root"><main><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.intro)}</p><p>Asheville Water Specialists serves homeowners throughout Western North Carolina with water filtration, softening, reverse osmosis, and well-water treatment.</p></main></div>`);
  const target = path.join(dist, route === "/" ? "" : route.slice(1));
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, "index.html"), html);
}

console.log(`Prerendered ${Object.keys(routes).length} SEO routes.`);
