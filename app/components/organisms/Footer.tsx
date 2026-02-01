"use client";

import { motion } from "motion/react";
import Heading from "../atoms/Heading";
import Link from "../atoms/Link";

export default function Footer() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <footer
      className="flex flex-col gap-6 max-w lg:min-h-screen pt-10 pb-28 px-4 md:pt-18 md:pb-32 md:px-12 lg:py-32 lg:px-28 2xl:py-32 2xl:px-53 text-white bg-neutral-900"
      id="footer"
    >
      <Heading as="h2">Voel je vrij om me een bericht te sturen!</Heading>
      <div className="flex flex-col gap-4">
        <Heading as="h3">Mail</Heading>
        <Link link="mailto:sanderjverhoeven@hotmail.com">
          Sanderjverhoeven@gmail.com
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Heading as="h3">Social media</Heading>
        <motion.ul
          className="flex flex-col gap-2"
          whileInView="visible"
          variants={list}
        >
          <motion.li variants={item}>
            <Link link="https://www.linkedin.com/in/sander-verhoeven-886938221">
              LinkedIn
            </Link>
          </motion.li>
          <motion.li variants={item}>
            <Link link="https://github.com/Rednas140">Github</Link>
          </motion.li>
        </motion.ul>
      </div>
    </footer>
  );
}
