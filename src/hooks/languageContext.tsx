"use client";
import React, { createContext, useState, useContext, useMemo, useEffect, use } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export enum Language {
    EN_US,
    PT_BR
}

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  languageMap: Map<Language, string>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};

export const LanguageContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [language, setLanguage] = useState(Language.EN_US);
    const languageMap = new Map<Language, string>([
      [Language.EN_US, "en-us"],
      [Language.PT_BR, "pt-br"],
    ]);

    const languageReverseMap = new Map<string, Language>([
      ["en-us", Language.EN_US],
      ["pt-br", Language.PT_BR],
    ]);

    const languageSetter = (language: Language) => {
      localStorage.setItem("language", languageMap.get(language)!);
      setLanguage(language);
    };

    const languageContextMemo: LanguageContextType = useMemo(
    () => ({
        'language': language,
        'setLanguage': languageSetter,
        'languageMap': languageMap,
    }),
    [language, setLanguage, languageMap]);


    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        const treatedSavedLanguage = (savedLanguage === null || savedLanguage === "" || savedLanguage === undefined) ? "system" : savedLanguage;
        if(savedLanguage === null|| savedLanguage === "")
            localStorage.setItem("language", "en-us");
        setLanguage(languageReverseMap.get(treatedSavedLanguage)!);
    }, [setLanguage, languageMap]);

    return (
        <LanguageContext.Provider value={languageContextMemo}>
            {children}
        </LanguageContext.Provider>
    );
};