import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "src", "content", "ranking-pages");

const issues = [
  ["hard-water", "Hard Water", "hardness in grains per gallon or mg/L as calcium carbonate", "scale, soap performance, fixture deposits, and appliance exposure", "ion-exchange softening or a clearly distinguished conditioning approach"],
  ["iron", "Iron in Well Water", "dissolved and total iron, pH, and oxidation state", "orange staining, metallic taste, particles, and treatment fouling", "oxidation and filtration, softening within limits, or source/plumbing correction"],
  ["manganese", "Manganese in Well Water", "dissolved and total manganese, pH, and competing iron", "dark staining, sediment, taste, and media loading", "chemistry-appropriate oxidation and filtration with verified operating limits"],
  ["sulfur-odor", "Sulfur Odor in Well Water", "hot-versus-cold odor pattern, hydrogen sulfide where appropriate, sulfate, and microbiological context", "rotten-egg odor, heater interactions, corrosion, and nuisance conditions", "source correction, heater service, aeration, oxidation, carbon, or other evidence-matched treatment"],
  ["low-ph", "Low-pH Well Water", "laboratory pH, alkalinity, hardness, metals, and corrosion indicators", "blue-green staining, pinhole leaks, metallic taste, and plumbing damage", "calcite or blended neutralization, chemical feed, or plumbing/source correction"],
  ["sediment", "Sediment in Household Water", "particle appearance and size, turbidity, source location, and plumbing distribution", "clogged aerators, appliance wear, visible particles, and pressure loss", "source repair, settling, spin-down separation, cartridge filtration, or backwashing filtration"],
  ["tannins", "Tannins in Well Water", "color after filtration, organic-carbon context, pH, iron, and seasonal behavior", "tea-colored water, staining, taste, and resin or membrane fouling", "anion exchange, oxidation, membrane treatment, or source-management options after testing"],
  ["nitrate", "Nitrate in Private Well Water", "certified laboratory nitrate result, sampling date, well condition, and land-use context", "health-related drinking-water risk that cannot be judged by taste or appearance", "source protection, point-of-use reverse osmosis or distillation with verified claims, and confirmatory testing"],
  ["coliform", "Coliform Bacteria in Well Water", "certified microbiological testing with correct sterile sampling and holding time", "a potential pathway or sanitation concern requiring prompt public-health guidance", "well inspection, corrective repair, disinfection, alternate water, and confirmation testing"],
  ["arsenic", "Arsenic in Well Water", "certified laboratory arsenic result and treatment-relevant water chemistry", "a health-related contaminant with no reliable taste, odor, or visual warning", "certified point-of-use or whole-home treatment selected for arsenic form and competing ions"],
  ["pfas", "PFAS in Drinking Water", "laboratory results for relevant PFAS compounds, source type, and current regulatory context", "long-lived contaminants requiring compound-specific claims and careful residual management", "certified activated carbon, ion exchange, or reverse osmosis selected for the tested compounds and application"],
  ["lead", "Lead at the Tap", "first-draw and flushed sampling designed around plumbing and service-line questions", "a health-related exposure that can vary by fixture, stagnation time, and corrosion conditions", "source-line or fixture replacement, corrosion-control coordination, and certified point-of-use filtration"],
  ["chlorine", "Chlorine Taste and Odor", "utility disinfectant information, free chlorine where useful, contact time, and fixture scope", "taste, odor, skin comfort, and carbon-media loading", "appropriately sized activated carbon with documented flow, capacity, and maintenance"],
  ["chloramine", "Chloramine in City Water", "utility disinfectant information, total chlorine where useful, flow, and contact-time requirements", "persistent disinfectant taste and specialized carbon loading", "catalytic carbon or another verified chloramine-reduction approach sized for service flow"],
  ["high-tds", "High Total Dissolved Solids", "laboratory chemistry plus conductivity or TDS readings interpreted in context", "taste, scaling, corrosion, and membrane loading without identifying individual constituents", "constituent-specific treatment, often point-of-use reverse osmosis when supported by testing"],
  ["fluoride", "Fluoride in Drinking Water", "utility reporting or certified laboratory fluoride results", "a dissolved ion requiring a treatment claim tied to concentration, capacity, and maintenance", "certified reverse osmosis, activated alumina, or distillation where appropriate"],
  ["copper", "Copper in Tap Water", "first-draw and flushed copper samples plus pH, alkalinity, and plumbing context", "blue-green staining, metallic taste, and potential corrosion exposure", "corrosion correction, flushing practices, fixture/plumbing work, or certified point-of-use treatment"],
  ["cloudy-water", "Cloudy Tap Water", "clearing behavior, hot-versus-cold pattern, turbidity, particles, pressure, and recent work", "entrained air, sediment, scale, plumbing debris, or a source change", "diagnosis-led flushing, plumbing correction, source service, or particle filtration"],
  ["salty-taste", "Salty-Tasting Water", "chloride, sodium, conductivity, source history, and softener operation", "taste changes, corrosion concerns, source intrusion, or regeneration problems", "source correction, softener repair, blending, or point-of-use membrane treatment based on results"],
  ["acidic-taste", "Metallic or Acidic Water Taste", "pH, alkalinity, metals, stagnation pattern, and hot-versus-cold comparison", "corrosion, fixtures, water heaters, source chemistry, or treatment interactions", "plumbing correction, neutralization, flushing, or targeted treatment after representative testing"],
];

const issueStages = [
  ["testing", "Testing", "how to test for", "Build a sampling plan that distinguishes the source, plumbing, hot water, and any existing treatment before interpreting a result."],
  ["treatment", "Treatment Options", "treatment options for", "Compare treatment only after the measured condition, required reduction, service scope, and operational limits are clear."],
  ["sizing", "System Sizing", "how to size treatment for", "Sizing must reconcile concentration, peak flow, daily demand, contact time, capacity, pressure loss, and regeneration or replacement frequency."],
  ["maintenance", "Treatment Maintenance", "maintenance for", "Maintenance should follow measured loading, manufacturer instructions, sanitation needs, consumable life, and evidence of breakthrough."],
  ["verification", "Post-Treatment Verification", "how to verify treatment for", "Verification repeats the decision-driving measurement at a representative tap under comparable operating conditions."],
];

const equipment = [
  ["whole-house-carbon", "Whole-House Carbon Filter", "chlorine or organic reduction", "media volume, service flow, contact time, pressure loss, backwash or cartridge format, and certified claims"],
  ["water-softener", "Water Softener", "hardness removal", "grain capacity, salt efficiency, peak flow, resin protection, regeneration settings, drainage, and bypass design"],
  ["reverse-osmosis", "Reverse Osmosis System", "point-of-use dissolved-contaminant reduction", "membrane claims, recovery, pressure, storage, drain connection, remineralization, and filter schedule"],
  ["iron-filter", "Iron Filter", "iron oxidation and filtration", "iron form and level, pH, oxidant demand, backwash flow, drain capacity, and media limits"],
  ["sulfur-filter", "Sulfur-Odor Filter", "hydrogen-sulfide or odor control", "odor source, concentration, oxidation method, contact time, ventilation, backwash, and maintenance"],
  ["ph-neutralizer", "pH Neutralizer", "acid-water correction", "pH, alkalinity, flow, media chemistry, added hardness, backwash, replenishment, and downstream effects"],
  ["sediment-filter", "Sediment Filter", "particle reduction", "particle size, turbidity, loading, micron rating, flow, pressure differential, cleaning, and disposal"],
  ["uv-system", "UV Water Disinfection System", "microorganism inactivation", "validated dose, flow control, UV transmittance, pretreatment, lamp and sleeve service, alarms, and power reliability"],
  ["well-pressure-tank", "Well Pressure Tank", "stable well-system pressure", "drawdown, pump cycling, pressure-switch settings, tank charge, flow demand, controls, and code requirements"],
  ["booster-pump", "Water Pressure Booster Pump", "household pressure improvement", "inlet pressure, target pressure, peak demand, controls, expansion, noise, electrical supply, and dry-run protection"],
  ["spin-down-filter", "Spin-Down Sediment Filter", "coarse-particle separation", "screen size, purge method, pressure rating, sediment load, clearances, freeze protection, and downstream filtration"],
  ["backwashing-filter", "Backwashing Media Filter", "automatic granular-media filtration", "service and backwash flow, drain capacity, bed expansion, valve programming, media life, and water chemistry"],
  ["cartridge-housing", "Whole-House Cartridge Housing", "replaceable cartridge filtration", "housing rating, cartridge dimensions, micron and media claims, peak flow, pressure drop, wrench access, and leak control"],
  ["leak-shutoff", "Automatic Water Leak Shutoff", "leak detection and automatic isolation", "sensor coverage, flow logic, valve size, power and backup, remote alerts, bypass, and emergency operation"],
  ["water-heater-anode", "Water-Heater Anode Rod", "tank corrosion protection", "heater model, anode material, clearance, odor interaction, electrical bonding, inspection, and manufacturer instructions"],
  ["softener-brine-tank", "Water-Softener Brine Tank", "regenerant storage and brine delivery", "salt type, refill setting, float safety, bridging, cleanliness, drain routing, and seasonal demand"],
  ["ro-storage-tank", "Reverse Osmosis Storage Tank", "pressurized point-of-use storage", "air charge, usable drawdown, membrane production, faucet demand, sanitation, fittings, and replacement condition"],
  ["treatment-bypass", "Water-Treatment Bypass Valve", "service isolation and emergency water routing", "valve labeling, cross-connection avoidance, pressure rating, accessibility, dead legs, and user instructions"],
  ["sampling-port", "Water Sampling Port", "repeatable before-and-after sampling", "location, materials, aerator-free outlet, sanitation, accessibility, labeling, and relationship to treatment stages"],
  ["flow-monitor", "Whole-House Water Flow Monitor", "usage, leak, and treatment-cycle monitoring", "meter accuracy, pipe compatibility, power, communications, shutoff logic, data retention, and normal backwash behavior"],
];

const lifecycle = [
  ["buying", "Buying Guide", "buying", "Define the job first, then compare validated performance, operating limits, ownership work, local serviceability, and total installed cost."],
  ["installation", "Installation Requirements", "installing", "Confirm plumbing, drain, electrical, structural, clearance, temperature, pressure, bypass, code, and startup requirements before equipment arrives."],
  ["troubleshooting", "Troubleshooting Guide", "troubleshooting", "Start with symptoms, readings, alarms, recent changes, and safe bypass options instead of changing several settings at once."],
  ["maintenance", "Maintenance Checklist", "maintaining", "Use measured condition and manufacturer criteria to schedule inspection, cleaning, sanitation, consumables, testing, and recordkeeping."],
  ["replacement", "Repair or Replacement", "replacing", "Compare repair scope, part availability, age, sanitation history, performance evidence, efficiency, warranty, and future service needs."],
];

const contexts = [
  ["new-construction", "a New-Construction Home", "construction sequencing, plumbing layout, equipment space, drains, electricity, source testing, startup, and future service access"],
  ["newly-purchased-home", "a Newly Purchased Home", "unknown records, inspection findings, representative testing, existing equipment, immediate repairs, and phased priorities"],
  ["older-home", "an Older Home", "service-line and fixture materials, restricted piping, pressure, water heaters, renovation history, and limited equipment space"],
  ["mountain-cabin", "a Mountain Cabin", "private-well variability, steep access, freezing, power outages, seasonal occupancy, drainage, and remote monitoring"],
  ["vacation-home", "a Vacation Home", "long stagnation, shutdown and restart, freeze protection, remote alerts, intermittent demand, and local service access"],
  ["short-term-rental", "a Short-Term Rental", "guest turnover, simple controls, documented maintenance, rapid support, liability, occupancy swings, and clear operating instructions"],
  ["large-household", "a Large Household", "simultaneous fixtures, peak flow, daily gallons, hot-water demand, regeneration timing, storage, and consumable use"],
  ["small-household", "a Small Household", "low and intermittent flow, right-sized capacity, stagnation, salt and water efficiency, footprint, and realistic maintenance"],
  ["home-with-infants", "a Home With Infants", "certified health-related testing, formula preparation guidance from health authorities, point-of-use protection, sanitation, and conservative maintenance"],
  ["aging-in-place", "an Aging-in-Place Home", "simple controls, safe access, low-lift maintenance, leak protection, readable alerts, service support, and reliable drinking water"],
  ["home-with-septic", "a Home With a Septic System", "regeneration discharge, hydraulic loading, local rules, drain routing, salt and chemical use, and maintenance coordination"],
  ["home-renovation", "a Home Renovation", "construction debris, plumbing changes, pressure tests, fixture replacement, equipment protection, commissioning, and post-work sampling"],
  ["home-office", "a Home Office", "daytime occupancy, drinking-water demand, appliance use, noise, service interruptions, leak protection, and compact equipment"],
  ["multi-bath-home", "a Multi-Bathroom Home", "simultaneous demand, pipe size, peak flow, pressure loss, hot-water capacity, regeneration windows, and fixture performance"],
  ["limited-mechanical-space", "a Home With Limited Mechanical Space", "equipment footprint, service clearance, drain and electrical access, sound, leaks, code clearances, and future replacement"],
  ["well-and-septic-property", "a Well-and-Septic Property", "source protection, well testing, septic setbacks, drainage, power, pump performance, regeneration discharge, and records"],
  ["city-water-home", "a City-Water Home", "utility reporting, premise plumbing, disinfectant, hardness, pressure, point-of-use goals, and avoiding unnecessary treatment"],
  ["all-electric-home", "an All-Electric Home", "electrical capacity, backup power, pumps, UV, controls, water heating, outage planning, and energy use"],
  ["smart-home", "a Smart Home", "flow data, leak shutoff, alarms, privacy, connectivity, power backup, manual overrides, and response procedures"],
  ["remote-property", "a Remote Property", "access, parts availability, robust controls, monitoring, backup water, qualified service, weather exposure, and emergency planning"],
];

const goals = [
  ["drinking-water", "Drinking-Water Plan for", "point-of-use drinking and cooking water", "sampling at the consumed tap, certified reduction claims, faucet flow, storage, sanitation, and filter replacement"],
  ["whole-home-filtration", "Whole-Home Filtration for", "water throughout the plumbing system", "source conditions, peak service flow, pressure loss, drains, equipment space, media capacity, and bypass operation"],
  ["water-softening", "Water Softening for", "hardness control and scale reduction", "measured hardness, household demand, peak flow, salt efficiency, regeneration water, drain routing, and residual hardness goals"],
  ["well-water-treatment", "Well-Water Treatment for", "private-well testing and treatment", "well construction, certified laboratory results, pump and pressure performance, treatment sequence, disinfection, and retesting"],
  ["maintenance-plan", "Water-System Maintenance Plan for", "water-system maintenance", "asset inventory, test schedule, consumables, sanitation, alarms, service records, emergency bypass, and responsible contacts"],
];

const refs = {
  health: ["EPA — Drinking Water in Your Home: https://www.epa.gov/ground-water-and-drinking-water/drinking-water-your-home", "CDC — About Choosing Home Water Filters: https://www.cdc.gov/drinking-water/prevention/about-choosing-home-water-filters.html"],
  well: ["EPA — Private Drinking Water Wells: https://www.epa.gov/privatewells", "CDC — Guidelines for Testing Well Water: https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html"],
  equipment: ["NSF — Standards for Water Treatment Systems: https://www.nsf.org/consumer-resources/water-quality/water-filters-testing-treatment/standards-water-treatment-systems", "EPA WaterSense — Fix a Leak: https://www.epa.gov/watersense/fix-leak-week"],
};

const existing = (await Promise.all((await readdir(contentDir))
  .filter((name) => name.endsWith(".md") && !/^generated-(29|3[0-9]|40)-/.test(name))
  .map((name) => readFile(join(contentDir, name), "utf8")))).join("\n");
const pages = [];
let number = 491;

for (const [issueSlug, issue, measure, consequence, response] of issues) {
  for (const [stageSlug, stage, queryLead, stageFocus] of issueStages) {
    const slug = `${stageSlug}-${issueSlug}-wnc`;
    const title = `${issue} ${stage}`;
    const query = `${queryLead} ${issue.toLowerCase()} in Western North Carolina`;
    const intro = `${stageFocus} For ${issue.toLowerCase()}, the decision should account for ${measure}; reported symptoms can involve ${consequence}.`;
    const sections = [
      ["Define the question before choosing equipment", `Record the water source, affected taps, hot-versus-cold pattern, timing, weather or plumbing changes, household demand, and existing equipment. For this topic, document ${measure}. Appearance, taste, odor, staining, scale, or a sales demonstration alone cannot establish water safety or treatment performance.`],
      [`What matters for ${issue.toLowerCase()}`, `The practical concerns include ${consequence}. A useful plan separates source-water conditions from premise plumbing and distinguishes drinking-water exposure from whole-home nuisance or equipment effects. Health-related decisions require an appropriately certified laboratory and current guidance from the relevant utility, health department, or environmental agency.`],
      ["Compare an evidence-matched response", `Potential responses include ${response}. Compare the exact job, validated or certified claim, inlet limits, service flow, capacity, pressure loss, drainage, power, wastewater, consumables, sanitation, monitoring, warranty, and local service. No treatment stage should be added without a defined purpose and a way to verify it.`],
      [`${stage} checklist`, `${stageFocus} Keep the original result, sampling location, model and media details, settings, installation or service date, and follow-up measurement together. If results conflict with symptoms or change unexpectedly, investigate sampling, plumbing, source conditions, and equipment operation before assuming one cause.`],
      ["Authoritative references", refs.health.join("\n\n")],
    ];
    pages.push({ number: number++, slug, title, query, intro, sections, links: "/resources/; /contact/; /services/" });
  }
}

for (const [equipmentSlug, name, job, factors] of equipment) {
  for (const [stageSlug, stage, verb, stageFocus] of lifecycle) {
    const slug = `${stageSlug}-${equipmentSlug}-wnc`;
    const title = `${name} ${stage}`;
    const query = `${verb} a ${name.toLowerCase()} in Western North Carolina`;
    const intro = `${stageFocus} A ${name.toLowerCase()} is intended for ${job}; a defensible plan addresses ${factors}.`;
    const sections = [
      ["Confirm the equipment has a defined job", `Start with representative water results and the household objective. This equipment is generally considered for ${job}, but the exact model must be evaluated against its published and certified claims. Record source type, plumbing size, pressure, peak and daily demand, available drainage and power, and existing treatment.`],
      [`Design factors for a ${name.toLowerCase()}`, `Review ${factors}. Confirm rated operating temperature and pressure, materials, code and manufacturer requirements, service clearances, freeze or flood exposure, bypass behavior, startup procedure, and what happens during a power, drain, or communications failure.`],
      [`${stage} decisions`, `${stageFocus} Compare written specifications rather than category labels. Ask who will commission the system, what baseline will be recorded, which reading proves performance, how consumables are sourced, what routine service requires, and whether qualified local support and replacement parts are available.`],
      ["Verification and records", `After work is complete, check for leaks, pressure and flow effects, drain behavior, alarms, bypass labeling, and the measurement tied to ${job}. Keep model and serial numbers, photographs, settings, test reports, installation and service dates, warranties, and a plain-language emergency procedure.`],
      ["Authoritative references", refs.equipment.join("\n\n")],
    ];
    pages.push({ number: number++, slug, title, query, intro, sections, links: "/products/; /services/; /contact/" });
  }
}

for (const [contextSlug, context, constraints] of contexts) {
  for (const [goalSlug, goalTitle, goal, factors] of goals) {
    const slug = `${goalSlug}-${contextSlug}-wnc`;
    const title = `${goalTitle} ${context}`;
    const query = `${goal} for ${context.toLowerCase()} in Western North Carolina`;
    const intro = `A practical ${goal} plan for ${context.toLowerCase()} should be based on representative water evidence and the way the property is actually used. The design must account for ${constraints}.`;
    const sections = [
      ["Start with the property and water source", `Document occupancy, bathrooms, simultaneous demand, water source, plumbing size and age, hot-water equipment, pressure, existing treatment, equipment space, drains, electricity, and service access. For ${context.toLowerCase()}, pay particular attention to ${constraints}.`],
      [`Plan ${goal}`, `The decision should cover ${factors}. Separate health-related drinking-water questions from nuisance conditions such as scale, staining, taste, or odor. Use certified laboratory testing when a contaminant or microorganism affects health decisions, and use current utility information for municipal source context.`],
      ["Compare scope and ownership work", `Decide whether the goal applies at one drinking tap or across the home. Compare certified claims, peak flow, capacity, pressure loss, regeneration or wastewater, electricity, consumables, sanitation, alarms, noise, footprint, warranty, and the person responsible for service. Simpler treatment is preferable when it fully addresses the measured need.`],
      ["Commission, verify, and maintain", `Record baseline results and operating conditions before work. At startup, document pressure, flow, settings, drain behavior, leaks, alarms, bypass instructions, and the measurement that demonstrates the intended result. Keep a calendar for testing, inspection, sanitation, consumables, and professional service, plus an emergency contact and alternate-water plan where appropriate.`],
      ["Authoritative references", (goalSlug === "well-water-treatment" ? refs.well : refs.health).join("\n\n")],
    ];
    pages.push({ number: number++, slug, title, query, intro, sections, links: "/service-areas/; /services/; /contact/" });
  }
}

if (pages.length !== 300 || number !== 791) throw new Error(`Expected pages 491-790; created ${pages.length}`);
const slugSet = new Set(pages.map((page) => page.slug));
if (slugSet.size !== pages.length) throw new Error("Duplicate slug in new batch");
for (const page of pages) if (existing.includes(`/${page.slug}/`)) throw new Error(`Existing slug: ${page.slug}`);

function render(page) {
  const descriptionSource = `${page.title}: testing-first guidance, practical comparison criteria, and maintenance planning for Western North Carolina homeowners.`;
  const description = descriptionSource.length <= 155 ? descriptionSource : `${descriptionSource.slice(0, 152).replace(/\s+\S*$/, "").replace(/[.,;:]?$/, "")}…`;
  return `## ${page.number}. ${page.title}
**Slug:** \`/${page.slug}/\`
**Title tag:** ${page.title} | Asheville Water Specialists
**Meta description:** ${description}
**Query:** ${page.query}
**Internal links:** ${page.links}

${page.intro}

${page.sections.map(([heading, body]) => `### ${heading}\n\n${body}`).join("\n\n")}

These references provide general guidance. Property-specific instructions from a certified laboratory, health department, utility, licensed professional, environmental agency, healthcare professional, or equipment manufacturer take priority.
`;
}

const batches = [];
for (let start = 491; start <= 790; start += 25) batches.push([start, start + 24, `generated-${String(29 + batches.length).padStart(2, "0")}-${start}-${start + 24}.md`]);
for (const [from, to, file] of batches) {
  const selected = pages.filter((page) => page.number >= from && page.number <= to);
  await writeFile(join(contentDir, file), `# Ranking-Targeted Guides ${from}-${to}\n\n${selected.map(render).join("\n")}`, "utf8");
}

console.log(`Generated ${pages.length} pages in ${batches.length} files.`);
