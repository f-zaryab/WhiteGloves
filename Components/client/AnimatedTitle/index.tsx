"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const AnimatedTitle = ({
  children,
  isSideHeading,
}: {
  children: React.ReactNode;
  isSideHeading: boolean;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.6 }}
      className={cn(
        `${
          isSideHeading ? "w-full md:w-full" : "w-full sm:w-3/4 md:w-2/3"
        } text-4xl md:text-5xl font-normal text-primary mb-4 md:mb-16`
      )}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedTitle;
