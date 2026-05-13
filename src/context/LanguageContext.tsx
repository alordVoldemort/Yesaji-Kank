"use client"

import { createContext, useContext, useState,ReactNode } from "react";

type Language = "mr" | "en"

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void ; 
 fontClass: string
}
const LanguageContext  = createContext<LanguageContextType | undefined>(undefined)

export function LanguaugeProvider({children}: {children: ReactNode}) {
    const[lang, setLang] = useState<Language>("mr")
  const fontClass = lang === "mr" ? "font-devnagri" : "font-poppins";

    return (
    <LanguageContext.Provider value={{ lang, setLang,fontClass }}>
      {children}
    </LanguageContext.Provider>
  );
   
}


export function useLanguage () {
    const context = useContext(LanguageContext)
    if(!context){
        throw new Error("useLanguage must be used with a LanguageProvider")
    }
    return context 
}