import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import heroImg from "@/assets/hero-gift-kit.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Gifting Lab" },
      { name: "description", content: "We design and deliver corporate gifts that people actually use. Based in KL, serving Malaysia and Singapore." },
      { property: "og:title", content: "About The Gifting Lab" },
      { property: "og:description", content: "Product designers with a regional supply chain — built for corporate gifting at scale." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About"
        title="We design corporate gifts people actually use."
        desc="The Gifting Lab is a Malaysia-based corporate gifting studio building branded kits for some of the region's most loved companies."
      />
      <section className="container-page py-24 grid lg:grid-cols-2 gap-16">
        <img src={heroImg} alt="Studio flat lay" loading="lazy" width={1920} height={1080} className="rounded-2xl aspect-[4/5] object-cover w-full" />
        <div className="space-y-6 text-lg text-muted-foreground self-center">
          <p className="text-foreground font-display text-2xl">
            Most "corporate gifts" end up in a drawer. Ours don't.
          </p>
          <p>
            We started The Gifting Lab in 2019 with one belief: a gift is a brand experience. If your team's first impression is a polybag of stress balls, that's the brand they remember.
          </p>
          <p>
            Today we run a regional supply chain across Malaysia, Singapore, China and Vietnam — sourcing, designing, manufacturing and delivering thoughtful kits at scale. From 50 onboarding boxes to 5,000 conference giveaways.
          </p>
          <p>
            Every kit we ship answers one question: would the recipient actually keep this?
          </p>
        </div>
      </section>
      <section className="container-page pb-24 grid md:grid-cols-3 gap-8">
        {[
          { n: "2019", t: "Founded in Kuala Lumpur" },
          { n: "12", t: "In-house designers & PMs" },
          { n: "MY · SG · TH", t: "Regional fulfillment hubs" },
        ].map((s) => (
          <div key={s.n} className="border-t border-foreground pt-6">
            <div className="font-display text-5xl">{s.n}</div>
            <div className="text-muted-foreground mt-2">{s.t}</div>
          </div>
        ))}
      </section>
      <CTASection />
    </SiteLayout>
  );
}

export function CTASection() {
  return (
    <section className="container-page pb-24">
      <div className="rounded-3xl bg-primary text-primary-foreground p-12 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Let's build your next kit.</h2>
          <p className="text-primary-foreground/70 mt-2">Free proposal in 48 hours.</p>
        </div>
        <Link to="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-background text-foreground px-6 text-sm font-medium hover:scale-[1.02] transition-transform">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
