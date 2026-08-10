import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root=join(dirname(fileURLToPath(import.meta.url)),"..");
const contentDir=join(root,"src","content","ranking-pages");
const raw=`
Well Water After Heavy Rain|well-water-after-heavy-rain|well water changed after heavy rain|seasonal|Heavy rain can mobilize sediment, reveal wellhead drainage problems, or coincide with microbial contamination, but appearance alone cannot identify the cause.
Well Water During Drought|well-water-during-drought|private well water during drought|seasonal|Drought can affect water levels, yield, pump operation, concentration of dissolved constituents, and household demand.
Springtime Well Water Changes|spring-well-water-changes|well water changes in spring|seasonal|Snowmelt and seasonal rainfall can change recharge, turbidity, microbial risk, and the timing of existing water-quality symptoms.
Summer Well Water Odor|summer-well-water-odor|well water smells worse in summer|seasonal|Warmer conditions can intensify odors, biological activity, stagnation, and household water demand without proving one contaminant.
Fall Well System Maintenance|fall-well-system-maintenance|fall well maintenance checklist|seasonal|Fall is a practical time to inspect exposed components, drainage, treatment service, records, and freeze readiness before winter.
Winter Well Water Problems|winter-well-water-problems|winter well water problems|seasonal|Cold weather can freeze exposed piping, drains, housings, controls, and sampling points or reveal power and access limitations.
Water Treatment During a Freeze|water-treatment-during-freeze|water treatment system freezing weather|seasonal|Treatment tanks, drains, tubing, housings, and bypasses can be damaged when installed in spaces that fall below their operating limits.
Thawing Frozen Water Equipment|thaw-frozen-water-treatment|thaw frozen water filter|seasonal|Frozen equipment may be cracked or pressurized, so uncontrolled heat or immediate repressurization can create leaks and injury risk.
Well Water After a Flood|well-water-after-flood|private well after flooding|seasonal|Floodwater around or over a well can create an urgent contamination concern requiring official guidance, inspection, disinfection, and confirmation testing.
Boil-Water Advisory Home Checklist|boil-water-advisory-checklist|what to do during boil water advisory|seasonal|A boil-water advisory requires following the issuing authority's instructions for drinking, cooking, ice, appliances, filters, and return to normal use.
Water Treatment After a Boil Advisory|after-boil-water-advisory|water filter after boil advisory|seasonal|Ending an advisory may require flushing, filter service, appliance cleaning, or other utility-directed actions depending on what occurred.
Power Outage Water-System Checklist|power-outage-water-system|well and water treatment power outage|seasonal|A power outage can stop wells, UV, pumps, alarms, controls, heat protection, and leak monitoring even when stored water remains.
Generator Planning for Well Pumps|generator-well-pump-planning|generator size for well pump|seasonal|Well-pump backup requires qualified assessment of voltage, running and starting load, controls, transfer equipment, and other connected treatment loads.
Emergency Drinking Water Storage|emergency-water-storage-home|store emergency drinking water|seasonal|Emergency storage requires safe containers, rotation, labeling, temperature control, and public-health guidance rather than an improvised open tank.
Water System Storm Preparation|water-system-storm-preparation|prepare well system for storm|seasonal|Storm planning should cover backup water, electricity, flooding, treatment shutdown, alarms, contacts, records, and safe restart procedures.
Well Inspection After Lightning|well-system-after-lightning|well pump after lightning strike|seasonal|Lightning and surges can affect pumps, controls, pressure switches, UV systems, and electronics even when damage is not immediately visible.
Water Treatment Surge Protection|water-treatment-surge-protection|surge protector water treatment system|seasonal|Electronic valves, UV ballasts, pumps, and monitors require equipment-appropriate electrical protection and grounding assessment.
Vacation Home Winterization|vacation-home-water-winterization|winterize vacation home water system|seasonal|Seasonal properties need a coordinated plan for plumbing, wells, tanks, drains, treatment media, appliances, heat, and recommissioning.
Restarting a Winterized Well System|restart-winterized-well-system|restart well after winterization|seasonal|Restarting requires inspection, controlled pressurization, leak checks, flushing, sanitation where appropriate, and updated testing.
Emergency Water Treatment Claims|emergency-water-filter-claims|emergency water filter claims|seasonal|Portable and emergency products have specific organism, chemical, capacity, flow, and source-water limits that must be verified before reliance.
Activated Carbon Types Explained|activated-carbon-types-water|types of activated carbon water filters|media|Granular, block, catalytic, coconut-shell, coal-based, and other carbons differ in structure, contact conditions, pressure loss, and validated claims.
Catalytic Carbon for Water Treatment|catalytic-carbon-water-treatment|catalytic carbon water filter|media|Catalytic carbon may improve performance for certain targets, but results depend on media specifications, contact time, flow, water chemistry, and certification.
Carbon Block vs Granular Carbon|carbon-block-vs-granular|carbon block vs granular carbon|media|Carbon blocks and granular beds differ in density, flow path, pressure loss, sediment behavior, channeling, and certified capacity.
KDF Media in Water Filters|kdf-water-filter-media|KDF media water filter|media|KDF media is used in particular oxidation-reduction applications but should not be treated as a universal contaminant-removal solution.
Calcite Neutralizer Media|calcite-neutralizer-media|calcite water neutralizer media|media|Calcite dissolves to increase pH and can add hardness, while performance depends on chemistry, contact, flow, bed depth, and replenishment.
Corosex and Blended Neutralizer Media|corosex-neutralizer-media|Corosex water neutralizer media|media|Magnesium-oxide media reacts more aggressively than calcite and requires careful sizing, blending, chemistry review, and monitoring.
Manganese Dioxide Filter Media|manganese-dioxide-filter-media|manganese dioxide water filter media|media|Manganese-dioxide media can support oxidation and filtration for defined metals or sulfur conditions within specific operating requirements.
Greensand Water Filtration|greensand-water-filter|greensand filter well water|media|Greensand systems require correct pretreatment or regeneration chemistry, backwash, pH, flow, and safe chemical handling.
Birm Filter Media Guide|birm-filter-media|Birm iron filter media|media|Birm performance depends on dissolved oxygen, pH, water chemistry, iron form, absence of interfering substances, and adequate backwash.
Zeolite Water Filter Media|zeolite-water-filter-media|zeolite media water filter|media|Natural and synthetic zeolites have different particle-filtration and ion-exchange properties that must be tied to a specified application.
Filter-Ag Media Explained|filter-ag-media|Filter Ag water filtration media|media|Lightweight granular media can reduce certain suspended solids but requires suitable loading, bed depth, flow, and backwash.
Multi-Media Sediment Filters|multimedia-sediment-filter|multi media sediment filter|media|Layered sediment beds use graded materials to manage particles at service flow and need adequate backwash to prevent fouling or channeling.
Ion-Exchange Resin Types|ion-exchange-resin-types|water softener resin types|media|Resin differs by crosslinking, bead structure, capacity, selectivity, fouling resistance, and compatibility with the intended regeneration process.
Fine-Mesh Softener Resin|fine-mesh-softener-resin|fine mesh water softener resin|media|Fine-mesh resin changes hydraulic and fouling behavior and may require different pretreatment, distributors, backwash, and operating settings.
High-Crosslink Softener Resin|high-crosslink-softener-resin|10 percent crosslink softener resin|media|Higher-crosslink resin may improve resistance in some conditions but still requires correct sizing, regeneration, and protection from oxidants and foulants.
Anion Exchange for Water Treatment|anion-exchange-water-treatment|anion exchange water filter|media|Anion resin targets specified negatively charged ions and adds chemistry, regeneration, waste, selectivity, and competing-ion considerations.
Mixed-Bed Deionization at Home|mixed-bed-deionization-home|deionized water system home|media|Mixed-bed deionization can produce low-conductivity water but exhausts rapidly on many feeds and is not a general whole-home drinking-water answer.
Polyphosphate Scale Treatment|polyphosphate-scale-treatment|polyphosphate water treatment scale|media|Polyphosphate may sequester or modify certain scale and corrosion behavior without removing hardness from the water.
Template-Assisted Crystallization|template-assisted-crystallization|template assisted crystallization water conditioner|media|Template-assisted crystallization is a conditioning approach with inlet limits, flow, media life, and performance claims distinct from ion-exchange softening.
Ceramic Water Filter Elements|ceramic-water-filter-elements|ceramic water filter element|media|Ceramic elements provide defined particle or microorganism barriers depending on pore characteristics, integrity, certification, flow, and cleaning limits.
Galvanized Plumbing Water Quality|galvanized-pipe-water-quality|galvanized pipes water quality|plumbing|Aging galvanized pipe can accumulate corrosion products, restrict flow, discolor water, and complicate interpretation of source-water symptoms.
Copper Pipe Corrosion Signs|copper-pipe-corrosion|copper pipe corrosion water|plumbing|Copper corrosion depends on water chemistry, stagnation, temperature, velocity, workmanship, and plumbing age rather than pH alone.
PEX Plumbing and Water Taste|pex-plumbing-water-taste|PEX pipe water taste|plumbing|New plastic plumbing may affect taste or odor temporarily, while product listing, flushing, installation, and hot-water patterns matter.
CPVC Plumbing Water Concerns|cpvc-water-quality|CPVC pipe drinking water|plumbing|CPVC performance and taste questions should be evaluated against product approvals, installation conditions, temperature, stagnation, and manufacturer guidance.
Lead Service Line Questions|lead-service-line-questions|how to identify lead service line|plumbing|Service-line material identification requires utility records, visual methods, and professional confirmation rather than color alone.
Brass Fixtures and Lead Testing|brass-fixtures-lead-testing|brass faucet lead water test|plumbing|Fixture components can contribute lead or other metals, especially after stagnation, and require a sampling plan matched to the question.
Water Heater Sediment Symptoms|water-heater-sediment|water heater sediment symptoms|plumbing|Heater sediment can contribute noise, particles, reduced efficiency, odors, and drain problems but must be separated from incoming-water issues.
Anode Rod Water Odor|anode-rod-water-odor|water heater anode rod sulfur smell|plumbing|Heater anodes, microbiology, sulfate, temperature, and stagnation can interact in hot-water odor problems.
Hot Water Is Cloudy|cloudy-hot-water|cloudy hot water only|plumbing|Cloudiness limited to hot water may be entrained air, scale, heater components, or plumbing conditions rather than contamination.
Cold Water Is Cloudy|cloudy-cold-water|cloudy cold tap water|plumbing|Cold-water cloudiness should be checked for clearing behavior, fixture scope, pressure changes, utility work, particles, and persistence.
One Faucet Has Bad-Tasting Water|one-faucet-bad-taste|one faucet water tastes bad|plumbing|A symptom isolated to one tap often points toward the aerator, supply connector, fixture, local branch, or point-of-use device.
One Bathroom Has Low Water Pressure|one-bathroom-low-pressure|low water pressure one bathroom|plumbing|Localized low pressure may involve aerators, cartridges, stops, supply lines, scale, leaks, or branch plumbing rather than whole-home treatment.
Whole House Has Low Water Pressure|whole-house-low-pressure-diagnosis|low water pressure whole house|plumbing|Whole-house pressure loss can involve the source, regulator, pump, pressure tank, main valve, leak, pipe sizing, or treatment restriction.
Water Hammer After Treatment Installation|water-hammer-after-filter-installation|water hammer after water filter|plumbing|New valves, check valves, flow changes, unsupported pipes, and fast-closing fixtures can contribute to water hammer after system work.
Cross-Connection Water Safety|cross-connection-home-plumbing|cross connection drinking water home|plumbing|Cross-connections can allow nonpotable water or contaminants into drinking plumbing when backflow protection is absent or fails.
Backflow Preventer and Water Treatment|backflow-preventer-water-treatment|backflow preventer water filter|plumbing|Backflow devices affect pressure, thermal expansion, system isolation, testing, and code requirements in a treatment installation.
Thermal Expansion Tank Questions|thermal-expansion-tank-water|thermal expansion tank plumbing|plumbing|Closed plumbing systems may require thermal-expansion control matched to heater volume, pressure, device settings, and code.
Pressure-Reducing Valve Problems|pressure-reducing-valve-symptoms|water pressure regulator problems|plumbing|A failing or misadjusted pressure-reducing valve can cause high, low, or unstable household pressure and affect treatment operation.
Plumbing Bypass Loop Design|water-treatment-bypass-loop|plumbing bypass loop water treatment|plumbing|A well-designed bypass supports service and emergency operation without dead legs, confusion, unsupported pipe, or cross-connection risks.
Sampling Tap Installation|water-sampling-tap-installation|water test sampling faucet|plumbing|A suitable sampling point should avoid aerators, treatment ambiguity, contamination traps, and unsafe or inaccessible placement.
Mechanical Room Water-Treatment Layout|water-treatment-mechanical-room-layout|water treatment equipment layout|projects|Equipment layout must coordinate service clearance, drains, electricity, bypasses, structure, ventilation, flooding protection, and safe access.
Crawlspace Water-Treatment Installation|crawlspace-water-treatment|water treatment system crawlspace|projects|Crawlspaces add height, moisture, freezing, drainage, electrical, structural, access, and leak-detection constraints.
Garage Water-Treatment Installation|garage-water-treatment-installation|water softener in garage|projects|Garages require attention to freezing, heat, vehicles, chemicals, drainage, electrical protection, security, and service access.
Outdoor Water-Treatment Equipment|outdoor-water-treatment-equipment|water treatment system outside|projects|Outdoor equipment faces freezing, heat, sunlight, rain, insects, impact, security, drainage, and manufacturer temperature limits.
Basement Water-Treatment Installation|basement-water-treatment-layout|water treatment system basement|projects|Basements can simplify access but still require drainage, sump limitations, flood protection, headroom, structure, electricity, and bypass planning.
Attic Water-Treatment Risks|attic-water-treatment-risks|water filter in attic|projects|Attic installations create serious leak, heat, freezing, structural, access, drain, and service risks that often outweigh convenience.
Water-Treatment Drain Options|water-treatment-drain-options|water softener drain options|projects|Regeneration and reject drains require legal, sanitary, hydraulic, freeze-resistant termination appropriate to the equipment and site.
Air-Gap Requirements for Treatment Drains|water-treatment-drain-air-gap|water softener drain air gap|projects|An air gap protects against backsiphonage and should not be bypassed to solve noise, splash, or drain-capacity problems.
Floor Drain Capacity for Water Treatment|floor-drain-water-treatment|floor drain for water softener|projects|A drain must handle peak discharge without overflow, cross-connection, freezing, blockage, or damage to the building.
Septic System and Softener Discharge|softener-discharge-septic|water softener discharge septic system|projects|Softener discharge decisions should consider system design, local requirements, hydraulic loading, salt, soil, and septic professional guidance.
Well Setback and Treatment Planning|well-setback-treatment-planning|well setback water treatment planning|projects|Well, septic, property-line, drainage, chemical storage, and equipment placement constraints should be reviewed before construction.
New Construction Water-Treatment Rough-In|new-construction-water-treatment-rough-in|water treatment plumbing rough in|projects|A rough-in can provide correct pipe size, loop location, drains, outlets, sampling points, bypasses, and equipment clearance before finishes.
Water-Treatment Electrical Requirements|water-treatment-electrical-planning|electrical outlet water softener UV|projects|UV, pumps, controls, valves, heaters, and monitors need correctly located, protected, code-compliant power and documented outage behavior.
Leak Detection for Water Equipment|water-treatment-leak-detection|leak detector water treatment system|projects|Sensors and automatic shutoffs differ in coverage, valve size, power, communication, testing, placement, and failure behavior.
Automatic Water Shutoff Valves|automatic-water-shutoff-valve|automatic main water shutoff valve|projects|Automatic shutoffs can limit damage but require appropriate sensing, valve compatibility, manual override, maintenance, and household response planning.
Water-Treatment Equipment Pads|water-treatment-equipment-pad|water softener equipment pad|projects|Equipment needs stable, level, load-capable support with drainage, restraint where needed, and protection from impact or standing water.
Water-Treatment Noise Planning|water-treatment-equipment-noise|water softener noise location|projects|Regeneration, pumps, drains, valves, and vibration can disturb living areas and should be considered before equipment location is finalized.
Water-Treatment Space Requirements|water-treatment-space-requirements|how much space water treatment system|projects|Usable space includes tanks, plumbing, bypasses, filter removal, salt loading, media service, access paths, and future replacement.
Water-Treatment Installation Photos|water-treatment-installation-documentation|document water treatment installation|projects|Clear photos and labels preserve pipe routing, valves, drains, electrical connections, model numbers, settings, and baseline condition.
Water-Treatment Commissioning Report|water-treatment-commissioning-report|water treatment startup report|projects|Commissioning should document installation checks, settings, flow, pressure, drains, leaks, alarms, water results, and owner training.
Baseline Water-Quality Testing Plan|baseline-water-quality-testing|baseline water test before treatment|monitoring|A baseline should use representative sampling, appropriate certified parameters, correct locations, and documented operating conditions before treatment.
Post-Installation Water Testing|post-installation-water-testing|test water after filter installation|monitoring|Post-installation testing must repeat the measurements that justified treatment and distinguish startup flushing from steady operation.
Water-Treatment Performance Trend|water-treatment-performance-trend|track water filter performance|monitoring|Trends in results, pressure, flow, gallons, settings, and service events are more informative than isolated readings.
Sampling Before and After Treatment|before-after-water-sampling|water test before and after filter|monitoring|Paired sampling requires clear locations, comparable timing, suitable methods, and understanding of each treatment stage.
Water-Test Chain of Custody|water-test-chain-of-custody|water test chain of custody|monitoring|Chain-of-custody records document sample identity, collection, preservation, transfer, receipt, and analysis for defensible results.
Water Sample Holding Times|water-sample-holding-time|water test sample holding time|monitoring|Many parameters have method-specific preservation and holding-time requirements that can invalidate delayed or mishandled samples.
Choosing Water-Test Detection Limits|water-test-detection-limits|water laboratory detection limit|monitoring|A laboratory method must report low enough to support the health, regulatory, treatment, or investigative decision being made.
Understanding Non-Detect Water Results|non-detect-water-test|non detect on water test report|monitoring|A non-detect means the analyte was not reported above a method limit; it does not necessarily prove absolute absence.
Water-Test Units and Conversions|water-test-units-conversions|water test mg L ug L ppm conversion|monitoring|Results may use mg/L, µg/L, ppm, ppb, grains, colonies, or other units that must be compared without conversion errors.
Water-Test Blank Samples|water-test-blank-samples|blank sample water testing|monitoring|Field, trip, and equipment blanks can reveal contamination introduced by containers, travel, environment, or sampling equipment.
Water Laboratory Accreditation Check|water-lab-accreditation-check|verify certified water laboratory|monitoring|Laboratory credentials should be verified for the exact method, analyte, matrix, and jurisdiction relevant to the decision.
Home Water Meter Monitoring|home-water-meter-monitoring|monitor home water meter for leaks|monitoring|Meter trends can reveal leaks, irrigation, abnormal use, or treatment-cycle demand but do not identify water quality.
Whole-House Flow Monitoring|whole-house-water-flow-monitor|whole house water flow monitor|monitoring|Flow monitors differ in pipe compatibility, accuracy, power, connectivity, shutoff behavior, and ability to distinguish normal treatment cycles.
Pressure Gauges Around Water Treatment|water-treatment-pressure-gauges|pressure gauges before after water filter|monitoring|Gauges before and after equipment help identify pressure loss, loading, pump behavior, and changing service conditions.
Differential Pressure Filter Monitoring|filter-differential-pressure|differential pressure water filter|monitoring|Pressure differential should be measured at meaningful flow and trended against the filter's service criteria.
Water Softener Hardness Monitoring|softener-hardness-monitoring|test hardness after water softener|monitoring|Hardness checks can detect bypass, exhaustion, poor regeneration, mixing, or sampling errors when performed consistently.
Chlorine Residual Monitoring at Home|chlorine-residual-monitoring|test chlorine residual tap water|monitoring|Disinfectant residual testing requires a suitable method, immediate timing, correct range, and interpretation within utility or treatment context.
UV Intensity Monitoring|uv-intensity-monitoring|UV water system intensity monitor|monitoring|UV intensity readings depend on sensor condition, lamp output, sleeve fouling, water transmittance, temperature, and validated alarm thresholds.
Remote Water-System Alarms|remote-water-system-monitoring|remote alarm well water system|monitoring|Remote alarms can report leaks, power, pressure, tank levels, UV status, or flow but need reliable communication and a response plan.
Annual Water-System Review|annual-water-system-review|annual water treatment inspection|monitoring|An annual review should reconcile current water results, equipment performance, household changes, service records, safety devices, and upcoming maintenance.
`.trim();

const refs={seasonal:["EPA — Emergency Disinfection of Drinking Water: https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water","CDC — Private Well Safety After Disasters: https://www.cdc.gov/water-emergency/about/index.html"],media:["NSF — Standards for Water Treatment Systems: https://www.nsf.org/consumer-resources/water-quality/water-filters-testing-treatment/standards-water-treatment-systems","EPA — Drinking Water in Your Home: https://www.epa.gov/ground-water-and-drinking-water/drinking-water-your-home"],plumbing:["EPA — Drinking Water in Your Home: https://www.epa.gov/ground-water-and-drinking-water/drinking-water-your-home","EPA WaterSense — Fix a Leak: https://www.epa.gov/watersense/fix-leak-week"],projects:["NC Licensing Board — Plumbing and Heating Contractors: https://nclicensing.org/","EPA — Private Drinking Water Wells: https://www.epa.gov/privatewells"],monitoring:["EPA — Home Drinking Water Testing: https://www.epa.gov/ground-water-and-drinking-water/home-drinking-water-testing","CDC — Guidelines for Testing Well Water: https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html"]};
const rows=raw.split("\n").map(line=>line.split("|"));
if(rows.length!==100)throw new Error(`Expected 100 topics; got ${rows.length}`);
const topics=rows.map(([title,slug,query,group,focus],i)=>({number:391+i,title,slug,query,group,focus}));
const allExisting=(await Promise.all((await readdir(contentDir)).filter(x=>x.endsWith(".md")).map(x=>readFile(join(contentDir,x),"utf8")))).join("\n");
for(const topic of topics)if(allExisting.includes(`/${topic.slug}/`))throw new Error(`Existing slug: ${topic.slug}`);
if(new Set(topics.map(x=>x.slug)).size!==100)throw new Error("Duplicate new slug");

const render=x=>`## ${x.number}. ${x.title}
**Slug:** \`/${x.slug}/\`
**Title tag:** ${x.title} | Asheville Water Specialists
**Meta description:** ${(`${x.title}: what to document, how to compare safe options, and how to verify the result for a Western North Carolina home.`).slice(0,155)}
**Query:** ${x.query}

${x.focus} A responsible decision starts by defining the exact symptom or objective, its location and timing, the water source, and whether an official advisory or urgent health concern changes the next step.

### Establish the evidence

Document affected fixtures, hot-versus-cold behavior, flow and pressure, recent weather or work, existing equipment, service history, household demand, and earlier results. Photographs and consistent readings can reveal patterns, but appearance, taste, odor, staining, scale, or a sales demonstration cannot establish that water is safe.

Use a state-certified laboratory for health-related contaminants and microorganisms. Follow the utility, health department, environmental agency, or equipment manufacturer when sampling methods, preservation, response times, or operating conditions are specified.

### Compare practical options

Tie every proposed correction or treatment stage to a measured condition and a specific job. Compare validated or certified claims, service flow, pressure loss, inlet limits, capacity, drainage, electricity, consumables, sanitation, alarms, replacement parts, service access, waste, warranty, and total ownership work.

Plumbing repair, source protection, well service, flushing, an official public-health action, or no equipment at all may be more appropriate than adding filtration. Point-of-use and whole-home systems solve different scopes, and unnecessary stages create pressure loss, maintenance, stagnant-water risk, and opportunities for unnoticed exhaustion.

### Verify and maintain

Record a baseline before the work. After correction or installation, repeat the measurement that justified the decision at a representative point and under comparable conditions. Keep test reports, model numbers, settings, installation dates, photographs, consumable changes, and service events together.

Use appropriately qualified professionals for plumbing, electrical, well, structural, environmental, or public-health work. Investigate recurring symptoms, leaks, pressure loss, alarms, abnormal water use, and breakthrough instead of resetting a timer without diagnosing the cause.

### Authoritative references

${refs[x.group].map(r=>`- ${r}`).join("\n")}

These references provide general guidance. Property-specific instructions from a certified laboratory, health department, utility, licensed professional, environmental agency, healthcare professional, or equipment manufacturer take priority.
`;
const batches=[[391,410,"generated-24-seasonal-391-410.md"],[411,430,"generated-25-media-411-430.md"],[431,450,"generated-26-plumbing-431-450.md"],[451,470,"generated-27-projects-451-470.md"],[471,490,"generated-28-monitoring-471-490.md"]];
for(const [from,to,file] of batches){const selected=topics.filter(x=>x.number>=from&&x.number<=to);await writeFile(join(contentDir,file),`# Ranking-Targeted Guides ${from}-${to}\n\n${selected.map(render).join("\n")}`,"utf8");}
console.log(`Generated ${topics.length} pages in ${batches.length} files.`);
