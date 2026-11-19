import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
import * as jsxRuntime from "react/jsx-runtime";
import { serviceDecision, commercialGuideServiceLinks } from "./load-service-decision.mjs";
const escape = (s) => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
const html = fs.readFileSync("dist/services/index.html", "utf8");
for (const copy of [serviceDecision.heading, ...serviceDecision.paragraphs]) assert.ok(html.includes(escape(copy)));
assert.ok(html.includes('<title>Water Filtration Services in Asheville, NC | Asheville Water Specialists</title>'));
assert.ok(html.includes('rel="canonical" href="https://avlwaterspecialists.com/services/"'));
const noop = () => null;
let slug;
const pages = Object.keys(commercialGuideServiceLinks).concat('/water-softener-installation-asheville-nc/').map((path) => ({ slug: path, title: 'Guide', primaryQuery: 'water', number: 1, internalLinks: ['/contact/'], sections: [] }));
function load(file) {
  const imports = {
    "react/jsx-runtime": jsxRuntime,
    "../data/serviceDecision": { serviceDecision, commercialGuideServiceLinks },
    "react-router-dom": { Link: 'a', useParams: () => ({ slug }) },
    "../components/PageHeader": { PageHeader: noop }, "../components/CtaBand": { CtaBand: noop },
    "../components/Seo": { Seo: noop }, "../data/site": { business: {} },
    "../data/seo": { organizationSchema: {}, siteUrl: 'https://avlwaterspecialists.com' },
    "../data/rankingPages": { newRankingPages: pages }, "./NotFound": { NotFound: noop },
  };
  const { outputText } = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } });
  const exports = {};
  vm.runInNewContext(outputText, { exports, require: (name) => { assert.ok(name in imports); return imports[name]; } });
  return exports;
}
function visit(node, fn) {
  if (typeof node === 'string') { fn(node); return; }
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) return node.forEach((item) => visit(item, fn));
  fn(node); visit(node.props?.children, fn);
}
const { ServicesPage } = load('src/pages/ServicesPage.tsx');
const strings = [];
visit(ServicesPage(), (node) => { if (typeof node === 'string') strings.push(node); });
for (const copy of [serviceDecision.heading, ...serviceDecision.paragraphs]) assert.ok(strings.includes(copy));
const { RankingPage } = load('src/pages/RankingPage.tsx');
for (const page of pages) {
  slug = page.slug.replaceAll('/', '');
  const links = [];
  visit(RankingPage(), (node) => { if (node.type === 'a' && node.props.to === '/services/') links.push(node); });
  const link = commercialGuideServiceLinks[page.slug];
  assert.equal(links.length, link ? 1 : 0);
  if (link) {
    assert.ok(links[0].props.children.includes(link.label));
    const pageHtml = fs.readFileSync(`dist${page.slug}index.html`, 'utf8');
    assert.equal(pageHtml.split(`<a href="${link.href}">${link.label}</a>`).length - 1, 1);
  }
}
console.log('PASS: shared city/well decision copy, unchanged services title/canonical, exactly 3 named guide links in static and React output, unrelated guide unaffected.');
