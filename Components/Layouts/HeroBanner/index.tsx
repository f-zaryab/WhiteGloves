import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="bg-white w-full h-full">
      <div className="overflow-hidden mx-auto h-[50rem]">
        <Image
          src="/temp_images/herobanner_01.png"
          alt="her-banner_01"
          width={0}
          height={0}
          className="h-full w-full object-cover block"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
