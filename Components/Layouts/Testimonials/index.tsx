import React from "react";
import { InfiniteMovingCards } from "@/Components/client/InfiniteMovingCards";
import TitleMain from "@/Components/TitleMain";

type TestimonialsProps = {
  preTitle: string;
  title: string;
  testimonials: {
    id: string;
    quote: string;
    name: string;
    title?: string;
  }[];
};

const Testimonials = ({ preTitle, title, testimonials }: TestimonialsProps) => {
  return (
    <section className="w-full flex justify-center items-center p-8 md:p-24">
      <div className="flex flex-col justify-start w-full">
        <div className="">
          <TitleMain preTitle={preTitle} title={title} isSideHeading />
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="normal"
          className="h-60"
        />
      </div>
    </section>
  );
};

export default Testimonials;
