import React from "react";
import AnimatedCardWrapper from "@/Components/AnimatedCardWrapper";
import AnimatedCardList from "@/Components/AnimatedCardList";
import TitleMain from "@/Components/TitleMain";
import CardPrimary from "@/Components/CardPrimary";

type CoreValuesProps = {
  preTitle: string;
  title: string;
  cards: {
    id: string;
    title: string;
    content: string;
    icon?: string;
  }[];
};

const Process = ({ preTitle, title, cards }: CoreValuesProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 md:p-24">
      <TitleMain preTitle={preTitle} title={title} />
      <AnimatedCardList
        classes={"grid grid-cols-1 gap-4 my-12 md:grid-cols-2 xl:grid-cols-5"}
      >
        {cards.map((item, idx) => (
          <AnimatedCardWrapper key={item.id + idx}>
            <CardPrimary
              key={item.id + idx}
              id={(idx + 1).toString()}
              title={item.title}
              content={item.content}
              //   icon={item.icon}
            />
          </AnimatedCardWrapper>
        ))}
      </AnimatedCardList>
    </section>
  );
};

export default Process;
