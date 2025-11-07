import Accordion from '@/components/Accordion/Accordion';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'
import { faqTopicsLev3 } from '../Support/data';
import Link from 'next/link';

export default function SupportLevel3Section({ slug }) {
    console.log(faqTopicsLev3[slug])
    return (
        <div className='w-9/6'>
            <Accordion type="single" collapsible>
                {faqTopicsLev3[slug].map((data, index) => {
                    console.log(data)
                    return (
                        <AccordionItem key={index} className={""} value={`item-${index + 1}`}>
                            <AccordionTrigger className={"text-xl font-bold"}>
                                <span>
                                    {/* <Icon size={30} className="text-primary" /> */}
                                    <span>{data.key}</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc list-inside ml-3 text-lg">
                                    {data.questions?.map((item, index) => {
                                        return (
                                            <li key={index} className="text-gray-600 hover:text-primary hover:underline">
                                                <Link href={"/support/" + item.linkName}>{item.question}</Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}
