import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Who I Am",
    text: "I am a dedicated BCA student with a strong interest in cybersecurity and ethical hacking. I am passionate about understanding system vulnerabilities and building secure, reliable digital environments.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Bachelor of Computer Applications (BCA) — Dr. Harisingh Gour Vishwavidyalaya. Currently pursuing my degree with a focus on cybersecurity, networking, and programming fundamentals.",
  },
  {
    icon: Target,
    title: "Career Goals",
    text: "Aspiring to build a career in cybersecurity as an ethical hacker or security analyst, with a focus on identifying vulnerabilities, strengthening system security, and protecting against cyber threats using modern security tools and techniques.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"
              >
                <card.icon className="text-primary" size={24} />
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
