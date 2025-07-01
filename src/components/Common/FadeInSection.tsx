import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ReactNode } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeInSection = ({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  let x = 0;
  let y = 0;

  switch (direction) {
    case "left":
      x = -40;
      break;
    case "right":
      x = 40;
      break;
    case "up":
      y = 40;
      break;
    case "down":
      y = -40;
      break;
  }

  const variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={` ${className}`}
    >
      {children}
    </motion.div>
  );
};
