import React from "react";
// import { IconSelector } from "@/lib/utils";

type CardPrimaryProps = {
  title: string;
  content: string;
  //   icon: string;
};

const CardPrimary = ({ title, content }: CardPrimaryProps) => {
  //   const IconComponent = IconSelector(icon);

  return (
    <div className="p-8 bg-primary/30 rounded-3xl">
      {/* {IconComponent && <IconComponent className="h-full w-12" />} */}
      <h4 className="text-4xl font-bold my-4">{title}</h4>
      <p className="text-lg font-normal leading-6 text-black/55">{content}</p>
    </div>
  );
};

export default CardPrimary;
