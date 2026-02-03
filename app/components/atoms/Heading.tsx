"use client";
import React, { forwardRef } from "react";
import { motion } from "motion/react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { as = "h2", children, className = "" },
  ref,
) {
  const Component = as;

  const styles: Record<typeof as, string> = {
    h1: "text-[32px] lg:text-5xl font-syne font-black leading-10 lg:leading-18 ",
    h2: "text-3xl lg:text-[40px]  font-syne font-bold",
    h3: "text-2xl lg:text-4xl font-syne font-semibold",
    h4: "text-xl font-syne",
    h5: "text-lg font-syne",
    h6: "text-base font-bold font-syne",
  };

  return (
    <Component ref={ref} className={`${styles[as]} ${className} `}>
      {children}
    </Component>
  );
});

const MotionHeading = motion.create(Heading, { forwardMotionProps: true });

export { MotionHeading };
export default Heading;
