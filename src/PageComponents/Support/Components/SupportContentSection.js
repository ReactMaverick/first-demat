import Accordion from "@/components/Accordion/Accordion";
import { MoveUpRight, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const SupportContentSection = () => {
  const links = [
    { name: "Track account opening", href: "#" },
    { name: "Track segment activation", href: "#" },
    { name: "Intraday margins", href: "#" },
    { name: "Kite user manual", href: "#" },
    { name: "Learn how to create a ticket", href: "#" },
  ];

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
  return (
    <>
      {/* Quick links & card  */}
      <div className="w-2/6">
        <div className="border-2 border-gray-200 rounded-xl p-4 md:p-6 lg:p-[20px] space-y-4 lg:space-y-[20px]">
          <h3 className="hero-h1-gradiant pb-3 md:pb-4 lg:pb-[18px] border-b-2 border-b-gray-400 text-center lg:text-left">
            Quick Links
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-0">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="block py-2 lg:py-[10px] hover:text-primary transition-colors font-[500] text-sm md:text-base text-center lg:text-left"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Contact Us Card  */}
        <div
          className="mt-4 md:mt-6 bg-cover bg-center rounded-xl p-4 md:p-6 text-white relative overflow-hidden"
          style={{
            backgroundImage: `url('/images/support-contact-us-background-image.png')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00133B] to-[#00133B]/60"></div>
          <div className="relative z-10 text-center lg:text-left">
            <h5 className="text-lg md:text-xl font-bold mb-3 md:mb-[16px]">Contact Support</h5>
            <p className="text-white/90 text-xs md:text-sm mb-6 md:mb-[40px]">
              24/7 Help From Our Support Staff
            </p>
            <button className="primary-button flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start text-sm! md:text-base! text-nowrap">
              Contact Us
              <span className="py-1 md:py-[4px] px-1 md:px-[6px] rounded-full bg-white inline-block">
                <MoveUpRight className="text-primary w-3 h-3 md:w-4 md:h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default SupportContentSection;
