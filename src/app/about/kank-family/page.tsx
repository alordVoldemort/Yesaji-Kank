"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  mr: {
    card1: `कंक घराणे हे महाराष्ट्रातील ऐतिहासिक आणि वीर घराणे आहे. ज्याचा इतिहास प्रामुख्याने छत्रपती शिवाजी महाराजांच्या काळाशी आणि स्वराज्यस्थापनेशी जोडलेला आहे. महाभारतामध्ये पांडवांना १२ वर्षांचा वनवास व १ वर्षाचा अज्ञातवास होता. या अज्ञातवासामध्ये युधिष्ठिराने विराट राजाच्या पदरी सेवा करत असताना 'कंक' हे उपनाव धारण केले. साताऱ्याजवळील वाई येथील वैराटगडच्या भागातील वैराट समाजावर पांडवांनी विजय मिळवला व हे सर्व पांडवांचे अनुयायी झाल्याने त्यांनीही 'कंक' हे आडनाव धारण केले.`,
    card2: `१६०० व्या शतकात महाराष्ट्रातील सह्याद्री नावाच्या कुरुक्षेत्रावर छ.शिवाजी महाराजांच्या रुपी कृष्ण अवतरले. अन्याय, अधर्म आणि असत्याविरुद्ध रणशिंग फुंकणाऱ्या कृष्णाला 'येसाजी कंक' नावाच्या युधिष्ठिराची साथ लाभली. स्वतंत्र हिंदवी स्वराज्याचे पराक्रमी योद्धे सरनोबत येसाजी यांचा जन्म इ.स. १६२६ साली भोर जवळील भुतोंडे गावी कंक घराण्यात झाला.`,
    card3: `पिळदार शरीरयष्टीचे व बलशाली बाहूंचे येसाजी कंक हे छ.शिवाजी महाराजांचे बालपणीचे सवंगडी होते. १६४५ साली रायरेश्वर येथे छ.शिवाजी महाराजांनी येसाजी कंक आणि काही मोजक्या मावळ्यांसह स्वराज्याची शपथ घेतली. स्वराज्यात पहिला गड 'तोरणा' घेण्यापासून ते १६९० साली छ.राजाराम महाराजांच्या कार्यकाळात जेष्ठ सल्लागार म्हणून येसाजींनी प्रत्येक मोहीम व योजना साहसी आणि नीतिमानाने लढले. छ.शिवाजी महाराजांच्या आयुष्यातील जवळपास सर्व महत्त्वपूर्ण घटनांमध्ये येसाजी कंकांचा सहभाग आढळतो. अफझलखान वध, लाल महाल प्रसंग, आग्रा भेट, दक्षिण दिग्विजय तसेच फोंडा किल्ला युद्धात वयाच्या ५० व्या वर्षी हाती समशेर घेऊन पोर्तुगीजांशी लढा देणारे येसाजी कंक साहस, अढळता, स्वाभिमान आणि स्वामिनिष्ठा यांचे सर्वोच्च उदाहरण ठरतात.`,
  },
  en: {
    card1: `The Kank family is a historic and valiant clan of Maharashtra, whose history is primarily associated with the era of Chhatrapati Shivaji Maharaj and the establishment of Swarajya. In the Mahabharata, the Pandavas faced 12 years of exile and 1 year of incognito living. During that incognito period, Yudhishthira served under King Virata and assumed the alias 'Kank'. The Pandavas defeated the Vairat community near Wai, Satara, and as all of them became followers of the Pandavas, they too adopted 'Kank' as their surname.`,
    card2: `In the 17th century, on the battlefield of the Sahyadri mountains of Maharashtra, Lord Krishna incarnated in the form of Chhatrapati Shivaji Maharaj. To this Krishna who raised the war cry against injustice, adharma, and falsehood, he found support in 'Yesaji Kank' — his very own Yudhishthira. The valiant warrior Sarnobat Yesaji Kank, champion of the independent Hindavi Swarajya, was born in 1626 AD in the village of Bhutonde near Bhor, into the Kank family.`,
    card3: `Yesaji Kank, with his muscular build and powerful arms, was a childhood companion of Chhatrapati Shivaji Maharaj. In 1645, at Rayreshwar, Shivaji Maharaj took the oath of Swarajya along with Yesaji Kank and a handful of Mavlas. From capturing the first fort 'Torna' to serving as a senior advisor during Chhatrapati Rajaram Maharaj's reign in 1690, Yesaji fought every campaign with courage and principles. He participated in nearly all major events of Shivaji Maharaj's life — the killing of Afzalkhan, the Lal Mahal incident, the Agra visit, the southern conquest, and at age 50 he fought the Portuguese at Fort Phonda with a sword in hand. Yesaji Kank stands as the supreme example of bravery, steadfastness, self-respect, and loyalty.`,
  },
};

export default function KankFamilyPage() {
  const { lang, fontClass } = useLanguage();
  const t = lang === "en" ? content.en : content.mr;

  return (
    <main className={`min-h-screen overflow-hidden ${fontClass}`} style={{ background: "linear-gradient(135deg, #838366 0%, #EED5B1 50%, #7E868E 100%)" }}>
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] md:h-[85vh] overflow-hidden mt-[70px]">
        <Image
          src="/yasaji_kank_gharane.png"
          alt="कंक घराणे"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "50% 25%" }}
        />

        {/* Fade Effects */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#EED5B1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20" />

        {/* Title */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <Image
            src="/kankfont1.png"
            alt="कंक घराणे"
            width={650}
            height={320}
            className="object-contain w-[280px] md:w-[650px]"
            priority
          />
        </div>
      </div>

      {/* History Cards */}
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-4 md:gap-20">
        {/* Card 1 */}
        <div className="relative">
          {/* Ropes hanging into card */}

          {/* Paper Background */}
          <div className="relative overflow-hidden rounded-md z-20">
            <Image
              src="/moblieviewbg.png"
              alt="background"
              fill
              className="object-fill md:hidden"
            />
            <Image
              src="/gharanebg.png"
              alt="background"
              fill
              className="object-fill hidden md:block"
            />

            <div className="relative z-10 grid md:grid-cols-[2fr_1fr] lg:grid-cols-[4fr_1fr] gap-6 items-center px-12 md:px-24 py-16 md:py-20">
              {/* Text */}
              <div>
                <p className="text-[#3f2a1c] text-sm md:text-base leading-[2.0] font-medium">
                  {t.card1}
                </p>
              </div>

              {/* Image */}
              <div className="flex justify-center items-center order-first md:order-none">
                <Image
                  src="/firstcardimg.png"
                  alt="historic"
                  width={350}
                  height={350}
                  className="object-contain grayscale opacity-90 w-32 md:w-full lg:w-[280px] max-w-[180px] md:max-w-[320px] lg:max-w-[280px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          {/* Ropes hanging into card */}
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 -left-6 md:left-0 z-10"
            style={{
              transform: "rotate(-40deg)",
              transformOrigin: "top center",
            }}
          />
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 right-10 z-10"
            style={{
              transform: "rotate(-42deg)",
              transformOrigin: "top center",
            }}
          />

          {/* Paper */}
          <div className="relative overflow-hidden rounded-md z-20">
            <Image
              src="/moblieviewbg.png"
              alt="background"
              fill
              className="object-fill md:hidden"
            />
            <Image
              src="/gharanebg.png"
              alt="background"
              fill
              className="object-fill hidden md:block"
            />

            <div className="relative z-10 grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_3fr] gap-4 items-center px-10 md:px-20 py-14 md:py-18">
              {/* Image — bottom-left corner */}
              <div className="flex justify-center md:justify-center items-center md:self-center">
                <Image
                  src="/secondcardimg.png"
                  alt="historic"
                  width={220}
                  height={220}
                  className="object-contain grayscale opacity-90 w-32 md:w-56 lg:w-[220px]"
                />
              </div>
              {/* Text */}
              <div className="flex items-center self-center">
                <p className="text-[#3f2a1c] text-base md:text-lg leading-[2.0] font-medium">
                  {t.card2}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          {/* Ropes hanging into card */}
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 -left-6 md:left-0 z-10"
            style={{
              transform: "rotate(-40deg)",
              transformOrigin: "top center",
            }}
          />
          <Image
            src="/linkrrop.png"
            alt="rope"
            width={90}
            height={50}
            className="absolute -top-10 md:-top-18 right-10 z-10"
            style={{
              transform: "rotate(-42deg)",
              transformOrigin: "top center",
            }}
          />

          {/* Paper */}
          <div className="relative overflow-hidden rounded-md z-20">
            <Image
              src="/moblieviewbg.png"
              alt="background"
              fill
              className="object-fill md:hidden"
            />
            <Image
              src="/gharanebg.png"
              alt="background"
              fill
              className="object-fill hidden md:block"
            />

            <div className="relative z-10 grid md:grid-cols-[2fr_1fr] lg:grid-cols-[4fr_1fr] gap-6 items-center px-10 md:px-20 py-14 md:py-18">
              {/* Text */}
              <div className="flex items-center self-center">
                <p className="text-[#3f2a1c] text-sm md:text-base leading-[2.0] font-medium">
                  {t.card3}
                </p>
              </div>
              {/* Image — right center */}
              <div className="flex justify-center md:justify-center items-center md:self-center order-first md:order-none">
                <Image
                  src="/thirdcardimg.png"
                  alt="historic"
                  width={160}
                  height={160}
                  className="object-contain grayscale opacity-90 w-28 md:w-48 lg:w-[160px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
