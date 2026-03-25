import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0">
        <img
          src={profileImg}
          alt="Kishan Pandey portrait"
          className="h-full w-full object-contain object-top"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-background/55" />
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-padding relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-5xl flex-col items-center justify-center text-center"
      >
        <p className="mb-4 text-sm font-body font-medium uppercase tracking-widest text-primary">
          Hello, I'm
        </p>
        <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          Kishan <span className="gradient-text">Pandey</span>
        </h1>
        <p className="mb-8 max-w-2xl font-body text-lg text-muted-foreground">
          A passionate cybersecurity enthusiast &amp; computer science student
          specializing in ethical hacking, network security, and building secure
          digital environments.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="glow-btn inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 font-body font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="glow-btn inline-flex h-12 items-center justify-center rounded-lg border-2 border-secondary px-8 font-body font-medium text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
