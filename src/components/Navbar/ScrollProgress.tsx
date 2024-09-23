"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Оновлюємо стан при скролінгу
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        backgroundColor: "green",
        transformOrigin: "0%",
        scaleX: scrollProgress,
      }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
  );
};

export default ScrollProgressBar;
