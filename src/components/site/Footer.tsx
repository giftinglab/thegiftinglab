import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container-page py-16 grid gap-12 md:grid-cols-5">
        <div className="md:col-span-1 space-y-4">
          <Logo />
          <p className="text-sm text-muted-foreground max-w-xs">
            Corporate gifts that people actually use. Designed in Malaysia, delivered across MY, SG, TH & AU.
          </p>
        </div>
        <FooterCol
          title="Shop"
          links={[
            { to: "/gift-kits", label: "Gift Kits" },
            { to: "/catalog", label: "Product Catalog" },
            { to: "/customization", label: "Customization" },
          ]}
        />
        <FooterCol
          title="Markets"
          links={[
            { to: "/corporate-gifts-singapore", label: "Singapore" },
            { to: "/corporate-gifts-malaysia", label: "Malaysia" },
            { to: "/corporate-gifts-thailand", label: "Thailand" },
            { to: "/corporate-gifts-australia", label: "Australia" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { to: "/about", label: "About Us" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <div>
          <h4 className="font-display text-sm font-medium mb-4">Get in touch</h4>
          <div className="space-y-4">
            <p className="text-sm font-medium">Kuala Lumpur · Singapore · Bangkok</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+60 10 873 9642</li>
              <li>aurumaxisglobal@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} The Gifting Lab. All rights reserved.</p>
          <p>MY · SG · TH · AU · Custom branding · Bulk orders</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="font-display text-sm font-medium mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
