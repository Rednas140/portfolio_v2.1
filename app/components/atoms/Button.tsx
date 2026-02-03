"use client";
import { motion } from "motion/react";

export default function Button({ link, content, target }: any) {
  return (
    <motion.a
      href={link}
      target={!!target ? target : "_self"}
      className="inline-block px-5 py-3 bg-purple-600 text-white decoration-0 font-medium text-base lg:text-xl cursor-pointer font-syne"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {!!content ? content : "Button text"}
    </motion.a>
  );
}
