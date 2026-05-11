"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroTexts } from "@/data/site-data";
import extrainfo from "../../../public/MainPage/extrainfo.png"
import { ExtraInfo,MoreInfo,Trust } from "@/data/mainpage";
import { useLanguage } from "@/context/LanguageContext";
import trust from "../../../public/MainPage/Trust.svg"
import moreinfo from "../../../public/MainPage/MoreInfo.svg"
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const { lang, fontClass } = useLanguage()

  const items = ExtraInfo[lang]
  const trusts  = Trust[lang]
  const moreInfo = MoreInfo[lang]
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

  return (
    <div>    <section className="relative flex h-screen flex-col items-center justify-center text-center px-4 overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center gap-4 -mt-16">
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
         <div className="relative w-fit ">
          <Image
           src={extrainfo}
          alt="extrainfo"
          width={350}
className=" rounded-[28px]"          
         />
          <div className="absolute flex flex-col inset-0 ">
             {
              items.map((item) =>(
                <div >
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
   <section className="bg-[linear-gradient(177.14deg,_#838366_0.89%,_#EED5B1_49.41%,_#7E868E_97.93%)] h-screen">
    <div className="flex  justify-center items-center relative ">
      <Image 
       src={trust}
       alt="trust"
      width={220}
       className="pt-5"
       />

       <div className="absolute    ">
          {trusts.map((item) =>(
            <p className={`mt-5 font-bold text-[20px] ${fontClass}`}>{item.name}</p>
          )
        )} 
       </div>
    </div>

     <div className="flex justify-center mt-29 relative">
      <Image
        src={moreinfo}
        alt="moreinfo"
        width={350}
      

       />

        
    <div className="absolute">
         {moreInfo.map((item) => (
          <div>
    <p>{item.desc}</p>
   <button>{item.btn}</button>

          </div>
         ))}
    </div>

     </div>
     

   </section>
</div>

  );
}
