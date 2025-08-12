import React from "react";
// import { IconSelector } from "@/lib/utils";

type CardPrimaryProps = {
  id: string;
  title: string;
  content: string;
};

const CardPrimary = ({ id, title, content }: CardPrimaryProps) => {
  return (
    <div className="p-8 h-full bg-primary rounded-3xl group hover:bg-secondary cursor-pointer">
      <span className="text-secondary text-xl font-bold group-hover:text-white">{`Step ${id}`}</span>
      <h4 className="text-3xl text-white font-semibold my-4">{title}</h4>
      <p className="text-lg font-normal leading-6 text-white">{content}</p>
    </div>
  );
};

export default CardPrimary;
