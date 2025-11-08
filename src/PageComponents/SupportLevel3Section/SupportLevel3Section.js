import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from '@/components/ui/accordion';
import React from 'react'
import { faqTopicsLev3 } from '../Support/data';
import Link from 'next/link';
import { capitalizeEachFirstLetterURL, textToURL } from '@/lib/utils';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

export default function SupportLevel3Section({ slug, prevlevels }) {
    console.log(prevlevels, slug)
    return (
        <div className='lg:w-10/6 w-full'>
            <BreadCrumb home={{ url: "/support", label: "Support" }} prevlevels={prevlevels} slug={slug} />
            <h5 className='font-semibold my-3'>{capitalizeEachFirstLetterURL(slug)}</h5>
            <Accordion type="single" collapsible>
                {faqTopicsLev3[slug]?.map((topic, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className={"text-xl font-bold"}>
                            <span className='text-slate-800'>{topic.key}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc list-inside ml-3 text-lg space-y-2">
                                {topic.questions.map((question, qIndex) => {
                                    const pathName = `/support/${prevlevels?.join("/")}/${slug}/${textToURL(topic.key)}/${question.linkName}`;
                                    return (
                                        <li key={qIndex} className="text-gray-600 hover:text-primary hover:underline">
                                            <Link href={pathName}>
                                                {question.question}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}
