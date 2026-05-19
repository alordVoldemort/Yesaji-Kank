"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import name from "../../../../public/wada/name.svg";
import card from "../../../../public/wada/card.svg";
import trust from "../../../../public/MainPage/Trust.svg";
import home from "../../../../public/wada/home.svg";
import yesaji from "../../../../public/wada/yesaji.svg";
import pot from "../../../../public/wada/pot.svg";

const data = {
  mr: {
    title: "वाड्याची माहिती",
    section1: {
      line1: "स्वराज्याचे सरसेनापती आणि छ. शिवाजी महाराजांचे विश्वासू सहकारी येसाजी कंक यांचे गाव",
      line2: "भुतोंडे — पुण्यातील",
      line3: "भोर मधील राजगड किल्ल्याच्या पायथ्याशी वसलेले.",
      line4: "आज ही ह्या वाड्यात पाऊल ठेवल्यावर वेळ थांबते आणि इतिहास",
      line5: "आपल्या डोळ्यासमोर जसाच्या तसा उभा",
      line6: "राहतो.",
      line7: "इतिहास संकलक श्री. आप्पा परब म्हणतात,",
      line8: "“भू म्हणजे भूमी आणि तोंड म्हणजे मुख्य. भुतोंडे म्हणजेच राजगड जिल्ह्याच्या जवळपासच्या",
      line9: "गावातील मुख्य गाव”",
    },
    section2: {
      line1: "येसाजी कंक वाडा पुण्यापासून ६५ किमी, भोरपासून ५५ किमी तर साताऱ्यापासून ११० किमीवर आहे.",
      line2: "छ. शिवाजी महाराज, छ. संभाजी महाराज, छ. शाहूमहाराज आणि छ. राजाराम महाराज यांच्या",
      line3: "पदस्पर्शाने पावन",
      line4: "झालेल्या कंक वाड्यात आज ही येसाजी कंकांचे १२वे, १३वे, आणि १४वे वंशज राहतात.",
      line5: "इतिहासाचा पुरावा देणारा हा वाडा गेल्या अनेक दशकांतील बदलांचा साक्षीदार आहे.",
      line6: "वाड्याच्या अंगणात तुळसी वृंदावन आहे. आतमध्ये वाडा सागवानी तुळईंवर उभा आहे. मुख्य दारातून प्रवेश",
      line7: "करतानाच आत ओसरी आहे. ओसरीच्या उजव्या बाजूस सरसेनापती येसाजी कंक यांचा पुतळा आहे. त्या लगत",
      line8: "काही",
      line9: "पुरातन हत्यारे जसे तलवार, धोप, खंजीर, बंदूक तसेच शिवकालीन नाणी बघायला मिळतात. दोन मजली",
      line10: "वाड्यात",
      line11: "वरच्या बाजूस माडीवर जुनी भांडी आहेत. वाड्यामध्ये आत चौक आहे.",
      line12: "भव्य कंक वाडा इतिहासाच्या प्रत्येक पानाची साक्ष देतो.",
    },
    section3: {
      line1: "प्रत्येक खिडकीतून राजगडचा बालेकिल्ला आणि संजीवनी माची दिसणाऱ्या या वाड्यात आज हि येसाजी",
      line2: "कंकांचे",
      line3: "वंशज इतिहास जपताना दिसतात. येणाऱ्या प्रत्येकाला ते वाड्याची, इतिहासाची संपूर्ण माहिती देतात.",
      line4: "इतिहासाचा हा अनमोल ठेवा सर्वांसाठी नेहमी खुला असतो. आजही कंक वाडा येथे अनेक शिवभक्त,",
      line5: "इतिहास अभ्यासक, मावळे रोज भेट देण्यास येतात.",
    },
  },
  en: {
    title: "Information About The Wada",
    section1: {
      line1: "Bhutonde is the village of Yesaji Kank, the Commander-in-Chief of Swarajya",
      line2: "and a trusted associate of Chhatrapati Shivaji Maharaj,",
      line3: "situated at the foothills of Rajgad Fort in Bhor, Pune.",
      line4: "Even today, when you step into this wada, time stops. History",
      line5: "comes alive right before the eyes, exactly",
      line6: "as it was back then.",
      line7: "History compiler Mr. Appa Parab says:",
      line8: "“Bhu means land and Tonde means main. Therefore, Bhutonde means",
      line9: "the main village among the villages near Rajgad.”",
    },
    section2: {
      line1: "The Yesaji Kank Wada is located 65 km from Pune, 55 km from Bhor",
      line2: "and 110 km from Satara. In the Kank Wada blessed by the visits of",
      line3: "Chhatrapati Shivaji Maharaj, Sambhaji Maharaj, Shahu Maharaj",
      line4: "and Rajaram Maharaj, the 12th, 13th and 14th descendants live today.",
      line5: "This mansion serves as a witness to all changes over several decades.",
      line6: "Inside, the wada is held up by teak wood beams with a Tulsi Vrindavan in the",
      line7: "courtyard. Right after the main door is a veranda with a statue of",
      line8: "Commander-in-Chief Yesaji Kank. Next to it are",
      line9: "various antique weapons, swords, dhops, daggers, guns, and coins",
      line10: "from the Shivaji era. Old vessels are kept on the upper",
      line11: "floor of this two-story mansion, which features a central courtyard.",
      line12: "The grand Kank Wada stands as a witness to every page of history.",
    },
    section3: {
      line1: "From every window of the wada, the Balekilla and Sanjivani Machi of Rajgad",
      line2: "can be seen clearly. The descendants of Yesaji Kank continue preserving",
      line3: "history and guide visitors about the wada and its heritage.",
      line4: "This invaluable treasure of history is always open to everyone.",
      line5: "Many Shivaji devotees and history experts visit regularly.",
    },
  },
};

export default function KankWadaPage() {
  const { lang, fontClass } = useLanguage();
  const datas = data[lang as keyof typeof data];

  const renderLines = (section: Record<string, string>) =>
    Object.values(section).map((line, i) => (
      <p key={i} className="m-0">
        {line}
      </p>
    ));

  return (
    <main className={`pt-[64px] ${fontClass}`}>
      <div className="relative w-full">
        <video autoPlay muted loop playsInline className="w-full h-auto">
          <source src="/wada/video.mp4" type="video/mp4" />
        </video>        <div className="absolute top-0 left-0 right-0 flex justify-center mt-5">
          <Image
            src={name}
            alt="name"
            className="w-[70%] max-w-[620px] h-auto"
          />
        </div>
      </div>

      <div className="relative w-full bg-[linear-gradient(168.07deg,#838366_2.31%,#EED5B1_50.3%,#7E868E_98.28%)] py-5">
        <div className="relative mx-auto w-full max-w-[520px]">
          <Image src={card} alt="card" className="w-full h-auto block" />

          <div className="absolute inset-0 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-8 flex flex-col">
            <div className="relative w-[150px] sm:w-[170px] mb-4 sm:mb-5 shrink-0 mx-auto">
              <Image src={trust} alt="trust" className="w-full h-auto block" />
              <h1 className="absolute inset-0 flex items-center justify-center text-center text-[12px] sm:text-[16px] font-semibold text-black px-4 leading-tight">
                {datas.title}
              </h1>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden hide-scrollbar text-black">
              <div className="flex flex-col items-center">
                <Image
                  src={home}
                  alt="home"
                  className="w-[78%] max-w-[320px] h-auto rounded-2xl mb-5 sm:mb-6"
                />

                <div className="w-full text-center text-[13px] sm:text-[15px] leading-6 sm:leading-7 space-y-2">
                  {renderLines(datas.section1)}
                </div>

                <Image
                  src={yesaji}
                  alt="yesaji"
                  className="w-[70%] max-w-[220px] h-auto rounded-2xl my-5 sm:my-6"
                />

                <div className="w-full text-center text-[13px] sm:text-[15px] leading-6 sm:leading-7 space-y-2">
                  {renderLines(datas.section2)}
                </div>

                <Image
                  src={pot}
                  alt="pot"
                  className="w-[72%] max-w-[240px] h-auto rounded-2xl my-5 sm:my-6"
                />

                <div className="w-full text-center text-[13px] sm:text-[15px] leading-6 sm:leading-7 pb-4 space-y-2">
                  {renderLines(datas.section3)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
      `}</style>
    </main>
  );
}