import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "./about";
import ucOnboarding from "@/assets/usecase-onboarding.jpg";
import ucEvent from "@/assets/usecase-event.jpg";
import ucFestive from "@/assets/usecase-festive.jpg";
import ucVip from "@/assets/usecase-vip.jpg";
import ucEco from "@/assets/usecase-eco.jpg";
import pTote from "@/assets/product-tote.jpg";
import pTech from "@/assets/product-tech.jpg";
import pNotebook from "@/assets/product-notebook.jpg";

export const Route = createFileRoute("/gift-kits")({
  head: () => ({
    meta: [
      { title: "Corporate Gift Kits — The Gifting Lab" },
      { name: "description", content: "Curated corporate gift kits for onboarding, events, festive and VIP gifting. Fully customizable, MY & SG delivery." },
      { property: "og:title", content: "Corporate Gift Kits — The Gifting Lab" },
      { property: "og:image", content: ucOnboarding },
    ],
  }),
  component: GiftKitsPage,
});

const kits = [
  { name: "Welcome Day One Kit", img: ucOnboarding, tag: "Onboarding", price: "RM 145", desc: "Notebook, bottle, lanyard, branded magnetic box." },
  { name: "Heritage Tote Set", img: pTote, tag: "Onboarding", price: "RM 98", desc: "Canvas tote, ceramic mug, brass pen, gift sleeve." },
  { name: "Executive Navy Edition", img: pNotebook, tag: "VIP", price: "RM 220", desc: "Leather notebook, brass pen, presentation gift box." },
  { name: "Tech Essentials Pouch", img: pTech, tag: "Event", price: "RM 175", desc: "Wireless charger, power bank, cable kit." },
  { name: "Festive Navy Hamper", img: ucFestive, tag: "Festive", price: "RM 260", desc: "Premium chocolates, candle, branded box, ribbon." },
  { name: "Conference Essentials", img: ucEvent, tag: "Event", price: "RM 65", desc: "Branded cap, tumbler, lanyard, tote, name badge." },
  { name: "VIP Leather Set", img: ucVip, tag: "VIP", price: "RM 480", desc: "Leather portfolio, premium pen, whisky glass." },
  { name: "Sustain Kit", img: ucEco, tag: "Eco", price: "RM 120", desc: "Bamboo tumbler, cork notebook, organic tote." },
];

function GiftKitsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Gift kits"
        title="Curated kits, infinitely customizable."
        desc="Start with a ready kit and customize colors, branding, contents and packaging. MOQ from 25 units."
      />
      <section className="container-page py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {kits.map((k) => (
            <Link key={k.name} to="/contact" className="group block">
              <div className="overflow-hidden rounded-2xl bg-secondary aspect-square border border-border">
                <img src={k.img} alt={k.name} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="pt-4 space-y-1">
                <div className="text-xs uppercase tracking-widest text-gold">{k.tag}</div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl">{k.name}</h3>
                  <span className="text-sm text-muted-foreground">from {k.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{k.desc}</p>
                <div className="pt-2 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Customize <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
