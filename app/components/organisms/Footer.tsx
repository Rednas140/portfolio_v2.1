"use client";

import { motion, stagger } from "motion/react";
import Heading, { MotionHeading } from "../atoms/Heading";
import Link from "../atoms/Link";

export default function Footer() {
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

  return (
    <footer
      className="max-w lg:min-h-screen pt-10 pb-28 px-4 md:pt-18 md:pb-32 md:px-12 lg:py-32 lg:px-28 2xl:py-32 2xl:px-53 text-white bg-neutral-900"
      id="footer"
    >
      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="visible"
        variants={list}
      >
        <MotionHeading variants={item} as="h2">
          Voel je vrij om me een bericht te sturen!
        </MotionHeading>
        <div className="flex flex-col gap-4">
          <MotionHeading variants={item} as="h3">
            Mail
          </MotionHeading>
          <motion.div variants={item}>
            <Link link="mailto:sanderjverhoeven@hotmail.com">
              Sanderjverhoeven@gmail.com
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <MotionHeading variants={item} as="h3">
            Social media
          </MotionHeading>
          <ul className="flex flex-col gap-2">
            <motion.li variants={item}>
              <Link link="https://www.linkedin.com/in/sander-verhoeven-886938221">
                LinkedIn
              </Link>
            </motion.li>
            <motion.li variants={item}>
              <Link link="https://github.com/Rednas140">Github</Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}
