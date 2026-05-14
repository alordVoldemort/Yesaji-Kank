import type { Metadata } from "next";
import Image from "next/image";
import ContactSection from "@/components/sections/ContactSection";

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
        pt-2
        sm:pt-4
        md:pt-6
        pb-20
      "
      style={{
        background:
          "linear-gradient(168.07deg, #838366 2.31%, #EED5B1 50.3%, #7E868E 98.28%)",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <section
        className="
          relative
          w-full
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            relative
            w-[320px]
            sm:w-[440px]
            md:w-[620px]
            lg:w-[760px]
            h-[320px]
            sm:h-[430px]
            md:h-[560px]
            lg:h-[700px]
          "
        >
          {/* LEFT FLAG */}
          <div
            className="
              absolute
              top-[2%]
              sm:left-[10%]
              md:left-[12%]
              z-10
              w-[120px]
              sm:w-[170px]
              md:w-[240px]
              lg:w-[300px]
              h-[170px]
              sm:h-[240px]
              md:h-[340px]
              lg:h-[420px]
            "
          >
            <Image
              src="/flag.png"
              alt="Left Flag"
              fill
              priority
              className="object-contain rotate-[-8deg]"
            />
          </div>

          {/* RIGHT FLAG */}
          <div
            className="
              absolute
              top-[2%]
              right-[8%]
              sm:right-[10%]
              md:right-[12%]
              z-10
              w-[120px]
              sm:w-[170px]
              md:w-[240px]
              lg:w-[300px]
              h-[170px]
              sm:h-[240px]
              md:h-[340px]
              lg:h-[420px]
            "
          >
            <Image
              src="/flag.png"
              alt="Right Flag"
              fill
              priority
              className="object-contain scale-x-[-1] rotate-[8deg]"
            />
          </div>

          {/* CONTACT TEXT */}
          <div
            className="
              absolute
              top-[34%]
              sm:top-[34%]
              md:top-[35%]
              left-1/2
              -translate-x-1/2
              z-20
              w-[170px]
              sm:w-[250px]
              md:w-[380px]
              lg:w-[520px]
              h-[60px]
              sm:h-[90px]
              md:h-[130px]
              lg:h-[180px]
            "
          >
            <Image
              src="/contact-text.png"
              alt="Contact Text"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* SHIELD */}
          <div
            className="
              absolute
              bottom-[6%]
              sm:bottom-[5%]
              md:bottom-[4%]
              left-1/2
              -translate-x-1/2
              z-20
              w-[90px]
              sm:w-[130px]
              md:w-[180px]
              lg:w-[240px]
              h-[90px]
              sm:h-[130px]
              md:h-[180px]
              lg:h-[240px]
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
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <div
        className="
          relative
          z-20
          w-full
          max-w-[1200px]
          mt-2
          sm:mt-4
          md:mt-6
        "
      >
        <ContactSection />
      </div>
    </main>
  );
}