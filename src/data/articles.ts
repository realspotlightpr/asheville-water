export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleFaq = { question: string; answer: string };
export type ArticleSource = { label: string; url: string };

export type ArticleGuide = {
  slug: string;
  title: string;
  description: string;
  readTime: string;
  answer: string;
  takeaways: string[];
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  sources: ArticleSource[];
  related: string[];
};

export const articleGuides: ArticleGuide[] = [
  {
    slug: "how-water-softeners-work",
    title: "How Water Softeners Work: A Plain-English Guide",
    description: "Learn how ion-exchange water softeners remove hardness, what regeneration does, how salt is used, and what a softener can—and cannot—treat.",
    readTime: "8 min read",
    answer: "A traditional water softener uses ion-exchange resin to swap hardness minerals—primarily calcium and magnesium—for sodium or potassium ions. When the resin reaches capacity, the control valve runs a regeneration cycle that cleans and recharges the media with brine.",
    takeaways: [
      "Softening removes hardness; it is not the same as general contaminant filtration.",
      "A demand-initiated valve regenerates from actual water use instead of a fixed calendar.",
      "Correct sizing depends on tested hardness, household demand, and available flow.",
      "Salt-free conditioners may reduce scale behavior but do not create truly soft water.",
    ],
    sections: [
      {
        heading: "What hard water means",
        paragraphs: [
          "Hard water contains dissolved calcium and magnesium. These minerals are not usually a health concern, but they can leave scale on fixtures, reduce soap lather, spot glassware, and accumulate inside water-using appliances.",
          "Hardness is commonly reported as grains per gallon (GPG) or milligrams per liter as calcium carbonate. The number matters because it determines how much mineral load a softener must remove before regeneration.",
        ],
      },
      {
        heading: "The ion-exchange process step by step",
        paragraphs: [
          "Inside the mineral tank are thousands of resin beads carrying sodium or potassium ions. As hard water passes through the bed, calcium and magnesium attach to the resin while the exchange ions move into the water.",
          "Eventually the resin has captured as much hardness as it can. During regeneration, brine flows through the tank, displaces the accumulated hardness, and restores the resin’s exchange capacity. The system then rinses and returns to service.",
        ],
        bullets: [
          "Service: household water passes through the resin and hardness is removed.",
          "Backwash: the media bed is loosened and debris is flushed.",
          "Brine draw: concentrated salt solution recharges the resin.",
          "Rinse and refill: excess brine is cleared and the brine tank is prepared for the next cycle.",
        ],
      },
      {
        heading: "Efficient sizing and regeneration",
        paragraphs: [
          "An oversized or poorly programmed unit can waste salt and water; an undersized unit may regenerate too often or allow hardness through during peak demand. EPA recommends demand-initiated regeneration, which uses a meter or hardness sensor rather than regenerating only on a preset schedule.",
          "For a Western North Carolina home, useful inputs include tested hardness, iron if present, the number of residents and bathrooms, peak flow, and whether the property uses a septic system.",
        ],
      },
      {
        heading: "What a water softener does not remove",
        paragraphs: [
          "A softener should not be sold as a universal water purifier. Standard cation exchange does not replace carbon filtration for chlorine and many organic chemicals, reverse osmosis for broad drinking-water reduction, sediment filtration, or disinfection for bacteria.",
          "Combination systems can pair technologies, but each component should have a defined purpose supported by the water report.",
        ],
      },
    ],
    faqs: [
      { question: "Does softened water contain salt?", answer: "The brine used for regeneration is rinsed to drain. Ion exchange adds a relatively small amount of sodium or potassium to treated water, with the amount related to incoming hardness. People on sodium-restricted diets should ask a clinician and may prefer an unsoftened drinking tap or reverse osmosis." },
      { question: "How often should a softener regenerate?", answer: "There is no universal schedule. A correctly programmed demand-initiated system regenerates when its calculated capacity is nearly used, based on hardness, capacity, and household consumption." },
      { question: "Will a softener remove iron?", answer: "Some softeners can handle limited dissolved iron, but iron type and concentration matter. Higher levels, oxidized iron, sulfur, or manganese often require dedicated treatment before softening." },
      { question: "Is soft water safe to drink?", answer: "Softened water is commonly used throughout homes. Individual dietary or plumbing considerations vary; an under-sink reverse osmosis system can provide a separate drinking-water option." },
    ],
    sources: [
      { label: "EPA WaterSense: Cation Exchange Water Softeners", url: "https://www.epa.gov/watersense/cation-exchange-water-softeners" },
      { label: "EPA: Water-Efficient Water Softener Guide", url: "https://www.epa.gov/system/files/documents/2026-05/ws-products-water-softener-guide.pdf" },
    ],
    related: ["salt-vs-salt-free", "how-long-water-softeners-last", "water-softener-cost-roi"],
  },
  {
    slug: "water-softener-cost-roi",
    title: "Water Softener Cost and ROI: What Homeowners Should Calculate",
    description: "Understand water softener purchase price, installation, maintenance, operating costs, and the realistic ways softened water may create household value.",
    readTime: "9 min read",
    answer: "Water-softener ROI is not one guaranteed payback number. Calculate total installed price, salt and regeneration water, service, and media life; then compare those costs with the value of reduced scale, easier cleaning, lower soap use, and protection of water-using equipment.",
    takeaways: [
      "Compare complete installed scope—not only the tank price.",
      "Ask whether plumbing modifications, disposal, permits, and startup are included.",
      "Efficiency and correct programming affect ongoing salt and water use.",
      "Treat appliance-life or energy savings as potential value, not a guaranteed return.",
    ],
    sections: [
      { heading: "What determines installed cost?", paragraphs: ["System capacity, valve quality, media, plumbing complexity, drain access, electrical access, bypass configuration, pre-treatment, and local labor all influence installed price.", "Asheville Water Specialists publishes flat product pricing: current whole-home city-water systems begin at $2,699, with larger, dual-tank, well-water, and specialty configurations priced separately. A valid comparison should confirm exactly what is installed and warranted."], bullets: ["Equipment and media", "Licensed installation labor", "Bypass, connections, and drain routing", "Startup, programming, and water check", "Warranty terms and future service"] },
      { heading: "Ongoing operating costs", paragraphs: ["Traditional softeners use salt and water during regeneration. Usage varies with incoming hardness, household demand, system capacity, and programming. Demand-initiated regeneration can reduce unnecessary cycles compared with a fixed timer.", "Budget for salt, occasional inspection or cleaning, and eventual resin or component replacement. Well-water systems may also require prefilters or specialized media service."] },
      { heading: "Where household value can appear", paragraphs: ["Softening can reduce mineral scale on fixtures and inside appliances, improve soap performance, and reduce time spent removing deposits. These are real forms of value even when they do not appear as a monthly cash payment.", "Avoid proposals that promise a precise appliance lifespan or guaranteed utility savings without home-specific evidence. The strongest purchase case is usually solving a confirmed hardness problem with appropriately sized equipment."] },
      { heading: "A better way to compare quotes", paragraphs: ["Normalize every quote to the same treatment goal and flow requirement. Ask for the tested hardness, rated capacity at the programmed salt dose, expected regeneration frequency, warranty exclusions, and annual maintenance.", "A lower equipment price can become expensive if the system is undersized or unsupported; a higher price is not automatically better if it includes treatment your water does not need."] },
    ],
    faqs: [
      { question: "How much is a water softener in Asheville?", answer: "Our currently published whole-home city-water options start at $2,699 installed, with larger and specialized systems priced higher. Site conditions and the correct treatment design determine the final scope." },
      { question: "Does a water softener increase home value?", answer: "It may improve buyer appeal and protect fixtures, but resale value varies by market and property. Treat it primarily as a home-performance and water-quality improvement." },
      { question: "How much salt will I use?", answer: "Salt use depends on hardness, water consumption, capacity, and programming. Ask for the expected pounds per regeneration and estimated cycle frequency using your test results." },
      { question: "Is financing the same as ROI?", answer: "No. Financing changes when you pay; ROI considers total cost and household value over time. Compare interest and fees as part of total ownership cost." },
    ],
    sources: [{ label: "EPA WaterSense: Water Softener Efficiency", url: "https://www.epa.gov/watersense/cation-exchange-water-softeners" }],
    related: ["how-water-softeners-work", "how-long-water-softeners-last", "salt-vs-salt-free"],
  },
  {
    slug: "salt-vs-salt-free",
    title: "Salt vs. Salt-Free Water Treatment: The Honest Difference",
    description: "Compare ion-exchange softeners with salt-free conditioners, including hardness removal, scale control, maintenance, wastewater, and best-fit homes.",
    readTime: "8 min read",
    answer: "A salt-based ion-exchange softener removes calcium and magnesium and produces measurably soft water. A salt-free conditioner generally changes how hardness minerals form scale but leaves the minerals in the water. They solve related—but not identical—problems.",
    takeaways: ["Choose ion exchange when true hardness removal is the goal.", "Consider salt-free conditioning when avoiding salt, brine, power, or drain discharge is the priority.", "Do not evaluate either option before measuring hardness and defining the desired result.", "Neither technology is a substitute for contaminant-specific filtration."],
    sections: [
      { heading: "Traditional ion-exchange softening", paragraphs: ["Ion exchange captures calcium and magnesium on resin and replaces them with sodium or potassium ions. The result is lower measured hardness, improved soap behavior, and reduced scale formation.", "The tradeoffs are a brine tank, salt replenishment, regeneration wastewater, drain access, and programming. Efficient demand-initiated equipment regenerates from actual usage." ] },
      { heading: "Salt-free conditioning", paragraphs: ["Salt-free systems are commonly designed to alter mineral crystallization so hardness is less likely to adhere as scale. Because calcium and magnesium remain present, a hardness test before and after the unit may show little change.", "Conditioners can suit homeowners who accept that distinction and prioritize minimal maintenance, no brine, no electrical valve, or no regeneration discharge." ] },
      { heading: "Side-by-side decision guide", paragraphs: ["If the main complaints are poor soap lather, mineral spotting, and a desire for the feel of soft water, ion exchange is typically the more direct match. If the goal is scale management without salt and the water conditions fit the manufacturer’s limits, conditioning may be reasonable.", "Iron, manganese, sediment, low pH, or other conditions can interfere with either approach and may require pretreatment."], bullets: ["True hardness removal: ion exchange", "No salt or brine tank: salt-free", "No regeneration drain: salt-free", "Predictable soft-water result: ion exchange", "Contaminant removal: requires separate, appropriate filtration"] },
      { heading: "Questions to ask before buying", paragraphs: ["Ask the seller to state whether the proposed unit removes hardness or conditions scale, how performance is verified, what incoming-water limits apply, and what result you should expect at fixtures.", "Clear terminology matters. A salt-free conditioner should not be represented as chemically identical to a softener." ] },
    ],
    faqs: [
      { question: "Is salt-free water actually soft?", answer: "Usually no. Most salt-free conditioners leave calcium and magnesium in the water, so measured hardness remains. They are intended primarily for scale behavior." },
      { question: "Which system is better for well water?", answer: "Neither can be selected from the source alone. Test hardness, iron, manganese, pH, sulfur, sediment, and bacteria; pretreatment may be needed before softening or conditioning." },
      { question: "Does a softener make water salty?", answer: "Regeneration brine is rinsed away, but ion exchange adds some sodium or potassium based on removed hardness. It should not taste like brine when operating correctly." },
      { question: "Does salt-free treatment remove chlorine or PFAS?", answer: "No general salt-free scale conditioner should be assumed to remove those contaminants. Look for a separate technology and verified reduction claim." },
    ],
    sources: [{ label: "EPA WaterSense: How Ion-Exchange Softeners Work", url: "https://www.epa.gov/watersense/cation-exchange-water-softeners" }],
    related: ["how-water-softeners-work", "water-softener-cost-roi", "how-long-water-softeners-last"],
  },
  {
    slug: "how-long-water-softeners-last",
    title: "How Long Do Water Softeners Last? Components, Maintenance, and Warning Signs",
    description: "Learn what determines water-softener lifespan, which components wear first, how water chemistry affects resin, and when repair makes more sense than replacement.",
    readTime: "8 min read",
    answer: "A quality water softener can often serve a home for many years, but it does not have one universal expiration date. Valve design, resin quality, chlorine or iron exposure, sizing, regeneration efficiency, water pressure, and maintenance determine useful life component by component.",
    takeaways: ["The control valve, resin, tanks, seals, and brine components age differently.", "Chlorine, iron, sediment, and incorrect sizing can shorten resin or valve life.", "Changes in water feel do not always mean the entire system needs replacement.", "Record settings, service dates, hardness results, and salt use to spot trends."],
    sections: [
      { heading: "Think in components, not one expiration date", paragraphs: ["The pressure tanks may remain serviceable while resin loses capacity or a valve seal wears. A repairable valve issue should not automatically trigger full replacement, and new resin will not solve a failing control head.", "Warranty language helps reveal expected support but is not the same as predicted system life. Our whole-home offerings include a lifetime valve warranty and defined media coverage; review the written terms for the exact product." ] },
      { heading: "What shortens softener life?", paragraphs: ["Free chlorine can oxidize some resins over time. Iron and manganese can foul media and internal parts. Sediment can restrict valves. Excessive pressure, frequent regeneration, long periods without use, and incorrect programming also add stress."], bullets: ["Untreated iron or sediment", "High oxidant exposure", "Undersizing and frequent regeneration", "Bridged or contaminated salt", "Drain or injector restrictions", "Extreme water pressure"] },
      { heading: "Signs the system needs service", paragraphs: ["Useful clues include hardness returning before regeneration, unexplained salt use, constant drain flow, a tank that does not draw brine, reduced flow, error codes, or a sudden change in regeneration timing.", "Confirm the problem with a hardness test at an untreated and treated tap. Soap feel alone is subjective and can be affected by other water changes." ] },
      { heading: "Repair, re-bed, or replace?", paragraphs: ["Repair is often sensible when the tank and valve platform are supported and the failure is isolated. Re-bedding may make sense when resin capacity has declined but the mechanical system remains sound.", "Replacement becomes more compelling when parts are obsolete, the unit is incorrectly sized, multiple major components are failing, or the original treatment design no longer matches the water." ] },
    ],
    faqs: [
      { question: "How do I know if the resin is exhausted?", answer: "Compare hardness immediately after regeneration with hardness as capacity is used. Persistent leakage despite correct settings and a functioning valve may indicate fouling or capacity loss." },
      { question: "Should a softener be serviced every year?", answer: "Annual observation is useful even when no repair is needed: check salt condition, leaks, drain flow, settings, bypass position, and treated-water hardness." },
      { question: "Can chlorine damage softener resin?", answer: "Oxidants can degrade some resin over time. Exposure level, resin type, temperature, and contact duration affect the rate." },
      { question: "Is a lifetime warranty the same as lifetime equipment?", answer: "No. Warranty coverage applies to specified parts and conditions. Media, labor, consumables, and other components may have different terms." },
    ],
    sources: [{ label: "EPA: Selecting and Maintaining a Water-Efficient Softener", url: "https://www.epa.gov/system/files/documents/2026-05/ws-products-water-softener-guide.pdf" }],
    related: ["how-water-softeners-work", "water-softener-cost-roi", "salt-vs-salt-free"],
  },
  {
    slug: "pfas-in-wnc-water",
    title: "PFAS in Western North Carolina Water: Testing, Standards, and Filtration",
    description: "A current guide to PFAS in Western NC drinking water, EPA standards, public-system reports, private-well testing, and certified carbon or reverse-osmosis filters.",
    readTime: "10 min read",
    answer: "PFAS are a large family of persistent synthetic chemicals. You cannot see, smell, or taste them, so the correct sequence is to check utility data or use an appropriate laboratory test, then select treatment with a certified reduction claim for the PFAS of concern.",
    takeaways: ["PFAS presence cannot be diagnosed from taste, odor, or appearance.", "EPA’s enforceable limits for PFOA and PFOS remain 4.0 parts per trillion each as of 2026.", "Granular activated carbon, ion exchange, and reverse osmosis are established PFAS treatment approaches.", "Look for third-party certification and replace filters on schedule."],
    sections: [
      { heading: "What are PFAS?", paragraphs: ["Per- and polyfluoroalkyl substances are used in many industrial and consumer applications because of their resistance to heat, oil, stains, grease, and water. Their persistence means some compounds can remain in the environment and accumulate over time.", "PFAS is not one chemical. Test reports and certifications should identify the specific compound or reduction claim rather than using ‘forever chemicals’ as a vague sales phrase." ] },
      { heading: "How to check your Western NC water", paragraphs: ["Municipal customers should begin with their utility’s annual water-quality report and PFAS notices. Private-well owners are responsible for their own testing and should ask the county health department or a state-certified laboratory which PFAS panel and sampling method are appropriate.", "Avoid ordinary sample containers or improvised collection methods; PFAS testing is sensitive to contamination from common materials." ] },
      { heading: "Which home filters can reduce PFAS?", paragraphs: ["EPA identifies granular activated carbon, ion-exchange resin, and high-pressure membranes such as reverse osmosis among established separation technologies. At home, activated carbon and under-sink RO are common options, but performance varies by compound, water chemistry, flow, and filter age.", "EPA recommends looking for accredited certification under NSF/ANSI 53 or NSF/ANSI 58 with a PFAS reduction claim and checking that the certification applies to the compound you want to reduce." ] },
      { heading: "Whole-home versus drinking-water treatment", paragraphs: ["An under-sink RO system treats a focused volume used for drinking and cooking. Whole-home carbon treats much higher flow and may address additional taste, odor, and organic-chemical goals, but design and replacement capacity become critical.", "Select treatment after defining the exposure route and confirmed result. No filter should be described as removing every PFAS indefinitely." ] },
    ],
    faqs: [
      { question: "Can boiling water remove PFAS?", answer: "No. Boiling does not destroy PFAS and can concentrate nonvolatile contaminants as water evaporates." },
      { question: "Does every carbon filter remove PFAS?", answer: "No. Media type, contact time, compound, flow, and capacity matter. Look for a relevant third-party certified reduction claim." },
      { question: "Is reverse osmosis effective for PFAS?", answer: "EPA identifies reverse osmosis as an effective high-pressure membrane technology for PFAS reduction. Choose certified equipment and maintain it as directed." },
      { question: "Should private wells be tested for PFAS?", answer: "Testing decisions depend on local risk and nearby land use. Ask your county health department or state environmental agency, especially near known releases, industrial sites, airports, landfills, or firefighting-foam use." },
    ],
    sources: [
      { label: "EPA: PFAS Drinking Water Regulation", url: "https://www.epa.gov/sdwa/and-polyfluoroalkyl-substances-pfas" },
      { label: "EPA: Filters Certified to Reduce PFAS", url: "https://www.epa.gov/water-research/identifying-drinking-water-filters-certified-reduce-pfas" },
      { label: "EPA: PFAS Treatment Technologies", url: "https://www.epa.gov/sciencematters/reducing-pfas-drinking-water-treatment-technologies" },
    ],
    related: ["well-water-testing-wnc", "lead-pipes-older-homes", "how-water-softeners-work"],
  },
  {
    slug: "lead-pipes-older-homes",
    title: "Lead in Older Western NC Homes: Pipes, Testing, and Certified Filters",
    description: "Learn how lead enters drinking water in older homes, why the utility result may not match your tap, how to test, and which certified filters can reduce exposure.",
    readTime: "9 min read",
    answer: "Lead usually enters household drinking water through corrosion of lead service lines, solder, brass, fixtures, or internal plumbing—not because it is visibly present in source water. The only way to know the level at a specific tap is proper sampling and laboratory testing.",
    takeaways: ["Lead has no taste, smell, or color in drinking water.", "Home-specific plumbing can make your result different from the utility average.", "Use cold water for drinking and cooking, and follow local flushing guidance.", "Choose filters certified for lead reduction under applicable NSF/ANSI standards."],
    sections: [
      { heading: "Where lead can enter a home’s water", paragraphs: ["Older service lines, lead solder, brass fixtures, galvanized pipe downstream of lead, and some plumbing components can contribute lead when water remains in contact with them. Corrosion depends on water chemistry, temperature, stagnation time, and plumbing condition.", "Asheville’s utility publishes lead sampling and a service-line inventory, but a system-wide result cannot describe every individual property or faucet." ] },
      { heading: "How to test correctly", paragraphs: ["Contact the water utility or a state-certified laboratory for sampling instructions. Different sample types answer different questions: a first-draw sample evaluates water that sat in plumbing, while sequential or flushed samples can help locate the source.", "Do not rely on a general TDS meter or visual inspection. If construction, plumbing replacement, or disturbance occurred, ask whether follow-up testing is appropriate." ] },
      { heading: "Immediate exposure-reduction steps", paragraphs: ["Until results are understood, use cold water for drinking, cooking, and infant formula because hot water can dissolve metals more readily. Follow utility guidance on flushing after stagnation and regularly clean faucet aerators where particles can collect.", "Boiling does not remove lead. As water evaporates, it can increase the concentration." ] },
      { heading: "Choosing a filter for lead", paragraphs: ["EPA advises selecting point-of-use or pitcher filters evaluated by an accredited certification body for lead reduction. Look for the exact reduction claim and standards listed on the product—not merely an NSF logo.", "EPA’s consumer tool highlights products certified for lead reduction to 5 ppb or less and particulate reduction capabilities under NSF/ANSI 53 and 42. Replace cartridges on schedule because capacity is finite." ] },
    ],
    faqs: [
      { question: "Does Asheville have lead in its water?", answer: "The City’s annual report provides system sampling results, but lead often comes from property-specific service lines and plumbing. Check the current city report and service-line inventory, then test the tap if concerned." },
      { question: "Will a water softener remove lead?", answer: "Do not assume a standard softener is a certified lead-reduction device. Select treatment with an explicit, third-party certified lead claim." },
      { question: "Does reverse osmosis remove lead?", answer: "Some RO systems carry certified lead-reduction claims. Verify the exact model, certification, installation, and maintenance requirements." },
      { question: "Can I shower in water containing lead?", answer: "EPA guidance focuses on ingestion because human skin does not absorb lead in water. Drinking, cooking, and formula preparation are the primary concerns." },
    ],
    sources: [
      { label: "EPA: Certified Filters to Reduce Lead", url: "https://www.epa.gov/water-research/consumer-tool-identifying-point-use-and-pitcher-filters-certified-reduce-lead" },
      { label: "City of Asheville: 2025 Water Quality Report", url: "https://www.ashevillenc.gov/department/water/water-quality-report/" },
    ],
    related: ["pfas-in-wnc-water", "well-water-testing-wnc", "how-water-softeners-work"],
  },
  {
    slug: "well-water-testing-wnc",
    title: "Well Water Testing in Western NC: What to Test and When",
    description: "A practical Western North Carolina private-well testing checklist covering annual bacteria, nitrate, TDS and pH tests plus iron, sulfur, metals, and local risk factors.",
    readTime: "10 min read",
    answer: "CDC recommends testing private-well water at least annually for total coliform bacteria, nitrates, total dissolved solids, and pH, using a state-certified laboratory. Western NC owners should also discuss geology, flooding, septic systems, land use, and observed staining or odor with the county health department.",
    takeaways: ["Private wells are not routinely regulated or monitored like public water systems.", "Test at least annually and after flooding, repairs, or a change in taste, color, or smell.", "Use a state-certified laboratory and follow sampling instructions exactly.", "Treat the laboratory result—not an odor or sales demonstration."],
    sections: [
      { heading: "The annual core panel", paragraphs: ["CDC’s baseline annual list is total coliform bacteria, nitrate, total dissolved solids, and pH. Coliforms and chemistry indicators help reveal whether the well may be vulnerable or whether additional investigation is needed.", "Ask the county environmental health department about contaminants of local concern and certified laboratories. Testing should also reflect nearby septic systems, agriculture, fuel storage, industrial activity, mining history, and natural geology." ], bullets: ["Total coliform bacteria and E. coli when indicated", "Nitrate", "pH", "Total dissolved solids", "Locally relevant chemicals or metals"] },
      { heading: "Western NC treatment-planning tests", paragraphs: ["Water-treatment design often needs measurements beyond a health screening. Hardness, iron, manganese, sediment, alkalinity, and sulfur-related conditions affect equipment selection, order, and sizing.", "A rotten-egg odor does not identify one cause by itself. Staining color is also not a complete test. Laboratory and onsite measurements should be interpreted together." ] },
      { heading: "When to test more often", paragraphs: ["Test after flooding, well repair, pump work, land disturbance, or a noticeable change in water. CDC also recommends testing when someone becomes pregnant or a child begins living in the home.", "Mountain storms and runoff can expose well or casing vulnerabilities. If contamination is suspected, use a safe alternate drinking source and contact the health department while results are pending." ] },
      { heading: "Turn results into a treatment train", paragraphs: ["Treatment order matters. Sediment may need removal before oxidation; iron and sulfur treatment may come before softening; disinfection may require pretreatment for clarity; and drinking-water RO is typically a separate point-of-use step.", "Retest after treatment to verify performance. A system that changes appearance but does not address the measured parameter is not a validated solution." ] },
    ],
    faqs: [
      { question: "Who regulates private wells in North Carolina?", answer: "EPA public-water rules do not apply to privately owned wells. Well owners are responsible for ongoing water quality, with county and state agencies providing permitting, laboratory, and health guidance." },
      { question: "Can a home test kit replace a laboratory?", answer: "Screening kits can be useful for some parameters, but health decisions and treatment design should use the appropriate state-certified laboratory method." },
      { question: "Should I test after heavy rain or flooding?", answer: "Yes when flooding, damage, or surface-water intrusion may have affected the well. Follow county guidance for disinfection, sampling timing, and safe water use." },
      { question: "What causes orange stains or rotten-egg odor?", answer: "Orange staining often suggests iron, while sulfur odors can have multiple causes. Test before selecting treatment because iron form, manganese, bacteria, water-heater conditions, and hydrogen sulfide require different responses." },
    ],
    sources: [
      { label: "CDC: Guidelines for Testing Well Water", url: "https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html" },
      { label: "EPA: Protect Your Home’s Water", url: "https://www.epa.gov/privatewells" },
    ],
    related: ["pfas-in-wnc-water", "lead-pipes-older-homes", "salt-vs-salt-free"],
  },
];
