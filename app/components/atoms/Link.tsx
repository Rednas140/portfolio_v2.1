"use client";
import { motion } from "motion/react";

export default function Link({ link, children, target }: any) {
  return (
    <motion.a
      href={link}
      target={!!target ? target : "_self"}
      className="inline-block text-purple-200 decoration-0 font-medium text-base lg:text-xl cursor-pointer font-poppins"
      whileHover={{}}
      whileTap={{ scale: 0.95 }}
      initial={{ x: "1vw" }}
      whileInView={{ x: 0 }}
    >
      {children}
    </motion.a>
  );
}
