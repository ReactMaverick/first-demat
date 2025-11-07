"use client";
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { AccordionContent, AccordionItem, Accordion as AccordionPrivet, AccordionTrigger } from "../ui/accordion";
import { faqTopicsLev1, faqTopicsLev2 } from "@/PageComponents/Support/data";
import Link from "next/link";

export default function Accordion({ }) {

  return (
    <AccordionPrivet type="single" collapsible>
      {faqTopicsLev1.map(({ title, Icon }, index) => {
        console.log(title)
        return (
          <AccordionItem key={index} className={"border mb-2 px-3 rounded-2xl !border-b"} value={`item-${index + 1}`}>
            <AccordionTrigger className={"text-xl font-bold"}>
              <span>
                {/* <Icon size={30} className="text-primary" /> */}
                <span>{title}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc list-inside ml-3 text-lg">
                {faqTopicsLev2[title].map((item, index) => {
                  return (
                    <li key={index} className="text-gray-600 hover:text-primary hover:underline">
                      <Link href={"/support/"+item.linkName}>{item.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </AccordionPrivet>
  );
}
