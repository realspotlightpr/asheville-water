export type ResourceTopicLink = {
  path: string;
  title: string;
  description: string;
};

export type ResourceTopic = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  links: ResourceTopicLink[];
};

export const resourceTopics: ResourceTopic[] = [
  {
    slug: "well-water",
    title: "Private Well Water Testing and Treatment",
    shortTitle: "Well Water",
    description: "Western North Carolina well-water guides covering laboratory testing, bacteria, iron, sulfur odor, sediment, low pH, source protection, and treatment planning.",
    intro: "Private wells can differ from one property to the next. Start with source protection and representative testing, then match each treatment stage to a measured condition and the home's flow requirements.",
    links: [
      { path: "/resources/well-water-testing-wnc/", title: "Well Water Testing in Western NC", description: "What to test, when to retest, and how to collect useful samples." },
      { path: "/well-water-treatment-asheville-nc/", title: "Well-Water Treatment in Asheville and WNC", description: "Build a treatment plan around test results, source conditions, and household demand." },
      { path: "/bacteria-in-well-water/", title: "Bacteria in Well Water", description: "Understand positive results, source investigation, disinfection, and verification." },
      { path: "/iron-filtration-well-water/", title: "Iron Filtration for Well Water", description: "Separate dissolved and particulate iron before choosing treatment." },
      { path: "/sulfur-smell-well-water-treatment/", title: "Sulfur Odor in Well Water", description: "Identify where the odor begins and which conditions should be tested." },
      { path: "/sediment-filtration-well-water/", title: "Sediment Filtration for Well Water", description: "Compare spin-down, cartridge, and other sediment-control approaches." },
      { path: "/spring-vs-drilled-well-water/", title: "Spring Water vs. Drilled Well Water", description: "Compare protection, testing, reliability, storage, and ownership questions." },
    ],
  },
  {
    slug: "water-softeners",
    title: "Water Softeners and Hard-Water Solutions",
    shortTitle: "Water Softeners",
    description: "Learn how water softeners work, what installation involves, how to compare conditioning options, and how to diagnose salt, brine, scale, and maintenance problems.",
    intro: "Water softening addresses hardness minerals. Correct sizing depends on measured hardness, household demand, peak flow, regeneration settings, salt efficiency, and any iron or sediment entering the system.",
    links: [
      { path: "/water-softener-installation-asheville-nc/", title: "Water Softener Installation in Asheville", description: "Sizing, plumbing, drainage, startup, and licensed installation." },
      { path: "/resources/how-water-softeners-work/", title: "How Water Softeners Work", description: "A plain-language explanation of ion exchange and regeneration." },
      { path: "/hard-water-treatment-asheville/", title: "Hard-Water Treatment Options", description: "Confirm hardness and compare treatment approaches." },
      { path: "/water-softener-vs-water-conditioner/", title: "Softener vs. Water Conditioner", description: "Understand what each technology does and does not claim to do." },
      { path: "/water-softener-installation-cost/", title: "Water Softener Installation Cost Guide", description: "The equipment, plumbing, sizing, and site factors that shape a project." },
      { path: "/resources/how-long-water-softeners-last/", title: "How Long Water Softeners Last", description: "Component life, warning signs, maintenance, repair, and replacement." },
      { path: "/water-softener-salt-bridge/", title: "Water Softener Salt Bridge", description: "Recognize a salt bridge and troubleshoot it safely." },
    ],
  },
  {
    slug: "reverse-osmosis",
    title: "Reverse Osmosis Drinking-Water Systems",
    shortTitle: "Reverse Osmosis",
    description: "Reverse-osmosis guides covering installation, membrane performance, TDS readings, storage tanks, air-gap faucets, maintenance, certification, and comparison with carbon filtration.",
    intro: "Reverse osmosis is usually a point-of-use treatment for drinking and cooking water. Performance depends on feed-water quality, pressure, pretreatment, membrane condition, storage, drainage, and timely maintenance.",
    links: [
      { path: "/reverse-osmosis-installation-asheville-nc/", title: "Reverse Osmosis Installation in Asheville", description: "Plan space, pressure, pretreatment, faucet, drain, and maintenance access." },
      { path: "/reverse-osmosis-vs-carbon-filter/", title: "Reverse Osmosis vs. Carbon Filtration", description: "Compare scope, treatment claims, flow, maintenance, and placement." },
      { path: "/reverse-osmosis-tds-reading/", title: "Reverse Osmosis TDS Readings", description: "Calculate rejection rate and interpret a rising product-water TDS." },
      { path: "/reverse-osmosis-air-gap-faucet/", title: "RO Air-Gap Faucet Problems", description: "Troubleshoot leaks, gurgling, drain restrictions, and tubing." },
      { path: "/nsf-58-reverse-osmosis/", title: "NSF/ANSI 58 and RO Certification", description: "Read certification claims for the exact system and contaminant." },
      { path: "/reverse-osmosis-tank-pressure/", title: "RO Storage Tank Pressure", description: "Understand air charge, usable volume, household demand, and recovery." },
      { path: "/when-replace-ro-membrane/", title: "When to Replace an RO Membrane", description: "Use performance trends and manufacturer guidance instead of guessing." },
    ],
  },
  {
    slug: "sediment-iron-filtration",
    title: "Sediment, Iron, Carbon, and Whole-Home Filtration",
    shortTitle: "Filtration",
    description: "Compare sediment, iron, carbon, and whole-home water filtration based on particle size, chemistry, flow, pressure loss, contact time, and verified treatment goals.",
    intro: "A filter should have one clearly defined job. Identify whether the concern is particulate, dissolved, aesthetic, microbiological, or health-related before selecting media, micron rating, tank size, or maintenance schedule.",
    links: [
      { path: "/water-filtration-systems-asheville-nc/", title: "Water Filtration Systems in Asheville", description: "A testing-first overview of whole-home and drinking-water options." },
      { path: "/whole-home-water-filtration-asheville-nc/", title: "Whole-Home Water Filtration", description: "Plan treatment around source water, peak flow, pressure, and upkeep." },
      { path: "/iron-filtration-well-water/", title: "Iron Filtration for Well Water", description: "Match oxidation and filtration to the iron form and water chemistry." },
      { path: "/sediment-filtration-well-water/", title: "Sediment Filtration for Well Water", description: "Choose a serviceable sediment strategy without starving household flow." },
      { path: "/troubleshooting-spin-down-filter-wnc/", title: "Spin-Down Filter Troubleshooting", description: "Diagnose low pressure, clogged screens, purge problems, and leaks." },
      { path: "/carbon-vs-catalytic-carbon-filter/", title: "Carbon vs. Catalytic Carbon", description: "Compare media selection, contact time, claims, and service requirements." },
      { path: "/water-filter-before-tankless-heater/", title: "Filter Before a Tankless Heater", description: "Protect equipment without creating excessive pressure loss." },
    ],
  },
  {
    slug: "contaminants-testing",
    title: "Water Contaminants, Laboratory Testing, and Certified Filters",
    shortTitle: "Testing & Contaminants",
    description: "Evidence-based guides to PFAS, lead, arsenic, nitrate, bacteria, water-test reports, certified laboratories, sample collection, and treatment verification.",
    intro: "Taste, odor, color, and a handheld TDS meter cannot establish water safety. Use the right laboratory method, sampling procedure, certification claim, and follow-up test for the contaminant you actually need to evaluate.",
    links: [
      { path: "/resources/pfas-in-wnc-water/", title: "PFAS in Asheville Water", description: "Current Asheville results, EPA limits, private-well testing, and certified filters." },
      { path: "/resources/lead-pipes-older-homes/", title: "Lead in Older Western NC Homes", description: "Understand premise plumbing, sampling, exposure reduction, and certified filters." },
      { path: "/arsenic-testing-private-well/", title: "Arsenic Testing for Private Wells", description: "Choose the correct laboratory analysis before selecting treatment." },
      { path: "/nitrate-private-well-water/", title: "Nitrate Testing for Well Water", description: "Learn when nitrate testing matters and why boiling is not treatment." },
      { path: "/how-to-read-water-test-report/", title: "How to Read a Water-Test Report", description: "Interpret units, reporting limits, standards, and next steps." },
      { path: "/certified-water-testing-lab/", title: "Choosing a Certified Laboratory", description: "Match laboratory certification and method to the target analyte." },
      { path: "/how-to-collect-water-sample/", title: "How to Collect a Water Sample", description: "Avoid sampling mistakes that can invalidate the result." },
    ],
  },
  {
    slug: "uv-disinfection",
    title: "UV Disinfection and Microbiological Water Safety",
    shortTitle: "UV Disinfection",
    description: "UV water-disinfection guides covering bacteria testing, pretreatment, validated dose, lamp and sleeve maintenance, alarms, sanitation, backup power, and verification.",
    intro: "UV can inactivate susceptible microorganisms when the system delivers its validated dose. It does not remove sediment, minerals, metals, PFAS, or other dissolved chemicals, and it requires appropriate pretreatment, maintenance, and verification.",
    links: [
      { path: "/troubleshooting-uv-system-wnc/", title: "UV Water System Troubleshooting", description: "Diagnose alarms, lamp problems, low intensity, sleeve fouling, and flow." },
      { path: "/bacteria-in-well-water/", title: "Bacteria in Well Water", description: "Respond to total-coliform or E. coli results and investigate the source." },
      { path: "/uv-water-treatment-sizing/", title: "UV Water Treatment Sizing", description: "Understand dose, flow limits, pretreatment, alarms, and service." },
      { path: "/uv-lamp-replacement-schedule/", title: "UV Lamp Replacement", description: "Replace lamps by operating time and model requirements, not visible glow." },
      { path: "/clean-uv-quartz-sleeve/", title: "Cleaning a UV Quartz Sleeve", description: "Control mineral and iron fouling that can block UV transmission." },
      { path: "/shock-chlorination-well-water/", title: "Well-System Sanitization", description: "Plan safe disinfection and verification after service or contamination." },
      { path: "/uv-water-treatment-generator-backup/", title: "Backup Power for UV Treatment", description: "Plan for treatment and water access during an electrical outage." },
    ],
  },
];

export const resourceTopicBySlug = (slug?: string) =>
  resourceTopics.find((topic) => topic.slug === slug);
