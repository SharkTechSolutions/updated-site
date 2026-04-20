import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/Section";
import { TESTIMONIALS } from "@/constants/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <Section eyebrow="Voices of clients" title="What clients say.">
      <div className="relative mx-auto max-w-3xl">
        <div className="glass overflow-hidden rounded-3xl p-10 md:p-14">
          <Quote className="h-10 w-10 text-primary/70" />
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-6 font-display text-2xl leading-snug md:text-3xl">
                "{t.quote}"
              </p>
              <div className="mt-8">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gradient-primary" : "w-4 bg-border"
                }`}
                aria-label={`Show testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-surface/60 hover:border-primary/40"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-surface/60 hover:border-primary/40"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
