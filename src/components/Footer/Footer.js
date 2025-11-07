"use client";

import { getImgPath } from "@/utils/images";
import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contactUs" },

  ];

  const products = [
    { name: "Trading", href: "#trading" },
    { name: "Investment", href: "#investment" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Analytics", href: "#analytics" },
  ];

  const Platform = [
    { name: "Web", href: "#web" },
    { name: "Mobile", href: "#mobile" }
  ];

  const userfullLinks = [
    { name: "Terms of Service", href: "/terms-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Support", href: "/support" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="custom-container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Image
              src={getImgPath("/images/logo/first-demat-logo.png")}
              alt="First Demat Logo"
              width={1258}
              height={228}
              className="w-[180px] h-[33px] mb-4 brightness-0 invert"
            />
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for seamless trading and investment solutions.
              Start your financial journey with us today.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white font-medium mb-4">Company</h6>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h6 className="text-white font-medium mb-4">Products</h6>
            <ul className="space-y-3">
              {products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h6 className="text-white font-medium mb-4">Platform</h6>
            <ul className="space-y-3">
              {Platform.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* userfullLinks */}
          <div>
            <h6 className="text-white font-medium mb-4">Links</h6>
            <ul className="space-y-3">
              {userfullLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h6 className="text-white font-medium mb-1">Address</h6>
                <p className="text-sm text-gray-400">
                  123 Finance Street, Business District,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h6 className="text-white font-medium mb-1">Phone</h6>
                <p className="text-sm text-gray-400">
                  +91 1800 123 4567<br />
                  Mon-Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h6 className="text-white font-medium mb-1">Email</h6>
                <p className="text-sm text-gray-400">
                  support@firstdemat.com<br />
                  info@firstdemat.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Disclosure and Regulatory Information */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="space-y-6 text-xs text-gray-400">
            {/* Risk Disclosures */}
            <div>
              <h6 className="text-white font-medium mb-3">Risk disclosures on derivatives –</h6>
              <ul className="space-y-2 ml-4" style={{ listStyleType: 'disc' }}>
                <li>9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.</li>
                <li>On an average, loss making registered net trading loss close to ₹ 50,000.</li>
                <li>Over and above the net trading losses incurred, loss makers expended an additional 28% of net trading losses as transaction costs.</li>
              </ul>
              <p className="mt-3">
                Those making net trading profits, incurred between 15% to 50% of such profits as transaction cost.
                <span className="font-medium"> ATTENTION - A note from the Regulators for Investors</span>
              </p>
            </div>

            {/* Regulatory Information */}
            <ul className="space-y-2 ml-4" style={{ listStyleType: 'disc' }}>
              <li>Stock brokers can accept securities as margin from clients only by way of pledge in the depository system, with effect from Sept 1, 2020.</li>
              <li>Update your mobile number and email Id with your stock broker/depository participant and receive OTP directly from depository on your email id and/or mobile number to create pledge.</li>
              <li>Pay 20% upfront margin of the transaction value to trade in the Cash market segment.</li>
              <li>Investors may please refer to the Exchange's Frequently Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191 and 20200831-17 dated July 31, 2020. NSE/INSP/45534 and 20200831-45 dated Aug 31, 2020 and 20200831-2 dated Aug 31, 2020 and other guidelines issued from time to time in this regard.</li>
              <li>Check your Securities/MF/Bonds in the consolidated account statement issued by NSDL/CDSL every month.</li>
            </ul>

            {/* SEBI Registration */}
            <div className="space-y-2">
              <p>
                <span className="text-white font-medium">SEBI Stock Broker Registration No:</span> INZ000217622 |
                <span className="text-white font-medium"> Depository Participant (CDSL) ID:</span> IN-DP-730-2024 |
                <span className="text-white font-medium"> Registration Number of the Research Analyst:</span> INH000002172
              </p>
              <p>
                <span className="text-white font-medium">Exchange Membership No:</span> NSE: 90371 | BSE: 5897
              </p>
            </div>

            {/* Registered Office */}
            <div>
              <p>
                <span className="text-white font-medium">Registered Office:</span> Aartya Broking Private Limited, 3rd Floor, Brigade Metropolis, Summit B, Whitefield, Bangalore, Karnataka – 560048. Contact Number - 080-47002788.
              </p>
            </div>

            {/* Contact Information for Grievances */}
            <div>
              <p>
                In case of grievance for any of the services rendered by Aartya Broking Private Limited, please write to
                <a href="mailto:grievances@aartya.com" className="text-blue-400 hover:text-blue-300">grievances@aartya.com</a> (for NSE and BSE) or <a href="mailto:dpgrievances@aartya.com" className="text-blue-400 hover:text-blue-300">dpgrievances@aartya.com</a> (for CDSL Participant). Please ensure you fill in the SCORES portal as prescribed by SEBI, vide link - <a href="https://scores.sebi.gov.in" className="text-blue-400 hover:text-blue-300">https://scores.sebi.gov.in</a> | Complaint Status and Contact Number: 080-47002788.
              </p>
            </div>

            {/* KYC Information */}
            <div className="space-y-2">
              <p>
                KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI-registered intermediary (broker, DP, Mutual Fund, etc.),
                you need not undergo the same process again when you approach another intermediary.
              </p>
              <p>
                No need to issue cheques by investors while subscribing to an IPO. Just write the bank account number and sign the application form to authorise your bank to make a payment in case of allotment.
                No worries for refund as the money remains in the investor's account.
              </p>
            </div>

            {/* UCC and Mobile Updates */}
            <div>
              <p>
                "Prevent Unauthorised Transactions in your demat account → Update your Mobile Number with your Depository Participant.
                Receive alerts on your Registered Mobile for all debit and other important transactions in your demat account directly from CDSL on the same day" -
                Issued in the interest of investors."
              </p>
            </div>

            {/* Important Links */}
            <div className="pt-4 border-t border-gray-800">
              <p className="mb-2">
                <span className="text-white font-medium">Important information:</span> <a href="#" className="text-blue-400 hover:text-blue-300">Policies and Procedures</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Terms & Conditions</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Anti Money Laundering Policy</a> | <a href="#" className="text-blue-400 hover:text-blue-300">RMS Policy</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Filing complaints on SCORES - Easy & quick</a> | <a href="#" className="text-blue-400 hover:text-blue-300">KYC Trading + DP account</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Complaints</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Track and Disclosure</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Personal Information</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Investor Risk Reduction Access ISRRD</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Saarthi 2.0 Mobile</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Surveillance Policy</a> | <a href="#" className="text-blue-400 hover:text-blue-300">LGFT and GTC order facility</a> | <a href="#" className="text-blue-400 hover:text-blue-300">Most Important Terms and Conditions (MITC)</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} First Demat. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Securities and trading services provided by First Demat Securities Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
