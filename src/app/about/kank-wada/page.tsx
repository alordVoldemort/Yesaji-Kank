"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  mr: {
    line1: `स्वराज्याचे सरसेनापती आणि छ.शिवाजी महाराजांचे विश्वासू सहकारी येसाजी कंक यांचे गाव`,
    line2: `भुतोंडे पुण्यातील`,
    line3: `भोर मधील राजगड किल्ल्याच्या पायथ्याशी वसलेले गाव.`,
    body: `आज ही ह्या वाड्यात पाऊल ठेवल्यावर वेळ थांबते आणि इतिहास आपल्या डोळ्यासमोर जसाच्या तसा उभा राहतो.
इतिहास संकलक श्री. आप्पा परब म्हणतात, "भू म्हणजे आणि तोंड म्हणजे मुख्य — भुतोंड म्हणजेच राजगड जिल्ह्याच्या जवळपासच्या गावातील मुख्यगाव"
येसाजी कंक वाडा पुण्यापासून 65 किमी, भोरपासून 55 किमी तर साताऱ्यापासून 110 किमीवर आहे.
छ.शिवाजी महाराज, छ.संभाजी महाराज, छ. शाहू महाराज आणि छ.राजाराम महाराज यांच्या पदस्पर्शाने पावन झालेल्या कंक वाड्यात आज ही येसाजी कंकांचे १२ वे, १३ वे, आणि १४ वे वंशज राहतात.
इतिहासाचा पुरावा देणारा हा वाडा गेल्या अनेक दशकांतील बदलांचा साक्षीदार आहे.
वाड्याच्या अंगणात तुळशी वृंदावन आहे. आतमध्ये वाडा सागवानी तुळईंवर उभा आहे. मुख्यदारातून प्रवेश करताच आत ओसरी आहे. ओसरीच्या उजव्या बाजूस सरसेनापती येसाजी कंक यांचा पुतळा आहे. त्या लगत काही पुरातन हत्यारे जसे तलवार, धोप, खंजीर, बंदूक तसेच शिवकालीन नाणी बघायला मिळतात. दोन मजली वाड्यात वरच्या बाजूस माडीवर जुनी भांडी आहेत. वाड्यामध्ये आत चौक आहे.
भव्य कंक वाडा इतिहासाच्या प्रत्येक पानाची साक्ष देतो.
प्रत्येक खिडकीतून राजगडचा बालेकिल्ला आणि संजीवनी माची दिसणाऱ्या या वाड्यात आज ही येसाजी कंकांचे वंशज इतिहास जपताना दिसतात. येणाऱ्या प्रत्येकाला ते वाड्याची, इतिहासाची संपूर्ण माहिती देतात.
इतिहासाचा हा अनमोल ठेवा सर्वांसाठी नेहमी खुला असतो. आजही कंक वाडा येथे अनेक शिवभक्त, इतिहास अभ्यासक, मावळे रोज भेट देण्यास येतात.`,
  },
  en: {
    line1: `The brave Commander and trusted ally of Chhatrapati Shivaji Maharaj — Yesaji Kank's village`,
    line2: `Bhutonde, Pune`,
    line3: `Located at the foothills of Rajgad Fort near Bhor.`,
    body: `Stepping into this wada is like stepping back in time — history stands before you in all its glory.
Historian Shri. Appa Parab says, "Bhu means land and Tond means main — Bhutonde is the main village among those near Rajgad."
Yesaji Kank Wada is located 65 km from Pune, 55 km from Bhor, and 110 km from Satara.
Blessed by the footsteps of Chhatrapati Shivaji Maharaj, Chhatrapati Sambhaji Maharaj, Chhatrapati Shahu Maharaj, and Chhatrapati Rajaram Maharaj, the Kank Wada is now home to the 12th, 13th, and 14th generations of Yesaji Kank's descendants.
This wada has witnessed the passage of time across many decades.
In the wada's courtyard, there is a Tulsi Vrindavan. Inside, the wada stands on teak beams. Upon entering the main door, there is an Osari. To the right of the Osari is a statue of Commander Yesaji Kank. Nearby, ancient weapons such as swords, dhop, khanjir, and guns, along with Shiv-era coins, can be seen. The two-story wada has old utensils on the upper floor, and a courtyard inside.
The magnificent Kank Wada bears witness to every page of history.
From every window, Rajgad's Balekilla and Sanjeevani Machi are visible. The descendants of Yesaji Kank continue to preserve history and share it with every visitor.
This priceless treasure of history is always open to all. Even today, Shiv devotees, history enthusiasts, and scholars visit Kank Wada daily.`,
  },
};

export default function KankWadaPage() {
  const { lang, fontClass } = useLanguage();
  const t = lang === "en" ? content.en : content.mr;

  return (
    <main
      className={`min-h-screen overflow-hidden ${fontClass}`}
      style={{
        background:
          "linear-gradient(135deg, #838366 0%, #EED5B1 50%, #7E868E 100%)",
      }}
    >
      {/* Title Font */}
      <div className="flex justify-center pt-24 pb-6 z-10 relative">
        <Image
          src="/wadafont.png"
          alt="सरनोबत येसाजी कंक वाडा"
          width={600}
          height={200}
          className="object-contain w-[240px] md:w-[600px]"
          priority
        />
      </div>

      {/* Wada Hero Image */}
      <div className="flex justify-center px-4 md:px-16 -mt-8 md:-mt-26 z-0 relative">
        <div className="relative w-full max-w-3xl h-[30vh] md:h-[55vh] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
          <Image
            src="/wadamain.png"
            alt="येसाजी कंक वाडा"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </div>

      {/* Content Card — auto height so all text fits */}
      <section className="relative max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div
          className="relative rounded-md"
          style={{
            backgroundImage: "url('/wadabg.png')",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="px-10 md:px-24 py-14 md:py-20 flex flex-col items-center gap-2">
            <h2 className="text-[#3f2a1c] text-lg md:text-2xl font-bold text-center mb-2">
              वाड्याची माहीती
            </h2>
            <p className="text-[#3f2a1c] text-xs md:text-sm leading-relaxed font-medium text-center">
              {t.line1}
            </p>
            <p className="text-[#3f2a1c] text-sm md:text-base font-medium text-center">
              {t.line2}
            </p>
            <p className="text-[#3f2a1c] text-xs md:text-sm leading-relaxed font-medium text-center mb-3">
              {t.line3}
            </p>
            <p className="text-[#3f2a1c] text-xs md:text-sm leading-[2] font-normal text-center whitespace-pre-line">
              {t.body}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
