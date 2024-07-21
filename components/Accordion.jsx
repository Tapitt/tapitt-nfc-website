"use client"
import React, { useState } from "react";
import Image from "next/image";
//import minusIcon from "/icon-minus.svg";
//import plusIcon from "/icon-plus.svg";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Accordion = ({ isAccordionOpen: defaultOpen = false, question, answer }) => {
  const [animationParent] = useAutoAnimate();
  const [isAccordionOpen, setAccordion] = useState(defaultOpen);

  const toggleAccordion = () => {
    setAccordion(!isAccordionOpen);
  };

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      {/* q */}
      <p
        onClick={toggleAccordion}
        className="flex justify-between gap-2 text:lg sm:text-3xl font-semibold cursor-pointer"
      >
        <span className="text-[#fffffe]">{question}</span>
        {isAccordionOpen ? (
          <img src="./icon-minus.svg" alt="minus-icon" className="h-8 w-auto" />
        ) : (
          <img src='./icon-plus.svg' alt="plus-icon" className="h-8 w-auto" />
        )}
      </p>
      {/* ans */}
      {isAccordionOpen && (
        <p className="text-base sm:text-2xl text-[#94a1b2]">{answer}</p>
      )}
    </div>
  );
};

export default Accordion;
