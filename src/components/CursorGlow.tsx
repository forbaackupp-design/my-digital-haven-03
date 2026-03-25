import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      animate={{
        x: pos.x - 200,
        y: pos.y - 200,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-primary/15 blur-[80px] dark:bg-primary/20" />
    </motion.div>
  );
};

export default CursorGlow;
