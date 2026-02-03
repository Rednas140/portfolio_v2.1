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
        Iets over mij
      </MotionHeading>
      <motion.p variants={item}>Hoi, ik ben Sander Verhoeven.</motion.p>
      <motion.p variants={item}>
        Ik streef ernaar om websites te maken die inclusief zijn voor iedereen,
        ongeacht hun vaardigheden of de manier waarop ze zich identificeren.
        Mijn overtuiging is dat iedereen zou moeten streven naar een inclusief
        internet, niet omdat het hen wordt opgelegd, maar omdat het een
        waardevol doel is om na te streven.
      </motion.p>
      <motion.p variants={item}>
        Het bouwen van websites is een passie van mij die zich uitstrekt tot
        zowel de ontwerpkanten als de developmentkanten. Met behulp van deze
        interesses probeer ik websites te bouwen die leuk en intuïtief zijn voor
        bezoekers om te gebruiken.
      </motion.p>
      <motion.p variants={item}>
        Dank je wel dat je de tijd hebt genomen om mijn portfolio te bezoeken en
        mijn werk tot nu toe te verkennen!
      </motion.p>
    </motion.div>
  );
}
