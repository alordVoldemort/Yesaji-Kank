"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { heroTexts } from "@/data/site-data";
import extrainfo from "../../../public/MainPage/extrainfo.png";
import {
  ExtraInfo,
  MoreInfo,
  Trust,
  History,
  Work,
  Shivkalin,
  Card,
  Prashansapatr,
  Feedback,
  CardText,
} from "@/data/mainpage";
import { useLanguage } from "@/context/LanguageContext";
import trust from "../../../public/MainPage/Trust.svg";
import moreinfo from "../../../public/MainPage/MoreInfo.svg";
import Home from "../../../public/MainPage/home.svg";
import HistoryImg from "../../../public/MainPage/historyimg.jpg";
import card from "../../../public/MainPage/card.svg";
import mvp from "../../../public/MainPage/mpl.svg";
import child from "../../../public/MainPage/child.svg";
import women from "../../../public/MainPage/women.svg";
import oldcard from "../../../public/MainPage/oldcard.svg";
import feedback from "../../../public/MainPage/feedback.svg";
import oldcard1 from "../../../public/MainPage/oldcard1.svg";
import flag from "../../../public/MainPage/flag.svg";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { lang, fontClass } = useLanguage();
  
  // Add state for scroll zoom
  const [historyZoom, setHistoryZoom] = useState(1);
  const historyImageRef = useRef(null);

  const items = ExtraInfo[lang];
  const trusts = Trust[lang];
  const moreInfo = MoreInfo[lang];
  const Histories = History[lang];
  const works = Work[lang];
  const shivkalins = Shivkalin[lang];
  const Cards = Card[lang];
  const PrashansaPatrs = Prashansapatr[lang];
  const testimonials = Feedback[lang];
  const CardTexts = CardText[lang];

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

  // Add scroll listener for zoom effect
  useEffect(() => {
    const handleScroll = () => {
      if (historyImageRef.current) {
        const rect = historyImageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how far the image is in the viewport
        const imageCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(windowHeight / 2 - imageCenter);
        const maxDistance = windowHeight / 2;
        
        // Calculate zoom factor based on scroll position
        // Image zooms in when it comes into view and scrolls past
        let zoomFactor = 1;
        if (distanceFromCenter < maxDistance) {
          // Normalize distance (0 at center, 1 at edge)
          const progress = 1 - (distanceFromCenter / maxDistance);
          // Zoom from 1 to 1.3 (30% max zoom)
          zoomFactor = 1 + (progress * 0.3);
        }
        
        setHistoryZoom(zoomFactor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const current = heroTexts[index];

  const circleImages = [
    "./MainPage/weapon.svg",
    "./MainPage/coin.svg",
    "./MainPage/letter.svg",
  ];

  return (
    <div>
      <section className="relative flex h-auto flex-col items-center justify-center text-center px-4 overflow-hidden">
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
            className={`${current.font} text-5xl md:text-6xl font-bold tracking-wide transition-all duration-500 ${
              visible ? "opacity-100 text-gray-950" : "opacity-0 text-white"
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
          <div className="relative w-[469px] h-[220px] mb-4 overflow-hidden rounded-[39px] shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            {/* Background Image */}
            <Image
              src={extrainfo}
              alt="extrainfo"
              fill
              priority
              className="object-cover rounded-[39px]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/5 rounded-[39px]" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-6">
              {items.map((item, index) => (
                <div key={index} className="w-full text-center">
                  {/* Heading */}
                  <h2 className="text-[20px] md:text-[20px] font-bold text-[#1F1F1F] leading-tight">
                    "{item.name}"
                  </h2>

                  {/* Subtitle */}
                  <p className="mt-2 text-[16px] text-[#3B3B3B]">
                    - {item.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex items-center justify-center gap-4 mt-10">
                    {/* Contact Button */}
                    <button className="w-[184px] h-[50px] rounded-[6px] border border-[#C05621] bg-[#F5F5F5] text-[#C05621] text-[18px] font-semibold transition-all duration-300 hover:bg-[#C05621] hover:text-white">
                      {item.btn1}
                    </button>

                    {/* More Info Button */}
                    <button className="w-[184px] h-[50px] rounded-[6px] bg-[#C05621] border border-[#C05621] text-white text-[18px] font-semibold transition-all duration-300 hover:bg-[#A3471B]">
                      {item.btn2}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(177.14deg,_#838366_0.89%,_#EED5B1_49.41%,_#7E868E_97.93%)] h-auto overflow-hidden pb-20">
        {/* Trust Section */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={341} className="pt-5" />
          <div className="absolute">
            {trusts.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[36px] ${fontClass}`}>
                {item.name}
              </p>
            ))}
          </div>
        </div>

       {/* More Info Section */}
<div className="flex justify-center -mt-16 px-4">
  <div className="relative w-full max-w-[1100px]">

    {/* Background Scroll */}
    <Image
      src={moreinfo}
      alt="parchment"
      width={1100}
      height={670}
      className="w-full h-auto object-contain drop-shadow-xl"
    />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <div className="max-w-[720px] text-left mt-6 px-10">
        <p
          className="text-[#2E1B0E] text-[20px] font-normal leading-[1.7] tracking-normal"
          style={{
            fontFamily: "IBM Plex Sans Devanagari",
          }}
        >
          स्वराज्याचे सरनोबत येसाजी कंक यांच्या शौर्य, साहस, शिस्त आणि
          विवेकबुद्धी या अनेक पैलूंचा आदर्श ठेवून, जनसेवेचे कार्य हाती
          घेतलेले महाराष्ट्रातील ऐतिहासिक व सामाजिक वारसा जपणारे
          <br />
          "सरनोबत येसाजी कंक ट्रस्ट".
        </p>
      </div>

      {/* Button */}
      <button className="mt-10 w-[210px] h-[47px] rounded-[45px] border border-white bg-[#BD512A] text-white text-[15px] font-bold flex items-center justify-center gap-6 shadow-lg transition-all duration-300 hover:bg-[#a94822] hover:scale-105">
        <span>अधिक वाचा...</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

      {/* History Section */}
      <div className="relative w-full min-h-[892px] overflow-hidden mt-6">

     {/* GIF Background */}
    <Image
    src="/historybg.gif"
    alt="History Background"
    fill
    unoptimized
    priority
    className="object-cover opacity-40"
    />

    {/* White Overlay */}
    <div className="absolute inset-0 bg-white/55" />

    {/* Main Content */}
    <div className="relative z-10 flex flex-col items-center pt-10">

    {/* History Header */}
    <div className="flex justify-center items-center relative">
      <Image
        src={trust}
        alt="trust"
        width={341}
        className="w-auto h-auto"
      />

      <div className="absolute">
        {Histories.map((item, i) => (
          <p
            key={i}
            className={`font-bold text-[22px] text-black ${fontClass}`}
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>

    {/* Description */}
    <div className="text-center mt-6 max-w-3xl mx-auto px-10">
      {Histories.map((item, i) => (
        <p
          key={i}
          className="text-[#2E1B0E] text-[18px] leading-[1.7]"
          style={{
            fontFamily: "IBM Plex Sans Devanagari",
          }}
        >
          {item.desc}
        </p>
      ))}
    </div>

    {/* Center Image - No animation, just ref for scroll zoom */}
<div className="sticky top-28 z-20 flex justify-center mt-16 pointer-events-none">
  <div
    ref={historyImageRef}
    style={{
      transform: `scale(${historyZoom})`,
      transition: 'transform 0.1s ease-out',
      willChange: 'transform'
    }}
  >
    <Image
      src={HistoryImg}
      alt="Historic Wada"
      width={650}
      height={420}
      className="object-cover shadow-2xl"
    />
  </div>
</div>
  </div>

  {/* Bottom White Fade */}
  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent" />
      </div>
        
        {/* Work Header */}
        <div className="relative flex flex-col items-center mt-28 mb-10">
          <div className="absolute top-[-50px] z-0 opacity-80 pointer-events-none">
            <Image
              src={flag}
              alt="Crossed Maratha Flags"
              width={500}
              height={500}
            />
          </div>
          <div className="relative z-10 flex justify-center items-center mt-15">
            <Image
              src={trust}
              alt="Title Scroll"
              width={240}
              className="pt-5"
            />
            <div className="absolute inset-0 flex items-center justify-center pt-5">
              {works.map((item, i) => (
                <p
                  key={i}
                  className={`font-bold text-[22px] ${fontClass} text-black`}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="relative z-10 text-center mt-16 max-w-2xl px-6">
            {works.map((item, i) => (
              <p
                key={i}
                className="text-[#3d2b1f] font-semibold leading-relaxed"
              >
                {item.desc}
              </p>
            ))}
          </div>
        </div>

        {/* --- Updated Work Gallery Section --- */}
        <div className="max-w-7xl mx-auto px-6 mt-25 pb-20">
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-5">
            {[
              { src: card, alt: "Agriculture" },
              { src: mvp, alt: "Events" },
              { src: child, alt: "Education" },
              { src: women, alt: "Training" },
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
                <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[#5252529E] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-8">
                  {/* Title from CardTexts data */}
                  <h3 className="text-white text-1xl md:text-2xl mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {CardTexts[i]?.name}
                  </h3>

                  {/* Description from CardTexts data */}
                  <p className="text-white/90 text-sm md:text-base leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {CardTexts[i]?.desc ||
                      (lang === "mr"
                        ? "समृद्ध शेती, सशक्त शेतकरी आणि उज्ज्वल भविष्य."
                        : "Prosperous farming, empowered farmers and a bright future.")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* सर्व पहा button — aligned to the right, links to our-work page */}
          <div className="flex justify-end mt-4 pr-1">
            <Link href="/our-work">
              <button className="flex items-center gap-1 bg-[#3d2b1f] hover:bg-[#5a3e2b] text-[#f5e6d0] text-sm font-semibold px-5 py-2 rounded-full shadow transition-colors duration-300">
                सर्व पहा <span className="text-base">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Shivkalin Section */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {shivkalins.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
        <div className="text-center mt-14 max-w-2xl mx-auto  px-10">
          {shivkalins.map((item, i) => (
            <p key={i} className="font-semibold">
              {item.desc}
            </p>
          ))}
        </div>

        {/* --- Updated Armor Scroll Cards (With Hover Effect) --- */}
        <div
          className={`flex flex-wrap justify-center gap-8 py-20 px-4 ${fontClass}`}
        >
          {Cards.map((item, index) => (
            <div
              key={index}
              className="group relative w-[360px] h-[500px] flex flex-col items-center cursor-pointer"
            >
              {/* Background Swapping */}
              <div className="absolute inset-0 z-0 transition-opacity duration-500 group-hover:opacity-0">
                <Image
                  src={oldcard}
                  alt="scroll bg"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <Image
                  src={oldcard1}
                  alt="scroll bg hover"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* DEFAULT VIEW (Centered Large Icon + Bottom Title) */}
              <div className="relative z-10 flex flex-col items-center h-full w-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                <div className="mt-28 w-44 h-44 relative rounded-full overflow-hidden">
                  <Image
                    src={circleImages[index]}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-auto mb-20 px-6 text-center">
                  <h3 className="text-2xl font-bold text-[#2d1b0d] tracking-tight">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* HOVER VIEW (Top Icon + Middle Desc + Bottom Title) */}
              <div className="absolute inset-0 z-20 flex flex-col items-center p-14 opacity-0 transition-all duration-700 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="mt-10 w-24 h-24 relative rounded-full overflow-hidden">
                  <Image
                    src={circleImages[index]}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex items-center justify-center mt-4">
                  <p className="text-center text-[#1a0f08] text-[15px] md:text-[17px] font-medium leading-relaxed px-4">
                    {item.desc || "Information about the collection goes here."}
                  </p>
                </div>

                <div className="mt-auto mb-10">
                  <h3 className="text-3xl md:text-2xl font-bold text-[#1a0f08] tracking-tight">
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback Section Header */}
        <div className="flex justify-center items-center relative">
          <Image src={trust} alt="trust" width={220} className="pt-5" />
          <div className="absolute">
            {PrashansaPatrs.map((item, i) => (
              <p key={i} className={`mt-5 font-bold text-[20px] ${fontClass}`}>
                {item.name}
              </p>
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
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
`}</style>
    </div>
  );
}