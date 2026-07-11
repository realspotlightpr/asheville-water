export type CityProfile = {
  slug: string;
  name: string;
  county: string;
  tagline: string;
  summary: string;
  localContext: string;
  homeownerNote: string;
  nearby: string[];
};

export const cityProfiles: CityProfile[] = [
  {
    slug: "asheville",
    name: "Asheville",
    county: "Buncombe County",
    tagline: "Local water treatment for Asheville homes, from historic neighborhoods to newer mountain communities.",
    summary: "Asheville Water Specialists installs whole-home filtration, water softeners, reverse osmosis systems, and well-water treatment throughout Asheville, NC. Every recommendation begins with your home’s water—not a generic regional assumption.",
    localContext: "Asheville combines older homes, renovated properties, new construction, municipal service, and private wells around the city’s edges. Plumbing material, home age, elevation, and the property’s water source can all change what arrives at the tap.",
    homeownerNote: "For Asheville homeowners, the right starting point is identifying whether the concern is hardness, disinfectant taste and odor, sediment, iron, sulfur, or drinking-water quality.",
    nearby: ["weaverville", "arden", "candler", "black-mountain"],
  },
  {
    slug: "hendersonville",
    name: "Hendersonville",
    county: "Henderson County",
    tagline: "Whole-home and drinking-water solutions for Hendersonville city-water and private-well homes.",
    summary: "We provide water filtration, softening, reverse osmosis, and private-well treatment for Hendersonville, NC homeowners. Recommendations are based on the property, water source, household size, and the specific problem you want to solve.",
    localContext: "Hendersonville’s service area includes established neighborhoods, newer subdivisions, and rural properties beyond the city core. That mix means one home may use municipal water while another nearby property relies on a private well.",
    homeownerNote: "A Hendersonville water assessment should separate aesthetic concerns—like scale, staining, taste, or odor—from treatment needs that depend on measured water conditions.",
    nearby: ["fletcher", "mills-river", "brevard", "arden"],
  },
  {
    slug: "weaverville",
    name: "Weaverville",
    county: "Buncombe County",
    tagline: "Personalized filtration and well-water treatment for Weaverville and northern Buncombe County.",
    summary: "Asheville Water Specialists serves Weaverville, NC with whole-home filters, softeners, reverse osmosis, and private-well systems. We test first so the recommendation fits your water and not simply your ZIP code.",
    localContext: "Weaverville blends a compact town center with hillside neighborhoods and rural northern Buncombe County properties. Water source and well conditions can change considerably as homes move away from municipal infrastructure.",
    homeownerNote: "Weaverville homeowners commonly need help distinguishing mineral hardness from iron staining, sediment, sulfur odor, or a drinking-water concern at the kitchen sink.",
    nearby: ["asheville", "candler", "black-mountain", "arden"],
  },
  {
    slug: "arden",
    name: "Arden",
    county: "Buncombe County",
    tagline: "Water filtration and softening designed for growing South Asheville and Arden households.",
    summary: "We install whole-home water filters, softeners, reverse osmosis, and well-water equipment in Arden, NC. System sizing and treatment are matched to the home’s water source, bathrooms, residents, and measured conditions.",
    localContext: "Arden includes established homes, fast-growing residential areas, and properties stretching toward more rural parts of southern Buncombe County. Households may encounter different plumbing histories and water sources within a relatively small area.",
    homeownerNote: "For Arden homes, household demand matters as much as water chemistry. Flow rate, bathroom count, and family size help determine the appropriate system after the water concern is identified.",
    nearby: ["fletcher", "mills-river", "asheville", "hendersonville"],
  },
  {
    slug: "fletcher",
    name: "Fletcher",
    county: "Henderson County",
    tagline: "Straightforward water treatment for Fletcher homes between Asheville and Hendersonville.",
    summary: "Asheville Water Specialists provides Fletcher, NC homeowners with whole-home filtration, water softening, reverse osmosis, and well-water treatment. We recommend only the equipment supported by the home’s actual water conditions.",
    localContext: "Fletcher sits within a rapidly developing part of Henderson County, with subdivisions, older homes, and less-dense properties nearby. Water source, plumbing, and household demand can differ even among neighboring communities.",
    homeownerNote: "A Fletcher consultation starts with what you notice—spots, scale, odor, staining, sediment, or taste—then connects those observations to testing and system selection.",
    nearby: ["arden", "mills-river", "hendersonville", "asheville"],
  },
  {
    slug: "black-mountain",
    name: "Black Mountain",
    county: "Buncombe County",
    tagline: "City-water and private-well solutions for Black Mountain’s year-round and seasonal homes.",
    summary: "We serve Black Mountain, NC with water filtration, softeners, under-sink reverse osmosis, and private-well treatment. Each system is selected around the property’s source water and the homeowner’s priorities.",
    localContext: "Black Mountain includes in-town homes, mountain properties, seasonal residences, and rural parcels. Terrain and distance from town infrastructure make it especially important to confirm the water source before discussing treatment.",
    homeownerNote: "For a Black Mountain property, we evaluate whether the goal is whole-home protection, well-specific treatment, better drinking water, or a combination designed to work together.",
    nearby: ["asheville", "weaverville", "candler", "arden"],
  },
  {
    slug: "candler",
    name: "Candler",
    county: "Buncombe County",
    tagline: "Practical water filtration and private-well treatment for western Buncombe County homes.",
    summary: "Asheville Water Specialists installs filtration, softening, reverse osmosis, and well-water systems in Candler, NC. We begin with testing and household needs so the equipment solves the right problem.",
    localContext: "Candler is an unincorporated community with suburban neighborhoods, older homes, and rural mountain properties. That variety creates a meaningful mix of municipal connections and private wells across western Buncombe County.",
    homeownerNote: "Candler homeowners on wells may need sediment, iron, sulfur, manganese, bacteria, or acidity considered separately; city-water homes often have different treatment priorities.",
    nearby: ["asheville", "weaverville", "arden", "canton"],
  },
  {
    slug: "canton",
    name: "Canton",
    county: "Haywood County",
    tagline: "Water filtration, softening, and well-water systems for Canton and eastern Haywood County.",
    summary: "We help Canton, NC homeowners improve water throughout the home with filtration, softening, reverse osmosis, and private-well treatment. Recommendations reflect the home’s source, plumbing, demand, and test results.",
    localContext: "Canton and the surrounding Haywood County landscape include in-town residences, older housing, valley communities, and private-well properties. A system that fits one setting may not fit another.",
    homeownerNote: "For Canton homes, testing helps determine whether a visible or noticeable issue comes from minerals, sediment, iron, sulfur, disinfectant, or the home’s plumbing.",
    nearby: ["waynesville", "candler", "asheville", "mills-river"],
  },
  {
    slug: "brevard",
    name: "Brevard",
    county: "Transylvania County",
    tagline: "Water treatment for Brevard homes in one of Western North Carolina’s wettest mountain regions.",
    summary: "Asheville Water Specialists provides Brevard, NC with whole-home filters, softeners, drinking-water reverse osmosis, and private-well systems. We match treatment to measured conditions and how the household uses water.",
    localContext: "Brevard combines city neighborhoods, wooded mountain homes, vacation properties, and rural Transylvania County wells. Heavy rainfall and mountain terrain make source-water and sediment questions especially property-specific.",
    homeownerNote: "Brevard well owners should avoid choosing equipment from appearance or odor alone. Iron, sulfur, sediment, hardness, bacteria, and acidity require different treatment approaches.",
    nearby: ["hendersonville", "mills-river", "fletcher", "arden"],
  },
  {
    slug: "waynesville",
    name: "Waynesville",
    county: "Haywood County",
    tagline: "Custom water filtration and well-water treatment for Waynesville’s mountain homes.",
    summary: "We serve Waynesville, NC homeowners with filtration, softening, reverse osmosis, and private-well treatment. The process starts with the property’s water source and the conditions found at the tap.",
    localContext: "Waynesville’s in-town neighborhoods and surrounding Haywood County mountain properties span different elevations, home ages, and water sources. Private wells outside the town core can present needs unlike municipal-water homes.",
    homeownerNote: "A Waynesville system should be sized for household flow and selected for measured conditions, especially when multiple well-water issues need to be treated in sequence.",
    nearby: ["canton", "candler", "asheville", "hendersonville"],
  },
  {
    slug: "mills-river",
    name: "Mills River",
    county: "Henderson County",
    tagline: "Whole-home and private-well water solutions for Mills River’s growing rural-residential community.",
    summary: "Asheville Water Specialists installs water filters, softeners, reverse osmosis, and private-well systems in Mills River, NC. Testing and household demand guide every recommendation.",
    localContext: "Mills River includes newer neighborhoods, agricultural land, wooded properties, and private wells across a broad part of Henderson County. Source-water conditions can be highly localized from one property to the next.",
    homeownerNote: "Mills River homeowners benefit from separating well protection and whole-home treatment from point-of-use drinking-water goals, then designing the components to work as one system.",
    nearby: ["fletcher", "hendersonville", "arden", "brevard"],
  },
];
