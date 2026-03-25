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
            Kishan <span className="gradient-text">Pandey</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-md mb-8">
            A passionate cybersecurity enthusiast &amp; computer science student
            specializing in ethical hacking, network security, and building
            secure digital environments.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="glow-btn inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-body font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="glow-btn inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-secondary text-secondary font-body font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              Contact Me
            </motion.a>
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
            <motion.img
              src={profileImg}
              alt="Kishan Pandey profile photo"
              width={512}
              height={512}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-full h-full object-cover rounded-full border-4 border-primary/30 hover:shadow-[0_0_30px_hsl(16_80%_55%/0.4)]  transition-shadow duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
