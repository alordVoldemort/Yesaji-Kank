"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      "Swarajya Oath: Yesaji Kank was present when Shivaji Maharaj took the oath of Swarajya at Rayreshwar Temple.",
  },
  {
    yearMr: "१६५९",
    yearEn: "1659",
    image: "/Swarajya Contribution/Swarajya2.png",
    textMr:
      "तोरणा विजय: किल्ले तोरणा स्वराज्यात घेताना झालेल्या लढाईमध्ये येसाजींचा समावेश.",
    textEn:
      "Torna Victory: Yesaji Kank was involved in the battle for the fort of Torna during the expansion of Swarajya.",
  },
  {
    yearMr: "१६५९",
    yearEn: "1659",
    image: "/Swarajya Contribution/Swarajya4.png",
    textMr:
      "पायदळ सरनोबत: येसाजींची निष्ठा आणि शौर्य पाहून महाराजांनी 'पायदळाचे सरनोबत' पद दिले.",
    textEn:
      "Padyal Sarnaubat: Seeing Yesaji's loyalty and bravery, the Maharaja awarded him the title of 'Padyal Sarnaubat'.",
  },
  {
    yearMr: "१६६३",
    yearEn: "1663",
    image: "/Swarajya Contribution/Swarajya6.png",
    textMr:
      "लाल महाल प्रसंग: शाहिस्तखानाचा पराभव करण्यासाठी लाल महालावर झालेल्या छाप्यात येसाजी कंक आघाडीवर.",
    textEn:
      "Lal Mahal Raid: Yesaji Kank was at the forefront during the raid on Lal Mahal to defeat Shaistakhan.",
  },
  {
    yearMr: "१६६६",
    yearEn: "1666",
    image: "/Swarajya Contribution/Swarajya7.png",
    textMr:
      "आग्रा भेट: औरंगजेबाच्या भेटीवेळी आणि आग्र्याहून सुटकेच्या वेळी येसाजी कंक महाराजांच्या जवळ.",
    textEn:
      "Agra Visit: Yesaji Kank was close to the Maharaja during the meetings with Aurangzeb and throughout the escape from Agra.",
  },
  {
    yearMr: "१६७४",
    yearEn: "1674",
    image: "/Swarajya Contribution/Swarajya3.png",
    textMr:
      "अफझलखान वध: प्रतापगड युद्धात महाराजांच्या १० प्रमुख अंगरक्षकांपैकी एक अंगरक्षक.",
    textEn:
      "Afzal Khan Assassination: Yesaji Kank was one of the 10 main bodyguards of the Maharaja during the Battle of Pratapgad.",
  },
  {
    yearMr: "१६७६",
    yearEn: "1676",
    image: "/Swarajya Contribution/Swarajya8.png",
    textMr:
      "दक्षिण दिग्विजय: गोवळकोंड्याच्या हत्तीचा पराभव करून येसाजी कंकांनी कुतबुशहाला मावळ्यांची ताकद दाखवली.",
    textEn:
      "Southern Campaign: Yesaji Kank demonstrated the strength of the Maratha warriors by defeating the elephant of Golkonda.",
  },
  {
    yearMr: "१६८० नंतर",
    yearEn: "1680s+",
    image: "/Swarajya Contribution/Swarajya9.png",
    textMr:
      "संभाजी महाराजांना साथ: थोरले महाराजांच्या निधनानंतर येसाजी कंक छत्रपती संभाजी महाराजांच्या पाठीशी ठाम उभे राहिले.",
    textEn:
      "Support to Sambhaji Maharaj: After the demise of the elder Maharaja, Yesaji Kank stood firmly by Chhatrapati Sambhaji Maharaj.",
  },
  {
    yearMr: "१६८३",
    yearEn: "1683",
    image: "/Swarajya Contribution/Swarajya10.png",
    textMr:
      "फोंडा किल्ला युद्धात: पोर्तुगीजांविरुद्ध ऐतिहासिक लढा. या युद्धात येसाजी कंक यांचे पुत्र कृष्णाजी कंक यांना वीरमरण आले.",
    textEn:
      "Battle of Fonda Fort: A historic battle against the Portuguese. During this battle, Yesaji Kank's son Krishnaji Kank attained martyrdom.",
  },
  {
    yearMr: "१६८९-९०",
    yearEn: "1689-90",
    image: "/Swarajya Contribution/Swarajya11.png",
    textMr:
      "रायगड किल्लेदार: कठीण काळात येसाजी कंकांनी रायगड किल्ल्याची जबाबदारी सांभाळली.",
    textEn:
      "Raigad Fort Commander: During difficult times, Yesaji Kank took responsibility for the Raigad Fort.",
  },
  {
    yearMr: "१७०० नंतर",
    yearEn: "1700s+",
    image: "/Swarajya Contribution/Swarajya12.png",
    textMr:
      "ज्येष्ठ सल्लागार: छत्रपती राजाराम महाराज आणि छत्रपती शाहू महाराज यांच्या काळात येसाजी कंकांचा सल्लागार म्हणून उल्लेख.",
    textEn:
      "Senior Advisor: Yesaji Kank was recognized as a senior advisor during the reign of Chhatrapati Rajaram and Chhatrapati Shahu Maharaj.",
  },
  {
    yearMr: "१७१६",
    yearEn: "1716",
    image: "/Swarajya Contribution/Swarajya13.png",
    textMr:
      "मृत्यू: वयाच्या ९० व्या वर्षी मराठा स्वराज्याचे पराक्रमी योद्धे येसाजी कंकांनी जगाचा निरोप घेतला.",
    textEn:
      "Demise: At the age of 90, Yesaji Kank, the valiant warrior of the Maratha Swarajya, bid farewell to the world.",
  },
];

export default function SwarajyaContributionPage() {
  const { lang, fontClass } = useLanguage();
  const t = content[lang];

  const rowContainerRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef  = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const rowContainer = rowContainerRef.current;
    if (!rowContainer) return;

    const mm = gsap.matchMedia();

    /* ── MOBILE (< md) ─────────────────────────────── */
    mm.add("(max-width: 767px)", () => {
      const track = mobileTrackRef.current;
      if (track)
        gsap.fromTo(track, { scaleY: 0 }, {
          scaleY: 1, ease: "none",
          scrollTrigger: { trigger: rowContainer, start: "top 70%", end: "bottom 30%", scrub: 1 },
        });

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const left  = row.querySelector<HTMLElement>(".tl-left");
        const right = row.querySelector<HTMLElement>(".tl-right");
        const dot   = row.querySelector<HTMLElement>(".tl-dot");

        if (left)  gsap.set(left,  { y: 40, opacity: 0 });
        if (right) gsap.set(right, { y: 40, opacity: 0 });
        if (dot)   gsap.set(dot,   { scale: 0, opacity: 0 });

        ScrollTrigger.create({
          trigger: row, start: "top 86%",
          onEnter: () => {
            if (left)  gsap.to(left,  { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" });
            if (right) gsap.to(right, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.18 });
            if (dot)   gsap.to(dot,   { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(3)", delay: 0.06 });
          },
          onLeaveBack: () => {
            if (left)  gsap.to(left,  { y: 40, opacity: 0, duration: 0.45, ease: "power2.in", delay: 0.2 });
            if (right) gsap.to(right, { y: 40, opacity: 0, duration: 0.45, ease: "power2.in", delay: 0.2 });
            if (dot)   gsap.to(dot,   { scale: 0, opacity: 0, duration: 0.3, ease: "power2.in", delay: 0.35 });
          },
        });
      });

      return () => { ScrollTrigger.getAll().forEach((s) => s.kill()); };
    });

    /* ── TABLET + DESKTOP (>= md) ──────────────────── */
    mm.add("(min-width: 768px)", () => {
      const track = desktopTrackRef.current;
      if (track)
        gsap.fromTo(track, { scaleY: 0 }, {
          scaleY: 1, ease: "none",
          scrollTrigger: { trigger: rowContainer, start: "top 65%", end: "bottom 35%", scrub: 1 },
        });

      rowRefs.current.forEach((row) => {
        if (!row) return;
        const left  = row.querySelector<HTMLElement>(".tl-left");
        const right = row.querySelector<HTMLElement>(".tl-right");
        const dot   = row.querySelector<HTMLElement>(".tl-dot");

        if (left)  gsap.set(left,  { x: -70, opacity: 0, scale: 0.94 });
        if (right) gsap.set(right, { x: 70,  opacity: 0, scale: 0.94 });
        if (dot)   gsap.set(dot,   { scale: 0, opacity: 0 });

        ScrollTrigger.create({
          trigger: row, start: "top 80%",
          onEnter: () => {
            if (left)  gsap.to(left,  { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
            if (right) gsap.to(right, { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" });
            if (dot)   gsap.to(dot,   { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(3)", delay: 0.15 });
          },
          onLeaveBack: () => {
            if (left)  gsap.to(left,  { x: -70, opacity: 0, scale: 0.94, duration: 0.55, ease: "power2.in", delay: 0.25 });
            if (right) gsap.to(right, { x: 70,  opacity: 0, scale: 0.94, duration: 0.55, ease: "power2.in", delay: 0.25 });
            if (dot)   gsap.to(dot,   { scale: 0, opacity: 0, duration: 0.35, ease: "power2.in", delay: 0.4 });
          },
        });
      });

      return () => { ScrollTrigger.getAll().forEach((s) => s.kill()); };
    });

    return () => { mm.revert(); };
  }, []);

  return (
    <main
      className={`min-h-screen ${fontClass}`}
      style={{ background: "linear-gradient(177.14deg, #838366 0.89%, #EED5B1 49.41%, #7E868E 97.93%)" }}
    >
      {/* HERO */}
      <section className="relative w-full pt-[70px]">
        <div className="relative w-full aspect-[4/3] md:aspect-[16/7]">
          <Image src="/Swarajya Contribution/Swarajyamain.png" alt="Swarajya" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/35" />
          <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-10">
            <div className="relative w-[160px] h-[90px] sm:w-[220px] sm:h-[120px] md:w-[600px] md:h-[220px]">
              <Image src="/Swarajya Contribution/fontlogo.png" alt="Logo" fill priority className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative w-full px-4 md:px-12 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">

          {/* HEADINGS */}
          <div className="flex justify-between md:grid md:grid-cols-[1fr_100px_1fr] gap-4 md:gap-10 mb-10 md:mb-20 items-center pl-9 md:pl-0">
            <h2 className="text-base md:text-3xl font-bold text-black" style={{ fontFamily: "IBM Plex Sans Devanagari, sans-serif" }}>
              {t.leftHeading}
            </h2>
            <div className="hidden md:block" />
            <h2 className="text-base md:text-3xl font-bold text-black text-right md:text-center" style={{ fontFamily: "IBM Plex Sans Devanagari, sans-serif" }}>
              {t.rightHeading}
            </h2>
          </div>

          {/* ROWS */}
          <div ref={rowContainerRef} className="relative flex flex-col gap-10 md:gap-32">

            {/* Mobile vertical line — left edge */}
            <div
              ref={mobileTrackRef}
              className="md:hidden absolute left-[11px] top-0 bottom-0 w-[3px] bg-[#2D2D2D] pointer-events-none z-0"
              style={{ transformOrigin: "top center", transform: "scaleY(0)" }}
            />

            {/* Desktop horizontal line — center */}
            <div
              ref={desktopTrackRef}
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[5px] -translate-x-1/2 bg-[#2D2D2D] pointer-events-none z-0"
              style={{ transformOrigin: "top center", transform: "scaleY(0)" }}
            />

            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => { rowRefs.current[index] = el; }}
                className="relative grid
                  grid-cols-[24px_1fr]
                  md:grid-cols-[1fr_100px_1fr]
                  gap-x-3 gap-y-3 md:gap-10"
              >
                {/* DOT — col-1 spans 2 rows on mobile; col-2 single row on desktop */}
                <div
                  className="
                    col-start-1 row-start-1 row-span-2 self-stretch
                    md:col-start-2 md:row-start-1 md:row-span-1
                    flex flex-col items-center z-20
                  "
                >
                  <div className="flex-1" />
                  <div className="tl-dot shrink-0
                    w-6 h-6 md:w-16 md:h-16
                    rounded-full bg-[#1a1a1a] flex items-center justify-center
                    shadow-2xl ring-2 md:ring-4 ring-[#BF915F] ring-offset-1 md:ring-offset-2"
                  >
                    <div className="w-2.5 h-2.5 md:w-6 md:h-6 rounded-full bg-[#BF915F] shadow-[0_0_10px_3px_rgba(191,145,95,0.7)]" />
                  </div>
                  <div className="flex-1" />
                </div>

                {/* IMAGE — col-2 row-1 on mobile; col-1 on desktop */}
                <div
                  className="tl-left relative overflow-hidden rounded-xl md:rounded-[28px] shadow-lg md:shadow-2xl
                    col-start-2 row-start-1
                    md:col-start-1 md:row-start-1"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image src={item.image} alt="scene" fill className="object-cover" />
                  <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20">
                    <span
                      className="text-white text-sm md:text-3xl font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                      style={{ fontFamily: "IBM Plex Sans Devanagari, sans-serif" }}
                    >
                      {lang === "mr" ? item.yearMr : item.yearEn}
                    </span>
                  </div>
                </div>

                {/* INFO — col-2 row-2 on mobile; col-3 on desktop */}
                <div
                  className="tl-right relative overflow-hidden rounded-xl md:rounded-[28px]
                    col-start-2 row-start-2
                    md:col-start-3 md:row-start-1"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image src="/Swarajya Contribution/infobg.png" alt="info" fill className="object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center p-3 md:p-10">
                    <p
                      className="text-black text-[10px] sm:text-xs md:text-lg leading-snug md:leading-relaxed text-center font-semibold"
                      style={{ fontFamily: "IBM Plex Sans Devanagari, sans-serif" }}
                    >
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