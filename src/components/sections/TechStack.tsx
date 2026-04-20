import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { TECH } from "@/constants/site";

export function TechStack() {
  return (
    <Section
      eyebrow="Our toolkit"
      title="Modern technologies, production-grade."
      subtitle="We choose the right tool for the job — never the trendiest."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(TECH).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-primary">{group}</div>
              <ul className="mt-4 space-y-2">
                {items.map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
