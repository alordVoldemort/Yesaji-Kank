"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "@/data/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const items = navLinks[lang];
  const fontClass = lang === "mr" ? "font-devanagari" : "font-poppins";

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${fontClass} ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-[64px] sm:h-[68px] lg:h-[70px] items-center justify-between px-4 lg:px-10 max-w-[1600px]">
        
        {/* LEFT: Logo + Org Name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/main_logo.png"
            alt="Logo"
            width={44}
            height={44}
            className="rounded-full object-contain"
            priority
          />
          <span className="hidden xl:block whitespace-nowrap text-[#1F2937] font-bold text-[15px] lg:text-[16px] tracking-tight">
            सरनोबत येसाजी कंक ट्रस्ट
          </span>
        </Link>

        {/* CENTER: Desktop Menu Items */}
        <div ref={dropdownRef} className="hidden lg:flex items-center flex-1 justify-center">
          <ul className={`flex items-center ${lang === "mr" ? "gap-6 xl:gap-10" : "gap-4 xl:gap-8"}`}>
            {items.map((item) => (
              <li key={item.href} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 text-gray-800 font-medium transition-all hover:text-orange-600"
                    >
                      {/* Decorative Brackets */}
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gray-400 group-hover:border-orange-500 transition-colors" />
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gray-400 group-hover:border-orange-500 transition-colors" />
                      
                      <span className={lang === 'mr' ? "text-[16px]" : "text-[14px]"}>{item.label}</span>
                      <motion.svg
                        animate={{ rotate: openDropdown === item.href ? 180 : 0 }}
                        className="w-3.5 h-3.5"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-3 w-52 bg-white shadow-xl border border-gray-100 rounded-lg overflow-hidden py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-5 py-2.5 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors text-[14px]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center px-3 py-1.5 text-gray-800 font-medium transition-all hover:text-orange-600"
                  >
                    <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-gray-400 group-hover:border-orange-500 transition-colors" />
                    <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-gray-400 group-hover:border-orange-500 transition-colors" />
                    <span className={lang === 'mr' ? "text-[16px]" : "text-[14px]"}>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT: Language Toggle + Mobile Toggle */}
        <div className="flex items-center gap-4 lg:gap-6 shrink-0">
          
          {/* Language Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Marathi */}
            <button
              onClick={() => setLang("mr")}
              className="flex flex-col items-center group"
            >
              <span className={`text-[15px] font-medium transition-colors ${lang === "mr" ? "text-orange-600" : "text-gray-500 hover:text-orange-400"}`}>
                मराठी
              </span>
              <motion.div 
                className="h-[2px] bg-orange-600" 
                animate={{ width: lang === "mr" ? "100%" : "0%" }}
              />
            </button>

            <span className="text-gray-300 font-light">|</span>

            {/* English */}
            <button
              onClick={() => setLang("en")}
              className="flex flex-col items-center group"
            >
              <span className={`text-[15px] font-medium transition-colors ${lang === "en" ? "text-orange-600" : "text-gray-500 hover:text-orange-400"}`}>
                English
              </span>
              <motion.div 
                className="h-[2px] bg-orange-600" 
                animate={{ width: lang === "en" ? "100%" : "0%" }}
              />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block h-0.5 w-6 bg-gray-800" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block h-0.5 w-6 bg-gray-800" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block h-0.5 w-6 bg-gray-800" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <ul className="flex flex-col text-[15px] font-medium text-gray-800">
              {items.map((item) => (
                <li key={item.href} className="border-b border-gray-50">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.href ? null : item.href)}
                        className="w-full flex items-center justify-between px-6 py-4 hover:bg-orange-50 transition-colors"
                      >
                        <span>{item.label}</span>
                        <motion.svg 
                          animate={{ rotate: mobileOpenDropdown === item.href ? 180 : 0 }}
                          className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {mobileOpenDropdown === item.href && (
                          <motion.ul 
                            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="block pl-10 pr-6 py-3 text-gray-600 hover:text-orange-600 border-b border-white"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-6 py-4 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              
              {/* Language Toggle Mobile */}
              <li className="flex items-center gap-4 px-6 py-5 bg-orange-50/50">
                <button
                  onClick={() => { setLang("mr"); setMenuOpen(false); }}
                  className={`px-4 py-1.5 rounded-full text-[14px] ${lang === "mr" ? "bg-orange-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200"}`}
                >
                  मराठी
                </button>
                <button
                  onClick={() => { setLang("en"); setMenuOpen(false); }}
                  className={`px-4 py-1.5 rounded-full text-[14px] ${lang === "en" ? "bg-orange-600 text-white shadow-md" : "bg-white text-gray-600 border border-gray-200"}`}
                >
                  English
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}