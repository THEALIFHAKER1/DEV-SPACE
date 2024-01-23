"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname as Pathname } from "next/navigation";
import React from "react";
const variants = {
  fadeIn: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  inactive: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  fadeOut: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0,
      ease: "easeInOut",
    },
  },
};
function RouteTransitions({ children }: { children: React.ReactNode }) {
  const asPath = Pathname();
  console.log(asPath);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 1,
      }}
    >
      <div className="effect-2">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={String(asPath)}
            variants={variants}
            initial="fadeIn"
            animate="inactive"
            exit="fadeOut"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default RouteTransitions;
