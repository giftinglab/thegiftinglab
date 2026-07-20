import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

const PAGE_URL = "https://thegifting-lab.com/blog";
const PAGE_TITLE = "Corporate Gifting Guides & Ideas | The Gifting Lab";
const PAGE_DESC = "Practical guides on corporate gift budgets, onboarding kit ideas, eco-friendly options and shipping across Asia-Pacific.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
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
            { "@type": "ListItem", position: 2, name: "Blog", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

const posts = [
  {
    to: "/blog/onboarding-kit-costs-singapore",
    tag: "Pricing",
    title: "How Much Do Corporate Onboarding Kits Cost in Singapore? (2026 Price Guide)",
    dek: "A breakdown of what Singapore companies actually pay for custom employee onboarding kits, by kit tier and order volume.",
    date: "17 Jul 2026",
  },
  {
    to: "/blog/onboarding-gift-ideas-malaysia",
    tag: "Ideas",
    title: "Corporate Gift Ideas for New Hires in Malaysia: What Actually Gets Used",
    dek: "A practical guide to onboarding gift ideas Malaysian employees actually keep and use, based on hundreds of programs.",
    date: "17 Jul 2026",
  },
  {
    to: "/blog/shipping-gifts-to-australia",
    tag: "Shipping",
    title: "Shipping Corporate Gifts to Australia from Asia: Lead Times and Costs Explained",
    dek: "What Australian companies should know about lead times, costs and customs when sourcing corporate gifts from Asia.",
    date: "17 Jul 2026",
  },
];

function BlogIndex() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Guides"
        title="Corporate gifting guides & ideas."
        desc="Practical, no-fluff guides on budgets, gift ideas and logistics - written for HR, marketing and procurement teams across Asia-Pacific."
      />
      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 hover:border-foreground/30 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-gold">{p.tag}</span>
              <h2 className="font-display text-xl mt-4 leading-snug">{p.title}</h2>
              <p className="text-sm text-muted-foreground mt-3 flex-1">{p.dek}</p>
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground">{p.date}</span>
                <span className="inline-flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}test
