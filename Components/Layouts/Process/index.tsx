import React from "react";
import AnimatedCardWrapper from "@/components/AnimatedCardWrapper";
import AnimatedCardList from "@/components/AnimatedCardList";
import { cn } from "@/lib/utils";
import TitleMain from "@/components/TitleMain";
import CardPrimary from "@/components/CardPrimary";

type CoreValuesProps = {
  preTitle: string;
  title: string;
  cards: {
    id: string;
    title: string;
    content: string;
    icon?: string;
  }[];
  variant: "card-three" | "card-four";
};

const Process = ({ preTitle, title, cards, variant }: CoreValuesProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 md:p-24">
      <TitleMain preTitle={preTitle} title={title} />
      <AnimatedCardList
        classes={cn(
          variant === "card-three" ? "md:grid-cols-3" : "md:grid-cols-4",
          "grid grid-cols-1 gap-4 my-12"
        )}
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
