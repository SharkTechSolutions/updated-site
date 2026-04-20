import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PROJECTS } from "@/constants/site";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const items = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <section className="relative bg-hero pt-40 pb-12">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
              Portfolio
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              A selection of <span className="text-gradient">recent work.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              From bootstrapped startups to enterprise platforms — every project
              ships with the same standard of craft.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-sm transition-all ${
                active === c
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border border-border/60 bg-surface/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface/40 hover-lift">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-primary">{p.category}</div>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-foreground" />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
