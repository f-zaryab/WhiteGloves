"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "motion/react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-top-btn"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/80 text-white rounded-full p-2 shadow-lg z-50 cursor-pointer border-2 border-white shadow-2xl"
        >
          <IoIosArrowUp className="fill-custom-secondary! font-extrabold w-8 h-8" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;
