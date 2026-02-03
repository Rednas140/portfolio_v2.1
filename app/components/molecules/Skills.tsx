"use client";
import { motion, stagger } from "motion/react";
import { MotionChip } from "../atoms/Chip";
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
  hidden: { opacity: 0, x: 20 },
};

const list2 = {
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

const item2 = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 20 },
};

export default function Skills() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={list}
      className="flex flex-col md:col-span-5 lg:col-span-4 lg:col-start-9 gap-3 lg:gap-6 items-start"
    >
      <MotionHeading variants={item} as="h2">
        Skills
      </MotionHeading>
      <div className="flex flex-col gap-6 md:gap-9 items-start">
        <div className="flex flex-col gap-5 items-start">
          <MotionHeading variants={item} as="h3">
            General
          </MotionHeading>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={list2}
            className="flex flex-col gap-y-3 items-start"
          >
            <li className="flex flex-row gap-3 items-start">
              <MotionChip
                variants={item2}
                type="secondary"
                content="UI & UX"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="secondary"
                content="Frontend dev"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="secondary"
                content="A11Y"
              ></MotionChip>
            </li>
            <li className="flex flex-row gap-3 items-start">
              <MotionChip
                variants={item2}
                type="secondary"
                content="Wireframing"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="secondary"
                content="Testing"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="secondary"
                content="WCAG"
              ></MotionChip>
            </li>
            <li className="flex flex-row gap-3 items-start">
              <MotionChip
                variants={item2}
                type="secondary"
                content="Agile"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="secondary"
                content="Project managing"
              ></MotionChip>
            </li>
          </motion.ul>
        </div>
        <div className="flex flex-col gap-5 items-start">
          <MotionHeading variants={item} as="h3">
            Development
          </MotionHeading>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={list2}
            className="flex flex-col gap-y-3 items-start"
          >
            <li className="flex flex-row gap-3 items-start">
              <MotionChip
                variants={item2}
                type="primary"
                content="HTML"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="primary"
                content="CSS"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="primary"
                content="Javascript"
              ></MotionChip>
            </li>
            <li className="flex flex-row gap-3 items-start">
              <MotionChip
                variants={item2}
                type="primary"
                content="Sass"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="primary"
                content="Tailwind"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="primary"
                content="jQuery"
              ></MotionChip>
            </li>
            <li className="flex flex-row gap-3 items-start">
              <MotionChip
                variants={item2}
                type="primary"
                content="Git"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="primary"
                content="ARIA"
              ></MotionChip>
              <MotionChip
                variants={item2}
                type="primary"
                content="Craft CMS"
              ></MotionChip>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
}
