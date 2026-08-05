type RankingSection = { heading?: string; paragraphs: string[] };
export type RankingPage = {
  number: number;
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  primaryQuery: string;
  intro: string;
  sections: RankingSection[];
  internalLinks: string[];
};

const sourceFiles = import.meta.glob("../content/ranking-pages/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
const clean = (value = "") =>
  value
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .trim();

function parseSource(markdown: string): RankingPage[] {
  return clean(markdown)
    .split(/(?=^## \d+\. )/m)
    .filter((block) => /^## \d+\./.test(block))
    .flatMap((block) => {
      const heading = block.match(/^## (\d+)\. (.+)$/m),
        slugMatch = block.match(/\*\*(?:URL|Slug):\*\*\s*`?([^`\s]+)`?/);
      if (!heading || !slugMatch) return [];
      const number = Number(heading[1]),
        draftTitle = clean(heading[2]),
        slug = `/${slugMatch[1].replace(/^\/+|\/+$/g, "")}/`;
      const metaTitle = clean(
        block.match(/\*\*Title tag:\*\*\s*(.+)$/m)?.[1] ||
          `${draftTitle} | Asheville Water Specialists`,
      );
      const suppliedDescription = clean(
        block.match(/\*\*Meta description:\*\*\s*(.+)$/m)?.[1] || "",
      );
      const primaryQuery = clean(
        block.match(
          /\*\*(?:Primary query|Query):\*\*\s*([^\n·]+)(?:\s*·|$)/m,
        )?.[1] || draftTitle,
      );
      const title = clean(
        block.match(/\*\*H1:\*\*\s*(.+)$/m)?.[1] || draftTitle,
      );
      const internalLinks = clean(
        block.match(/\*\*Internal links:\*\*\s*(.+)$/m)?.[1] || "",
      )
        .split(/;|,/)
        .map(clean)
        .filter(Boolean);
      const body = block
        .replace(/^## .+$/m, "")
        .replace(
          /^\*\*(?:URL|Slug|Title tag|Meta description|H1|Primary query|Query|Schema):\*\*.*$/gm,
          "",
        )
        .replace(/^\*\*(?:CTA|Internal links|Production note):\*\*.*$/gm, "")
        .trim();
      const sections = body
        .split(/(?=^### )/m)
        .filter(Boolean)
        .map((chunk) => {
          const sectionHeading = clean(chunk.match(/^### (.+)$/m)?.[1] || "");
          const paragraphs = chunk
            .replace(/^### .+$/m, "")
            .split(/\n\s*\n/)
            .map((p) => clean(p.replace(/^[-*]\s+/gm, "")))
            .filter((p) => Boolean(p) && p !== "---");
          return { heading: sectionHeading || undefined, paragraphs };
        })
        .filter((s) => s.paragraphs.length);
      const intro =
        sections[0]?.paragraphs[0] ||
        suppliedDescription ||
        `Practical guidance about ${primaryQuery}.`;
      const description =
        suppliedDescription ||
        `${intro.slice(0, 150).replace(/[.,;:]?$/, "")}…`;
      return [
        {
          number,
          slug,
          title,
          metaTitle,
          description,
          primaryQuery,
          intro,
          sections,
          internalLinks,
        },
      ];
    });
}
export const rankingPages = Object.values(sourceFiles)
  .flatMap(parseSource)
  .sort((a, b) => a.number - b.number);
export const newRankingPages = rankingPages.filter(
  (page) => page.slug !== "/service-areas/",
);
