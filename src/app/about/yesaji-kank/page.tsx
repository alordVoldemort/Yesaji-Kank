"use client"
import Image from "next/image";
import first from "../../../../public/Yesaji Kankabadal/first.svg"
import card from "../../../../public/Yesaji Kankabadal/card.svg"
import soldier from "../../../../public/Yesaji Kankabadal/soldier.svg"
import sun from "../../../../public/Yesaji Kankabadal/sun.svg"
import { useLanguage } from "@/context/LanguageContext";

export const Info = {
    mr: [{
        name: "येसाजी कंक बदल माहिती",
        desc1: "येसाजींचे नाव ऐकताच, येसाजींनी तलवार उगारली. क्षणभर पातं चमकलं, दुसऱ्याच क्षणी सोंडेवर वार करून येसाजी बाजूला झाले. वारामध्ये हत्तीची सोंड कापली गेली होती — श्रीमान योगी कादंबरीमध्ये उल्लेख असलेला, कुतुबशहाच्या दरबारात घडलेला हा प्रसंग आपल्या नजरेसमोर उभा राहतो!",
        desc2: "येसाजी कंक यांचा जन्म इ.स. १६२६ मध्ये भुतोंडे गावात, राजगडाच्या पायथ्याशी झाला होता. येसाजी हे शारीरिक दृष्ट्या सशक्त आणि बलदंड शरीरयष्टीचे होते.",
        desc3: "छत्रपती शिवरायांनी इ.स. १६४५ साली रायरेश्वरी घेतलेल्या स्वराज्य शपथेपासून ते इ.स. १६८९–१६९० साली छत्रपती संभाजी महाराजांनंतर छत्रपती राजाराम महाराजांच्या कार्यकाळात ज्येष्ठ सल्लागार म्हणून येसाजींचा उल्लेख आहे.",
        desc4: "स्वराज्यसेवेमध्ये सलग ३० वर्ष पायदळाचे सरनोबत पद भूषवताना, फक्त २० वेळा आपल्या निवासस्थानी जात स्वामिनिष्ठ आणि स्वराज्यनिष्ठेचे सर्वोत्तम उदाहरण येसाजी कंक यांनी दाखवून दिले.",
        desc5: "स्वामिनिष्ठ, स्वराज्यभक्ती आणि स्वराज्यसेवेचे धगधगते स्फुलिंग सरनोबत येसाजी कंक यांना मानाचा मुजरा!!!"
    }],
    en: [{
        name: "Information about Yesaji Kank",
        desc1: "The moment his name was announced, Yesaji unsheathed his sword. For a brief instant, the blade flashed, and in the very next moment, striking the elephant’s trunk, Yesaji swiftly stepped aside. With that single blow, the elephant’s trunk was severed. This remarkable incident, which took place in the court of Qutb Shah and is mentioned in the novel Shriman Yogi, vividly comes alive before our eyes.",
        desc2: "Yesaji Kank was born in 1626 AD in the village of Bhutonde, situated at the foothills of Rajgad. He was physically strong and possessed a powerful build.",
        desc3: "From the time Chhatrapati Shivaji Maharaj took the oath of Swarajya at Raireshwar in 1645 AD until the years 1689–1690 AD, after the reign of Chhatrapati Sambhaji Maharaj and during the rule of Chhatrapati Rajaram Maharaj, Yesaji is mentioned as a senior advisor.",
        desc4: "While serving Swarajya continuously for 30 years as the Sar-nobat (Chief of Infantry), visiting his home only twenty times, Yesaji Kank demonstrated the highest example of loyalty to his king and dedication to Swarajya.",
        desc5: "A respectful salute to Sarnobat Yesaji Kank — a blazing symbol of loyalty, devotion to Swarajya, and selfless service!"
    }]
}

export default function YesajiKankPage() {
    const { lang, fontClass } = useLanguage()
    const currentData = Info[lang][0]

    return (
        <div className={`min-h-screen bg-white ${fontClass}`}>
            {/* Top Section: Elephant Image */}
            <div className="w-full flex justify-center bg-white">
                <Image 
                    src={first} 
                    alt="Yesaji Kank vs Elephant" 
                    className="w-full h-auto"
                    priority 
                />
            </div>

            {/* Bottom Section: Scroll and Soldiers */}
            <div className="relative w-full bg-[#9c7b52] py-12 md:py-24 flex items-center justify-center">
                
                <div className="container mx-auto px-4 flex flex-row items-center justify-center gap-6 max-w-7xl">
                    
                    {/* Left Soldier */}
                    <div className="hidden lg:block w-1/5">
                        <Image src={soldier} alt="Soldier Left" className="w-full h-auto" />
                    </div>

                    {/* Middle Card (Scroll) */}
                    <div className="relative   flex justify-center">
                        
                        {/* 1. Scroll Image */}
                        <Image 
                            src={card} 
                            alt="Information Scroll" 
                            className="w-[1000] h-auto object-contain" 
                        />

                        {/* 2. Absolute Overlay Container */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pt-24 pb-20 px-10 md:px-20 lg:px-28">
                            
                            {/* 3. Sun Emblem (Centered behind text) */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                                <Image src={sun} alt="Sun" className="w-2/3 h-auto" />
                            </div>

                            {/* 4. Content Aligned to Center */}
                            <div className="z-10 w-full flex flex-col items-center">
                                {/* Header - Positioned higher but within wooden block */}
                                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#f8e8d0] mb-8 md:mb-12">
                                    {currentData.name}
                                </h2>
                                
                                {/* Paragraphs with specific gaps to match image 2 */}
                                <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 text-center text-[#f8e8d0] text-[10]   p-8">
                                    <p>{currentData.desc1}</p>
                                    <p>{currentData.desc2}</p>
                                    <p>{currentData.desc3}</p>
                                    <p>{currentData.desc4}</p>
                                    <p className="font-bold pt-4">{currentData.desc5}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Soldier */}
                    <div className="hidden lg:block w-1/5">
                        <Image src={soldier} alt="Soldier Right" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}