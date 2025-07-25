import React from "react";
import AnimatedCardWrapper from "@/components/AnimatedCardWrapper";
import AnimatedCardList from "@/components/AnimatedCardList";
import { cn } from "@/lib/utils";
import TitleMain from "@/components/TitleMain";
import CardPrimary from "@/components/CardPrimary";

type CoreValuesProps = {
  miniTitle: string;
  title: string;
  cards: {
    id: string;
    title: string;
    content: string;
    icon: string;
  }[];
  variant: "card-three" | "card-four";
};

const Process = ({ miniTitle, title, cards, variant }: CoreValuesProps) => {
  return (
    <section className="max-w-[1440px] mx-auto p-8 sm:p-16">
      <TitleMain preTitle={miniTitle} title={title} />
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
