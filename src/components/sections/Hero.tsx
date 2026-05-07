"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroTexts } from "@/data/site-data";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroTexts.length);
        setVisible(true);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const current = heroTexts[index];

  return (
    <section className="relative flex h-screen flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* GIF background */}
      <Image
        src="/hero_vi.gif"
        alt=""
        fill
        unoptimized
        className="object-cover object-center"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 -mt-16">
        <p
          className={`${current.font} text-5xl md:text-6xl font-bold tracking-wide transition-all duration-500 ${
            visible ? "opacity-100 text-gray-950" : "opacity-0 text-white"
          }`}
        >
          {current.text}
        </p>

        <Image
          src="/yasaji.png"
          alt="Yesaji"
          width={220}
          height={220}
          className="object-contain"
          priority
        />

        <div
          className="w-120 h-[4px] rounded-full"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #f97316 40%, #ea580c 50%, #f97316 60%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
