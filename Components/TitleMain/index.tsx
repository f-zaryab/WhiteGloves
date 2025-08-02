import { cn } from "@/lib/utils";
import React from "react";
import { FaDotCircle } from "react-icons/fa";
import AnimatedTitle from "../client/AnimatedTitle";

type TitleMainProps = {
  preTitle: string;
  title: string;
  isSticky?: boolean;
  isSideHeading?: boolean;
};

const TitleMain = ({
  preTitle,
  title,
  isSticky = false,
  isSideHeading = false,
}: TitleMainProps) => {
  return (
    <div
      className={cn(
        `${isSticky ? "lg:sticky top-30" : ""} flex flex-col gap-2 w-full`
      )}
    >
      <span className="flex justify-start items-center gap-4 text-lg md:text-2xl font-bold uppercase">
        <FaDotCircle className="text-secondary" />
        {preTitle}
      </span>
      <AnimatedTitle isSideHeading={isSideHeading}>{title}</AnimatedTitle>
    </div>
  );
};

export default TitleMain;
