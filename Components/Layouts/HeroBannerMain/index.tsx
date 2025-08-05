"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { TextEffect } from "@/Components/motion-primitives/text-effect";

type HeroBannerMainProps = {
  carouselItems: {
    id: string;
    title: string;
    subTitle: string;
    img: {
      src: string;
      alt: string;
    };
  }[];
};

const HeroBannerMain = ({ carouselItems }: HeroBannerMainProps) => {
  return (
    <div>
      <Carousel
        className="relative bg-primary"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3050,
          }),
        ]}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="w-full h-full relative">
              <div className="flex flex-col justify-start items-center">
                {/* Text block */}
                <div className="absolute bottom-0 left-0 z-10 w-[97%] md:w-[50%] bg-white/5 backdrop-blur-md rounded-tr-[25rem]">
                  <div className="py-4 px-12 md:px-24">
                    <TextEffect
                      as="h1"
                      per="char"
                      preset="fade"
                      className="text-white text-3xl md:text-6xl leading-8 md:leading-16 font-semibold"
                    >
                      {item.title}
                    </TextEffect>
                    <TextEffect
                      per="word"
                      preset="blur"
                      as="h2"
                      delay={1}
                      className="text-secondary/80 text-2xl md:text-3xl font-medium"
                    >
                      {item.subTitle}
                    </TextEffect>
                  </div>
                </div>

                {/* Image Block */}
                <div className="w-full h-screen bg-primary">
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    width={0}
                    height={0}
                    className="h-full lg:h-screen w-full object-cover object-[0%_100%] block opacity-90 mask-radial-farthest-side mask-radial-from-100% mask-radial-at-[80%_15%]"
                    sizes="(max-width: 768px) 100vw, 90vw"
                    priority
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        <div className="w-full h-screen absolute top-0 left-0 hidden sm:block">
          <CarouselPrevious className="absolute bottom-6 right-20 bg-secondary border-secondary shadow-2xl" />
          <CarouselNext className="absolute bottom-6 right-8 bg-secondary border-secondary shadow-2xl" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBannerMain;
