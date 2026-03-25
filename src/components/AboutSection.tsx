import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glow-card bg-background rounded-2xl p-8 border border-border/60 shadow-sm cursor-default"
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
