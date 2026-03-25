import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "C++", level: 75 },
  { name: "Python", level: 80 },
  { name: "Java", level: 55 },
  { name: "Kali Linux", level: 35 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="space-y-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -72, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.75, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-body font-medium text-foreground">{skill.name}</span>
                <span className="font-body text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1.1, delay: 0.18 + i * 0.1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
