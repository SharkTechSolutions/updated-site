import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/constants/site";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

export function Services() {
  return (
    <Section
      eyebrow="What we do"
      title="Our software development services."
      subtitle="End-to-end services to transform your business ideas into powerful digital solutions."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = (Icons[s.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-7 hover-lift">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {s.tags && (
                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border/60 bg-background/40 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {s.price && (
                  <div className="relative mt-5 border-t border-border/60 pt-4 text-sm font-medium text-foreground">
                    <span className="text-gradient">{s.price}</span>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
