import extraLargeSoftenerImage from "../../images/WATER SOFTENER WITH CHLORINE FILTRATION.png";
import cityWaterDualTankImage from "../../images/CITY WATER DUAL TANK.png";
import carbonFilterImage from "../../images/WHOLE HOME WATER FILER CARBON ONLY TANK.webp";
import saltFreeConditionerImage from "../../images/WHOLE HOME SALT-FREE CONDITIONER.webp";
import ironSulfurRemovalImage from "../../images/PREMIUM HOME IRON AND SULFUR REMOVAL SYSTEM.png";

export const business = {
  name: "Asheville Water Specialists",
  phone: "(828) 551-0885",
  phoneHref: "tel:+18285510885",
  email: "contact@avlwaterspecialists.com",
  serviceRadius: "35-mile radius of downtown Asheville",
  serviceAreas: [
    "Asheville",
    "Hendersonville",
    "Weaverville",
    "Arden",
    "Fletcher",
    "Black Mountain",
    "Candler",
    "Canton",
    "Brevard",
    "Waynesville",
    "Mills River",
  ],
};

// Campaign switch: keep pricing in the data model so it can be restored without
// rewriting product content, while temporarily removing it from public pages.
export const showPricing = false;

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  blurb: string;
  features?: string[];
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    slug: "7-stage-ro",
    image: "/products/tankless-under-sink-reverse-osmosis.webp",
    name: "Tankless Under-Sink Reverse Osmosis",
    category: "Point-of-Use · Drinking Water",
    price: "$699",
    blurb: "Compact purified drinking-water system with remineralization and balanced pH.",
    features: [
      "Purified water with remineralization",
      "Compact, easy-to-maintain system",
      "pH-balanced water on demand",
    ],
    tag: "Popular",
  },
  {
    slug: "5-stage-ro",
    image: "/products/six-stage-reverse-osmosis.webp",
    name: "6 Stage Reverse Osmosis",
    category: "Point-of-Use · Drinking Water",
    price: "$599",
    blurb: "Advanced six-stage drinking-water filtration with remineralization.",
    features: [
      "Advanced clean, healthy drinking water with remineralization",
      "Eliminates chlorine, PFAS, and additional pollutants",
      "Made in the USA",
    ],
  },
  {
    slug: "complete-home-system",
    image: "/products/whole-home-city-water-system.webp",
    name: "Whole-Home City Water System",
    category: "Whole-Home · City Water",
    price: "$2,699",
    blurb: "Whole-home chemical filtration paired with purified drinking water and remineralization.",
    features: [
      "Whole-home chemical filtration",
      "Removes chlorine, disinfection byproducts, and other contaminants",
      "Reverse osmosis purified drinking water with remineralization",
      "Made in the USA",
    ],
  },
  {
    slug: "well-water-system",
    image: "/products/whole-home-well-water-system.webp",
    name: "Whole-Home Well Water Systems",
    category: "Whole-Home · Private Well",
    price: "$3,999",
    blurb: "Custom whole-home treatment designed around the results of your well-water testing.",
    features: [
      "Custom solutions for sediment, excess iron, sulfur, manganese, hardness, pH imbalance, bacteria, and more",
      "Made in the USA",
    ],
  },
  {
    slug: "uv-sterilizer",
    image: "/products/uv-disinfection-system.webp",
    name: "UV Disinfection System",
    category: "Add-On · Well Water",
    price: "$699",
    blurb: "Ultraviolet water disinfection for private-well protection.",
    features: [
      "An effective solution for disinfecting water",
      "Kills bacteria, viruses, and microorganisms",
      "Easy to install and maintain",
    ],
  },
  {
    slug: "pre-sediment-filter",
    image: "/products/dual-filter-system.webp",
    name: "Dual Filter System — 4.5\" × 20\"",
    category: "Whole-Home · Compact Filtration",
    price: "$399",
    blurb: "Space-conscious sediment and carbon filtration for smaller homes and budgets.",
    features: [
      "5-micron sediment filter and carbon filter",
      "Great for smaller spaces or smaller budgets",
      "Made in the USA",
    ],
  },
  {
    slug: "single-tank-softener",
    image: extraLargeSoftenerImage,
    name: "Complete Home Softener & Filtration — Extra Large",
    category: "Whole-Home · City Water",
    price: "$2,999",
    blurb:
      "Larger tank (64,000+ grain) built for 8+ residents or 4+ bathrooms. Same performance, longer lifespan.",
  },
  {
    slug: "dual-tank-softener",
    image: cityWaterDualTankImage,
    name: "Complete Home Softener & Filtration — Dual-Tank, Extra Large",
    category: "Whole-Home · City Water",
    price: "$3,299",
    blurb:
      "Premium two-tank city system with backwash on both tanks. Longest-lasting option — 10-20+ year carbon life.",
  },
  {
    slug: "carbon-filter",
    image: carbonFilterImage,
    name: "Carbon-Only Water Filter",
    category: "Whole-Home · City Water",
    price: "$2,699",
    blurb:
      "Whole-home carbon filtration for chlorine, chemicals, and taste — no softening or salt.",
  },
  {
    slug: "salt-free-conditioner",
    image: saltFreeConditionerImage,
    name: "Salt-Free Water Conditioner",
    category: "Whole-Home · City Water",
    price: "$2,999",
    blurb:
      "No salt, no brine tank, no electricity. Reduces scale on appliances. Honest note: does not produce truly soft water.",
  },
  {
    slug: "iron-sulfur-removal",
    image: ironSulfurRemovalImage,
    name: "Complete Home Iron & Sulfur Removal System",
    category: "Whole-Home · Private Well",
    price: "$5,499",
    blurb:
      "For heavy iron (>7 ppm) or strong sulfur odor. Peroxide injection plus carbon, softening, and RO.",
  },
];

export const pillars = [
  {
    title: "Science First",
    body: "We start with your water source and test results, then explain what each issue means and which equipment treats it.",
  },
  {
    title: "Local Expertise",
    body: "City water and private wells behave differently across Asheville, Hendersonville, Weaverville, and WNC. Your recommendation is sized for your home and water source.",
  },
  {
    title: "Licensed Installation",
    body: "Every system is installed by a licensed North Carolina plumber, with the plumbing scope and warranty explained before work begins.",
  },
  {
    title: "Honest Recommendations",
    body: "You see the price, what the system treats, what it does not treat, and what maintenance costs before you decide.",
  },
];

export const heroBadge = "Locally Owned & Operated in Western NC";

export const heroPains = [
  { label: "Dry, itchy skin after showering", icon: "droplet" },
  { label: "Spotty dishes & cloudy glassware", icon: "sparkle" },
  { label: "Stiff, faded laundry", icon: "shirt" },
  { label: "Chlorine taste & smell", icon: "wind" },
];

export const featured = [
  {
    slug: "complete-home-system",
    image: "/products/whole-home-city-water-system.webp",
    eyebrow: "Whole-Home · City Water",
    name: "Whole-Home City Water System",
    features: [
      "Whole-home chemical filtration removes chlorine, disinfection byproducts, and other contaminants",
      "Reverse osmosis purified drinking water with remineralization removes PFAS",
      "Made in the USA",
    ],
    price: "$2,699",
  },
  {
    slug: "well-water-system",
    image: "/products/whole-home-well-water-system.webp",
    eyebrow: "Whole-Home · Private Well",
    name: "Whole-Home Well Water Systems",
    features: [
      "Custom solutions for sediment, excess iron, sulfur, manganese, hardness, pH imbalance, bacteria, and more",
      "Made in the USA",
    ],
    price: "$3,999",
  },
  {
    slug: "7-stage-ro",
    image: "/products/tankless-under-sink-reverse-osmosis.webp",
    eyebrow: "Point-of-Use · Drinking Water",
    name: "Tankless Under-Sink Reverse Osmosis",
    features: [
      "Under the kitchen sink with a point-of-use faucet",
      "Purified water with remineralization",
      "pH-balanced water on demand",
      "Compact, easy-to-maintain system",
    ],
    price: "$699",
  },
  {
    slug: "5-stage-ro",
    image: "/products/six-stage-reverse-osmosis.webp",
    eyebrow: "Point-of-Use · Drinking Water",
    name: "6 Stage Reverse Osmosis",
    features: [
      "Under the kitchen sink with a point-of-use faucet",
      "Advanced clean, healthy drinking water with remineralization",
      "Eliminates chlorine, PFAS, and additional pollutants",
      "Made in the USA",
    ],
    price: "$599",
  },
  {
    slug: "uv-sterilizer",
    image: "/products/uv-disinfection-system.webp",
    eyebrow: "Well Water · Disinfection",
    name: "UV Disinfection System",
    features: [
      "An effective solution for disinfecting water",
      "Kills bacteria, viruses, and microorganisms",
      "Easy to install and maintain",
    ],
    price: "$699",
  },
  {
    slug: "pre-sediment-filter",
    image: "/products/dual-filter-system.webp",
    eyebrow: "Compact · Whole-Home Filtration",
    name: "Dual Filter System — 4.5\" × 20\"",
    features: [
      "5-micron sediment filter and carbon filter",
      "Great for smaller spaces or smaller budgets",
      "Made in the USA",
    ],
    price: "$399",
  },
];

export const trustBadges = [
  { label: "Licensed & Insured", sub: "NC-licensed plumber" },
  { label: "Lifetime Warranty", sub: "On every whole-home system" },
  { label: "Free Consultation", sub: "No obligation, no pressure" },
  { label: "Locally Owned", sub: "Serving Western NC" },
];

export const stats = [
  { value: "Lifetime", label: "Warranty on whole-home systems" },
  { value: "5-Year", label: "Media warranty, standard" },
  { value: "35 mi", label: "Service radius around Asheville" },
  { value: "100%", label: "Honest recommendations — no upselling" },
];

export const features = [
  {
    title: "Free Consultation",
    body: "Clear next steps for city or well water before we recommend anything.",
    icon: "beaker",
  },
  {
    title: "Licensed Installation",
    body: "Every system installed by a licensed North Carolina plumber.",
    icon: "badge",
  },
  {
    title: "Flat, All-In Pricing",
    body: "Quoted up front — no surprise add-ons or high-pressure upsells.",
    icon: "tag",
  },
  {
    title: "Strong Warranties",
    body: "Lifetime warranty and multi-year media coverage, with terms explained clearly.",
    icon: "shield",
  },
  {
    title: "Local Expertise",
    body: "We solve problems unique to Western North Carolina water — not a national script.",
    icon: "pin",
  },
  {
    title: "Ongoing Support",
    body: "Annual water checkups and scheduled filter service we handle for you.",
    icon: "refresh",
  },
];

export const comparison = {
  columns: [
    "Asheville Water Specialists",
    "Culligan",
    "Kinetico",
    "Leaf Home Water",
    "Home Depot DIY",
  ],
  rows: [
    {
      feature: "Starting whole-home install price",
      values: ["$2,699", "$5,500–$8,000", "$6,000–$9,000", "$5,000–$8,000", "$3,000–$4,500 + labor"],
    },
    {
      feature: "NC-licensed plumber installation",
      values: [true, "Varies", "Varies", "Varies", "DIY"],
    },
    {
      feature: "Lifetime warranty",
      values: [true, "Check local terms", "Check local terms", "Check local terms", false],
    },
    {
      feature: "Flat, all-in pricing published",
      values: [true, "Contact for quote", "Contact for quote", "Contact for quote", "Product price only"],
    },
    {
      feature: "Water tested before recommendation",
      values: [true, "Varies", "Varies", "Varies", false],
    },
    {
      feature: "Local Asheville & WNC focus",
      values: [true, "Varies by dealer", "Varies by dealer", "Regional service", false],
    },
  ] as { feature: string; values: (string | boolean)[] }[],
};

export const waterSources = [
  {
    key: "City Water",
    heading: "On municipal (city) water?",
    intro:
      "City treatment handles bacteria — but not everything. Chlorine byproducts, disinfection residue, and taste or odor issues are common even on well-treated supplies.",
    signs: [
      "Chlorine smell or taste at the tap",
      "Dry skin and brittle hair after showering",
      "White scale on faucets, glassware, and fixtures",
      "Soap that won't lather well",
    ],
  },
  {
    key: "Private Well",
    heading: "On a private well?",
    intro:
      "Wells are unregulated and untested by default. Each one is different — treatment depends entirely on what your specific water contains.",
    signs: [
      "Iron staining (orange/red) on fixtures",
      "Sulfur or 'rotten egg' odor",
      "Sediment, cloudiness, or manganese",
      "Concern about bacteria or acidity",
    ],
  },
  {
    key: "New / Older Home",
    heading: "Just moved or bought an older home?",
    intro:
      "Buying, remodeling, or bringing home a new baby are the most common moments homeowners finally test their water — often finding issues that were there all along.",
    signs: [
      "Unknown water history in a new-to-you home",
      "Aging plumbing and older fixtures",
      "Switching away from bottled water",
      "Concern about PFAS or 'forever chemicals'",
    ],
  },
];

export const addOns = [
  {
    name: "RO Annual Filter Service",
    price: "$199/yr",
    blurb: "All three filters replaced on schedule — we call you when it's due, you never source parts.",
  },
  {
    name: "Pre-Sediment Filter (well water)",
    price: "$399 + $149/6mo",
    blurb: "5-micron filter protects your system from sand and debris, with scheduled swaps.",
  },
  {
    name: "UV Sterilization (well only)",
    price: "$699 installed",
    blurb: "Bacteria control for private wells. City water's chlorine already covers this.",
  },
  {
    name: "RO Faucet Countertop Drilling",
    price: "$200",
    blurb: "Clean granite or quartz drilling for your under-sink RO faucet.",
  },
];

export const journey = [
  "Free consultation",
  "Educational follow-up (what we found, what it means)",
  "Phone consultation",
  "Custom recommendation",
  "Licensed installation",
  "Annual water checkup",
];

export const faqs = [
  {
    q: "Our water seems fine — do I really need this?",
    a: "Most water problems aren't visible or don't show up until years of exposure — chlorine byproducts, PFAS, and hard-water mineral buildup rarely announce themselves. A free consultation helps you understand the right next step before you decide anything.",
  },
  {
    q: "Isn't this expensive?",
    a: "Our systems are flat-rate and quoted up front — no surprise add-ons. Compare that to years of bottled water, appliance repairs from hard water, and plumbing wear, and most homeowners find it pays for itself.",
  },
  {
    q: "I'm on city water — isn't it already treated?",
    a: "City treatment handles bacteria, not everything else. Chlorine byproducts, disinfection residue, and taste/odor issues are common even on well-treated municipal supplies. Two homes on the same street can still test differently.",
  },
  {
    q: "Will I have to replace filters constantly?",
    a: "No. Whole-home systems use long-life media (5+ years) and include a lifetime warranty. Point-of-use RO filters are serviced on an annual schedule we handle for you.",
  },
  {
    q: "I already have a refrigerator filter — isn't that enough?",
    a: "Fridge filters handle taste and basic sediment at one tap. They don't address hardness, chlorine byproducts, or whole-home plumbing protection the way a whole-house system does.",
  },
  {
    q: "What if I decide to think about it?",
    a: "No pressure — that's the point of leading with a water report instead of a sales pitch. We'll walk you through your results in plain language and let you decide with real data, not a countdown timer.",
  },
];

export type ServiceCity = { slug: string; name: string };

export const serviceCities: ServiceCity[] = [
  { slug: "asheville", name: "Asheville" },
  { slug: "hendersonville", name: "Hendersonville" },
  { slug: "weaverville", name: "Weaverville" },
  { slug: "arden", name: "Arden" },
  { slug: "fletcher", name: "Fletcher" },
  { slug: "black-mountain", name: "Black Mountain" },
  { slug: "candler", name: "Candler" },
  { slug: "canton", name: "Canton" },
  { slug: "brevard", name: "Brevard" },
  { slug: "waynesville", name: "Waynesville" },
  { slug: "mills-river", name: "Mills River" },
];

export type ResourceArticle = { slug: string; title: string; blurb: string };

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "how-water-softeners-work",
    title: "How Water Softeners Work",
    blurb: "The basics of ion exchange, regeneration, and what softening actually does to your water.",
  },
  {
    slug: "water-softener-cost-roi",
    title: "Water Softener Cost & ROI",
    blurb: "What a system really costs, and how it pays back through appliance life, less bottled water, and lower soap use.",
  },
  {
    slug: "salt-vs-salt-free",
    title: "Salt vs. Salt-Free",
    blurb: "The honest difference between true softening and salt-free conditioning — and which one you actually need.",
  },
  {
    slug: "how-long-water-softeners-last",
    title: "How Long Water Softeners Last",
    blurb: "Expected lifespan of media, tanks, and valves — and how to get the most out of your system.",
  },
  {
    slug: "pfas-in-wnc-water",
    title: "PFAS in Western NC Water",
    blurb: "What 'forever chemicals' are, why they matter, and how filtration can reduce your exposure.",
  },
  {
    slug: "lead-pipes-older-homes",
    title: "Lead Pipes in Older Homes",
    blurb: "Why older Western NC homes can carry lead risk, and what point-of-use filtration does about it.",
  },
  {
    slug: "well-water-testing-wnc",
    title: "Well Water Testing in WNC",
    blurb: "What to test for on a private well in the mountains, and how results shape the right treatment.",
  },
];

export const social = {
  instagram: "#",
  linkedin: "#",
  ewgTapWater: "https://www.ewg.org/tapwater/",
};
