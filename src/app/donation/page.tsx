"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
// ================= TRANSLATION OBJECT =================
const translations = {
  mr: {
    heroAlt: "देणगी",
    title: "देणगीसाठी तपशील",
    subtitle: "स्वराज्यप्रती कर्तव्याची देणगी",
    scroll: [
      { line1: "मराठा साम्राज्याचा इतिहास लिहिताना हिदंवी स्वराज्याचे सरनोबत 'येसाजी कंक' हे नाव अत्यंत सन्मानाने आणि", line2: "आवर्जून घेतले जाते त्यांचे शौर्य आणि पराक्रमाचे पोवाडे आजही गायले जातात।" },
      { line1: "सरसेनापती येसाजी कंक ट्रस्ट मार्फत दरवर्षी ऐतिहासिक, सामाजिक, सांस्कृतिक, कृषी तसेच क्रीडा क्षेत्रांमध्ये", line2: "विविध उपक्रम राबवले जातात।" },
      { line1: "येसाजी कंक यांचा गौरवशाली इतिहास व स्वराज्यातील योगदान सर्वांपर्यंत पोहोचावा या साठी कंक वाडा, भुतोंडे", line2: "या परिसरात 'सरनोबत येसाजी कंक' यांचे भव्य स्मारक उभे करण्याचे कार्य सुरू आहे।" },
      { line1: "या पुण्यकार्यात आपल्याला योगदान करायची इच्छा असल्यास खालील माहितीचा आधार घ्यावा।", line2: "" }
    ],
    onlineTab: "ऑनलाइन देणगी फॉर्म",
    bankTab: "बँक तपशील",
    formTitle: "देणगी फॉर्म",
    personalInfo: "वैयक्तिक माहिती",
    fullName: "पूर्ण नाव *",
    fullNamePlac: "आपले पूर्ण नाव",
    mobile: "मोबाईल क्रमांक *",
    mobilePlac: "मोबाईल क्रमांक",
    email: "ईमेल आयडी *",
    emailPlac: "ईमेल आयडी",
    address: "पत्ता *",
    addressPlac: "पत्ता",
    donationDetails: "देणगी तपशील",
    amount: "देणगी रक्कम ₹",
    purpose: "देणगीचे उद्देश (ऐच्छिक)",
    select: "निवडा",
    paymentMethod: "पेमेंट पद्धत *",
    upi: "यूपीआय",
    card: "डेबिट/क्रेडिट कार्ड",
    netbanking: "नेट बँकिंग",
    terms: "दिलेली माहिती बरोबर आहे आणि ट्रस्टच्या नियमांसह सहमत आहे.",
    cancel: "रद्द",
    donate: "देणगी",
    bankTitle: "बँक खाते तपशील",
    bankInfo: "बँक खाते माहिती",
    bankName: "बँक नाव / Bank Name",
    accHolder: "खाते धारक / Account Holder",
    accNo: "खाते क्रमांक / Account Number",
    ifsc: "IFSC कोड",
    branch: "शाखा",
    copy: "कॉपी करा",
    infoBox: "तुमचे योगदान सरसेनापती येसाजी कंक यांच्या इतिहास आणि वारसा",
    footer: "देणगीविषयी कोणत्याही प्रश्नासाठी कृपया ट्रस्ट कार्यालयाशी संपर्क साधा"
  },
  en: {
    heroAlt: "Donation",
    title: "Donation Details",
    subtitle: "Donation for Swarajya",
    scroll: [
      { line1: "While writing the history of the Maratha Empire, the name of Sarnobat 'Yesaji Kank' is", line2: "remembered with great respect and honor. Songs of his bravery and valor" },
      { line1: "Through the Sarsenapati Yesaji Kank Trust, historical, social, cultural, agricultural and sports", line2: "activities are organized every year." },
      { line1: "To spread the glorious history and contribution of Yesaji Kank in Swarajya to everyone,", line2: "at Kank Wada, Bhutonde the work of building a grand memorial of 'Sarnobat Yesaji Kank' is underway." },
      { line1: "If you wish to contribute to this noble cause, please refer to the information below.", line2: "" }
    ],
    onlineTab: "Online Donation Form",
    bankTab: "Bank Details",
    formTitle: "Donation Form",
    personalInfo: "Personal Information",
    fullName: "Full Name *",
    fullNamePlac: "Your Full Name",
    mobile: "Mobile Number *",
    mobilePlac: "Mobile Number",
    email: "Email ID *",
    emailPlac: "Email ID",
    address: "Address *",
    addressPlac: "Address",
    donationDetails: "Donation Details",
    amount: "Donation Amount ₹",
    purpose: "Purpose of Donation (Optional)",
    select: "Select",
    paymentMethod: "Payment Method *",
    upi: "UPI",
    card: "Debit/Credit Card",
    netbanking: "Net Banking",
    terms: "I confirm that the information provided is correct and I agree to the trust's terms and conditions.",
    cancel: "Cancel",
    donate: "Donate",
    bankTitle: "Bank Account Details",
    bankInfo: "Bank Account Information",
    bankName: "Bank Name",
    accHolder: "Account Holder",
    accNo: "Account Number",
    ifsc: "IFSC Code",
    branch: "Branch",
    copy: "Copy",
    infoBox: "Your donation will support the mission to preserve the history and legacy of Yesaji Kank.",
    footer: "For any donation related queries, please contact the trust office."
  }
};

export default function DonationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    city: "",
    amount: "1000",
    paymentMethod: "upi",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({
    fullName: "",
    mobile: "",
    email: "",
  });

  const { lang } = useLanguage();
  const t = translations[lang]; // Shortcut to the current language object

  const [activeTab, setActiveTab] = useState("donation");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    // Full Name -> only letters and spaces
    if (name === "fullName") {
      const onlyChars = value.replace(/[^A-Za-z\s]/g, "");

      setFormData((prev) => ({
        ...prev,
        fullName: onlyChars,
      }));

      return;
    }

    // Mobile -> only numbers and max 10 digits
    if (name === "mobile") {
      const onlyNums = value.replace(/\D/g, "");

      if (onlyNums.length > 10) return;

      setFormData((prev) => ({
        ...prev,
        mobile: onlyNums,
      }));

      return;
    }

    // Remaining fields
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let newErrors = {
      fullName: "",
      mobile: "",
      email: "",
    };

    // Full Name Validation (only characters and spaces)
    const nameRegex = /^[A-Za-z\s]+$/;

    if (!nameRegex.test(formData.fullName.trim())) {
      newErrors.fullName = "Name should contain only letters";
    }

    // Mobile Validation (exactly 10 digits)
    const mobileRegex = /^[0-9]{10}$/;

    if (!mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    // Email Validation (.com, .in, .net only)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|net)$/;

    if (!emailRegex.test(formData.email)) {
      newErrors.email =
        "Enter a valid email ending with .com, .in or .net";
    }

    setErrors(newErrors);

    // Stop submit if errors exist
    if (
      newErrors.fullName ||
      newErrors.mobile ||
      newErrors.email
    ) {
      return;
    }
    router.push("/donation/donation-success");
  };
  return (

    <main className=" relative w-full overflow-hidden bg-[#d8c7a8]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-[420px] sm:h-[520px] md:h-[650px] lg:h-[788px]">
        <Image src="/donation-hero.svg" alt="Donation Hero" fill priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-[#D9D9D96E]" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-[38px]">
          <div className="relative w-[260px] sm:w-[360px] md:w-[520px] lg:w-[800px] h-[120px] sm:h-[180px] md:h-[240px] lg:h-[380px]     ">
            <Image src="/donation-text.png" alt={t.heroAlt} fill className="object-contain  min-[350px]:mt-3 " priority />
          </div>
        </div>
      </section>

      {/* ================= SCROLL SECTION ================= */}
      <section className="relative bg-[#d8c7a8] py-10 md:py-16 px-4 flex flex-col items-center overflow-hidden">
        <h2 className="text-[36px] md:text-[64px] font-bold text-black text-center leading-none">{t.title}</h2>
        <p className="text-[15px] md:text-[22px] text-[#4b2d18] mt-4 mb-10 text-center">{t.subtitle}</p>

        <div className="relative w-full flex items-center justify-center h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden">
          <div className="relative w-[340px] sm:w-[480px] md:w-[580px] lg:w-[650px] h-[620px] sm:h-[820px] md:h-[980px] lg:h-[1100px] rotate-90 min-[400px]:max-[499px]:w-[340px]   min-[400px]:max-[499px]:h-[540px] ">
            <Image src="/scroll.png" alt="Scroll" fill priority className="object-fill" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center  px-6 ">
            <div className={`text-center text-white font-bold leading-[1.5] space-y-4 sm:space-y-5 md:space-y-6 ${lang === "mr" ? "max-w-[280px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[900px]" : "max-w-[240px] sm:max-w-[360px] md:max-w-[520px] lg:max-w-[760px] lg:px-15"}`}>
              {t.scroll.map((para, i) => (
                <div key={i}>
                  <p className="text-[6px] sm:text-[8px] md:text-[14px] lg:text-[14px] min-[350px]:text-[9px]">{para.line1}</p>
                  {para.line2 && <p className="text-[6px] sm:text-[8px] md:text-[14px] lg:text-[14px] min-[350px]:text-[9px]">{para.line2}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col items-center mt-5 md:mt-8">
          <div className="flex items-center gap-10 md:gap-16">
            <button onClick={() => setActiveTab("donation")} className="flex items-center gap-3">
              <div className="relative w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                <Image
                  src={activeTab === "donation" ? "/donation-orange.svg" : "/ऑनलाइन देणगी फॉर्म.svg"}
                  alt="icon"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <span className={`text-[15px] md:text-[18px] font-medium transition cursor-pointer ${activeTab === "donation" ? "text-[#e17843]" : "text-[#2e2417]"}`}>
                {t.onlineTab}
              </span>
            </button>
            <button onClick={() => setActiveTab("bank")} className="flex items-center gap-3">
              <div className="relative w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
                <Image src={activeTab === "bank" ? "/bank-orange.svg" : "/बँक तपशील.svg"} alt="icon" fill priority className="object-contain" />
              </div>

              <span className={`text-[15px] md:text-[18px] font-medium transition cursor-pointer ${activeTab === "bank" ? "text-[#e17843]" : "text-[#2e2417]"}`}>
                {t.bankTab}
              </span>
            </button>
          </div>
          <div className="w-[420px] md:w-[560px] h-[1px] bg-[#3d2b1f] mt-[14px]" />
        </div>
      </section>

      {/* ================= DONATION FORM ================= */}
      {activeTab === "donation" && (
        <section className="bg-[#d8c7a8] px-4 pb-24">
          <div className="max-w-[760px] mx-auto bg-[#f7f7f7] rounded-[18px] border border-[#d9d9d9] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-6 md:px-14 py-10">
            <div className="text-center">
              <h2 className="text-[28px] md:text-[36px] font-medium text-[#222]">{t.formTitle}</h2>
              <p className="text-[#555] mt-6 text-[17px]">{t.personalInfo}</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <label className="text-[15px] text-[#333] font-medium">{t.fullName}</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={t.fullNamePlac}
                    className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px]"
                  />

                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}              
                    </div>
                <div>
                  <label className="text-[15px] text-[#333] font-medium">{t.mobile}</label>
                  <input
                    type="number "
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder={t.mobilePlac}
                    className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px]"
                  />

                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile}
                    </p>
                  )}              
                    </div>
                <div>
                  <label className="text-[15px] text-[#333] font-medium">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlac}
                    className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px]"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </p>
                  )}                
                  </div>
                <div>
                  <label className="text-[15px] text-[#333] font-medium">{t.address}</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder={t.addressPlac} className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px]" />
                </div>
              </div>

              <div className="border-t border-[#e5cba8] my-10"></div>
              <div className="text-center mb-10"><h3 className="text-[22px] text-[#333] font-medium">{t.donationDetails}</h3></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                <div>
                  <label className="text-[15px] text-[#333] font-medium">{t.amount}</label>
                  <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px]" />
                </div>
                <div>
                  <label className="text-[15px] text-[#333] font-medium">{t.purpose}</label>
                  <select className="w-full mt-2 h-[42px] border border-[#bdbdbd] rounded-[8px] px-4 bg-transparent outline-none text-[14px]"><option>{t.select}</option></select>
                </div>
              </div>

              <div className="mt-10">
                <label className="text-[15px] text-[#333] font-medium">{t.paymentMethod}</label>
                <div className="flex flex-col md:flex-row gap-4 mt-5">
                  <label className="flex-1 flex items-center justify-center gap-2 min-h-[48px] border border-[#f0a47d] rounded-[8px] text-[13px] md:text-[14px] text-[#444] cursor-pointer px-3 text-center">
                    <input type="radio" name="paymentMethod" value="upi" /> {t.upi}
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 min-h-[48px] border border-[#f0a47d] rounded-[8px] text-[13px] md:text-[14px] text-[#444] cursor-pointer px-3 text-center">
                    <input type="radio" name="paymentMethod" value="card" /> {t.card}
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 min-h-[48px] border border-[#f0a47d] rounded-[8px] text-[13px] md:text-[14px] text-[#444] cursor-pointer px-3 text-center">
                    <input type="radio" name="paymentMethod" value="netbanking" /> {t.netbanking}
                  </label>
                </div>
              </div>

              <div className="border-t border-[#e5cba8] my-10"></div>
              <label className="flex items-center gap-3 text-[14px] text-[#555]">
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange} /> {t.terms}
              </label>

              <div className="flex items-center justify-center gap-7 mt-12">
                <button type="button" className="w-[120px] h-[44px] border border-[#444] rounded-[8px] text-[#333] text-[15px] flex items-center justify-center gap-2 bg-white">
                  <div className="relative w-[18px] h-[18px]"><Image src="/रद्द.svg" alt="icon" fill priority className="object-contain" /></div>
                  <span>{t.cancel}</span>
                </button>
                <button type="submit" className="w-[120px] h-[44px] bg-[#C05621] hover:bg-[#9f4b1c] rounded-[8px] text-white text-[15px] flex items-center justify-center gap-2 transition">
                  <div className="relative w-[18px] h-[18px]"><Image src="/देणगी.svg" alt="icon" fill priority className="object-contain" /></div>
                  <span>{t.donate}</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* ================= BANK DETAILS CARD ================= */}
      {activeTab === "bank" && (
        <section className="bg-[#d8c7a8] px-4 pb-24">
          <div className="max-w-[760px] mx-auto bg-[#f7f7f7] rounded-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-6 md:px-14 py-10">
            <div className="text-center">
              <h2 className="text-[32px] font-medium text-[#222]">{t.bankTitle}</h2>
              <p className="text-[#555] mt-5 text-[17px]">{t.bankInfo}</p>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              {[
                { label: t.bankName, value: "State Bank of India" },
                { label: t.accHolder, value: "Sarsenapati Yesaji Kank Trust" },
                { label: t.accNo, value: "1234567890" },
                { label: t.ifsc, value: "SBIN0001234" },
                { label: t.branch, value: "Bhutonde Branch" }
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="text-[13px] text-[#666]">{field.label}</label>
                  <div className="mt-2 flex items-center justify-between border border-[#cfcfcf] rounded-[8px] overflow-hidden bg-white">
                    <input type="text" value={field.value} readOnly className="w-full px-4 h-[48px] outline-none text-[15px] bg-transparent" />
                    <button className="w-[99px] h-[36px] bg-[#C05621] hover:bg-[#9f4b1c] rounded-[4px] flex items-center justify-center p-[10px] text-white text-[13px] font-medium mr-2 transition">{t.copy}</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#f6dfd2] border-l-4 border-[#ff6a00] rounded-[10px] px-5 py-5 text-[14px] text-[#5a4638]">{t.infoBox}</div>
            <div className="mt-4 text-center">{t.footer}</div>
          </div>
        </section>
      )}
    </main>
  );
}