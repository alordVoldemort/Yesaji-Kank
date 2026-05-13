"use client";

import Image from "next/image";
import { Phone, MapPin, Mail,  } from "lucide-react"; // Re-added social & mail icons
import { useLanguage } from "@/context/LanguageContext";
import { FooterData } from "@/data/mainpage";
import map from "../../../public/MainPage/map.svg";

export default function Footer() {
  const { lang, fontClass } = useLanguage();
  const items = FooterData[lang];

  return (
    <footer className={`bg-[#232323] text-white pt-16 pb-8 px-6 md:px-20 ${fontClass}`}>
      {items.map((item, index) => (
        <div key={index} className="max-w-7xl mx-auto">
          
          {/* 1. Brand Header */}
          <div className="flex items-center gap-4 mb-12">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={48} 
              height={48} 
              className="rounded-full border border-white/20 shadow-lg" 
            />
            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              {item.trustName}
            </h2>
          </div>

          {/* 2. Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
            
            {/* Social Column - Keeping structure to match image */}
            <div className="flex gap-4">
              {/* <Instagram className="w-7 h-7 cursor-pointer hover:text-orange-400 transition-all" />
              <Facebook className="w-7 h-7 cursor-pointer hover:text-blue-500 transition-all" /> */}
            </div>

            {/* Home Menu */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-100">{item.homeTitle}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {item.homeLinks.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer transition-colors w-fit">{link}</li>
                ))}
              </ul>
            </div>

            {/* About Menu */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-100">{item.aboutTitle}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                {item.aboutLinks.map((link, i) => (
                  <li key={i} className="hover:text-white cursor-pointer transition-colors w-fit">{link}</li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-gray-100">{item.contactTitle}</h3>
              <div className="space-y-5 text-gray-400 text-sm">
                <div className="flex items-center gap-3 group">
                  <Mail size={16} />
                  <span className="hover:text-white cursor-pointer">{item.email}</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Phone size={16} />
                  <span className="hover:text-white cursor-pointer">{item.phone}</span>
                </div>
                <div className="flex items-start gap-3 group">
                  <MapPin size={20} className="shrink-0" />
                  <span className="leading-relaxed hover:text-white cursor-pointer">{item.address}</span>
                </div>
              </div>
            </div>

            {/* Map Illustration - FIXED ASPECT RATIO */}
              <div className="relative  w-full h-full rounded-[15px] overflow-hidden ">
                <Image 
                  src={map} 
                  alt="Trust Map" 
                  fill 
                  className="object-cover" 
                />
              </div>
          </div>

          {/* 3. Bottom Copyright Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[12px] text-gray-500 gap-4">
            <p>{item.rights}</p>
            <p className="italic font-medium text-gray-400">{item.tagline}</p>
          </div>

        </div>
      ))}
    </footer>
  );
}