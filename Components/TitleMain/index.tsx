import { cn } from "@/lib/utils";
import React from "react";
import { FaDotCircle } from "react-icons/fa";

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
      <span className="flex justify-start items-center gap-4 text-2xl font-bold uppercase">
        <FaDotCircle className="text-secondary" />
        {preTitle}
      </span>
      <h2
        className={cn(
          `${
            isSideHeading ? "w-full md:w-full" : "w-full sm:w-3/4 md:w-2/3"
          } text-5xl font-normal text-primary mb-16`
        )}
      >
        {title}
      </h2>
    </div>
  );
};

export default TitleMain;
