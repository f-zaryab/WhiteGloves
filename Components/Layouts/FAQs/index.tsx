import React from "react";
import { FaChevronDown } from "react-icons/fa";
import TitleMain from "@/Components/titleMain";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/Components/motion-primitives/accordion";

type FAQsProps = {
  preTitle: string;
  title: string;
  faq: {
    id: string;
    question: string;
    answer: string;
  }[];
};

const FAQS = ({ preTitle, title, faq }: FAQsProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-8 md:p-24">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-1">
          <TitleMain preTitle={preTitle} title={title} isSideHeading />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <Accordion
            className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {faq.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="py-2">
                <AccordionTrigger className="w-full text-left text-xl md:text-2xl font-semibold text-white bg-primary p-4 px-8 rounded-xl cursor-pointer">
                  <div className="flex items-center justify-between gap-4">
                    <div>{item.question}</div>
                    <FaChevronDown className="h-6 md:h-4 w-6 md:w-4 text-white transition-transform duration-200 group-data-expanded:-rotate-180" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-primary/70 px-8 rounded-2xl">
                  <p className="text-white text-xl py-8">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQS;
