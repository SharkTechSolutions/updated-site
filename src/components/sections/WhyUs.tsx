import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { WHY } from "@/constants/site";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

export function WhyUs() {
  return (
    <Section
      eyebrow="Why us"
      title="Why teams choose SharkTech Solutions."
      subtitle="A senior team, modern stack and obsessive attention to craft."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {WHY.map((w, i) => {
          const Icon = (Icons[w.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Sparkles;
          return (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="glass h-full rounded-2xl p-7 hover-lift">
                <Icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
