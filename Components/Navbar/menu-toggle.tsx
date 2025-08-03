"use client";
import { motion, SVGMotionProps } from "motion/react";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ isOpen }: { isOpen: boolean }) => (
  <div className="z-40">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        initial={false}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        animate={isOpen ? "open" : "closed"}
        className="text-secondary"
        stroke="#6c757d"
      />
      <Path
        initial={false}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.1 }}
        stroke="#6c757d"
      />
      <Path
        initial={false}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        animate={isOpen ? "open" : "closed"}
        stroke="#6c757d"
      />
    </svg>
  </div>
);

export default MenuToggle;
