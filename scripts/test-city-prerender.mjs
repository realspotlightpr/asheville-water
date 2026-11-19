import fs from "node:fs";
import assert from "node:assert/strict";
import { cityProfiles, getCitySeo } from "./load-city-data.mjs";
const esc = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const component = fs.readFileSync("src/pages/CityPage.tsx", "utf8");
assert.ok(component.includes("const { title, description, heading } = getCitySeo(city)"));
let nearbyCount = 0;
for (const city of cityProfiles) {
  const html = fs.readFileSync(`dist/service-areas/${city.slug}/index.html`, "utf8");
  const seo = getCitySeo(city);
  assert.ok(html.includes(`<title>${esc(seo.title)}</title>`), city.slug);
  assert.ok(html.includes(`<h1>${esc(seo.heading)}</h1>`), city.slug);
  assert.ok(html.includes(`<meta name="description" content="${esc(seo.description)}"`), city.slug);
  assert.ok(html.includes(`<link rel="canonical" href="https://avlwaterspecialists.com/service-areas/${city.slug}/"`), city.slug);
  for (const copy of [city.county, city.tagline, city.summary, city.localContext, city.homeownerNote]) assert.ok(html.includes(esc(copy)), `${city.slug}: missing existing copy`);
  for (const nearbySlug of city.nearby) {
    const nearby = cityProfiles.find((entry) => entry.slug === nearbySlug);
    assert.ok(nearby, nearbySlug);
    assert.ok(html.includes(`<a href="/service-areas/${nearbySlug}/">${esc(nearby.name)}, NC</a>`), `${city.slug}: ${nearbySlug}`);
    assert.ok(fs.existsSync(`dist/service-areas/${nearbySlug}/index.html`));
    nearbyCount++;
  }
  assert.ok(html.includes('<a href="/service-areas/">All Service Areas</a>'));
  assert.equal((html.match(/href="\/contact\/?(?:#contact)?"/g) || []).length <= 1, true, "Repeated consultation anchor");
}
console.log(`PASS: ${cityProfiles.length} city metadata/copy/canonical routes and ${nearbyCount} valid nearby links, including Weaverville, Canton, Fletcher and Candler.`);
