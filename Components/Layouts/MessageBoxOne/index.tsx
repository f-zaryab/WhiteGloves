import React from "react";
import Image from "next/image";
import { MessageOneSectionText } from "@/contants";

const MessageOneSection = () => {
  return (
    <section className="bg-primary w-full flex justify-center items-center p-12 md:p-24 relative">
      <p className="text-white text-5xl text-center max-w-[38rem] relative">
        {MessageOneSectionText.message}
        <Image
          src="/vector_01.svg"
          alt="slash"
          width="160"
          height="160"
          className="absolute -bottom-8 right-32"
        />
      </p>
    </section>
  );
};

export default MessageOneSection;
