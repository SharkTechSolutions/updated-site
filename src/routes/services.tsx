import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Services as ServicesGrid } from "@/components/sections/Services";
import { Industries } from "@/components/sections/Industries";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { TechStack } from "@/components/sections/TechStack";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const BENEFITS = [
  "Fixed-scope quotes with clear timelines",
  "Senior team — no junior hand-offs",
  "Lighthouse 95+ performance by default",
  "30 days of free post-launch support",
  "Design that matches your brand exactly",
  "Code you actually own and can maintain",
];

function ServicesPage() {
  return (
    <>
      <section className="relative bg-hero pt-40 pb-20">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
              Services
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              Everything you need to <span className="text-gradient">ship and scale.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              One senior team. End-to-end services. From the first wireframe to
              your hundred-thousandth user.
            </p>
          </Reveal>
        </div>
      </section>

      <ServicesGrid />

      <Section eyebrow="What's included" title="Premium by default.">
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b} delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Industries />
      <Process />
      <TechStack />
      <FinalCTA />
    </>
  );
}
