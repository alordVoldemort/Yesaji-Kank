import type { NavItem } from "@/types";

export const navLinks: Record<"mr" | "en", NavItem[]> = {
  mr: [
    { label: "ट्रस्ट विषयी", href: "/about" },
    { label: "ऐतिहासिक वारसा", href: "/heritage" },
    { label: "शस्त्र प्रदर्शन", href: "/weapons" },
    { label: "शिवकालीन वारसा", href: "/shivaji-era" },
    { label: "छायाचित्रे", href: "/gallery" },
    { label: "संपर्क", href: "/contact" },
  ],
  en: [
    { label: "About Trust", href: "/about" },
    { label: "Historical Heritage", href: "/heritage" },
    { label: "Weapons Exhibition", href: "/weapons" },
    { label: "Shivaji Era Heritage", href: "/shivaji-era" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};
