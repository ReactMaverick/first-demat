"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import { PRODUCT_BACK1 } from '@/constants/images';

export default function ProductsSection() {
    const products = [
        {
            title: "Research Report",
            subDescription: "4 critical actions to take now to strengthen your cyber defenses",
            description: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
            backGroundImage: PRODUCT_BACK1
        },
        {
            title: "Research Report",
            subDescription: "4 critical actions to take now to strengthen your cyber defenses",
            description: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
            backGroundImage: PRODUCT_BACK1
        }, {
            title: "Research Report",
            subDescription: "4 critical actions to take now to strengthen your cyber defenses",
            description: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
            backGroundImage: PRODUCT_BACK1
        }, {
            title: "Research Report",
            subDescription: "4 critical actions to take now to strengthen your cyber defenses",
            description: "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
            backGroundImage: PRODUCT_BACK1
        },
    ];

    return (
        <div className='custom-container-padding custom-container'>
            <h2 className='hero-h1-gradiant py-2'>Products</h2>
            <div className='flex overflow-y-auto'>
                <div className="flex gap-2">
                    {products.map((product, index) => (
                        <HoverCard
                            key={index}
                            backImage={product.backGroundImage}
                            title={product.title}
                            subDescription={product.subDescription}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export function HoverCard({ backImage, title, subDescription, description }) {
    const heightWrapRef = useRef(null);
    const sliderRef = useRef(null);

    const [isHovered, setIsHovered] = useState(false);
    const [percentVisiable, setPercentVisiable] = useState(0);

    useEffect(() => {
        if (heightWrapRef.current && sliderRef.current) {
            const height = heightWrapRef.current.offsetHeight;
            const sliderHeight = sliderRef.current.offsetHeight;
            setPercentVisiable((height / sliderHeight) * 100);
        }
    }, [])
    return (
        <motion.div
            className="relative w-43 h-70 md:w-68 md:h-112 lg:w-86 lg:h-141 overflow-hidden rounded-xl shadow-lg cursor-pointer"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <motion.img
                src={backImage}
                alt="Card Image"
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />

            {/* Overlay Layer */}
            <motion.div
                ref={sliderRef}
                className="absolute left-0 w-full h-full bg-black/70 flex flex-col text-white p-4 overflow-y-auto"
                initial={{ y: "100%" }}
                animate={{ y: isHovered ? "-100%" : `-${percentVisiable + 2}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <div ref={heightWrapRef}>
                    <h6 className="mb-2 font-bold">{title}</h6>
                    <p className="mb-2 text-md">{subDescription}</p>
                </div>
                <p className="text-sm">{description}</p>
            </motion.div>
        </motion.div>
    );
}
