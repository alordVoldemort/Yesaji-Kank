"use client";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import check from "../../../../public/check.svg"

const successContent = {
  mr: {
    title: "धन्यवाद !",
    message1: "आपल्या देणगीबद्दल मनःपूर्वक धन्यवाद!",
    message2: "आपण समाजाच्या उन्नतीसाठी महत्त्वाचा वाटा उचलला आहे.",
  },
  en: {
    title: "Thank You !",
    message1: "Heartfelt thanks for your donation!",
    message2: "You have played an important role in the progress of society.",
  },
};

export default function DonationSuccessPage() {
  const { lang, fontClass } = useLanguage();
  const items = successContent[lang];

  return (
    <main className="min-h-screen bg-[linear-gradient(168.07deg,#838366_2.31%,#EED5B1_50.3%,#7E868E_98.28%)] flex items-center justify-center px-4 py-10 md:py-0">
      
      {/* Container: Changed fixed height h-[490px] to h-auto and min-h for responsiveness */}
      <div className={`bg-[#f3f3f3] w-full max-w-[908px] h-auto md:h-[490px] rounded-[24px] shadow-2xl py-12 md:py-16 px-6 md:px-12 text-center flex flex-col justify-center ${fontClass}`}>        
        
        {/* Success Icon: Responsive sizing */}
        <div className="flex justify-center transition-transform duration-500 hover:scale-110">
          <div className="w-[100px] h-[100px] md:w-[136px] md:h-[130px] relative">
             <Image src={check} alt="check" fill className="object-contain" />
          </div>
        </div>

        {/* Title: Scaled text for mobile (text-3xl) vs desktop (text-5xl) */}
        <h2 className="text-3xl md:text-[48px] font-[500] mt-6 md:mt-10 text-black leading-tight">
          {items.title}
        </h2>

        {/* Message 1: Responsive font and spacing */}
        <p className="mt-6 md:mt-10 text-lg md:text-[20px] text-[#333] font-medium px-2">
          {items.message1}
        </p>

        {/* Message 2: Responsive font and spacing */}
        <p className="mt-4 md:mt-10 text-base md:text-[18px] text-[#555] px-2">
          {items.message2}
        </p>

      </div>
    </main>
  );
}