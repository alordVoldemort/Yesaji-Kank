"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroTexts } from "@/data/site-data";
import extrainfo from "../../../public/MainPage/extrainfo.png"
import { ExtraInfo, MoreInfo, Trust, History, Work, Shivkalin, Card, Prashansapatr, Feedback, CardText } from "@/data/mainpage";
import { useLanguage } from "@/context/LanguageContext";
import trust from "../../../public/MainPage/Trust.svg"
import moreinfo from "../../../public/MainPage/MoreInfo.svg"
import Home from "../../../public/MainPage/home.svg"
import card from "../../../public/MainPage/card.svg"
import mvp from "../../../public/MainPage/mpl.svg"
import child from "../../../public/MainPage/child.svg"
import women from "../../../public/MainPage/women.svg"
import oldcard from "../../../public/MainPage/oldcard.svg"
import feedback from "../../../public/MainPage/feedback.svg"
import oldcard1 from "../../../public/MainPage/oldcard1.svg"


export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { lang, fontClass } = useLanguage()

  const items = ExtraInfo[lang]
  const trusts = Trust[lang]
  const moreInfo = MoreInfo[lang]
  const Histories = History[lang]
  const works = Work[lang]
  const shivkalins = Shivkalin[lang]
  const Cards = Card[lang]
  const PrashansaPatrs = Prashansapatr[lang]
  const testimonials = Feedback[lang];
  const CardTexts = CardText[lang]

  // Double the list for seamless infinite scrolling
  const scrollList = [...testimonials, ...testimonials];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroTexts.length);
        setVisible(true);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const current = heroTexts[index];

  const circleImages = [
    "./MainPage/weapon.svg",
    "./MainPage/coin.svg",
    "./MainPage/letter.svg"
  ]

  return (
    <div>
      <section className="relative flex h-screen flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* GIF background */}
        <Image
          src="/hero_vi.gif"
          alt=""
          fill
          unoptimized
          className="object-cover object-center"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-4 mt-46">
          <p
            className={`${current.font} text-5xl md:text-6xl font-bold tracking-wide transition-all duration-500 ${visible ? "opacity-100 text-gray-950" : "opacity-0 text-white"
              }`}
          >
            {current.text}
          </p>

          <Image
            src="/yasaji.png"
            alt="Yesaji"
            width={220}
            height={220}
            className="object-contain"
            priority
          />

          <div
            className="w-120 h-[4px] rounded-full"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, #f97316 40%, #ea580c 50%, #f97316 60%, transparent 100%)",
            }}
          />
          <div className="relative w-fit ">
            <Image
              src={extrainfo}
              alt="extrainfo"
              width={350}
              className=" rounded-[28px]"
            />
            <div className="absolute flex flex-col inset-0 ">
              {
                items.map((item, index) => (
                  <div key={index} >
                    <p className="font-bold mt-9 ">"{item.name}"</p>
                    <p>{item.description}</p>
                    <div className="flex gap-4 justify-center mt-8 ">
                      <button className="w-[133px]  h-[35px] bg-white border border rounded-[6px] text-orange-500 font-semibold transistion-all  duration-300 hover:bg-orange-500 hover:text-white">{item.btn1}</button>
                      <button className="w-[133px]  h-[35px] bg-white border border rounded-[6px] text-orange-500 font-semibold transistion-all  duration-300 hover:bg-orange-500 hover:text-white">{item.btn2}</button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(177.14deg,_#838366_0.89%,_#EED5B1_49.41%,_#7E868E_97.93%)] h-auto overflow-hidden pb-20">
        {/* Trust Section */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {trusts.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>
            ))}
          </div>
        </div>

        {/* More Info Section */}
        <div className="flex justify-center mt-20">
          <div className="relative w-[500px] group cursor-pointer">
            <Image src={moreinfo} alt="parchment" width={500} height={450} className="block drop-shadow-xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-16 md:p-20">
              {moreInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                  <div className="transition-all duration-700 ease-in-out opacity-100 mb-8 overflow-hidden group-hover:opacity-0 group-hover:max-h-0 group-hover:mb-0">
                    <div className="text-[#4e342e] text-[15px] md:text-[17px] font-semibold leading-[1.6] text-start tracking-wide">
                      {item.desc}
                      <p className="mt-2 font-bold">{item.name}</p>
                    </div>
                  </div>
                  <button className="bg-[#bd512a] text-white pl-8 pr-12 py-3.5 rounded-full text-[15px] font-bold shadow-lg flex items-center justify-between min-w-[190px] transition-all duration-600 ease-in-out -translate-x-20 group-hover:translate-x-0 group-hover:scale-110">
                    <span>{item.btn}</span>
                    <span className="absolute right-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* History Header */}
        <div className="flex justify-center items-center relative mt-10">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {Histories.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>
            ))}
          </div>
        </div>
        <div className="text-center mt-2 px-10">
          {Histories.map((item, i) => <p key={i}>{item.desc}</p>)}
        </div>

        <div>
          <Image src={Home} alt="Home" width={434} className="mx-auto mt-4" />
        </div>

        {/* Work Header */}
        <div className="flex justify-center items-center relative mt-10">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {works.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>
            ))}
          </div>
        </div>
        <div className="text-center mt-14 px-10">
          {works.map((item, i) => <p key={i}>{item.desc}</p>)}
        </div>

        {/* --- Updated Work Gallery Section --- */}
        <div className="max-w-7xl mx-auto px-6 mt-20 pb-20">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5">
            {[
              { src: card, alt: "Agriculture" },
              { src: mvp, alt: "Events" },
              { src: child, alt: "Education" },
              { src: women, alt: "Training" }
            ].map((item, i) => (
              <div 
                key={i} 
                className="group relative flex-1 min-w-[240px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl cursor-pointer"
              >
                {/* Background Image */}
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />

                {/* --- HOVER OVERLAY (Semi-transparent black box with top border) --- */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#5252529E]    opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8">
                  
                  {/* Title from CardTexts data */}
                  <h3 className="text-white text-1xl md:text-2xl  mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {CardTexts[i]?.name}
                  </h3>
                  
                  {/* Description from CardTexts data */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {CardTexts[i]?.desc || (lang === 'mr' ? "समृद्ध शेती, सशक्त शेतकरी आणि उज्ज्वल भविष्य." : "Prosperous farming, empowered farmers and a bright future.")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shivkalin Section */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {shivkalins.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>
            ))}
          </div>
        </div>
        <div className="text-center mt-14 px-10">
          {shivkalins.map((item, i) => <p key={i}>{item.desc}</p>)}
        </div>

        {/* Armor Scroll Cards */}
        <div className={`flex flex-wrap justify-center gap-8 py-20 px-4 ${fontClass}`}>
          {Cards.map((item, index) => (
            <div key={index} className="relative w-[320px] h-[450px] flex flex-col items-center group">
              <div className="absolute inset-0 z-0">
                <Image src={oldcard} alt="scroll background" fill className="object-contain drop-shadow-2xl" />
              </div>
              <div className="mt-24 w-44 h-44 relative rounded-full overflow-hidden">
                <Image src={circleImages[index]} alt={item.name} fill className="object-cover" />
              </div>
              <div className="mt-auto mb-20 px-6 text-center inset-0 relative">
                <h3 className="text-2xl font-bold text-[#2d1b0d] tracking-tight">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section Header */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {PrashansaPatrs.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>
            ))}
          </div>
        </div>

        {/* --- INFINITE SCROLL FEEDBACK SECTION --- */}
        <div className="py-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {scrollList.map((item, index) => (
              <div
                key={index}
                className="relative w-[350px] md:w-[450px] min-h-[280px] flex-shrink-0 flex flex-col"
              >
                <div className="absolute inset-0 z-0">
                  <Image
                    src={feedback}
                    alt="feedback background"
                    fill
                    className="object-fill drop-shadow-lg"
                  />
                </div>

                <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
                  <h4 className="text-xl md:text-2xl font-bold text-[#2d1b0d] mb-4 border-b border-[#8b5e34]/20 pb-2">
                    {item.name}
                  </h4>
                  <p className="text-[#3d2b1f] text-[15px] md:text-[16px] leading-relaxed text-justify">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}