import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles, Truck, Factory, Globe2, PackageCheck, Leaf } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Gifting Lab — Corporate Gifts MY & SG" },
      { name: "description", content: "Premium corporate gifts, onboarding kits, festive gifts and custom merchandise — designed and delivered across Malaysia & Singapore." },
      { property: "og:title", content: "The Gifting Lab — Corporate Gifts That People Actually Want" },
      { property: "og:description", content: "Onboarding kits to festive gifts, fully customized and delivered across MY & SG." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const useCases = [
  { title: "Onboarding Kits", img: ucOnboarding, desc: "Welcome new hires with a kit they'll actually open." },
  { title: "Event Giveaways", img: ucEvent, desc: "Conference and roadshow merch with brand recall." },
  { title: "Festive Gifts", img: ucFestive, desc: "CNY, Raya, Christmas hampers your clients remember." },
  { title: "VIP Executive Gifts", img: ucVip, desc: "Considered, premium gifts for partners and C-suite." },
  { title: "Eco-Friendly Gifts", img: ucEco, desc: "Sustainable materials, ethical sourcing, real impact." },
];

const featured = [
  { name: "Welcome Day One Kit", img: ucOnboarding, desc: "Notebook, bottle, lanyard, branded box.", price: "RM 145" },
  { name: "Heritage Tote Set", img: pTote, desc: "Canvas tote, ceramic mug, brass pen.", price: "RM 98" },
  { name: "Executive Navy Edition", img: pNotebook, desc: "Leather notebook, brass pen, gift box.", price: "RM 220" },
  { name: "Tech Essentials Pouch", img: pTech, desc: "Wireless charger, power bank, cable kit.", price: "RM 175" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 animate-fade-up">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground font-medium">
              <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-eco" />
                MY · SG · TH fulfillment
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-border" />
                Custom branding
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-border" />
                Bulk orders
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Corporate gifts<br />
              <span className="italic text-muted-foreground">people actually</span><br />
              want.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              From onboarding kits to festive hampers — fully customized, beautifully packaged, and delivered across Malaysia & Singapore.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]">
                Get a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/gift-kits" className="inline-flex items-center gap-2 h-12 rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-secondary transition-colors">
                Browse Gift Kits
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative animate-fade-in">
            <div className="absolute -inset-6 bg-secondary/60 rounded-3xl -z-10" />
            <img
              src={heroImg}
              alt="Premium corporate gift kit flat lay with navy box, canvas tote, ceramic mug, leather notebook and brass pen"
              width={1920}
              height={1080}
              className="rounded-2xl shadow-2xl shadow-primary/10 object-cover aspect-[4/3] w-full"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col gap-1 rounded-2xl bg-background border border-border p-5 shadow-xl">
              <span className="text-xs text-muted-foreground">Avg. delivery</span>
              <span className="font-display text-2xl">10–14 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container-page py-10 grid grid-cols-3 gap-6 text-center">
          <Stat n="500+" label="Corporate clients" />
          <Stat n="10,000+" label="Gifts delivered" />
          <Stat n="MY · SG" label="Cross-border fulfillment" />
        </div>
      </section>

      {/* SHOP BY USE CASE */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader
          eyebrow="Shop by use case"
          title="Built for the moments that matter."
          desc="Every program is custom-designed around your goal — onboarding, retention, celebration."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((u) => (
            <UseCaseCard key={u.title} {...u} />
          ))}
        </div>
      </section>

      {/* FEATURED KITS */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container-page py-24 md:py-32">
          <div className="flex items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Featured kits"
              title="Ready-made, infinitely customizable."
              desc="Start from a curated kit, then customize colors, branding and contents."
              align="left"
              noCenter
            />
            <Link to="/gift-kits" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-page py-24 md:py-32">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps. Zero stress."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-8 relative">
          {[
            { n: "01", t: "Tell us your needs", d: "Share your budget, audience, deadline and any brand assets." },
            { n: "02", t: "We propose & design", d: "Get a curated proposal with mockups within 48 hours." },
            { n: "03", t: "We produce & deliver", d: "We handle production, QC, packaging and door-to-door delivery." },
          ].map((s) => (
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

      {/* WHY CHOOSE US */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-page py-24 md:py-32 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs tracking-widest uppercase text-gold">Why The Gifting Lab</span>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              The unfair advantage behind every kit we ship.
            </h2>
            <p className="text-primary-foreground/70 max-w-md">
              We're not a print shop with a catalog. We're product designers with a regional supply chain — purpose-built for corporate gifting at scale.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-primary-foreground/10 rounded-2xl overflow-hidden border border-primary-foreground/10">
            {[
              { i: Globe2, t: "Regional sourcing", d: "MY, SG, China, Vietnam supply chain." },
              { i: Factory, t: "Manufacturing expertise", d: "Direct factory relationships, no middlemen." },
              { i: Truck, t: "Fast turnaround", d: "Most kits ship within 10–14 days." },
              { i: PackageCheck, t: "Cross-border fulfillment", d: "Distribute to MY & SG offices in one project." },
              { i: Sparkles, t: "Custom packaging", d: "From sleeves to magnetic boxes — fully bespoke." },
              { i: Leaf, t: "Eco-conscious options", d: "Recycled, FSC, biodegradable lines available." },
            ].map((f) => (
              <div key={f.t} className="bg-primary p-7 space-y-3">
                <f.i className="h-5 w-5 text-gold" />
                <h3 className="font-display text-xl">{f.t}</h3>
                <p className="text-sm text-primary-foreground/65">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container-page py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Case studies"
            title="Programs we've shipped."
            align="left"
            noCenter
          />
          <Link to="/case-studies" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium hover:gap-2 transition-all">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { client: "FinTech Series-B", project: "Global onboarding kit · 1,200 units · 4 markets", img: ucOnboarding },
            { client: "Regional Bank", project: "VIP year-end gifting · 800 boxes", img: ucVip },
            { client: "Tech Conference", project: "Speaker & delegate kits · 3,500 units", img: ucEvent },
          ].map((c) => (
            <Link key={c.client} to="/case-studies" className="group block">
              <div className="overflow-hidden rounded-2xl bg-secondary aspect-[4/5]">
                <img src={c.img} alt={c.project} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-4 flex items-start justify-between">
                <div>
                  <h3 className="font-display text-xl">{c.client}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{c.project}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-secondary p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-x-0 -top-20 h-40 bg-gold/20 blur-3xl" />
          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05]">
              Need ideas for your next corporate gift?
            </h2>
            <p className="text-muted-foreground">
              Tell us your audience, budget and timeline. We'll come back with a proposal in 48 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform">
                Get Free Proposal <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/60312345678"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 h-12 rounded-full border border-border bg-background px-6 text-sm font-medium hover:bg-background/70"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
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
      <div className="font-display text-3xl md:text-4xl">{n}</div>
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

function UseCaseCard({ title, img, desc }: { title: string; img: string; desc: string }) {
  return (
    <Link to="/gift-kits" className="group block rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/30 transition-colors">
      <div className="overflow-hidden aspect-[4/3]">
        <img src={img} alt={title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{desc}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
      </div>
    </Link>
  );
}

function ProductCard({ name, img, desc, price }: { name: string; img: string; desc: string; price: string }) {
  return (
    <Link to="/gift-kits" className="group block">
      <div className="overflow-hidden rounded-2xl bg-background aspect-square border border-border">
        <img src={img} alt={name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="pt-4 space-y-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg">{name}</h3>
          <span className="text-sm text-muted-foreground">from {price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{desc}</p>
        <div className="pt-2 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Customize <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </Link>
  );
}
