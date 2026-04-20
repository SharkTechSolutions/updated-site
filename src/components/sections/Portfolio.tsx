import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PROJECTS } from "@/constants/site";

export function Portfolio({ limit }: { limit?: number }) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  return (
    <Section
      eyebrow="Selected work"
      title="Projects we're proud of."
      subtitle="A glimpse of recent work across industries and platforms."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
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
                <div className="text-xs uppercase tracking-[0.18em] text-primary">
                  {p.category}
                </div>
                <div className="mt-2 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:rotate-45 group-hover:text-foreground" />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {limit && (
        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-6 py-3 text-sm font-medium hover:border-primary/40"
          >
            View All Work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  );
}
