import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";
import { TRUST_BADGES } from "@/constants/site";

const TRUST = TRUST_BADGES;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero pt-32 md:pt-40">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[140px]" aria-hidden />

      <div className="container relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted by 50+ Companies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              Transform your business with{" "}
              <span className="text-gradient">custom software</span>{" "}
              solutions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
            >
              We build scalable web applications, mobile apps and enterprise
              software that drive growth and innovation — from MVP to
              enterprise-grade solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-primary/40"
              >
                View Portfolio
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              {TRUST.map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {t}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-primary opacity-20 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={heroVisual}
                alt="Premium dashboard UI mockup"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="glass absolute -bottom-6 -left-6 hidden rounded-2xl px-5 py-4 shadow-card md:block"
            >
              <div className="text-2xl font-semibold text-gradient">99%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="glass absolute -right-4 top-10 hidden rounded-2xl px-5 py-4 shadow-card md:block"
            >
              <div className="text-2xl font-semibold text-gradient">50+</div>
              <div className="text-xs text-muted-foreground">Projects Shipped</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
