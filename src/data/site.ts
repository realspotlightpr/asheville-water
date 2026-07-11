import completeHomeSystemImage from "../../images/complete-home-system-ro.png";
import extraLargeSoftenerImage from "../../images/WATER SOFTENER WITH CHLORINE FILTRATION.webp";
import cityWaterDualTankImage from "../../images/CITY WATER DUAL TANK.webp";
import carbonFilterImage from "../../images/WHOLE HOME WATER FILER CARBON ONLY TANK.webp";
import saltFreeConditionerImage from "../../images/WHOLE HOME SALT-FREE CONDITIONER.webp";
import wellWaterDualTankImage from "../../images/WELL WATER DUAL TANK.webp";
import ironSulfurRemovalImage from "../../images/PREMIUM HOME IRON AND SULFUR REMOVAL SYSTEM.webp";
import sevenStageRoImage from "../../images/HW800 AlkaPro 7 STAGE REVERSE OSMOSIS.webp";
import fiveStageRoImage from "../../images/5STAGE REVERSE OSMOSIS SYS.webp";
import uvSterilizerImage from "../../images/uv-sterilizer.webp";
import preSedimentFilterImage from "../../images/pre-sediment-filter.webp";

export const business = {
  name: "Asheville Water Specialists",
  phone: "(828) 903-8433",
  phoneHref: "tel:+18289038433",
  email: "contact@ashevillewaterspecialists.com",
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

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  blurb: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    slug: "complete-home-system",
    image: completeHomeSystemImage,
    name: "Complete Home Softener & Filtration — Large",
    category: "Whole-Home · City Water",
    price: "$2,699",
    blurb:
      "Single-tank mixed-bed system for standard city water. Removes hardness and chlorine. Lifetime valve warranty, 5-year media, 1-year RO.",
    tag: "Most popular",
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
    slug: "well-water-system",
    image: wellWaterDualTankImage,
    name: "Dual-Tank Well Water System",
    category: "Whole-Home · Private Well",
    price: "$3,999",
    blurb:
      "Air-injection system for private wells with iron up to 7 ppm — removes iron, minor sulfur, and manganese.",
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
  {
    slug: "7-stage-ro",
    image: sevenStageRoImage,
    name: "Tankless Under-Sink RO",
    category: "Point-of-Use · Drinking Water",
    price: "$699",
    blurb:
      "Point-of-use drinking water, compact design, built-in remineralization. Near-automatic add-on to any whole-home system.",
  },
  {
    slug: "5-stage-ro",
    image: fiveStageRoImage,
    name: "Tank Under-Sink RO",
    category: "Point-of-Use · Drinking Water",
    price: "$599",
    blurb:
      "Point-of-use drinking water built for well water — handles higher TDS and lower pressure.",
  },
  {
    slug: "uv-sterilizer",
    image: uvSterilizerImage,
    name: "UV Sterilizer",
    category: "Add-On · Well Water",
    price: "$699",
    blurb:
      "Bacteria control for private wells. City water's chlorine already covers this.",
  },
  {
    slug: "pre-sediment-filter",
    image: preSedimentFilterImage,
    name: "Pre-Sediment Filter",
    category: "Add-On · Well Water",
    price: "$399",
    blurb:
      "5-micron filter protects your system from sand and debris, with scheduled swaps.",
  },
];

export const pillars = [
  {
    title: "Science First",
    body: "We don't guess. Every recommendation starts with understanding your home's actual water — not a one-size-fits-all sales pitch.",
  },
  {
    title: "Local Expertise",
    body: "We're not selling the same filter nationwide. We solve problems unique to Asheville, Hendersonville, Weaverville, and the surrounding WNC communities.",
  },
  {
    title: "Licensed Installation",
    body: "Every system is installed by a licensed North Carolina plumber — not a subcontractor cutting corners.",
  },
  {
    title: "Honest Recommendations",
    body: "We recommend only what your water requires — not the most expensive system on the truck.",
  },
];

export const dealerBadge = "Official Honest Water Co Dealer";

export const heroPains = [
  { label: "Dry, itchy skin after showering", icon: "droplet" },
  { label: "Spotty dishes & cloudy glassware", icon: "sparkle" },
  { label: "Stiff, faded laundry", icon: "shirt" },
  { label: "Chlorine taste & smell", icon: "wind" },
];

export const featured = [
  {
    slug: "complete-home-system",
    image: completeHomeSystemImage,
    eyebrow: "Whole-Home · City Water",
    name: "Complete Softener & Filtration",
    spec: "Removes hardness & chlorine · lifetime valve warranty",
    price: "$2,699",
  },
  {
    slug: "7-stage-ro",
    image: sevenStageRoImage,
    eyebrow: "Point-of-Use · Drinking Water",
    name: "Tankless Under-Sink RO",
    spec: "Compact, remineralized, pH-balanced water on demand",
    price: "$699",
  },
  {
    slug: "well-water-system",
    image: wellWaterDualTankImage,
    eyebrow: "Whole-Home · Private Well",
    name: "Dual-Tank Well Water System",
    spec: "Air-injection removal of iron, sulfur & manganese",
    price: "$3,999",
  },
];

export const trustBadges = [
  { label: "Licensed & Insured", sub: "NC-licensed plumber" },
  { label: "Lifetime Valve Warranty", sub: "On every whole-home system" },
  { label: "Free Water Report", sub: "No obligation, no pressure" },
  { label: "Locally Owned", sub: "Serving Western NC" },
];

export const stats = [
  { value: "Lifetime", label: "Valve warranty on whole-home systems" },
  { value: "5-Year", label: "Media warranty, standard" },
  { value: "35 mi", label: "Service radius around Asheville" },
  { value: "100%", label: "Honest recommendations — no upselling" },
];

export const features = [
  {
    title: "Free Water Report",
    body: "Lab-backed testing for city or well water before we recommend anything.",
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
    body: "Lifetime valve warranty and multi-year media coverage, no fine print.",
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
  columns: ["Asheville Water Specialists", "Typical Installer"],
  rows: [
    { feature: "Lab-backed water report before recommending", us: true, them: false },
    { feature: "Recommends only what your water needs", us: true, them: false },
    { feature: "Flat, all-in pricing quoted up front", us: true, them: "varies" },
    { feature: "Installed by a licensed NC plumber", us: true, them: "varies" },
    { feature: "Lifetime valve warranty", us: true, them: "varies" },
    { feature: "No scare tactics or one-size-fits-all systems", us: true, them: false },
    { feature: "Locally owned, personally installed", us: true, them: false },
  ] as { feature: string; us: boolean; them: boolean | "varies" }[],
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
  "Free personalized water report",
  "Educational follow-up (what we found, what it means)",
  "Phone consultation",
  "Custom recommendation",
  "Licensed installation",
  "Annual water checkup",
];

export const faqs = [
  {
    q: "Our water seems fine — do I really need this?",
    a: "Most water problems aren't visible or don't show up until years of exposure — chlorine byproducts, PFAS, and hard-water mineral buildup rarely announce themselves. A free water report tells you what's actually in your water before you decide anything.",
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
    a: "No. Whole-home systems use long-life media (5+ years) and a lifetime valve warranty. Point-of-use RO filters are serviced on an annual schedule we handle for you.",
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
