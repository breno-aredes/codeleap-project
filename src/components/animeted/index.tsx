import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedModalWrapperProps {
  direction: number;
  children: React.ReactNode;
}

const AnimatedModalWrapper: React.FC<AnimatedModalWrapperProps> = ({
  direction,
  children,
}) => {
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence custom={direction} mode="wait">
      <motion.div
        key={direction}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedModalWrapper;
