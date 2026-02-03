"use client";
import Button from "../atoms/Button";
import { MotionHeading } from "../atoms/Heading";
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
  hidden: { opacity: 0, x: -20 },
};

export default function HeaderContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={list}
      className="flex flex-col items-start gap-6 lg:w-155"
    >
      <MotionHeading variants={item} as="h1" className="w-75 lg:w-120">
        Hoi, ik ben Sander!
      </MotionHeading>
      <motion.p variants={item}>
        Ik bouw websites met toegankelijkheid als basis, niet als bijzaak. Als
        junior webdeveloper en WCAG-auditor houd ik het graag simpel: niet wat
        er allemaal niet mag, maar hoe je het wél slim oplost.
      </motion.p>
      <motion.div variants={item}>
        <Button link="#projects" content="Bekijk mijn projecten!"></Button>
      </motion.div>
    </motion.div>
  );
}
