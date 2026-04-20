import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-surface/60 px-8 py-16 text-center md:px-16 md:py-24">
            <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
            <div className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-secondary/30 blur-[120px]" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-[1.1] md:text-6xl">
                Ready to build something{" "}
                <span className="text-gradient">powerful?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                Let SharkTech Solutions turn your ideas into premium digital
                products that customers love.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Start Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-7 py-3.5 text-sm font-medium hover:border-primary/40"
                >
                  <Calendar className="h-4 w-4" />
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
