import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { WhyUs } from "@/components/sections/WhyUs";
import { Portfolio } from "@/components/sections/Portfolio";
import { TechStack } from "@/components/sections/TechStack";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { SITE } from "@/constants/site";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <WhyUs />
      <Portfolio limit={4} />
      <TechStack />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />

      <Section eyebrow="Get in touch" title="Let's start a conversation.">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              Tell us about your project. We respond to every inquiry within one
              business day.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</div>
                  <a href={`mailto:${SITE.email}`} className="mt-0.5 block font-medium hover:text-primary">{SITE.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Phone</div>
                  <a href={`tel:${SITE.phone}`} className="mt-0.5 block font-medium hover:text-primary">{SITE.phone}</a>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Location</div>
                  <div className="mt-0.5 font-medium">{SITE.address}</div>
                </div>
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
