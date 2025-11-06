"use client";
import { WHY_FIRST_DEMAT } from '@/constants/images';
import Image from 'next/image';
import React from 'react'

export default function WhyFirstDematSection() {

    const data = [
        {
            gradient: "bg-gradient-to-r from-blue-600 to-blue-400",
            heading: "We Are A Design Leader",
            bannerImage: WHY_FIRST_DEMAT,
            cards: [
                {
                    title: "Meeting with Orizon was our favorite part of the week!",
                    description: "No One's Perfect, And That's Okay. With You, Though? Maybe Our Fun. We've Worked With Incredible Teams And Built Fantastic Relationships."
                },
                {
                    title: "That's what we call a stellar reputation",
                    description: "This Is Our Mission. We Put Our All Into Every Project Because Everything We Do Makes A Positive Impact In The Real World."
                },
                {
                    title: "Committed to putting a smile on people's faces",
                    description: "We Do Now That's What We Are, And We Can't Wait To Make You Feel The Same Way. We've Worked With Incredible Teams."
                },
                {
                    title: "No One's Perfect",
                    description: "And That's Okay. With You, Though? Maybe Our Fun. We've Worked With Incredible Teams And Built Fantastic Relationships."
                }
            ]
        },
        {
            gradient: "bg-gradient-to-r from-purple-600 to-pink-500",
            heading: "Pushing Boundaries & Influencing Designers",
            bannerImage: WHY_FIRST_DEMAT,
            cards: [
                {
                    title: "Meeting with Orizon was our favorite part of the week!",
                    description: "No One's Perfect, And That's Okay. With You, Though? Maybe Our Fun. We've Worked With Incredible Teams And Built Fantastic Relationships."
                },
                {
                    title: "That's what we call a stellar reputation",
                    description: "This Is Our Mission. We Put Our All Into Every Project Because Everything We Do Makes A Positive Impact In The Real World."
                },
                {
                    title: "Committed to putting a smile on people's faces",
                    description: "We Do Now That's What We Are, And We Can't Wait To Make You Feel The Same Way. We've Worked With Incredible Teams."
                }
            ]
        },
        {
            gradient: "bg-gradient-to-r from-emerald-500 to-teal-400",
            heading: "Creating Impactful Digital Solutions",
            bannerImage: WHY_FIRST_DEMAT,
            cards: [
                {
                    title: "Innovation at its finest",
                    description: "Our team brings creative solutions to complex problems, delivering results that exceed expectations."
                },
                {
                    title: "Customer-centric approach",
                    description: "We put our clients first, ensuring every project aligns perfectly with their vision and goals."
                },
                {
                    title: "Cutting-edge technology",
                    description: "Leveraging the latest tools and technologies to build future-proof solutions for our clients."
                },
                {
                    title: "Proven track record",
                    description: "Successfully delivered numerous projects that have transformed businesses and user experiences."
                }
            ]
        }
    ]
    return (
        <section className='custom-container-padding custom-container'>
            {
                data.map((item, index) => {
                    const classString = `${item.gradient} rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl xl:rounded-[2.5rem] sticky top-[80px] mb-8 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 max-h-[90vh] overflow-y-auto scrollbar-hide`;
                    return (
                        <div key={index} className={classString}>
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-4/10 order-2 md:order-1">
                                    <h2 className="text-3xl md:text-4xl text-white font-bold">{item.heading}</h2>
                                </div>
                                <div className="w-full md:w-6/10 order-1 md:order-2">
                                    <Image
                                        height={500}
                                        width={500}
                                        src={item.bannerImage}
                                        alt="Design leadership"
                                        className="rounded-lg w-full h-auto object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 px-4 md:px-8 lg:px-10 xl:px-12">
                                <div className="flex scrollbar-hide flex-col lg:flex-row lg:overflow-x-auto gap-4 lg:pb-4 lg:-mx-4 lg:px-4 lg:snap-x lg:snap-mandatory">
                                    {item.cards.map((card, cardIndex) => (
                                        <div
                                            key={cardIndex}
                                            className="bg-transparent backdrop-blur-sm rounded-xl px-0 md:px-4 py-4 lg:min-w-[300px] lg:snap-start"
                                        >
                                            <p className="text-white/90 mb-3">{card.title}</p>
                                            <p className="text-white/60 text-sm">{card.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </section>
    )
}
