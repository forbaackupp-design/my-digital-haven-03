import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";

const HeroSection = () => {
  const heroName = "Kishan Pandey";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    if (!isDeleting && typedName.length < heroName.length) {
      timeoutId = window.setTimeout(() => {
        setTypedName(heroName.slice(0, typedName.length + 1));
      }, 110);
    } else if (!isDeleting && typedName.length === heroName.length) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && typedName.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedName(heroName.slice(0, typedName.length - 1));
      }, 70);
    } else {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false);
      }, 280);
    }

    return () => window.clearTimeout(timeoutId);
  }, [heroName, isDeleting, typedName]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={profileImg}
          alt="Kishan Pandey portrait"
          className="h-full w-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-y-0 left-0 w-[30%] md:w-[46%] bg-gradient-to-r from-background via-background/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[30%] md:w-[46%] bg-gradient-to-l from-background via-background/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 md:h-44 bg-gradient-to-b from-background via-background/95 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 md:h-72 bg-gradient-to-t from-background via-background/95 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-padding relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 pt-20 md:pt-24 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-sm font-body font-medium uppercase tracking-widest text-primary"
        >
          Hello, I'm
        </motion.p>
        <h1 className="mb-6 min-h-[1.2em] font-display text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
          <span className="gradient-text">{typedName}</span>
          <span className="ml-1 inline-block animate-pulse text-primary">|</span>
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 max-w-2xl font-body text-lg text-muted-foreground"
        >
          A passionate cybersecurity enthusiast &amp; computer science student
          specializing in ethical hacking, network security, and building secure
          digital environments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
