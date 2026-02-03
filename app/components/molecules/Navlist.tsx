import { motion, stagger } from "motion/react";
import Navlink from "../atoms/Navlink";

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
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
};

export default function NavItems({ isOpen }: any) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      variants={list}
      className={`md:flex items-center gap-8 ${
        isOpen
          ? "flex flex-col bg-neutral-900 md:bg-white absolute md:static md:flex-row justify-center md:justify-start top-full left-0 w-screen md:w-auto h-auto py-12 md:py-0"
          : "hidden"
      }`}
    >
      <motion.li variants={item}>
        <Navlink link="#about" content="Over mij"></Navlink>
      </motion.li>

      <motion.li variants={item}>
        <Navlink link="#projects" content="Projecten"></Navlink>
      </motion.li>

      <motion.li variants={item}>
        <Navlink link="#footer" content="Contact"></Navlink>
      </motion.li>
    </motion.ul>
  );
}
