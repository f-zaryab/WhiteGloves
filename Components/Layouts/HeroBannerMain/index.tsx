import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

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
      <Carousel className="relative">
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="w-full h-full relative">
              <div className="flex flex-col justify-start items-center">
                {/* Text block */}
                <div className="absolute bottom-0 left-0 z-10 w-[50%] bg-white/5 backdrop-blur-md rounded-tr-[25rem]">
                  <div className="py-4 px-24">
                    <h1 className="text-white text-6xl font-semibold">
                      {item.title}
                    </h1>
                    <h2 className="text-secondary/80 text-3xl font-medium">
                      {item.subTitle}
                    </h2>
                  </div>
                </div>

                {/* Image Block */}
                <div className="w-full h-screen bg-primary">
                  <Image
                    src={item.img.src}
                    alt={item.img.alt}
                    width={0}
                    height={0}
                    className="h-auto w-full object-cover block object-center opacity-90 mask-radial-farthest-side mask-radial-from-100% mask-radial-at-[80%_15%]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroBannerMain;
