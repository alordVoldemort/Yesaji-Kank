import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Yesaji",
  description: "Get in touch with Yesaji.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 py-24 text-white">
      <ContactSection />
    </main>
  );
}
