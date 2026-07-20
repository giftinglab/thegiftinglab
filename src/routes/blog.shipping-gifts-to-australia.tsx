import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const PAGE_URL = "https://thegifting-lab.com/blog/shipping-gifts-to-australia";
const PAGE_TITLE = "Shipping Corporate Gifts to Australia from Asia: Lead Times and Costs Explained";
const PAGE_DESC = "What Australian companies should know about lead times, costs and customs when sourcing corporate gifts from Asia-based suppliers.";

const faqs = [
  {
    q: "Is it cheaper to source corporate gifts from Asia than from an Australian supplier?",
    a: "Often yes at volume, due to direct factory access, but the total cost comparison should include freight, customs and the value of a longer lead time - not just the per-unit product price.",
  },
  {
    q: "Do I need to worry about customs duties on branded merchandise?",
    a: "Generally straightforward for standard corporate gift categories, but this varies by product type and value - confirm with your supplier or a customs broker for high-value shipments.",
  },
  {
    q: "What's a safe buffer to build in before an event date?",
    a: "6-8 weeks from brief to Australia delivery is a reasonable planning baseline when sourcing from an Asia-based supplier.",
  },
];

export const Route = createFileRoute("/blog/shipping-gifts-to-australia")({
  head: () => ({
    meta: [
      { title: `${PAGE_TITLE} | The Gifting Lab` },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://thegifting-lab.com/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://thegifting-lab.com/blog" },
            { "@type": "ListItem", position: 3, name: PAGE_TITLE, item: PAGE_URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: PAGE_TITLE,
          description: PAGE_DESC,
          datePublished: "2026-07-17",
          dateModified: "2026-07-17",
          author: { "@type": "Organization", name: "The Gifting Lab" },
          publisher: { "@type": "Organization", name: "The Gifting Lab" },
          mainEntityOfPage: PAGE_URL,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Post,
});

function Post() {
  return (
    <BlogPost
      eyebrow="Shipping & logistics"
      title={PAGE_TITLE}
      dek="Corporate gift orders shipped to Australia from an Asia-based supplier typically take longer than domestic MY/SG/TH delivery - usually the standard 15-30 day production window plus additional international freight and customs clearance time - and unit costs are often lower than AU-only suppliers due to direct manufacturing relationships, provided the timeline is planned for in advance."
      date="17 Jul 2026"
      faqs={faqs}
    >
      <div>
        <h2>Why companies source from Asia despite the extra transit time</h2>
        <p>
          Asia-based gifting studios with in-house design and direct factory relationships (rather than reselling through a local print shop) typically offer meaningfully better unit economics at volume, plus access to manufacturing capabilities - bespoke packaging, product design, multiple decoration methods - that smaller local suppliers may not have in-house.
        </p>
      </div>

      <div>
        <h2>What adds to the timeline</h2>
        <ol>
          <li><strong>Production</strong> - 15-30 days is standard for most kit sizes, including a sampling round</li>
          <li><strong>International freight</strong> - sea freight is cheaper but slower (weeks); air freight is faster but adds cost per unit, especially for bulkier kits</li>
          <li><strong>Customs clearance</strong> - branded merchandise generally clears without issue, but building in a buffer for customs is standard practice, not a red flag</li>
          <li><strong>Domestic AU last-mile delivery</strong> - from the port/airport of entry to individual offices or addresses</li>
        </ol>
      </div>

      <div>
        <h2>Planning rule of thumb</h2>
        <p>
          For any date-sensitive delivery (a launch event, a specific onboarding cohort, a conference), brief your supplier at least 6-8 weeks ahead when sourcing from Asia to Australia, versus 3-4 weeks for a domestic MY/SG order.
        </p>
      </div>

      <div>
        <h2>Questions to ask a supplier before committing to an Australia order</h2>
        <ul>
          <li>What is the realistic door-to-door timeline for my specific kit, not just the production window?</li>
          <li>Is freight and customs clearance included in the quoted price, or billed separately?</li>
          <li>What happens if customs holds a shipment - is there a contingency plan for date-sensitive deliveries?</li>
          <li>Can I get AUD pricing and invoicing, or only pricing in the supplier's home currency?</li>
        </ul>
      </div>
    </BlogPost>
  );
}
