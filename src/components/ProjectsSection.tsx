import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glow-card group bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
                />
              </div>
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
