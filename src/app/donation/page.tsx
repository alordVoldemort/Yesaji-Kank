"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";

export default function DonationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    amount: "1000",
    paymentMethod: "upi",
    acceptTerms: false,
  });

  const { lang } = useLanguage();

  const [activeTab, setActiveTab] = useState("donation");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle donation submission logic here
  };

  return (
    <main className="w-full overflow-hidden bg-[#d8c7a8]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[420px] sm:h-[520px] md:h-[650px] lg:h-[788px]">
        {/* Hero Background */}
        <Image
          src="/donation-hero.png"
          alt="Donation Hero"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#D9D9D96E]" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[38px]">
          {/* देणगी Image */}
          <div className="relative w-[260px] sm:w-[360px] md:w-[520px] lg:w-[800px] h-[120px] sm:h-[180px] md:h-[240px] lg:h-[380px]">
            <Image
              src="/donation-text.png"
              alt="देणगी"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================= SCROLL SECTION ================= */}
      <section className="relative bg-[#d8c7a8] py-10 md:py-16 px-4 flex flex-col items-center overflow-hidden">
        {/* Heading */}
        <h2 className="text-[36px] md:text-[64px] font-bold text-black text-center leading-none">
          {lang === "mr" ? "देणगीसाठी तपशील" : "Donation Details"}
        </h2>
        {/* Subtitle */}
        <p className="text-[15px] md:text-[22px] text-[#4b2d18] mt-4 mb-10 text-center">
          {lang === "mr"
            ? "स्वराज्यप्रती कर्तव्याची देणगी"
            : "Donation for Swarajya"}
        </p>

        {/* Scroll Container */}
        <div className="relative w-full flex items-center justify-center h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
          {/* Rotated Scroll */}
          <div className="relative w-[340px] sm:w-[480px] md:w-[580px] lg:w-[650px] h-[620px] sm:h-[820px] md:h-[980px] lg:h-[1100px] rotate-90">
            <Image
              src="/scroll.png"
              alt="Scroll"
              fill
              priority
              className="object-fill "
            />
          </div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-6">
            <div
  className={`
    text-center
    text-white
    font-bold
    leading-[1.5]
    space-y-4
    sm:space-y-5
    md:space-y-6
    ${
      lang === "mr"
        ? "max-w-[280px] sm:max-w-[420px] md:max-w-[620px] lg:max-w-[900px]"
        : "max-w-[240px] sm:max-w-[360px] md:max-w-[520px] lg:max-w-[760px]"
    }
  `}
>
              {/* Paragraph 1 */}
              <div>
                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr" ? (
                    "मराठा साम्राज्याचा इतिहास लिहिताना हिदंवी स्वराज्याचे सरनोबत 'येसाजी कंक' हे नाव अत्यंत सन्मानाने आणि"
                  ) : (
                    <>
                      While writing the history of the Maratha Empire, the name
                      of Sarnobat 'Yesaji Kank' is
                      <br />
                      remembered with great respect and honor. Songs of his
                      bravery and valor
                    </>
                  )}
                </p>

                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr" ? (
                    "आवर्जून घेतले जाते त्यांचे शौर्य आणि पराक्रमाचे पोवाडे आजही गायले जातात."
                  ) : (
                    <>are still sung today.</>
                  )}
                </p>
              </div>

              {/* Paragraph 2 */}
              <div>
                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr" ? (
                    "सरसेनापती येसाजी कंक ट्रस्ट मार्फत दरवर्षी ऐतिहासिक, सामाजिक, सांस्कृतिक, कृषी तसेच क्रीडा क्षेत्रांमध्ये"
                  ) : (
                    <>
                      Through the Sarsenapati Yesaji Kank Trust, historical,
                      social, cultural, agricultural and sports
                    </>
                  )}
                </p>

                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr" ? (
                    "विविध उपक्रम राबवले जातात."
                  ) : (
                    <>activities are organized every year.</>
                  )}
                </p>
              </div>

              <div>
                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr" ? (
                    "येसाजी कंक यांचा गौरवशाली इतिहास व स्वराज्यातील योगदान सर्वांपर्यंत पोहोचावा या साठी कंक वाडा, भुतोंडे"
                  ) : (
                    <>
                      To spread the glorious history and contribution of Yesaji
                      Kank in Swarajya to everyone,
                      <br />
                      at Kank Wada, Bhutonde the work of building a grand
                      memorial of
                    </>
                  )}
                </p>

                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr" ? (
                    "या परिसरात 'सरनोबत येसाजी कंक' यांचे भव्य स्मारक उभे करण्याचे कार्य सुरू आहे."
                  ) : (
                    <>'Sarnobat Yesaji Kank' is underway.</>
                  )}
                </p>
              </div>

              {/* Paragraph 4 */}
              <div>
                <p className="text-[6px] sm:text-[8px] md:text-[11px] lg:text-[14px]">
                  {lang === "mr"
                    ? "या पुण्यकार्यात आपल्याला योगदान करायची इच्छा असल्यास खालील माहितीचा आधार घ्यावा."
                    : "If you wish to contribute to this noble cause, please refer to the information below."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-col items-center mt-5 md:mt-8">
          {/* Tabs */}
          <div className="flex items-center gap-10 md:gap-16">
            {/* Online Donation */}
            <button
              onClick={() => setActiveTab("donation")}
              className="
        flex
        items-center
        gap-3
      "
            >
              <div className="relative w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                <Image
                  src="/ऑनलाइन देणगी फॉर्म.svg"
                  alt="ऑनलाइन देणगी फॉर्म"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <span
                className={`
          text-[15px]
          md:text-[18px]
          font-medium
          transition
          ${activeTab === "donation" ? "text-[#000]" : "text-[#2e2417]"}
        `}
              >
                {lang === "mr" ? "ऑनलाइन देणगी फॉर्म" : "Online Donation Form"}
              </span>
            </button>

            {/* Bank Details */}
            <button
              onClick={() => setActiveTab("bank")}
              className="
        flex
        items-center
        gap-3
      "
            >
              <div className="relative w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                <Image
                  src="/बँक तपशील.svg"
                  alt="बँक तपशील"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <span
                className={`
          text-[15px]
          md:text-[18px]
          font-medium
          transition
          ${activeTab === "bank" ? "text-[#e17843]" : "text-[#2e2417]"}
        `}
              >
                {lang === "mr" ? "बँक तपशील" : "Bank Details"}
              </span>
            </button>
          </div>

          {/* Single Separate Line */}
          <div className="w-[420px] md:w-[560px] h-[1px] bg-[#3d2b1f] mt-[14px]" />
        </div>
      </section>
      {/* ================= DONATION FORM ================= */}
      {activeTab === "donation" && (
        <section className="bg-[#d8c7a8] px-4 pb-24">
          <div
            className="
      max-w-[760px]
      mx-auto
      bg-[#f7f7f7]
      rounded-[18px]
      border
      border-[#d9d9d9]
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      px-6
      md:px-14
      py-10
    "
          >
            {/* Heading */}
            <div className="text-center">
              <h2
                className="
          text-[28px]
          md:text-[36px]
          font-medium
          text-[#222]
        "
              >
                {lang === "mr" ? "देणगी फॉर्म" : "Donation Form"}
              </h2>

              <p className="text-[#555] mt-6 text-[17px]">
                {lang === "mr" ? "वैयक्तिक माहिती" : "Personal Information"}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-10">
              {/* Top Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {/* Full Name */}
                <div>
                  <label className="text-[15px] text-[#333] font-medium">
                    {lang === "mr" ? "पूर्ण नाव *" : "Full Name *"}
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={
                      lang === "mr" ? "आपले पूर्ण नाव" : "Your Full Name"
                    }
                    className="
              w-full
              mt-2
              h-[42px]
              border
              border-[#bdbdbd]
              rounded-[8px]
              px-4
              bg-transparent
              outline-none
              text-[14px]
            "
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="text-[15px] text-[#333] font-medium">
                    {lang === "mr" ? "मोबाईल क्रमांक *" : "Mobile Number *"}
                  </label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={
                      lang === "mr" ? "मोबाईल क्रमांक" : "Mobile Number"
                    }
                    className="
              w-full
              mt-2
              h-[42px]
              border
              border-[#bdbdbd]
              rounded-[8px]
              px-4
              bg-transparent
              outline-none
              text-[14px]
            "
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="text-[15px] text-[#333] font-medium">
                    {lang === "mr" ? "ईमेल आयडी *" : "Email ID *"}
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={lang === "mr" ? "ईमेल आयडी" : "Email ID"}
                    className="
              w-full
              mt-2
              h-[42px]
              border
              border-[#bdbdbd]
              rounded-[8px]
              px-4
              bg-transparent
              outline-none
              text-[14px]
            "
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="text-[15px] text-[#333] font-medium">
                    {lang === "mr" ? "पत्ता *" : "Address *"}
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder={lang === "mr" ? "पत्ता" : "Address"}
                    className="
              w-full
              mt-2
              h-[42px]
              border
              border-[#bdbdbd]
              rounded-[8px]
              px-4
              bg-transparent
              outline-none
              text-[14px]
            "
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#e5cba8] my-10"></div>

              {/* Donation Details */}
              <div className="text-center mb-10">
                <h3 className="text-[22px] text-[#333] font-medium">
                  {lang === "mr" ? "देणगी तपशील" : "Donation Details"}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {/* Amount */}
                <div>
                  <label className="text-[15px] text-[#333] font-medium">
                    {lang === "mr" ? "देणगी रक्कम ₹" : "Donation Amount ₹"}
                  </label>

                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="
              w-full
              mt-2
              h-[42px]
              border
              border-[#bdbdbd]
              rounded-[8px]
              px-4
              bg-transparent
              outline-none
              text-[14px]
            "
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label className="text-[15px] text-[#333] font-medium">
                    {lang === "mr"
                      ? "देणगीचे उद्देश (ऐच्छिक)"
                      : "Purpose of Donation (Optional)"}
                  </label>

                  <select
                    className="
              w-full
              mt-2
              h-[42px]
              border
              border-[#bdbdbd]
              rounded-[8px]
              px-4
              bg-transparent
              outline-none
              text-[14px]
            "
                  >
                    <option>{lang === "mr" ? "निवडा" : "Select"}</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div className="mt-10">
                <label className="text-[15px] text-[#333] font-medium">
                  {lang === "mr" ? "पेमेंट पद्धत *" : "Payment Method *"}
                </label>

                <div className="flex flex-col md:flex-row gap-4 mt-5">
                  {/* UPI */}
                  <label
                    className="
        flex-1
        flex
        items-center
        justify-center
        gap-2
        min-h-[48px]
        border
        border-[#f0a47d]
        rounded-[8px]
        text-[13px]
        md:text-[14px]
        text-[#444]
        cursor-pointer
        px-3
        text-center
      "
                  >
                    <input type="radio" name="paymentMethod" value="upi" />
                    {lang === "mr" ? "यूपीआय" : "UPI"}
                  </label>

                  {/* Card */}
                  <label
                    className="
        flex-1
        flex
        items-center
        justify-center
        gap-2
        min-h-[48px]
        border
        border-[#f0a47d]
        rounded-[8px]
        text-[13px]
        md:text-[14px]
        text-[#444]
        cursor-pointer
        px-3
        text-center
      "
                  >
                    <input type="radio" name="paymentMethod" value="card" />
                    {lang === "mr"
                      ? "डेबिट/क्रेडिट कार्ड"
                      : "Debit/Credit Card"}
                  </label>

                  {/* Net Banking */}
                  <label
                    className="
        flex-1
        flex
        items-center
        justify-center
        gap-2
        min-h-[48px]
        border
        border-[#f0a47d]
        rounded-[8px]
        text-[13px]
        md:text-[14px]
        text-[#444]
        cursor-pointer
        px-3
        text-center
      "
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                    />
                    {lang === "mr" ? "नेट बँकिंग" : "Net Banking"}
                  </label>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-[#e5cba8] my-10"></div>

              {/* Terms */}
              <label className="flex items-center gap-3 text-[14px] text-[#555]">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                {lang === "mr"
                  ? "दिलेली माहिती बरोबर आहे आणि ट्रस्टच्या नियमांसह सहमत आहे."
                  : "I confirm that the information provided is correct and I agree to the trust's terms and conditions."}
              </label>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-7 mt-12">
                {/* Cancel */}
                <button
                  type="button"
                  className="
      w-[120px]
      h-[44px]
      border
      border-[#444]
      rounded-[8px]
      text-[#333]
      text-[15px]
      flex
      items-center
      justify-center
      gap-2
      bg-white
    "
                >
                  {/* SVG */}
                  <div className="relative w-[18px] h-[18px]">
                    <Image
                      src="/रद्द.svg"
                      alt="रद्द"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <span>{lang === "mr" ? "रद्द" : "Cancel"}</span>
                </button>

                {/* Submit */}
                <button
                  type="submit"
                  className="
      w-[120px]
      h-[44px]
      bg-[#C05621]
      hover:bg-[#9f4b1c]
      rounded-[8px]
      text-white
      text-[15px]
      flex
      items-center
      justify-center
      gap-2
      transition
    "
                >
                  {/* SVG */}
                  <div className="relative w-[18px] h-[18px]">
                    <Image
                      src="/देणगी.svg"
                      alt="देणगी"
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>

                  <span>{lang === "mr" ? "देणगी" : "Donate"}</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* ================= BANK DETAILS CARD ================= */}
      {activeTab === "bank" && (
        <section className="bg-[#d8c7a8] px-4 pb-24">
          <div
            className="
      max-w-[760px]
      mx-auto
      bg-[#f7f7f7]
      rounded-[18px]
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      px-6
      md:px-14
      py-10
    "
          >
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[32px] font-medium text-[#222]">
                {lang === "mr" ? "बँक खाते तपशील" : "Bank Account Details"}
              </h2>

              <p className="text-[#555] mt-5 text-[17px]">
                {lang === "mr" ? "बँक खाते माहिती" : "Bank Account Information"}
              </p>
            </div>

            {/* Bank Fields */}
            <div className="mt-10 flex flex-col gap-6">
              {/* Bank Name */}
              <div>
                <label className="text-[13px] text-[#666]">
                  {lang === "mr" ? "बँक नाव / Bank Name" : "Bank Name"}
                </label>

                <div
                  className="
            mt-2
            flex
            items-center
            justify-between
            border
            border-[#cfcfcf]
            rounded-[8px]
            overflow-hidden
            bg-white
          "
                >
                  <input
                    type="text"
                    value="State Bank of India"
                    readOnly
                    className="
              w-full
              px-4
              h-[48px]
              outline-none
              text-[15px]
              bg-transparent
            "
                  />

                  <button
                    className="
              w-[99px]
              h-[36px]
              bg-[#C05621]
              hover:bg-[#9f4b1c]
              rounded-[4px]
              flex
              items-center
              justify-center
              gap-[10px]
              p-[10px]
              text-white
              text-[13px]
              font-medium
              mr-2
              transition
            "
                  >
                    {lang === "mr" ? "कॉपी करा" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Account Holder */}
              <div>
                <label className="text-[13px] text-[#666]">
                  {lang === "mr"
                    ? "खाते धारक / Account Holder"
                    : "Account Holder"}
                </label>

                <div
                  className="
            mt-2
            flex
            items-center
            justify-between
            border
            border-[#cfcfcf]
            rounded-[8px]
            overflow-hidden
            bg-white
          "
                >
                  <input
                    type="text"
                    value="Sarsenapati Yesaji Kank Trust"
                    readOnly
                    className="
              w-full
              px-4
              h-[48px]
              outline-none
              text-[15px]
              bg-transparent
            "
                  />

                  <button
                    className="
              w-[99px]
              h-[36px]
              bg-[#C05621]
              hover:bg-[#9f4b1c]
              rounded-[4px]
              flex
              items-center
              justify-center
              gap-[10px]
              p-[10px]
              text-white
              text-[13px]
              font-medium
              mr-2
              transition
            "
                  >
                    {lang === "mr" ? "कॉपी करा" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Account Number */}
              <div>
                <label className="text-[13px] text-[#666]">
                  {lang === "mr"
                    ? "खाते क्रमांक / Account Number"
                    : "Account Number"}
                </label>

                <div
                  className="
            mt-2
            flex
            items-center
            justify-between
            border
            border-[#cfcfcf]
            rounded-[8px]
            overflow-hidden
            bg-white
          "
                >
                  <input
                    type="text"
                    value="1234567890"
                    readOnly
                    className="
              w-full
              px-4
              h-[48px]
              outline-none
              text-[15px]
              bg-transparent
            "
                  />

                  <button
                    className="
              w-[99px]
              h-[36px]
              bg-[#C05621]
              hover:bg-[#9f4b1c]
              rounded-[4px]
              flex
              items-center
              justify-center
              gap-[10px]
              p-[10px]
              text-white
              text-[13px]
              font-medium
              mr-2
              transition
            "
                  >
                    {lang === "mr" ? "कॉपी करा" : "Copy"}
                  </button>
                </div>
              </div>

              {/* IFSC */}
              <div>
                <label className="text-[13px] text-[#666]">
                  {lang === "mr" ? "IFSC कोड" : "IFSC Code"}
                </label>

                <div
                  className="
            mt-2
            flex
            items-center
            justify-between
            border
            border-[#cfcfcf]
            rounded-[8px]
            overflow-hidden
            bg-white
          "
                >
                  <input
                    type="text"
                    value="SBIN0001234"
                    readOnly
                    className="
              w-full
              px-4
              h-[48px]
              outline-none
              text-[15px]
              bg-transparent
            "
                  />

                  <button
                    className="
              w-[99px]
              h-[36px]
              bg-[#C05621]
              hover:bg-[#9f4b1c]
              rounded-[4px]
              flex
              items-center
              justify-center
              gap-[10px]
              p-[10px]
              text-white
              text-[13px]
              font-medium
              mr-2
              transition
            "
                  >
                    {lang === "mr" ? "कॉपी करा" : "Copy"}
                  </button>
                </div>
              </div>

              {/* Branch */}
              <div>
                <label className="text-[13px] text-[#666]">
                  {lang === "mr" ? "शाखा" : "Branch"}
                </label>

                <div
                  className="
            mt-2
            flex
            items-center
            justify-between
            border
            border-[#cfcfcf]
            rounded-[8px]
            overflow-hidden
            bg-white
          "
                >
                  <input
                    type="text"
                    value="Bhutonde Branch"
                    readOnly
                    className="
              w-full
              px-4
              h-[48px]
              outline-none
              text-[15px]
              bg-transparent
            "
                  />

                  <button
                    className="
              w-[99px]
              h-[36px]
              bg-[#C05621]
              hover:bg-[#9f4b1c]
              rounded-[4px]
              flex
              items-center
              justify-center
              gap-[10px]
              p-[10px]
              text-white
              text-[13px]
              font-medium
              mr-2
              transition
            "
                  >
                    {lang === "mr" ? "कॉपी करा" : "Copy"}
                  </button>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div
              className="
        mt-10
        bg-[#f6dfd2]
        border-l-4
        border-[#ff6a00]
        rounded-[10px]
        px-5
        py-5
        text-[14px]
        text-[#5a4638]
      "
            >
              {lang === "mr"
                ? "तुमचे योगदान सरसेनापती येसाजी कंक यांच्या इतिहास आणि वारसा"
                : "Your donation will support the mission to preserve the history and legacy of Yesaji Kank."}
            </div>

            {/* Footer */}
            {lang === "mr"
              ? "देणगीविषयी कोणत्याही प्रश्नासाठी कृपया ट्रस्ट कार्यालयाशी संपर्क साधा"
              : "For any donation related queries, please contact the trust office."}
          </div>
        </section>
      )}
    </main>
  );
}
