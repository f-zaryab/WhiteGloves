"use client";

import React from "react";
import { motion } from "motion/react";

export const cardCoreValuesContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const AnimatedCardList = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardCoreValuesContainerVariant}
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCardList;
