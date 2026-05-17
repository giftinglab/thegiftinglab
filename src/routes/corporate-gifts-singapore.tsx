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

const PAGE_URL = "https://thegiftinglab.lovable.app/corporate-gifts-singapore";
const PAGE_TITLE = "Corporate Gifts Singapore | Premium Custom Gifts — The Gifting Lab";
const PAGE_DESC = "Premium corporate gifts in Singapore — custom branded kits, onboarding gifts, event giveaways and VIP hampers. Trusted by HR, marketing & procurement teams across SG.";

export const Route = createFileRoute("/corporate-gifts-singapore")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { name: "keywords", content: "Corporate Gifts Singapore, Premium Corporate Gifts Singapore, Custom Corporate Gifts Singapore, Corporate Gift Supplier Singapore, Branded Corporate Gifts Singapore, Event Gifts Singapore" },
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
          "@type": "Service",
          serviceType: "Corporate Gifts Supplier",
          provider: {
            "@type": "Organization",
            name: "The Gifting Lab",
            url: "https://thegiftinglab.lovable.app",
          },
          areaServed: { "@type": "Country", name: "Singapore" },
          name: "Corporate Gifts Singapore",
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
  component: CorporateGiftsSingapore,
});

const audiences = [
  { icon: Users, t: "HR Teams", d: "Onboarding kits, work anniversaries and employee appreciation gifts that boost retention." },
  { icon: Rocket, t: "Marketing Teams", d: "Branded merchandise, event giveaways and influencer kits that drive brand recall." },
  { icon: Building2, t: "Procurement", d: "Volume pricing, consolidated invoicing and reliable lead times for recurring programs." },
  { icon: Award, t: "Startups, SMEs & MNCs", d: "From 50 units to 10,000+ — scalable gifting for every stage of growth in Singapore." },
];

const categories = [
  { title: "Premium Corporate Gifts", img: ucVip, desc: "Executive leather goods, gourmet hampers and high-end tech accessories for VIP clients and C-suite." },
  { title: "Custom Branded Merchandise", img: pTote, desc: "Bespoke totes, apparel, drinkware and stationery with your logo, colours and packaging." },
  { title: "Onboarding Kits", img: ucOnboarding, desc: "Welcome gifts for new hires — notebooks, bottles, swag and branded boxes delivered to home or office." },
  { title: "Event & Conference Gifts", img: ucEvent, desc: "Speaker gifts, delegate kits and roadshow giveaways for Singapore events and trade shows." },
  { title: "Festive Corporate Hampers", img: ucFestive, desc: "CNY, Hari Raya, Deepavali and Christmas hampers curated for clients, partners and employees." },
  { title: "Eco-Friendly Gifts", img: ucEco, desc: "Sustainable, recycled and FSC-certified gifts aligned with your ESG commitments." },
];

const products = [
  { name: "Executive Welcome Kit", img: ucOnboarding, desc: "Leather notebook, brass pen, ceramic mug, branded box." },
  { name: "Heritage Tote Set", img: pTote, desc: "Canvas tote, ceramic mug, brass pen — premium feel." },
  { name: "Tech Essentials Pouch", img: pTech, desc: "Wireless charger, power bank, cable kit in a custom pouch." },
  { name: "Drinkware Collection", img: pDrink, desc: "Insulated bottles and ceramic mugs, fully branded." },
];

const whyUs = [
  { i: Globe2, t: "Singapore-ready fulfillment", d: "Door-to-door delivery across Singapore — to offices, events or individual home addresses." },
  { i: Sparkles, t: "Fully customizable", d: "Your logo, brand colours, custom packaging, personalized notes — no off-the-shelf compromises." },
  { i: Truck, t: "Fast turnaround", d: "Most corporate gift programs ship within 15–30 days, including custom branding." },
  { i: PackageCheck, t: "End-to-end service", d: "Concept, design mockups, production, QC, kitting, packing and last-mile delivery handled in-house." },
  { i: Leaf, t: "Sustainable options", d: "Recycled, biodegradable and FSC-certified materials available across most categories." },
  { i: Award, t: "B2B-grade quality", d: "Trusted by banks, tech companies, agencies and MNCs for premium corporate gifting in Singapore." },
];

const process = [
  { n: "01", t: "Share your brief", d: "Tell us your audience, budget, deadline and brand guidelines via WhatsApp or our quote form." },
  { n: "02", t: "Curated proposal", d: "We send a tailored proposal with product mockups, pricing and lead times within 48 hours." },
  { n: "03", t: "Approve & produce", d: "Approve samples and artwork. We handle production, QC, kitting and custom packaging." },
  { n: "04", t: "Deliver across Singapore", d: "Bulk delivery to your office, event venue, or individual addresses island-wide." },
];

const faqs = [
  {
    q: "What is the minimum order quantity for corporate gifts in Singapore?",
    a: "Most of our customized corporate gift programs start from 50 units, though some ready-made kits can be ordered from smaller quantities. For fully bespoke gifts with custom packaging, MOQs typically begin at 100–200 units depending on the product.",
  },
  {
    q: "How long does it take to produce and deliver custom corporate gifts?",
    a: "Standard lead time is 15–30 days from artwork approval, including production, branding, QC, kitting and delivery within Singapore. Rush orders can sometimes be accommodated — share your deadline with us and we'll advise honestly.",
  },
  {
    q: "Can you deliver corporate gifts to individual home addresses in Singapore?",
    a: "Yes. We offer individual home delivery across Singapore, which is ideal for remote employees, onboarding kits for new hires working from home, and client gifting campaigns. You simply share the recipient list and we handle the rest.",
  },
  {
    q: "Do you offer eco-friendly and sustainable corporate gifts?",
    a: "Yes. We have a full range of eco-friendly corporate gifts including recycled materials, FSC-certified paper, biodegradable packaging and ethically-sourced products — perfect for companies with active ESG and sustainability commitments.",
  },
  {
    q: "Can you fully customize the gift box and packaging with our branding?",
    a: "Absolutely. Custom packaging is a core part of what we do — from printed sleeves and magnetic gift boxes to branded tissue paper, ribbons, thank-you cards and bespoke inserts. Your unboxing experience should feel as premium as the gifts inside.",
  },
  {
    q: "What types of companies do you work with in Singapore?",
    a: "We supply corporate gifts to HR, marketing and procurement teams across startups, SMEs and MNCs in Singapore — including banks, fintechs, SaaS companies, professional services firms, event agencies and regional headquarters of global brands.",
  },
  {
    q: "How do I request a quotation?",
    a: "Send us your brief via the quote form or WhatsApp at +60 10 873 9642. Share your audience, quantity, budget range and deadline, and we'll return a tailored proposal with product options and pricing within 48 hours.",
  },
];

function CorporateGiftsSingapore() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold bg-secondary/50 px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Singapore · B2B Corporate Gifting
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02]">
              Corporate Gifts<br />
              <span className="italic text-muted-foreground">Singapore</span><br />
              done properly.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Premium, fully customized corporate gifts for HR, marketing and procurement teams across Singapore. From onboarding kits to VIP hampers — designed, branded and delivered door-to-door.
            </p>
            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {["Custom branding & packaging", "Island-wide SG delivery", "Low MOQ from 50 units", "Quote within 48 hours"].map((f) => (
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
              alt="Premium corporate gift kit Singapore — branded navy box with tote, mug, notebook and brass pen"
              width={1920}
              height={1080}
              className="rounded-2xl shadow-2xl shadow-primary/10 object-cover aspect-[4/3] w-full"
            />
            <div className="absolute -bottom-6 -left-6 hidden md:flex flex-col gap-1 rounded-2xl bg-background border border-border p-5 shadow-xl">
              <span className="text-xs text-muted-foreground">SG delivery</span>
              <span className="font-display text-2xl">15–30 days</span>
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
          <Stat n="MY · SG · TH" label="Regional fulfillment" />
        </div>
      </section>

      {/* INTRO */}
      <section className="container-page py-20 md:py-28 max-w-4xl">
        <span className="text-xs tracking-widest uppercase text-gold">Singapore's premium corporate gifting partner</span>
        <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mt-4">
          Corporate gifts that strengthen relationships — not collect dust.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            In Singapore's competitive business landscape, a thoughtfully chosen corporate gift does far more than tick a box. It welcomes a new hire on day one, thanks a client after a successful project, celebrates a milestone with your team, or leaves a lasting impression at a flagship event. The wrong gift gets re-gifted; the right one becomes part of your brand story.
          </p>
          <p>
            The Gifting Lab is a Singapore-focused corporate gift supplier built around one belief: corporate gifts should feel premium, personal and on-brand — not generic. We work with HR, marketing and procurement teams at startups, SMEs and MNCs to design, produce and deliver fully customized corporate gifts across Singapore, with the quality control and consistency that B2B buyers expect.
          </p>
          <p>
            Whether you need 50 onboarding kits for a growing tech team, 800 VIP hampers for year-end client gifting, or 3,500 branded delegate kits for a regional conference at Marina Bay Sands, we handle the end-to-end process — sourcing, custom branding, packaging, kitting, QC and island-wide delivery.
          </p>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="bg-secondary/30 border-y border-border">
        <div className="container-page py-20 md:py-24">
          <SectionHeader
            eyebrow="Who we serve"
            title="Built for Singapore's most demanding teams."
            desc="From fast-growing startups to global headquarters — we work with the people responsible for getting corporate gifting right."
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
          title="A full range of corporate gifts for Singapore businesses."
          desc="Every category is fully customizable — branding, packaging, contents and price point tailored to your program."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => (
            <article key={c.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-foreground/30 transition-colors">
              <div className="overflow-hidden aspect-[4/3]">
                <img src={c.img} alt={`${c.title} Singapore`} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              title="Best-selling corporate gift kits in Singapore."
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
                  <img src={p.img} alt={`${p.name} — corporate gift Singapore`} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              The corporate gift supplier Singapore teams actually recommend.
            </h2>
            <p className="text-primary-foreground/70 max-w-md">
              We're not a print shop with a catalogue. We're product designers with a regional supply chain — built specifically for premium B2B corporate gifting at scale.
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
              { to: "/case-studies", t: "Case Studies", d: "Real programs we've delivered for SG & MY teams." },
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
          title="Corporate gifts in Singapore — answered."
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
              Ready to plan your next corporate gift program in Singapore?
            </h2>
            <p className="text-muted-foreground">
              Share your audience, quantity and timeline. We'll return a tailored proposal with product options and pricing within 48 hours.
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