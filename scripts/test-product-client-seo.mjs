import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import * as jsxRuntime from "react/jsx-runtime";
import { readSeoSiteData } from "./seo-site-data.mjs";
import { productCatalogSeo, getProductSeo } from "./load-product-seo.mjs";

const { products } = readSeoSiteData(fs.readFileSync("src/data/site.ts", "utf8"));
const elements = new Map();
const document = {
  title: "stale title",
  head: {
    querySelector: (selector) => elements.get(selector),
    appendChild: (element) => {
      const selector = element.rel ? `link[rel="${element.rel}"]` : `meta[${element.attribute}="${element.key}"]`;
      elements.set(selector, element);
    },
  },
  createElement: () => ({ setAttribute(attribute, key) { this.attribute = attribute; this.key = key; } }),
  getElementById: () => null,
};
let slug = products[0].slug;
const noop = () => null;
function load(file, imports) {
  const { outputText } = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  vm.runInNewContext(outputText, { exports, document, require: (name) => {
    if (name === "react/jsx-runtime") return jsxRuntime;
    assert.ok(name in imports, `Unexpected import ${name}`);
    return imports[name];
  } });
  return exports;
}
const { Seo } = load("src/components/Seo.tsx", {
  react: { useEffect: (effect) => effect() }, "../data/seo": { siteUrl: "https://avlwaterspecialists.com" },
});
const imports = {
  "react-router-dom": { useParams: () => ({ slug }), Link: "a" },
  "../components/Seo": { Seo }, "../data/productSeo": { productCatalogSeo, getProductSeo },
  "../components/PageHeader": { PageHeader: noop }, "../components/CtaBand": { CtaBand: noop },
  "../components/Products": { Products: noop }, "./NotFound": { NotFound: noop },
  "../data/site": { products, business: {}, showPricing: false, addOns: [] },
};
const { ProductDetailPage } = load("src/pages/ProductDetailPage.tsx", imports);
const { ProductsPage } = load("src/pages/ProductsPage.tsx", imports);
function visit(node, callback) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) return node.forEach((child) => visit(child, callback));
  callback(node);
  visit(node.props?.children, callback);
}
function check(Page, expected) {
  let count = 0;
  visit(Page(), (node) => { if (node.type === Seo) { count++; Seo(node.props); } });
  assert.equal(count, 1);
  assert.equal(document.title, expected.title);
  assert.equal(elements.get('meta[name="description"]').content, expected.description);
  assert.equal(elements.get('link[rel="canonical"]').href, `https://avlwaterspecialists.com${expected.path}`);
  assert.equal(elements.get('meta[property="og:url"]').content, `https://avlwaterspecialists.com${expected.path}`);
  const html = fs.readFileSync(`dist${expected.path}index.html`, "utf8");
  const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  assert.ok(html.includes(`<title>${escape(expected.title)}</title>`));
  assert.ok(html.includes(`name="description" content="${escape(expected.description)}"`));
  assert.ok(html.includes(`rel="canonical" href="https://avlwaterspecialists.com${expected.path}"`));
}
// Execute actual page Seo effects sequentially against one head, simulating client navigation.
for (const product of products) {
  slug = product.slug;
  check(ProductDetailPage, getProductSeo(product));
  check(ProductsPage, productCatalogSeo);
}
const { Products } = load("src/components/Products.tsx", imports);
const links = [];
visit(Products({}), (node) => { if (node.type === "a") links.push(node.props); });
for (const product of products) assert.ok(links.some((link) => link.to === `/products/${product.slug}/` && link.children === product.name));
assert.equal(links.filter((link) => link.to === "/contact#contact").length, products.length);
console.log("PASS: 11 product → catalog metadata transitions, static parity, named trailing-slash links, unchanged consultation links (component-effect simulation).");
