"use client";
import { ChevronDown, ChevronRight, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Accordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 w-full py-[10px]">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${openIndex === index ? "bg-gray-100" : "bg-white"}  rounded-xl p-[20px] transition flex flex-col justify-center items-stretch space-y-[2rem] h-full border-2 border-gray-200`}
        >
          {/* Trigger */}
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left cursor-pointer"
          >
            <h6 className="font-bold text-primary">{faq.question}</h6>
            {openIndex === index ? (
              <ChevronDown className="w-6 h-6 text-primary font-bold text-[1.6rem]" />
            ) : (
              <ChevronRight className="w-6 h-6 text-primary text-[1.6rem]" />
            )}
          </button>

          {/* Content */}
          {openIndex === index && (
            <div
              className={`overflow-hidden transition-all duration-500 border-t-[0.1rem] border-t-gray-300 ${
                openIndex === index
                  ? "max-h-[500px] mt-3 opacity-100 py-[2rem]"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
