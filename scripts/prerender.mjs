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
    description: "Review how Asheville Water Specialists collects, uses, secures, and limits sharing of personal and SMS opt-in information.",
    heading: "Privacy Policy",
    intro: "How Asheville Water Specialists collects, uses, and protects information.",
    sections: [
      { heading: "Information collected and how it is used", paragraphs: ["We collect information you provide, including your name, email address, mobile number, service location, water concerns, messages, appointment details, and consent preferences. We use it to respond to inquiries, prepare quotes, schedule appointments, provide services, send requested communications, maintain records, secure the website, and comply with law."] },
      { heading: "SMS opt-in and mobile information — no sharing", paragraphs: ["If you opt in to SMS, we may send messages about your inquiry, quotes, appointments, reminders, service updates, support, and follow-up. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance.", "We do not sell, rent, share, or disclose mobile numbers, SMS opt-in data, or SMS consent records to third parties or affiliates for their marketing or promotional purposes. SMS opt-in data and consent are not shared with third parties for marketing. Limited information may be provided to service providers solely to deliver and support the messaging program."] },
      { heading: "Cookies, security, and your rights", paragraphs: ["The site uses necessary storage for privacy choices, optional GTranslate with functional consent, and Meta Pixel with analytics consent. We use reasonable administrative, technical, and organizational safeguards, but no electronic system is completely secure.", "You may request access, correction, or deletion where applicable, update your contact information, withdraw SMS consent by replying STOP, or change cookie choices through Cookie Settings. Contact contact@ashevillewaterspecialists.com or (828) 903-8433 for assistance."] },
    ],
  },
  "/terms-of-service": {
    title: "Terms of Service | Asheville Water Specialists",
    description: "Review website and SMS terms for Asheville Water Specialists, including message frequency, rates, STOP and HELP instructions, and support contacts.",
    heading: "Terms of Service",
    intro: "Terms for using this website, requesting service, and participating in our SMS program.",
    sections: [
      { heading: "SMS Terms of Service", paragraphs: ["The Asheville Water Specialists SMS program sends informational and transactional messages about consultation requests, quotes, scheduling, appointment reminders, service or installation updates, customer support, and follow-up. Message frequency varies. SMS consent is not a condition of purchase.", "You must be at least 18 years old and authorized to use the mobile number you provide. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.", "Reply STOP to any message to opt out. We may send one final opt-out confirmation. Reply HELP for assistance, email contact@ashevillewaterspecialists.com, or call (828) 903-8433. See our Privacy Policy at https://ashevillewaterspecialists.com/privacy-policy."] },
      { heading: "Website and service requests", paragraphs: ["Website content is general educational information and is not medical, laboratory, engineering, legal, code, or property-specific plumbing advice. A website request is not a final quote, guaranteed appointment, or service contract. Separate written project documents govern estimates, installations, warranties, maintenance, and payment terms."] },
    ],
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
const productsSource = siteSource.match(/export const products[^=]*= \[([\s\S]*?)\n\];/)?.[1] || "";
for (const slug of [...productsSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])) {
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
    const body = block
      .replace(/^## .+$/m, "")
      .replace(/^\*\*(?:URL|Slug|Title tag|Meta description|H1|Primary query|Query|Schema|Internal links|CTA|Production note):\*\*.*$/gm, "")
      .trim();
    const sections = body
      .split(/(?=^### )/m)
      .map((chunk) => ({
        heading: chunk.match(/^### (.+)$/m)?.[1]?.trim() || "Overview",
        paragraphs: chunk
          .replace(/^### .+$/m, "")
          .split(/\n\s*\n/)
          .map((paragraph) => paragraph.replace(/^[-*]\s+/gm, "").trim())
          .filter((paragraph) => paragraph && paragraph !== "---"),
      }))
      .filter((section) => section.paragraphs.length);
    routes[route] = { title, description, heading, intro: firstParagraph, sections };
  }
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

for (const [route, page] of Object.entries(routes)) {
  const canonicalPath = route === "/" ? "/" : `${route.replace(/\/$/, "")}/`;
  const canonicalUrl = `https://ashevillewaterspecialists.com${canonicalPath}`;
  const staticSections = page.sections?.map((section) => `<section><h2>${escapeHtml(section.heading)}</h2>${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</section>`).join("") || "";
  const staticBody = `<div id="root"><main><h1>${escapeHtml(page.heading)}</h1><p>${escapeHtml(page.intro)}</p>${staticSections}<p>Asheville Water Specialists serves homeowners throughout Western North Carolina with water filtration, softening, reverse osmosis, and well-water treatment.</p></main></div>`;
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${escapeHtml(page.title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${escapeHtml(page.description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace('<div id="root"></div>', staticBody);
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
    const sitemapPath = route === "/" ? "/" : `${route.replace(/\/$/, "")}/`;
    return `  <url><loc>https://ashevillewaterspecialists.com${sitemapPath}</loc><lastmod>${lastModified}</lastmod><priority>${priority}</priority></url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemap);
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

console.log(`Prerendered ${Object.keys(routes).length} SEO routes and generated sitemap.xml.`);
