import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Compass, Target, Heart, CheckCircle2 } from "lucide-react";
import { COMPANY_HIGHLIGHTS } from "@/constants/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const PILLARS = [
  { icon: Compass, title: "Our Mission", desc: "Empower ambitious businesses with digital products that genuinely move the needle — measured in growth, not deliverables." },
  { icon: Target, title: "Our Vision", desc: "To be the most trusted partner for product-minded teams who refuse to ship anything that isn't world-class." },
  { icon: Heart, title: "Our Values", desc: "Craft, clarity, ownership and longevity. We treat every project like it carries our own name." },
];

function AboutPage() {
  return (
    <>
      <section className="relative bg-hero pt-40 pb-20">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
              About us
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              A studio built on <span className="text-gradient">craft and trust.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              SharkTech Solutions is a senior product team helping founders,
              startups and enterprises ship premium digital experiences that
              perform — beautifully, reliably, at scale.
            </p>
          </Reveal>
        </div>
      </section>

      <Stats />

      <Section eyebrow="Our story" title="Built by builders, for builders.">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We started SharkTech Solutions because too many great ideas were
              being launched on mediocre technology. Founders deserve better:
              honest partners, modern engineering and design that earns trust
              the moment a visitor lands.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Today, we partner with teams across India and globally — shipping
              websites, products and mobile apps that hold up under real users,
              real traffic and real growth. We sweat the details so your
              customers don't have to notice.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-7 hover-lift">
                <p.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {COMPANY_HIGHLIGHTS.map((h, i) => (
            <Reveal key={h} delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{h}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyUs />
      <Process />
      <FinalCTA />
    </>
  );
}
