import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const PAGE_URL = "https://thegifting-lab.com/blog/onboarding-kit-costs-singapore";
const PAGE_TITLE = "How Much Do Corporate Onboarding Kits Cost in Singapore? (2026 Price Guide)";
const PAGE_DESC = "A breakdown of what Singapore companies actually pay for custom employee onboarding kits in 2026, by kit tier and order volume.";

const faqs = [
  {
    q: "What's the minimum order for a custom onboarding kit in Singapore?",
    a: "Most suppliers, including The Gifting Lab, set MOQ around 25 units for curated kits; fully bespoke product designs typically need 300+ units to be cost-effective.",
  },
  {
    q: "Is SGD pricing/invoicing available, or do I need to pay in another currency?",
    a: "Reputable suppliers serving Singapore should offer SGD invoicing directly - ask before committing if a supplier only quotes in another currency.",
  },
  {
    q: "Can onboarding kits be delivered to remote employees' homes, not just the office?",
    a: "Yes, most suppliers offer pick-and-pack delivery to individual addresses, usually at a higher per-unit shipping cost than a single bulk office drop.",
  },
];

export const Route = createFileRoute("/blog/onboarding-kit-costs-singapore")({
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
      eyebrow="Pricing guide"
      title={PAGE_TITLE}
      dek="Custom onboarding kits for Singapore companies typically range from S$40 to S$220 per unit depending on contents and customization level, with most mid-market programs landing between S$60-S$100 per kit at order volumes of 100-500 units. Minimum order quantities usually start at 25 units for curated kits."
      date="17 Jul 2026"
      faqs={faqs}
    >
      <div>
        <h2>What drives the price</h2>
        <p>Three things move the price per unit more than anything else:</p>
        <ol>
          <li><strong>Number of items in the kit.</strong> A single branded item (a notebook or tumbler) costs far less per unit than a multi-item kit (notebook + bottle + lanyard + packaging).</li>
          <li><strong>Customization depth.</strong> Logo-only pad printing is the cheapest option; full-color UV printing, embroidery, laser engraving and Pantone color-matching all add cost.</li>
          <li><strong>Packaging.</strong> A simple branded sleeve is inexpensive; a magnetic gift box or bespoke drawer box adds meaningfully to unit cost but also to the "would they actually keep this" factor that makes onboarding kits worth doing at all.</li>
        </ol>
      </div>

      <div>
        <h2>Typical price tiers (Singapore, SGD)</h2>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Example contents</th>
              <th>Price per unit</th>
              <th>Typical MOQ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Entry</td>
              <td>Single branded item + simple sleeve</td>
              <td>S$15-S$35</td>
              <td>25-50</td>
            </tr>
            <tr>
              <td>Mid</td>
              <td>Notebook + drinkware + lanyard, branded box</td>
              <td>S$40-S$75</td>
              <td>50-200</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Leather notebook, brass pen, presentation box</td>
              <td>S$65-S$110</td>
              <td>25-100</td>
            </tr>
            <tr>
              <td>VIP/Executive</td>
              <td>Leather portfolio, premium pen, glassware</td>
              <td>S$110-S$220+</td>
              <td>25+</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Hidden costs to ask about upfront</h2>
        <p>
          Setup/tooling fees for custom molds or engraving plates (usually one-time), sampling fees (often waived or credited against the full order), and delivery - bulk drop to one office is cheaper than pick-and-pack to individual home addresses for remote hires.
        </p>
      </div>

      <div>
        <h2>How long production takes</h2>
        <p>
          Budget 15-30 days from brief approval to delivery for most kit sizes, including a sampling round before full production. Rush timelines are sometimes possible - ask early.
        </p>
      </div>
    </BlogPost>
  );
}
