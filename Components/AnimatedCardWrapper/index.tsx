"use client";

import { motion } from "motion/react";
import React from "react";

export const cardCoreValuesVariant = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedCardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <motion.div variants={cardCoreValuesVariant}>{children}</motion.div>;
};

export default AnimatedCardWrapper;
