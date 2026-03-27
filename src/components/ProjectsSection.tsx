import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Password Strength Checker",
    description:
      "A tool that analyzes password strength based on length, complexity, and common vulnerabilities. Helps users create secure passwords.",
    tags: ["Python", "Security"],
    link: "https://github.com/sh4dowedsoul/Password-Strength-Analyzer",
  },
  {
    title: "Port Scanner",
    description:
      "A network scanning tool that detects open ports on a target system, helping identify potential security risks.",
    tags: ["Python", "Networking"],
    link: "https://github.com/sh4dowedsoul/Port-Scanner",
  },
  {
    title: "Phishing URL Detector",
    description:
      "A Python-based cybersecurity tool designed to identify phishing URLs by analyzing features such as URL length, special characters, domain structure, and suspicious patterns. The system helps detect potentially malicious links and prevents users from falling victim to phishing attacks.",
    tags: ["Python", "Cybersecurity", "Networking"],
    inProgress: true,
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
          {projects.map((project, i) => {
            const CardWrapper = project.link ? "a" : "div";
            const linkProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 104, scale: 0.92, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.95, delay: i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.03, transition: { type: "spring", stiffness: 300, damping: 18 } }}
                className="glow-card group bg-background rounded-2xl p-8 border border-border/60 shadow-sm"
              >
                <CardWrapper {...linkProps} className={project.link ? "block" : ""}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    )}
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
                  {project.inProgress && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/40"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-body font-semibold text-accent">Currently in Progress</span>
                    </motion.div>
                  )}
                </CardWrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
