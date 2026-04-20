import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(120),
  phone: z.string().trim().min(6, "Please enter your phone").max(20),
  company: z.string().trim().max(80).optional().or(z.literal("")),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

type FormData = z.infer<typeof schema>;

const SERVICES_LIST = [
  "Website Development",
  "E-commerce Development",
  "Custom Web Application",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Optimization",
  "AI Automation",
  "Maintenance & Support",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Inquiry:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls =
    "w-full rounded-xl border border-border/80 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Full name</label>
          <input className={inputCls} placeholder="Jane Doe" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Email</label>
          <input className={inputCls} placeholder="you@company.com" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Phone</label>
          <input className={inputCls} placeholder="+91 90000 00000" {...register("phone")} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Company</label>
          <input className={inputCls} placeholder="Acme Inc." {...register("company")} />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Service required</label>
        <select className={inputCls} defaultValue="" {...register("service")}>
          <option value="" disabled>Select a service</option>
          {SERVICES_LIST.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service.message}</p>}
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
        <textarea rows={5} className={inputCls} placeholder="Tell us about your project goals, timeline and budget…" {...register("message")} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {isSubmitting ? "Sending…" : "Send Inquiry"}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground"
        >
          <CheckCircle2 className="h-4 w-4 text-primary" />
          Thanks! We'll get back to you within one business day.
        </motion.div>
      )}
    </form>
  );
}
