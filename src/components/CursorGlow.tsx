import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let x = -200;
    let y = -200;
    let visible = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        el.style.opacity = "1";
      }
      el.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };
    const onLeave = () => {
      visible = false;
      el.style.opacity = "0";
    };
    const onEnter = () => {
      visible = true;
      el.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] opacity-0"
      style={{ transition: "opacity 0.2s ease" }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-primary/15 blur-[60px]" />
    </div>
  );
};

export default CursorGlow;
