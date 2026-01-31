"use client";
import { motion } from "motion/react";

export default function Hamburger({ handleClick, isOpen }: any) {
  const hamburgerClasses = "block h-8 w-8 relative cursor-pointer lg:hidden";

  const baseLine =
    "hamburger-line block absolute right-0 bg-slate-900 h-1 transition-all duration-700 ease-spring-soft";

  const closedByIndex = (i: number) => {
    if (i === 0) return "rotate-0 w-8 top-1.75";
    if (i === 1) return "rotate-0 w-6 top-3.5";
    if (i === 2) return "rotate-0 w-6 top-3.5";
    return "rotate-0 w-4 top-5.25";
  };

  const openByIndex = (i: number) => {
    if (i === 0) return "top-4 w-0 right-1/2";
    if (i === 1) return "rotate-45 w-8";
    if (i === 2) return "-rotate-45 w-8";
    return "top-4 w-0 right-1/2";
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={`${hamburgerClasses} [--entry-distance-x:20px] w-`}
      aria-label="Hoofdmenu toggle"
      id="hamburger"
      initial={{ opacity: 0, x: "var(--entry-distance-x)" }}
      animate={{ opacity: 1, x: 0 }}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <span
          key={index}
          className={`${baseLine} ${
            isOpen ? openByIndex(index) : closedByIndex(index)
          }`}
        />
      ))}
    </motion.button>
  );
}
