import React from "react";
import Image from "next/image";
import { Dot } from "lucide-react";

type AboutAuthorProps = {
  image: {
    src: string;
    alt: string;
  };
  aboutText: string;
};

const AboutAuthor = ({ aboutText, image }: AboutAuthorProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 md:p-24">
      <div className="grid grid-cols-5 gap-4 w-full bg-primary rounded-3xl">
        <div className="col-span-5 lg:col-span-3 order-2 lg:order-1 text-white px-4 md:px-16 mb-8 flex flex-col items-start justify-center">
          <div className="flex justify-items-start items-center gap-2 mb-4">
            <Dot className="text-secondary stroke-[14px]" />
            <h2 className="text-2xl uppercase text-white font-bold">
              Who am i?
            </h2>
          </div>
          <p className="text-lg md:text-[1.25rem] xl:text-[1.5rem]">
            {aboutText}
          </p>
        </div>
        <div className="col-span-5 lg:col-span-2 order-1 lg:order-2">
          <Image
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            className="w-full h-auto object-cover rounded-3xl"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
