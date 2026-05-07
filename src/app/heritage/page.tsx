import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Historical Heritage | Yesaji",
  description: "Explore the rich historical heritage of Maratha warriors.",
};

export default function HeritagePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <section className="max-w-3xl w-full space-y-8">
        <h1 className="text-5xl font-bold font-devanagari">ऐतिहासिक वारसा</h1>
        <p className="text-lg text-white/70 leading-relaxed">
          Preserving the rich legacy of Maratha warriors and their traditions.
        </p>
      </section>
    </main>
  );
}
