import React from "react";
import Image from "next/image";
import { TextEffect } from "@/Components/motion-primitives/text-effect";

type HeroBannerProps = {
  title: string;
  subTitle: string;
  img: {
    src: string;
    alt: string;
  };
};

const HeroBanner = ({ title, subTitle, img }: HeroBannerProps) => {
  return (
    <section className="bg-white w-full h-full">
      <div className="overflow-hidden mx-auto h-[50rem] relative">
        <div className="absolute bottom-0 left-0 z-10 w-[97%] md:w-[50%] bg-white/5 backdrop-blur-md rounded-tr-[25rem]">
          <div className="py-4 px-12 md:px-24">
            <TextEffect
              as="h1"
              per="char"
              preset="fade"
              className="text-white text-5xl md:text-6xl leading-12 md:leading-16 font-semibold"
            >
              {title}
            </TextEffect>
            <TextEffect
              per="word"
              preset="blur"
              as="h2"
              delay={1}
              className="text-secondary/80 text-2xl md:text-3xl font-medium"
            >
              {subTitle}
            </TextEffect>
          </div>
        </div>
        <Image
          src={img.src}
          alt={img.alt}
          width={0}
          height={0}
          className="h-full w-full object-cover block"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
    </section>
  );
};

export default HeroBanner;
