import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/constants/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative bg-hero pt-40 pb-12">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
              Contact
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Let's build <span className="text-gradient">something great.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Tell us about your project, your timeline and your goals. We
              reply to every inquiry within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6 hover-lift">
              <Mail className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                <a href={`mailto:${SITE.email}`} className="mt-0.5 block font-medium hover:text-primary">{SITE.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6 hover-lift">
              <Phone className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
                <a href={`tel:${SITE.phone}`} className="mt-0.5 block font-medium hover:text-primary">{SITE.phone}</a>
              </div>
            </div>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-2xl border border-primary/30 bg-primary/5 p-6 hover-lift"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary">WhatsApp</div>
                <div className="mt-0.5 font-medium">Chat with us instantly</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6">
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Location</div>
                <div className="mt-0.5 font-medium">{SITE.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6">
              <Clock className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Business Hours</div>
                <div className="mt-0.5 font-medium">{SITE.hours}</div>
              </div>
            </div>
          </div>
          <div className="glass rounded-3xl p-8">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
