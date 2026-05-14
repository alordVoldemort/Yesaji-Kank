import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Yesaji",
  description: "Get in touch with Yesaji.",
};

export default function ContactPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        flex-col
        items-center
        px-4
        pt-[80px]
        sm:pt-[90px]
        md:pt-[100px]
      "
      style={{
        background:
          "linear-gradient(168.07deg, #8B866B 2.31%, #E9D5B4 55.3%, #BBA98B 98.28%)",
      }}
    >

{/* ================= CONTACT HEADER ================= */}
<div className="relative flex flex-col items-center mt-20 mb-16">

  {/* RIGHT FLAG */}
  <div className="absolute top-[-100px] right-[8%] z-0 opacity-80 pointer-events-none">
    <Image
      src="/flag.png"
      alt="Right Flag"
      width={580}
      height={580}
      className="object-contain"
    />
  </div>

  {/* LEFT FLAG OPPOSITE DIRECTION */}
  <div className="absolute top-[-100px] left-[8%] z-0 opacity-80 pointer-events-none">
    <Image
      src="/flag.png"
      alt="Left Flag"
      width={580}
      height={580}
      className="object-contain scale-x-[-1]"
    />
  </div>

  {/* CONTACT TITLE */}

<div className="relative z-8 flex justify-center items-center mt-10">
  <Image
    src="/Contact-text.png"   
    alt="Contact"
    width={70}
    height={100}
    className="object-contain"
    priority
  />
</div>


  {/* SHIELD */}
  <div
    className="
      relative
      z-10
      mt-[-10px]
      w-[130px]
      sm:w-[170px]
      md:w-[220px]
      lg:w-[260px]
      h-[130px]
      sm:h-[170px]
      md:h-[220px]
      lg:h-[260px]
    "
  >
    <Image
      src="/shield-contact.png"
      alt="Shield"
      fill
      priority
      className="object-contain"
    />
  </div>
</div>

      {/* ================= CONTACT CARDS ================= */}
<div
  className="
    relative
    z-20
    w-full
    max-w-7xl
    mx-auto
    mt-2
    grid
    grid-cols-1
    md:grid-cols-3
    gap-4
    px-4
    pb-6
  "
>
  {/* CARD 1 */}
  <div className="relative flex justify-center items-center h-[250px]">
    {/* PAPER IMAGE */}
    <Image
      src="/paper-card.png" // your uploaded paper image
      alt="Paper Card"
      fill
      className="object-contain"
    />

    {/* CONTENT */}
    <div className="relative z-10 flex flex-col items-center text-center px-10">
      <h2 className="text-[28px] font-semibold text-[#3d2415] mb-2">
        संपर्क
      </h2>

      {/* PHONE ICON */}
      
        <Image
          src="/phone.svg"
          alt="Phone"
          width={58}
          height={58}
        />

      <br />
      <p className="text-[#3d2415] text-lg font-medium">
        +91 1234567890
      </p>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="relative flex justify-center items-center h-[250px]">
    <Image
      src="/paper-card.png"
      alt="Paper Card"
      fill
      className="object-contain"
    />

    <div className="relative z-10 flex flex-col items-center text-center px-10">
      <h2 className="text-[28px] font-semibold text-[#3d2415] mb-2">
        ई-मेल
      </h2>

        <Image
          src="/phone.svg"
          alt="Mail"
          width={58}
          height={58}
        />
     
      <br />
      <p className="text-[#3d2415] text-lg font-medium break-all">
        info@yesaji.com
      </p>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="relative flex justify-center items-center h-[250px]">
    <Image
      src="/paper-card.png"
      alt="Paper Card"
      fill
      className="object-contain"
    />

<br />
    <div className="relative z-10 flex flex-col items-center text-center px-10">
      <h2 className="text-[28px] font-semibold text-[#3d2415] mb-2">
        पत्ता
      </h2>

  
        <Image
          src="/phone.svg"
          alt="Location"
          width={58}
          height={58}
        />
      
      <br />
      <p className="text-[#3d2415] text-lg font-medium">
        पुणे, महाराष्ट्र
      </p>
    </div>
  </div>
</div>

{/* ================= CONTACT FORM + MAP SECTION ================= */}
<div
  className="
    max-w-7xl
    mx-auto
    px-4
    py-16
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-10
    items-start
  "
>
  {/* ================= FORM CARD ================= */}
{/* ================= FORM CARD ================= */}
<div
  className="
    w-full
    max-w-[664px]
    h-auto
    min-h-[622px]
    bg-white
    border
    border-[#C1C1C1]
    rounded-[14px]
    px-[22px]
    pt-[33px]
    pb-[33px]
  "
>
  {/* TITLE */}
  <h2
    className="
      text-center
      text-[28px]
      font-normal
      text-[#2D2D2D]
      mb-10
    "
    style={{
      fontFamily: "IBM Plex Sans Devanagari",
      lineHeight: "100%",
      letterSpacing: "0%",
    }}
  >
    संदेश पाठवा
  </h2>

  {/* FORM */}
  <form className="flex flex-col gap-[26px]">

    {/* ROW 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* FIRST NAME */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[14px] text-[#2D2D2D]"
          style={{
            fontFamily: "IBM Plex Sans Devanagari",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          पहिले नाव
        </label>

        <input
          type="text"
          placeholder="आपले पहिले नाव"
          className="
            w-full
            h-[46px]
            border
            border-[#C1C1C1]
            rounded-[8px]
            px-4
            outline-none
            text-[14px]
          "
        />
      </div>

      {/* LAST NAME */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[14px] text-[#2D2D2D]"
          style={{
            fontFamily: "IBM Plex Sans Devanagari",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          आडनाव
        </label>

        <input
          type="text"
          placeholder="आपले आडनाव"
          className="
            w-full
            h-[46px]
            border
            border-[#C1C1C1]
            rounded-[8px]
            px-4
            outline-none
            text-[14px]
          "
        />
      </div>
    </div>

    {/* ROW 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* MOBILE */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[14px] text-[#2D2D2D]"
          style={{
            fontFamily: "IBM Plex Sans Devanagari",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          मोबाईल नंबर
        </label>

        <input
          type="text"
          placeholder="मोबाईल क्रमांक"
          className="
            w-full
            h-[46px]
            border
            border-[#C1C1C1]
            rounded-[8px]
            px-4
            outline-none
            text-[14px]
          "
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-2">
        <label
          className="text-[14px] text-[#2D2D2D]"
          style={{
            fontFamily: "IBM Plex Sans Devanagari",
            fontWeight: 400,
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          ई मेल आयडी
        </label>

        <input
          type="email"
          placeholder="ई मेल आयडी"
          className="
            w-full
            h-[46px]
            border
            border-[#C1C1C1]
            rounded-[8px]
            px-4
            outline-none
            text-[14px]
          "
        />
      </div>
    </div>

    {/* MESSAGE */}
    <div className="flex flex-col gap-2">
      <label
        className="text-[14px] text-[#2D2D2D]"
        style={{
          fontFamily: "IBM Plex Sans Devanagari",
          fontWeight: 400,
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        संदेश
      </label>

      <textarea
        rows={7}
        placeholder="संदेश"
        className="
          w-full
          border
          border-[#C1C1C1]
          rounded-[8px]
          px-4
          py-4
          outline-none
          resize-none
          text-[14px]
        "
      />
    </div>

    {/* BUTTON */}
    <button
      type="submit"
      className="
        w-full
        h-[52px]
        rounded-[8px]
        bg-[#C85D1F]
        text-white
        text-[16px]
        font-medium
        mt-2
      "
      style={{
        fontFamily: "IBM Plex Sans Devanagari",
      }}
    >
      पाठवा
    </button>
  </form>
</div>

  {/* ================= MAP IMAGE ================= */}
  <div className="w-full flex justify-center lg:justify-end">
    <div
      className="
        relative
        w-full
        max-w-[516px]
        h-[290px]
        rounded-[12px]
        overflow-hidden
        shadow-xl
      "
    >
      <Image
        src="/location-map.jpg"
        alt="Location Map"
        fill
        className="object-cover"
      />
    </div>
  </div>
</div>
    </main>
  );
}