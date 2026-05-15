"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import first from "../../../../public/Yesaji Kankabadal/first.svg";
import card from "../../../../public/Yesaji Kankabadal/card.svg";
import sun from "../../../../public/Yesaji Kankabadal/sun.svg";
import name from "../../../../public/Yesaji Kankabadal/name.svg";

export const Info = {
  mr: [
    {
      name: "येसाजी कंक बद्दल माहिती",
      desc1:
        "येसाजींचे नाव ऐकताच, येसाजींनी तलवार उगारली. क्षणभर पातं चमकलं, दुसऱ्याच क्षणी सोडेवोर वार करून येसाजी बाजूला झाले. वारामध्ये हाताची सोंड कापली गेली होती - श्रीमान योगी कादंबरीमध्ये उल्लेख असलेला, कुतुबशहाच्या दरबारात घडलेला हा प्रसंग आपल्या नजरेसमोर उभा राहतो!",
      desc2:
        "येसाजी कंक यांचा जन्म इ.स. १६२६ मध्ये भुतोंडे गावात, राजगडाच्या पायथ्याशी झाला होता. येसाजी हे शारीरिकदृष्ट्या सशक्त आणि बलदंड शरीरयष्टीचे होते.",
      desc3:
        "छत्रपती शिवरायांनी इ.स. १६४५ साली रायरेश्वरी घेतलेल्या स्वराज्य शपथेपासून ते इ.स. १६८९–१६९० साली छत्रपती संभाजी महाराजांनंतर छत्रपती राजाराम महाराजांच्या कार्यकाळात ज्येष्ठ सल्लागार म्हणून येसाजींचा उल्लेख आहे.",
      desc4:
        "स्वराज्यसेवेमध्ये सलग ३० वर्षे पायदळाचे सरनोबत पद भूषवताना, फक्त २० वेळा आपल्या निवासस्थानी जात स्वामिनिष्ठा आणि स्वराज्यनिष्ठेचे सर्वोत्तम उदाहरण येसाजी कंक यांनी दाखवून दिले.",
      desc5:
        "स्वामिनिष्ठ, स्वराज्यभक्ती आणि स्वराज्यसेवेचे धगधगते स्फुलिंग सरनोबत येसाजी कंक यांना मानाचा मुजरा !!!",
    },
  ],
  en: [
    {
      name: "Information about Yesaji Kank",
      desc1:
        "The moment his name was announced, Yesaji unsheathed his sword. For a brief instant, the blade flashed, and in the very next moment, striking the elephant’s trunk, Yesaji swiftly stepped aside. This remarkable incident, mentioned in the novel Shriman Yogi, comes alive before our eyes.",
      desc2:
        "Yesaji Kank was born in 1626 AD in the village of Bhutonde, situated at the foothills of Rajgad. He was physically strong and possessed a powerful build.",
      desc3:
        "From the oath of Swarajya at Rayreshwar in 1645 AD to the years 1689–1690 AD, during Chhatrapati Rajaram Maharaj’s reign after Chhatrapati Sambhaji Maharaj, Yesaji is mentioned as a senior advisor.",
      desc4:
        "While serving Swarajya continuously for 30 years as the Sar-nobat of the infantry and visiting his home only 20 times, Yesaji Kank showed the finest example of loyalty to his king and dedication to Swarajya.",
      desc5:
        "A respectful salute to Sarnobat Yesaji Kank, a blazing symbol of loyalty, devotion to Swarajya, and selfless service!",
    },
  ],
};

export default function YesajiKankPage() {
  const { lang, fontClass } = useLanguage();
  const currentData = Info[lang][0];

  return (
    <main className={`min-h-screen bg-white ${fontClass}`}>
      <div className="relative w-full bg-white mt-10">
        <Image
          src={first}
          alt="Yesaji Kank vs Elephant"
          className="w-full h-auto"
          priority
        />

        <div className="absolute top-[8%] sm:top-[10%] md:top-[12%] left-1/2 -translate-x-1/2 w-[170px] sm:w-[240px] md:w-[350px] lg:w-[450px]">
          <Image
            src={name}
            alt="Yesaji Kank Name"
            className="w-full h-auto"
          />
        </div>
      </div>

      <section className="relative w-full bg-[#9c7b52] px-4 sm:px-6 py-8 md:py-14 flex items-center justify-center">
        <div className="relative w-full max-w-[580px] sm:max-w-[550]  md:max-w-[580] lg:max-w-[580]">
          <Image
            src={card}
            alt="Information Scroll"
            className="w-full h-auto "
            
          />

          <div className="absolute inset-0 flex items-start justify-center pt-10  ">
            <div className="relative z-10  text-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-65">
                <Image
                  src={sun}
                  alt="Sun"
                  className=" sm:w-[380px] lg:w-[340px] lg:mt-20 sm:mt-32 w-[420]  mt-10 h-auto"
                />
              </div>

              <h2 className="relative mb-4 sm:mb-5  text-[15px] sm:text-[15px] md:text-[15px] lg:text-[15px] font-semibold text-[#f8e8d0]  sm:mt-15  md:mt-20 lg:mt-20 mt-15">
                {currentData.name}
              </h2>

              <div className="relative z-10 flex flex-col sm:gap-5  text-[#f8e8d0] text-start sm:px-35 lg:px-35   md:px-35  px-35  ">
                <p className="text-[12px]  py-3 sm:py-1  ">
                  {currentData.desc1}
                </p>
                <p className="text-[12px] py-3  lg:py-1 sm:py-1">
                  {currentData.desc2}
                </p>
                <p className="text-[12px] py-3 sm:py-1 ">
                  {currentData.desc3}
                </p>
                <p className="text-[12px]   py-3 sm:py-1 ">
                  {currentData.desc4}
                </p>
                <p className="pt-1 font-semibold text-[12px] py-3 sm:py-1 ">
                  {currentData.desc5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
