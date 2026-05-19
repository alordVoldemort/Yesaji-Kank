"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";
import { Noto_Sans_Devanagari } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const notoDev = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});
const content = {
  mr: {
    leftHeading: "वर्ष / काळ",
    rightHeading: "महत्त्वाची घटना",
  },
  en: {
    leftHeading: "Year / Period",
    rightHeading: "Important Event",
  },
};

const timelineData = [
  {
    yearMr: "१६४५",
    yearEn: "1645",
    image: "/Swarajya Contribution/maharajabhishek.png",
    textMr:
      "स्वराज्य शपथ: रायरेश्वर मंदिरात शिवरायांसोबत स्वराज्याची शपथ घेताना येसाजी कंक उपस्थित.",
    textEn:
      "The Oath of Swarajya: Yesaji Kank was present at the Raireshwar Temple while taking the oath of Swarajya alongside Shivrai.",
  },
  {
    yearMr: "१६४६",
    yearEn: "1646",
    image: "/Swarajya Contribution/Swarajya2.png",
    textMr:
      "तोरणा विजय: किल्ले तोरणा स्वराज्यात घेताना झालेल्या लढाईमध्ये येसाजींचा समावेश.",
    textEn:
      "The Capture of Torna: Yesaji took part in the fight to bring Fort Torna (Prachandagad) under the rule of Swaraj.",
  },

  {
    yearMr: "१६५९",
    yearEn: "1659",
    image: "/Swarajya Contribution/Swarajya3.png",
    textMr:
      "अफझलखान वध: प्रतापगड युद्धात महाराजांच्या १० प्रमुख अंगरक्षकांपैकी एक अंगरक्षक.",
    textEn:
      "The End of Afzal Khan: One of Maharaj's ten main bodyguards during the Battle of Pratapgad.",
  },

  {
    yearMr: "१६५९",
    yearEn: "1659",
    image: "/Swarajya Contribution/Swarajya4.png",
    textMr:
      "पायदळ सरनोबत: येसाजींची निष्ठा आणि शौर्य पाहून महाराजांनी 'पायदळाचे सरनोबत' पद दिले.",
    textEn:
      "Sarnobat of the Infantry: Impressed by Yesaji's loyalty and bravery, Maharaj Awarded him the title of 'Sarnobat of the Infantry.'",
  },

  {
    yearMr: "१६६३",
    yearEn: "1663",
    image: "/Swarajya Contribution/Swarajya6.png",
    textMr:
      "लाल महाल प्रसंग: शाहिस्तखानाचा पराभव करण्यासाठी लाल महालावर झालेल्या छाप्यात येसाजी कंक आघाडीवर.",
    textEn:
      "The Lal Mahal Incident: Yesaji Kank was at the front of the attack on the Lal Mahal, carried out to defeat Shaista Khan.",
  },
  {
    yearMr: "१६६६",
    yearEn: "1666",
    image: "/Swarajya Contribution/Swarajya7.png",
    textMr:
      "आग्रा भेट: औरंगजेबाच्या भेटीवेळी आणि आग्र्याहून सुटकेच्या प्रत्येक वेळी येसाजी कंक महाराजांच्या जवळ.",
    textEn:
      "The Visit to Agra: During the meeting with Aurangzeb and at every step of the escape from Agra, Yesaji Kank stayed near to the Maharaj's side.",
  },

  {
    yearMr: "१६७६",
    yearEn: "1676",
    image: "/Swarajya Contribution/Swarajya8.png",
    textMr:
      "दक्षिण दिग्विजय: गोवळकोंड्याच्या हत्तीचा पराभव करून येसाजी कंकांनी कुतबुशहाला मावळ्यांची ताकद दाखवली.",
    textEn:
      "The Southern Conquest: By defeating the elephant at Golconda, Yesaji Kank showed the Mavala’s Power to the Qutb Shah.",
  },
  {
    yearMr: "१६८० नंतर",
    yearEn: "After 1680",
    image: "/Swarajya Contribution/Swarajya9.png",
    textMr:
      "संभाजी महाराजांना साथ: थोरले महाराजांच्या निधनानंतर येसाजी कंक छत्रपती संभाजी महाराजांच्या पाठीशी ठाम उभे राहिले.",
    textEn:
      "Support for Sambhaji Maharaj: After the death of the Great Maharaj, Yesaji Kank stood strongly by the side of Chhatrapati Sambhaji Maharaj.",
  },
  {
    yearMr: "१६८३",
    yearEn: "1683",
    image: "/Swarajya Contribution/Swarajya10.png",
    textMr:
      "फोंडा किल्ला युद्धात: पोर्तुगीजांविरुद्ध ऐतिहासिक लढा. या युद्धात येसाजी कंक यांचे पुत्र कृष्णाजी कंक यांना वीरमरण आले.",
    textEn:
      "The Battle of Ponda Fort: A historic struggle against the Portuguese. It was during this very battle that Krishnaji Kank, the son of Yesaji Kank, attained martyrdom.",
  },
  {
    yearMr: "१६८९-९०",
    yearEn: "1689-90",
    image: "/Swarajya Contribution/Swarajya11.png",
    textMr:
      "रायगड किल्लेदार: कठीण काळात येसाजी कंकांनी रायगड किल्ल्याची जबाबदारी सांभाळली.",
    textEn:
      "Raigad Fort Commander: During difficult times, Yesaji Kank took charge of Raigad Fort.",
  },
  {
    yearMr: "१७०० नंतर",
    yearEn: "1700s+",
    image: "/Swarajya Contribution/Swarajya12.png",
    textMr:
      "ज्येष्ठ सल्लागार: छत्रपती राजाराम महाराज आणि छत्रपती शाहू महाराज यांच्या काळात येसाजी कंकांचा सल्लागार म्हणून उल्लेख.",
    textEn:
      "Senior Advisor: Yesaji Kank is mentioned as an advisor during the rule of Chhatrapati Rajaram Maharaj and Chhatrapati Shahu Maharaj.",
  },
  {
    yearMr: "१७१६",
    yearEn: "1716",
    image: "/Swarajya Contribution/Swarajya13.png",
    textMr:
      "मृत्यू: वयाच्या ९० व्या वर्षी मराठा स्वराज्याचे पराक्रमी योद्धे येसाजी कंकांनी जगाचा निरोप घेतला.",
    textEn:
      "Death: At the age of 90, Yesaji Kank, a brave warrior of the Maratha Swaraj, passed away.",
  },
];

export default function SwarajyaContributionPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  const rowContainerRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";

    const rowContainer = rowContainerRef.current;
    if (!rowContainer) return;

    const mm = gsap.matchMedia();

    // MOBILE
    mm.add("(max-width: 767px)", () => {
      const track = mobileTrackRef.current;

      if (track) {
        gsap.fromTo(
          track,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rowContainer,
              start: "top 75%",
              end: "bottom 25%",
              scrub: 1,
            },
          },
        );
      }

      rowRefs.current.forEach((row) => {
        if (!row) return;

        const left = row.querySelector(".tl-left");
        const right = row.querySelector(".tl-right");
        const dot = row.querySelector(".tl-dot");

        gsap.set(left, {
          y: 40,
          opacity: 0,
        });

        gsap.set(right, {
          y: 40,
          opacity: 0,
        });

        gsap.set(dot, {
          scale: 0,
          opacity: 0,
        });

        ScrollTrigger.create({
          trigger: row,
          start: "top 88%",

          onEnter: () => {
            gsap.to(left, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
            });

            gsap.to(right, {
              y: 0,
              opacity: 1,
              duration: 0.7,
              delay: 0.12,
              ease: "power3.out",
            });

            gsap.to(dot, {
              scale: 1,
              opacity: 1,
              duration: 0.45,
              ease: "back.out(3)",
            });
          },
        });
      });
    });

    // DESKTOP
    mm.add("(min-width: 768px)", () => {
      const track = desktopTrackRef.current;

      if (track) {
        gsap.fromTo(
          track,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: rowContainer,
              start: "top 65%",
              end: "bottom 35%",
              scrub: 1,
            },
          },
        );
      }

      rowRefs.current.forEach((row) => {
        if (!row) return;

        const left = row.querySelector(".tl-left");
        const right = row.querySelector(".tl-right");
        const dot = row.querySelector(".tl-dot");

        gsap.set(left, {
          xPercent: -10,
          opacity: 0,
          scale: 0.96,
        });

        gsap.set(right, {
          xPercent: 10,
          opacity: 0,
          scale: 0.96,
        });

        gsap.set(dot, {
          scale: 0,
          opacity: 0,
        });

        ScrollTrigger.create({
          trigger: row,
          start: "top 82%",

          onEnter: () => {
            gsap.to(left, {
              xPercent: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
            });

            gsap.to(right, {
              xPercent: 0,
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "power3.out",
            });

            gsap.to(dot, {
              scale: 1,
              opacity: 1,
              duration: 0.45,
              ease: "back.out(3)",
            });
          },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <main
      className={`min-h-screen w-full overflow-x-hidden ${notoDev.className}`}
      style={{
        background:
          "linear-gradient(177.14deg, #838366 0.89%, #EED5B1 49.41%, #7E868E 97.93%)",
      }}
    >
      {/* HERO */}
      <section className="relative w-full overflow-hidden pt-0 md:pt-[70px]">
        {/* MAIN IMAGE */}
        <div className="relative w-full h-[42vh] sm:h-[58vh] md:h-auto md:aspect-[16/7]">
          <Image
            src="/Swarajya Contribution/Swarajyamain.png"
            alt="Swarajya"
            fill
            priority
            className="object-cover object-top"
          />

          {/* WHITE OVERLAY */}
          <div className="absolute inset-0 bg-white/25" />

          {/* LOGO */}
          <div className="absolute top-[60px] sm:top-[75px] md:top-6 left-1/2 -translate-x-1/2 z-20">
            <div className=" relative w-[140px] h-[80px] sm:w-[230px] sm:h-[130px] md:w-[620px] md:h-[240px] ">
              <Image
                src="/Swarajya Contribution/fontlogo.png"
                alt="Logo"
                fill
                priority
                className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative w-full overflow-x-hidden px-3 sm:px-4 md:px-12 py-12 md:py-24">
        <div className="w-full max-w-7xl mx-auto overflow-hidden">
          {/* DESKTOP HEADING */}
          <div className="hidden md:grid md:grid-cols-2 gap-10 mb-20 items-center mt-6">
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold text-black text-center">
                {t.leftHeading}
              </h2>
            </div>

            <div className="flex justify-center">
              <h2 className="text-3xl font-bold text-black text-center">
                {t.rightHeading}
              </h2>
            </div>
          </div>
          {/* TIMELINE */}
          <div
            ref={rowContainerRef}
            className="relative flex flex-col gap-10 md:gap-32"
          >
            {/* MOBILE LINE */}
            <div
              ref={mobileTrackRef}
              className="md:hidden absolute left-[11px] top-0 bottom-0 w-[3px] bg-[#2D2D2D] z-0"
              style={{
                transformOrigin: "top center",
                transform: "scaleY(0)",
              }}
            />

            {/* DESKTOP LINE */}
            <div
              ref={desktopTrackRef}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[5px] -translate-x-1/2 bg-[#2D2D2D] z-0"
              style={{
                transformOrigin: "top center",
                transform: "scaleY(0)",
              }}
            />

            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                className="
                relative grid w-full
                grid-cols-[22px_minmax(0,1fr)]
                md:grid-cols-[1fr_100px_1fr]
                gap-x-3 gap-y-3 md:gap-10
              "
              >
                {/* DOT */}
                <div
                  className="
                  col-start-1 row-start-1 row-span-2
                  md:col-start-2 md:row-start-1 md:row-span-1
                  flex flex-col items-center z-20
                "
                >
                  <div className="flex-1" />

                  <div
                    className="
                    tl-dot shrink-0
                    w-6 h-6 md:w-16 md:h-16
                    rounded-full bg-[#1a1a1a]
                    flex items-center justify-center
                    border-2 md:border-4 border-[#BF915F]
                    shadow-[0_0_25px_rgba(191,145,95,0.7)]
                  "
                  >
                    <div
                      className="
                      w-2.5 h-2.5 md:w-6 md:h-6
                      rounded-full bg-[#BF915F]
                    "
                    />
                  </div>

                  <div className="flex-1" />
                </div>

                {/* LEFT IMAGE */}
                <div
                  className=" tl-left min-w-0 relative overflow-hidden  rounded-xl md:rounded-[30px] shadow-xl md:shadow-2xl col-start-2 row-start-1 md:col-start-1 md:row-start-1"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={item.image}
                    alt="scene"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* YEAR */}
                  <div className="absolute top-2 left-2 md:top-5 md:left-5 z-20">
                    <span className="text-white text-sm md:text-3xl font-black drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                      {lang === "mr" ? item.yearMr : item.yearEn}
                    </span>
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div
                  className="
                  tl-right min-w-0 relative overflow-hidden
                  rounded-xl md:rounded-[30px]
                  col-start-2 row-start-2
                  md:col-start-3 md:row-start-1
                "
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src="/Swarajya Contribution/infobg.png"
                    alt="info"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 " />

                  <div className="absolute inset-0 flex items-center justify-center p-3 md:p-10">
                    <p className="text-black text-[10px] sm:text-xs md:text-lg leading-snug md:leading-relaxed text-center font-semibold">
                      {lang === "mr" ? item.textMr : item.textEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
