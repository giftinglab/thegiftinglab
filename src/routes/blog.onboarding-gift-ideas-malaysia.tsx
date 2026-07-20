import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const PAGE_URL = "https://thegifting-lab.com/blog/onboarding-gift-ideas-malaysia";
const PAGE_TITLE = "Corporate Gift Ideas for New Hires in Malaysia: What Actually Gets Used";
const PAGE_DESC = "A practical guide to onboarding gift ideas Malaysian employees actually keep and use, based on what performs best across hundreds of programs.";

const faqs = [
  {
    q: "Should onboarding kits differ by seniority level?",
    a: "Many companies run a standard kit for all new hires and a premium/VIP-tier kit (leather goods, glassware) for management and executive hires - this keeps cost proportional while still making every new hire feel welcomed.",
  },
  {
    q: "How much should a Malaysian company budget per onboarding kit?",
    a: "Most mid-market programs land between RM 100-RM 250 per kit; premium programs run higher. See our Singapore pricing guide for a comparable SGD breakdown.",
  },
  {
    q: "Is it worth including eco-friendly items even if it costs slightly more?",
    a: "Increasingly yes - sustainability-conscious materials are becoming a baseline expectation rather than a differentiator at larger employers, and cost premiums have narrowed significantly.",
  },
];

export const Route = createFileRoute("/blog/onboarding-gift-ideas-malaysia")({
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
      eyebrow="Gift ideas"
      title={PAGE_TITLE}
      dek="The onboarding items Malaysian employees keep longest are practical, everyday-use products with subtle branding - quality drinkware, notebooks and tech accessories consistently outperform novelty items like stress balls or lanyards-only kits, which tend to end up unused within weeks."
      date="17 Jul 2026"
      faqs={faqs}
    >
      <div>
        <h2>Why most onboarding gifts fail</h2>
        <p>
          A gift only works as a brand experience if the person keeps using it. The most common mistake is optimizing for the lowest per-unit cost rather than for "would they actually keep this" - a cheap polybag of branded stress balls costs less upfront but delivers zero brand recall three months later, which defeats the purpose of spending on it at all.
        </p>
      </div>

      <div>
        <h2>What consistently performs well</h2>
        <ul>
          <li><strong>Quality drinkware</strong> (insulated tumblers, ceramic mugs) - used daily, visible in office and on video calls</li>
          <li><strong>Notebooks</strong> (hardcover or leather) - still standard in Malaysian meeting culture, especially for client-facing and management-track hires</li>
          <li><strong>Tech accessories</strong> (wireless chargers, cable kits) - high perceived value relative to cost, genuinely useful</li>
          <li><strong>Tote bags</strong> - practical for commuting, doubles as passive brand exposure outside the office</li>
          <li><strong>Eco-friendly materials</strong> (bamboo, cork, recycled cotton) - increasingly expected rather than a bonus, particularly at larger and multinational employers</li>
        </ul>
      </div>

      <div>
        <h2>What underperforms</h2>
        <ul>
          <li>Single-item branded merch with no packaging (feels like an afterthought)</li>
          <li>Items with loud, full-surface branding rather than a subtle logo placement (people are less likely to use anything that reads as an obvious ad)</li>
          <li>Novelty items with no everyday function</li>
        </ul>
      </div>

      <div>
        <h2>A well-structured kit, in order of typical inclusion</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Role in the kit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Notebook</td>
              <td>Signals professionalism, daily-use anchor item</td>
            </tr>
            <tr>
              <td>Drinkware</td>
              <td>Highest daily visibility</td>
            </tr>
            <tr>
              <td>Lanyard/access item</td>
              <td>Functional, low-cost addition</td>
            </tr>
            <tr>
              <td>Tech accessory</td>
              <td>Highest perceived value</td>
            </tr>
            <tr>
              <td>Packaging (branded box)</td>
              <td>The unboxing moment - where "brand experience" actually happens</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2>Timing</h2>
        <p>
          Kits should arrive before or on the new hire's first day - a kit that arrives in week 3 loses most of its onboarding value.
        </p>
      </div>
    </BlogPost>
  );
}
