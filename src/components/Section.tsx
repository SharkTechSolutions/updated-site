import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container mx-auto max-w-7xl px-6">
        {(eyebrow || title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
