import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

const AccordeonCard = ({question, answer, id}) => {
  return (
    <AccordionItem value={`item-${id}`}>
      <AccordionTrigger className="text-2xl">{question}</AccordionTrigger>
      <AccordionContent className='text-stone-400'>{answer}</AccordionContent>
    </AccordionItem>
  );
};

export default AccordeonCard;
