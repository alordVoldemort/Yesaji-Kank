import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kank Family | Sarnobat Yesaji Kank Trust",
  description: "Learn about the historic Kank family and their legacy.",
};

export default function KankFamilyPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        कंक घराणे <span className="text-xl font-normal text-gray-500 ml-2">Kank Family</span>
      </h1>
      <div className="h-1 w-16 bg-orange-500 mb-8 rounded-full" />
      <p className="text-gray-600 leading-relaxed text-lg">
        {/* Add content about Kank family here */}
        कंक घराण्याचा इतिहास आणि त्यांचे योगदान येथे लिहा.
      </p>
    </main>
  );
}
