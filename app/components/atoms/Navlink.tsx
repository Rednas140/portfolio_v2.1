"use client";
type NavlinkProps = {
  link?: string;
  content?: string;
};

import { motion } from "motion/react";

export default function Navlink({ link, content }: NavlinkProps) {
  return (
    <motion.a
      href={link}
      className="font-syne text-4xl md:text-xl font-bold text-white md:text-neutral-900 decoration-0 cursor-pointer hover:decoration-2 hover:underline underline-offset-8"
    >
      {!!content ? content : "Navlink text"}
    </motion.a>
  );
}
