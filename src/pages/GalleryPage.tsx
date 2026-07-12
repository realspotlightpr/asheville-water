import { useState } from "react";
import { CtaBand } from "../components/CtaBand";
import { PageHeader } from "../components/PageHeader";
import { Seo } from "../components/Seo";

type Category = "All" | "Whole-Home" | "Dual-Tank" | "Reverse Osmosis" | "Specialty";

const photos: { src: string; title: string; alt: string; category: Exclude<Category, "All"> }[] = [
  { src: "/gallery/dual-tank-whole-home-water-system.webp", title: "Dual-Tank Whole-Home System", alt: "Dual-tank whole-home water filtration and softener installation with brine tank in a Western North Carolina garage", category: "Dual-Tank" },
  { src: "/gallery/tankless-reverse-osmosis-under-sink.webp", title: "Tankless Reverse Osmosis", alt: "Compact tankless reverse osmosis drinking-water system installed beneath a kitchen sink", category: "Reverse Osmosis" },
  { src: "/gallery/finished-dual-tank-water-treatment.webp", title: "Finished Dual-Tank Installation", alt: "Finished dual-tank water treatment system with electronic valve and brine cabinet", category: "Dual-Tank" },
  { src: "/gallery/compact-whole-home-water-softener.webp", title: "Compact Whole-Home Softener", alt: "Single-tank whole-home water softener installed beside a black brine cabinet", category: "Whole-Home" },
  { src: "/gallery/under-sink-reverse-osmosis-installation.webp", title: "Under-Sink RO Installation", alt: "Under-sink reverse osmosis drinking-water system fitted inside a kitchen cabinet", category: "Reverse Osmosis" },
  { src: "/gallery/independent-dual-valve-water-system.webp", title: "Independent Dual-Valve System", alt: "Two-tank water treatment installation with independent electronic control valves and brine tank", category: "Dual-Tank" },
  { src: "/gallery/garage-water-softener-installation.webp", title: "Garage Water Softener", alt: "Professionally plumbed single-tank water softener and brine cabinet in a residential garage", category: "Whole-Home" },
  { src: "/gallery/outdoor-water-treatment-equipment.webp", title: "Outdoor Equipment Placement", alt: "Outdoor whole-home water treatment tank and brine cabinet positioned beside a brick home", category: "Specialty" },
  { src: "/gallery/city-water-treatment-garage.webp", title: "City-Water Treatment System", alt: "Whole-home city-water filtration and softening equipment installed against a garage wall", category: "Whole-Home" },
  { src: "/gallery/water-softener-near-tankless-heater.webp", title: "Softener Beside Tankless Heater", alt: "Whole-home water softener and brine tank installed near a residential tankless water heater", category: "Whole-Home" },
  { src: "/gallery/space-conscious-garage-water-system.webp", title: "Space-Conscious Garage Install", alt: "Compact whole-home water treatment installation fitted beside garage storage", category: "Whole-Home" },
  { src: "/gallery/whole-home-water-system-detail.webp", title: "Whole-Home System Detail", alt: "Residential whole-home water filtration system installation detail", category: "Whole-Home" },
  { src: "/gallery/professional-water-system-plumbing.webp", title: "Professional Plumbing Layout", alt: "Professional plumbing connections on a residential water treatment installation", category: "Specialty" },
  { src: "/gallery/complete-residential-water-treatment.webp", title: "Complete Water Treatment Setup", alt: "Completed residential water filtration and conditioning equipment setup", category: "Whole-Home" },
  { src: "/gallery/garage-water-filtration-project.webp", title: "Garage Filtration Project", alt: "Garage-mounted whole-home water filtration project with clean equipment placement", category: "Whole-Home" },
  { src: "/gallery/western-nc-water-system-installation.webp", title: "Water System Installation", alt: "Installed whole-home water treatment equipment serving a Western North Carolina residence", category: "Specialty" },
  { src: "/gallery/water-treatment-control-valve-detail.webp", title: "Finished Equipment Connection", alt: "Finished connections and control valve on a residential water treatment system", category: "Specialty" },
  { src: "/gallery/single-tank-water-softener.webp", title: "Single-Tank Softener Installation", alt: "Single-tank water softener with electronic control valve and brine cabinet", category: "Whole-Home" },
];

const categories: Category[] = ["All", "Whole-Home", "Dual-Tank", "Reverse Osmosis", "Specialty"];

export function GalleryPage() {
  const [category, setCategory] = useState<Category>("All");
  const [selected, setSelected] = useState<(typeof photos)[number] | null>(null);
  const shown = category === "All" ? photos : photos.filter((photo) => photo.category === category);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Asheville Water Specialists Installation Gallery",
    description: "Real whole-home filtration, softener, dual-tank, and reverse-osmosis installations in Western North Carolina.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: photos.map((photo, index) => ({ "@type": "ImageObject", position: index + 1, name: photo.title, caption: photo.alt, contentUrl: `https://asheville-water-specialists-432.netlify.app${photo.src}` })),
    },
  };

  return (
    <>
      <Seo title="Water Filtration Installation Gallery | Asheville Water Specialists" description="See real whole-home water filters, softeners, dual-tank systems, and under-sink reverse-osmosis installations completed for Western North Carolina homes." path="/gallery" schema={schema} />
      <PageHeader eyebrow="Real Installations" title="Our Work Around Western North Carolina" subtitle="Clean equipment placement, professional plumbing, and water treatment selected for each home." />

      <main className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-sm leading-7 text-ink/65">Browse actual installation photos from residential water-treatment projects. Every home has different plumbing, space, source water, and treatment goals, so final equipment layouts vary.</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter gallery by project type">
            {categories.map((item) => <button key={item} type="button" onClick={() => setCategory(item)} aria-pressed={category === item} className={`rounded-full px-4 py-2 font-body text-xs font-semibold transition ${category === item ? "bg-specialist text-white shadow-md" : "border border-mist bg-white text-ink/60 hover:border-sky hover:text-specialist"}`}>{item}</button>)}
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {shown.map((photo) => (
              <button key={photo.src} type="button" onClick={() => setSelected(photo)} className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-mist text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={photo.src} alt={photo.alt} className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy" decoding="async" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent px-5 pb-5 pt-16 text-white">
                  <span className="block font-body text-[10px] font-semibold uppercase tracking-[0.16em] text-sky">{photo.category}</span>
                  <span className="mt-1 block font-heading text-sm font-semibold">{photo.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </main>

      {selected && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button type="button" onClick={() => setSelected(null)} className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-navy shadow-lg" aria-label="Close image">×</button>
          <figure className="max-h-[90vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl" />
            <figcaption className="mt-4 text-center font-body text-sm text-white/80">{selected.title}</figcaption>
          </figure>
        </div>
      )}

      <CtaBand heading="Planning a Water Treatment Project?" sub="Start with your home’s water and plumbing. We’ll recommend only the equipment the job requires." />
    </>
  );
}
