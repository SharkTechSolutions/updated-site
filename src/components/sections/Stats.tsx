import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { STATS } from "@/constants/site";

export function Stats() {
  return (
    <section className="relative -mt-12 pb-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-4 rounded-3xl border border-border/60 bg-surface/60 p-2 backdrop-blur-md md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="rounded-2xl px-6 py-8 text-center">
                <div className="font-display text-4xl font-semibold md:text-5xl">
                  <span className="text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
