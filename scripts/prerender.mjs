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
  "/services": {
    title: "Water Filtration Services in Asheville, NC | Asheville Water Specialists",
    description: "Whole-home filtration, water softeners, reverse osmosis, carbon filtration, and well-water treatment in Asheville and Western NC. Book a free consultation.",
    heading: "Water Filtration & Treatment Services in Asheville, NC",
    intro: "Explore professional water treatment services selected around your water source, household demand, plumbing, and water-quality goals.",
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
  "/gallery": {
    title: "Water Treatment Installation Gallery | Asheville Water Specialists",
    description: "See whole-home water filtration, softener, reverse osmosis, and well-water treatment installations completed across Western North Carolina.",
    heading: "Water Treatment Installation Gallery",
    intro: "See real residential water filtration and treatment projects completed by Asheville Water Specialists.",
  },
  "/resources": {
    title: "Water Treatment Resources | Asheville Water Specialists",
    description: "Helpful guides about hard water, chlorine, well-water problems, reverse osmosis, iron, sulfur, and water filtration in Western North Carolina.",
    heading: "Water Treatment Resources",
    intro: "Clear answers to common Asheville-area water questions, from hard-water scale to private-well treatment.",
  },
  "/contact": {
    title: "Free Water Treatment Consultation | Asheville Water Specialists",
    description: "Book a free water treatment consultation in Asheville or Western North Carolina. Get clear recommendations with no pressure or obligation.",
    heading: "Get Your Free Water Treatment Consultation",
    intro: "Tell us about your water and we will help you understand what it needs before recommending equipment.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Asheville Water Specialists",
    description: "Read the Asheville Water Specialists privacy policy.",
    heading: "Privacy Policy",
    intro: "How Asheville Water Specialists collects, uses, and protects information.",
  },
  "/terms-of-service": {
    title: "Terms of Website Use | Asheville Water Specialists",
    description: "Read the Asheville Water Specialists website terms, educational-content limitations, and acceptable-use rules.",
    heading: "Terms of Website Use",
    intro: "Terms governing use of the Asheville Water Specialists website and services.",
  },
  "/cookie-policy": {
    title: "Cookie Policy | Asheville Water Specialists",
    description: "Review necessary and optional website storage, functional services, and cookie preference controls.",
    heading: "Cookie Policy",
    intro: "Understand and control cookies, local storage, consultation forms, and translation services.",
  },
  "/accessibility": {
    title: "Accessibility Statement | Asheville Water Specialists",
    description: "Read our website accessibility commitment and learn how to request assistance or report a barrier.",
    heading: "Accessibility Statement",
    intro: "Our commitment to accessible information and alternative ways to reach our team.",
  },
  "/warranty": {
    title: "Water Treatment System Warranty | Asheville Water Specialists",
    description: "Review warranty information for Asheville Water Specialists filtration, softening, and reverse osmosis systems.",
    heading: "Water Treatment System Warranty",
    intro: "Review coverage information for water treatment systems installed by Asheville Water Specialists.",
  },
};

// Expand the high-value content clusters so each city, product, and resource URL
// receives a route-specific HTML fallback during the static build.
const citySource = fs.readFileSync(path.join(root, "src/data/cities.ts"), "utf8");
const citySlugs = [...citySource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
for (const slug of citySlugs) {
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
  if (slug === "" || citySlugs.includes(slug)) continue;
  routes[`/products/${slug}`] = {
    title: `${slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())} | Asheville Water Specialists`,
    description: "Explore a water treatment system with published pricing, clear specifications, and licensed Asheville-area installation.",
    heading: slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    intro: "See what this system treats, who it is for, what installation includes, and whether it fits your home's water.",
  };
}

const articleSource = fs.readFileSync(path.join(root, "src/data/articles.ts"), "utf8");
for (const slug of [...articleSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])) {
  const heading = slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  routes[`/resources/${slug}`] = {
    title: `${heading} | Asheville Water Specialists`,
    description: `Read local guidance about ${heading.toLowerCase()} from Asheville Water Specialists.`,
    heading,
    intro: "Practical water-quality guidance for Asheville and Western North Carolina homeowners.",
  };
}

// Publish the reviewed ranking-page batch from versioned Markdown sources.
// The service-area hub is already represented above, so it is not duplicated.
const rankingContentDir = path.join(root, "src/content/ranking-pages");
for (const file of fs.readdirSync(rankingContentDir).filter((name) => name.endsWith(".md"))) {
  const source = fs.readFileSync(path.join(rankingContentDir, file), "utf8").replaceAll("\r", "");
  const blocks = source.split(/(?=^## \d+\. )/m).filter((block) => /^## \d+\./.test(block));
  for (const block of blocks) {
    const draftTitle = block.match(/^## \d+\. (.+)$/m)?.[1]?.trim();
    const slug = block.match(/\*\*(?:URL|Slug):\*\*\s*`?([^`\s]+)`?/)?.[1]?.replace(/^\/+|\/+$/g, "");
    if (!draftTitle || !slug) continue;
    const route = `/${slug}`;
    if (routes[route]) continue;
    const heading = block.match(/\*\*H1:\*\*\s*(.+)$/m)?.[1]?.trim() || draftTitle;
    const title = block.match(/\*\*Title tag:\*\*\s*(.+)$/m)?.[1]?.trim() || `${draftTitle} | Asheville Water Specialists`;
    const firstParagraph = block.split(/\n\s*\n/).map((part) => part.trim()).find((part) => part && !part.startsWith("#") && !part.startsWith("**")) || `Practical guidance about ${draftTitle.toLowerCase()}.`;
    const description = block.match(/\*\*Meta description:\*\*\s*(.+)$/m)?.[1]?.trim() || `${firstParagraph.slice(0, 150).replace(/[.,;:]?$/, "")}…`;
    routes[route] = { title, description, heading, intro: firstParagraph };
  }
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

const routePriorities = {
  "/": "1.0",
  "/services": "0.9",
  "/service-areas": "0.9",
  "/contact": "0.9",
  "/gallery": "0.8",
  "/resources": "0.8",
  "/products": "0.7",
};
const lastModified = new Date().toISOString().slice(0, 10);
const sitemapUrls = [...new Set(Object.keys(routes))]
  .sort((a, b) => a.localeCompare(b))
  .map((route) => {
    const priority = routePriorities[route] ?? (route.startsWith("/service-areas/") ? "0.8" : "0.7");
    return `  <url><loc>https://ashevillewaterspecialists.com${route}</loc><lastmod>${lastModified}</lastmod><priority>${priority}</priority></url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemap);
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

console.log(`Prerendered ${Object.keys(routes).length} SEO routes and generated sitemap.xml.`);
