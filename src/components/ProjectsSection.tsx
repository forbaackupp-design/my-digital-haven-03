import { motion } from "framer-motion";

const projects = [
  {
    title: "Password Strength Checker",
    description:
      "A tool that analyzes password strength based on length, complexity, and common vulnerabilities. Helps users create secure passwords.",
    tags: ["Python", "Security"],
  },
  {
    title: "Port Scanner",
    description:
      "A network scanning tool that detects open ports on a target system, helping identify potential security risks.",
    tags: ["Python", "Networking"],
  },
  {
    title: "Basic Vulnerability Scanner",
    description:
      "A simple tool that scans websites for common vulnerabilities like open ports or weak configurations.",
    tags: ["Python", "Cybersecurity"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 104, scale: 0.92, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.9, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glow-card group bg-background rounded-2xl p-8 border border-border/60 shadow-sm"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {project.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
