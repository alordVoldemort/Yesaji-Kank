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
import flag from "../../../public/MainPage/flag.svg"

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
        <Image 
            src="/hero_vi.gif" 
            alt="Background Animation" 
            fill 
            unoptimized 
            className="object-cover object-center" 
            priority 
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="relative z-10 flex flex-col items-center gap-4 mt-46">
          <p className={`${current.font} text-5xl md:text-6xl font-bold tracking-wide transition-all duration-500 ${visible ? "opacity-100 text-gray-950" : "opacity-0 text-white"}`}>{current.text}</p>
          <Image src="/yasaji.png" alt="Yesaji Statue Bust" width={220} height={220} className="object-contain" priority />
          <div className="w-120 h-[4px] rounded-full" style={{ background: "linear-gradient(to right, transparent 0%, #f97316 40%, #ea580c 50%, #f97316 60%, transparent 100%)" }} />
          <div className="relative w-fit ">
            <Image src={extrainfo} alt="Information Parchment" width={350} className=" rounded-[28px]" />
            <div className="absolute flex flex-col inset-0 ">
              {items.map((item, index) => (
                <div key={index} >
                  <p className="font-bold mt-9 ">"{item.name}"</p>
                  <p>{item.description}</p>
                  <div className="flex gap-4 justify-center mt-8 ">
                    <button className="w-[133px] h-[35px] bg-white border rounded-[6px] text-orange-500 font-semibold transition-all hover:bg-orange-500 hover:text-white">{item.btn1}</button>
                    <button className="w-[133px] h-[35px] bg-white border rounded-[6px] text-orange-500 font-semibold transition-all hover:bg-orange-500 hover:text-white">{item.btn2}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(177.14deg,_#838366_0.89%,_#EED5B1_49.41%,_#7E868E_97.93%)] h-auto overflow-hidden pb-20">
        
        <div className="flex justify-center items-center relative py-10">
          <Image src={trust} alt="Header Scroll Background" width={220} />
          <div className="absolute">
            {trusts.map((item, i) => <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>)}
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="relative w-[500px] group cursor-pointer">
            <Image src={moreinfo} alt="Decorative Parchment" width={500} height={450} className="block drop-shadow-xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-16 md:p-20">
              {moreInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                  <div className="transition-all duration-700 opacity-100 mb-8 overflow-hidden group-hover:opacity-0 group-hover:max-h-0">
                    <div className="text-[#4e342e] text-[15px] md:text-[17px] font-semibold text-center leading-[1.6]">
                      {item.desc}
                      <p className="mt-2 font-bold">{item.name}</p>
                    </div>
                  </div>
                  <button className="bg-[#bd512a] text-white px-10 py-3 rounded-full font-bold shadow-lg transition-all group-hover:scale-110">{item.btn}</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center relative mt-20">
          <Image src={trust} alt="Section Title Scroll" width={220} />
          <div className="absolute">
            {Histories.map((item, i) => <p key={i} className={`font-bold text-[20px] ${fontClass}`}>{item.name}</p>)}
          </div>
        </div>
        <div className="text-center mt-4 px-10">
          {Histories.map((item, i) => <p key={i}>{item.desc}</p>)}
        </div>

        <div className="flex justify-center mt-10">
          <Image src={Home} alt="Historical Architecture View" width={600} height={400} className="rounded-[40px] shadow-2xl border-4 border-white/10" />
        </div>

        <div className="relative flex flex-col items-center mt-28 mb-10">
          <div className="absolute top-[-50px] z-0 opacity-80 pointer-events-none">
            <Image src={flag} alt="Crossed Maratha Flags" width={500} height={500} />
          </div>
          <div className="relative z-10 flex justify-center items-center">
            <Image src={trust} alt="Title Scroll" width={240} className="pt-5" />
            <div className="absolute inset-0 flex items-center justify-center pt-5">
              {works.map((item, i) => (
                <p key={i} className={`font-bold text-[22px] ${fontClass} text-black`}>{item.name}</p>
              ))}
            </div>
          </div>
          <div className="relative z-10 text-center mt-6 max-w-2xl px-6">
            {works.map((item, i) => <p key={i} className="text-[#3d2b1f] font-semibold leading-relaxed">{item.desc}</p>)}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-10 flex justify-end mt-10 -mb-10">
           <button className="flex items-center gap-2 text-gray-800 font-bold hover:translate-x-1 transition-transform">
              <span>सर्व पहा</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
           </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pb-20">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5">
            {[ { src: card, alt: "Agricultural Work" }, { src: mvp, alt: "Events and Sports" }, { src: child, alt: "Children Education" }, { src: women, alt: "Women Training" }].map((item, i) => (
              <div key={i} className="group relative flex-1 min-w-[240px] aspect-[4/5] rounded-[24px] overflow-hidden shadow-2xl">
                <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#5252529E] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8">
                  <h3 className="text-white text-xl font-bold mb-3">{CardTexts[i]?.name}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{CardTexts[i]?.desc || ""}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col items-center mt-20 mb-10">
          <div className="relative z-10 flex justify-center items-center">
            <Image src={trust} alt="Collection Title Scroll" width={240} className="pt-5" />
            <div className="absolute inset-0 flex items-center justify-center pt-5">
              {shivkalins.map((item, i) => <p key={i} className={`font-bold text-[22px] ${fontClass} text-black`}>{item.name}</p>)}
            </div>
          </div>
          <div className="relative z-10 text-center mt-6 max-w-3xl px-6">
            {shivkalins.map((item, i) => <p key={i} className="text-[#3d2b1f] font-semibold leading-relaxed">{item.desc}</p>)}
          </div>
        </div>

        <div className={`flex flex-wrap justify-center gap-8 py-20 px-4 ${fontClass}`}>
          {Cards.map((item, index) => (
            <div key={index} className="group relative w-[360px] h-[500px] flex flex-col items-center cursor-pointer">
              <Image src={oldcard} alt="Ancient Scroll Background" fill className="object-contain" />
              <Image src={oldcard1} alt="Scroll Hover State" fill className="opacity-0 group-hover:opacity-100 object-contain" />
              <div className="relative z-10 flex flex-col items-center h-full w-full transition-opacity group-hover:opacity-0">
                <div className="mt-28 w-44 h-44 relative rounded-full overflow-hidden">
                    <Image src={circleImages[index]} alt={item.name} fill className="object-cover" />
                </div>
                <div className="mt-auto mb-20 px-6 text-center"><h3 className="text-2xl font-bold text-[#2d1b0d]">{item.name}</h3></div>
              </div>
              <div className="absolute inset-0 z-20 flex flex-col items-center p-14 opacity-0 transition-all translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="mt-10 w-24 h-24 relative rounded-full overflow-hidden">
                    <Image src={circleImages[index]} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex items-center justify-center mt-4 text-center px-4">{item.desc}</div>
                <div className="mt-auto mb-10"><h3 className="text-3xl font-bold text-[#1a0f08]">{item.name}</h3></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center relative py-10">
          <Image src={trust} alt="Feedback Scroll Title" width={220} className="pt-5" />
          <div className="absolute">
            {PrashansaPatrs.map((item, i) => <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>)}
          </div>
        </div>

        <div className="py-20 overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
            {scrollList.map((item, index) => (
              <div key={index} className="relative w-[350px] md:w-[450px] min-h-[280px] flex-shrink-0">
                <Image src={feedback} alt="Feedback Card Background" fill className="object-fill" />
                <div className="relative z-10 p-10 flex flex-col h-full">
                  <h4 className="text-xl font-bold text-[#2d1b0d] mb-4 border-b border-[#8b5e34]/20 pb-2">{item.name}</h4>
                  <p className="text-[#3d2b1f] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
      `}</style>
    </div>
  );
}