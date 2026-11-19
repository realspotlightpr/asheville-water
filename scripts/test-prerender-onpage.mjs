import assert from "node:assert/strict";
import fs from "node:fs";
import { readSeoSiteData } from "./seo-site-data.mjs";

const { products, phoneHref } = readSeoSiteData(fs.readFileSync("src/data/site.ts", "utf8"));
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const read = (route) => fs.readFileSync(`dist/${route ? `${route}/` : ""}index.html`, "utf8");
for (const product of products) {
  const html = read(`products/${product.slug}`);
  assert.ok(html.includes(`<h1>${escape(product.name)}</h1>`), product.slug);
  assert.ok(html.includes(`<title>${escape(product.name)} | Asheville Water Specialists</title>`), product.slug);
  assert.ok(html.includes(`<p>${escape(product.blurb)}</p>`), product.slug);
  assert.ok(html.includes(`content="${escape(product.blurb)}"`), product.slug);
  assert.ok(html.includes('href="/contact/"'), product.slug);
  assert.ok(html.includes(`href="${phoneHref}"`), product.slug);
  assert.ok(!/\$[0-9]/.test(html), `Hidden price leaked: ${product.slug}`);
}
for (const route of ["", "services", "products"]) {
  const html = read(route);
  for (const product of products) assert.ok(html.includes(`href="/products/${product.slug}/"`), `${route}: ${product.slug}`);
}
for (const route of ["", "services", "products", "contact", "service-areas", "service-areas/asheville", "service-areas/hendersonville"]) {
  const html = read(route);
  assert.ok(html.includes('href="/contact/"'), route);
  assert.ok(html.includes(`href="${phoneHref}"`), route);
  for (const [, href] of html.matchAll(/<a href="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    assert.ok(fs.existsSync(`dist${href.endsWith("/") ? href : `${href}/`}index.html`), `Broken target: ${href}`);
  }
}
console.log(`Validated ${products.length} product names, blurbs, metadata, escaped text, hidden prices, and key HTML links.`);
