import React from "react";

type CardServiceProps = {
  id: string;
  title: string;
  content: string;
};

const CardService = ({ title, content }: CardServiceProps) => {
  return (
    <div className="p-8 h-full grid grid-cols-4 gap-4">
      <h4 className="text-2xl md:text-4xl font-semibold my-4 col-span-4 md:col-span-2 text-white relative transition-colors duration-300 group-hover:text-secondary before:content-[''] before:top-10 before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-secondary before:transition-all before:duration-300 group-hover:before:w-4/5">
        {title}
      </h4>

      <p className="text-[1.125rem] md:text-[1.5rem] font-normal leading-7 md:leading-8 col-span-4 md:col-span-2 text-white w-">
        {content}
      </p>
    </div>
  );
};

export default CardService;
