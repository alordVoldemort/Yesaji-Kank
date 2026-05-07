"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const [lang, setLang] = useState<"mr" | "en">("mr");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = navLinks[lang];
  const fontClass = lang === "mr" ? "font-devanagari" : "font-poppins";

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${fontClass} ${
        scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      {/* ── Single row: logo | menu (center) | lang toggle ── */}
      <div className="mx-auto flex h-[70px] items-center justify-between px-6 md:px-12">

        {/* Left: logo + org name */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/main_logo.png"
            alt="सरनोबत येसाजी कंक ट्रस्ट"
            width={48}
            height={48}
            className="rounded-full object-contain"
            priority
          />
          <span className="font-semibold text-base leading-tight text-gray-800 hidden lg:block">
            सरनोबत येसाजी कंक ट्रस्ट
          </span>
        </Link>

        {/* Center: menu items */}
        <ul className="hidden md:flex items-center gap-3 text-sm">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-btn relative inline-flex items-center px-2 py-1 whitespace-nowrap text-[13px] font-medium text-gray-800 transition-colors duration-300 group"
              >
                {/* top-left bracket */}
                <span className="pointer-events-none absolute top-[1px] left-[1px] w-[5px] h-[5px] border-t border-l border-gray-500 group-hover:border-[#d4a017] transition-colors duration-300 z-20" />
                {/* bottom-right bracket */}
                <span className="pointer-events-none absolute bottom-[1px] right-[1px] w-[5px] h-[5px] border-b border-r border-gray-500 group-hover:border-[#d4a017] transition-colors duration-300 z-20" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: language toggle + hamburger */}
        <div className="flex items-center gap-3">
          {/* Language toggle — desktop */}
          <div className="text-sm hidden md:flex items-center gap-2 text-gray-700 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <button
              onClick={() => setLang("mr")}
              className="flex flex-col items-center gap-[3px] transition duration-300 hover:text-orange-500"
            >
              <span className={lang === "mr" ? "text-gray-900 font-semibold" : "text-gray-500"}>
                मराठी
              </span>
              <span
                className={`h-[3px] rounded-full bg-orange-500 transition-all duration-300 ${
                  lang === "mr" ? "w-full" : "w-0"
                }`}
              />
            </button>
            <span className="w-[2px] h-4 bg-gray-700 rounded-full" />
            <button
              onClick={() => setLang("en")}
              className="flex flex-col items-center gap-[3px] transition duration-300 hover:text-orange-500"
            >
              <span className={lang === "en" ? "text-gray-900 font-semibold" : "text-gray-500"}>
                English
              </span>
              <span
                className={`h-[3px] rounded-full bg-orange-500 transition-all duration-300 ${
                  lang === "en" ? "w-full" : "w-0"
                }`}
              />
            </button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-1"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col text-sm text-gray-800">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 border-b border-gray-100 hover:text-orange-500 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 px-6 py-3 text-gray-700">
              <button
                onClick={() => setLang("mr")}
                className={`transition duration-300 ${
                  lang === "mr" ? "text-orange-600 font-semibold" : "hover:text-orange-500"
                }`}
              >
                मराठी
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLang("en")}
                className={`transition duration-300 ${
                  lang === "en" ? "text-orange-600 font-semibold" : "hover:text-orange-500"
                }`}
              >
                English
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
