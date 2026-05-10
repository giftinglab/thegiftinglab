import { createFileRoute } from "@tanstack/react-router";
import { Palette, Box, Stamp, Layers, Truck, ClipboardList } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "./about";
import heroImg from "@/assets/hero-gift-kit.jpg";

export const Route = createFileRoute("/customization")({
  head: () => ({
    meta: [
      { title: "Customization Services — The Gifting Lab" },
      { name: "description", content: "Custom branding, packaging, kitting and fulfillment for corporate gifts. From logo placement to bespoke product design." },
      { property: "og:title", content: "Customization Services — The Gifting Lab" },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: CustomizationPage,
});

const services = [
  { i: Stamp, t: "Branding & decoration", d: "Pad print, screen print, embroidery, laser engraving, deboss, full-color UV." },
  { i: Box, t: "Custom packaging", d: "Magnetic boxes, sleeves, drawer boxes, mailers — fully bespoke print." },
  { i: Palette, t: "Color matching", d: "Pantone-matched products, packaging and accessories for true brand fidelity." },
  { i: Layers, t: "Bespoke product design", d: "From sketch to sample. Original product designs manufactured at MOQ from 300." },
  { i: ClipboardList, t: "Kitting & assembly", d: "We assemble multi-item kits in-house with QC at every stage." },
  { i: Truck, t: "Fulfillment & distribution", d: "Bulk delivery or pick-and-pack to individual addresses across MY & SG." },
];

function CustomizationPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Customization"
        title="Custom from the surface to the supply chain."
        desc="We don't just print logos. We design products, packaging and programs end-to-end."
      />
      <section className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {services.map((s) => (
          <div key={s.t} className="bg-background p-8 space-y-3">
            <s.i className="h-5 w-5 text-gold" />
            <h3 className="font-display text-xl">{s.t}</h3>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
      <section className="container-page py-24 grid lg:grid-cols-2 gap-12 items-center">
        <img src={heroImg} alt="Custom kit" loading="lazy" width={1920} height={1080} className="rounded-2xl aspect-[4/3] object-cover w-full" />
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold">Our process</span>
          <h2 className="font-display text-4xl">From brief to box, in five steps.</h2>
          <ol className="space-y-4">
            {[
              ["Discovery call", "We understand your audience, brand and timeline."],
              ["Proposal & moodboard", "Curated kit options with mockups, in 48 hours."],
              ["Sampling", "Physical samples for sign-off before production."],
              ["Production & QC", "In-house assembly and quality control."],
              ["Delivery", "Bulk drop or address-by-address fulfillment."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-4">
                <span className="font-display text-2xl text-gold w-8 flex-shrink-0">0{i + 1}</span>
                <div>
                  <div className="font-medium">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection />
    </SiteLayout>
  );
}
