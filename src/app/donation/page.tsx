"use client";

import Image from "next/image";
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
<section className="relative w-full h-[788px]">

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
  <div className="relative w-[520px] md:w-[800px] h-[200px] md:h-[380px]">

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
          देणगीसाठी तपशील
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] md:text-[22px] text-[#4b2d18] mt-4 mb-10 text-center">
          स्वराज्यप्रती कर्तव्याची देणगी
        </p>

        {/* Scroll Container */}
        <div className="relative w-full flex items-center justify-center h-[620px] overflow-hidden">
          {/* Rotated Scroll */}
          <div
            className="relative w-[650px] h-[1100px] rotate-90"
          >
            <Image
              src="/scroll.png"
              alt="Scroll"
              fill
              priority
              className="object-fill "
            />
          </div>

       {/* Text Content Image */}
<div className="absolute inset-0 flex items-center justify-center z-10">

  <div className="relative w-[560px] md:w-[700px] h-[320px] md:h-[420px]">

    <Image
      src="/मराठा साम्राज्याचा.png"
      alt="मराठा साम्राज्याचा"
      fill
      priority
      className="object-contain"
    />

  </div>

</div>

        </div>

        {/* Bottom Buttons */}
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
          ${
            activeTab === "donation"
              ? "text-[#000]"
              : "text-[#2e2417]"
          }
        `}
      >
        ऑनलाइन देणगी फॉर्म
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
          ${
            activeTab === "bank"
              ? "text-[#e17843]"
              : "text-[#2e2417]"
          }
        `}
      >
        बँक तपशील
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
        देणगी फॉर्म
      </h2>

      <p className="text-[#555] mt-6 text-[17px]">
        वैयक्तिक माहिती
      </p>

    </div>

    {/* Form */}
    <form
      onSubmit={handleSubmit}
      className="mt-10"
    >

      {/* Top Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

        {/* Full Name */}
        <div>
          <label className="text-[15px] text-[#333] font-medium">
            पूर्ण नाव *
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="आपले पूर्ण नाव"
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
            मोबाईल क्रमांक *
          </label>

          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="मोबाईल क्रमांक"
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
            ईमेल आयडी *
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ईमेल आयडी"
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
            पत्ता *
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="पत्ता"
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
          देणगी तपशील
        </h3>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

        {/* Amount */}
        <div>
          <label className="text-[15px] text-[#333] font-medium">
            देणगी रक्कम ₹
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
            देणगीचे उद्देश (ऐच्छिक)
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
            <option>निवडा</option>
          </select>
        </div>

      </div>

      {/* Payment Method */}
      <div className="mt-10">

        <label className="text-[15px] text-[#333] font-medium">
          पेमेंट पद्धत *
        </label>

        <div className="flex flex-wrap gap-5 mt-5">

          {/* UPI */}
          <label
            className="
              flex
              items-center
              justify-center
              gap-2
              w-[132px]
              h-[42px]
              border
              border-[#f0a47d]
              rounded-[8px]
              text-[14px]
              text-[#444]
              cursor-pointer
            "
          >
            <input type="radio" name="paymentMethod" value="upi" />
            Upi
          </label>

          {/* Card */}
          <label
            className="
              flex
              items-center
              justify-center
              gap-2
              w-[132px]
              h-[42px]
              border
              border-[#f0a47d]
              rounded-[8px]
              text-[14px]
              text-[#444]
              cursor-pointer
            "
          >
            <input type="radio" name="paymentMethod" value="card" />
            डेबिट/क्रेडिट कार्ड
          </label>

          {/* Net Banking */}
          <label
            className="
              flex
              items-center
              justify-center
              gap-2
              w-[132px]
              h-[42px]
              border
              border-[#f0a47d]
              rounded-[8px]
              text-[14px]
              text-[#444]
              cursor-pointer
            "
          >
            <input type="radio" name="paymentMethod" value="netbanking" />
            नेट बँकिंग
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

        दिलेली माहिती बरोबर आहे आणि ट्रस्टच्या नियमांसह सहमत आहे.

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

    <span>रद्द</span>

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

    <span>देणगी</span>

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
        बँक खाते तपशील
      </h2>

      <p className="text-[#555] mt-5 text-[17px]">
        बँक खाते माहिती
      </p>

    </div>

    {/* Bank Fields */}
    <div className="mt-10 flex flex-col gap-6">

      {/* Bank Name */}
      <div>

        <label className="text-[13px] text-[#666]">
          बँक नाव / Bank Name
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
            कॉपी करा
          </button>

        </div>

      </div>

      {/* Account Holder */}
      <div>

        <label className="text-[13px] text-[#666]">
          खाते धारक / Account Holder
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
            कॉपी करा
          </button>

        </div>

      </div>

      {/* Account Number */}
      <div>

        <label className="text-[13px] text-[#666]">
          खाते क्रमांक / Account Number
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
            कॉपी करा
          </button>

        </div>

      </div>

      {/* IFSC */}
      <div>

        <label className="text-[13px] text-[#666]">
          IFSC कोड / IFSC Code
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
            कॉपी करा
          </button>

        </div>

      </div>

      {/* Branch */}
      <div>

        <label className="text-[13px] text-[#666]">
          शाखा / Branch
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
            कॉपी करा
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
      तुमचे योगदान सरसेनापती येसाजी कंक यांच्या इतिहास
      आणि वारसा जपण्याच्या मिशनसाठी मोलाचे ठरेल
    </div>

    {/* Footer */}
    <p className="text-center text-[#777] text-[13px] mt-10">
      देणगीविषयी कोणत्याही प्रश्नासाठी कृपया ट्रस्ट कार्यालयाशी संपर्क साधा
    </p>

  </div>

</section>
)}
    </main>
  );
}
