import React from 'react'
import Accordion from './Accordion'
import { faqs } from './Data'
import Image from 'next/image'
//import staricon from "./icon-star.svg"
import { BadgePlus } from "lucide-react";

export const FAQ = () => {
  return (
    <section className="relative transition-all mx-auto max-w-xl sm:max-w-7xl rounded-lg flex flex-col gap-4 p-5" id="faq">
        <h1 className="flex gap-3 items-center">
          {/* image */}
          <img src="./icon-star.svg" alt="star-icon" className=" h-6  w-auto" />
          <span className="font-bold text-5xl text-[#fffffe]">FAQs</span>
        </h1>
        <div className="flex flex-col gap-4 divide-y">
          {faqs.map((d, i) => (
            <Accordion
              answer={d.answer}
              question={d.question}
              isAccordionOpen={d.isAccordionOpen}
              key={i}
            />
          ))}
        </div>
      </section>
  )
}
