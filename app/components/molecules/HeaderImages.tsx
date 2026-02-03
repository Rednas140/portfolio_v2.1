"use client";
import Image from "next/image";
import pfp1 from "../../../public/assets/pfp2.jpg";
import pfp2 from "../../../public/assets/pfp1.jpg";
import { motion, stagger } from "motion/react";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: stagger(0.1),
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 20 },
};

export default function HeaderImages() {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      variants={list}
      className="flex flex-col items-center"
    >
      <motion.li variants={item}>
        <Image
          className="object-cover w-60 h-60 shadow-2xl/40 md:w-105 md:h-105 -ml-6"
          alt=""
          src={pfp2}
        ></Image>
      </motion.li>

      <motion.li variants={item}>
        <Image
          className="object-cover w-60 h-60 shadow-2xl/40 md:w-105 md:h-105 ml-6 -mt-12"
          alt=""
          src={pfp1}
        ></Image>
      </motion.li>
    </motion.ul>
  );
}
