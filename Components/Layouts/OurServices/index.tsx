import React from "react";
import AnimatedCardWrapper from "@/Components/AnimatedCardWrapper";
import AnimatedCardList from "@/Components/AnimatedCardList";
import TitleMain from "@/Components/TitleMain";
import CardService from "@/Components/CardServices";

type OurServicesProps = {
  preTitle: string;
  title: string;
  cards: {
    id: string;
    title: string;
    content: string;
    icon?: string;
  }[];
};

const OurServices = ({ preTitle, title, cards }: OurServicesProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 md:p-24">
      <TitleMain preTitle={preTitle} title={title} />
      <AnimatedCardList classes="grid grid-rows-5 gap-4 my-12">
        {cards.map((item, idx) => (
          <div
            key={item.id + idx}
            className="group bg-primary rounded-3xl hover:bg-primary/90 cursor-pointer w-full transition-all duration-1000"
          >
            <AnimatedCardWrapper key={item.id + idx}>
              <CardService
                key={item.id + idx}
                id={(idx + 1).toString()}
                title={item.title}
                content={item.content}
              />
            </AnimatedCardWrapper>
          </div>
        ))}
      </AnimatedCardList>
    </section>
  );
};

export default OurServices;
