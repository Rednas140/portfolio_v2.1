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
  hidden: { opacity: 0, y: -100 },
};

export default function NavItems({ isOpen }: any) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      variants={list}
      className={`hidden md:flex flex-row items-center gap-8 ${isOpen ? "flex bg-neutral-900 md:bg-white absolute md:static flex-col md:flex-row justify-center md:justify-start top-100 left-0 w-screen md:w-auto h-1/2 md:h-auto" : ""}`}
    >
      <motion.li variants={item}>
        <Navlink link="#about" content="About"></Navlink>
      </motion.li>

      <motion.li variants={item}>
        <Navlink link="#projects" content="Projects"></Navlink>
      </motion.li>

      <motion.li variants={item}>
        <Navlink link="#footer" content="Contact"></Navlink>
      </motion.li>
    </motion.ul>
  );
}
