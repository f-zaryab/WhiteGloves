import React from "react";
import Image from "next/image";
import TitleMain from "@/components/titleMain";

type WhyChooseUsProps = {
  preTitle: string;
  title: string;
  cards: {
    id: string;
    title: string;
    description: string;
    img: {
      src: string;
      alt: string;
    };
  }[];
};

const WhyChooseUs = ({ preTitle, title, cards }: WhyChooseUsProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 md:p-24">
      <TitleMain preTitle={preTitle} title={title} isSticky />
      <div className="relative w-full">
        {cards.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start w-full lg:sticky top-84 h-[28rem] bg-white border-4 border-primary rounded-3xl mb-12 shadow-xl"
          >
            <div className="relative w-full">
              <h2 className="flex items-center h-22 text-2xl leading-8 tracking-wide md:text-4xl font-bold bg-primary text-white rounded-t-2xl rounded-b-none w-full p-2 px-4 md:px-12">
                {item.title}
              </h2>
              <div className="w-full h-full relative">
                <p className="absolute top-4 left-4 md:left-12 w-[80%] md:w-[30%] text-xl font-normal">
                  {item.description}
                </p>
                <Image
                  src={item.img.src}
                  alt={item.img.alt}
                  width={0}
                  height={0}
                  className="h-[22rem] w-full object-cover block object-center rounded-b-2xl opacity-30 mask-l-from-15% mask-l-to-70%"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
