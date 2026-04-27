import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Facebook, MessageCircle, Mail, Phone } from "lucide-react";
import { NAV, SITE } from "@/constants/site";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-surface/40">
      <div className="container mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
          <Link to="/" className="group flex items-center gap-3">
<span className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-lg backdrop-blur-sm">
  <img
    src={logo}
    alt="SharkTech Solutions Logo"
    className="h-full w-full object-cover rounded-full"
  />
</span>

  <span className="font-display text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-primary">
    {SITE.name}
  </span>
</Link>
            <p className="mt-5 max-w-md text-muted-foreground">
              Building premium digital solutions for ambitious businesses — websites,
              software, mobile apps and AI-powered experiences that scale.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
              <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-sm text-muted-foreground hover:text-foreground">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Connect
            </h4>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/sharktech-solutions/" },
                { Icon: Instagram, href: "https://www.instagram.com/sharktech.solutions/" },
                { Icon: Facebook, href: "https://facebook.com" },
                { Icon: MessageCircle, href: `https://wa.me/${SITE.whatsapp}` },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border/60 bg-surface text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {SITE.address}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 {SITE.name}. All rights reserved.</p>
          <p>Crafted with precision · Built to scale</p>
        </div>
      </div>
    </footer>
  );
}
