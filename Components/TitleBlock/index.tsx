import React from "react";
import { Dot } from "lucide-react";

type TitleBlocckProps = {
  title: string;
};

const TitleBlocck = ({ title }: TitleBlocckProps) => {
  return (
    <div className="flex justify-items-start items-center gap-2">
      <Dot className="text-primary stroke-[14px]" />
      <p className="text-lg uppercase text-black">{title}</p>
    </div>
  );
};

export default TitleBlocck;
