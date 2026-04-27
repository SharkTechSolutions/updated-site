import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const SITE = {
  name: "SharkTech Solutions",
  tagline: "Trusted by 50+ Companies",
  url: "https://sharktechsolutions.in",
  email: "contact@sharktechsolutions.in",
  phone: "+91 89319 18656",
  whatsapp: "918931918656",
  address: "Noida, Uttar Pradesh 201301, India",
  hours: "Monday – Friday · 9:00 AM – 6:00 PM",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Success Rate" },
];

export const SERVICES = [
  {
    icon: "Globe",
    title: "Web Development",
    desc: "Full-stack web applications using React, Node.js, Python and modern frameworks for scalable business solutions.",
    tags: ["React", "Node.js", "Python", "Next.js"],
    price: "From ₹25,000"
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    desc: "Native iOS / Android apps and cross-platform solutions using React Native and Flutter.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
    price: "From ₹60,000"
  },
  {
    icon: "Cloud",
    title: "Cloud Solutions",
    desc: "AWS, Azure and GCP deployment with DevOps, CI/CD pipelines and infrastructure automation.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    price: "From ₹20,000"
  },
  {
    icon: "Server",
    title: "Backend & APIs",
    desc: "Robust backend systems, RESTful APIs, GraphQL and database design for scalable applications.",
    tags: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    price: "From ₹30,000"
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    desc: "User-centered design with modern interfaces, prototyping and complete design systems.",
    tags: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    price: "From ₹15,000"
  },
  {
    icon: "Layers",
    title: "Custom Software",
    desc: "Tailored enterprise solutions, CRM systems and business process automation.",
    tags: ["Custom Solutions", "Integration", "Automation", "CRM"],
    price: "Custom Quote"
  },
  {
    icon: "Search",
    title: "SEO Optimization",
    desc: "Technical and on-page SEO that drives organic traffic and measurable rankings.",
    tags: ["Technical SEO", "On-page", "Analytics", "Audits"],
    price: "From ₹12,000"
  },
  {
    icon: "LifeBuoy",
    title: "Maintenance & Support",
    desc: "24/7 monitoring, rapid iteration cycles and reliable ongoing care for your systems.",
    tags: ["24/7 Support", "Monitoring", "Updates", "SLA"],
    price: "From ₹5,000/mo"
  }
];

export const INDUSTRIES = [
  {
    icon: "Building2",
    title: "Enterprise Software",
    desc: "Scalable enterprise applications with advanced analytics, reporting and business intelligence.",
    points: ["Custom Dashboards", "Real-time Analytics", "Multi-user Access", "API Integration"],
  },
  {
    icon: "Cloud",
    title: "SaaS Platforms",
    desc: "Multi-tenant SaaS applications with subscription management and automated billing.",
    points: ["Multi-tenancy", "Subscription Billing", "User Management", "Scalable Architecture"],
  },
  {
    icon: "ShoppingBag",
    title: "E-commerce Solutions",
    desc: "Complete e-commerce platforms with payment integration and inventory management.",
    points: ["Payment Gateway", "Inventory System", "Order Management", "Mobile Responsive"],
  },
];

export const WHY = [
  { icon: "Sparkles", title: "Premium Design Quality", desc: "Every pixel crafted to feel intentional, modern and on-brand." },
  { icon: "Zap", title: "Agile Development", desc: "Modern stack, modular code, weekly demos and Lighthouse 95+ by default." },
  { icon: "ShieldCheck", title: "Enterprise Security", desc: "ISO 27001 standards, secure-by-design architecture and 99.9% uptime." },
  { icon: "Headphones", title: "24/7 Support", desc: "Round-the-clock technical support and rapid response on every project." },
];

export const PROJECTS = [
  { image: project1, name: "Northwind Corporate", category: "Corporate Website", desc: "Premium brand site for a B2B consultancy.", tech: ["Next.js", "Tailwind", "Sanity"] },
  { image: project2, name: "Reclaft Store", category: "E-commerce Store", desc: "Conversion-focused fashion storefront with custom checkout.", tech: ["Shopify", "React", "Liquid"] },
  { image: project3, name: "Polychart SaaS", category: "SaaS Dashboard", desc: "Real-time analytics platform for product teams.", tech: ["React", "Node", "PostgreSQL"] },
  // { image: project4, name: "Startuf Launch", category: "Startup Website", desc: "High-impact launch site with product waitlist.", tech: ["Vite", "Framer", "TypeScript"] },
  { image: project5, name: "Pulse Fitness App", category: "Mobile UI", desc: "Cross-platform fitness companion with live tracking.", tech: ["React Native", "Expo", "Firebase"] },
  { image: project6, name: "Stoke Eatery", category: "Local Business Website", desc: "Restaurant site with online reservations and menu.", tech: ["Astro", "Tailwind", "Stripe"] },
];

export const TECH = {
  Frontend: ["React", "Vue.js", "Angular", "Next.js"],
  Backend: ["Node.js", "Python", "Java", "PHP"],
  Mobile: ["React Native", "Flutter", "iOS", "Android"],
  Cloud: ["AWS", "Azure", "GCP", "Docker"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  DevOps: ["CI/CD", "Kubernetes", "Jenkins", "Terraform"],
};

export const PROCESS = [
  { step: "01", title: "Discovery", desc: "We dig into your goals, users and competitors." },
  { step: "02", title: "Strategy", desc: "Information architecture, scope and a clear roadmap." },
  { step: "03", title: "Design", desc: "High-fidelity UI/UX with full brand alignment." },
  { step: "04", title: "Development", desc: "Clean, scalable code using agile methodology." },
  { step: "05", title: "Launch", desc: "QA, performance tuning and a smooth go-live." },
  { step: "06", title: "Support", desc: "24/7 monitoring, iteration and ongoing growth." },
];

export const TESTIMONIALS = [
  {
    quote:
      "SharkTech Solutions delivered a premium website for our business with modern design and excellent performance. Their professionalism and support were outstanding.",
    name: "Shubham Gupta",
    role: "Founder, New Gen Solutions",
  },
  {
    quote:
      "We wanted a beautiful and conversion-focused online store for our saree brand, and SharkTech Solutions exceeded expectations with a clean and elegant result.",
    name: "Owner",
    role: "Zaiva Sarees",
  },
  {
    quote:
      "Their team understood our business needs perfectly and created a professional digital presence that helped build trust with our customers.",
    name: "Owner",
    role: "Vishnoi Handlooms",
  },
];

export const FAQS = [
  { q: "How long does a typical project take?", a: "Most marketing sites ship in 2–4 weeks. Custom apps and SaaS platforms typically run 6–16 weeks depending on scope." },
  { q: "What technologies do you specialise in?", a: "React, Vue, Angular and Next.js on the front; Node.js, Python, Java and PHP on the back; PostgreSQL, MongoDB and Redis for data; AWS, Azure and GCP for cloud." },
  { q: "Do you offer 24/7 support?", a: "Yes — every engagement includes 24/7 technical support and maintenance options with a 99.9% uptime guarantee." },
  { q: "Do you work with startups and MVPs?", a: "Absolutely. We build everything from MVPs to enterprise-grade systems with flexible engagement models." },
  { q: "Is my data and code secure?", a: "We follow ISO 27001 security standards, secure-by-design architecture, and you fully own all delivered code and assets." },
];

export const TRUST_BADGES = ["Free Consultation", "24/7 Support", "Money Back Guarantee"];
export const COMPANY_HIGHLIGHTS = [
  "5+ Years of Software Development Excellence",
  "20+ Successful Projects Delivered",
  "Agile Development Methodology",
  "24/7 Technical Support & Maintenance",
  "ISO 27001 Security Standards",
  "99.9% Uptime Guarantee",
];
