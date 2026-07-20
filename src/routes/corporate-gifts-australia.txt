import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, CheckCircle2, Sparkles, Truck, Globe2, PackageCheck, Leaf, Award, Users, Building2, Rocket } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-gift-kit.jpg";
import ucOnboarding from "@/assets/usecase-onboarding.jpg";
import ucEvent from "@/assets/usecase-event.jpg";
import ucFestive from "@/assets/usecase-festive.jpg";
import ucVip from "@/assets/usecase-vip.jpg";
import ucEco from "@/assets/usecase-eco.jpg";
import pDrink from "@/assets/product-drinkware.jpg";
import pTote from "@/assets/product-tote.jpg";
import pTech from "@/assets/product-tech.jpg";
import pNotebook from "@/assets/product-notebook.jpg";

const PAGE_URL = "https://thegifting-lab.com/corporate-gifts-australia";
const PAGE_TITLE = "Corporate Gifts Australia | Custom Kits & Branded Merch | The Gifting Lab";
const PAGE_DESC = "Custom corporate gift kits for Australian businesses - onboarding boxes, VIP gifts, eco-friendly merchandise and event giveaways, priced in AUD and produced through our regional supply chain.";

export const Route = createFileRoute("/corporate-gifts-australia")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "Corporate Gifts Australia, Custom Corporate Gifts Australia, Corporate Gift Supplier Australia, Branded Corporate Gifts Australia, Eco Corporate Gifts Australia" },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
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
            { "@type": "ListItem", position: 2, name: "Corporate Gifts Australia", item: PAGE_URL },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Corporate Gifts Supplier",
          provider: {
            "@type": "Organization",
            name: "The Gifting Lab",
            url: "https://thegifting-lab.com",
          },
          areaServed: { "@type": "Country", name: "Australia" },
          name: "Corporate Gifts Australia",
          description: PAGE_DESC,
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
  component: CorporateGiftsAustralia,
});

const audiences = [
  { icon: Users, t: "HR Teams", d: "Onboarding kits, work anniversaries and employee appreciation gifts that boost retention." },
  { icon: Rocket, t: "Marketing Teams", d: "Branded merchandise, event giveaways and influencer kits that drive brand recall." },
  { icon: Building2, t: "Procurement", d: "Volume pricing, consolidated invoicing and clear lead times for recurring programs." },
  { icon: Award, t: "Startups, SMEs & Enterprise", d: "From 50 units to 10,000+ - scalable gifting for every stage of growth in Australia." },
];

const categories = [
  { title: "Premium Corporate Gifts", img: ucVip, desc: "Executive leather goods, gourmet hampers and high-end tech accessories for VIP clients and C-suite." },
  { title: "Custom Branded Merchandise", img: pTote, desc: "Bespoke totes, apparel, drinkware and stationery with your logo, colours and packaging." },
  { title: "Onboarding Kits", img: ucOnboarding, desc: "Welcome gifts for new hires - notebooks, bottles, swag and branded boxes delivered to home or office." },
  { title: "Event & Conference Gifts", img: ucEvent, desc: "Speaker gifts, delegate kits and roadshow giveaways for Australian events and trade shows." },
  { title: "Festive Corporate Hampers", img: ucFestive, desc: "End-of-year and holiday hampers curated for clients, partners and employees." },
  { title: "Eco-Friendly Gifts", img: ucEco, desc: "Bamboo, cork and recycled-material gifts that align with Australian corporate sustainability policies." },
];

const products = [
  { name: "Executive Welcome Kit", img: ucOnboarding, desc: "Leather notebook, brass pen, ceramic mug, branded box." },
  { name: "Heritage Tote Set", img: pTote, desc: "Canvas tote, ceramic mug, brass pen - premium feel." },
  { name: "Tech Essentials Pouch", img: pTech, desc: "Wireless charger, power bank, cable kit in a custom pouch." },
  { name: "Drinkware Collection", img: pDrink, desc: "Insulated bottles and ceramic mugs, fully branded." },
];

const whyUs = [
  { i: Sparkles, t: "Design-led, not a print shop", d: "We're product designers with a manufacturing supply chain behind us - not a catalogue reseller with a logo printer." },
  { i: Globe2, t: "Direct factory relationships", d: "Sourcing across Malaysia, Singapore, China and Vietnam gives Australian buyers better unit economics than AU-only suppliers." },
  { i: Truck, t: "Honest delivery timelines", d: "Australia orders run through our regional supply chain, so lead times run longer than our SG/MY/TH markets - we'll confirm an exact timeline with your quote rather than guess." },
  { i: PackageCheck, t: "End-to-end service", d: "Concept, design mockups, production, QC, kitting, packing and delivery coordination handled in-house." },
  { i: Leaf, t: "Sustainable options", d: "Our Sustain range uses bamboo, cork and recycled materials, relevant for many Australian corporate ESG policies." },
  { i: Award, t: "Same white-glove process", d: "Curated proposal with product mockups and pricing within 48 hours, no matter which market you're ordering into." },
];

const process = [
  { n: "01", t: "Share your brief", d: "Tell us your audience, budget, deadline and brand guidelines via our quote form or email." },
  { n: "02", t: "Curated proposal", d: "We send a tailored proposal with product mockups, AUD pricing and a confirmed delivery timeline within 48 hours." },
  { n: "03", t: "Approve & produce", d: "Approve samples and artwork. We handle production, QC, kitting and custom packaging." },
  { n: "04", t: "Deliver to Australia", d: "Coordinated delivery to your office or event venue, with tracking shared throughout transit." },
];

const faqs = [
  {
    q: "Do you deliver to Australia, and how long does it take?",
    a: "Yes - Australia orders are produced through our regional supply chain across Malaysia, Singapore, China and Vietnam, so delivery typically takes longer than our SG/MY/TH lead times. We'll confirm an exact timeline when you request a proposal rather than quote a one-size-fits-all number.",
  },
  {
    q: "Can we pay and be invoiced in AUD?",
    a: "Yes - AUD pricing and invoicing is available for Australian orders.",
  },
  {
    q: "Do you offer eco-friendly or sustainable corporate gifts?",
    a: "Yes. Our Sustain range uses bamboo, cork, recycled materials and FSC-certified packaging - relevant for many Australian corporate sustainability policies.",
  },
  {
    q: "What's the minimum order quantity for corporate gifts in Australia?",
    a: "Most curated kits start from 25-50 units. For fully bespoke product designs with custom packaging, MOQs typically begin at 300 units.",
  },
  {
    q: "Do you have a local case study or reference in Australia?",
    a: "Australia is a newer market for us - we're upfront about that rather than overstating our track record here. We'd be glad to introduce you to reference clients from our Singapore, Malaysia and Thailand programs while we build out Australian case studies.",
  },
  {
    q: "How do I request a quotation?",
    a: "Send us your brief via the quote form. Share your audience, quantity, budget range and deadline, and we'll return a tailored proposal with product options, AUD pricing and a confirmed delivery timeline within 48 hours.",
  },
];

const otherMarkets = [
  { to: "/corporate-gifts-singapore", label: "Singapore" },
  { to: "/corporate-gifts-malaysia", label: "Malaysia" },
  { to: "/corporate-gifts-thailand", label: "Thailand" },
];

function CorporateGiftsAustralia() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold bg-secondary/50 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Serving Australia - B2B Corporate Gifting
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Custom corporate gifts,<br />
              <span className="italic text-muted-foreground">delivered to</span><br />
              Australian businesses.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              The Gifting Lab designs and produces custom corporate gift kits - onboarding boxes, VIP gifts, eco-friendly merchandise and event giveaways - for Australian businesses, with AUD pricing and production through our regional supply chain across Malaysia, Singapore, China and Vietnam.
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {["Custom branding & packaging", "AUD pricing & invoicing", "Low MOQ from 25 units", "Quote within 48 hours"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 text-eco" /> {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link to="/contact" className="group inline-flex items-center gap-2 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                Get a Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://wa.me/60108739642"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-secondary transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
          <div className="lg:col-span-6 relative animate-fade-in">
            <div className="absolute -inset-6 bg-secondary/60 rounded-3xl -z-10" />
            <img
              src={heroImg}
              alt="Premium corporate gift kit Australia - branded navy box with tote, mug, notebook and brass pen"
              width={1920}
              height={1080}
              className="rounded-2xl shadow-2xl shadow-primary/10 object-cover aspect-[4/3] w-full"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col gap-1 rounded-2xl bg-background border border-border p-5 shadow-xl">
              <span className="text-xs text-muted-foreground">AU delivery</span>
              <span className="font-display text-2xl">Confirmed with your quote</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-secondary/30 border-b border-border">
        <div className="container-page py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <Stat n="500+" label="Corporate clients" />
          <Stat n="10,000+" label="Gifts delivered" />
          <Stat n="48 hrs" label="Quotation turnaround" />
          <Stat n="MY - SG - TH - AU" label="Markets served" />
        </div>
      </section>

      {/* INTRO */}
      <section className="container-page py-20 md:py-28 max-w-4xl">
        <span className="text-xs tracking-widest uppercase text-gold">Regional gifting partner, new to Australia</span>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mt-4">
          Corporate gifts that strengthen relationships - not collect dust.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            The Gifting Lab designs and produces custom corporate gift kits - onboarding boxes, VIP gifts, eco-friendly merchandise and event giveaways - for Australian businesses, with AUD pricing and production through the same regional supply chain (Malaysia, Singapore, China, Vietnam) behind our Singapore, Malaysia and Thailand programs.
          </p>
          <p>
            We work with HR, marketing and procurement teams to design, produce and deliver fully customized corporate gifts to Australia, with the same white-glove proposal process - mockups and pricing within 48 hours - used across every market we serve.
          </p>
          <p>
            Since we don't yet run a local Australian fulfillment hub, we're upfront about it: Australia orders take longer to arrive than our Singapore, Malaysia and Thailand deliveries. We'll give you a confirmed, honest timeline with your quote rather than a generic promise.
          </p>
        </div>
      </section>

      {/* OTHER MARKETS */}
      <section className="container-page pb-16 md:pb-20">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Also serving</span>
          {otherMarkets.map((m) => (
            <Link
              key={m.to}
              to={m.to}
              className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm hover:border-foreground/40 hover:bg-secondary/50 transition-colors"
            >
              {m.label}
            </Link>
          ))}
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            title="Built for Australia's most demanding teams."
            desc="From fast-growing startups to enterprise headquarters - we work with the people responsible for getting corporate gifting right."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a) => (
              <div key={a.t} className="rounded-2xl border border-border bg-background p-7 space-y-3">
                <a.icon className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl">{a.t}</h3>
                <p className="text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-page py-24 md:py-28">
        <SectionHeader
          eyebrow="What we deliver"
          title="A full range of corporate gifts for Australian businesses."
          desc="Every category is fully customizable - branding, packaging, contents and price point tailored to your program."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/30 transition-colors">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={c.img} alt={`${c.title} Australia`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-display text-xl">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container-page py-24 md:py-28">
          <div className="flex items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Popular kits"
              title="Best-selling corporate gift kits, available to Australia."
              desc="Start from a curated kit, then customize colours, branding and contents to match your program."
              align="left"
              noCenter
            />
            <Link to="/gift-kits" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
              View all kits <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p) => (
              <div key={p.name} className="group">
                <div className="overflow-hidden rounded-2xl bg-background aspect-square border border-border">
                  <img src={p.img} alt={`${p.name} - corporate gift Australia`} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="pt-4 space-y-1">
                  <h3 className="font-display text-lg">{p.name}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-24 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs tracking-widest uppercase text-gold">Why The Gifting Lab</span>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              A design-led corporate gift supplier, honest about what's new.
            </h2>
            <p className="text-primary-foreground/70 max-w-md">
              We're not a print shop with a catalogue. We're product designers with a regional supply chain - and we'd rather tell you Australia is a newer market for us than oversell a track record we don't have here yet.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 h-12 rounded-full bg-background text-foreground px-6 text-sm font-medium hover:scale-[1.02] transition-transform">
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden border border-primary-foreground/10">
            {whyUs.map((f) => (
              <div key={f.t} className="bg-primary p-7 space-y-3">
                <f.i className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl">{f.t}</h3>
                <p className="text-sm text-primary-foreground/65">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-page py-24 md:py-28">
        <SectionHeader eyebrow="How it works" title="From brief to delivery in four steps." />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((s) => (
            <div key={s.n} className="space-y-4 group">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl text-gold">{s.n}</span>
                <span className="h-px flex-1 bg-border group-hover:bg-foreground transition-colors" />
              </div>
              <h3 className="font-display text-2xl">{s.t}</h3>
              <p className="text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKS / EXPLORE */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container-page py-20">
          <SectionHeader eyebrow="Explore more" title="Dig deeper into our work." align="left" noCenter />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { to: "/gift-kits", t: "Browse Gift Kits", d: "Curated corporate gift kits ready to customize." },
              { to: "/catalog", t: "Full Catalog", d: "Explore our complete product catalogue." },
              { to: "/customization", t: "Customization", d: "See how we brand, kit and package every order." },
              { to: "/case-studies", t: "Case Studies", d: "Real programs we've delivered across Asia-Pacific." },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="group block rounded-2xl border border-border bg-background p-6 hover:border-foreground/30 transition-colors">
                <h3 className="font-display text-lg">{l.t}</h3>
                <p className="text-sm text-muted-foreground mt-1">{l.d}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-24 md:py-28 max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Corporate gifts in Australia - answered."
          desc="Common questions from HR, marketing and procurement teams."
        />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-display text-lg text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-secondary p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-x-0 -top-20 h-40 bg-gold/20 blur-3xl" />
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Ready to plan your next corporate gift program in Australia?
            </h2>
            <p className="text-muted-foreground">
              Share your audience, quantity and timeline. We'll return a tailored proposal with AUD pricing and a confirmed delivery timeline within 48 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform">
                Get Free Quotation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/60108739642"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-background/70"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp +60 10 873 9642
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-4xl">{n}</div>
      <div className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase mt-1">{label}</div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
  noCenter,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  noCenter?: boolean;
}) {
  return (
    <div className={`${align === "center" && !noCenter ? "text-center mx-auto" : ""} max-w-2xl space-y-4`}>
      <span className="text-xs tracking-widest uppercase text-gold">{eyebrow}</span>
      <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      {desc && <p className="text-muted-foreground">{desc}</p>}
    </div>
  );
}
