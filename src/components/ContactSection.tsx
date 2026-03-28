import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center font-body text-muted-foreground mb-12 flex items-center justify-center gap-2"
        >
          <Coffee size={18} className="text-primary" />
          Let's drink some coffee and get to know each other better
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-6"
        >
          {(["name", "email"] as const).map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block font-body text-sm font-medium text-foreground mb-2 capitalize"
              >
                {field}
              </label>
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={form[field]}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none glow-input transition-shadow"
                placeholder={`Your ${field}`}
              />
              {errors[field] && (
                <p className="mt-1 text-sm text-destructive font-body">{errors[field]}</p>
              )}
            </div>
          ))}


          <div>
            <label
              htmlFor="message"
              className="block font-body text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border font-body text-foreground placeholder:text-muted-foreground focus:outline-none glow-input transition-shadow resize-none"
              placeholder="Your message"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-destructive font-body">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="glow-btn inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
          >
            Send Message <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
