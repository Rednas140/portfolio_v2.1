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
        Hoi hoi, ik ben Sander Verhoeven
      </MotionHeading>
      <motion.p variants={item}>
        Een junior developer met een passie voor inclusive design en
        development. Wonende in Papendrecht, Zuid-holland.
      </motion.p>
      <motion.div variants={item}>
        <Button link="#projects" content="Kijk naar mijn projecten!"></Button>
      </motion.div>
    </motion.div>
  );
}
