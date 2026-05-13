import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Yesaji Kank | Sarnobat Yesaji Kank Trust",
  description: "The life and story of Sarnobat Yesaji Kank.",
};

export default function YesajiKankPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        येसाजी कंक बद्दल <span className="text-xl font-normal text-gray-500 ml-2">About Yesaji Kank</span>
      </h1>
      <div className="h-1 w-16 bg-orange-500 mb-8 rounded-full" />
      <p className="text-gray-600 leading-relaxed text-lg">
        {/* Add content about Yesaji Kank here */}
        सरनोबत येसाजी कंक यांच्याबद्दल माहिती येथे लिहा.
      </p>
    </main>
  );
}
