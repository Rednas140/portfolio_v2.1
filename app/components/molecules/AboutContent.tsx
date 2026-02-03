"use client";
import { motion, stagger } from "motion/react";
import { MotionHeading } from "../atoms/Heading";

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

export default function AboutContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={list}
      className="md:col-span-7 max-w-2xl flex flex-col gap-4 md:gap-6"
    >
      <MotionHeading variants={item} as="h2">
        Een beetje over mij
      </MotionHeading>
      <motion.p variants={item}>Hoi, ik ben Sander Verhoeven.</motion.p>
      <motion.p variants={item}>
        Ik ben junior webdeveloper en WCAG-auditor met een focus op digitale
        toegankelijkheid. Ik help organisaties met WCAG-rapporten en het
        vertalen van WCAG-richtlijnen naar haalbare, concrete oplossingen. Zo
        blijft toegankelijkheid geen theoretisch verhaal, maar iets wat
        begrijpelijk is en direct toepasbaar wordt.
      </motion.p>
      <motion.p variants={item}>
        In mijn werk kijk ik niet alleen naar toegankelijkheid. Naast
        toegankelijkheid blijven nieuwe snufjes toepassen of optimalisatie
        doorvoeren ook altijd leuk. Hoe WCAG-proof je website ook is, een trage
        website is nog steeds niet toegankelijk!
      </motion.p>
      <motion.p variants={item}>
        Door mijn kennis van zowel development als toegankelijkheid kan ik
        toegankelijkheidsproblemen constateren en verbeteringen direct
        doorvoeren. Mijn doel is om websites te bouwen die voor zoveel mogelijk
        mensen bruikbaar zijn, en die tegelijkertijd overzichtelijk zijn en
        prettig werken.
      </motion.p>
    </motion.div>
  );
}
