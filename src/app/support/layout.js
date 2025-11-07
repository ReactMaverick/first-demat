import Accordion from "@/components/Accordion/Accordion";
import TopQuestionsSection from "@/PageComponents/Support/Components/TopQuestionsSection";
import { MoveUpRight, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const faqs = [
    {
        question: "Account Opening",
        answer:
            "To open a Demat account, you need to fill out the account opening form, provide necessary KYC documents, and submit them to our branch or through our online portal. Our team will guide you through the process and help you get started.",
    },
    {
        question: "Your First Demat Account",
        answer:
            "Once your Demat account is opened, you will receive your account details via email or post. You can log in to our trading platform using these details and start trading. If you need assistance, our support team is here to help you.",
    },
    {
        question: "Kite",
        answer:
            "Kite is our advanced trading platform that offers a seamless trading experience. You can access Kite through your web browser or download the mobile app for trading on the go. Kite provides real-time market data, advanced charting tools, and a user-friendly interface.",
    },
    {
        question: "Funds",
        answer:
            "Managing funds in your Demat account is easy with our platform. You can add funds through various payment methods, including net banking, UPI, and more. Withdrawals can also be initiated directly from your account dashboard. For any issues related to fund management, our support team is available to assist you.",
    },
    {
        question: "Console",
        answer:
            "Console is our comprehensive back-office platform that allows you to manage your investments, view reports, and access various account-related services. You can log in to Console using your Demat account credentials. If you encounter any issues or have questions about using Console, our support team is ready to help.",
    },
    {
        question: "Coin",
        answer:
            "Coin is our cryptocurrency trading platform that allows you to buy, sell, and trade various cryptocurrencies. You can access Coin through your web browser or mobile app. Coin provides real-time market data, advanced charting tools, and a user-friendly interface.",
    },
];


export default function layout({ children }) {
    return (
        <section>
            <div className="custom-container custom-container-padding space-y-6 md:space-y-8 lg:space-y-[30px]">
                {/* Top Queries section */}
                <TopQuestionsSection />

                {/* Bottom Support section */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[30px] w-full">
                    {/* Support FAQs  */}
                    <div className="w-4/6">
                        <Accordion faqs={faqs} />
                    </div>
                    {children}
                </div>
            </div>
        </section>
    )
}
