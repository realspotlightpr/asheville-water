import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const contentDir = join(root, "src", "content", "ranking-pages");
const raw = `
Municipal Water Pressure Changes|municipal-water-pressure-changes|city water pressure changes|municipal|Pressure changes may come from utility work, pressure regulation, plumbing restrictions, leaks, elevation, or simultaneous demand.
Chlorine Taste in City Water|municipal-tap-water-chlorine-taste|chlorine taste in tap water|municipal|Disinfectant taste can vary with utility operations, temperature, plumbing residence time, and individual sensitivity.
Cloudy City Water After Utility Work|cloudy-water-after-utility-work|cloudy tap water after utility work|municipal|Cloudiness after distribution work may be entrained air or disturbed sediment, but color and persistence affect the next step.
Brown Water from a City Supply|brown-city-water-causes|brown water from city supply|municipal|Brown water can originate in distribution mains, service lines, water heaters, or interior corrosion.
Black Particles in Tap Water|black-particles-tap-water|black particles in tap water|municipal|Black particles can come from rubber components, carbon media, manganese, plumbing scale, or a deteriorating fixture connector.
Blue-Green Stains on City Water|blue-green-stains-city-water|blue green water stains|municipal|Blue-green staining often warrants evaluation of copper plumbing, corrosion conditions, fixtures, and water chemistry.
White Particles in Hot Water|white-particles-hot-water|white particles in hot water|municipal|White particles limited to hot water may involve heater components or mineral scale rather than the incoming supply.
City Water Smells Earthy|earthy-smell-city-water|earthy smelling tap water|municipal|Earthy or musty odor may vary seasonally and can be affected by utility treatment, plumbing, or neglected filters.
City Water Smells Like Sulfur|city-water-sulfur-smell|sulfur smell city water|municipal|A sulfur-like odor on municipal water may be localized to a drain, water heater, stagnant plumbing, or the supply.
Pink Residue Around Fixtures|pink-residue-water-fixtures|pink residue around water fixtures|municipal|Pink residue commonly grows on damp surfaces and is not diagnosed by a standard hardness reading.
Water Quality in an Older Home|older-home-water-quality|water quality older house|municipal|Older homes can add lead, copper, iron, sediment, and taste concerns through service lines, solder, fixtures, and stagnant branches.
Lead Testing at the Kitchen Tap|lead-testing-kitchen-tap|test kitchen tap for lead|municipal|Lead exposure depends on plumbing materials, stagnation, sampling protocol, and corrosion control rather than source water alone.
Copper in Household Tap Water|copper-household-water|copper in tap water|municipal|Copper can enter water through plumbing corrosion and requires sampling that matches the exposure question.
Water Filter for Chloramine|water-filter-for-chloramine|whole house filter for chloramine|municipal|Chloramine reduction depends on the exact media, contact time, flow, capacity, and certified claim.
Carbon Filter Contact Time|carbon-filter-contact-time|carbon water filter contact time|municipal|Carbon performance can decline when service flow exceeds the bed's validated contact conditions.
Whole-House Filter Pressure Drop|whole-house-filter-pressure-drop|whole house filter pressure drop|municipal|Pressure loss can reflect undersizing, dirty media, small plumbing, high peak demand, or an installation restriction.
Point-of-Entry vs Point-of-Use Treatment|point-entry-vs-point-use-treatment|point of entry vs point of use water filter|municipal|Treatment location should match whether the verified concern affects one drinking tap or all household uses.
Water Treatment for Condominiums|condo-water-treatment-guide|water filter for condo|municipal|Condominiums add ownership boundaries, shared plumbing, space, drainage, alteration rules, and shutoff coordination.
Water Treatment for Apartments|apartment-water-filter-options|water filter for apartment|municipal|Renters need options compatible with lease rules, limited plumbing changes, sanitation, and verified performance.
Water Quality After a Main Break|water-quality-after-main-break|water after main break|municipal|A main break can trigger official advisories, pressure loss, sediment, air, and household flushing instructions.
Well Pump Short Cycling|well-pump-short-cycling|well pump short cycling|well|Rapid pump cycling may involve pressure-tank charge, tank failure, switch settings, leaks, check valves, or pump controls.
Well Pump Runs Continuously|well-pump-runs-continuously|well pump will not stop running|well|Continuous operation may indicate high demand, leaks, low yield, control faults, worn equipment, or inability to reach cutout pressure.
Well Pump Loses Prime|well-pump-loses-prime|well pump losing prime|well|Loss of prime can involve leaks, check or foot valves, low water level, pump condition, or suction-line problems.
Well Pressure Tank Sizing|well-pressure-tank-sizing|how to size well pressure tank|well|Pressure-tank sizing depends on pump capacity, minimum run time, pressure settings, drawdown, and household demand.
Well Pressure Switch Settings|well-pressure-switch-settings|well pressure switch settings|well|Pressure settings must remain compatible with the pump, tank air charge, plumbing, fixtures, and treatment equipment.
Air in Well Water Lines|air-in-well-water-lines|air in water lines from well|well|Air can enter through low water levels, pump or drop-pipe problems, treatment equipment, leaks, or recent service.
Sand Pumping from a Well|well-pumping-sand|well pumping sand into house|well|Sand may indicate formation entry, screen or casing problems, pump placement, heavy demand, or a disturbed new well.
Well Water Runs Out|well-water-runs-out|well water runs out|well|Loss of supply requires separating well yield, storage, pump controls, leaks, peak use, and seasonal groundwater conditions.
Well Recovery Rate Testing|well-recovery-rate-testing|well recovery rate test|well|Recovery rate describes supply behavior over time and should be measured under a documented pumping procedure.
Static Water Level Explained|static-water-level-well|static water level in well|well|Static level is one well measurement and does not by itself describe sustainable pumping capacity or water quality.
Well Drawdown Explained|well-drawdown-explained|well drawdown test|well|Drawdown links pumping rate with changing water level and helps characterize well and aquifer response.
Well Pump Depth Questions|well-pump-depth-guide|how deep should well pump be|well|Pump placement must consider well depth, static and pumping levels, sediment entry, cooling, yield, and construction records.
Well Cap Inspection Checklist|well-cap-inspection|inspect well cap|well|A secure sanitary cap helps exclude insects, debris, and surface water while allowing appropriate venting and wiring.
Well Casing Damage Signs|well-casing-damage-signs|signs of damaged well casing|well|Casing problems may show through openings, movement, contamination patterns, sediment, or inspection findings.
Well Vent and Screen Maintenance|well-vent-screen-maintenance|well vent screen maintenance|well|Damaged or missing vent screens can provide entry for insects and debris and should be corrected without blocking required venting.
Wellhead Drainage Improvements|wellhead-drainage|improve drainage around well|well|Surface water should drain away from the well without burying, damaging, or creating access problems at the wellhead.
Well Abandonment Questions|well-abandonment-guide-nc|abandon old well North Carolina|well|Unused wells can be safety and groundwater pathways and require jurisdiction-specific abandonment procedures.
Two Wells on One Property|two-wells-one-property|property with two wells|well|Multiple wells require clear records, plumbing separation, use decisions, sampling, protection, and abandonment planning.
Well Water Storage Cistern Care|well-water-cistern-care|well water cistern maintenance|well|Cisterns add turnover, sanitation, access, venting, overflow, level controls, pumps, and contamination risks.
Constant-Pressure Well Systems|constant-pressure-well-system|constant pressure well pump system|well|Variable-speed systems can stabilize pressure but add controls, sensors, electrical requirements, minimum flow, and specialized service.
Arsenic Testing for Private Wells|arsenic-testing-private-well|test well water for arsenic|testing|Arsenic has no reliable taste or odor and testing scope should reflect geology, health guidance, and treatment verification needs.
Uranium Testing in Well Water|uranium-well-water-testing|test well water for uranium|testing|Uranium is a location-specific concern requiring certified analysis and careful distinction between chemical and radiological parameters.
Radon in Well Water|radon-in-well-water|radon test for well water|testing|Waterborne radon assessment differs from indoor-air testing and decisions should follow state and health guidance.
Nitrate Test Result Interpretation|nitrate-water-test-result|nitrate level in well water|testing|Nitrate results require correct units, certified methods, health-based interpretation, and special caution for infants and pregnancy.
Coliform Positive Well Test|coliform-positive-well-test|coliform bacteria positive well water|testing|A positive coliform result calls for immediate health guidance, confirmation of sampling quality, and investigation of contamination pathways.
E. coli Positive Well Test|e-coli-positive-well-test|E coli in well water|testing|E. coli detection is an urgent indicator of fecal contamination requiring public-health direction and safe alternate water decisions.
Manganese Water Test Results|manganese-water-test-results|manganese in well water test|testing|Manganese may involve staining, taste, deposits, and health-based considerations that depend on concentration and exposure.
Iron Water Test Results|iron-water-test-results|iron in well water test result|testing|Iron results should distinguish dissolved and particulate behavior, concentration, pH, oxygen, and household symptoms.
Low-pH Well Water Test|low-ph-well-water-test|low pH well water|testing|Low pH can contribute to corrosivity, but alkalinity, hardness, dissolved solids, and plumbing materials also influence corrosion.
High-pH Well Water Test|high-ph-well-water-test|high pH well water|testing|High pH affects taste, scaling, disinfection, and treatment chemistry and should be interpreted with alkalinity and other results.
Turbidity Test for Well Water|turbidity-well-water-test|well water turbidity test|testing|Turbidity measures light scattering and can signal particles that interfere with disinfection or indicate a changing source.
Alkalinity Water Test Explained|alkalinity-water-test|alkalinity in well water|testing|Alkalinity describes acid-neutralizing capacity and affects pH stability, corrosion, scaling, and treatment design.
Hardness Test Units Explained|water-hardness-units|water hardness ppm vs grains|testing|Hardness may be reported in milligrams per liter, parts per million, or grains per gallon and must be converted consistently.
Chloride in Well Water|chloride-well-water|chloride level in well water|testing|Chloride can affect taste and corrosion and may reflect geology, road salt, septic influence, or other sources.
Sulfate in Well Water|sulfate-well-water|sulfate in well water|testing|Sulfate can affect taste and have laxative effects at elevated concentrations, while treatment selection depends on the confirmed level.
Fluoride in Private Well Water|fluoride-private-well|fluoride test private well|testing|Private wells are not adjusted like public supplies, so fluoride exposure questions require an actual certified result.
Lead in Private Well Plumbing|lead-private-well-plumbing|lead test private well water|testing|Lead is often introduced by plumbing components, so sampling location and stagnation protocol must match the exposure question.
PFAS Well Water Testing|pfas-private-well-testing|PFAS test private well water|testing|PFAS analysis requires specialized certified methods, low detection limits, careful sampling, and compound-specific interpretation.
Pesticide Testing for Wells|pesticide-well-water-testing|pesticide test well water|testing|Pesticide testing should be guided by land use, product history, local agencies, and laboratory method coverage rather than one generic screen.
VOC Testing for Well Water|voc-well-water-testing|VOC test well water|testing|Volatile organic compounds require appropriate containers, preservation, sampling technique, and a panel tied to plausible sources.
Water Softener Resin Cleaning|water-softener-resin-cleaning|clean water softener resin|maintenance|Resin cleaners target particular foulants and can damage equipment or create waste issues when used without diagnosis and instructions.
Water Softener Brine Tank Cleaning|clean-water-softener-brine-tank|how to clean softener brine tank|maintenance|Salt bridges, sludge, insoluble material, and sanitation concerns can accumulate in a brine tank over time.
Water Softener Salt Bridge|diagnose-softener-salt-bridge|water softener salt bridge|maintenance|A hardened salt bridge can leave an empty space below apparently full salt and prevent proper brine production.
Water Softener Mushing|water-softener-salt-mushing|water softener salt mush|maintenance|Salt mushing forms a dense mass that can obstruct brine movement and may reflect salt type, moisture, or tank conditions.
Water Softener Is Not Using Salt|softener-not-using-salt|water softener not using salt|maintenance|No salt use may reflect a bridge, blocked brine path, control settings, metering failure, bypass position, or lack of regeneration.
Water Softener Brine Tank Is Full|softener-brine-tank-full|water softener brine tank full of water|maintenance|Excess brine-tank water can involve injector blockage, drain restriction, float or valve problems, pressure, or control sequencing.
Water Softener Drains Constantly|softener-drains-constantly|water softener constantly draining|maintenance|Continuous drain flow may indicate a stuck control, seal failure, interrupted cycle, low pressure, or electrical problem.
Water Softener Makes Noise|water-softener-noise|water softener making noise|maintenance|Motor, valve, drain, water-hammer, or regeneration sounds should be compared with cycle timing and the exact model.
Water Softener Leaking|water-softener-leak|water softener leaking|maintenance|Leaks can occur at bypasses, connectors, valve seals, tanks, brine tubing, drain lines, or recent service points.
Water Softener Bypass Valve Guide|softener-bypass-valve-positions|how to bypass water softener|maintenance|Bypass designs vary, and incorrect positioning can stop service, cause leaks, or leave untreated water paths unclear.
Carbon Filter Media Replacement|carbon-media-replacement|replace whole house carbon media|maintenance|Carbon replacement timing depends on the target compound, inlet level, gallons, flow, capacity, channeling, and sanitation history.
Backwashing Filter Maintenance|backwashing-filter-maintenance|backwashing water filter maintenance|maintenance|Backwashing filters need sufficient flow, correct timing, drain capacity, media condition, and valve operation.
Sediment Filter Change Trigger|sediment-filter-change-trigger|when to change sediment filter|maintenance|Pressure differential, visible loading, flow decline, water quality, and service limits are better triggers than color alone.
Filter Housing O-Ring Care|filter-housing-o-ring|water filter housing o ring|maintenance|A damaged, dirty, twisted, dry, or incorrectly sized O-ring can cause leaks and unsafe housing closure.
Stuck Water Filter Housing|stuck-water-filter-housing|water filter housing stuck|maintenance|Overtightening, pressure, scale, misalignment, and neglected seals can make a housing difficult or hazardous to open.
Whole-House Filter Leak After Change|filter-leak-after-change|water filter leaking after replacement|maintenance|Post-service leaks often trace to pressure, seating, damaged seals, cracked housings, threads, or unsupported plumbing.
Water Treatment Drain Line Problems|water-treatment-drain-line|water softener drain line problem|maintenance|A kinked, frozen, undersized, elevated, blocked, or improperly terminated drain can disrupt regeneration and create sanitation risks.
Water Treatment During Vacation|water-treatment-during-vacation|water treatment vacation shutdown|maintenance|Extended absence raises questions about stagnation, leaks, power, freezing, filter condition, and safe recommissioning.
Restarting Water Treatment After Vacancy|restart-water-treatment-vacancy|restart water system after vacant house|maintenance|A vacant home's plumbing and treatment equipment may require inspection, flushing, sanitation, service, and testing before normal use.
Water Treatment Service Records|organize-water-treatment-records|water treatment maintenance records|maintenance|Complete records connect test results, settings, parts, dates, performance, warranties, and future troubleshooting.
Water Treatment for a Newborn|water-treatment-newborn|home water treatment for newborn|household|Households with a newborn should base drinking and formula decisions on certified testing and pediatric or public-health guidance.
Water Treatment for Immunocompromised People|water-treatment-immunocompromised|water treatment immunocompromised home|household|Individual health conditions can change acceptable risk and require coordination with healthcare and public-health professionals.
Water Treatment for Home Brewing|water-treatment-home-brewing|water treatment for home brewing|household|Brewing water goals involve recipe chemistry, disinfectant control, consistency, and food-safe equipment rather than universal purity.
Water Treatment for Coffee|water-treatment-coffee|best water treatment for coffee|household|Coffee extraction depends on mineral balance, alkalinity, taste, and equipment scale, while drinking-water safety remains separate.
Water Treatment for Aquariums|water-treatment-aquarium|home water filter for aquarium|household|Aquatic species have specific needs involving disinfectants, minerals, pH, temperature, and rapid chemistry changes.
Water Treatment for Humidifiers|water-treatment-humidifier|filtered water for humidifier|household|Humidifier water affects mineral dust, scale, microbial maintenance, and manufacturer requirements.
Water Treatment for Steam Ovens|water-treatment-steam-oven|water filter for steam oven|household|Steam appliances may have model-specific hardness, mineral, filter, and cleaning requirements.
Water Treatment for Espresso Machines|water-treatment-espresso-machine|water filter espresso machine home|household|Espresso machines need a balance between scale control, corrosion protection, taste, and manufacturer warranty limits.
Water Treatment for Ice Makers|water-treatment-ice-maker|water filter for ice maker|household|Ice quality and machine reliability can be affected by taste, odor, sediment, scale, pressure, sanitation, and filter capacity.
Water Treatment for Tankless Heaters|water-treatment-tankless-heater|water treatment for tankless water heater|household|Tankless heater performance can be affected by hardness, scale, flow, inlet filtration, flushing, and warranty requirements.
Water Treatment for Radiant Heating Makeup|radiant-heating-makeup-water|water quality radiant heating system|household|Closed-loop heating systems have equipment-specific fill-water chemistry and should not be treated as household drinking-water systems.
Water Treatment for Outdoor Kitchens|outdoor-kitchen-water-treatment|water filter outdoor kitchen|household|Outdoor plumbing adds freezing, heat, sunlight, stagnation, drainage, sanitation, and seasonal shutdown concerns.
Water Treatment for Guest Houses|guest-house-water-treatment|water treatment guest house|household|Intermittent occupancy changes demand, stagnation, monitoring, freeze protection, and maintenance responsibility.
Water Treatment for Short-Term Rentals|vacation-rental-water-treatment|water treatment vacation rental|household|Rental properties need clear drinking-water information, reliable maintenance, tamper resistance, records, and rapid response procedures.
Water Treatment for Mountain Cabins|mountain-cabin-water-treatment|water treatment mountain cabin|household|Mountain cabins may combine private wells, seasonal vacancy, freezing, power outages, low yield, and difficult service access.
Water Treatment for Tiny Homes|tiny-home-water-treatment|water filter tiny home|household|Tiny homes constrain space, weight, drainage, power, freeze protection, storage, and peak flow.
Water Treatment for Manufactured Homes|manufactured-home-water-treatment|water treatment manufactured home|household|Manufactured homes require attention to plumbing materials, supports, access, pressure, freeze exposure, and installation rules.
Water Treatment Before Remodeling|water-treatment-before-remodel|plan water treatment during remodel|household|Remodeling is an opportunity to coordinate pipe size, loops, drains, electrical service, bypasses, sampling points, and equipment access.
Water Treatment After Repiping|water-treatment-after-repiping|water quality after repiping|household|New piping can change taste, particles, flushing needs, pressure, corrosion conditions, and sampling results.
Water Treatment Before Selling a Home|water-treatment-before-selling|water treatment before selling house|household|A sale requires accurate records, honest equipment condition, current testing where appropriate, and clear transfer of maintenance duties.
`.trim();

const groups = { municipal:["EPA — Drinking Water in Your Home: https://www.epa.gov/ground-water-and-drinking-water/drinking-water-your-home","City of Asheville — Water Resources: https://www.ashevillenc.gov/department/water/"], well:["EPA — Private Drinking Water Wells: https://www.epa.gov/privatewells","NC DEQ — Private Well Information: https://www.deq.nc.gov/about/divisions/water-resources/groundwater-resources/private-well-information"], testing:["CDC — Guidelines for Testing Well Water: https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html","EPA — Home Drinking Water Testing: https://www.epa.gov/ground-water-and-drinking-water/home-drinking-water-testing"], maintenance:["NSF — Water Treatment Standards: https://www.nsf.org/consumer-resources/water-quality/water-filters-testing-treatment/standards-water-treatment-systems","EPA — Drinking Water in Your Home: https://www.epa.gov/ground-water-and-drinking-water/drinking-water-your-home"], household:["CDC — About Home Water Treatment Systems: https://www.cdc.gov/drinking-water/about/about-home-water-treatment-systems.html","NSF — Water Treatment Standards: https://www.nsf.org/consumer-resources/water-quality/water-filters-testing-treatment/standards-water-treatment-systems"] };
const rows = raw.split("\n").map((line) => line.split("|"));
if (rows.length !== 100) throw new Error(`Expected 100 topics; got ${rows.length}`);
const topics = rows.map(([title,slug,query,group,issue],i)=>({number:291+i,title,slug,query,group,issue}));
const existing = (await Promise.all((await readdir(contentDir)).filter(x=>x.endsWith(".md")).map(x=>readFile(join(contentDir,x),"utf8")))).join("\n");
for (const topic of topics) if (existing.includes(`/${topic.slug}/`)) throw new Error(`Existing slug: ${topic.slug}`);
if (new Set(topics.map(x=>x.slug)).size !== 100) throw new Error("Duplicate new slug");

const render = (x) => `## ${x.number}. ${x.title}
**Slug:** \`/${x.slug}/\`
**Title tag:** ${x.title} | Asheville Water Specialists
**Meta description:** ${(`${x.title}: evidence to collect, practical options to compare, and the safest next step for a Western North Carolina home.`).slice(0,155)}
**Query:** ${x.query}

${x.issue} The useful first step is to define exactly where and when the condition occurs, preserve any official advisory or prior report, and avoid assuming that one symptom identifies a contaminant or equipment failure.

### What to document

Record the water source, affected fixtures, hot-versus-cold pattern, timing, recent plumbing or utility work, existing equipment, household demand, pressure or flow changes, and earlier laboratory results. Photograph visible evidence and note whether neighbors or only one fixture are affected.

For possible health-related contaminants or microorganisms, use a state-certified laboratory and follow health-department instructions. Field meters, appearance, taste, odor, staining, and sales demonstrations can guide investigation but do not establish safety.

### How to compare solutions

Match each proposed action to a verified cause and a defined treatment objective. Compare certified reduction claims, service flow, pressure loss, inlet limits, drainage, electricity, consumables, sanitation, monitoring, replacement parts, warranty, and expected ownership work. Point-of-use equipment and whole-home equipment address different scopes.

Source correction, plumbing repair, well service, flushing, or a public-health action may be more important than adding filtration. Avoid stacking equipment without explaining what each stage does, how its performance will be checked, and what happens when it is exhausted or offline.

### Verify the outcome

Establish a baseline before work. After correction or installation, repeat the measurement that justified the decision at a representative location and under comparable conditions. Keep model numbers, settings, installation dates, laboratory reports, service history, and the finished result together.

Use appropriately qualified professionals for plumbing, electrical, well, environmental, or public-health work. Investigate recurring symptoms, pressure loss, leaks, alarms, abnormal water use, or breakthrough rather than resetting a timer without diagnosing the cause.

### Authoritative references

${groups[x.group].map(s=>`- ${s}`).join("\n")}

These sources provide general guidance. Property-specific directions from the utility, certified laboratory, health department, licensed plumber, well professional, environmental agency, equipment manufacturer, or healthcare professional take priority.
`;
const batches=[[291,310,"generated-19-municipal-291-310.md"],[311,330,"generated-20-well-equipment-311-330.md"],[331,350,"generated-21-testing-331-350.md"],[351,370,"generated-22-maintenance-351-370.md"],[371,390,"generated-23-household-371-390.md"]];
for(const [from,to,file] of batches){const selected=topics.filter(x=>x.number>=from&&x.number<=to);await writeFile(join(contentDir,file),`# Ranking-Targeted Guides ${from}-${to}\n\n${selected.map(render).join("\n")}`,"utf8");}
console.log(`Generated ${topics.length} pages in ${batches.length} files.`);
