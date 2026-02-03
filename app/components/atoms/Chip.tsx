"use client";
import React, { forwardRef } from "react";
import { motion } from "motion/react";

type ChipProps = {
  type: "primary" | "secondary";
  content: string;
  className?: string;
};

const Chip = forwardRef<HTMLSpanElement, ChipProps>(function Chip(
  { type, content, className = "" },
  ref,
) {
  let chipClasses: string =
    "inline-block py-1.5 px-2 text-sm rounded-full lg:py-2 lg:px-3 font-poppins ";

  if (type === "primary") {
    chipClasses = chipClasses + "bg-purple-600";
  } else if (type === "secondary") {
    chipClasses = chipClasses + "bg-pink-600";
  }

  return (
    <span ref={ref} className={`${chipClasses} ${className}`.trim()}>
      {content}
    </span>
  );
});

const MotionChip = motion.create(Chip, { forwardMotionProps: true });

export { MotionChip };
export default Chip;
