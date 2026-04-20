import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PROCESS } from "@/constants/site";

export function Process() {
  return (
    <Section
      eyebrow="How we work"
      title="A proven process, built for clarity."
      subtitle="Six focused phases — from first conversation to long-term partnership."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((p, i) => (
          <Reveal key={p.step} delay={i * 0.05}>
            <div className="group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/40 p-7 hover-lift">
              <div className="font-display text-5xl font-semibold text-gradient opacity-90">
                {p.step}
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
