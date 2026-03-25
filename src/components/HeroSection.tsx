import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center pt-28">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-body font-medium text-primary tracking-widest uppercase mb-4">
            Hello, I'm
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-6">
            Alex <span className="gradient-text">Johnson</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md mb-8">
            A passionate web developer & computer science student crafting
            beautiful digital experiences.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-secondary text-secondary font-body font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={profileImg}
              alt="Alex Johnson profile photo"
              width={512}
              height={512}
              className="relative w-full h-full object-cover rounded-full border-4 border-primary/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
