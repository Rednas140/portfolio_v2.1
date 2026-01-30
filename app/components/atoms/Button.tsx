"use client";
import { motion } from "motion/react";

export default function Button({ link, content, target }: any) {
  return (
    <motion.a
      href={link}
      target={!!target ? target : "_self"}
      className="c-button inline-block"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {!!content ? content : "Button text"}
    </motion.a>
  );
}
