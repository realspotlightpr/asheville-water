# Asheville Water Specialists — Premium Experience Audit

Date: October 17, 2026  
Scope: Local website checkout only. No commit, push, or deployment is authorized.

## Executive direction

The current site is credible, information-rich, and technically stable, but it reads as a sequence of individually designed marketing sections instead of one art-directed customer journey. The premium direction should be **quiet confidence, local expertise, and clean-water clarity**—not glossy SaaS, luxury-hotel minimalism, or motion for motion's sake.

The redesign should retain the existing brand recognition, SEO copy, structured data, and route coverage while giving the highest-intent pages a more editorial, image-led composition and a consistent motion language.

## Frontend Thinking Gate

- **Stage:** established local service business with a mature SEO footprint and active lead generation.
- **Surface type:** branded marketing site, service catalog, local landing-page system, and educational resource library.
- **Primary task:** help a homeowner recognize their water concern, trust the company, and request a consultation or call.
- **Entry and journey:** search/local result → service, city, article, or homepage → evidence and fit → consultation.
- **First decision:** “Do these specialists understand my water source and problem?”
- **Information priority:** local proof → problem recognition → process → solutions → credentials → conversion.
- **Friction and recovery:** dense copy, repeated card grids, a very long mobile homepage, third-party form height, and competing CTAs. Recovery should include persistent call/consultation access and contextual next steps.
- **Mobile primary action:** call or open the short consultation flow.
- **Recommended foundation:** keep React, TypeScript, Vite, and Tailwind. Build a small native motion system with CSS and IntersectionObserver before considering an animation dependency.
- **Useful references:** premium local home-service/editorial sites, hospitality-style image direction, and restrained product storytelling—not SaaS dashboards.
- **Forbidden on screen:** card walls, aggressive parallax, autoplay sound, scroll hijacking, fake counters, excessive glassmorphism, and decorative animation that delays content.
- **Primary risks:** SEO copy loss, layout shifts from the HighLevel embed, reduced-motion accessibility, mobile page length, and adding too much JavaScript to an already large route corpus.
- **Verification:** build/lint, desktop at 1440/1280/1024, mobile at 390/375/320, keyboard navigation, reduced-motion mode, touch targets, and representative page-template checks.

## Evidence from the current build

- Homepage: 13 main sections, 717 DOM elements, 64 links, and 7 images.
- Page length: approximately 10,002 px at the current desktop preview and 17,977 px at a 375 px mobile viewport.
- Build and lint pass.
- The prerender job generates 807 SEO routes and the sitemap.
- Main compiled JavaScript is about 434 KB before gzip; the ranking-page data chunk is about 2.36 MB before gzip.
- Several source product PNGs are between about 0.5 MB and 1.1 MB.
- The HighLevel form is assigned fixed iframe heights of 1,060–1,280 px, creating substantial empty or delayed space on mobile.
- The CSS declares Poppins and Inter, but the document currently contains no font import or local font files. Production users can fall back to system fonts despite the README saying Google Fonts are loaded.
- The desktop navigation switches to the compact/mobile header below the `xl` breakpoint, so common 1,024–1,279 px screens lose the full navigation.
- Motion is mainly hover translation, color changes, and one pulsing dot; there is no coherent page-entry or scroll-reveal system.

## Highest-priority improvements

### 1. Recompose the homepage into a shorter story

The homepage currently presents too many equally weighted sections. Keep the content, but merge and reorder it into a clearer narrative:

1. Image-led hero with one promise, one supporting line, two CTAs, and compact proof.
2. City-water versus well-water problem selector.
3. Real installation proof with one featured project and a small gallery rail.
4. Three solution families instead of repeated product and service card grids.
5. Founder/local-expertise story with real photography.
6. Refined water-data interaction.
7. Three-phase process with six details revealed progressively.
8. Final consultation module with phone fallback.

This preserves SEO context while removing the feeling of endless stacked sections.

### 2. Make imagery a primary design material

The homepage hero uses a strong faucet image, but most following sections return to white cards. Use existing installation and founder photography to create continuity:

- one real installation immediately after the problem selector;
- alternating editorial image/text layouts on services;
- local/project photography in city templates;
- contextual diagrams or photos in resource articles;
- fewer product cutouts on pale rectangles and more in-home context where truthful assets exist.

### 3. Replace the card-wall pattern

Cards currently carry products, benefits, service guides, features, process steps, city services, related articles, and FAQs. Establish multiple content patterns:

- editorial split layouts for major claims;
- borderless numbered lists for processes;
- image rails for projects;
- compact comparison rows for benefits;
- cards only for items that are genuinely selectable or repeatable.

### 4. Build a restrained motion language

Use two or three recognizable behaviors throughout the site:

- **Reveal:** 16–24 px vertical movement with opacity over 500–650 ms, staggered only for short groups.
- **Shift:** subtle image scale or masked reveal in hero/project sections; transform-only and never on long text.
- **Response:** buttons, tabs, cards, and navigation react within 160–220 ms.

Add a compressed sticky header after scroll, crossfade/slide transitions for the product spotlight, swipe support on touch, a once-only number reveal for proof stats, and smooth active-state transitions for the water source/data interactions. Disable nonessential motion under `prefers-reduced-motion`.

### 5. Simplify the header and conversion hierarchy

The header currently asks the logo, three dropdown groups, two plain links, Water Testing, phone, language, and a CTA to coexist. Recommended hierarchy:

- Desktop: Services, Water Problems, Service Areas, Resources, About; phone; primary CTA.
- Move Gallery and Water Testing into the relevant menus or a compact secondary group.
- Keep language access, but visually subordinate it.
- Use the full desktop header earlier than `xl`, with an intermediate layout for 1,024–1,279 px.
- Mobile: logo, call icon, consultation CTA, menu. Add an optional bottom sticky action bar after the hero.

### 6. Tighten hero copy without losing SEO meaning

The current hero contains an SEO-heavy paragraph, two benefit pills, two CTAs, and a chat note. A premium hero should communicate faster:

- one strong, customer-centered headline;
- one two-line explanation;
- one primary and one secondary CTA;
- one compact proof line;
- move the longer service list below the fold in crawlable HTML.

### 7. Improve typography and tokens

- Actually load or self-host the chosen typefaces.
- Consider a less generic display face while preserving a highly legible body face.
- Create consistent display, heading, body, caption, and eyebrow scales.
- Limit line length to about 60–72 characters on reading pages.
- Normalize radius, shadow, border, button height, focus ring, and section-spacing tokens.
- Reserve amber for primary action and proof accents; reduce competing blue accents.

### 8. Fix the mobile experience deliberately

- Reduce homepage length by merging repeated sections.
- Prevent the six-step process from becoming six large standalone cards; use a vertical timeline or expandable three-phase flow.
- Replace fixed form heights with a reliable resize strategy or an intentional short-form shell.
- Keep touch targets at least 44 px.
- Avoid tiny copy in dense data and footer areas.
- Make product spotlight controls easier to tap and add swipe interaction.
- Ensure the chat button and sticky CTA never overlap.

## Template-specific recommendations

### Homepage

Highest visual opportunity. Recompose rather than merely restyle. Use real work and family imagery, fewer cards, stronger alternation, and a controlled reveal sequence.

### Services

The current two-column service-card catalog is clear but generic. Add an image-led opening, create anchored service chapters, show “best for / treats / does not treat,” and use a single contextual CTA after each pair or chapter rather than a repeated button on every card.

### Service-area pages

The content is strong and local, but the pages rely on gradients and cards. Add a local visual cue, concise water-source snapshot, proof of nearby work, and a contextual city CTA. Keep the copy/template data architecture intact for SEO.

### Resource articles

The reading experience is clean but visually sparse. Add a sticky or inline table of contents, reading progress, one relevant image/diagram, better callout styles, author/reviewer credibility, and contextual CTA placement. Do not animate body paragraphs on scroll.

### About

The family image and founder story are the strongest authentic brand assets. Make this the emotional standard for the rest of the site: larger photography, pull quotes, local proof, and less text boxed inside cards.

### Gallery

Promote it from a passive image archive into project proof: problem, source, solution, city/area, and outcome where accurate. Use modal transitions and before/after only when genuine paired images exist.

### Contact and forms

The form is the largest conversion and layout risk. Use a short first step, clearer expectation-setting, stable height, and a persistent phone alternative. Keep compliance text intact but visually separate it from the primary action.

## Performance and technical polish

1. Self-host and preload the final WOFF2 font files; remove the current undeclared-font mismatch.
2. Convert large product PNGs to transparent WebP/AVIF and right-size them.
3. Keep animation transform/opacity-based; avoid layout-triggering scroll effects.
4. Lazy-load lower-page images and noncritical third-party widgets where conversion requirements permit.
5. Split data-heavy ranking-page payloads more aggressively so ordinary routes do not pay for unrelated content.
6. Add an explicit skeleton or stable placeholder for lazy route transitions instead of a blank light panel.
7. Rework the HighLevel iframe resize behavior and mobile minimum/maximum heights.
8. Add accessible focus-visible styles and test all interactive motion with keyboard and reduced-motion settings.

## Recommended local implementation sequence

### Phase 1 — Foundation

- Design tokens, typography loading, buttons, focus states, section containers, reveal primitives, reduced-motion rules, and header behavior.

### Phase 2 — Homepage prototype

- Rebuild the hero and first four sections first.
- Review at desktop and mobile before touching the remaining homepage.
- Complete the rest of the homepage only after the visual direction is approved.

### Phase 3 — Shared templates

- Services, city/service-area, PageHeader, CTA band, contact/form, footer, and resource-article shell.

### Phase 4 — Secondary pages and polish

- About, gallery, resources/library, product pages, legal pages, microinteractions, accessibility, and performance passes.

### Phase 5 — Release review

- Full build and lint, representative route screenshots, mobile and reduced-motion checks, link/form checks, and SEO output comparison. Commit/push/deploy only after explicit approval.

## Definition of “premium” for this project

Premium means fewer elements competing at once, stronger real-world imagery, disciplined typography, calm confidence, obvious next steps, and motion that helps the homeowner understand the page. It does not mean adding more effects or hiding practical information.
