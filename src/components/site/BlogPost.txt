import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, MessageCircle } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function BlogPost({
  eyebrow,
  title,
  dek,
  date,
  faqs,
  children,
}: {
  eyebrow: string;
  title: string;
  dek: string;
  date: string;
  faqs: { q: string; a: string }[];
  children: React.ReactNode;
}) {
  return (
    <SiteLayout>
      <article>
        {/* HERO */}
        <section className="border-b border-border bg-secondary/40">
          <div className="container-page py-16 md:py-24 max-w-3xl space-y-5">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-3.5 w-3.5" /> Back to guides
            </Link>
            <span className="block text-xs tracking-widest uppercase text-gold">{eyebrow}</span>
            <h1 className="font-display text-4xl md:text-5xl leading-[1.1]">{title}</h1>
            <p className="text-lg text-muted-foreground">{dek}</p>
            <p className="text-xs text-muted-foreground pt-2">
              The Gifting Lab Team &middot; 10,000+ corporate gifts delivered since 2019 &middot; {date}
            </p>
          </div>
        </section>

        {/* BODY */}
        <section className="container-page py-16 md:py-20 max-w-3xl space-y-10 text-lg text-muted-foreground leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:text-foreground [&_h2]:leading-tight [&_h2]:pt-4 [&_p]:text-base [&_p]:md:text-lg [&_strong]:text-foreground [&_strong]:font-medium [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse [&_th]:text-left [&_th]:font-display [&_th]:text-foreground [&_th]:border-b [&_th]:border-border [&_th]:pb-3 [&_th]:pr-4 [&_td]:border-b [&_td]:border-border [&_td]:py-3 [&_td]:pr-4 [&_td]:align-top [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2">
          {children}
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="bg-secondary/30 border-y border-border">
            <div className="container-page py-16 md:py-20 max-w-3xl">
              <span className="text-xs tracking-widest uppercase text-gold">FAQ</span>
              <h2 className="font-display text-3xl md:text-4xl mt-4">Frequently asked questions.</h2>
              <Accordion type="single" collapsible className="mt-10">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="font-display text-lg text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="container-page py-16 md:py-20 max-w-3xl">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Get a free proposal within 48 hours.</h2>
              <p className="text-primary-foreground/70 mt-2">Tell us your audience, quantity and timeline.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-background text-foreground px-6 text-sm font-medium hover:scale-[1.02] transition-transform">
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/60108739642"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
