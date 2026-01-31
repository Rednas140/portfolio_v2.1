"use client";
import { motion } from "motion/react";

export default function Navlink({ link, content }: any) {
  return (
    <motion.a
      href={link}
      className="font-syne text-4xl lg:text-xl font-bold text-white lg:text-neutral-900 decoration-0 cursor-pointer hover"
    >
      {!!content ? content : "Navlink text"}
    </motion.a>
  );
}
