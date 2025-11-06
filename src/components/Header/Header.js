"use client";

import { getImgPath } from "@/utils/images";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const DropdownItem = ({ title, items, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <li className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-3 hover:text-primary transition-colors cursor-pointer"
        >
          {title}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="pl-4 overflow-hidden"
            >
              {items.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block py-2 text-sm hover:text-primary transition-colors"
                >
                  <div className="font-medium">{item.name}</div>
                  {item.description && (
                    <div className="text-xs text-gray-500 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
        {title}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[240px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="py-2">
              {items.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-6 py-3 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div>
                      <div className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {item.name}
                      </div>
                      {item.description && (
                        <div className="text-sm text-gray-500 mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productsItems = [
    {
      name: "Trading",
      description: "Advanced trading platform",
      href: "#trading",
    },
    {
      name: "Investment",
      description: "Smart investment tools",
      href: "#investment",
    },
    {
      name: "Portfolio",
      description: "Manage your portfolio",
      href: "#portfolio",
    },
    {
      name: "Analytics",
      description: "Market insights & data",
      href: "#analytics",
    },
  ];

  const platformItems = [
    {
      name: "Web",
      //   description: "Trade on any browser",
      href: "#web",
    },
    {
      name: "App",
      //   description: "iOS & Android apps",
      href: "#mobile",
    },
  ];

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="custom-container py-4 md:py-[18px]">
        <nav className="flex flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src={getImgPath("/images/logo/first-demat-logo.png")}
              alt="First Demat Logo Image"
              width={1258}
              height={228}
              className="w-[150px] h-[28px] sm:w-[180px] sm:h-[33px] md:w-[220px] md:h-[40px]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex px-[48px]">
            <ul className="flex flex-row items-center gap-[14px]">
              <DropdownItem title="Products" items={productsItems} />
              <DropdownItem title="Platform" items={platformItems} />
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                <Link href="/support">Support</Link>
              </li>
              <li className="hover:text-primary transition-colors cursor-pointer">
                Contact us
              </li>
            </ul>
          </div>

          {/* Desktop Login Button */}
          <button className="hidden lg:block primary-button">Login</button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-gray-100 mt-4">
                <ul className="flex flex-col space-y-1">
                  <DropdownItem
                    title="Products"
                    items={productsItems}
                    isMobile={true}
                  />
                  <DropdownItem
                    title="Platform"
                    items={platformItems}
                    isMobile={true}
                  />
                  <li className="py-3 hover:text-primary transition-colors cursor-pointer">
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li className="py-3 hover:text-primary transition-colors cursor-pointer">
                    <Link href="/support">Support</Link>
                  </li>
                  <li className="py-3 hover:text-primary transition-colors cursor-pointer">
                    Contact us
                  </li>
                </ul>
                <button className="primary-button w-full mt-4">Login</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
