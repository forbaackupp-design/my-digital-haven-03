import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Who I Am",
    text: "A creative and detail-oriented computer science student who loves turning ideas into interactive web applications.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "B.Sc. Computer Science — University of Technology (2022–2026). Dean's List recipient with a focus on full-stack development.",
  },
  {
    icon: Target,
    title: "Career Goals",
    text: "Aspiring to become a full-stack engineer at a product-driven company, building tools that make people's lives easier.",
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
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <card.icon className="text-primary" size={24} />
              </div>
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
