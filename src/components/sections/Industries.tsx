import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { INDUSTRIES } from "@/constants/site";
import { Check } from "lucide-react";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

export function Industries() {
  return (
    <Section
      eyebrow="Industry solutions"
      title="Built for the way your industry works."
      subtitle="Specialised software solutions tailored for different industries and business needs."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {INDUSTRIES.map((ind, i) => {
          const Icon = (Icons[ind.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
          return (
            <Reveal key={ind.title} delay={i * 0.06}>
              <div className="glass h-full rounded-3xl p-8 hover-lift">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {ind.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-foreground/90">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
