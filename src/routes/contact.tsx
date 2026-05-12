import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote — The Gifting Lab" },
      { name: "description", content: "Request a free corporate gifting proposal. We respond within 48 hours. Based in KL, serving Malaysia & Singapore." },
      { property: "og:title", content: "Get a Quote — The Gifting Lab" },
      { property: "og:description", content: "Free corporate gifting proposal in 48 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        desc="Share a few details and we'll come back with a proposal in 48 hours."
      />
      <section className="container-page py-16 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-2xl border border-eco/40 bg-eco/10 p-12 text-center space-y-4 animate-fade-up">
              <div className="mx-auto h-12 w-12 rounded-full bg-eco/20 grid place-items-center">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="font-display text-3xl">Thank you.</h2>
              <p className="text-muted-foreground">
                We'll be in touch within one business day with next steps and a curated proposal.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Company" name="company" required />
                <Field label="Work email" name="email" type="email" required />
                <Field label="Phone / WhatsApp" name="phone" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Select label="Use case" name="usecase" options={["Onboarding kits", "Event giveaways", "Festive gifts", "VIP / Executive", "Eco gifts", "Other"]} />
                <Select label="Quantity" name="qty" options={["25 – 100", "100 – 500", "500 – 1,000", "1,000 – 5,000", "5,000+"]} />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Select label="Budget per unit (RM)" name="budget" options={["Under 50", "50 – 150", "150 – 300", "300 – 600", "600+"]} />
                <Select label="Market" name="market" options={["Malaysia", "Singapore", "MY + SG", "Other"]} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project details</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your audience, deadline and any ideas you already have."
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground hover:scale-[1.02] transition-transform"
              >
                Request Free Proposal
              </button>
            </form>
          )}
        </div>
        <aside className="lg:col-span-5 lg:pl-8 space-y-8">
          <div className="rounded-2xl bg-secondary p-8 space-y-5">
            <h3 className="font-display text-xl">Reach us directly</h3>
            <ContactItem i={MapPin} label="Locations" value="Kuala Lumpur · Singapore · Bangkok" />
            <ContactItem i={Mail} label="Email" value="aurumaxisglobal@gmail.com" />
            <ContactItem i={Phone} label="Phone" value="+60 10 873 9642" />
            <ContactItem i={MessageCircle} label="WhatsApp" value="+60 10 873 9642" />
          </div>
          <div className="rounded-2xl border border-border p-8 space-y-3">
            <span className="text-xs uppercase tracking-widest text-gold">Response time</span>
            <p className="font-display text-2xl leading-tight">Proposals delivered within 48 hours.</p>
            <p className="text-sm text-muted-foreground">For urgent timelines, ping us on WhatsApp and we'll prioritize.</p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
      <select
        id={name}
        name={name}
        className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function ContactItem({ i: Icon, label, value }: { i: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-4 w-4 mt-1 text-gold" />
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}
