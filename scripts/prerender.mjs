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
    title: "Home Water Filtration Systems | Asheville Water Specialists",
    description: "Compare whole-home filtration, softening, well-water treatment, and drinking-water reverse osmosis systems for Western North Carolina homes.",
    heading: "Systems Built for Your Home's Water",
    intro: "Licensed installation and clear recommendations based on your city or well water.",
  },
  "/services": {
    title: "Water Filtration Services in Asheville, NC | Asheville Water Specialists",
    description: "Whole-home filtration, water softeners, reverse osmosis, carbon filtration, and well-water treatment in Asheville and Western NC. Book a free consultation.",
    heading: "Water Filtration & Treatment Services in Asheville, NC",
    intro: "Explore professional water treatment services selected around your water source, household demand, plumbing, and water-quality goals.",
    sections: [
      {
        heading: "Start With Your Water, Not a Piece of Equipment",
        paragraphs: [
          "Asheville homes can have very different water concerns depending on the source, neighborhood, plumbing, and household demand. We listen, test, explain the results, and recommend only the treatment that addresses your priorities.",
          "Whole-home treatment is designed around peak flow, bathrooms, family size, available installation space, and the maintenance each component requires. The result should solve the measured problem without unnecessary equipment or pressure loss.",
        ],
      },
      {
        heading: "Whole-Home Filtration, Softening, and Drinking Water",
        paragraphs: [
          "Whole-home filtration can address sediment, chlorine, unwanted tastes, odors, and other water-quality concerns throughout the house. Water softeners target hardness minerals that create scale and spotting. Under-sink reverse osmosis focuses on high-quality drinking and cooking water.",
          "Private-well treatment may require separate stages for iron, sulfur, manganese, sediment, acidity, or microbial concerns. Those components should be selected from representative testing and arranged in the correct sequence for the home’s flow requirements.",
        ],
      },
      {
        heading: "A Clear Path to Better Water",
        paragraphs: [
          "Tell us what you notice and whether the home uses municipal water or a private well. We evaluate the water and installation conditions, explain what the findings mean, and review practical options before any installation decision.",
          "Asheville Water Specialists provides licensed North Carolina plumbing installation, clear maintenance guidance, written warranty information, and a free consultation without a high-pressure sales process.",
        ],
      },
    ],
  },
  "/service-areas": {
    title: "Water Treatment Service Areas | Asheville Water Specialists",
    description: "Water filtration, softener, reverse osmosis, and well-water treatment across Asheville and Western North Carolina.",
    heading: "Water Treatment Across Western North Carolina",
    intro: "Serving Asheville, Hendersonville, Weaverville, Arden, Fletcher, Black Mountain, Candler, and nearby communities.",
    sections: [
      {
        heading: "City and Well-Water Service Across Western North Carolina",
        paragraphs: [
          "Asheville Water Specialists serves homes throughout a 35-mile radius of downtown Asheville. The region includes municipal systems, private wells, historic houses, new construction, mountain properties, and rural communities, so treatment must be selected for the individual property.",
          "Our service area includes Asheville, Hendersonville, Weaverville, Arden, Fletcher, Black Mountain, Candler, Canton, Brevard, Waynesville, and Mills River. Service availability depends on the project location and installation scope.",
        ],
      },
      {
        heading: "Testing-First Water Treatment for Each Home",
        paragraphs: [
          "We evaluate water source, test results, household demand, plumbing, available space, and the problems the homeowner wants to solve before recommending a system. That may lead to whole-home filtration, softening, reverse osmosis, private-well treatment, or a combination designed to work together.",
          "A free consultation is the best way to confirm whether a property is within the service radius and identify the most useful next step for its water.",
        ],
      },
    ],
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
    title: "Water Testing & Filtration Guides | Asheville, NC",
    description: "Get clear answers about Asheville water testing, filtration, softeners, PFAS, reverse osmosis, private wells, system costs, and maintenance.",
    heading: "Asheville Water Testing & Filtration Guides",
    intro: "Straight answers about city water, private wells, filtration, softeners, and reverse osmosis in Western North Carolina.",
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
      { heading: "Cookies, security, and your rights", paragraphs: ["The site uses necessary storage for privacy choices, optional GTranslate with functional consent, and Meta Pixel with analytics consent. We use reasonable administrative, technical, and organizational safeguards, but no electronic system is completely secure.", "You may request access, correction, or deletion where applicable, update your contact information, withdraw SMS consent by replying STOP, or change cookie choices through Cookie Settings. Contact contact@avlwaterspecialists.com or (828) 551-0885 for assistance."] },
    ],
  },
  "/terms-of-service": {
    title: "Terms of Service | Asheville Water Specialists",
    description: "Review website and SMS terms for Asheville Water Specialists, including message frequency, rates, STOP and HELP instructions, and support contacts.",
    heading: "Terms of Service",
    intro: "Terms for using this website, requesting service, and participating in our SMS program.",
    sections: [
      { heading: "SMS Terms of Service", paragraphs: ["The Asheville Water Specialists SMS program sends informational and transactional messages about consultation requests, quotes, scheduling, appointment reminders, service or installation updates, customer support, and follow-up. Message frequency varies. SMS consent is not a condition of purchase.", "You must be at least 18 years old and authorized to use the mobile number you provide. Message and data rates may apply. Carriers are not liable for delayed or undelivered messages.", "Reply STOP to any message to opt out. We may send one final opt-out confirmation. Reply HELP for assistance, email contact@avlwaterspecialists.com, or call (828) 551-0885. See our Privacy Policy at https://avlwaterspecialists.com/privacy-policy."] },
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
const cityProfiles = [...citySource.matchAll(/\{\s*slug:\s*"([^"]+)"([\s\S]*?)\n\s*\},?/g)].map((match) => {
  const field = (name) => match[2].match(new RegExp(`${name}:\\s*"([^"]+)"`))?.[1] || "";
  return {
    slug: match[1],
    name: field("name"),
    county: field("county"),
    tagline: field("tagline"),
    summary: field("summary"),
    localContext: field("localContext"),
    homeownerNote: field("homeownerNote"),
  };
});
const citySlugs = cityProfiles.map((profile) => profile.slug);
const citySeoOverrides = {
  asheville: {
    title: "Asheville Water Treatment & Filtration | Local Experts",
    description: "Asheville water treatment, filtration, softeners, reverse osmosis, and well-water solutions. Get a testing-first plan and licensed NC installation.",
    heading: "Asheville Water Treatment & Filtration",
  },
  hendersonville: {
    title: "Water Filtration & Softeners in Hendersonville, NC",
    description: "Water filtration and water softeners for Hendersonville, NC homes. Compare testing-first city and well-water solutions with licensed installation.",
    heading: "Water Filtration & Softeners in Hendersonville, NC",
  },
  weaverville: {
    title: "Water Filtration & Softeners in Weaverville, NC",
    description: "Water filtration, softeners, reverse osmosis, and private-well treatment in Weaverville, NC. Start with a local, testing-first water plan.",
    heading: "Water Filtration & Softeners in Weaverville, NC",
  },
  arden: {
    title: "Arden Water Filtration & Softener Installation | NC",
    description: "Arden water filtration, water softeners, reverse osmosis, and well-water treatment sized for your home. Get a local testing-first recommendation.",
    heading: "Arden Water Filtration & Softener Installation",
  },
};
for (const slug of citySlugs) {
  const profile = cityProfiles.find((entry) => entry.slug === slug);
  const city = profile?.name || slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  const override = citySeoOverrides[slug];
  routes[`/service-areas/${slug}`] = {
    title: override?.title ?? `Water Filtration & Softening in ${city}, NC | Asheville Water Specialists`,
    description: override?.description ?? `Water filtration, softener, reverse osmosis, and well-water treatment for ${city}, NC homes. Free personalized water report.`,
    heading: override?.heading ?? `Water Filtration & Softening in ${city}, NC`,
    intro: `Get a free water report for your ${city} home. We test city or well water, explain the results, and recommend only the treatment your home needs.`,
    sections: [
      {
        heading: `Water Solutions Built Around Your ${city} Home`,
        paragraphs: [profile?.summary, profile?.localContext, profile?.homeownerNote].filter(Boolean),
      },
      {
        heading: `What We Evaluate in ${city}`,
        paragraphs: [
          `Before recommending equipment for a ${city} home, we confirm the water source, measured concerns, household size, peak flow, existing plumbing, installation space, and the difference between whole-home protection and point-of-use drinking-water goals.`,
          "Water softeners address hardness minerals and scale. Filtration can target sediment, chlorine, taste, odor, iron, sulfur, or other measured conditions. Reverse osmosis focuses on drinking and cooking water. Each technology has a specific job and should be selected accordingly.",
        ],
      },
      {
        heading: `Licensed Water Treatment Installation Near ${city}`,
        paragraphs: [
          `Asheville Water Specialists provides testing-first recommendations and licensed North Carolina plumbing installation for qualifying ${city} properties within the Western North Carolina service area.`,
          "The consultation explains what a proposed system treats, what it does not treat, how it is maintained, and how the components work together before the homeowner decides.",
        ],
      },
    ],
  };
}
const siteSource = fs.readFileSync(path.join(root, "src/data/site.ts"), "utf8");
const productsSource = siteSource.match(/export const products[^=]*= \[([\s\S]*?)\n\];/)?.[1] || "";
for (const slug of [...productsSource.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1])) {
  if (slug === "" || citySlugs.includes(slug)) continue;
  routes[`/products/${slug}`] = {
    title: `${slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase())} | Asheville Water Specialists`,
    description: "Explore a water treatment system with clear specifications and licensed Asheville-area installation.",
    heading: slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
    intro: "See what this system treats, who it is for, what installation includes, and whether it fits your home's water.",
  };
}

const articleSource = fs.readFileSync(path.join(root, "src/data/articles.ts"), "utf8");
const articlePattern = /\{\s*slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)",\s*readTime:\s*"[^"]+",\s*answer:\s*"([^"]+)"/g;
for (const [, slug, title, description, answer] of articleSource.matchAll(articlePattern)) {
  routes[`/resources/${slug}`] = {
    title,
    description,
    heading: title,
    intro: answer,
  };
}

const resourceTopicRoutes = {
  "/resources/topics/well-water": {
    title: "Well Water Guides | Asheville Water Specialists",
    description: "Western North Carolina well-water guides covering testing, bacteria, iron, sulfur odor, sediment, source protection, and treatment planning.",
    heading: "Private Well Water Testing and Treatment",
    intro: "Start with source protection and representative testing, then match treatment to the measured condition and the home's flow requirements.",
  },
  "/resources/topics/water-softeners": {
    title: "Water Softener Guides | Asheville Water Specialists",
    description: "Learn about water-softener installation, hard-water treatment, sizing, salt, brine, regeneration, maintenance, and troubleshooting.",
    heading: "Water Softeners and Hard-Water Solutions",
    intro: "Correct softener sizing depends on measured hardness, household demand, peak flow, regeneration settings, and incoming iron or sediment.",
  },
  "/resources/topics/reverse-osmosis": {
    title: "Reverse Osmosis Guides | Asheville Water Specialists",
    description: "Reverse-osmosis guides covering installation, membranes, TDS, storage tanks, air-gap faucets, maintenance, and certification.",
    heading: "Reverse Osmosis Drinking-Water Systems",
    intro: "RO performance depends on feed-water quality, pressure, pretreatment, membrane condition, storage, drainage, and timely maintenance.",
  },
  "/resources/topics/sediment-iron-filtration": {
    title: "Water Filtration Guides | Asheville Water Specialists",
    description: "Compare sediment, iron, carbon, and whole-home filtration based on water chemistry, flow, pressure loss, and treatment goals.",
    heading: "Sediment, Iron, Carbon, and Whole-Home Filtration",
    intro: "Identify whether a concern is particulate, dissolved, aesthetic, microbiological, or health-related before selecting filtration.",
  },
  "/resources/topics/contaminants-testing": {
    title: "Water Testing Guides | Asheville Water Specialists",
    description: "Evidence-based guides to PFAS, lead, arsenic, nitrate, bacteria, certified laboratories, sample collection, and treatment verification.",
    heading: "Water Contaminants, Laboratory Testing, and Certified Filters",
    intro: "Use the right laboratory method, sampling procedure, certification claim, and follow-up test for the contaminant being evaluated.",
  },
  "/resources/topics/uv-disinfection": {
    title: "UV Disinfection Guides | Asheville Water Specialists",
    description: "UV water-disinfection guides covering bacteria testing, pretreatment, dose, lamp and sleeve maintenance, alarms, and verification.",
    heading: "UV Disinfection and Microbiological Water Safety",
    intro: "UV requires adequate pretreatment, validated flow and dose, scheduled maintenance, and appropriate water testing.",
  },
  "/resources/library": {
    title: "All Water Treatment Guides | Asheville Water Specialists",
    description: "Browse the complete Asheville Water Specialists library covering water testing, filtration, softeners, reverse osmosis, private wells, installation, and maintenance.",
    heading: "Complete Water Guide Library",
    intro: "Browse every published homeowner guide or begin with one of the focused water-education topic hubs.",
  },
};
Object.assign(routes, resourceTopicRoutes);

// Publish the reviewed ranking-page batch from versioned Markdown sources.
// The service-area hub is already represented above, so it is not duplicated.
const rankingContentDir = path.join(root, "src/content/ranking-pages");
const consolidatedRankingRoutes = new Set([
  "/diagnose-softener-salt-bridge",
  "/softener-brine-tank-full",
  "/water-softener-leak",
  "/softener-discharge-septic",
  "/organize-water-treatment-records",
  "/crawlspace-water-treatment",
  "/whole-house-filter-pressure-drop",
  "/vacation-rental-water-treatment",
  "/orange-brown-water-stains",
  "/questions-water-treatment-installer",
  "/point-entry-vs-point-use-treatment",
]);
for (const file of fs.readdirSync(rankingContentDir).filter((name) => name.endsWith(".md"))) {
  const source = fs.readFileSync(path.join(rankingContentDir, file), "utf8").replaceAll("\r", "");
  const blocks = source.split(/(?=^## \d+\. )/m).filter((block) => /^## \d+\./.test(block));
  for (const block of blocks) {
    const draftTitle = block.match(/^## \d+\. (.+)$/m)?.[1]?.trim();
    const slug = block.match(/\*\*(?:URL|Slug):\*\*\s*`?([^`\s]+)`?/)?.[1]?.replace(/^\/+|\/+$/g, "");
    if (!draftTitle || !slug) continue;
    const route = `/${slug}`;
    if (routes[route] || consolidatedRankingRoutes.has(route)) continue;
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
  const canonicalUrl = `https://avlwaterspecialists.com${canonicalPath}`;
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
// Keep sitemap dates meaningful: only refreshed URLs receive today's date.
// A global build should not falsely tell crawlers that every article changed.
const defaultLastModified = "2026-09-28";
const updatedRoutes = new Set([
  "/",
  "/services",
  "/resources",
  "/service-areas/hendersonville",
  "/water-filtration-systems-asheville-nc",
  "/water-softener-installation-asheville-nc",
  "/whole-home-water-filtration-asheville-nc",
  "/well-water-treatment-asheville-nc",
  "/reverse-osmosis-installation-asheville-nc",
  "/troubleshooting-uv-system-wnc",
  "/troubleshooting-spin-down-filter-wnc",
  "/reverse-osmosis-tds-reading",
  "/reverse-osmosis-air-gap-faucet",
  "/water-filter-before-tankless-heater",
  "/spring-vs-drilled-well-water",
  "/resources/pfas-in-wnc-water",
  ...Object.keys(resourceTopicRoutes),
]);
const refreshedOn = "2026-10-04";
const sitemapUrls = [...new Set(Object.keys(routes))]
  .sort((a, b) => a.localeCompare(b))
  .map((route) => {
    const priority = routePriorities[route] ?? (route.startsWith("/service-areas/") ? "0.8" : "0.7");
    const sitemapPath = route === "/" ? "/" : `${route.replace(/\/$/, "")}/`;
    const lastModified = updatedRoutes.has(route) ? refreshedOn : defaultLastModified;
    return `  <url><loc>https://avlwaterspecialists.com${sitemapPath}</loc><lastmod>${lastModified}</lastmod><priority>${priority}</priority></url>`;
  })
  .join("\n");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "public/sitemap.xml"), sitemap);
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

console.log(`Prerendered ${Object.keys(routes).length} SEO routes and generated sitemap.xml.`);
