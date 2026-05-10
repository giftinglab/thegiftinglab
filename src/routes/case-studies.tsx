import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "./about";
import ucOnboarding from "@/assets/usecase-onboarding.jpg";
import ucEvent from "@/assets/usecase-event.jpg";
import ucFestive from "@/assets/usecase-festive.jpg";
import ucVip from "@/assets/usecase-vip.jpg";
import ucEco from "@/assets/usecase-eco.jpg";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — The Gifting Lab" },
      { name: "description", content: "Selected corporate gifting projects we've shipped across Malaysia and Singapore." },
      { property: "og:title", content: "Case Studies — The Gifting Lab" },
      { property: "og:image", content: ucOnboarding },
    ],
  }),
  component: CaseStudiesPage,
});

const studies = [
  { client: "Series-B Fintech", img: ucOnboarding, tag: "Onboarding", units: "1,200 units", desc: "Global onboarding kit shipped to four markets in two weeks. Custom magnetic boxes, branded notebooks, hardware accessories." },
  { client: "Regional Bank", img: ucVip, tag: "VIP gifting", units: "800 boxes", desc: "Year-end gift program for top-tier clients across MY and SG. Leather portfolios with debossed monogram." },
  { client: "Tech Conference", img: ucEvent, tag: "Event", units: "3,500 units", desc: "Speaker and delegate kits for a regional tech summit. Sustainable materials, full kitting and on-site delivery." },
  { client: "FMCG Brand", img: ucFestive, tag: "Festive", units: "2,000 hampers", desc: "CNY festive hampers with co-branded packaging. Two SKUs across MY/SG, fulfilled in 18 days." },
  { client: "Climate NGO", img: ucEco, tag: "Eco", units: "600 kits", desc: "Donor appreciation kits made entirely from recycled and biodegradable materials. Carbon-neutral shipping." },
  { client: "Real-estate Group", img: ucVip, tag: "Executive", units: "350 units", desc: "Topping-out ceremony gifts for partners, contractors and key tenants. Bespoke navy presentation boxes." },
];

function CaseStudiesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Case studies"
        title="Programs we've shipped."
        desc="A selection of corporate gifting projects delivered across Malaysia and Singapore."
      />
      <section className="container-page py-16 space-y-24">
        {studies.map((s, i) => (
          <article key={s.client} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-7 overflow-hidden rounded-2xl bg-secondary aspect-[4/3]">
              <img src={s.img} alt={s.client} loading="lazy" width={1024} height={768} className="h-full w-full object-cover" />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3 text-xs uppercase tracking-widest">
                <span className="text-gold">{s.tag}</span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-muted-foreground">{s.units}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl">{s.client}</h2>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          </article>
        ))}
      </section>
      <CTASection />
    </SiteLayout>
  );
}
