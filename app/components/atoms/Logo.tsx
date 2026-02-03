"use client";
import { motion } from "motion/react";

export default function Logo() {
  return (
    <motion.a
      href="/"
      className="font-syne font-extrabold text-4xl decoration-0 cursor-pointer text-slate-900"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      aria-label="Portfolio Sander Verhoeven | Home"
    >
      S.
    </motion.a>
  );
}
