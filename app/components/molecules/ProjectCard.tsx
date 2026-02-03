"use client";
import Image from "next/image";
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
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

export default function ProjectCard({
  ProjectImage,
  Title,
  Description,
  link,
}: any) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={list}
      className="flex flex-col items-start gap-6"
    >
      <motion.div variants={item}>
        <Image
          className="aspect-video w-full h-auto rounded-md shadow-xl"
          alt={"A mockup of the project " + Title}
          src={ProjectImage}
        ></Image>
      </motion.div>
      <MotionHeading variants={item} as="h3">
        {!!Title ? Title : "Project title"}
      </MotionHeading>
      <motion.p variants={item}>
        {!!Description ? Description : "Project description"}
      </motion.p>
      <motion.div variants={item}>
        <Button
          link={link}
          content={"Bekijk " + Title}
          target="_blank"
        ></Button>
      </motion.div>
    </motion.div>
  );
}
