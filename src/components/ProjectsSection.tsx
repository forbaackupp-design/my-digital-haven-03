import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weather Dashboard",
    description:
      "A real-time weather app built with React and OpenWeatherMap API. Features include 5-day forecasts, geolocation, and dynamic backgrounds.",
    tags: ["React", "API", "CSS"],
  },
  {
    title: "Task Manager Pro",
    description:
      "A full-featured task management app with drag-and-drop, categories, due dates, and local storage persistence.",
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "E-Commerce Storefront",
    description:
      "A responsive online store with product filtering, cart functionality, and checkout flow. Built with React and Tailwind CSS.",
    tags: ["React", "Tailwind", "TypeScript"],
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
              className="group bg-background rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
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
