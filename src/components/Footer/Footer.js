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
    { name: "Support", href: "#support" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
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
            <h5 className="text-white font-semibold mb-4">Company</h5>
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
            <h5 className="text-white font-semibold mb-4">Products</h5>
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
            <h5 className="text-white font-semibold mb-4">Platform</h5>
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
            <h5 className="text-white font-semibold mb-4">Links</h5>
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
                <h4 className="text-white font-medium mb-1">Address</h4>
                <p className="text-sm text-gray-400">
                  123 Finance Street, Business District,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <p className="text-sm text-gray-400">
                  +91 1800 123 4567<br />
                  Mon-Fri: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <p className="text-sm text-gray-400">
                  support@firstdemat.com<br />
                  info@firstdemat.com
                </p>
              </div>
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
