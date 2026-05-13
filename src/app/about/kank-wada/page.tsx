import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarnobat Yesaji Kank Wada | Sarnobat Yesaji Kank Trust",
  description: "History and significance of the Sarnobat Yesaji Kank Wada.",
};

export default function KankWadaPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        सरनोबत येसाजी कंक वाडा{" "}
        <span className="text-xl font-normal text-gray-500 ml-2">Sarnobat Yesaji Kank Wada</span>
      </h1>
      <div className="h-1 w-16 bg-orange-500 mb-8 rounded-full" />
      <p className="text-gray-600 leading-relaxed text-lg">
        {/* Add content about Kank Wada here */}
        सरनोबत येसाजी कंक वाड्याचा इतिहास आणि त्याचे महत्त्व येथे लिहा.
      </p>
    </main>
  );
}
