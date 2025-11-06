import { MoveUpRight } from 'lucide-react';
import React from 'react'

export default function PricingSection() {
    const data = [
        {
            title: "Monthly Subscription",
            descreption: "Gives You The Most Freedom. Perfect If You Want To Try The Membership Out.",
            noteText: "Pause Or Cancel Any Time",
            demandText: "Most Popular",
            price: "$5990",
            priceInterval: "/Month",
            offerBTNText: "Start Today",
            features: [
                "Unlimited Requests",
                "Unlimited Brands",
                "50 First Demat Talent (Designer, Developer...)",
                "Access To Other Talents (Strategy, Motion...)",
                "Shared Slack Channel",
            ],
            featuresTextStyle: "text-gray-600",
            cardBackground: "bg-white",
            titleTextStyle: "text-gray-800",
            priceTextStyle: "text-blue-600",
            priceIntervalStyle: "text-pink-500",
            buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
        },
        {
            title: "Monthly Subscription",
            descreption: "Gives You The Most Freedom. Perfect If You Want To Try The Membership Out.",
            noteText: "Pause Or Cancel Any Time",
            demandText: "Pro Plus",
            price: "$8990",
            priceInterval: "/Month",
            offerBTNText: "Start Today",
            features: [
                "Unlimited Requests",
                "Unlimited Brands",
                "50 First Demat Talent (Designer, Developer...)",
                "Access To Other Talents (Strategy, Motion...)",
                "Shared Slack Channel",
            ],
            featuresTextStyle: "text-gray-600",
            cardBackground: "bg-white",
            titleTextStyle: "text-gray-800",
            priceTextStyle: "text-blue-600",
            priceIntervalStyle: "text-pink-500",
            buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
        },
        {
            title: "Design Sprints",
            descreption: "Need A Full Team To Move Faster? Get Your MVP Designed In 4 Weeks Max!",
            noteText: "Get It Done Right And Fast",
            demandText: "Custom",
            price: "Contact Us",
            priceInterval: "",
            offerBTNText: "Book A Call",
            features: [
                "Go To Market In Weeks",
                "Unlimited Requests",
                "Unlimited Brands",
                "Multiple Onboart Talents",
                "Shared Slack Channel",
            ],
            featuresTextStyle: "text-white",
            cardBackground: "bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c]",
            titleTextStyle: "text-white",
            priceTextStyle: "text-blue-400",
            priceIntervalStyle: "text-blue-300",
            buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
        },
    ];
    return (
        <section className="custom-container custom-container-padding bg-gray-50">
            <h3 className='hero-h1-gradiant text-center pb-6'>Pricing</h3>
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Basic Plan */}
                    {data.map((item, index) => {
                        return (<div key={index} className={`relative rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 ${item.cardBackground}`}>
                            <span className='px-6 my-3 rounded-full inline-block py-3 bg-linear-to-l from-primary to-[#C92B95] text-white font-bold'>{item.demandText}</span>
                            <div className="mb-8">
                                <h6 className={`mb-2 font-bold ${item.titleTextStyle}`}>{item.title}</h6>
                                <p className={`text-sm mb-4 ${item.featuresTextStyle}`}>{item.descreption}</p>
                                <div className="flex items-baseline">
                                    <span className="hero-h1-gradiant text-4xl font-bold">{item.price}</span>
                                    {item.priceInterval && <span className="hero-h1-gradiant text-lg ml-1">{item.priceInterval}</span>}
                                </div>
                                <p className={`text-sm mt-2 ${item.featuresTextStyle}`}>{item.noteText}</p>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <svg className={`h-5 w-5 mr-2 mt-0.5 ${item.cardBackground === 'bg-white' ? 'text-blue-500' : 'text-blue-300'}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className={item.featuresTextStyle}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`py-3 px-6 rounded-full font-medium transition-colors ${item.buttonStyle} flex items-center justify-center gap-2`}>
                                {item.offerBTNText}
                                <MoveUpRight width={30} height={30} className='p-1 bg-white text-blue-600 rounded-full' />
                            </button>
                        </div>)
                    })}
                </div>
            </div>
        </section>
    )
}
