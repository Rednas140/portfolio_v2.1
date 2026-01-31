"use client";
import { motion } from "motion/react";

export default function Hamburger({ handleClick, isOpen }: any) {
  const hamburgerClasses = "block h-8 w-8 relative cursor-pointer lg:hidden";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={`hamburger ${hamburgerClasses} ${isOpen ? "open" : ""} [--entry-distance-x:20px]`}
      aria-label="Hoofdmenu toggle"
      id="hamburger"
      initial={{ opacity: 0, x: "var(--entry-distance-x)" }}
      animate={{ opacity: 1, x: 0 }}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <span
          key={index}
          className="hamburger-line block absolute right-0 rotate-0 bg-slate-900 h-1 transition-transform duration-700 ease-spring-soft"
        ></span>
      ))}
    </motion.button>
  );
}
