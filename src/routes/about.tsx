import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/sections/Stats";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Compass, Target, Heart, CheckCircle2, Users } from "lucide-react";
import { COMPANY_HIGHLIGHTS } from "@/constants/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const PILLARS = [
  {
    icon: Compass,
    title: "Our Mission",
    desc: "Empower ambitious businesses with digital products that genuinely move the needle — measured in growth, not deliverables.",
  },
  {
    icon: Target,
    title: "Our Vision",
    desc: "To be the most trusted partner for product-minded teams who refuse to ship anything that isn't world-class.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Craft, clarity, ownership and longevity. We treat every project like it carries our own name.",
  },
];

const FOUNDERS = [
  {
    name: "Anuj Singh",
    role: "Co-Founder & CEO",
    bio: "Leads the company's vision, business strategy, and client relationships, ensuring every project delivers measurable value and long-term success.",
  },
  {
    name: "Kulkamal Singh",
    role: "Co-Founder & CTO",
    bio: "Drives the technical direction of SharkTech Solutions, architecting scalable, secure, and high-performance software solutions using modern technologies.",
  },
  {
    name: "Ravi Singh",
    role: "Co-Founder & Software Engineer",
    website: "https://ravisingh.vercel.app/",
    bio: "Specializes in full-stack software development, building reliable web applications, modern user experiences, and scalable backend systems with a focus on clean engineering practices.",
  },
  {
    name: "Harsh Sharma",
    role: "Co-Founder & Product Manager",
    bio: "Oversees product strategy, planning, and execution, ensuring every solution aligns with user needs, business objectives, and market expectations.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative bg-hero pt-40 pb-20">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="container relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
              About us
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-7xl">
              A studio built on <span className="text-gradient">craft and trust.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              SharkTech Solutions is a senior product team helping founders, startups and
              enterprises ship premium digital experiences that perform — beautifully, reliably, at
              scale.
            </p>
          </Reveal>
        </div>
      </section>

      <Stats />

      <Section eyebrow="Our story" title="Built by builders, for builders.">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              We started SharkTech Solutions because too many great ideas were being launched on
              mediocre technology. Founders deserve better: honest partners, modern engineering and
              design that earns trust the moment a visitor lands.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Today, we partner with teams across India and globally — shipping websites, products
              and mobile apps that hold up under real users, real traffic and real growth. We sweat
              the details so your customers don't have to notice.
            </p>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/40 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                Meet Our Founders
              </div>

              <h2 className="mt-5 font-display text-4xl font-semibold md:text-5xl">
                The people behind SharkTech Solutions.
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
                Behind SharkTech Solutions is a team of passionate entrepreneurs, engineers, and
                product leaders dedicated to building innovative digital solutions. Together, we
                combine expertise in business, technology, engineering, and product development to
                help businesses transform ideas into scalable, high-impact products.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {FOUNDERS.map((founder, index) => (
              <Reveal key={founder.name} delay={index * 0.08}>
                <div className="glass h-full rounded-2xl p-7 hover-lift">
                  {founder.website ? (
                    <a
                      href={founder.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-2xl font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {founder.name}
                    </a>
                  ) : (
                    <h3 className="font-display text-2xl font-semibold">{founder.name}</h3>
                  )}

                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-primary">
                    {founder.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{founder.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-7 hover-lift">
                <p.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {COMPANY_HIGHLIGHTS.map((h, i) => (
            <Reveal key={h} delay={i * 0.04}>
              <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-surface/40 p-5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-foreground/90">{h}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyUs />
      <Process />
      <FinalCTA />
    </>
  );
}
