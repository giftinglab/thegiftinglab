import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "./about";
import pDrink from "@/assets/product-drinkware.jpg";
import pTote from "@/assets/product-tote.jpg";
import pTech from "@/assets/product-tech.jpg";
import pNotebook from "@/assets/product-notebook.jpg";
import ucFestive from "@/assets/usecase-festive.jpg";
import ucEco from "@/assets/usecase-eco.jpg";

export const Route = createFileRoute("/catalog")({
  head: () => ({
    meta: [
      { title: "Product Catalog — The Gifting Lab" },
      { name: "description", content: "Browse drinkware, tote bags, tech accessories, notebooks, packaging and eco gifts. Customizable for corporate orders." },
      { property: "og:title", content: "Product Catalog — The Gifting Lab" },
      { property: "og:image", content: pDrink },
    ],
  }),
  component: CatalogPage,
});

const categories = [
  { name: "Drinkware", img: pDrink, count: "32 products", desc: "Tumblers, mugs, bottles." },
  { name: "Tote Bags", img: pTote, count: "18 products", desc: "Canvas, cotton, recycled." },
  { name: "Tech Accessories", img: pTech, count: "24 products", desc: "Chargers, cables, pouches." },
  { name: "Notebooks", img: pNotebook, count: "21 products", desc: "Hardcover, leather, recycled." },
  { name: "Packaging", img: ucFestive, count: "14 options", desc: "Boxes, sleeves, ribbons." },
  { name: "Eco Gifts", img: ucEco, count: "27 products", desc: "Bamboo, cork, recycled materials." },
];

function CatalogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Catalog"
        title="Six categories. Endless combinations."
        desc="Pick individual items or mix into a custom kit. Every product can be branded, color-matched and packaged your way."
      />
      <section className="container-page py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c) => (
          <Link key={c.name} to="/contact" className="group relative block overflow-hidden rounded-2xl aspect-[4/5] border border-border">
            <img src={c.img} alt={c.name} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{c.count}</div>
              <div className="flex items-end justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <p className="text-sm text-primary-foreground/80 mt-1">{c.desc}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        ))}
      </section>
      <CTASection />
    </SiteLayout>
  );
}
